const express =    require ('express');
const app =        express();
const db =         require('./db/connection');
const bodyParser = require('body-parser');

const PORT  = 3000;

app.listen(PORT, function(){
    console.log(`O express ta na porta ${PORT}`);
});

//body_parser
app.use(bodyParser.urlencoded({ extends: false}));


//db connection
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso");
    })
    .catch(err => {
        console.log("Ocorreu um erro no banco de dados");
    });


//routes
app.get('/', (req, res) =>{
    res.send("Esta funcionando");
});

//jobs routes
app.use('/jobs', require('./routes/routesJobs')); 