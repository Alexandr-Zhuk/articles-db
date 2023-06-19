const commentModel = require('../models/commentModel');

const addComment = (idArt, data) => {
    const addData = {
        commentText: data.commentInput,
        articleId: idArt,
        parentComment: data.parentComment
    };
    //const tre = data.hasOwnProperty('parentId')
    //console.log(tre);
    /*if(data.hasOwnProperty('parentId')){
        addData.parentComment = data.parentId;
    }*/
    commentModel.addComment(addData);
};

const getArticleComment = async(idArt) => {
    return await commentModel.getArticleComment(idArt);
}

module.exports.getArticleComment = getArticleComment;
module.exports.addComment = addComment;