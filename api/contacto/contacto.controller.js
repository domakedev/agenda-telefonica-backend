//const SetContacto = require("./community.services");

let FakeData = [
  {
    id: 1,
    name: "Arturo Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Don Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
];

const contactoHandler = async (req, res) => {
  try {
    res.status(200).json(FakeData);
  } catch (error) {
    console.log(error);
  }
};

const pageHandler = async (req, res) => {
  const time = new Date();
  const counter = FakeData.length;
  const page = `
        <h1>Phonebook has info for ${counter} people</h1>
        <br/>
        <p>${time}</p>
    `;

  try {
    res.status(200).send(page);
  } catch (error) {
    console.log(error);
  }
};

const obtenerContactoHandler = async (req, res) => {
  const id = Number(req.params.id);
  const contactoFiltered = [...FakeData].filter((c) => c.id === id);

  if (!contactoFiltered.length) {
    return res.status(404).send("404: Contacto no encontrado");
  }

  try {
    res.status(200).send(contactoFiltered);
  } catch (error) {
    console.log(error);
  }
};

const eliminarContactoHandler = async (req, res) => {
  const id = Number(req.params.id);
  const contactoFiltered = [...FakeData].filter((c) => c.id !== id);

  try {
    res.status(200).send(contactoFiltered);
  } catch (error) {
    console.log(error);
  }
};

const crearContactoHandler = async (req, res) => {
  const body = req.body
    const {name, number} = body
    body.id = (Math.random()*1000000000000000).toFixed(0)

  if (!name || !number) {
     return res.status(409).send("El formato de tu usuario no es el correcto");
  }

  const existeContacto = FakeData.find(c => c.name === name);
  console.log("dasdsadasdasd",existeContacto);
  if (existeContacto) {
    return res.status(409).send("El nombre de usuario ya existe");
  }

  try {
    FakeData.push(body)
    res.status(200).send(FakeData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  contactoHandler,
  pageHandler,
  obtenerContactoHandler,
  eliminarContactoHandler,
  crearContactoHandler
};
