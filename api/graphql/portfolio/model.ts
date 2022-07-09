import { format } from "date-fns";
import { objectType, stringArg } from "nexus";
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
                    return [];
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

export const Introduction = objectType({
    name: "Introduction",
    definition(t) {
        t.nonNull.string("name");
        t.nonNull.string("description");
        t.nonNull.string("nickname");
        t.nonNull.string("birth", {
            resolve: async (src, args, ctx, info) => {
                try {
                    return format(src.birth as Date, "yyyy년 MM월 dd일");

                } catch (e) {
                    return "";
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
        t.nonNull.list.nonNull.string("language", {
            resolve: async (src, args, ctx, info) => {
                try {
                    if (src.language) return JSON.parse(src.language);
                    return [];
                } catch (e) {
                    throw [];
                }
            },
        });
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
        t.field("businessItems", {
            type: "businessItem",
            args: {
                password: stringArg()
            },
            resolve: async (src, args, ctx, info) => {
                try {
                    const wrongAnswer = {
                        title: "비밀입니다.",
                        description: "password를 입력해주세요."
                    };
                    if (!args.password) return wrongAnswer;
                    if (process.env.ITEM_PASSWORD === args.password) return {
                        title: process.env.ITEM_TITLE,
                        description: process.env.ITEM_DESCRIPTION
                    };
                    return wrongAnswer;
                } catch (e) {
                    return null;
                }
            }
        });
    },
});


export const tbusinessItem = objectType({
    description: "사업 아이템",
    name: "businessItem",
    definition(t) {
        t.nonNull.string("title");
        t.nonNull.string("description");
    }
});