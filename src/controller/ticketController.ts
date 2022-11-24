import { Request, Response } from "express";
import { ticketService } from "../service";

// 메인 화면 조회
const getTicket = async (req: Request, res: Response) => {
  const data = await ticketService.getTicket();
  return res
    .status(200)
    .json({ status: 200, message: "메인 페이지 조회 성공- 전체 티켓", data });
};

const ticketController = {
  getTicket,
};

export default ticketController;
