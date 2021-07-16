/*
 * @Author: your name
 * @Date: 2021-07-16 13:13:23
 * @LastEditTime: 2021-07-16 13:54:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \50project\Blurry Loading\script.js
 */
const loadText = document.querySelector('.loading');
const bg = document.querySelector('.bg');

let load = 0;
let int =setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opactiy = scale(load,0,100,1,0);
  bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
  return((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}