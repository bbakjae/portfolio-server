import { objectType } from "nexus";

export const MyInfo = objectType({
    name: "MyInfo",
    definition(t) {
        t.nonNull.string("name");
        t.nonNull.string("description");
    },
});
