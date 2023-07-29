import { Schema, model } from 'mongoose'
import { BookModel, IBooks } from './books.interface'

const BookSchema = new Schema<IBooks>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    review: {
      type: Schema.Types.ObjectId,
      ref: 'Riviews',
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Books = model<IBooks, BookModel>('Books', BookSchema)
