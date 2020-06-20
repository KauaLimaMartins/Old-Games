import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function truncate(): Promise<void> {
  await prisma.queryRaw('TRUNCATE users CASCADE');
}

export default truncate;
