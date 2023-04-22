json.carts do 
   @carts.each do |cart|
      json.set! cart.id do
         json.extract! cart, :id, :item_id, :quantity, :created_at, :updated_at
         json.item do
            json.bells cart.item.bells
         end
      end
   end
end