import { queryField } from "nexus";
import { prisma } from "../../context";

export const introduceMySelf = queryField("introduceMySelf", {
    type: "MyInfo",
    resolve: async (src, args, ctx, info) => {
        try {
            return {};
        } catch (e) {
            throw console.error(e);
        }
    },
});
