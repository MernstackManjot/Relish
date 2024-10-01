const express = require("express");
const cors = require("cors");
const contactRouter = require("./Routes/Contact");
const app = express();
app.use(cors())
app.use(express.json())
const port = 5600;


app.use("/contactRouter",contactRouter)


app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})


