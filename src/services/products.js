const BASE_URL = "https://6911d50f52a60f10c81f72e3.mockapi.io/products"

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(product)
    });

    if (!res.ok){
        throw new Error("No se pudo crear el producto");
    }

    const result = await res.json();

    return result;
}