import express from 'express';
import {
    getAllParent,
    getParentById,
    saveParent,
    updateParent,
    deleteParent
} from '../controllers/parentCotroller.js';

const router = express.Router();

router.get('/', getAllParent);
router.get('/:id', getParentById);
router.post('/', saveParent);
router.patch('/:id', updateParent);
router.delete('/:id', deleteParent);

export default router;