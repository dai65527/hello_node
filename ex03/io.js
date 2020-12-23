/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 17:52:46 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/23 18:18:59 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

try {
  const buf = fs.readFileSync(process.argv[2], "utf-8");
  const newline = /\n/g;
  const array = buf.match(newline);
  console.log(array.length);
} catch (error) {
  console.log(error.message);  
}
