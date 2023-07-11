//Wird benötigt, weil Prisma ein paar Probleme mit Next hat -> Hier macht man quasi ein Singleton, sonst würde es mehrere Prisma Clients geben mit NextJS
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma