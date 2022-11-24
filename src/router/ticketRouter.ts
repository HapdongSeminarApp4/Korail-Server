import { Router } from "express";
import { ticketController } from "../controller";

const router: Router = Router();

// 메인 화면 조회 - GET /ticket
router.get("/", ticketController.getTicket);
export default router;
