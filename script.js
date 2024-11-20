function calculateAdvice() {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savings = income - expenses;

    const adviceDiv = document.getElementById('advice');
    adviceDiv.style.display = 'block';

    if (savings > 0) {
        const savingRate = (savings / income) * 100;

        adviceDiv.innerHTML = `
            <p><strong>Ingresos:</strong> $${income.toFixed(2)}</p>
            <p><strong>Gastos Fijos:</strong> $${expenses.toFixed(2)}</p>
            <p><strong>Ahorros Disponibles:</strong> $${savings.toFixed(2)}</p>
            <p><strong>Consejos:</strong></p>
            <ul>
                <li>Destina al menos el 20% de tus ahorros a un fondo de emergencias.</li>
                <li>Considera invertir el ${savingRate.toFixed(1)}% que ahorras en instrumentos de bajo riesgo como fondos indexados o CETES.</li>
                <li>Controla tus gastos variables para maximizar el ahorro.</li>
            </ul>
        `;
    } else if (savings === 0) {
        adviceDiv.innerHTML = `
            <p><strong>Ingresos:</strong> $${income.toFixed(2)}</p>
            <p><strong>Gastos Fijos:</strong> $${expenses.toFixed(2)}</p>
            <p>No tienes margen para ahorrar este mes. Evalúa reducir tus gastos fijos o buscar ingresos adicionales.</p>
        `;
    } else {
        adviceDiv.innerHTML = `
            <p><strong>Ingresos:</strong> $${income.toFixed(2)}</p>
            <p><strong>Gastos Fijos:</strong> $${expenses.toFixed(2)}</p>
            <p><strong>Déficit:</strong> $${Math.abs(savings).toFixed(2)}</p>
            <p>Estás gastando más de lo que ingresas. Busca optimizar tus gastos y evita endeudarte innecesariamente.</p>
        `;
    }
}
