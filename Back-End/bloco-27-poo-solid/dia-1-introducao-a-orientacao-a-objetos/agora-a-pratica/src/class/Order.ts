import Client from "./Client";
import OrderItem from "./OrderItem";

export default class Order {
  private _customer: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount: 0 | number;

  constructor(customer: Client, items: OrderItem[], paymentMethod: string, discount: number) {
    this._customer = customer;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get customer(): Client {
    return this._customer;
  }

  set custumer(name: Client) {
    this._customer = name;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._discount = value;
  }
}
