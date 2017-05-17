

| Users         | Data Type     | Constraints  |
| ------------- |:-------------:| ------------:|
| id            | integer       | not null, pk |
| email         | string        | not null, idx|
|password_digest| string        | not null     |
| session_token | string        | not null, idx|
- Associations: Has many favorites, has many favorited_cars through favorites

| Cars          | Data Type     | Constraints  |
| ------------- |:-------------:| ------------:|
| id            | integer       | not null, pk |
| make          | string        | not null     |
| model         | string        | not null     |
| year          | integer       | not null     |
| mileage       | integer       | not null     |
| price         | integer       | not null     |
| transmission  | string        | not null     |
| drivetrain    | string        | not null     |
| body_style    | string        | not null     |
| image_url     | string        | not null     |
- Associations: Has many favorites

| Favorites     | Data Type     | Constraints  |
| ------------- |:-------------:| ------------:|
| id            | integer       | not null, pk |
| user_id       | integer       | not null     |
| car_id        | integer       | not null     |
-Associations: Belongs to user, belongs to car
