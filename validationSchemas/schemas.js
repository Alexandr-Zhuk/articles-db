const schemaAddArticle = {
    type: 'object',
    properties: {
        articleName: {
            type: 'string',
            minLength: 2,
            maxLength: 200
        },
        articleText: {
            type: 'string',
            minLength: 10,
        },
        author: {
            type: 'string'
        },
    },
    required: ['articleName', 'articleText', 'author'],
    additionalProperties: false,
};

const schemaAddAuthor = {
    type: 'object',
    properties: {
        authorName: {
            type: 'string',
            minLength: 2,
            maxLength: 20
        },
        genre: {
            type: 'string'
        },
    },
    additionalProperties: false,
};

const schemaAddGenre = {
    type: 'object',
    properties: {
        genreName: {
            type: 'string',
            minLength: 2,
            maxLength: 20
        }
    },
    additionalProperties: false,
};

module.exports.schemaAddArticle = schemaAddArticle;
module.exports.schemaAddAuthor = schemaAddAuthor;
module.exports.schemaAddGenre = schemaAddGenre;