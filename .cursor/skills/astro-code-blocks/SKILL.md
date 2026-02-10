---
name: astro-code-blocks
description: .astro のテンプレート内でコード例を書くとき、{ } によるビルドエラーを防ぐルールと CodeBlock コンポーネントの使い方。Astro ページにコードブロックを追加・修正するときに適用する。
---

# Astro コードブロック

## 問題

.astro の **HTML テンプレート部分**（frontmatter や `<style>` の外）で、`<pre><code>` に **`{` や `}` を含むコード**（JS / JSON / CSS など）をそのまま書くと、Astro が `{` を式の開始と解釈し、ビルドエラーになる。

例: `Expected "}" but found ":"`

## 対応（どちらかを使う）

### 1. エスケープして直書き

コードブロック内だけ、次の置換を行う：

- `{` → `&#123;`
- `}` → `&#125;`

表示は通常の `{` `}` のまま。HTML エンティティなのでブラウザで正しく表示される。

### 2. CodeBlock コンポーネント（推奨）

コードを **frontmatter の変数（文字列）** に入れ、コンポーネントに渡す。テンプレートに `{` `}` を書かないためエラーにならない。

**使い方:**

```astro
---
import CodeBlock from '../components/CodeBlock.astro';  // パスは場所に合わせる
const jsonSnippet = `{
  "key": "value"
}`;
---
<CodeBlock code={jsonSnippet} language="json" />
```

- `code`: 表示したいコードの文字列（テンプレートリテラルや通常の文字列）
- `language`: 省略可。指定時は `"json"` / `"javascript"` / `"html"` など（`language-xxx` のクラスになる）

**コンポーネント場所:** `src/components/CodeBlock.astro`

## いつ適用するか

- 新しい .astro ページにコード例を追加するとき
- 既存の .astro の `<pre><code>` を編集するとき
- 「Transform failed」「Expected "}" but found」などのエラーが出たとき

## チェックリスト

コード例を .astro に書く前に：

- [ ] コードに `{` または `}` が含まれるか確認
- [ ] 含まれる → 直書きなら `&#123;` / `&#125;` に置換するか、CodeBlock で変数渡しにする
