import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
const router = Router();
import { validateRegisterInput, validateLoginInput } from "../middleware/validationMiddleware.js";
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5,
  message: { msg: "IP rate limit exceeded, retry in 5 minutes." },
});

router.post("/register", apiLimiter, validateRegisterInput, register);
router.post("/login", apiLimiter, validateLoginInput, login);
router.get("/logout", logout);

export default router;