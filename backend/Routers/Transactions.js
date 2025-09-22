import express from 'express';
import { addTransactionController, deleteTransactionController, getAllTransactionController, updateTransactionController } from '../controllers/transactionController.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Create a rate limiter: 100 requests per 15 minutes per IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

router.route("/addTransaction").post(limiter, addTransactionController);

router.route("/getTransaction").post(getAllTransactionController);

router.route("/deleteTransaction/:id").post(limiter, deleteTransactionController);

router.route('/updateTransaction/:id').put(updateTransactionController);

export default router;