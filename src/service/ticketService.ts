import { PrismaClient } from "@prisma/client";
import { TicketRequestDto } from "../interface/ticketRequestDto";
const prisma = new PrismaClient();

//* 예매 티켓 저장
const createTicket = async (ticketRequestDto: TicketRequestDto) => {
  const data = await prisma.user_ticket.create({
    data: {
      user_id: ticketRequestDto.userId,
      ticket_id: ticketRequestDto.ticketId,
      seat: ticketRequestDto.seat,
      cabin: ticketRequestDto.cabin,
      ticket_num: "82211-0827-10827-87"
    }
  });

  return data;
};

export default {
  createTicket,
}