/*
 * @Author: your name
 * @Date: 2021-07-19 14:04:45
 * @LastEditTime: 2021-07-19 15:39:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \50project\Split landing pages\script.js
 */
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));