// AOSの初期化
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // アニメーションの時間（ミリ秒）
        easing: 'ease-in-out', // アニメーションの加速
        once: true // アニメーションを一度だけ実行
    });
});
