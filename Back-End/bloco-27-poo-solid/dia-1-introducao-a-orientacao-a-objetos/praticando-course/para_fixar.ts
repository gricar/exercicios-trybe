class Tv {
  _brand: string;
  _size: number;
  _resolution: number;
  _connections: string[];
  _connectedTo?: string;

  constructor(brand: string, size: number, resolution: number, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn(): void {
    console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
  }
}

const samsungTv = new Tv('Samsung', 50, 1024, ['Ethernet', 'HDMI']);
samsungTv.turnOn();
//TV Samsung, 50", resolution: 1024, available connections: Ethernet,HDMI" 