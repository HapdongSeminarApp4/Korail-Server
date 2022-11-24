import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// header에 jwt 토큰을 담는다면 여러 사용자가 있는 실제 서비스를 감안한 코드 가능.
// 메인 화면 조회
const getTicket = async () => {
  const data = await prisma.ticket.findMany();
  return data[0];
};

const ticketService = {
  getTicket,
};

export default ticketService;
