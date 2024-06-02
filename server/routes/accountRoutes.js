import express from 'express'
import { createFormResponse, getAccounts} from '../controllers/formresponseController.js'
const router = express.Router();

router.get('/', getAccounts);
router.post('/', createFormResponse);

export default router