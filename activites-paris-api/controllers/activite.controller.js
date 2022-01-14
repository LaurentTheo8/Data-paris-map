const fetch = require("node-fetch");

const activiteModel = require("../models/activite.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllActivites = async (req, res) => {
  const activites = await activiteModel.find();
  res.status(200).json(activites);
};

module.exports.activiteInfo = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    res.send("ID unknown : " + req.params.id);
  else {
    activiteModel.findById(req.params.id, (err, docs) => {
      if (!err) res.send(docs);
      else console.log("ID unknow : " + err);
    });
  }
};

// récupération des données de l'api de paris et enregistrement sur notre bdd
module.exports.updateActivites = async (req, res) => {
  try {
    let data = await fetch(
      "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=-1"
    );
    let result = await data.json();
    //teste si l'id de l'activité  est déjà présent dans la bdd
    for (let element of result.records) {
      let test = await activiteModel.exists({ id: element.fields.id });
    
      if (test) {
        if (element.fields.lat_lon != undefined) {
          if (element.fields.lat_lon[0] != "") {
            if (element.fields.lat_lon[1] != "") {
               /*update de l'entrée dans la bdd si elle a le même ID




               */
            }
          }
        }
      } else {
          //teste si les champs longitude et latitude ne sont pas vides
        if (element.fields.lat_lon != undefined) {
          if (element.fields.lat_lon[0] != "") {
            if (element.fields.lat_lon[1] != "") {
              console.log("ok");
              try {
                  // créé l'activité dans la bdd
                let model = element.fields;
                if (element.fields.date_start) {
                  model.date = element.fields.date_start.split("T")[0];
                }
                await new activiteModel(model).save();
              } catch (err) {
                res.status(400).send(err);
              }
            }
          }
        }
      }
    }
    res.status(200).send();
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports.getActivites = async (req, res) => {
  let params = req.query;
  ///!\\ injections sql ?
  const activites = await activiteModel.find(params);
  res.status(200).json(activites);
};


//récupération de tous les tags de la bdd en un seul tableau et suppression  des doublons
module.exports.allTags = async (req, res) => {
  let arrayTags = ["start"];
  let test = false;
  let arr = [];

  try {
    let data = await fetch(
      "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=-1"
    );
    let result = await data.json();

    for (let element of result.records) {
      if (element.fields.tags != undefined) arrayTags.push(element.fields.tags);
    }

    arrayTags.forEach((element) => {
      var arrayOfStrings = element.split(";");
      arrayOfStrings.forEach((el) => {
        arr.push(el);
      });
    });

    arr = [...new Set(arr)];

    //const activites = await activiteModel.find().distinct('tags');
    res.status(200).json(arr);
  } catch (err) {
    res.status(400).send(err);
  }
};
