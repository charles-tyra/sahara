class Api::CartsController < ApplicationController
   def index

   end

   def show

   end

   def create
      @cart = current_user.carts.new(cart_params)

      if @crt
   end

   def update

   end

   def destroy
      
   end

   private
   def cart_params
      params.require(:cart).permit(:quanity, :item_id)
   end
end