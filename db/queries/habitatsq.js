const {db} = require('./index');

const getAllHabitats = (req, res, next) => {
    db.any('SELECT * FROM habitats')
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "all the habitats",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const singleHabitat = (req, res, next) => {
    let habitatId = parseInt(req.params.id)
    db.one('SELECT * FROM habitats WHERE id=$1', habitatId)
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "single habitat",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const newHabitat = (req, res, next) => {
    db.none('INSERT INTO habitats(category) VALUES (${category})', req.body)
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "added new habitat"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

module.exports = { getAllHabitats, singleHabitat, newHabitat }