class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, :session_token, presence: true
  attr_reader :password
  before_validation :ensure_session_token

  has_many :favorites,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'Favorite'

  has_many :favorited_cars,
  through: :favorites,
  source: :car

  has_many :test_drives,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'TestDrive'

  #ASSOCIATIONS TODO

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return nil unless @user && @user.is_password?(password)
    @user
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end
end
