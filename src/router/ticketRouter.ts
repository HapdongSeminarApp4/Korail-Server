import { Router } from "express";
import ticketController from "../controller/ticketController";

const router: Router = Router();

router.post("/", ticketController.createTicket);
router.get("/user/:userId", ticketController.getUserTicket);

export default router;