class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  add_flash_types :danger, :info, :error, :success

  def user_myself
    @user_myself ||= User.find(1) if session[:user_id]
  end

  helper_method :user_myself

  def require_login
    unless user_myself && user_myself.email == 'jonathon.yamada@gmail.com'
      redirect_to root_path, danger: 'Unauthorised'
    end
  end
end
