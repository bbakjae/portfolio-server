import { PrismaClient } from "@prisma/client";
import { arg, list, nonNull, queryField } from "nexus";

const prisma = new PrismaClient();

const selectUsers = queryField("selectUsers", {
    type: nonNull(list(nonNull("User"))),
    args: {},
    resolve: async (src, args, ctx, info) => {
        try {
        } catch (e) {
            throw console.error(e);
        }
    },
});
