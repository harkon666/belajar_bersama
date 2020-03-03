const Controller = require("./controller");
const { auth } = require("./auth");

module.exports = function(app) {
  app.post("/register", Controller.register);
  app.get("/tiket", Controller.showTiket);
  app.post("/order", auth, Controller.createOrder);
  app.get("/order", auth, Controller.showOrder);
  app.put("/order", auth, Controller.updateOrder);
  app.delete("/order/:tiket_id", auth, Controller.destroyOrder);
  app.put("/saldo", auth, Controller.updateSaldo);
  app.get("/thisCustomer", auth, Controller.thisCustomer);
};
