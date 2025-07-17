let producList = {
  product1: {
    name: "Laptop",
    price: 1000,
    quantity: 5,
  },
  product2: {
    name: "Smartphone",
    price: 500,
    quantity: 10,
  },
  product3: {
    name: "Tablet",
    price: 300,
    quantity: 8,
  },
};

function productDetails(productList) {
  for (let product in producList) {
    console.log(`Product Name: ${producList[product].name}`);
    console.log(`Price: $${producList[product].price}`);
    console.log(`Available Quantity: ${producList[product].quantity}`);
    console.log("-------------------------");
  }
}


function addStock(productList, productID, quantity) {
    if (productList[productID]) {
        productList[productID].quantity += quantity;
        console.log(`Stock for ${productList[productID].name} updated. New quantity: ${productList[productID].quantity}`);
    }
}

function addProduct(productList, productName, price, quantity) {
  const newProduct = {
    name: productName,
    price: price,
    quantity: quantity,
  };
    const productKey = `product${Object.keys(productList).length + 1}`;
    productList[productKey] = newProduct;
    console.log(`Product ${productName} added successfully!`);
    return productList;
}   

function removeProduct(productList, productID) {
  if (productList[productID]) {
    delete productList[productID];
    console.log(`Product ${productID} removed successfully!`);
  } else {
    console.log(`Product ${productID} does not exist.`);
  }
  return productList;
}

function buyProduct(productList, productName, price, quantity) {
    for (let product in productList) {
    if (productList[product].name === productName) {
      if (productList[product].quantity >= quantity) {
        productList[product].quantity -= quantity;
        console.log(`You bought ${quantity} ${productName}(s) for $${price * quantity}.`);
      } else {
        console.log(`Insufficient stock for ${productName}. Available quantity: ${productList[product].quantity}`);
      }
      return productList;   
    }
}
}
buyProduct(producList, "Smartphone", 500, 2);
console.log(producList)