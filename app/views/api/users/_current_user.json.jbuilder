
json.currentUser do
  json.id user.id
  json.email user.email
  if !favorites.empty?
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
  else
    empty_hash = {}
    json.set! :favorites, empty_hash
  end
end
json.errors []
