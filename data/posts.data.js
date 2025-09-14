
//array di oggetti (taglia/incolla da main.js ove era stato inizialmente creato ed allocato)

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

module.exports = posts; //esportiamo i dati affinchè siano richiamabili altrove (ex main.js)