/*
 * @Author: your name
 * @Date: 2021-07-14 13:44:11
 * @LastEditTime: 2021-07-14 14:49:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \50project\Progress Steps\script.js
 */
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click',()=>{
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener('click',()=>{
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update(){
  circles.forEach((item, index)=>{
    if (index < currentActive) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
  const actives = document.querySelectorAll('.active');
  progress.style.width = (actives.length - 1) / (circles.length - 1) *100 +'%';
  
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}