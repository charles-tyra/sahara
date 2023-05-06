json.reviews do
   @reviews.each do |review|
      json.set! review.id do
         json.extract! review, :id, :rating, :title, :body, :author_id, :created_at, :updated_at
         json.author do
            json.author review.author.first_name
         end
      end
   end
end