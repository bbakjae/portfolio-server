import { ExpressContext } from "apollo-server-express";
import { verify } from "jsonwebtoken";
import { Context } from "./types";
import { PrismaClient } from "@prisma/client";

export type IJWTTokenType = {
    userId?: number;
};

export const prisma = new PrismaClient();

const APP_SECRET = process.env.APP_SECRET!;

export const createContext = async (ctx: ExpressContext): Promise<Context> => {
    let token: IJWTTokenType | null = null;
    // const tokenExpirationInfo: ITokenExpirationInfo = {};
    let tokenString: string | null = null;
    try {
        let authorization = "";
        authorization = ctx.req.get("Authorization") ?? "";
        if (!authorization.startsWith("Bearer ")) authorization = "";

        tokenString = authorization !== "" ? authorization.replace("Bearer ", "") : null;
        let verifiedToken: IJWTTokenType | null = null;
        if (tokenString) {
            verifiedToken = verify(tokenString, APP_SECRET) as IJWTTokenType;
            token = verifiedToken;
        }
    } catch (e) {
        token = null;
    }
    return {
        // req: ctx.req,
        // res: ctx.res,
        prisma,
        token,
        tokenString,
    } as Context;
};
