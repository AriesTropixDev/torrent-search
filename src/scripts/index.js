const Vue = window.Vue;

new Vue({
  el: "#app",
  data() {
    return {
      q: "",
      torrents: [],
      status: "initial",
    };
  },
  computed: {
    resultsFound() {
      return this.torrents[0].title !== "No results returned";
    },
  },
  methods: {
    search() {
      this.status = "searching";
      fetch(`/.netlify/functions/search?q=${this.q}`)
        .then((res) => res.json())
        .then((torrents) => {
          this.status = "searched";
          this.torrents = torrents;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
