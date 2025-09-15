// CREZIONE ROTTA DEDICATA AI POST

const express = require("express"); //importiamo express nel nostro file
const router = express.Router(); //creiamo l'istanza di express router, altrimenti non potremmo usare router nelle CRUD operations

// importiamo i dati utili per le crud operations da DATA (./data/posts.data.js)
const postsDATA = require("../data/posts.data");

// importiamo le funzioni delle rotte dal controller

const postsCONTROLLER = require("../controllers/posts.controller");



//--------- CRUD OPERATIONS (CREATE "STORE", READ "INDEX/SHOW", UPDATE "UPDATE/MODIFY", DELETE "DESTROY")

// DIFFERENZA: RISPETTO ALLE ROTTE DEL MAIN VA SOSTITUITO "APP" con "ROUTER" E "TOLTA LA PARTE STATICA DELLA ROTTA"

// PER LA CREAIONE DEL CONTROLLER la funzione (req, res) viene tolta da qui 

//INDEX
router.get("/", postsCONTROLLER.index);

//SHOW
router.get("/:id", postsCONTROLLER.show);

//STORE
router.post("/", postsCONTROLLER.store);

//UPDATE 
router.put("/:id", postsCONTROLLER.update);

//MODIFY (parziale) 
router.patch("/:id", postsCONTROLLER.modify);

//DESTROY
router.delete("/:id", postsCONTROLLER.destroy);


module.exports = router; //esportiamo le rotte affinchè siano richiamabili altrove (ex main.js)