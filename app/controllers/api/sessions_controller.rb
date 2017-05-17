class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(session_params[:email], session_params[:password])

    if @user
      login(@user)
      render "/api/users/show", locals: {user: @user}
    else
      render json: ["invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if current_user
      logout
      render "/api/users/show", locals: {user: @user}
    else
      render(json: ["No one is signed in"], status: 404)
    end
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end
end
