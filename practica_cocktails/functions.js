console.log("Hello World Cocktails");

async function obtenerCocteles() {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c");
    const data = await response.json();
    console.log('Cocteles:', data.drinks);
    return data.drinks.slice(0, 15);
}

console.log(obtenerCocteles());

function pintarCocteles(cocteles) {
    console.log("Pintando cocteles:", cocteles);
    let tarjetasHTML = "";
    console.log("Tarjetas HTML:", tarjetasHTML);
    cocteles.forEach(coctel => {
        tarjetasHTML += `
            <div class="card">
                <img src="${coctel.strDrinkThumb}" alt="${coctel.strDrink}">
                <h3>${coctel.strDrink}</h3>
                <p>${coctel.strCategory}</p>
                <p>${coctel.strAlcoholic}</p>
                <p>${coctel.strGlass}</p>
            </div>
        `;
    });
    document.getElementById("main-container").innerHTML = tarjetasHTML;
}

obtenerCocteles().then(pintarCocteles);