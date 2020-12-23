/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dnakano <dnakano@student.42tokyo.jp>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 17:52:46 by dnakano           #+#    #+#             */
/*   Updated: 2020/12/23 18:24:12 by dnakano          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

try {
  const buf = fs.readFileSync(process.argv[2], "utf-8");
  console.log(buf.match(/\n/g).length);
} catch (error) {
  console.log(error.message);  
}
