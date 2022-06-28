import { makeSchema } from "nexus";
import {} from "nexus-prisma";
import { join } from "path";
import * as modelType from "./graphql";

const schema = makeSchema({
  types: [modelType],
  sourceTypes: {
    modules: [{ module: join(__dirname, `types.ts`), alias: "upload" }],
    headers: ['import { FileUpload } from "./types"'],
  },
  outputs: {
    typegen: join(__dirname, "typegen.ts"),
    schema: join(__dirname, "schema.graphql"),
  },
  contextType: { module: join(__dirname, "types.ts"), export: "Context" },
  plugins: [],
});

export default schema;
