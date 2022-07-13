export default class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true; //deve ser setado como `true` na inicialização.
  }

  sayHello(): void {
    console.log('Olá mundo :)');
  }
}