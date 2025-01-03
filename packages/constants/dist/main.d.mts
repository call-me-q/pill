declare const RolesEnum: {
    readonly STAFF: "staff";
    readonly MANAGEMENT: "management";
    readonly BEHOLDER: "beholder";
    readonly CUSTOMER: "customer";
};

declare const authModels: Record<string, {
    modelName: string;
}>;

export { RolesEnum, authModels };
