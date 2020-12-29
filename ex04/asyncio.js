/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 17:52:46 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/30 08:56:32 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

const countNewLine = (buf) => {
  let count = 0;
  for (let i = 0; i < buf.length; i++) {
    if (buf[i] === "\n") {
      count++;
    }
  }
  return count;
}

fs.readFile(process.argv[2], (error, data) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log(countNewLine(data.toString()));
  }
});
