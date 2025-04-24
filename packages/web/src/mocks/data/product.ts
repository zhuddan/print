import type { Product } from '~/api/types/product'
import { fakerZH_CN as faker } from '@faker-js/faker'

export const products = Array.from({
  length: 6,
}, (_, index) => {
  const item: Product = {
    cover: faker.image.urlLoremFlickr({ category: 'food' }),
    title: faker.commerce.product(),
    subtitle: faker.commerce.productDescription(),
    time: faker.date.birthdate().toLocaleDateString().replace(/\//g, '-'),
    id: index + 10000,
    images: Array.from({ length: 3 }).map((_, id) => {
      return {
        url: faker.image.urlLoremFlickr({ category: 'food' }),
        id,
      }
    }),
  }
  return item
})
