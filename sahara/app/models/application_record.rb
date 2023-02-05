class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    if !logged_in?
      render json: { errors: ['Must be logged out'] }, status: 403
    end
  end

  def require_logged_out
    if logged_in?
      render json: { errors: ['Must be logged out'] }, status: 403
    end
  end

  def logged_in?
    current_user != nil
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end