import { Router } from "express";
import ticketController from "../controller/ticketController";

const router: Router = Router();

router.post("/", ticketController.createTicket);

export default router;