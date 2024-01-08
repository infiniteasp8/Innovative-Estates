import express from 'express';
import { createListing,deleteListing,updateListing,getListings } from '../controller/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();

router.post('/create',verifyToken ,createListing);
router.delete('/delete/:id',verifyToken ,deleteListing);
router.post('/update/:id',verifyToken ,updateListing);
router.post('/get/:id',getListings);
export default router;