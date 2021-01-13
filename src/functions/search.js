const torrent = require("torrent-search-api");

torrent.enablePublicProviders();

exports.handler = async (event, context, callback) => {
  if (typeof event.queryStringParameters.query !== "string") {
    return callback("Malformed query");
  }

  const torrents = await torrent.search(
    event.queryStringParameters.query,
    null,
    20
  );

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(torrents),
  });
};
