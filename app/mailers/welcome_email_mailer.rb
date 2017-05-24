class WelcomeEmailMailer < ApplicationMailer
  default from: "upshiftapp@gmail.com"

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome to UPshift")
  end
end
