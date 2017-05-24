# Preview all emails at http://localhost:3000/rails/mailers/welcome_email_mailer
class WelcomeEmailMailerPreview < ActionMailer::Preview
  def welcome_email_preview
    WelcomeEmailMailer.welcome_email(User.first)
  end
end
