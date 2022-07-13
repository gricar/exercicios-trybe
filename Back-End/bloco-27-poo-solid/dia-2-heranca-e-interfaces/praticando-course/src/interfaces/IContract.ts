import Person from "../Person";

export default interface IContract {
  subject: string;
  clauses: string[];
  signatories: Person[];
  describe(): void;
}