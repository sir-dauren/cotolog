class Products {

    render() {
        let htmlCatalog = '';
        COTOLOG.forEach(({ id, name, price, img }) => {
            htmlCatalog += `
                <li>
                    <span>${name}</span>
                    <img src="${img}"/>
                </li>
            `;
        })
    }
}

const productsPage = new Products();
productsPage.render();