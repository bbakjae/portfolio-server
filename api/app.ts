import { config } from "dotenv";
config();

import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import express from "express";
import * as HTTP from "http";
import { join } from "path";

const apollo = new ApolloServer({
  schema: schema,
  debug: true,
});

const app = express();
app.use(express.json({ limit: "100mb" }));
const http = HTTP.createServer(app);
app.use(express.static(join(__dirname, "static")));

const PORT = 3000;
(async () => {
  await apollo.start();
  apollo.applyMiddleware({ app });
  http.listen(PORT, () => {
    console.log(`🚀 GraphQL service ready at http://localhost:${PORT}/graphql`);
  });
})();
