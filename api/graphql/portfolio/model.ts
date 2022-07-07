import { objectType } from "nexus";
import { prisma } from "../../context";

export const Project = objectType({
    name: "Project",
    definition(t) {
        t.nonNull.string("title");
        t.nonNull.string("description");
        t.nonNull.list.nonNull.string("techStack", {
            resolve: async (src, args, ctx, info) => {
                try {
                    if (src.techStack) return JSON.parse(src.techStack);
                    return [];
                } catch (e) {
                    throw [];
                }
            },
        });
        t.nonNull.list.nonNull.string("part");
    },
});

export const MyInfo = objectType({
    name: "MyInfo",
    definition(t) {
        t.nonNull.string("name");
        t.nonNull.string("description");
        t.nonNull.list.nonNull.string("availableLanguage");
        t.nonNull.list.nonNull.field("projects", {
            type: "Project",
            resolve: async (src, args, ctx, info) => {
                try {
                    const res = await prisma.project.findMany();
                    return res;
                } catch (e) {
                    throw console.error(e);
                }
            },
        });
    },
});
