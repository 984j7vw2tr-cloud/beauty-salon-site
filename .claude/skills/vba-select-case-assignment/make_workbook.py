from openpyxl import Workbook
from openpyxl.styles import PatternFill, Font, Border, Side, Alignment
wb=Workbook()
ws=wb.active; ws.title="Select～Case"
thin=Side(style="thin"); box=Border(left=thin,right=thin,top=thin,bottom=thin)
green=PatternFill("solid",fgColor="00FF00"); orange=PatternFill("solid",fgColor="FF9900"); yellow=PatternFill("solid",fgColor="FFFF00")
def hdr(c,v,fill):
    ws[c]=v; ws[c].fill=fill; ws[c].border=box; ws[c].font=Font(bold=True); ws[c].alignment=Alignment(horizontal="center")
ws["B2"]="条件分岐(Select～Case)の練習"; ws["B2"].font=Font(bold=True,size=14,color="FFFFFF")
for c in "BCDEF": ws[c+"2"].fill=PatternFill("solid",fgColor="4472C4")
def sec(r,t,d,title):
    ws[f"B{r}"]="実習"; ws[f"B{r}"].fill=yellow; ws[f"B{r}"].border=box
    ws[f"C{r}"]=t; ws[f"C{r+1}"]=d; ws[f"I{r+1}"]=title
sec(6,"数値を条件として指定する","入力した「コード」に対応する「部署名」を表示しましょう。","所属")
hdr("C9","コード",green); ws["C10"]=250; ws["C10"].border=box
ws["E9"]="[ボタン] Select～Case 1  → マクロ: syozoku"
hdr("I8","コード",orange); hdr("J8","部署名",orange)
for i,(a,b) in enumerate([(100,"総務部"),(200,"人事部"),(300,"営業部"),(400,"企画部"),(500,"開発部")]):
    ws[f"I{9+i}"]=a; ws[f"J{9+i}"]=b
sec(15,"連続した値を条件として指定する","入力した「ポイント」に対応する「商品」を表示しましょう。","プレゼント")
hdr("C18","ポイント",green); ws["C19"]=1000; ws["C19"].border=box
ws["E18"]="[ボタン] Select～Case 2  → マクロ: point"
hdr("I17","ポイント",orange); hdr("J17","商品",orange)
for i,(a,b) in enumerate([("1000以上","商品券"),("800以上","図書カード"),("500以上","入浴剤"),("200以上","タオル")]):
    ws[f"I{18+i}"]=a; ws[f"J{18+i}"]=b
sec(23,"連続しない値を条件として指定する","入力した「コード」に対応する「タイプ」を表示しましょう。","自動車区分")
hdr("C26","コード",green); ws["C27"]=100; ws["C27"].border=box
ws["E26"]="[ボタン] Select～Case 3  → マクロ: kubun"
hdr("I25","コード",orange); hdr("J25","タイプ",orange)
for i,(a,b) in enumerate([("100,110,120","乗用車"),("201,211,221","RV・4WD"),("300,305,310","スポーツカー")]):
    ws[f"I{26+i}"]=a; ws[f"J{26+i}"]=b
sec(30,"文字列を条件として指定する","入力した「色」に対応するフォントの色を設定しましょう。","ColorIndex表")
hdr("C33","色",green); ws["C34"]="RED"; ws["C34"].font=Font(color="FF0000"); ws["C34"].border=box
ws["E33"]="[ボタン] Select～Case 4  → マクロ: iro"
hdr("I32","色",orange); hdr("J32","色番号",orange)
for i,(a,b) in enumerate([("RED",3),("BLUE",5),("PINK",7),("GREEN",10)]):
    ws[f"I{33+i}"]=a; ws[f"J{33+i}"]=b
ws.column_dimensions["E"].width=40; ws.column_dimensions["I"].width=14; ws.column_dimensions["J"].width=14

w2=wb.create_sheet("血圧判定")
w2["B1"]="右の表は血圧(上のみ)の目安で、それより高い場合は「高い」、それ以下の場合は「正常」と表示するプロシージャ「判定」を作成しなさい。"
for r,(l,v) in enumerate([("性別","男"),("年齢",62),("血圧",141),("判定",None)],start=3):
    w2[f"B{r}"]=l; w2[f"B{r}"].fill=green; w2[f"B{r}"].border=box; w2[f"C{r}"]=v; w2[f"C{r}"].border=box
w2["E3"]="[ボタン] 判定  → マクロ: 判定"
w2["D6"]="←ここに「高い」「正常」と表示される。"
w2["B8"]="性別と年齢と血圧を入力し、ボタンをクリックすると判定が表示される"
w2["B10"]="例)男、55歳、血圧130 だと「正常」と表示される。"
w2["B11"]="性別に「男」「女」以外が入力されたら「性別が不正です」とメッセージを表示する"
w2["B13"]="Select ～ Case を使用すること"
for c,v in zip("HIJKLM",["年齢別","～30歳代","40歳代","50歳代","60歳代","70歳以上"]): hdr(f"{c}3",v,orange)
for r,(s,vals) in enumerate([("男",[121,129,134,140,141]),("女",[113,122,129,135,141])],start=4):
    hdr(f"H{r}",s,orange)
    for c,v in zip("IJKLM",vals): w2[f"{c}{r}"]=v; w2[f"{c}{r}"].border=box
w2["H6"]="※実際は上/下(120/85)のように評価します。"
w2.column_dimensions["E"].width=30
import sys
wb.save(sys.argv[1] if len(sys.argv)>1 else "プログラミング2.xlsx")
