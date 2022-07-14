export default interface IEnrollable {
  enrollment: string; //identificador único da matrícula
  generateEnrollment(): string;
}