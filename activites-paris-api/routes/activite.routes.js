const router = require('express').Router();
const activiteController = require('../controllers/activite.controller');

//activite
//router.post("/activite", activiteController.createActivite);

router.get("/", activiteController.getAllActivites); // renvoie toutes les activites

router.get("/filter", activiteController.getActivites); // renvoie toutes les activites

router.get('/updateActivites', activiteController.updateActivites); //récupère les données de paris, update la bdd en créant de nouvelles activité si nécessaire

router.get("/tags", activiteController.allTags); // renvoie tous les tags

router.get("/:id", activiteController.activiteInfo); // renvoie 1 activité selon l'id

module.exports = router;