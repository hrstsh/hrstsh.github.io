const toggle = document.getElementById('toggle');

// 現在の設定を読み込む
chrome.storage.sync.get(['enabled'], function(result) {
  toggle.checked = result.enabled || false;
});

// トグル変更時に保存
toggle.addEventListener('change', function() {
  chrome.storage.sync.set({ enabled: toggle.checked });
});
