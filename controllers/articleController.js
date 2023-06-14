const articleModel = require('../models/articleModel');

const getAllArticles = async() => {
    return await articleModel.getAllArticles();
};

const getArticle = async(id) => {
    return await articleModel.getOneArticle(id);   
};

const addArticle = async(data) => {
    await articleModel.addArticle(data);
};

module.exports.getAllArticles = getAllArticles;
module.exports.getArticle = getArticle;
module.exports.addArticle = addArticle;