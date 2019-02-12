// function solve() {
//     let obj = {
//         method: 'GET',
//         uri: 'svn.public.catalog',
//         version: 'HTTP/1.1',
//         message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
//
//     }
//     console.log(validateRequest(obj));
//
//
//     function validateRequest(obj) {
//         let isValid = true
//         let errorOutput
//         function versionValidation(version) {
//             let types = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
//             if (!types.includes(version)) errorType('Version')
//         }
//
//         function objKeyChecker(obj) {
//             let keys = ['method', 'uri', 'version', 'message']
//             let objKeys = Object.keys(obj)
//             if (!objKeys.includes(keys[0])) errorType('Method')
//             if (!objKeys.includes(keys[1])) errorType('URI')
//             if (!objKeys.includes(keys[2])) errorType('Version')
//             if (!objKeys.includes(keys[3])) errorType('Message')
//         }
//
//         function methodValidation(method) {
//             let types = ['GET', 'POST', 'DELETE', 'CONNECT']
//             if (!types.includes(method)) errorType('Method')
//         }
//
//         function uriValidation(uri) {
//             let pattern = /^[.a-zA-Z0-9]+$|\*/
//             if (!pattern.test(uri)) errorType('URI')
//         }
//
//         function errorType(error) {
//             isValid = false
//             throw new Error(`Invalid request header: Invalid ${error}`)
//         }
//
//         function messageValidation(message) {
//             let pattern = /^(?=.*)[^<>\\&'"]+$/
//             if (!pattern.test(message)) {
//                 if (message === '') return
//                 return errorType('Message')
//             }
//         }
//         function validate() {
//             objKeyChecker(obj)
//             if (isValid) methodValidation(obj.method)
//             if (isValid) uriValidation(obj.uri)
//             if (isValid) versionValidation(obj.version)
//             if (isValid) messageValidation(obj.message)
//             return obj
//         }
//         return validate()
//     }
// }
//
// solve()