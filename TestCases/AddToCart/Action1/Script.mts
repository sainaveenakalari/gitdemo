sSheetName = Environment.Value("TestName")
row = 1
item = "name"
fnOpenWebApp
fnLogin

For Iterator = 1 To 4 Step 1
	fnAddToCart
	row = row + 1
Next

fnEditCart
fnLogout
fnClose
