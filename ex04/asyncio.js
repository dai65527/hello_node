/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 17:52:46 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/23 19:48:52 by dnakano          ###   ########.fr       */
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

const readFileCountNewLine = async (filename) => {
  try {
    const buf = await fs.readFileSync(filename, "utf-8");
    const count = countNewLine(buf);
    console.log(count);
  } catch (error) {
    console.log(error.message);  
  }
}

readFileCountNewLine(process.argv[2]);
