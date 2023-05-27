import { PortableText } from "@portabletext/react";
import { getPage } from "../../../../sanity/sanity-utils";

type paramsProps = {
   params: { slug: string };
};

// get page content
export default async function Page({ params }: paramsProps) {
   const slug = params.slug;
   const page = await getPage(slug);

   console.log(page);
   return (
      <div>
         <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold ">
            {page?.title}
         </h1>
         <div className="text-lg text-gray-700 mt-10">
            <PortableText value={page?.content} />
         </div>
      </div>
   );
}
