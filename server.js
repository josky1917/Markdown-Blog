const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article =require('./models/article')
const methodOverride = require('method-override')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/myblog?authSource=admin', {
    user: 'admin',
    pass: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    }).then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('articles/index', { articles: articles})
})

app.use('/articles', articleRouter) 

app.listen(3000)