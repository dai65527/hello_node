/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:30:01 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/30 15:23:42 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

try {
  if (process.argv.length < 3) {
    throw new Error("Error: Empty URL");
  }
  const req = http.request(process.argv[2], (res) => {
    res.setEncoding("utf-8");
    res.on("data", (chunk) => {
      console.log(chunk.toString());
    });
    res.on("error", (error) => {
      console.error("Error on response: " + error.code);
    })
  });
  req.on("error", (error) => {
    console.error("Error on request: " + error.code);
  });
  req.end();
} catch (error) {
  console.error(error.message);
}
