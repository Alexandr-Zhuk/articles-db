const articleModel = require('../models/articleModel');
const commentsController = require('./commentController');

const getAllArticles = async() => {
    return await articleModel.getAllArticles();
};

const getArticle = async(id) => {
    return await articleModel.getOneArticle(id);   
};

const addArticle = async(data) => {
    await articleModel.addArticle(data);
};

const getComments = async(idArt) => {
    return await commentsController.getArticleComment(idArt);
};

module.exports.getAllArticles = getAllArticles;
module.exports.getArticle = getArticle;
module.exports.addArticle = addArticle;
module.exports.getComments = getComments;