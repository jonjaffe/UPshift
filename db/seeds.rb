# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(email: "dallas@google.com", password: "jonisthebest")
u2 = User.create(email: "bono@google.com", password: "password")

c1 = Car.create(make: "Ferrari", model: "250 GT California", year: 1961, mileage: 126, price: 50000, transmission: "manual", drivetrain: "rwd", body_style: "convertible", image_url: "http://roa.h-cdn.co/assets/cm/14/47/980x551/546b0d2b5658a_-_modena1-lg.jpg")
c2 = Car.create(make: "Porsche", model: "Speedster", year: 1956, mileage: 315, price: 40000, transmission: "manual", drivetrain: "rwd", body_style: "convertible", image_url: "http://cdn.blessthisstuff.com/imagens/stuff/1957-porsche-speedster.jpg")
