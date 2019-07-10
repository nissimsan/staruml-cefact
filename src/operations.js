const constant =require('./constant');
const Utils=require('./utils')
/**
 *
 *
 * @class Operations
 */
class Operations {
     /**
      * Creates an instance of Operations.
      * 
      * @constructor Operations
      */
     constructor() {
          this.utils=new Utils();
     }

    
     get(objInterface,objOperation) {

          let wOperationObject={};

          let tagsArray=[];
          

          wOperationObject.tags=tagsArray;

          tagsArray.push(objInterface.target.name);

          
          wOperationObject.description='Get a list of '+objInterface.source.name;

          let parametersArray=[];
          wOperationObject.parameters=parametersArray;
          // codeWriter.writeLine("parameters: " + (objOperation.parameters.filter(itemParameters => itemParameters.name != "id" && itemParameters.name != "identifier").length > 0 ?
          //      "" :
          //      "[]"), 0, 0);

          this.utils.writeQueryParameters(parametersArray,objOperation);

          let responsesObject={};
          wOperationObject.responses=responsesObject;

          let ok200Object={}
          responsesObject['200']=ok200Object;

          ok200Object.description='OK';

          let contentObject={};
          ok200Object.content=contentObject;

          let appJsonObject={};
          contentObject['application/json']=appJsonObject;

          let schemaObject={};
          appJsonObject.schema=schemaObject;

          let itemsObject={};
          schemaObject.items=itemsObject;
          itemsObject['$ref']=constant.getReference() + objInterface.source.name;

          schemaObject.type='array';

          return wOperationObject;
     }

     post(objInterface,end2Interface) {

          let wOperationObject={};

          let tagsArray=[];

          wOperationObject.tags=tagsArray;

          tagsArray.push(objInterface.target.name);


          wOperationObject.description='Create a new ' + objInterface.source.name;
///
          if(end2Interface!=null){
               let parametersArray=[];
               wOperationObject.parameters=parametersArray;
               let paramsObject={};
               parametersArray.push(paramsObject);
     
               let objSchema={};
               objSchema.type='string';
     
               this.utils.buildParameter(end2Interface.reference.attributes[0].name, "path", (end2Interface.reference.attributes[0].documentation ? this.utils.buildDescription(end2Interface.reference.attributes[0].documentation) : "missing description"), true, objSchema,paramsObject);
          }
///
          let requestBodyObj={}
          wOperationObject.requestBody=requestBodyObj;
          this.utils.buildRequestBody(objInterface,requestBodyObj);

          
          let responsesObject={};
          wOperationObject.responses=responsesObject;

          let created201Object={};
          responsesObject['201']=created201Object;

          let contentObj={};
          created201Object.content=contentObj;

          let appJsonObj={};
          contentObj['application/json']=appJsonObj;

          let schemaObj={};
          appJsonObj.schema=schemaObj;
          schemaObj['$ref']=constant.getReference() + objInterface.source.name;

          created201Object.description='Created';

          return wOperationObject;
     }

     

     put(objInterface,operationAttribute){
          let wOperationObject={};

          let tagsArray=[];
          wOperationObject.tags=tagsArray;

          tagsArray.push(objInterface.target.name);


          wOperationObject.description='Update an existing ' + objInterface.source.name;

          let parametersArray=[];
          wOperationObject.parameters=parametersArray;
          let paramsObject={};
          parametersArray.push(paramsObject);

          let objSchema={};
          objSchema.type='string';

          this.utils.buildParameter(operationAttribute.name, "path", (operationAttribute.documentation ? this.utils.buildDescription(operationAttribute.documentation) : "missing description"), true, objSchema,paramsObject);
          objInterface.target.attributes.forEach(itemAttribute => {
               let paramsObject={};
               if (itemAttribute.name != "id" && itemAttribute.name != "identifier") {
                    this.utils.buildParameter(itemAttribute.name, "query", (itemAttribute.documentation ? this.utils.buildDescription(itemAttribute.documentation) : "missing description"), false, objSchema,paramsObject);
                    parametersArray.push(paramsObject);
               }
          });

          let requestBodyObj={}
          wOperationObject.requestBody=requestBodyObj;

          this.utils.buildRequestBody(objInterface,requestBodyObj);
          
          let resObj={};
          wOperationObject.responses=resObj;

          let ok200Obj={};
          resObj['200']=ok200Obj;

          ok200Obj.description='OK';

          let contentObj={};
          ok200Obj.content=contentObj;

          let appJsonObj={};
          contentObj['application/json']=appJsonObj;

          let schemaObj={};
          appJsonObj.schema=schemaObj;
          schemaObj['$ref']=constant.getReference() + objInterface.source.name;

          return wOperationObject;
     }
     patch(objInterface,operationAttribute){
          let wOperationObject={};

          let tagsArray=[];
          wOperationObject.tags=tagsArray;

          tagsArray.push(objInterface.target.name);


          wOperationObject.description='Update ' + objInterface.source.name;

          let parametersArray=[];
          wOperationObject.parameters=parametersArray;
          let paramsObject={};
          parametersArray.push(paramsObject);

          let objSchema={};
          objSchema.type='string';

          this.utils.buildParameter(operationAttribute.name, "path", (operationAttribute.documentation ? this.utils.buildDescription(operationAttribute.documentation) : "missing description"), true, objSchema,paramsObject);
          objInterface.target.attributes.forEach(itemAttribute => {
               let paramsObject={};
               if (itemAttribute.name != "id" && itemAttribute.name != "identifier") {
                    this.utils.buildParameter(itemAttribute.name, "query", (itemAttribute.documentation ? this.utils.buildDescription(itemAttribute.documentation) : "missing description"), false, objSchema,paramsObject);
                    parametersArray.push(paramsObject);
               }
          });

          let requestBodyObj={}
          wOperationObject.requestBody=requestBodyObj;
          this.utils.buildRequestBody( objInterface,requestBodyObj);

          let resObj={};
          wOperationObject.responses=resObj;


          let noContentObj={};
          resObj['204']=noContentObj;
          noContentObj.description='No Content';

          return wOperationObject;
     }
     delete(objInterface,operationAttribute,end1Interface,end2Interface){
          let wOperationObject={};

          let tagsArray=[];
          wOperationObject.tags=tagsArray;

          tagsArray.push(objInterface.target.name);


          wOperationObject.description='Delete an existing ' + objInterface.source.name;

          let parametersArray=[];
          wOperationObject.parameters=parametersArray;
          let paramsObject={};
          parametersArray.push(paramsObject);

          let objSchema={};
          objSchema.type='string';

          if(operationAttribute!=null && end1Interface==null && end2Interface==null){
               ///
               this.utils.buildParameter(operationAttribute.name, "path", (operationAttribute.documentation ? this.utils.buildDescription(operationAttribute.documentation) : "missing description"), true, objSchema,paramsObject);

               objInterface.target.attributes.forEach(itemAttribute => {
                    let paramsObject={};
                    if (itemAttribute.name != "id" && itemAttribute.name != "identifier") {
                         this.utils.buildParameter(itemAttribute.name, "query", (itemAttribute.documentation ? this.utils.buildDescription(itemAttribute.documentation) : "missing description"), false, objSchema,paramsObject);
                         parametersArray.push(paramsObject);
                    }
               });
               ///
          }else if(operationAttribute==null && end1Interface!=null && end2Interface!=null){
               ///
               this.utils.buildParameter(end2Interface.reference.name + "_" + end2Interface.reference.attributes[0].name, "path", (end2Interface.reference.attributes[0].documentation ? this.utils.buildDescription(end2Interface.reference.attributes[0].documentation) : "missing description"), true, objSchema,paramsObject);

               //AskQue
               let paramsObject1={};
               this.utils.buildParameter(end1Interface.reference.name + "_" + end1Interface.reference.attributes[0].name, "path", (end1Interface.reference.attributes[0].documentation ? this.utils.buildDescription(end1Interface.reference.attributes[0].documentation) : "missing description"), true, objSchema,paramsObject1);
               parametersArray.push(paramsObject1);
               ///
          }

          let resObj={};
          wOperationObject.responses=resObj;

          let noContent204Obj={};
          resObj['204']=noContent204Obj;
          noContent204Obj.description='No Content';

          return wOperationObject;
     }
     deleteWIC(objInterface,operationAttribute,end1Interface,end2Interface){
          let wOperationObject={};

          let tagsArray=[];
          wOperationObject.tags=tagsArray;

          //AskQue
          // codeWriter.writeLine("- " + objInterface.target.name, 1, 1);
          // codeWriter.writeLine("- " + objInterface.target.name, 1, 1);
          tagsArray.push(objInterface.target.name);
          


          //AskQue
          // codeWriter.writeLine("description: Delete an existing " + objInterface.source.name, 0, 0);
          // codeWriter.writeLine("description: Delete an existing " + objInterface.source.name, 0, 0);
          wOperationObject.description='Delete an existing ' + objInterface.source.name;


          let parametersArray=[];
          wOperationObject.parameters=parametersArray;
          let paramsObject={};
          parametersArray.push(paramsObject);

          let objSchema={};
          objSchema.type='string';
///
          this.utils.buildParameter(end2Interface.reference.name + "_" + end2Interface.reference.attributes[0].name, "path", (end2Interface.reference.attributes[0].documentation ? this.utils.buildDescription(end2Interface.reference.attributes[0].documentation) : "missing description"), true, objSchema,paramsObject);

          //AskQue
          let paramsObject1={};
          this.utils.buildParameter(end1Interface.reference.name + "_" + end1Interface.reference.attributes[0].name, "path", (end1Interface.reference.attributes[0].documentation ? this.utils.buildDescription(end1Interface.reference.attributes[0].documentation) : "missing description"), true, objSchema,paramsObject1);
          parametersArray.push(paramsObject1);
///

          let resObj={};
          wOperationObject.responses=resObj;

          let noContent204Obj={};
          resObj['204']=noContent204Obj;
          noContent204Obj.description='No Content';
     }
}

module.exports = Operations;