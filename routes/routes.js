import {Router} from 'express';
import { addArticle, getArticles, getOneArticle, updateOneArticle, deleteOneArticle } from '../controllers/articlesController.js';
import { catchErrors } from './../helpers.js';

const router = new Router();

router.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

router.post('/article', catchErrors(addArticle));

router.get('/articles', catchErrors(getArticles));

router.get('/article/:id', catchErrors(getOneArticle));

router.patch('/article/:id', catchErrors(updateOneArticle));

router.delete('/article/:id', catchErrors(deleteOneArticle));

export default router;