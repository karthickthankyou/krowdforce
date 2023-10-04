import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import jwt from 'jsonwebtoken'
import { JWT } from 'next-auth/jwt'

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

  jwt: {
    async encode({ token, secret, maxAge }): Promise<string> {
      // Create a JWT using the jsonwebtoken library
      if (!token) {
        throw new Error('Token is undefined')
      }

      const jwtToken = jwt.sign(token, secret, {
        algorithm: 'HS256',
      })
      return jwtToken
    },
    async decode({ token, secret }): Promise<JWT | null> {
      if (!token) {
        throw new Error('Token is undefined')
      }
      try {
        const decodedToken = jwt.verify(token, secret, {
          algorithms: ['HS256'],
        })
        return decodedToken as JWT
      } catch (error) {
        console.error('JWT decode error', error)
        return null
      }
    },
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user = {
          image: token.picture,
          uid: (token.sub as string) || '',
          email: token.email,
          name: token.name,
        }
      }
      return session
    },
  },

  pages: {
    signIn: '/signin',
  },
}
