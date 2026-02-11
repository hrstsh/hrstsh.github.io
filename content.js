// 設定を読み込んでフィルターを適用
chrome.storage.sync.get(['enabled'], function(result) {
  if (result.enabled) {
    applyFilter();
  }
});

// 設定変更を監視
chrome.storage.onChanged.addListener(function(changes) {
  if (changes.enabled) {
    if (changes.enabled.newValue) {
      applyFilter();
    } else {
      removeFilter();
    }
  }
});

function applyFilter() {
  // 既存のstyleを削除
  const existingStyle = document.getElementById('twitter-image-only-filter');
  if (existingStyle) {
    existingStyle.remove();
  }

  // 新しいstyleを追加
  const style = document.createElement('style');
  style.id = 'twitter-image-only-filter';
  style.textContent = `
    /* 画像・動画がないツイートを非表示 */
    div[data-testid="cellInnerDiv"]:has(article):not(:has(div[data-testid="tweetPhoto"])):not(:has(video)) {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
}

function removeFilter() {
  const style = document.getElementById('twitter-image-only-filter');
  if (style) {
    style.remove();
  }
}
