document.addEventListener('DOMContentLoaded', () => {
    console.log('声キャン！LPがロードされました。');
    
    // 今後、フォームのバリデーションや、クリック時のトラッキング、
    // スクロールアニメーションなどの機能を追加する際にここにコードを記述します。
    
    // 例：CTAボタンのクリックイベント
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(`${event.target.textContent}がクリックされました。`);
            // ここで、ユーザーを登録ページやアンケートページにリダイレクトする処理などを記述します。
            // event.preventDefault();
        });
    });
});
