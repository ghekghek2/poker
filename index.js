// Get references to the buttons and paragraphs
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const cardGuid = document.getElementById('cardGuide');
const boardGuide = document.getElementById('boardGuide');

// boardGuide.style.display = 'none';
cardGuide.style.display = 'none';
button2.style.backgroundColor = '#648D3D';
// Attach event listeners to the buttons
button1.addEventListener('click', () => {
  // Show paragraph 1 and hide paragraph 2
  cardGuid.style.display = '';
  boardGuide.style.display = 'none';
  button1.style.backgroundColor = '#648D3D';
  button2.style.backgroundColor = '';
});

button2.addEventListener('click', () => {
  // Show paragraph 2 and hide paragraph 1
  cardGuid.style.display = 'none';
  boardGuide.style.display = '';
  button1.style.backgroundColor = '';
  button2.style.backgroundColor = '#648D3D';
});
