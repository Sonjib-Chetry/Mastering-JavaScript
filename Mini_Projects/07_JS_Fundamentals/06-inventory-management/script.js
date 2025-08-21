
const inventory = [];

function findProductIndex(productName) {
  const lowerCaseProductName = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerCaseProductName) {
      return i;
    }
  }

  return -1;
}


function addProduct(productObject) {
  const { name, quantity } = productObject;
  const lowerCaseName = name.toLowerCase();
  const numberQuantity = Number(quantity);

  const modifiedObject = {
    name: lowerCaseName,
    quantity: numberQuantity
  };

  const index = findProductIndex(lowerCaseName);

  if (index === -1) {
    inventory.push(modifiedObject);
    console.log(`${lowerCaseName} added to inventory`);
    return;
  } else {
    inventory[index].quantity += numberQuantity;
    console.log(`${lowerCaseName} quantity updated`);
  }
}


function removeProduct(productName, productQuantity) {

  const lowerCaseName = productName.toLowerCase();
  const numberQuantity = Number(productQuantity);

  const index = findProductIndex(lowerCaseName);

  if (index === -1) {
    console.log(`${lowerCaseName} not found`);
    return;
  }
  else if (inventory[index].quantity < numberQuantity) {
    console.log(`Not enough ${lowerCaseName} available, remaining pieces: ${inventory[index].quantity}`);
    return;
  }
  else if (inventory[index].quantity === numberQuantity) {
    inventory.splice(index, 1);
    console.log(`${lowerCaseName} quantity 0, ${lowerCaseName} removed`);
    return;
  }
  else {
    inventory[index].quantity -= productQuantity;
    console.log(`Remaining ${lowerCaseName} pieces: ${inventory[index].quantity}`);;
  }
}


// function findProductIndex(productName) {
//   const name = productName.toLowerCase();
//   return inventory.findIndex(item => item.name === name);
// }



