import Teacher from "./Teacher";

export default class Evaluation {
  private _score: number; //nota da avaliação
  private _teacher: Teacher;

  constructor(score: number, teacher: Teacher) {
    this._score = score;
    this._teacher = teacher;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(name: Teacher) {
    this._teacher = name;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this.validateScore(value);
    this._score = value;
  }

  validateScore(value: number): void {
    if (value < 0) throw new Error('A pontuação não pode ser negativa!');
  }

}