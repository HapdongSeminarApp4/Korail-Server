import { Request, Response } from "express";
import { TicketRequestDto } from "../interface/ticketRequestDto";
import ticketService from "../service/ticketService";

/**
 * @route POST /api/ticket
 * @desc 예매 승차권 저장
 * @access Public
 */
const createTicket = async (req: Request, res: Response) => {
  const ticketRequestDto: TicketRequestDto = req.body;

  if (!ticketRequestDto.userId || !ticketRequestDto.ticketId || !ticketRequestDto.seat || !ticketRequestDto.cabin) {
    return res.status(400).json({ status: 400, message: "잘못된 입력값" });
  }

  const data = await ticketService.createTicket(ticketRequestDto);

  if (!data) {
    return res.status(404).json({ status: 404, message: "예매 티켓 저장 실패" });
  }

  return res.status(200).json({ status: 200, message: "예매 티켓 저장 성공", data });
};

export default {
  createTicket
}