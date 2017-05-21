json.currentUser do
  json.id user.id
  json.email user.email
  json.favorites user.favorited_cars, :id
end
json.errors []
