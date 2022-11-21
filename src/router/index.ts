import { Router } from "express";
import ticketRouter from "./ticketRouter";

const router: Router = Router();

router.use("/ticket", ticketRouter);

export default router;
