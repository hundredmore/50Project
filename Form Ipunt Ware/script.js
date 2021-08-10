/*
 * @Author: your name
 * @Date: 2021-07-20 08:51:15
 * @LastEditTime: 2021-07-23 13:31:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \50project\Form Ipunt Ware\script.js
 */
const labels = document.querySelectorAll('.form-control label');
labels.forEach(label => {
  label.innerHTML = label.inenerText.split('')
    .map((label, idx) =>`<span style = "transition-delay:${idx *50}ms">${letter}</span>`)
    .join('')
})