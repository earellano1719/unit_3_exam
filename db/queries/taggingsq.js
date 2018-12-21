const {db} = require('./index');

const allTaggings = (req, res, next) => {
    db.any('SELECT * FROM taggings')
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "all taggings",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const singleTagging = (req, res, next) => {
    let tagId = parseInt(req.params.id)
    db.any('SELECT * FROM taggings WHERE id=$1', tagId)
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "single tag",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const researcherTagging = (req, res, next) => {
    let userId = parseInt(req.params.id)
    db.any('SELECT * FROM taggings WHERE researcher_id=$1', userId)
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "tags from researcher",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const animalTaggings = (req, res, next) => {
    let animalId = parseInt(req.params.id)
    db.any('SELECT * FROM taggings WHERE animal_id=$1', animalId)
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "animal tags",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const newTagging = (req, res, next) => {
    db.none('INSERT INTO taggings(animal_id, researcher_id) VALUES (${animal_id}, ${researcher_id})', req.body)
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "added new tagging"
        })
    })
    .catch((err) => {
        return next(err)
    })
}


module.exports = {allTaggings, singleTagging, researcherTagging, animalTaggings, newTagging}