const express = require('express');
const multer  = require('multer');
const path = require('path');
const articleController = require('../controllers/articleController');

const schemas = require('../validationSchemas/schemas');

const pathUp = path.join(__dirname + '/../public/uploads');
const upload = multer({ dest: pathUp });

const Ajv = require('ajv');
const router = express.Router();
const ajv = new Ajv();

router.get('/add', (req, res) => {
    res.render('add_article');
});

router.post('/add/create', upload.none(), async(req, res) => {
    let data = req.body;
    console.log(data);
    const validate = ajv.compile(schemas.schemaAddArticle);
    const valid = validate(data);
    
    if(valid){  
        await articleController.addArticle(data);
        res.json('Article added');
    }else{
        res.json(validate.errors[0].message);
    }
});

router.get('/', (req, res) => {
    res.render('article_list');
});

router.get('/list', async(req, res) => {
    const arrrr = await articleController.getAllArticles();
    res.json(arrrr);
});

router.get('/view-article/:id', (req, res) => {
    res.render('view_article');
});

router.get('/view-article/:id/view', async(req, res) => {
    const article = await articleController.getArticle(req.params.id);
    res.json(article);
});

router.get('/view-article/:id/comments', async(req, res) => {
    const comments = await articleController.getComments(req.params.id);
    res.json(comments);
});

module.exports = router;