import { FileUpload } from "./types"

import type { Context } from "./types"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Introduction: { // root type
    description: string; // String!
    name: string; // String!
    nickname: string; // String!
  }
  Project: { // root type
    content: string; // String!
    id: number; // Int!
    title: string; // String!
  }
  Query: {};
  businessItem: { // root type
    description: string; // String!
    title: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Introduction: { // field return type
    birth: string; // String!
    businessItems: NexusGenRootTypes['businessItem'] | null; // businessItem
    description: string; // String!
    language: string[]; // [String!]!
    name: string; // String!
    nickname: string; // String!
    projects: NexusGenRootTypes['Project'][]; // [Project!]!
    techStack: string[]; // [String!]!
  }
  Project: { // field return type
    content: string; // String!
    endAt: string; // String!
    id: number; // Int!
    part: string[]; // [String!]!
    startAt: string; // String!
    techStack: string[]; // [String!]!
    title: string; // String!
  }
  Query: { // field return type
    getProjects: NexusGenRootTypes['Project'][]; // [Project!]!
    introduceMySelf: NexusGenRootTypes['Introduction'] | null; // Introduction
  }
  businessItem: { // field return type
    description: string; // String!
    title: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Introduction: { // field return type name
    birth: 'String'
    businessItems: 'businessItem'
    description: 'String'
    language: 'String'
    name: 'String'
    nickname: 'String'
    projects: 'Project'
    techStack: 'String'
  }
  Project: { // field return type name
    content: 'String'
    endAt: 'String'
    id: 'Int'
    part: 'String'
    startAt: 'String'
    techStack: 'String'
    title: 'String'
  }
  Query: { // field return type name
    getProjects: 'Project'
    introduceMySelf: 'Introduction'
  }
  businessItem: { // field return type name
    description: 'String'
    title: 'String'
  }
}

export interface NexusGenArgTypes {
  Introduction: {
    businessItems: { // args
      password?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}