class Tv {
  _brand: string;
  _size: number;
  _resolution: number;
  _connections: string[];
  _connectedTo: string;

  constructor(brand: string, size: number, resolution: number, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }
}