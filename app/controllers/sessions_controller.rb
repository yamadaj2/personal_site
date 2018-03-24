class SessionsController < ApplicationController
  def create
    user = User.find_by_email('jonathon.yamada@gmail.com')
    if user && user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      redirect_to root_path, success: "Welcome Back Jonathon"
    else
      redirect_to login_path, danger: 'Sorry, email and/or password not recognised'
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = 'You logged out'
    redirect_to root_path
  end
end