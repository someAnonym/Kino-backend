export class PersonEntity {
  constructor(private readonly _name: string, private readonly _id: string) {}

  public get name(): string {
    return this._name;
  }
}
