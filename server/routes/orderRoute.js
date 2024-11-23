import express from "express";
import {
  placeOrder,
  placeOrderStrip,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// payment feature
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStrip);
// orderRouter.post("/razorPay", authUser, placeRazorpay);

// User feature
orderRouter.post("/userorders", authUser, userOrders);
// verify
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
