import { prismaDB } from '@/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  adapter: PrismaAdapter(prismaDB) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
