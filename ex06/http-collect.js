/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 19:51:26 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/30 15:23:54 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

try {
  if (process.argv.length != 3) {
    throw new Error("Error: invalid argument");
  }
  const req = http.request(process.argv[2], (res) => {
    res.setEncoding("utf-8");
    let dataString = "";
    res.on("data", (chunk) => {
      dataString += chunk.toString();
    });
    res.on("error", (error) => {
      console.error("Error on response: " + error.code);
    });
    res.on("end", () => {
      console.log(dataString.length);
      console.log(dataString);
    });
  });
  req.on("error", (error) => {
    console.error("Error on request: " + error.code);
  });
  req.end();
} catch (error) {
  console.error(error.message);
}
