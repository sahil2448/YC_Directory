import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation ---> if it's true , then the data can be cached for 1 minuets...that means if any data is changed in sanity dashboard it will take 1 minuets to reflect the changes on the frontend
}) 
