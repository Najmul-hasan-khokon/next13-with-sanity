import { createClient, groq } from "next-sanity";

// cleate a client configuration to fetch data
export const sanityClient = createClient({
   projectId: "9ns09mk9",
   dataset: "production",
   apiVersion: "2023-03-04",
   useCdn: false,
});

// groq query
export const sanityGroq = groq;
