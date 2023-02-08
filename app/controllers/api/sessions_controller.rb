class Api::SessionsController < ApplicationController
   before_action :require_logged_in, only: [:destroy]
   
   def show
      @user = current_user

      if @user
         render 'api/users/show'
      else
         render json: { user: nil }
      end
   end

   def create
      email = params[:email]
      password = params[:password]

      @user = User.find_by_credentials(email, password)
      if @user
         login(@user)
         render 'api/users/show'
      else
         @user = User.find_by(email: email)
         if @user
            render json: { errors: ['Your password is incorrect'] }, status: 422
         else
            render json: { errors: ['We cannot find an account with that email address'] }, status: 422
         end
      end
   end

   def destroy
      logout
      head :no_content
   end
end
