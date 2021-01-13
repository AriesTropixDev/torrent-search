const Vue = window.Vue;

new Vue({
  el: "#app",
  data() {
    return {
      q: "",
      torrents: [],
    };
  },
  methods: {
    search() {
      fetch(`/.netlify/functions/search?q=${this.q}`)
        .then((res) => {
          return res.json();
        })
        .then((torrents) => {
          console.log(torrents);
          this.torrents = torrents;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
