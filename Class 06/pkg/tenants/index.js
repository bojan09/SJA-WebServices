import mongoose from "mongoose";

const tenant = mongoose.model({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const tenantsModel = async () => {
  const tenantA = await tenant.create({
    name: "Steve",
    email: "Steve@McQeen.com",
    password: "secret1",
  });
  const tenantB = await tenant.create({
    name: "Bill",
    email: "Bill@Weathers.com",
    password: "secret2",
  });
  const tenantC = await tenant.create({
    name: "Jeff",
    email: "Jeff@Nippard.com",
    password: "secret3",
  });
};

module.exports = {
  tenants,
  tenantsModel,
};
