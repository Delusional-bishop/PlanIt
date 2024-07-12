import { z } from "zod"

export const eventformSchema = z.object({
    title:z.string().min(3,'Title must be atleast 3 characters'),
    description:z.string().min(3,'Description must be atleast 3 characters').max(400,'Description must be at max 400 characters'),
    location:z.string().min(3,'location must be atleast 3 characters').max(400,'Location must be at max 400 characters'),
    imageUrl:z.string(),
    startDateTime:z.date(),
    endDateTime:z.date(),
    categoryId:z.string(),
    price:z.string(),
    isFree:z.boolean(),
    url:z.string().url(),

  })
  