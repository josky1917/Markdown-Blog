const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article =require('./models/article')
const methodOverride = require('method-override')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://admin:admin@mongodb:27017/myblog?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Retry up to 30 times
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
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