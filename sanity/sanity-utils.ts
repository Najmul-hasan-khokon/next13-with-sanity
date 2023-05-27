import { Project } from "@/types/Project";
import { groq } from "next-sanity";
import { sanityClient, sanityGroq } from "./SanityClient";
import { Page } from "@/types/Page";

// get all the projects here
export async function getProjects(): Promise<Project[]> {
   // fetch data from sanity using groq and return the client
   return sanityClient.fetch(
      groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
   );
}

// get single project here
export async function getProject(slug: string): Promise<Project> {
   // fetch data from sanity using groq and return the client
   return sanityClient.fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         url,
         content
     }`,
      { slug }
   );
}

// pages
export async function getPages(): Promise<Page[]> {
   return sanityClient.fetch(
      groq`*[_type == 'page']{
         _id,
         _createdAt,
         title,
         "slug": slug.current,
      
      } `
   );
}

export async function getPage(slug: string): Promise<Page> {
   return sanityClient.fetch(
      groq`*[_type == 'page' && slug.current == $slug][0]{
         _id,
         _createdAt,
         title,
         "slug": slug.current,
         content
      } `,
      { slug }
   );
}
