// import endpoints (api)
const contacto = require("./api/contacto");

// Defining routes
const routes = (app) => {
  //Login and register
  app.use("/", contacto);

 
};

module.exports = routes;
