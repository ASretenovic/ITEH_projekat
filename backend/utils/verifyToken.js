import jwt from 'jsonwebtoken'

const verifyTokenAdmin = (req, res, next)=>{

    const token = req.cookies.accessToken;

    if(!token){
        return res.status(401).json({success:false, message:"You're not authorized"});

    }

    //if token exists, then verify it

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
        if(err){
            return res.status(401).json({success:false, message:"Token is invalid"});
        }

        req.user = user;
        if(req.user.role === 'admin'){
        } else {
            return res.status(401).json({success:false, message:"You're not authorized"})
        }
        next(); //don't forget to call the next
    })
}

const verifyTokenUser = (req, res, next)=>{

    const token = req.cookies.accessToken;

    if(!token){
        return res.status(401).json({success:false, message:"You're not authorized"});

    }

    //if token exists, then verify it

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
        if(err){
            return res.status(401).json({success:false, message:"Token is invalid"});
        }

        req.user = user;
        if(req.user.role === 'user'){
        } else {
            return res.status(401).json({success:false, message:"You're not authorized"})
        }
        next(); //don't forget to call the next
    })
}

export const verifyAdmin = (req, res, next)=>{
    verifyTokenAdmin(req, res, next, ()=>{
        if(req.user.role === 'admin'){
            next();
        } else {
            return res.status(401).json({success:false, message:"You're not authorized"})
        }
    });
}


export const verifyUser = (req, res, next)=>{
    verifyTokenUser(req, res, next, ()=>{
        if(req.user.id === req.params.id || 
            req.user.role === 'admin') {
                next();
            } else {
                return res.status(401).json({success:false, message:"You're not authenticated"})
            }
    });
}