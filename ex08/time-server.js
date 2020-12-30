/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/30 15:45:25 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/30 17:02:53 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const net = require("net");

const getTimeString = () => {
  const date = new Date();
  const year = date.getFullYear().toString().padStart(4, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  console.log(`${year}-${month}-${day} ${hour}:${min}`);
  return (`${year}-${month}-${day} ${hour}:${min}\n`);
}

const portIsValid = (port) => {
  return  (port >= 0 && port <= 65535);
}

const createTimeServer = (port) => {
  if (!portIsValid(port)) {
    console.error(`port ${port} is not valid`);
    return ;
  }
  const server = net.createServer((c) => {
    console.log("client connected");
    const timeString = getTimeString();
    c.on("end", () => {
      console.log("client disconnected");
    });
    c.on("error", (error) => {
      console.error("server error");
    });
    c.write(timeString);
    c.end();
  });
  server.on("error", (err) => {
      console.error("server error");
  });
  server.listen(port, () => {
    console.log(`listening on ${port}`);
  });
}

createTimeServer(Number.parseInt(process.argv[2], 10));
