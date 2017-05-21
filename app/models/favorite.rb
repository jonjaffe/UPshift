class Favorite < ApplicationRecord
  validates :user_id, :car_id, presence: true

  belongs_to :user,
  class_name: "User",
	foreign_key: :user_id,
	primary_key: :id

  belongs_to :car,
  class_name: 'Car',
  foreign_key: :car_id,
  primary_key: :id
end
