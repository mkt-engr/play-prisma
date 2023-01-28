import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();
async function main() {
  const time01 = await prisma.batchExecutionTime01.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
    },
  });
  const time02 = await prisma.batchExecutionTime01.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
    },
  });
  console.table({ time01, time02 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
