json.currentUser do
  json.id @user.id
  json.email @user.email
end
json.errors []
