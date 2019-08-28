const db = require('../data/dbconfig');

module.exports = {
    find,
    findById,
    findStepByIds,
    findSteps,
    add,
    remove
};

function find() {
    return db('schemes').join('steps');
}
//not working
function findById(id) {
    return db('schemes').where({ id }).first();
}

function findStepByIds(id) {
    return db('steps').where({id})
}

//not working
function findSteps(id) {
    return db('steps').where({ id })

}

function add(scheme) {
    return db('schemes').insert(scheme)
        .then(id => {
            return findbyId(id[0]);
    })
}

function remove(id) {
    return db('schemes').where({ id }).del();
}