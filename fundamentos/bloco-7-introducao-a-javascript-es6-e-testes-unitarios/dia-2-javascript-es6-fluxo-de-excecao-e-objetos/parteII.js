/* Bloco 7.2 JavaScript ES6 - Fluxo de exceção e Objetos
Parte II */

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Ex: 1 - retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (pedido) => {
  const deliveryPerson = pedido.order.delivery.deliveryPerson;
  const buyerPerson = order.name;
  const buyerPhone = order['phoneNumber'];
  const buyerAdressSt = order.address.street;
  const buyerAdressNb = order.address.number;
  const buyerAdressApt = order['address'].apartment;
  
  return `Olá ${deliveryPerson}, entrega para: ${buyerPerson}, telefone: ${buyerPhone}, R. ${buyerAdressSt}, Nº: ${buyerAdressNb}, AP: ${buyerAdressApt}.`
}

console.log(customerInfo(order));


// Ex: 2 - Modifique o nome da pessoa compradora & o valor total da compra para R$ 50,00.
// retorno seja "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
const orderModifier = (order) => {
  const otherPerson = order.name = 'Luiz Silva';
  const pizzaOrder = Object.keys(order.order.pizza);
  const drinkOrder = order.order.drinks.coke.type;
  /* outra solução
  const pizzaOrder1 = Object.keys(order.order.pizza)[0];
  const pizzaOrder2 = Object.keys(order.order.pizza)[1];
  const drinkOrder = Object.values(order.order.drinks.coke)[0]; */
  const newTotalPayment = order.payment.total = 50;
  
  return `Olá ${otherPerson}, o total do seu pedido de ${pizzaOrder[0]}, ${pizzaOrder[1]} e ${drinkOrder} é R$ ${newTotalPayment},00.`
}

console.log(orderModifier(order));

/*
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00.
*/