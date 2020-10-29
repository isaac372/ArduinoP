const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ credentials: true, origin: true }));
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


const port = process.env.PORT || 4000;
app.listen(port, "0.0.0.0", () => {
  console.log(`el puerto esta funcionando  ${port}`);
});
