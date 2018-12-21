const {db} = require('./index');

const getAllResearchers = (req, res, next) => {
    db.any('SELECT * FROM researchers')
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            body: response,
            message: "all the researchers" 
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const getSingleResearcher = (req, res, next) => {
    let userId = parseInt(req.params.id)
    db.one('SELECT * FROM researchers WHERE id=$1', userId)
    .then((response) => {
        res.status(200)
        .json({
            status: "success",
            body: response,
            message: "single user"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const addResearcher = (req, res, next) => {
    db.none('INSERT INTO researchers(name, job_title) VALUES (${name}, ${job_title})', req.body)
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "added a new user!"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const updateResearcher = (req, res, next) => {
    db.none('UPDATE researchers SET name = ${name}, job_title = ${job_title} WHERE id = ${id}', {
        id: parseInt(req.params.id),
        name: req.body.name,
        job_title: req.body.job_title
    })
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "updated user"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const deleteResearcher = (req, res, next) => {
    let userId = parseInt(req.params.id)
    db.none('DELETE FROM researchers WHERE id=$1', userId)
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "you've deleted an user"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

module.exports = { getAllResearchers, getSingleResearcher, addResearcher, updateResearcher, deleteResearcher }