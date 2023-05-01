import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'k13i75el',
  dataset: 'production',
  apiVersion: '2023-04-28',
  useCdn: true,
  token: 'skNeHiImGOzWjeYHI3d4JjDZSMjAcwHyBvVZAYPwG20UcFqpVAgXfESsyY40dyhoKdxSGgHUqsRfgqbDS3d0rBnrtXaEhPRcvYgQnavqMR9fSJXIqMUlGTkuD4ZXgfY4i5raG3PsDSUUWhnICpfonVeIolxqrfT9LU3crIvq5wVhWfqdnpfs'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);