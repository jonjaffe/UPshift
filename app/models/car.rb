class Car < ApplicationRecord
  validates :make, :model, :year, :mileage, :price, :transmission, :drivetrain, :body_style, :image_url, presence: true
end
