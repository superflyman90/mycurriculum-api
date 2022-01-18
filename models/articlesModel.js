import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    date: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', ArticleSchema)

export default Article;