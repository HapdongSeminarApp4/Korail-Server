import { Request, Response } from "express";
import { ticketService } from "../service";

// 전체 티켓 조회
const getAllTicket = async (req: Request, res: Response) => {
  const data = await ticketService.getAllTicket();
  return res
    .status(200)
    .json({ status: 200, message: "메인 페이지 조회 성공- 전체 티켓", data });
};

// 특정 유저 티켓 조회
const getTicketById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { ticketId } = req.params;

  const data = await ticketService.getTicketById(+userId, +ticketId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res
    .status(200)
    .json({
      status: 200,
      message: "메인 페이지 조회 성공 - 특정 유저 티켓",
      data,
    });
};

const ticketController = {
  getAllTicket,
  getTicketById,
};

export default ticketController;
