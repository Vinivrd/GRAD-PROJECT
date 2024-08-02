const express = require("express");
const multer = require('multer');

const {model} = require('mongoose');

const exclusaoControler = require("./controllers/exclusaoControler"); 
const disciplinaControler = require("./controllers/disciplinaControler");
const cursos =  require('./controllers/CursosControler');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });


router.get('/user',exclusaoControler.getUsers);
router.post('/user',exclusaoControler.createUser);


router.get('/cursos',cursos.getCursos);
router.post('/cursos/create',cursos.createCursos);

router.post('/disciplinas/create',upload.single('file'),disciplinaControler.getDataPlanilha);
router.get('/disciplinas/:id',disciplinaControler.findByCurso)

module.exports = router;