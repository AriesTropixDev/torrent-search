const torrent = require("torrent-search-api");

torrent.enableProvider("ThePirateBay");

test("gets providers", async () => {
  const providers = torrent.getProviders();
  console.log(providers);
  expect(providers.length).toBeGreaterThan(0);
});

test("searches and returns limited results", async () => {
  expect.assertions(1);

  const torrents = await torrent.search("1080", null, 10);

  expect(torrents.length).toBe(10);
});

test("searches and returns movies", async () => {
  expect.assertions(1);

  const torrents = await torrent.search("1080", "Movies", 10);

  expect(torrents.length).toBe(10);
});
