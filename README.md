## BTVN7_N1_Document

### Main functions
1. User login with username password, returns token as jwt type
2. Homepage display product lists including their name and price tags. Ultilize token jwt above, if token is valid then go to (Home) page, invalid token returns user to Login page.
3. If user don't already had an account, signup. Password is saved to DB under md5 encoding type.
4. DB Migration has user table and product table. Seeder also created to insert data into product table with at least 10 products with the status to be: 'available', 'out of stock'

### The process for which user logins into the product homepage

1. Login 
- User access `/home`, or other url will be redirected to `/login` if user's been not login yet.
- Login form with 2 input `username`, `password` and 2 button `login`, `register`. User click button `register` to redirect to `/register` page
- When user login, user must be validatd with users in our database, if valid user => redirect user to `/home`, if invalid user => show popup/dialog error to user
- login api accept `POST` method only

2. Home
- Display products from product table in database
- Product table has the following columns: id (primary key, auto increament), name, description, price, image (link), created_at, updated_at
- Product table has atleast 10 products and seeder file has been created to push to source code

3. Register
- If user does't have account, they must be register with the form: `username, password, birthday, phone, email`. `username` and `password` are required, `password` must be secure input
- After registed, we will show popup/dialog with error or success full message. In case succeed, when user click OK in popup/dialog => redirect to `login` page to login

Note: All table database has been created by migration file, hence other can run our source code.
