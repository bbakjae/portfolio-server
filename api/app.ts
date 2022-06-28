import { config } from "dotenv";
config();

import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import express from "express";
import * as HTTP from "http";
import { join } from "path";
import { githubCallbackHandler } from "./github";

const apollo = new ApolloServer({
    schema: schema,
    debug: true,
});

const PORT = process.env.PORT || "3000";

const app = express();
app.use(express.json({ limit: "100mb" }));
const http = HTTP.createServer(app);
app.use(express.static(join(__dirname, "static")));

if (process.env.GITHUB_WEBHOOK_SECRET && process.env.GITHUB_WEBHOOK_BRANCH_NAME) {
    console.log(`Github Webhook ready at http://localhost:${PORT}/github_webhook`);
    app.route("/github_webhook*").post((req, res) => githubCallbackHandler(req, res));
}

(async () => {
    await apollo.start();
    apollo.applyMiddleware({ app });
    http.listen(PORT, () => {
        console.log(`🚀 GraphQL service ready at http://localhost:${PORT}/graphql`);
    });
})();
