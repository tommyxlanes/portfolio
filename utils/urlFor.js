import { client } from './sanity.client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export default (source) => {
    return builder.image(source)
}