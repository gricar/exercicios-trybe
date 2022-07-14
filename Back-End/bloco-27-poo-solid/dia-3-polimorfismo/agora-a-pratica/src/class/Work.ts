import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
  }

  set score(value: number) {
    if (value > 50) {
      throw new Error('A pontuação deve ser menor que 50 pontos.');
    }

    super.score = value;
  }
}