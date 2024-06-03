import express from 'express'
import { createFormResponse, getAccounts} from '../controllers/formresponseController.js'
const router = express.Router();

router.get("/", function(req, res) {
    res.status(200).send("Working");
})
router.get('/accounts', getAccounts);
router.post('/accounts', createFormResponse);

export default router