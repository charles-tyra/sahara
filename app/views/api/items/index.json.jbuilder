json.items do 
   @items.each do |item|
      json.set! item.id do 
         json.extract! item, :id, :item_name, :colors, :material, :dimensions, :theme, :description, :bells
      end
   end
end