Attribute VB_Name = "Module1"
Option Explicit

Sub kingaku()
    Dim tanka As Integer
    Dim kazu As Integer
    Dim uriage As Integer
    tanka = Range("C11").Value
    kazu = Range("E11").Value
    uriage = tanka * kazu
    MsgBox uriage
End Sub

Sub shiken1()
    Dim tensuu As Integer
    Dim goukaku As Integer
    tensuu = Range("C10").Value
    goukaku = Range("E10").Value
    If tensuu >= goukaku Then
        MsgBox "‡Ši‚Å‚·"
    End If
End Sub

Sub shiken2()
    Dim tensuu As Integer
    Dim goukaku As Integer
    tensuu = Range("C18").Value
    goukaku = Range("E18").Value
    If tensuu >= goukaku Then
        MsgBox "‡Ši‚Å‚·"
    Else
        MsgBox "•s‡Ši‚Å‚·"
    End If
End Sub

Sub shiken3()
    Dim tensuu As Integer
    tensuu = Range("C26").Value
    If tensuu >= 80 Then
        MsgBox "‡Ši‚Å‚·"
    ElseIf tensuu >= 60 Then
        MsgBox "’ÇŽŽ‚Å‚·"
    Else
        MsgBox "•s‡Ši‚Å‚·"
    End If
End Sub

Sub waribiki()
    Dim kingaku As Currency
    kingaku = Range("C33").Value
    If Range("D33").Value = "ˆê”Ê" Then
        If kingaku >= 50000 Then
            MsgBox "15%Š„ˆø‚Å‚·"
        ElseIf kingaku >= 30000 Then
            MsgBox "10%Š„ˆø‚Å‚·"
        ElseIf kingaku >= 10000 Then
            MsgBox "5%Š„ˆø‚Å‚·"
        End If
    ElseIf Range("D33").Value = "‰ïˆõ" Then
        If kingaku >= 50000 Then
            MsgBox "30%Š„ˆø‚Å‚·"
        ElseIf kingaku >= 30000 Then
            MsgBox "20%Š„ˆø‚Å‚·"
        ElseIf kingaku >= 10000 Then
            MsgBox "10%Š„ˆø‚Å‚·"
        End If
    End If
End Sub
