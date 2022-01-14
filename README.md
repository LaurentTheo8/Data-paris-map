# Data-paris-map <br />
## Projet de visualisation de données de l'api https://opendata.paris.fr <br />

## Informations générales <br />
Le projet consiste à afficher une carte zoomée sur Paris, et d'y afficher les évênements qui auront lieu une certaine date, selon des critères.<br />
On récupère les latitudes et longitudes des évènements de l'api de paris et on affiche ensuite sur la carte les markers. <br />
On récupère et enregistre les données de l'api de paris sur notre propre bdd. <br />

points à améliorer/rajouter : <br />
-design des données affichées lorsqu'on clique sur un marker sur la carte<br />
-update automatique de la carte quand on clique sur les options : la carte ne se met actuellement à jour que lorsqu'on change la date dans le datepicker. <br />
-récupération d'image de l'api et affichage sur le front quand on clique sur un marker  <br />
-gérer l'update de notre bdd: J'ai oublié de gérer l'update si on veut récupérer les nouvelles données de l'api de paris.  <br />
Pour récupérer les données il faut lancer au début la route http://localhost:5000/api/activites/updateActivites <br />
Cela va enregistrer les données de l'Api de Paris sur notre BDD. 
Attention relancer la route ne servira à rien, l'update n'est pas fait.


## démarrage <br />
Le projet se scinde en 2 : l'api en nodejs et le front en React.<br />

Dépendencies front :<br />
 "@testing-library/jest-dom": "^5.16.1",<br />
    "@testing-library/react": "^12.1.2",<br />
    "@testing-library/user-event": "^13.5.0",<br />
    "leaflet": "^1.7.1",<br />
    "react": "^17.0.2",<br />
    "react-datepicker": "^4.6.0",<br />
    "react-dom": "^17.0.2",<br />
    "react-leaflet": "^3.2.4",<br />
    "react-scripts": "5.0.0",<br />
    "web-vitals": "^2.1.3"<br />
    
 Dépendencies back :<br />
    "cors": "^2.8.5",<br />
    "dotenv": "^11.0.0",<br />
    "express": "^4.17.2",<br />
    "mongoose": "^6.1.6",<br />
    "node-fetch": "^2.6.6",<br />
    "nodemon": "^2.0.15"<br />
    
Attentoion à bien créer ses varaibles d'environnements dans un fichier .env pour l'Api :<br />
PORT=5000<br />
DB_USER_PASS = "username:password"<br />

Il faudra aussi se créer son cluster et une database sur mongodb et récupérer l'accès.<br />
La config est dans /config/databse.js.<br />
modifier la ligne "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.7owkw.mongodb.net/activites-paris" avec ses données <br />


