const getAllTenants = async () => {
  try {
    let tenants = await allTenants.getAll();
    res.status(200).send(tenants);
  } catch (err) {
    return res.status(500).send("ISE!");
  }
};

module.exports = {
  getAllTenants,
};
