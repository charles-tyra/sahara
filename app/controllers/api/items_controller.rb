class Api::ItemsController < ApplicationController
   def index
      # Search Query - - if no search query just fetch all items
      @items = Item.all
      render 'api/items/index'
   end

   def show
      @item = Item.find(params[:id])

      if @item
         render 'api/items/show'
      else
         render json: @item.errors.full_messages, status: 422
      end
   end
end
