import { Router } from "express";
import ticketController from "../controller/ticketController";

const router: Router = Router();

router.post("/", ticketController.createTicket);
router.get("/user/:userId", ticketController.getUserTicket);
router.get("/", ticketController.getTicket);  // 메인 화면 조회 - GET /api/ticket

export default router;
