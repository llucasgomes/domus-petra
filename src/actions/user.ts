// 'use server'

// import { db } from '@/lib/prisma'

// export async function GETUsers() {
//   const users = await db.user.findMany()
//   return users
// }
// export async function UPDATEUser(userId: string, newRole: string) {
//   try {
//     await db.user.update({
//       where: { id: userId },
//       data: { role: newRole }
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// export async function GETUserSingle(userEmail: string) {
//   const user = await db.user.findUnique({
//     where: {
//       email: userEmail
//     }
//   })
//   return user
// }
