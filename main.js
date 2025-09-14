const express = require("express"); // importiamo express
const app = express(); // const di richiamo per express
const port = 3000; // porta di dialogo per il server

//importiamo le rotte (group routing ./ROUTER/POSTS )
const postsROUTER = require("./ROUTER/posts");

//diciamo ad express dobbiamo usare le rotte 
app.use("/posts", postsROUTER);


app.listen(port, () => { //ci mettiamo in ascolto sulla porta 3000
    console.log("This server is listening on port" + port)
})

app.use(express.static("PUBLIC")); // impostazione asset statici (per poter visionare le immagini nella cartella /PUBLIC/images )




