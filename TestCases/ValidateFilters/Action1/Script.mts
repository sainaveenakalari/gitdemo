sSheetName = Environment.Value("TestName")
row = 1

fnOpenWebApp
fnLogin

For Iterator = 1 To 4 Step 1
	fnFilter
	fnSort
	row = row + 1
Next

fnLogout
fnClose 
