class Api::CartsController < ApplicationController
   def index
      @carts = Cart.includes(user.id: current_user.id)
      render 'api/carts/index'
   end

   def show
      @cart = Cart.find(params[:id])

      if @cart
         render 'api/carts/show'
      else
         render json: @cart.errors.full_messages, status: 422
      end
   end

   def create
      @cart = current_user.carts.new(cart_params)

      if @cart.save
         render :show
      else
         render json: @cart.errors.full_messages, status: 422
      end
   end

   def update

   end

   def destroy
      
   end

   private
   def cart_params
      params.require(:cart).permit(:quanity, :item_id, :owner_id)
   end
end