import { QueryResolvers } from '@sprightly/types'
import { RootContext } from 'modules/context'

export const Query: QueryResolvers = {
  dates: async (_, __, { prisma }: RootContext) => {
    const dates = await prisma.calendar.findMany()
    return dates
  },
  date: async (_, __, { prisma }: RootContext) => {
    const date = await prisma.calendar.findFirst({
      where: {
        day_id: new Date().toISOString().substring(0, 10),
      },
    })
    return date
  },
}
