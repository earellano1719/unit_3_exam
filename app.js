const express = require('express');
const app = express();
const port = 3000;
const bp = require('body-parser');
app.use(bp.urlencoded({ extended:false }));
app.use(bp.json());
const animals = require("./routes/animals");
const habitats = require("./routes/habitats");
const researchers = require("./routes/researchers");
const sightings = require("./routes/sightings");
const species = require("./routes/species");
const taggings = require("./routes/taggings");

app.use("/animals", animals);
app.use("/habitats", habitats);
app.use("/researchers", researchers);
app.use("/sightings", sightings);
app.use("/species", species);
app.use("/taggings", taggings);

app.get("/", (req, res) => {
    res.send("Homepage")
})
app.get("*", (req, res) => {
    res.status(404)
    .send("Error. invalid input")
})




app.listen(port, () => {
    console.log(`Port ${port}`)
})