const mongoose = require('mongoose');

const { Schema } = mongoose;

const genreSchema = new Schema({
    genreName: {type: Schema.Types.String, min: 3}
});

const getGenreList = async() => {
    return await model.find({});
};

const addGenre = async(data) => {
    await model.create(data);
};


const model = mongoose.model('genre', genreSchema);
module.exports.genreModel = model;
module.exports.addGenre = addGenre;
module.exports.getGenreList = getGenreList;