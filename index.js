const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT ||5000;
app.use(cors());

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/',(req, res)=>{
    res.send('Courses api running');
});

app.get('/categories', (req, res)=>{
    res.send(categories)
})

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    const categoryCourse = courses.filter(c => c.id == id);
    res.send(categoryCourse);
})

app.get('/courses/:id',(req, res)=>{
    const id = req.params.id;
    const selectedCourse = courses.find(c => c.id == id);
    res.send(selectedCourse);
})

app.listen(port, ()=>{
    console.log('course plus server running on port', port);
})