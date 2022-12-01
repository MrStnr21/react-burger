const baseUrl = "https://norma.nomoreparties.space/api";

const request = (url, options) => {
  return fetch(url, options).then((res) =>
    res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
  );
};

export function getIngredientsApi() {
  return request(`${baseUrl}/ingredients`);
}

export function makeOrderApi(ingredientsId) {
  return request(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      ingredients: ingredientsId,
    }),
  });
}
