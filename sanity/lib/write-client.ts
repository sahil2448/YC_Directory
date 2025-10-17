
import "server-only"

import { apiVersion, dataset, projectId ,token} from '../env'
import { createClient } from "next-sanity"

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token
}) 

if(!writeClient.config().token){
    throw new Error('Write client not found !')
}