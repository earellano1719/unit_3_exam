const express = require('express');
const router = express.Router();
const {allSightings, speciesSighting, researcherSightings, habitatSightings, addSighting, deleteSighting} = require('../db/queries/sightingsq');

router.get("/", allSightings);
router.get("/species/:id", speciesSighting);
router.get("/researchers/:id", researcherSightings);
router.get("/habitats/:id", habitatSightings);
router.post("/", addSighting);
router.delete("/:id", deleteSighting);

module.exports = router