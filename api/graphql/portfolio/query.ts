import { list, nonNull, queryField } from "nexus";
import { prisma } from "../../context";

export const introduceMySelf = queryField("introduceMySelf", {
    type: "Introduction",
    resolve: async (src, args, ctx, info) => {
        try {
            const info = await prisma.introdution.findFirst();
            if (!info) return null;

            return info;
        } catch (e) {
            throw console.error(e);
        }
    },
});

export const getProjects = queryField("getProjects", {
    type: nonNull(list(nonNull("Project"))),
    resolve: async (src, args, ctx, info) => {
        try {
            const projects = await prisma.project.findMany();
            return projects;
        } catch (e) {
            return [];
        }
    }
});