const constant = require('./constant');
/**
 * @class Composition 
 * @description class returns the API Composition 
 */
class Composition {
     /**
      * @constructor Creates an instance of Composition.
      */
     constructor() {

     }


     /**
      *
      *
      * @param {Object} mainPropertiesObj
      * @param {UMLAssociation} assoc
      * @returns {Object}
      * @memberof Composition
      */
     addComposition(mainPropertiesObj, assoc) {
          let propertiesObj = {};
          mainPropertiesObj[assoc.name] = propertiesObj;
          if (assoc.end2.multiplicity === "0..*" || assoc.end2.multiplicity === "1..*") {
               let itemsObj = {};
               propertiesObj.items = itemsObj;
               itemsObj['$ref'] = constant.getReference() + assoc.end2.reference.name;
               propertiesObj.type = 'array';
               /**
                * Add MinItems of multiplicity is 1..*
                */
               if (assoc.end2.multiplicity === "1..*") {
                    propertiesObj.minItems = 1;
               }
          } else {
               propertiesObj['$ref'] = constant.getReference() + assoc.end2.reference.name;
          }
          return mainPropertiesObj;
     }
}

module.exports = Composition;