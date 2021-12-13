const express = require("express");
const router = express.Router();

//Handlers
const { 
    contactoHandler,
    pageHandler,
    obtenerContactoHandler,
    eliminarContactoHandler,
    crearContactoHandler
} = require("./contacto.controller");

//Rutas internas
router.get("/api/persons", contactoHandler);
router.post("/api/persons", crearContactoHandler);
router.get("/api/persons/:id", obtenerContactoHandler);
router.delete("/api/persons/:id", eliminarContactoHandler);
router.get("/info", pageHandler);


module.exports = router;
