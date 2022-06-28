import {} from "nexus";
import { NexusTypes } from "nexus/dist/core";
import { NexusGenFieldTypes } from "../typegen";

type objType<T extends keyof NexusGenFieldTypes> = NexusGenFieldTypes[T];

export const getWhereInput = (objectName: keyof NexusGenFieldTypes) => {
    let obj: { [key in keyof NexusGenFieldTypes[typeof objectName]]: string } = {
        id: "qwe",
    };

    console.log(JSON.stringify(obj));
};
