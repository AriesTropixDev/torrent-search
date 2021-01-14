const torrent = require("torrent-search-api");

torrent.enablePublicProviders();

exports.handler = async (event) => {
  if (typeof event.queryStringParameters.q !== "string") {
    return {
      statusCode: 400,
      body: "Must provide a `q` query parameter containing a search string.",
    };
  }

  const res = await torrent.search(event.queryStringParameters.q, null, 10);

  const torrents = res.map((torrent) => {
    return {
      ...torrent,
      shortTitle: torrent.title.slice(0, 50),
    };
  });

  return {
    statusCode: 200,
    body: JSON.stringify(torrents),
  };
};
