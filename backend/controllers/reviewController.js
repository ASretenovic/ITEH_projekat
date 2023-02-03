import Tour from "../models/Tour.js"
import Review from "../models/Review.js"




export const createReview = async(req, res)=>{

    const tourId = req.params.tourId;
    const newReview = new Review({... req.body});
    try {
        const savedReview = await newReview.save();

        //after creating a new review, update reviews array of the tour
        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews:savedReview._id}
        });

        return res.status(200).json({success:true, message:'Review successfully submitted',
    data:savedReview});
    } catch (err) {
        return res.status(500).json({success:false, message:'Failed to submit the review. Try again'});
    }
}