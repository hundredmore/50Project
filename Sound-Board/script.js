/*
 * @Author: your name
 * @Date: 2021-07-20 16:33:45
 * @LastEditTime: 2021-07-20 16:56:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \50project\Sound-Board\script.js
 */
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    song.currenTime = 0;
  })
}

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(sound).play();
  })
  document.getElementById('buttons').appendChild(btn);
})


