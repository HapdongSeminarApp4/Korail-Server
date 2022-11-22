import { Router } from "express";
import userRouter from "./userRouter";
import ticketRouter from "./ticketRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/ticket", ticketRouter);

export default router;
