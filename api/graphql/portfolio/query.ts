import { queryField } from "nexus";

const introduceMySelf = queryField("introduceMySelf", {
    type: "MyInfo",
    resolve: async (src, args, ctx, info) => {
        try {
            return {
                name: "박재현",
                description: "소통하는 개발자",
            };
        } catch (e) {
            throw console.error(e);
        }
    },
});
