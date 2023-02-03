import User from '../models/User.js'
import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//user registration

export const register = async(req, res)=>{

    try {

        //hashing password
        const salt = bycrypt.genSaltSync(10);
        const hash = bycrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        });

        await newUser.save();

        res.status(200).json({success: true, message: "Successfully registered the user"});
        
    } catch (err) {
        res.status(200).json({success: false, message: "Failed to register the user. Try again"});
    }
}


//user login
export const login = async(req, res)=>{

    const email = req.body.email;
    try {

        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({success:false, message: "Not found"});
        }

        //if the user exists then check password

        const checkCorrectPassword = await bycrypt.compare(req.body.password, user.password);
        if(!checkCorrectPassword){
            return res.status(401).json({success:false, message:"Incorrect email or password. Try again"});

        }

        const {password, role, ...rest} = user._doc

        //create jwt token
        const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {expiresIn: "30d"});
        
        //set token in the browser cookies and send the response to the client

        res.cookie('accessToken', token, {
            httpOnly:true,
            expires: token.expiresIn
        }).status(200).json({token, data: { ...rest}, role});

    } catch (err) {
        res.status(500).json({success:false, message:"Failed to login. Try again"});
    }
}