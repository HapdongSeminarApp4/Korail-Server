import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// header에 jwt 토큰을 담는다면 여러 사용자가 있는 실제 서비스를 감안한 코드 가능.
// 티켓 전체 조회
const getAllTicket = async () => {
  const data = await prisma.ticket.findMany();
  return data;
};

// ticketID로 티켓 조회
const getTicketById = async (userId: number, ticketId: number) => {
  console.log(userId);

  const ticket = await prisma.user_ticket.findUnique({
    where: {
      user_ticket_id: ticketId,
    },
  });

  if (!ticket) {
    return null;
  }

  const result = await prisma.ticket.findUnique({
    where: {
      ticket_id: ticket.ticket_id,
    },
  });

  const data = {
    ticket_id: result?.ticket_id,
    from: result?.from,
    to: result?.to,
    date: result?.date,
  };

  return data;
};

const ticketService = {
  getAllTicket,
  getTicketById,
};

export default ticketService;
