const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req , res) => {
    res.render('index');
})




app.listen(port , () => {
    console.log(`${port}포트로 포트 이동중입니다!`)


})


