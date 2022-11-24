import { PrismaClient } from "@prisma/client";
import { TicketRequestDto } from "../interface/ticketRequestDto";
import { TicketResponseDto } from "../interface/ticketResponseDto";
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

//* 유저 예매 티켓 조회
const getUserTicket = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      user_id: userId
    }
  });

  if (!user) {
    return 404;
  }

  const ticketResponseDto: TicketResponseDto[] = [];

  const tickets = await prisma.user_ticket.findMany({
    where: {
      user_id: userId
    }
  });

  const promises = tickets.map(async (userTicket) => {
    const ticket = await prisma.ticket.findUnique({
      where: {
        tikcet_id: userTicket.ticket_id
      }
    });

    if (ticket) {
      const startDate = ticket.date;
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 7);

      const data: TicketResponseDto = {
        ticketId: ticket.tikcet_id,
        startDate: startDate,
        endDate: endDate,
        name: user.name,
        gender: user.gender,
        birth: user.birth,
        ticketNum: userTicket.ticket_num,
        currentDate: new Date()
      }

      ticketResponseDto.push(data);
    }
  });
  await Promise.all(promises);

  return ticketResponseDto;
}


// header에 jwt 토큰을 담는다면 여러 사용자가 있는 실제 서비스를 감안한 코드 가능.
// 메인 화면 조회
const getTicket = async () => {
  const data = await prisma.ticket.findMany();
  return data[0];
};


const ticketService = {
  getTicket,
  createTicket,
  getUserTicket
};

export default ticketService;
