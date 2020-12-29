/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 17:52:46 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/30 08:56:38 by dnakano          ###   ########.fr       */
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

try {
  console.log(countNewLine(fs.readFileSync(process.argv[2], "utf-8")));
} catch (error) {
  console.log(error.message);  
}