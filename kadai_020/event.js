const btn = document.getElementById('btn'); 
const text = document.getElementById('text'); 

//ボタンクリック後
function handleClick() {
  text.textContent = 'ボタンをクリックしました';
}
btn.addEventListener('click', handleClick);