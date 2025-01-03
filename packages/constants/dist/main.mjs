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
export {
  RolesEnum,
  authModels
};
