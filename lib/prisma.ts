import { PrismaClient } from "./generated/prisma";

// Create a PrismaClient instance
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Extend the global object for TypeScript
declare global {
  // This must be inside a module, so the declaration is scoped
  var prismaGlobal: PrismaClient | undefined;
}

// Check if we're in development or production
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
