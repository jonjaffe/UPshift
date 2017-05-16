USERS
id integer not null primary key,
email string not null indexed unique,
password_digest string not null,
session_token string not_null indexed unique
//HAS MANY FAVORITES
//HAS MANY FAVORITED_CARS THROUGH FAVORITES

CARS
id integer not null primary key,
make string not null,
model string not null,
year integer not null,
mileage integer not null,
price integer not null,
transmission string not null,
drive train string not null,
body style string not null,
image_url string not null
//HAS MANY FAVORITES

FAVORITES
id integer not null primary key,
user_id not null,
car_id not null
//BELONGS TO USER, BELONGS TO CAR
