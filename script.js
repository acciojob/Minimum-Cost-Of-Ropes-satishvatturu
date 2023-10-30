function calculateMinCost(lengthValues) {

	const inputElement = document.getElementById("rope-lengths");
	const ropelengths = inputElement.value.split(",").map(Number);

	ropelengths.sort((a,b) => a-b);

	let finalRes = 0;
	while(ropelengths.length>1)
	{
		const min1 = ropelengths.shift();
		const min2 = ropelengths.shift();
		let cost = min1+min2;
		finalRes = finalRes + cost;
		ropelengths.push(cost);
		ropelengths.sort((a,b) => a-b);
	}
	
	const result = document.getElementById("result");
	result.innerText = finalRes;
}  
