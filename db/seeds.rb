# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(email: "dallas@google.com", password: "jonisthebest")
u2 = User.create(email: "bono@google.com", password: "password")

# c1 = Car.create(make: "Ferrari", model: "250 GT California", year: 1961, mileage: 126, price: 50000, transmission: "manual", drivetrain: "rwd", body_style: "convertible", image_url: "http://roa.h-cdn.co/assets/cm/14/47/980x551/546b0d2b5658a_-_modena1-lg.jpg")
# c2 = Car.create(make: "Porsche", model: "Speedster", year: 1956, mileage: 315, price: 40000, transmission: "manual", drivetrain: "rwd", body_style: "convertible", image_url: "http://cdn.blessthisstuff.com/imagens/stuff/1957-porsche-speedster.jpg")

c1 = Car.create(make: "Tesla", model: "Roadster Sport", year: 2010, mileage: 2027, price: 74950, transmission: "automatic", drivetrain: "rwd", body_style: "convertible", image_url: "http://lh3.googleusercontent.com/5NNNq_VxgQP1A-JO2UTzEsGTLj3ebnRtIBpEeVgxWr0y7r8VewzBNaRvF1aUx_WNrBRNga0MN6FeiZTzdg5JkA=w1440-h800")
c2 = Car.create(make: "Porsche", model: "911 4 GTS", year: 2012, mileage: 22000, price: 74500, transmission: "manual", drivetrain: "awd", body_style: "coupe", image_url: "http://lh3.googleusercontent.com/iTBqcjNs3N3ncZntAnYP8WmaAVWjItn02QgoNwsmTD-aKt6ceUrh3Ih7SQFX_hM0vhLPlG5zfg3b8sIBu33m=w923-h800")
c3 = Car.create(make: "Chevrolet", model: "Tahoe LTZ", year: 2016, mileage: 36000, price: 49475, transmission: "automatic", drivetrain: "4wd", body_style: "suv", image_url: "http://lh3.googleusercontent.com/nmXUAuKQ5nOYgF5WD1OwXg9QzP3o1xvqFVCNsdHio9-u3uSiwMzYAHvxnsx2LSJNcvj8BgqpSJ1nDU_QRN0W=w2400-h1333")
c4 = Car.create(make: "Porsche", model: "Macan S", year: 2015, mileage: 13000, price: 47950, transmission: "automatic", drivetrain: "awd", body_style: "suv", image_url: "http://lh3.googleusercontent.com/qUBWB7wK5tvYOqDsdi_enJ77ymt5ZRZ58AzMEeMRYDOvqmjOqt0V7dzHryKOOxdcxeqGr37gJMQ1aA0gw-nH=w2400-h1333")
c5 = Car.create(make: "Porsche", model: "911 Carrera S", year: 2008, mileage: 67000, price: 34950, transmission: "manual", drivetrain: "rwd", body_style: "convertible", image_url: "http://lh3.googleusercontent.com/szb3HUNYOtdV3lu2tTO64IJxXz3WiAYXR6LnIyVhEzgiBxBJXhl3evRFF5RZ2s-v0Bq4o5tTwfLWYLsKXNdiqQ=w2400-h1333")
