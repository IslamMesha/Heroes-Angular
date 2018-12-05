export class Hero {


  // Make sure that this variables are private by default.
  constructor(
    public id: number,
    public name: string,
    public age: number,
  ) {
    console.log('New Hero');
  }

}
