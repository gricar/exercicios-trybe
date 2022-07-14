import Teacher from "./Teacher";

export default class Evaluation {
  private _score: number; //nota da avaliação
  private _teacher: Teacher;
  private _type: string; //tipo da avaliação

  constructor(score: number, teacher: Teacher, type: string) {
    this._score = score;
    this._teacher = teacher;
    this._type = type;
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

  get type(): string {
    return this._type;
  }

  set type(name: string) {
    this.validateType(name);
    this._type = name;
  }

  validateScore(value: number): void {
    if (value < 0) throw new Error('A pontuação não pode ser negativa!');

    if (this._type === 'prova' && value > 25) {
      throw new Error('A pontuação deve ser menor que 25 pontos.');
    }

    if (this.type === 'trabalho' && value > 50) {
      throw new Error('A pontuação deve ser menor que 50 pontos.');
    }
  }

  validateType(name: string): void {
    const allowedTypes: string[] = ['prova', 'trabalho'];

    if (!allowedTypes.includes(name)) {
      throw new Error('O tipo de avaliação não é permitido!');
    }
  }
}