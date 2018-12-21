const express = require('express');
const router = express.Router();
const {allTaggings, singleTagging, researcherTagging, animalTaggings, newTagging} = require('../db/queries/taggingsq');

router.get("/", allTaggings);
router.get("/:id", singleTagging);
router.get("/researchers/:id", researcherTagging);
router.get("/animals/:id", animalTaggings);
router.post("/", newTagging);

module.exports = router