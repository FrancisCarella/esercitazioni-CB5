const qs = (type) => document.querySelector(type);

const ce = (type) => document.createElement(type);

const GET = async (BASE_URL) =>
  await fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => data);

export { qs, ce, GET };
