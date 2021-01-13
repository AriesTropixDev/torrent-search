const dom = {
  query: document.querySelector("#query"),
  results: document.querySelector("#results"),
  searchForm: document.querySelector("#form"),
};

const attributes = ["size", "seeds", "peers"];

dom.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(`/.netlify/functions/search?query=${dom.query.value}`)
    .then((res) => {
      return res.json();
    })
    .then((torrents) => {
      dom.results.innerHTML = "";

      torrents.forEach((torrent) => {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        const link = document.createElement("a");
        link.setAttribute("href", torrent.desc);
        link.textContent = torrent.title;
        titleCell.appendChild(link);
        row.appendChild(titleCell);

        attributes.forEach((attr) => {
          const cell = document.createElement("td");
          cell.textContent = torrent[attr];
          row.appendChild(cell);
        });

        dom.results.appendChild(row);
      });
    })
    .catch((err) => {
      console.error(err);
    });
});
