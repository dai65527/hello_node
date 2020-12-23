/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:30:01 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/23 21:25:38 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

try {
  if (process.argv[2] === undefined)
    throw new Error('Empty URL');
  http.request(process.argv[2], (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(chunk.toString());
    });
    res.on('error', (error) => {
      console.error(`error code: ${error.code}`);
    })
  }).on("error", (error) => {
    console.error(`error code: ${error.code}`);
  }).end();
} catch (error) {
  console.error(error.message);
}
