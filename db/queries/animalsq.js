const {db} = require('./index');

const getAllAnimals = (req, res, next) => {
    db.any('SELECT * FROM animals')
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "all the animals",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const getSingleAnimal = (req, res, next) => {
    let animalId = parseInt(req.params.id);
    db.one('SELECT * FROM animals WHERE id=$1', animalId)
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            message: "single animal",
            body: response
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const addAnimal= (req, res, next) => {
    db.none('INSERT INTO animals(species_id, nickname) VALUES (${species_id}, ${nickname})', req.body)
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "added new animal"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const updateAnimal = (req, res, next) => {
    db.none('UPDATE animals SET species_id = ${species_id}, nickname = ${nickname} WHERE id = ${id}', {
        id: parseInt(req.params.id),
        species_id: req.body.species_id,
        nickname: req.body.nickname
    })
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "updated animal"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const deleteAnimal = (req, res, next) => {
    let animalId = parseInt(req.params.id)
    db.result('DELETE FROM animals WHERE id=$1', animalId)
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "removed animal"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

module.exports = { getAllAnimals, getSingleAnimal, addAnimal, updateAnimal, deleteAnimal }