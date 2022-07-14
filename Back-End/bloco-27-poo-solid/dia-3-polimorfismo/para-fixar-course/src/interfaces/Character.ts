export interface Character {
  name: string;
  specialMove: string;
}

export interface DbCharacter extends Character { //para incluir aqueles existentes no banco de dados.
  id: number;
}

export const db: DbCharacter[] = [];
