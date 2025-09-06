document.addEventListener('DOMContentLoaded', () => {
    console.log('声キャン！LPがロードされました。');

    // CTAボタンのクリックイベント
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(`${event.target.textContent}がクリックされました。`);
        });
    });

    // 学生の声スライドショー
    const voiceContainer = document.getElementById('voice-container');
    const voiceCards = voiceContainer.querySelectorAll('.voice-card');
    let currentIndex = 0;

    // 最初のカードを表示
    if (voiceCards.length > 0) {
        voiceCards[currentIndex].classList.add('active');
    }

    // 3秒ごとにカードを切り替える
    setInterval(() => {
        // 現在のカードを非表示にする
        voiceCards[currentIndex].classList.remove('active');

        // 次のカードへ
        currentIndex = (currentIndex + 1) % voiceCards.length;

        // 次のカードを表示する
        voiceCards[currentIndex].classList.add('active');
    }, 3000); // 3000ミリ秒 = 3秒
});
