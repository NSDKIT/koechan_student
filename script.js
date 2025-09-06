document.addEventListener('DOMContentLoaded', () => {
    console.log('声キャン！LPがロードされました。');
    
    // CTAボタンのクリックイベントなどを今後追加できます
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(`${event.target.textContent}がクリックされました。`);
        });
    });
});
