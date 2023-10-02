import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

// import { prisma } from '@/prisma/client'
export const authOptions: NextAuthOptions = {
  // ...other options,
  providers: [
    // Remove the CredentialsProvider block if you don't need it
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('User', user, account, profile, email, credentials)
      return true
    },
    session: ({ session, token }) => {
      console.log('token ', token)
      if (token && session?.user) {
        // @ts-ignore
        session.user.uid = token.sub
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }
      // @ts-ignore
      session.test = 'hi'
      console.log('🚀 ~ file: auth.ts:41 ~ session:', session)
      return session
    },
  },
  pages: {
    signIn: '/signin',
  },
  // ...other options
}
