function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

let orders = [];

function addOrder(customerName, items) {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  const order = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu',
  };
  orders.push(order);
}

function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

function calculateTotalRevenue() {
  return orders
  .filter(order => order.status === 'Selesai')
  .reduce((acc, order) => acc + order.totalPrice, 0);
}

function deleteOrder(id) {
  const index = orders.findIndex(order => order.id === id);
  if (index !== -1) {
    orders.splice(index, 1);
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
