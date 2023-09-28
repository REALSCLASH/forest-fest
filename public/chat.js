'use strict';

// Server URL below must point to your server, localhost works for local development/testing
const socket = io('https://mdds-server23.northeurope.cloudapp.azure.com');

const nicknameInput = document.getElementById('nickname');
const roomSelect = document.getElementById('room');
const messageInput = document.getElementById('m');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const nickname = nicknameInput.value;
  const room = roomSelect.value;
  const message = messageInput.value;

  if (nickname && room && message) {
    socket.emit('chat message', { nickname, room, message });
    messageInput.value = '';
  } else {
    console.log('Please fill in all fields.');
  }
});

socket.on('chat message', (msgObj) => {
  const { nickname, room, message } = msgObj;
  if (room === roomSelect.value) {

    const item = document.createElement('li');
    item.innerHTML = `<strong>${nickname}:</strong> ${message}`;
    document.getElementById('messages').appendChild(item);
  }
});
