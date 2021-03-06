export const greeter = (name: string) => `Olá ${name}`;

export const personAge = (name: string, age: number) => `${name} tem ${age} anos!`;

export const add = (x: number, y: number): number => x + y;

export const sumArray = (numbers: number[]): number => numbers.reduce(add, 0);

export const triangle = (base: number, height: number): number => (base * height) / 2;

export const rectangle = (base: number, height: number): number => base * height;

export const circle = (radius: number): number => {
  const PI: number = 3.14;

  return PI * radius ** 2;
}