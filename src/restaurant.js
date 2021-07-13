function showData() {
	new Set();
	const finalResult = transformData(data);
	let div = document.getElementById('container');
	finalResult.forEach((value) => {
		div.innerHTML = `${div.innerHTML}<p class='inner' >${JSON.stringify(value)}</p>`;
	})
}

function transformData(data) {
	const result = new Set();
	const finalResult = [];
	data.forEach((value) => {
		result.add(value.name);
	})
	result.forEach((value) => {
		finalResult.push(data.filter(item => {
			return !(value !== item.name);
		}))
	})

	return finalResult;
}
