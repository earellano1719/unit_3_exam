const {db} = require('./index');

const allSightings = (req, res, next) => {
    db.any('SELECT * FROM sightings')
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "all sightings",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const speciesSighting = (req, res, next) => {
    let speciesId = parseInt(req.params.id)
    db.any('SELECT * FROM sightings WHERE species_id=$1', speciesId)
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "species sightings",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const researcherSightings = (req, res, next) => {
    let userId = parseInt(req.params.id);
    db.any('SELECT * FROM sightings WHERE researcher_id=$1', userId)
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "researcher sightings",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const habitatSightings = (req, res, next) => {
    let habitatId = parseInt(req.params.id);
    db.any('SELECT * FROM sightings WHERE habitat_id=$1', habitatId)
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "habitat sightings",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const addSighting = (req, res, next) => {
    db.none('INSERT INTO sightings(researcher_id, species_id, habitat_id) VALUES (${researcher_id}, ${species_id}, ${habitat_id})', req.body)
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "added a new sighting"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const deleteSighting = (req, res, next) => {
    let sightingId = parseInt(req.params.id)
    db.result('DELETE FROM sightings WHERE id=$1', sightingId)
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "sighting deleted"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

module.exports = {allSightings, speciesSighting, researcherSightings, habitatSightings, addSighting, deleteSighting}