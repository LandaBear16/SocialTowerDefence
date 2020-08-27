import Person from './Person';

describe("Person", () => {
  it("should...", () => {
    const sayMyName = Person.prototype.sayMyName = jest.fn();
    
    const person = new Person('guy', 'smiley');
    const expected = {
      first: 'guy',
      last: 'smiley'
    }

    person.sayMyName();

    expect(sayMyName).toHaveBeenCalledTimes(1);
    expect(person).toEqual(expected);
  });
});