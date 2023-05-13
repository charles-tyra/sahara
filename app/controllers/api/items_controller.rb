class Api::ItemsController < ApplicationController
   def index
      # Search Query - - if no search query just fetch all items
      search = params[:search]
      if search == '' || !search
         @items = Item.all
         render 'api/items/index'
      else
         @items = Item.where('lower(item_name) LIKE ?', '%' + search.downcase + '%')
         render 'api/items/index'
      end
   end

   def show
      puts('In Item Show')
      puts(params)
      @item = Item.find(params[:id])

      if @item
         render 'api/items/show'
      else
         render json: @item.errors.full_messages, status: 422
      end
   end

   private
   def item_params
      params.require(:item).permit(:search)
   end
end
