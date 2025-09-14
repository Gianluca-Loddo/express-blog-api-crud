//ROUTER SMISTA LE RICHIESTE
//CONTROLLER CERCA LA GIUSTA FUNZIONE E LA ESEGUE


const postsDATA = require("../data/posts.data"); //importiamo l'array di oggetti giè messo in DATA

// creazione delle funzioni con la logica delle rotte 

const index = (req, res) => { 
    res.send("Welcome on board!")
};

const show = (req, res) => { 
    res.send("Mostrami post con id:" + req.params.id)
};

const store =(req, res) => { 
    res.send("Creazione di un nuovo post")
};

const update =(req, res) => {
    res.send("Update del post con id" + req.params.id)
};

const modify =(req, res) => {
    res.send("Update del post con id" + req.params.id)
};

const destroy = (req,res) => {
    res.send("WEEEE LOOOTAAAA STATT ACCORRTT" + req.params.id)
};

module.exports = {index, show, store, update, modify, destroy}; //esportiamo le funzioni delle rotte