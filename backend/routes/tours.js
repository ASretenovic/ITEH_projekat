import express from 'express'
import { createTour, updateTour, deleteTour, getTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount } from '../controllers/tourController.js'


const router = express.Router()


//create new tour 
router.post("/",createTour);

//update  tour 
router.put("/:id", updateTour);

//delete tour 
router.delete("/:id", deleteTour);

//get single tour 
router.get("/:id", getTour);

//get all tours 
router.get("/", getAllTour);

//get tours by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);



export default router;

