import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'




export const client =  createClient({
    projectId: 'xk7lco1d',
    dataset: 'production',
    useCdn: false,
    token: process.env.REACT_APP_CLIENT_SECRET
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
