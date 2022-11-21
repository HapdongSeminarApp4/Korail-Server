import { Router } from "express";
import { ticketController } from "../controller";

const router: Router = Router();

// 특정 티켓 조회 - GET /ticket/:userId/:ticketId
router.get("/:userId/:ticketId", ticketController.getTicketById);
// ticket?keyword=장한빛 -> 이런게 쿼리

// 전체 티켓 조회 - GET /ticket
router.get("/", ticketController.getAllTicket);
export default router;
