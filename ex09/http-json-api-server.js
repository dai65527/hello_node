/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/30 17:09:38 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/30 21:55:26 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");
const url = require("url");

const getParseTime = (isoTimeString) => {
  const date = new Date(isoTimeString);
  return {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    seconds: date.getUTCSeconds()
  };
}

const getParseTimeUnix = (isoTimeString) => {
  return {
    unixtime: Date.parse(isoTimeString)
  };
}

const getTimeJson = (urlString) => {
  const urlParsed = url.parse(urlString, true);
  if (urlParsed.pathname === "/api/parsetime") {
    return (JSON.stringify(getParseTime(urlParsed.query.iso)))
  } else if (urlParsed.pathname === "/api/unixtime") {
    return (JSON.stringify(getParseTimeUnix(urlParsed.query.iso)))
  }
  console.log(JSON.stringify({}));
  return (JSON.stringify({}));
}

const portIsValid = (port) => {
  return  (port >= 0 && port <= 65535);
}

const createTimeParseServer = (port) => {
  if (!portIsValid(port)) {
    console.error(`port ${port} is not valid`);
    return ;
  }
  const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(getTimeJson(req.url) + "\n");
  });
  server.on("clientError", (err, socket) => {
    socket.end("400");
  });
  server.on("error", (err, socket) => {
    socket.end("500");
  })
  server.listen(port);
}

createTimeParseServer(Number.parseInt(process.argv[2], 10));
