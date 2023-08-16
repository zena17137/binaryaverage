function binaryAverage(binary) {
	let code = binary.split('').map((el) => {
		if (el === 'x') {
			return '1';
		} else {
			return el;
		}
	});

	let code3 = binary.split('').map((el) => {
		if (el === 'x') {
			return '0';
		} else {
			return el;
		}
	});

	
	if (code3[0] === '0' && binary.length !== 1) {
		code3[0] = '1';
	}

	let code2 = code.reduce((acc, el, index) => {
		let item = parseInt(el) * Math.pow(2, code.length - 1 - index);
		acc += item;
		return acc;
	}, 0);

	let code4 = code3.reduce((acc, el, index) => {
		let item = parseInt(el) * Math.pow(2, code3.length - 1 - index);
		acc += item;
		return acc;
	}, 0);
	let result = (code2 + code4) / 2;

	console.log(result);
	//console.log(code2);
	//console.log(code3);

	return result;
}

binaryAverage('1100010')