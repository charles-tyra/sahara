json.carts do 
   @carts.each do |cart|
      json.set! cart.id do
         json.extract! cart, :id, :item_id, :quantity, :created_at, :updated_at
      end
   end
end