const btn = document.getElementById('btn'); // ボタンのIDを取得
const text = document.getElementById('text'); // h2要素のIDを取得

btn.addEventListener('click', () => { 
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました'; // 2病後の文章
    }, 2000); // 2000ミリ秒（= 2秒）後に実行
});
