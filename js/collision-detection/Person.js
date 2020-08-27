export default class Person {
  constructor(first, last) {
      this.first = first;
      this.last = last;
  }
  sayMyName() {
      console.log(this.first + " " + this.last);
  }
  bla() {
      return "bla";
  }
}
