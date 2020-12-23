/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 17:52:46 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/23 18:27:40 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

const countNewline = async (filename) => {
  try {
    const buf = await fs.readFileSync(filename, "utf-8");
    console.log(buf.match(/\n/g).length);
  } catch (error) {
    console.log(error.message);  
  }
}

countNewline(process.argv[2]);
