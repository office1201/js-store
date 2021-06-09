const fetchItems = () => {
  return fetch("data/data.json")
    .then((res) => res.json())
    .then((json) => json.items);
};

const displayItems = (items) => {
  const item = document.querySelector(".items");
  item.innerHTML = items.map((item) => createHTMLString(item)).join("");
};

const createHTMLString = (item) => {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="itemImg" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>`;
};

const handleClick = (event, items) => {
  const { key, value } = event.target.dataset;
  if (key == null || value == null) return;

  const filtered = items.filter((item) => item[key] === value);
  displayItems(filtered);
};

const setEventListener = (items) => {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".btns");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => handleClick(event, items));
};

fetchItems()
  .then((items) => {
    displayItems(items);
    setEventListener(items);
  })
  .catch(console.log());
