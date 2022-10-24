const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT ||5000;
app.use(cors());

const courses = require('./data/courses.json')
const details = require('./data/details.json')

app.get('/',(req, res)=>{
    res.send('Courses api running');
});

app.get('/courses', (req, res)=>{
    res.send(courses)
})



app.listen(port, ()=>{
    console.log('course plus server running on port', port);
})