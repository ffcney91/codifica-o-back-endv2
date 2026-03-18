import express from 'express';
import fruitsRoutes from "./src/routes/fruitsRoutes";

const app = express();
const port = 3000;


app.get("/fruits", fruitsRoutes )

app.listen(port, ()=>{
    console.log('o servidor esta funcionando na porta http://localhost:${port}')
})
