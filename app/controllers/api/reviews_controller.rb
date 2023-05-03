class Api::ReviewsController < ApplicationController
   def index
      puts('inside Reviews Controller')
      puts(params[:item_id])
      @reviews = []
      @reviews ||= Item.find(params[:item_id]).reviews
      render 'api/reviews/index'
   end

   def show
      @review = Review.find(params[:id])

      if @review
         render 'api/reviews/show'
      else
         render json: @review.errors.full_messages, status: 422
      end
   end

   def create
      @review = Review.new(review_params)

      if @review.save
         render :show
      else
         render json: @cart.errors.full_messages, status: 422
      end
   end

   def update
      @review = Review.find(params[:id])

      @review.update(review_params)
      render :show
   end

   def destroy
      @review = Review.find(params[:id])
      @review.destroy
   end

   
   private
   def review_params
      params.require(:review).permit(:id, :title, :body, :rating, :item_id, :author_id)
   end
end