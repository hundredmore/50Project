/*
 * @Author: your name
 * @Date: 2021-07-15 09:44:01
 * @LastEditTime: 2021-07-16 08:28:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \50project\Rotating Navigation\script.js
 */

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => {
  container.classList.add('show-nav');
})

close.addEventListener('click', () => {
  container.classList.remove('show-nav');
})