// 未処理のPromise rejectionをキャッチするためのイベントリスナー
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
    // エラーをコンソールに表示し、ページがクラッシュするのを防ぎます
});
