import express from 'express'
import { createTour, updateTour, deleteTour, getTour, getAllTour, getTourBySearch, getTourCount, getFeaturedTours } from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()


//create new tour 
router.post("/",verifyAdmin,createTour);

//update  tour 
router.put("/:id",verifyAdmin, updateTour);

//delete tour 
router.delete("/:id",verifyAdmin, deleteTour);

//get single tour 
router.get("/:id", getTour);

//get all tours 
router.get("/", getAllTour);

//get tours by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTours);
router.get("/search/getTourCount", getTourCount);



export default router;

