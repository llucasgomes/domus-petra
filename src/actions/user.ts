'use server'

import { db } from '@/lib/prisma'

export async function GETUsers() {
	try {
		const users = await db.user.findMany()
		return users ?? []
	} catch (error) {
		console.error('Error fetching users:', error)
		return []
	}
}

export async function UPDATEUser(userId: string, newRole: string) {
	try {
		await db.user.update({
			where: { id: userId },
			data: { role: newRole }
		})
	} catch (error) {
		console.error('Error updating user:', error)
	}
}

export async function GETUserSingle(userEmail: string) {
	try {
		const user = await db.user.findUnique({
			where: {
				email: userEmail
			}
		})
		return user
	} catch (error) {
		console.error('Error fetching user single:', error)
		return null
	}
}
