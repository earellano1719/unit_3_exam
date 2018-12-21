const express = require('express');
const router = express.Router();
const {getAllSpecies, getSingleSpecies, newSpecies} = require('../db/queries/speciesq');

router.get("/", getAllSpecies);
router.get("/:id", getSingleSpecies);
router.post("/", newSpecies)

module.exports = router