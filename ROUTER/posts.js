// CREZIONE ROTTA DEDICATA AI POST

const express = require("express"); //importiamo express nel nostro file
const router = express.Router(); //creiamo l'istanza di express router, altrimenti non potremmo usare router nelle CRUD operations


//--------- CRUD OPERATIONS (CREATE "STORE", READ "INDEX/SHOW", UPDATE "UPDATE/MODIFY", DELETE "DESTROY")

// DIFFERENZA: RISPETTO ALLE ROTTE DEL MAIN VA SOSTITUITO "APP" con "ROUTER" E "TOLTA LA PARTE STATICA DELLA ROTTA"

//INDEX
router.get("/", (req, res) => { //rotta index 
    res.send("Welcome on board!")
});

//SHOW
router.get("/:id", (req, res) => { //rotta show
    res.send("Mostrami post con id:" + req.params.id)
}
);

//STORE
router.post("/", (req, res) => {
    res.send("Creazione di un nuovo post")
});

//UPDATE 
router.put("/:id", (req, res) => {
    res.send("Update del post con id" + req.params.id)
});

//MODIFY (parziale) 
router.patch("/:id", (req, res) => {
    res.send("Update del post con id" + req.params.id)
});


//DESTROY
router.delete("/:id", (req,res) => {
    res.send("WEEEE LOOOTAAAA STATT ACCORRTT" + req.params.id)
});


module.exports = router; //esportiamo le rotte affinchè siano richiamabili altrove (ex main.js)