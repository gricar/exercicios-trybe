import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
  }

  set score(value: number) {
    if (value > 25) {
      throw new Error('A pontuação deve ser menor que 25 pontos.');
    }

    super.score = value;
  }

}