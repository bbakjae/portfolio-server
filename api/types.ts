import { PrismaClient } from "@prisma/client";
import { IJWTTokenType } from "./context";

export { FileUpload } from "graphql-upload";

export interface Context {
    prisma: PrismaClient;
    // req: Request;
    // connection?: ExecutionParams;
    // res: Response;
    // pubsub: PubSub;
    token: IJWTTokenType | null;
    tokenString: string | null;
}
