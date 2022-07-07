import { objectType } from "nexus";

export const Project = objectType({
    name: "Project",
    definition(t) {
        t.nonNull.string("title");
        t.nonNull.string("description");
        t.nonNull.list.nonNull.string("techStack");
        t.nonNull.list.nonNull.string("part");
    },
});

export const MyInfo = objectType({
    name: "MyInfo",
    definition(t) {
        t.nonNull.string("name");
        t.nonNull.string("description");
        t.nonNull.list.nonNull.string("availableLanguage");
        t.nonNull.list.nonNull.field("projects", { type: "Project" });
    },
});
