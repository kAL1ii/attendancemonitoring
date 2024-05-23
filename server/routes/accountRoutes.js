import express from 'express';
import { getAllAccounts, saveAccounts, getAccountById } from '../controllers/accountController.js';

const router = express.Router();

router.post('/', saveAccounts)
router.get('/', getAllAccounts)
router.get('/:accountID', getAccountById);


export default router;