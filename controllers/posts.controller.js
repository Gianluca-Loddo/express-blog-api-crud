//ROUTER SMISTA LE RICHIESTE
//CONTROLLER CERCA LA GIUSTA FUNZIONE E LA ESEGUE


const postsDATA = require("../data/posts.data"); //importiamo l'array di oggetti giè messo in DATA

// creazione delle funzioni con la logica delle rotte 

//========================================================================================================


const index = (req, res) => {
    let filteredPOSTS = postsDATA;
    if (req.query.tags) {
        filteredPOSTS = postsDATA.filter(pippo => pippo.tags.includes(req.query.tags)); //pippo=item=singolo post: il nome lo abbiamo scelto noi ma il significato indica il singolo post
    }

    res.json(filteredPOSTS); //restituisce i post filtrati

    //res.json(postsDATA) //restituisce in formato json l'array dei post 
};


//========================================================================================================


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


//========================================================================================================


const store = (req, res) => {
    //creiamo un nuovo ID incrementando l'ultimo ID disponibile
    const newID = postsDATA[postsDATA.length - 1].id + 1;

    //creiamo un nuovo oggetto POST
    const newPOST = {
        id: newID,
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        immagine: req.body.immagine,
        tags: req.body.tags
    }
    //aggiungiamo il nuovo posto (PUSH in ultima posizione della stringa di oggetti (POST) di postsDAT)
    postsDATA.push(newPOST);

    //controlliamo che il nuovo post sia stato aggiunto
    console.log(postsDATA);

    //res.send("Creazione di un nuovo post") --> commentato in quanto ora non ci serve più, fa parte della prima parte dell'esercizio

    //restituiamo lo status corretto e il post appena aggiunto
    res.status(201); // Il codice di stato 201 Created va oltre il semplice messaggio di successo e fornisce ulteriori informazioni. Indica che non solo la richiesta è andata a buon fine, ma che è stata creata una nuova risorsa sul server.
    res.json(newPOST); //restituisce il nuovo post in formato json 
};


//========================================================================================================


const update = (req, res) => {
    res.send("Update del post con id" + req.params.id)
};


//========================================================================================================

const modify = (req, res) => {
    res.send("Update del post con id" + req.params.id)
};


//========================================================================================================


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