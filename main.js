const express = require("express"); // importiamo express
const app = express(); // const di richiamo per express
const port = 3000; // porta di dialogo per il server

//importiamo le rotte (group routing ./ROUTER/POSTS )
const postsROUTER = require("./ROUTER/posts");

//registriamo in express il body-PARSER in formato json (PER L'APPLICATION JSON)
app.use(express.json());

//diciamo ad express dobbiamo usare le rotte 
app.use("/posts", postsROUTER);

// impostazione asset statici (per poter visionare le immagini nella cartella /PUBLIC/images )
app.use(express.static("PUBLIC")); 


app.listen(port, () => { //ci mettiamo in ascolto sulla porta 3000
    console.log("This server is listening on port" + port)
})





