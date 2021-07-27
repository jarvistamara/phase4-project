class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user
    @user = User.find_by(id: session[:user_id])
  end

  def authorize
    return render json: { errors: "Unauthorized"}, status: :unauthorized unless session.include? :user_id
  end

end
