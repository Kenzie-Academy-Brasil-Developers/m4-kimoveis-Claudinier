import { z } from 'zod'
import { address, addressRegister } from './address.schemas'
import { categorySchema } from './category.schemas'

const realEstateSchema = z.object({
    id: z.number(),
    value: z.number().default(0),
    size: z.number().positive("Number must be greater than 0"),
    address: address,
    category: categorySchema,
    sold: z.boolean().default(false),
    createdAt: z.string().nullish(),
    updatedAt: z.string().nullish(),
})
const realEstatewithoutCategoryAndAddressSchema = realEstateSchema.omit({
    address:true,
    category:true
});

const realEstateSchemaRegister = z.object({
    id: z.number(),
    value: z.number().default(0).or(z.string()),
    size: z.number().positive("Number must be greater than 0"),
    address: addressRegister,
    categoryId: z.number(),
    sold: z.boolean().default(false),
    createdAt: z.string().nullish(),
    updatedAt: z.string().nullish(),
})

const listRealEstateSchema = z.array(realEstateSchema)

const realEstateSchemaRequest = realEstateSchemaRegister.omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
})

export {
    realEstateSchema,
    realEstateSchemaRequest,
    listRealEstateSchema,
    realEstatewithoutCategoryAndAddressSchema
}