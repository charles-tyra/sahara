class User < ApplicationRecord
   has_secure_password

   before_validation :ensure_session_token
   validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
   validates :password_digest, :session_token, :first_name, :last_name, presence: true
   validates :password, length: { minimum: 6 }, allow_nil: true

   def self.find_by_credentials(email, password)
      user = User.find_by(email: email)

      if user&.authenticate(password)
         return user
      end
      nil
   end

   def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64
   end

   def reset_session_token!
      self.session_token = SecureRandom.urlsafe_base64
      self.save!
      return self.session_token
   end


end