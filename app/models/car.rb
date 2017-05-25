class Car < ApplicationRecord
  validates :make, :model, :year, :mileage, :price, :transmission, :drivetrain, :body_style, :image_url, presence: true

  has_many :favorites,
  primary_key: :id,
  foreign_key: :car_id,
  class_name: 'Favorite'

  has_many :test_drives,
  primary_key: :id,
  foreign_key: :car_id,
  class_name: 'TestDrive'
end
