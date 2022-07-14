export default interface Enrollable {
  enrollment: string; //identificador único da matrícula
  generateEnrollment(): string;
}