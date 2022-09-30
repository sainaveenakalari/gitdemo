'Get the test case name into a variable

sSheetName = Environment.Value("TestName")
fnOpenWebApp
row = 1
'fnLoadDataSheet

For Iterator = 1 To 3 Step 1
	fnRegister
	fnLogout
	row = row + 1
Next
fnClose
