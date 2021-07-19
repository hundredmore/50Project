/*
 * @Author: your name
 * @Date: 2021-07-19 10:51:03
 * @LastEditTime: 2021-07-19 13:24:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \50project\scroll-animation\script.js
 */
const boxs = document.querySelectorAll('.box')
window.addEventListener('scroll',()=>{
  const triggleBottom = window.innerHeight/ 5 * 4;
  boxs.forEach(box=>{
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggleBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
})