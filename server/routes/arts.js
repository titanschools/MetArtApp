const ArtController = require("../controllers/Arts.js");

module.exports = (app) => {
    app.get('/api/art', ArtController.getArtsCollection);
    app.get('/api/art/:culture', ArtController.getArtsByCulture);
}