class SessionsController < ApplicationController
#    LOGIN - FRONTEND
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ["Unauthorized"] }, status: :unauthorized
        end
    end

#   LOG OUT -FRONTEND
    def destroy
        session.delete :user_id
            head :no_content
    end
end
