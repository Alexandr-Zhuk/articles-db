const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema ({
    commentText: {type: Schema.Types.String},
    articleId: {type: Schema.Types.ObjectId},
    parentComment: {type: Schema.Types.ObjectId, ref: 'comment'}
});

const getArticleComment = async(idArt) => {
    return await commentModel.find({articleId: idArt})
    .populate('parentComment');
};

const addComment = (data) => {
    console.log(data);
    commentModel.create(data);
}

const commentModel = mongoose.model('comment', commentSchema);

module.exports.commentModel = commentModel;
module.exports.getArticleComment = getArticleComment;
module.exports.addComment = addComment;
