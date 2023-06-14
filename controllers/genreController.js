const genreModel = require('../models/genreModel');

const getGenreList = async() => {
    return await genreModel.getGenreList();
};

const addGenre = async(data) => {
    await genreModel.addGenre(data);
}

module.exports.addGenre = addGenre;
module.exports.getGenreList = getGenreList;