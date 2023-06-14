const authorModel = require('../models/authorModel');

const getAuthorsList = async() => {
    return await authorModel.getAuthorsList();
};

const getAuthor = (id) => {
    return authorModel.getOneAuthor(id);
};

const addAuthor = async(data) => {
    await authorModel.addAuthor(data);
};

const updateAuthor = (data) => {
    authorModel.updateAuthor(data);
};

module.exports.getAuthor = getAuthor;
module.exports.getAuthorsList = getAuthorsList;
module.exports.addAuthor = addAuthor;
module.exports.updateAuthor = updateAuthor;