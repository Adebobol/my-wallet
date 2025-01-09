import { PrismaClient } from "@prisma/client";
import { connect } from "http2";

const prisma = new PrismaClient();

async function connectDatabase() {
  try {
    await prisma.$disconnect();
    // console.log(`Database connect on port ${} `)
    console.log("Database connected.");
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

export { prisma, connectDatabase };
