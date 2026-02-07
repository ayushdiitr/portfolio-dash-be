import "dotenv/config"

import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client/extension"

const DB_STR=process.env.DATABASE_URL

const adapter = new PrismaPg({connectionString: DB_STR})

const prisma = new PrismaClient({adapter})

export {prisma}