import express from 'express';


const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(PORT, ()=> {
    console.log("El servidor esta andando como pedrada mi rey")
});

app.get("/hola", (_req, res)=> {
    console.log("server ready")
    res.send("Adios mundo cruel")

});
