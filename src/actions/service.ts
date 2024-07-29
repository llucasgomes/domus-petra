'use server'

import { db } from '@/lib/prisma'

export async function GETServices() {
  const services = await db.service.findMany()
  console.log(services)
  return services
}
export async function GETPalestras() {
  const palestras = await db.service.findMany({
    where: {
      category: 'PALESTRAS' // Certifique-se de que este valor corresponde ao que você usa no banco de dados
    },
    include: {
      user: true // Inclui os dados do usuário relacionado, se necessário
    }
  })
  return palestras
}
export async function GETConsultorias() {
  const consultoria = await db.service.findMany({
    where: {
      category: 'CONSULTORIAS' // Certifique-se de que este valor corresponde ao que você usa no banco de dados
    },
    include: {
      user: true // Inclui os dados do usuário relacionado, se necessário
    }
  })
  return consultoria
}
export async function GETTreinamentos() {
  const treinamentos = await db.service.findMany({
    where: {
      category: 'TREINAMENTOS' // Certifique-se de que este valor corresponde ao que você usa no banco de dados
    },
    include: {
      user: true // Inclui os dados do usuário relacionado, se necessário
    }
  })
  return treinamentos
}
export async function GETServiceSingle(serviceId: string) {
  const service = await db.service.findUnique({
    where: {
      id: serviceId
    },
    include: {
      user: true
    }
  })
  return service
}
