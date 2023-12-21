function calculateElasticity() {
    const initialPrice = parseFloat(document.getElementById('initialPrice').value);
    const finalPrice = parseFloat(document.getElementById('finalPrice').value);
    const initialQuantity = parseFloat(document.getElementById('initialQuantity').value);
    const finalQuantity = parseFloat(document.getElementById('finalQuantity').value);
    const elasticity = ((finalQuantity - initialQuantity) / ((finalQuantity + initialQuantity) / 2)) /
                        ((finalPrice - initialPrice) / ((finalPrice + initialPrice) / 2));
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Price Elasticity of Demand: ${elasticity.toFixed(2)}</p>`;
}
