const express = require("express"); // importiamo express
const app = express(); // const di richiamo per express
const port = 3000; // porta di dialogo per il server

app.listen(port, () => { //ci mettiamo in ascolto sulla porta 3000
    console.log("This server is listening on port" + port)
})

app.use(express.static("PUBLIC")); // impostazione asset statici (per poter visionare le immagini nella cartella /PUBLIC/images )


//creazione di un array di oggetti 

const posts = [
    {
        id: 1,
        titolo: "CIAMBELLONE",
        contenuto: "foto del ciambellone",
        immagine: "images/ciambellone.jpeg",
        tags: [""]
    },
    {
        id: 2,
        titolo: "CRACKERS ALLA BARBABIETOLA",
        contenuto: "foto dei crackers alla barbabietola",
        immagine: "images/cracker_barbabietola.jpeg",
        tags: [""]
    },
    {
        id: 3,
        titolo: "PANE FRITTO DOLCE",
        contenuto: "foto del pane fritto dolce",
        immagine: "images/pane_fritto_dolce.jpeg",
        tags: [""]
    },
    {
        id: 4,
        titolo: "PASTA ALLA BARBABIETOLA",
        contenuto: "foto della pasta alla barbabietola",
        immagine: "images/pasta_barbabietola.jpeg",
        tags: [""]
    },
    {
        id: 5,
        titolo: "TORTA PAESANA",
        contenuto: "foto della torta paesana",
        immagine: "images/torta_paesana.jpeg",
        tags: [""]
    }
];


//--------- CRUD OPERATIONS (CREATE "STORE", READ "INDEX/SHOW", UPDATE "UPDATE/MODIFY", DELETE "DESTROY")


//INDEX
app.get("/", (req, res) => { //rotta index 
    res.send("Welcome on board!")
});

//SHOW
app.get("/posts/:id", (req, res) => { //rotta show
    res.send("Mostrami post con id:" + req.params.id)
}
);

//STORE
app.post("/posts", (req, res) => {
    res.send("Creazione di un nuovo post")
});

//UPDATE 
app.put("/posts/:id", (req, res) => {
    res.send("Update del post con id" + req.params.id)
});

//MODIFY (parziale) 
app.patch("/posts/:id", (req, res) => {
    res.send("Update del post con id" + req.params.id)
});


//DESTROY
app.delete("/posts/:id", (req,res) => {
    res.send("WEEEE LOOOTAAAA STATT ACCORRTT" + req.params.id)
});