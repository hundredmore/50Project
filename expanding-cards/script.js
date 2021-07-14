/*
 * @Author: your name
 * @Date: 2021-07-13 09:28:43
 * @LastEditTime: 2021-07-13 13:19:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \50project\expanding-cards\script.js
 */
const panels = document.querySelectorAll('.panel');
panels.forEach((item)=>{
  item.addEventListener('click',()=>{
    panels.forEach((item)=>{
      item.classList.remove('active');
    })
    item.classList.add('active');
  })
})