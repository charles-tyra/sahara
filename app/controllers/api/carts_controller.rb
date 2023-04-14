class Api::CartsController < ApplicationController
   def index
      @carts = User.find(current_user.id).carts
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
      @cart = Cart.new(cart_params)

      
      if @cart.save
         render :show
      else
         render json: @cart.errors.full_messages, status: 422
      end
   end

   def update
      @cart = Cart.find(params[:id])
      
      if @cart.update(cart_params)
         render :index
      else
         render json: @cart.errors.full_messages, status: 422
      end         
   end

   def destroy
      @cart.destroy
      render :index
   end

   private
   def cart_params
      params.require(:cart).permit(:quantity, :item_id, :owner_id)
   end
end