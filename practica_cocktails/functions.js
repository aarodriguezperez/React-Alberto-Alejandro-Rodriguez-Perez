console.log("Hello World Cocktails");

async function obtenerCocteles() {

    const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    );

    const data = await response.json();

    const cocteles = data.drinks.slice(0, 15);

    const coctelesCompletos = [];

    for (const coctel of cocteles) {

        const responseDetalle = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${coctel.idDrink}`
        );

        const dataDetalle = await responseDetalle.json();

        coctelesCompletos.push(dataDetalle.drinks[0]);
    }

    return coctelesCompletos;
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
            <p class="category">${coctel.strCategory}</p>
            <p class="alcoholic">${coctel.strAlcoholic}</p>
            <p class="glass">${coctel.strGlass}</p>
        </div>
        `;
    });
    document.getElementById("main-container").innerHTML = tarjetasHTML;
}

obtenerCocteles().then(pintarCocteles);