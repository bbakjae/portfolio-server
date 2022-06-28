import { PrismaClient } from "@prisma/client";
import { Token } from "graphql";

export { FileUpload } from "graphql-upload";

export interface Context {
    prisma: PrismaClient;
    req: Request;
    // connection?: ExecutionParams;
    res: Response;
    // pubsub: PubSub;
    token: Token | null;
    tokenString: string | null;
}
