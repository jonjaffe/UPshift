json.set! :currentUser do
  json.id user.id
  json.email user.email
  json.set! :favorites do
    favorites.each do |car|
      json.set! car.id do
        json.id car.id
        json.make car.make
        json.model car.model
        json.price car.price
        json.image_url car.image_url
      end
    end
  end
end
json.errors []
