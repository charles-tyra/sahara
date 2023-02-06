class Api::UsersController < ApplicationController
   wrap_parameters include: User.attribute_names + ['password']

   before_action :require_logged_out, only: [:create]
   before_action :require_looged_in, only: [:update, :edit]

   def create
      @user = User.new(user_params)

      if @user.save
         login(@user)
         render :show
      else
         render json: @user.errors.full_messages, status: 422
      end
   end

   def edit
   end
   
   def update
   end


   private
   def user_params
      params.require(:user).permit(:email, :first_name, :last_name, :password)
   end
end
