const mongoose = require('mongoose');
const authorMode = require('./authorModel');
const genreModel = require('./genreModel');

const { Schema } = mongoose;

const articleSchema = new Schema({
    articleName: {type: String, min: 3},
    articleText: {type: String, min: 3}, 
    author: {type: Schema.Types.ObjectId, ref: 'author'}
});

const getAllArticles = async() => {
    const articlesList = await model.find({});
    return articlesList;
};

const getOneArticle = async(id) => {
    return await model.findById(id)
    .populate({
        path: 'author',
        populate: { 
            path: 'genre'
        }
    });
};

const addArticle = async(data) => {
    await model.create(data);
}

const model = mongoose.model('article', articleSchema);

module.exports.getAllArticles = getAllArticles;
module.exports.getOneArticle = getOneArticle;
module.exports.addArticle = addArticle;

