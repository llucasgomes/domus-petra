'use server'

import { db } from '@/lib/prisma'
import type { User } from '@prisma/client'

const fallbackUsers: User[] = [
	{
		id: 'user-1',
		name: 'Lucas Gomes',
		email: 'lucas.gomes.manaus@gmail.com',
		role: 'admin',
		emailVerified: null,
		image: '/noperson.png',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: 'user-2',
		name: 'Amanda Spitzner',
		email: 'amanda.spitzner@gmail.com',
		role: 'admin',
		emailVerified: null,
		image: '/noperson.png',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		id: 'user-3',
		name: 'Fabiano Dell’Agnolo',
		email: 'contato@domuspetra.com.br',
		role: 'admin',
		emailVerified: null,
		image: '/fabiano/fabiano.jpg',
		createdAt: new Date(),
		updatedAt: new Date()
	}
]

export async function GETUsers(): Promise<User[]> {
	try {
		const users = await db.user.findMany()
		return users && users.length > 0 ? users : fallbackUsers
	} catch (error) {
		console.error('Error fetching users, using fallback:', error)
		return fallbackUsers
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
