function toCase(text) {
  let str = text.toLowerCase();
	let upeer = text.toUpperCase();
	return `${str}-${upeer}`
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
