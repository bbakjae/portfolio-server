import { format } from "date-fns";
import { objectType } from "nexus";
import { prisma } from "../../context";


export const Project = objectType({
    name: "Project",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("title");
        t.nonNull.string("content");
        t.nonNull.list.nonNull.string("part", {
            resolve: async (src, args, ctx, info) => {
                try {
                    if (src.part) return JSON.parse(src.part);
                } catch (e) {
                    return [];
                }
            }
        });
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
        t.nonNull.string("startAt", {
            resolve: async (src, args, ctx, info) => {
                try {
                    return format(src.startAt as Date, "yyyy년 MM월 dd일");
                } catch (e) {
                    return "";
                }
            }
        });
        t.nonNull.string("endAt", {
            resolve: async (src, args, ctx, info) => {
                try {
                    return format(src.endAt as Date, "yyyy년 MM월 dd일");
                } catch (e) {
                    return "";
                }
            }
        });
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
