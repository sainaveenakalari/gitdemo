'Get the test case name into a variable

sSheetName = Environment.Value("TestName")
fnOpenWebApp
totalCost = 0
row = 1
item = "name"

fnLogin
For Iterator = 1 To 3 Step 1
	fnAddToWishlist
	row = row + 1
Next

fnLogout
fnClose
