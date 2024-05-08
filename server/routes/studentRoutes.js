import express from 'express';
import {
    getAllStudent,
    getStudentById,
    saveStudent,
    updateStudent,
    deleteStudent
} from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getAllStudent);
router.get('/:id', getStudentById);
router.post('/', saveStudent);
router.patch('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;