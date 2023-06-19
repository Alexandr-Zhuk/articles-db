const express = require('express');
const multer  = require('multer');
const path = require('path');
const commentController = require('../controllers/commentController');

const pathUp = path.join(__dirname + '/../public/uploads');
const upload = multer({ dest: pathUp });

const schemas = require('../validationSchemas/schemas');

const Ajv = require('ajv');
const router = express.Router();
const ajv = new Ajv();

router.get('/list/:id', async(req, res) => {
    const idArt = req.params.id;
    const data = await commentController.getArticleComment(idArt);
    res.json(data);
});

router.post('/add/:id', upload.none(), async(req, res) => {
    const idArt = req.params.id;
    const data = req.body;
    console.log(data);
    commentController.addComment(idArt, data);
    const cooments = await commentController.getArticleComment(idArt);
    res.json(cooments);
});

module.exports = router;