# 格闘ゲームToDo

格闘ゲームプレイヤーがタスクリストを作成・共有し、個別のタスクを管理することで進捗を追跡できるタスク管理アプリ。

## 機能

- タスク管理
  - タスクの作成と進捗管理
  - 進捗カウンターのワンタップ更新
  - タスクの完了マーク
  
- タスクリスト管理
  - タスクリストの作成（名前、説明、タグ設定）
  - タスクリストの編集
  - タスクの追加と削除
  
- タスクリストの共有と取り込み
  - 公開/非公開設定
  - 共有タスクリストの検索
  - いいね機能
  - タスクリストの取り込み

## 技術スタック

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## 開発環境のセットアップ

1. リポジトリのクローン:
\`\`\`bash
git clone [repository-url]
cd fighting-game-todo
\`\`\`

2. 依存関係のインストール:
\`\`\`bash
npm install
\`\`\`

3. 環境変数の設定:
\`.env.local\`ファイルを作成し、以下の変数を設定:
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
\`\`\`

4. 開発サーバーの起動:
\`\`\`bash
npm run dev
\`\`\`

## ライセンス

MIT 