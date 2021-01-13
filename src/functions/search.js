const torrent = require("torrent-search-api");

torrent.enablePublicProviders();

exports.handler = async (event) => {
  if (typeof event.queryStringParameters.q !== "string") {
    return {
      statusCode: 400,
      body: "Must provide a `q` query parameter containing a search string.",
    };
  }

  const torrents = await torrent.search(
    event.queryStringParameters.q,
    null,
    10
  );

  return {
    statusCode: 200,
    body: JSON.stringify(torrents),
  };
};
