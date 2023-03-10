const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let articles = [
    {
        id: 1,
        title: 'Technology is booming',
        description: 'Technology lorem lorem lorem lorem lorem lorem ',
        author: 'Prabh'
    },
    {
        id: 2,
        title: 'Science is scary',
        description: 'Science lorem lorem lorem lorem lorem lorem ',
        author: 'Daniel'
    },
    {
        id: 3,
        title: 'Maths is boring',
        description: 'Maths lorem lorem lorem lorem lorem lorem ',
        author: 'Mike'
    },
    {
        id: 4,
        title: 'English is a must to know!',
        description: 'English lorem lorem lorem lorem lorem lorem ',
        author: 'David'
    }
]


app.use(express.json());

app.get('/', (req,res) => {
    res.send("Welcome to Home page of Article Database");
})

app.get('/articles', (req,res) => {
    res.send("Welcome to Article Page");
    res.send(articles);
})

app.post('/articles/create', (req,res) => {
    const newArticle = req.body;

    articles.push(newArticle);

    res.send(articles);
})


app.delete('/articles/delete/:id', (req, res) => {
    const arcticleID = req.params.id;


    articles = articles.filter((article) => article.id != arcticleID ? true : false);
    return articles;
})

app.listen(PORT, () =>{
    console.log("Server running on Port: " + PORT);
})

