import ArticleModel from '../models/articlesModel.js';

export const addArticle = async (req, res) => {
    const article = new ArticleModel(req.body);
    await article.save();
    res.send(article);
}

export const getArticles = async (req, res) => {
    const articles = await ArticleModel.find({})
    res.send(articles);
}

export const getOneArticle = async (req, res) => {
    const article = await ArticleModel.find({_id: req.params.id});
    res.send(article);
}

export const updateOneArticle = async (req, res) => {
    const article = await ArticleModel.findByIdAndUpdate(req.params.id, req.body);
    await article.save();
    res.send(article);
}

export const deleteOneArticle = async (req, res) => {
    const article = await ArticleModel.findByIdAndDelete(req.params.id);
    if (!article) {
        res.status(404).send('aucun article trouvé')
    }
    res.status(200).send()
}