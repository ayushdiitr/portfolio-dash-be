import "dotenv/config"

import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../../generated/prisma/client.js"

const DB_STR=process.env.DATABASE_URL

const adapter = new PrismaPg({connectionString: DB_STR})

const prisma = new PrismaClient({adapter})

export {prisma}