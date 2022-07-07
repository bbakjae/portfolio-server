import { PrismaClient } from "@prisma/client";
import { IJWTTokenType } from "./context";

export { FileUpload } from "graphql-upload";

export interface Context {
    prisma: PrismaClient;
    token: IJWTTokenType | null;
    tokenString: string | null;
}
