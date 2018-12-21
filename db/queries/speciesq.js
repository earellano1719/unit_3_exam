const {db} = require('./index');

const getAllSpecies = (req, res, next) => {
    db.any('SELECT * FROM species')
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "all the species",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const getSingleSpecies = (req, res, next) => {
    let speciesId = parseInt(req.params.id)
    db.one('SELECT * FROM species WHERE id=$1', speciesId)
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "a single species",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const newSpecies = (req, res, next) => {
    db.none('INSERT INTO species(name, is_mammal) VALUES (${name}, ${is_mammal})', req.body)
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "added a new species"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

module.exports = { getAllSpecies, getSingleSpecies, newSpecies }