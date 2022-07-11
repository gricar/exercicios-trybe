class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn(): void {
    console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
  }
}

const samsungTv = new Tv('Samsung', 50, '4K', ['Ethernet', 'HDMI']);
samsungTv.turnOn();
//TV Samsung, 50", resolution: 4K, available connections: Ethernet,HDMI" 