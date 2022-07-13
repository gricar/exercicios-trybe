import Person from "./Person"

export default class Student extends Person {
  private _enrollment: string; //matrícula
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(matricula: string) {
    if (matricula.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = matricula;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(grades: number[]) {
    if (grades.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

    this._examsGrades = grades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(grades: number[]) {
    if (grades.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');

    this._worksGrades = grades;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}