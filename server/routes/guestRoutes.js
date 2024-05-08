import express from 'express';
import {
    getAllGuest,
    getGuestById,
    saveGuest,
    updateGuest,
    deleteGuest
} from '../controllers/guestContoller.js';

const router = express.Router();

router.get('/', getAllGuest);
router.get('/:id', getGuestById);
router.post('/', saveGuest);
router.patch('/:id', updateGuest);
router.delete('/:id', deleteGuest);

export default router;

