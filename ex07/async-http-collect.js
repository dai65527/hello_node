/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/24 17:45:23 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/30 15:24:04 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

if (process.argv.length !== 5) {
  console.error("Error: invalid argument")
  return ;
}

let dataStrings = [];
let count = 0;

const printDataStrings = (dataStrings) => {
  for (let i = 0; i < process.argv.length - 2; i++) {
    console.log(dataStrings[i]);
  }
}

const collectDataFromUrl = (urlString, index) => {
  try {
    const req = http.request(urlString, (res) => {
      res.setEncoding("utf-8");
      dataStrings[index] = "";
      res.on("data", (chunk) => {
        dataStrings[index] += chunk.toString();
      });
      res.on("error", (error) => {
        console.error("Error on response: " + error.code);
      });
      res.on("end", () => {
        count++;
        if (count === 3) {
          printDataStrings(dataStrings);
        }
      });
    });
    req.on("error", (error) => {
      console.error("Error on request: " + error.code);
    });
    req.end();
  } catch (error) {
    console.error(error.message);
  }
}

for (let i = 0; i < (process.argv.length - 2); i++) {
  collectDataFromUrl(process.argv[i + 2], i);
}
