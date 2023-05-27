import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

// sanity configuration
const config = defineConfig({
   projectId: "9ns09mk9",
   dataset: "production",
   title: "my personal website",
   apiVersion: "2023-03-04",

   basePath: "/admin",
   plugins: [deskTool()],

   // all schema need to put here
   // the structure will look like that.
   // schema: {types:[{projectSchema},{blogSchema},{portfolioSchema}]}
   // as schemas is an array of object so we put here
   schema: { types: schemas },
});

export default config;
