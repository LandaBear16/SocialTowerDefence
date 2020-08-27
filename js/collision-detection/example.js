// module.exports = class Common() {
//   getConfig() {
//   return {
//     real: 'data'
//   }
// }

// const fileUnderTest = require('./../fileUnderTest.js');
// const Common = require('./../common.js');
// jest.mock('./../common.js');

// describe('something', () => {
//   it('test one', () => {
//     Common.getConfig = jest.fn().mockImplementation(() => {
//       return {
//         real : 'fake' // This should be returned for test one
//       };
//     });

//     fileUnderTest.someFunction(); //config.real is undefined at this point
//   });

//   it('test two', () => {
//   Common.getConfig = jest.fn().mockImplementation(() => {
//       return {
//         real : 'fake2' // This should be returned for test two
//       };
//     });
//   })
// })

// describe('something', () => {
//   afterEach(() => {
//     jest.resetModules();  // reset modules after each test
//   })

//   it('test one', () => {
//     const Common = require('./../common');
//     Common.prototype.getConfig = jest.fn().mockImplementation(() => ({ real: 'fake' }));
//     const fileUnderTest = require('./../fileUnderTest');
//     fileUnderTest.someFunction();  // config.real is 'fake'
//   });

//   it('test two', () => {
//     const Common = require('./../common');    
//     Common.prototype.getConfig = jest.fn().mockImplementation(() => ({ real: 'fake2' }));
//     const fileUnderTest = require('./../fileUnderTest');
//     fileUnderTest.someFunction();  // config.real is 'fake2'
//   })
// })