//ROUTER SMISTA LE RICHIESTE
//CONTROLLER CERCA LA GIUSTA FUNZIONE E LA ESEGUE


const postsDATA = require("../data/posts.data"); //importiamo l'array di oggetti giè messo in DATA

// creazione delle funzioni con la logica delle rotte 

const index = (req, res) => {
    let filteredPOSTS = postsDATA;
    if (req.query.tags) {
        filteredPOSTS = postsDATA.filter(pippo => pippo.tags.includes(req.query.tags)); //pippo=item=singolo post: il nome lo abbiamo scelto noi ma il significato indica il singolo post
    }

    res.json(filteredPOSTS); //restituisce i post filtrati

    //res.json(postsDATA) //restituisce in formato json l'array dei post 
};

const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = postsDATA.find(item => item.id === id);
     if (!post) {
        res.status(404) //404 significato: "pagina non trovata"
        return res.json({
            error: "Not Found",
            message: "Post non trovato, i'm sorry! Re-TRY! :)"
        })
    }
    res.json(post);
};

const store = (req, res) => {
    res.send("Creazione di un nuovo post")
};

const update = (req, res) => {
    res.send("Update del post con id" + req.params.id)
};

const modify = (req, res) => {
    res.send("Update del post con id" + req.params.id)
};

const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    const post = postsDATA.find(item => item.id === id);
    console.log(post); //stampa in console il post con l'id che abbiamo "scelto"
    if (!post) {
        res.status(404) //404 significato: "pagina non trovata"
        return res.json({
            error: "Not Found",
            message: "Post non trovato, i'm sorry! Re-TRY! :)"
        })
    }
    postsDATA.splice(postsDATA.indexOf(post), 1);
    console.log(postsDATA); //stampa in console la lista dei post aggiornata dopo la cancellazione del post "scelto"
    res.sendStatus(204); //204 significato: "ok, andato a buon fine!" 
};

module.exports = { index, show, store, update, modify, destroy }; //esportiamo le funzioni delle rotte