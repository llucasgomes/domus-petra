'use server'

import { fallbackServices } from '@/lib/data'
import { db } from '@/lib/prisma'
import type { Service } from '@prisma/client'

export async function GETServices(): Promise<Service[]> {
	try {
		const services = await db.service.findMany()
		if (services && services.length > 0) {
			return services
		}
	} catch (error) {
		console.error('Error fetching services from DB, using fallback:', error)
	}
	return fallbackServices
}

export async function GETPalestras(): Promise<Service[]> {
	try {
		const palestras = await db.service.findMany({
			where: {
				category: 'PALESTRAS'
			},
			include: {
				user: true
			}
		})
		if (palestras && palestras.length > 0) {
			return palestras
		}
	} catch (error) {
		console.error('Error fetching palestras from DB, using fallback:', error)
	}
	return fallbackServices.filter(s => s.category === 'PALESTRAS')
}

export async function GETConsultorias(): Promise<Service[]> {
	try {
		const consultoria = await db.service.findMany({
			where: {
				category: 'CONSULTORIAS'
			},
			include: {
				user: true
			}
		})
		if (consultoria && consultoria.length > 0) {
			return consultoria
		}
	} catch (error) {
		console.error('Error fetching consultorias from DB, using fallback:', error)
	}
	return fallbackServices.filter(s => s.category === 'CONSULTORIAS')
}

export async function GETTreinamentos(): Promise<Service[]> {
	try {
		const treinamentos = await db.service.findMany({
			where: {
				category: 'TREINAMENTOS'
			},
			include: {
				user: true
			}
		})
		if (treinamentos && treinamentos.length > 0) {
			return treinamentos
		}
	} catch (error) {
		console.error('Error fetching treinamentos from DB, using fallback:', error)
	}
	return fallbackServices.filter(s => s.category === 'TREINAMENTOS')
}

export async function GETServiceSingle(serviceId: string): Promise<Service | null> {
	try {
		const service = await db.service.findUnique({
			where: {
				id: serviceId
			},
			include: {
				user: true
			}
		})
		if (service) {
			return service
		}
	} catch (error) {
		console.error('Error fetching service from DB, checking fallback:', error)
	}

	const fallback = fallbackServices.find(s => s.id === serviceId)
	return fallback || null
}
