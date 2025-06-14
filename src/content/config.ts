// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      draft: z.boolean(),
      highlight: z.boolean().optional(),
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

// const albums = defineCollection({
//   type: "data",
//   schema: ({ image }) =>
//     z.object({
//       title: z.string(),
//       description: z.string().optional(),
//       cover: image(),
//     }),
// });

const images = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      date: z.date(),
      description: z.string().optional(),
      image: image(),
      alt: z.string().optional(),
    }),
});


// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  media: images,
};