const express = require("express"); // importiamo express
const app = express(); // const di richiamo per express
const port = 3000; // porta di dialogo per il server


//registriamo in express il body-PARSER in formato json (PER L'APPLICATION JSON)
app.use(express.json());

// impostazione asset statici (per poter visionare le immagini nella cartella /PUBLIC/images )
app.use(express.static("PUBLIC")); 



//importiamo le rotte (group routing ./ROUTER/POSTS )
const postsROUTER = require("./ROUTER/posts");
const ServerError = require("./middleware/servererror");
const notFound = require("./middleware/notFound");
//diciamo ad express dobbiamo usare le rotte 
app.use("/posts", postsROUTER);




app.listen(port, () => { //ci mettiamo in ascolto sulla porta 3000
    console.log("This server is listening on port" + port)
})


app.use(ServerError);
app.use(notFound);


