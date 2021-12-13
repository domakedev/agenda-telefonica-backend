const express = require('express');
const ExpressConfig = require('./config/express');
const routes = require('./routes')

//Express
const app = express();
ExpressConfig(app);

//PORT
const PORT = 3001;


//------ Listen Server---------
app.listen(PORT, () => {

// Routes
    routes(app);

    console.log(`Server listen on http://localhost:${PORT}`);
});


module.exports = app;
