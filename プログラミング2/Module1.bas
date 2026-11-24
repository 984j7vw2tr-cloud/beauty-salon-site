Option Explicit

Sub syozoku()
    Dim busyo As String
    Select Case Range("C10").Value
        Case 100
            busyo = "総務部"
        Case 200
            busyo = "人事部"
        Case 300
            busyo = "営業部"
        Case 400
            busyo = "企画部"
        Case 500
            busyo = "開発部"
        Case Else
            busyo = "正しいコードを入力してください"
    End Select
    MsgBox busyo
End Sub

Sub point()
    Dim present As String
    Select Case Range("C19").Value
        Case Is >= 1000
            present = "商品券"
        Case 800 To 999
            present = "図書カード"
        Case 500 To 799
            present = "入浴剤"
        Case 200 To 499
            present = "タオル"
        Case Else
            present = "対応する商品はありません"
    End Select
    MsgBox present
End Sub

Sub kubun()
    Dim taipu As String
    Select Case Range("C27").Value
        Case 100, 110, 120
            taipu = "乗用車"
        Case 201, 211, 221
            taipu = "RV・4WD"
        Case 300, 305, 310
            taipu = "スポーツカー"
        Case Else
            taipu = "正しいコードを入力してください"
    End Select
    MsgBox taipu
End Sub

Sub iro()
    Select Case Range("C34").Value
        Case "RED"
            Range("C34").Font.Color = vbRed
        Case "BLUE"
            Range("C34").Font.Color = vbBlue
        Case "PINK"
            Range("C34").Font.Color = vbMagenta
        Case "GREEN"
            Range("C34").Font.Color = vbGreen
        Case Else
            MsgBox "RED,BLUE,PINK,GREEN のいずれかを入力してください"
    End Select
End Sub

Sub 判定()
    Dim seibetu As String
    Dim nenrei As Integer
    Dim ketuatu As Integer
    Dim meyasu As Integer
    Dim hantei As String
    seibetu = Range("C3").Value
    nenrei = Range("C4").Value
    ketuatu = Range("C5").Value
    Select Case seibetu
        Case "男"
            Select Case nenrei
                Case Is < 40
                    meyasu = 121
                Case Is < 50
                    meyasu = 129
                Case Is < 60
                    meyasu = 134
                Case Is < 70
                    meyasu = 140
                Case Else
                    meyasu = 141
            End Select
        Case "女"
            Select Case nenrei
                Case Is < 40
                    meyasu = 113
                Case Is < 50
                    meyasu = 122
                Case Is < 60
                    meyasu = 129
                Case Is < 70
                    meyasu = 135
                Case Else
                    meyasu = 141
            End Select
        Case Else
            MsgBox "性別が不正です"
            Range("C6").Value = ""
            Exit Sub
    End Select

    If ketuatu > meyasu Then
        hantei = "高い"
    Else
        hantei = "正常"
    End If
    Range("C6").Value = hantei
End Sub
