const express = require('express');
const router = express.Router();
const {getAllHabitats, singleHabitat, newHabitat} = require('../db/queries/habitatsq');

router.get("/", getAllHabitats);
router.get("/:id", singleHabitat);
router.post("/", newHabitat);

module.exports = router