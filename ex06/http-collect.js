/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 19:51:26 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/24 17:42:39 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

try {
  if (process.argv[2] === undefined)
    throw new Error('Empty URL');
  http.request(process.argv[2], (res) => {
    res.setEncoding('utf8');
    let dataString = "";
    res.on("error", (error) => {
      console.error(`error code: ${error.code}`);
    });
    res.on("data", (chunk) => {
      dataString += chunk.toString();
    });
    res.on("end", () => {
      console.log(dataString.length);
      console.log(dataString);
    });
  }).on("error", (error) => {
    console.error(`error code: ${error.code}`);
  }).end();
} catch (error) {
  console.error(error.message);
}
