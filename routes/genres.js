const express = require('express');
const multer  = require('multer');
const path = require('path');
const genreController = require('../controllers/genreController');

const pathUp = path.join(__dirname + '/../public/uploads');
const upload = multer({ dest: pathUp });

const schemas = require('../validationSchemas/schemas');

const Ajv = require('ajv');
const router = express.Router();
const ajv = new Ajv();

router.get('/', (req, res) => {
    res.render('genres');
});

router.get('/list', async(req, res) => {
    const data = await genreController.getGenreList();
    res.json(data);
});

router.post('/add', upload.none(), async(req, res) => {
    const data = req.body;
    
    const validate = ajv.compile(schemas.schemaAddGenre);
    const valid = validate(data);
    
    if(valid){
        await genreController.addGenre(data);
        const genresList = await genreController.getGenreList();
        res.json(genresList);
    }else{
        res.json(validate.errors[0].message);
    }
});

module.exports = router;