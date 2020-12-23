/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:30:01 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/23 19:33:55 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

try {
  if (process.argv[2] === undefined)
    throw new Error('Empty URL');
  req = http.request(process.argv[2], (res) => {
    res.on('data', (chunk) => {
        console.log(`${chunk}`);
    });
  });
  req.end();
} catch (error) {
  console.error(error.message);
}
