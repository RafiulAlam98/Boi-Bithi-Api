import { z } from 'zod'

const createZodSchema = z.object({
  body: z.object({
    bookId: z.string({
      required_error: 'Book Id is required',
    }),
    review: z.string({
      required_error: 'Review is required',
    }),
  }),
})

export const ReviewValidation = {
  createZodSchema,
}
