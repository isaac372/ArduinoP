const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
//modelo de la base de datos
const modelTemp = require("./config/models/Modeltemp");
///base de datos
const conectarDB = require("./config/db");
conectarDB();

app.get('/arduino', async(req,res)=>{
  try {
    const mostrar = await modelTemp.find({}).sort({ _id: -1 }).limit(1);
    res.json(mostrar)
  } catch (error) {
    res.json({message:error})
  }
})

app.get("/", (req, resp) => {
    resp.send("HOLa mundo como se encuentran hoy");
  });
const port = process.env.PORT || 4000;
app.listen(port, "0.0.0.0", () => {
  console.log(`el puerto esta funcionando  ${port}`);
});
