import page from "./page-schema";
import project from "./project-schema";

// to organize, all the schema will be imported here and then we will pass this to sanity.config.ts file
const schemas = [project, page];

export default schemas;
