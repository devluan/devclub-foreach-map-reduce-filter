const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonSumAll = document.querySelector(".sum-all");
const buttonVeganAll = document.querySelector(".vegen-all");

function fortmatCurrency(valeu) {
    const newValue = valeu.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
    return newValue;
}

function showAll(productArray) {
    let myLi = ""; //myLi fica la fora em cima mais como estou usando ela somente aqui dentro posso usar aqui dentro
    productArray.forEach((product) => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p class="item-name">${product.name}</p>
                <p class="item-price">${fortmatCurrency(product.price)}</p>
            </li>
        `;
    });

    list.innerHTML = myLi;
}

function mapAllItens() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // isso da 10% de desconto
    }));

    showAll(newPrice);
}

function sumAllItens() {
    const amount = menuOptions.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);

    list.innerHTML = `
    <li>
        <p class="sum">O valor total <br> dos itens é <br>${fortmatCurrency(
        amount
    )}</p>
    </li>
  `;
}

function veganAllItens() {
    const veganItens = menuOptions.filter((vegan) => {
        if (vegan.vegan === true) return true;
        else return false;
    });

    showAll(veganItens);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions)),
    buttonMapAll.addEventListener("click", mapAllItens),
    buttonSumAll.addEventListener("click", sumAllItens),
    buttonVeganAll.addEventListener("click", veganAllItens);
