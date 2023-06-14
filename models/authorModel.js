const mongoose = require('mongoose');
const genreModel = require('./genreModel');

const { Schema } = mongoose;

const authorSchema = new Schema({
    authorName: {type: String, min: 3},
    genre: {type: Schema.Types.ObjectId, ref: 'genre'}
});

const getAuthorsList = async() => {
    return await model.find({});
};

const getOneAuthor = (id) => {
    return authorsList.find(item => item.id === id);
};

const addAuthor = async (data) => {
    await model.create(data);
}

const updateAuthor = async(data) => {
    await model.findByIdAndUpdate(data._id, data);
};

const model = mongoose.model('author', authorSchema);


module.exports.authorModel = model;
module.exports.getOneAuthor = getOneAuthor;
module.exports.getAuthorsList = getAuthorsList;
module.exports.addAuthor = addAuthor;
module.exports.updateAuthor = updateAuthor;