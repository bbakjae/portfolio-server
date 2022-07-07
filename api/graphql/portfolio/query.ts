import { queryField } from "nexus";
import { prisma } from "../../context";

export const introduceMySelf = queryField("introduceMySelf", {
    type: "MyInfo",
    resolve: async (src, args, ctx, info) => {
        try {
            const info = await prisma.introdution.findFirst();

            return {
                ...info,
            };
        } catch (e) {
            throw console.error(e);
        }
    },
});
