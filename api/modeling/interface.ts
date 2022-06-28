import { NullValueNode } from "graphql";

interface StringFilterOrigin {
    contains?: string | null;
    endsWith?: string | null;
    equals?: string | null;
    gt?: string | null;
    gte?: string | null;
    in?: string[] | null;
    lt?: string | null;
    lte?: string | null;
    notIn?: string[] | null;
    startsWith?: string | null;
}

export interface StringFilter extends StringFilterOrigin {
    not?: StringFilter | NullValueNode;
}

interface EnumFilterOrigin {
    equals?: any | null;
    in?: any[] | null;
    notIn?: any[] | null;
}

export interface EnumFilter extends EnumFilterOrigin {
    not?: EnumFilter | null;
}

interface IntFilterOrigin {
    equals?: number | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | null;
    lte?: number | null;
    gt?: number | null;
    gte?: number | null;
}

export interface IntFilter extends IntFilterOrigin {
    not?: IntFilterOrigin | null;
}
