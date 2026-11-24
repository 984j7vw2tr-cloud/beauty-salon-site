---
name: vba-select-case-assignment
description: 情報リテラシーII「プログラミング課題1-2」(Excel VBA の Select Case 練習)を手順どおりに進める。Excel VBA、Select Case、マクロ、血圧判定、syozoku/point/kubun/iro/判定 の話題が出たときに使う。
---

# Excel VBA Select Case 課題(プログラミング課題1-2)

最終成果物は `プログラミング2.xlsm`(マクロ有効ブック)。

## 環境の制約
- クラウド環境には Excel/VBE がなく、vbaProject.bin を作れないので `.xlsm` は直接作れない。
- 代わりに `.xlsx`(シート再現: openpyxl)と `Module1.bas`(Shift-JIS・CRLF)を作り、ユーザーに VBE でインポートしてもらう。
- 元ファイルがあれば、それを使うようユーザーに依頼する。

## 手順(ユーザーの Excel 側)
1. ブックを開く → 開発タブ → Visual Basic
2. ファイル → ファイルのインポートで `Module1.bas` を取り込む(手入力なら 挿入 → 標準モジュール)
3. VBE を閉じ、各ボタンにマクロを登録する
   - Select～Case 1 → `syozoku`(入力 C10)
   - Select～Case 2 → `point`(入力 C19)
   - Select～Case 3 → `kubun`(入力 C27)
   - Select～Case 4 → `iro`(入力 C34)
   - 血圧判定シート 判定ボタン → `判定`(入力 C3/C4/C5、出力 C6)
4. 動作確認: C10=250 → 「正しいコードを入力してください」/ C34=RED → 文字が赤 / 男・62歳・141 → 「高い」
5. 名前を付けて保存 → 「プログラミング2」、種類は Excel マクロ有効ブック(.xlsm)

## コード
`Module1.bas`(このフォルダ)に全プロシージャが入っている。Case Is < 40 など境界は課題プリントのまま。
