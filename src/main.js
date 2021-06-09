const fetchItems = () => {
  return fetch("data/data.json")
    .then((res) => res.json())
    .then((json) => json.items);
};

const displayItems = (items) => {
  const item = document.querySelector(
    ".items"
  );
  item.innerHTML = items
    .map((item) =>
      createHTMLString(item)
    )
    .join("");
  console.log(item);
};

const createHTMLString = (item) => {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="itemImg" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>`;
};

fetchItems()
  .then((items) => {
    displayItems(items);
    // setEventListener(items);
  })
  .catch(console.log());
