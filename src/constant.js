const version = require('../package.json').version
const reponame = require('../package.json').name
const Constant = {
     entry: '#',
     components: 'components',
     schemas: 'schemas',
     path: '/',
     shared: 'shared',
     msgsuccess: 'OpenAPI Specs generated for Package : ',
     msgstestuccess: 'OpenAPI Specs Tested Successfully for Package : ',
     msgerror: 'OpenAPI Specs generation failure for Package : ',
     msgtesterror: 'OpenAPI Specs Test Failure for Package : ',
     strerror: 'Error : ',
     strpath: 'File Generated at \nPath :',
     stronlypath: '\nPath : ',
     strend: '     ',
     msgpackage: 'Package not available',
     msg_file_select: 'Select one of the following type.',
     msg_file_saveas: 'Save File as...',
     PREF_DEBUG_KEY: 'openapi:debug.status',
     PREF_GENDOC: 'openapi.gen.idlDoc',
     PREF_INDENTSPC: 'openapi.gen.indentSpaces',
     IDEAL_MDJ_FILE_PATH: '/src/model',
     IDEAL_MDJ_FILE_NAME: 'SampleModel.mdj',
     IDEAL_TEST_FILE_PATH: '/src/output',
     IDEAL_JSON_FILE_NAME: 'SampleModel.json',
     DISPLAY_REPO_NAME: reponame,
     DISPLAY_VERSION: version,
     DIALOG_MSG_PICKERDIALOG: "Select the package or project to generate OpenAPI Specs.",
     DIALOG_MSG_ERRORDIALOG: "Please select the project or a package",
     DIALOG_MSG_TEST_PICKERDIALOG: "Select the package or project to test OpenAPI Specs.",
     msg_description: "This OpenAPI Spec was generated using StarUML extension https://github.com/gs-gs/staruml-cefact  version: " + version,
     fileOptions: [{
               text: "JSON & YML",
               value: 3
          }, {
               text: "JSON",
               value: 1
          },
          {
               text: "YML",
               value: 2
          },
     ]

}

/**
 * @function getRef
 * @description returns the reference path of the schema
 * @returns {string}
 */
function getRef() {
     return Constant.entry + Constant.path + Constant.components + Constant.path + Constant.schemas + Constant.path;
}
module.exports = Constant
module.exports.getReference = getRef;