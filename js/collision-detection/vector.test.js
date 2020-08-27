import Vector from './Vector'

test(`should take in a new vector and add the new vectors x coordinate to its own x coordinate, and add the new vectors y coordinate to its own y coordinate.`, () => {
  const vectorOriginal = new Vector(1, 1)
  const vectorToAdd = new Vector(2, 3)
  const expected = {
      x: 3,
      y: 4
    }
  jest.spyOn(vectorOriginal, 'add')
  const result = vectorOriginal.add(vectorToAdd)
  console.log('result', result)

  expect(vectorOriginal.add).toHaveBeenCalled()
  expect(vectorOriginal.add).toHaveBeenCalledWith(vectorToAdd)
  expect(result).toEqual(expected)
})

// describe("Vector", () => {
  // it("should take in a new vector and add the new vectors x coordinate to its own x coordinate, and add the new vectors y coordinate to its own y coordinate.", () => {
  //   const vectorOriginal = new Vector(1, 1)
  //   const vectorToAdd = new Vector(2, 3)
  //   const expected = {
  //     x: 3,
  //     y: 4
  //   }
  //   const newVec = vectorOriginal.add(vectorToAdd)
  //   expect(newVec).toEqual(expected)

  // })

//   it("should take in a new vector and subtract the new vectors x coordinate from its own x coordinate, and subtract the new vectors y coordinate from its own y coordinate.", () => {
//     const vectorOriginal = new Vector(1, 1)
//     const vectorToSubtract = new Vector(2, 3)
//     const expected = {
//       x: -1,
//       y: -2
//     }
//     const newVec = vectorOriginal.subtr(vectorToSubtract);
//     expect(newVec).toEqual(expected)

//   })

//   it("should return a value which is the magnitude of the vector which is the square root of the vectors x coordinate squared, plus the vectors y coordinate squared.", () => {
//     const vectorOriginal = new Vector(3, 4)

//     const expected = 5

//     const newVec = vectorOriginal.mag()
//     expect(newVec).toEqual(expected)

//   })

//   it("should return a new vector which is the both x and y coordinates of the vector multipled by the given number.", () => {
//     const vectorOriginal = new Vector(3, 4)
//     const multiplyVectorBy = 2
//     const expected = {
//       x: 6,
//       y: 8
//     }
//     const newVec = vectorOriginal.mult(multiplyVectorBy)
//     expect(newVec).toEqual(expected)

//   })

//   it("should return a new vector with both x and y coordinates as 0. Due to the magnitude of the vector being 0.", () => {
//     const vectorOriginal = new Vector(0, 0)

//     const expected = {
//       x: 0,
//       y: 0
//     }

//     const newVec = vectorOriginal.unit()
//     expect(newVec).toEqual(expected)

//   })

//   it("should return a new vector, x should be the original vectors x coordinate divided by the original vectors magnitude and y should be the original vectors y coordinate divided by the original vectors magnitude.", () => {
//     const vectorOriginal = new Vector(2, 3)

//     const expected = {
//       x: 0.5547001962252291,
//       y: 0.8320502943378437
//     }

//     const newVec = vectorOriginal.unit()
//     expect(newVec).toEqual(expected)

//   })

  
// })

