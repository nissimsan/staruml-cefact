const openAPI = require('./openapi');
const fs = require('fs');
const constant = require('./constant');
/**
 * @description class is general utility class for the whole project
 * @class Utils
 */
class Utils {
     /**
      * @constructor Creates an instance of Utils.
      */
     constructor() {
          this.errorContent = [];
          this.mFileName = '/error.txt';
     }
     /**
      * @function writeErrorToFile
      * @description Catch the error and write it to file
      * @param {Object} error
      * @memberof Utils
      */
     writeErrorToFile(error) {
          this.errorContent.push(error.message);
          fs.writeFile(openAPI.getFilePath() + this.mFileName, JSON.stringify(this.errorContent), function (err) {
               if (err) {
                    console.error("Error writing file", err);
               }
          });
     }

     /**
      * @function buildDescription
      * @description Description replace (') with ('')
      * @param {string} desc
      * @memberof Utils
      */
     buildDescription(desc) {
          if (desc)
               return desc.replace(/\'/g, "''")

          return null;
     }

     /**
      * @function buildParameter
      * @description Adds parameters to the file
      * @param {string} name
      * @param {string} type
      * @param {string} description
      * @param {boolean} required
      * @param {string} schema 
      * @memberof Utils
      */
     buildParameter(name, type, description, required, schema, paramsObject) {

          paramsObject.name = name;
          paramsObject.in = type;
          paramsObject.description = description;
          paramsObject.required = required;
          paramsObject.schema = schema;

     }
     /**
      * @function getType
      * @description Returns type of attribute in string, Get attribute type number,boolean,string 
      * @returns {string} 
      * @param {string} starUMLType 
      * @memberof Utils
      */
     getType(starUMLType) {
          if (starUMLType === "Numeric") {
               return "number";
          } else if (starUMLType === "Indicator") {
               return "boolean";
          } else return "string";
     }

     /**
      * @function buildRequestBody
      * @description Adds request body to requestBodyObj
      * @param {UMLInterfaceRealization} objInterface
      * @param {Object} requestBodyObj
      * @memberof Utils
      */
     buildRequestBody(objInterface, requestBodyObj) {

          let contentObj = {};
          requestBodyObj.content = contentObj;

          let appJsonObject = {};
          contentObj['application/json'] = appJsonObject;

          let schemaObj = {};
          appJsonObject.schema = schemaObj;

          schemaObj['$ref'] = constant.getReference() + objInterface.source.name;


          requestBodyObj.description = '';
          requestBodyObj.required = true;

     }

     /**
      * @function writeQueryParameters
      * @description adds query paramerter in object
      * @param {Array} parametersArray
      * @param {Object} objOperation
      * @memberof Utils
      */
     writeQueryParameters(parametersArray, objOperation) {
          try {
               objOperation.parameters.forEach(itemParameters => {
                    let paramsObject = {};
                    if (itemParameters.name != "id" && itemParameters.name != "identifier") {
                         parametersArray.push(paramsObject);
                         let objSchema = {};
                         objSchema.type = 'string';
                         if (!(itemParameters.type instanceof type.UMLClass)) {
                              this.buildParameter(itemParameters.name, "query", (itemParameters.documentation ?
                                   this.utils.buildDescription(itemParameters.documentation) :
                                   "missing description"), false, objSchema, paramsObject);
                         } else {

                              this.buildParameter(itemParameters.type.name + "." + itemParameters.name, "query", (itemParameters.documentation ?
                                   this.utils.buildDescription(itemParameters.documentation) :
                                   "missing description"), false, objSchema, paramsObject);


                         }
                    }
               });
          } catch (error) {
               console.error("Found error", error.message);
               this.writeErrorToFile(error);
          }
     }
     /**
      * @function getEnumerationLiteral
      * @description return Enumeratoin literals
      * @param {UMLEnumaration} objEnum 
      * @returns {Array}
      * @memberof Utils
      */
     getEnumerationLiteral(objEnum) {
          if (objEnum) {
               let result = objEnum.literals.map(a => a.name);
               return (result);
          }
     }
}

module.exports = Utils;