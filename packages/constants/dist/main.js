"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  RolesEnum: () => RolesEnum,
  authModels: () => authModels
});
module.exports = __toCommonJS(main_exports);

// src/enums.ts
var RolesEnum = {
  STAFF: "staff",
  MANAGEMENT: "management",
  BEHOLDER: "beholder",
  CUSTOMER: "customer"
};

// src/models.ts
var modelNames = [
  "organization",
  "invitation",
  "member",
  "user",
  "session",
  "verification",
  "account"
];
var genAuthModels = (array) => {
  return array.reduce(
    (acc, name) => {
      acc[name] = { modelName: `${name}s` };
      return acc;
    },
    {}
  );
};
var authModels = genAuthModels(modelNames);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RolesEnum,
  authModels
});
