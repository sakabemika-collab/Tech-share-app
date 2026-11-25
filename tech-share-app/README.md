# Tech Share App（技術ナレッジ共有アプリ）
技術ナレッジ記事の閲覧・検索・作成・編集・削除ができるWebアプリケーションです。
## 公開URL
https://tech-share-daq1upbme-mika-test.vercel.app/
## 主な機能
- 記事一覧・検索（Home）: 記事の一覧表示、キーワード検索や絞り込み
- 記事詳細・削除（Article）: Markdown形式の本文表示、記事の削除
- 記事作成・編集（Editor）: 新規投稿・既存記事の編集、ライブプレビュー
- 認証状態管理（AuthContext）: ログイン状態に応じた操作制御
## 技術スタック
| 技術| 選定理由 |
| --- | --- | 
|  React | コンポーネント設計でUIを整理するため |
| vite| 高速なビルド環境を整えるため |
| TailWind CSS | 素早くリタイングし開発速度を上げるため |
| jison-server | バックエンド実装に集中せず、API設計を学ぶため |
| react router | SPAでのページを自然に実装するため |
## 工夫した点・学んだこと
- 環境変数（VITE_API_URL）を活用し、ローカル環境と本番環境で接続先APIを切り替えられるように構成しました。
- Context API やカスタムフックを用いて状態管理や検索ロジックを整理しました。
- Vercel と Render を連携させ、GitHub プッシュによる自動デプロイの流れを構築しました。
## ローカルでの起動方法
### 1. バックエンド（JSON Server）の起動
```bash
npx json-server --watch db.json --port 3000
```
### 2. フロントエンドの起動
```bash
npm install
npm run dev
```