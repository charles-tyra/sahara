json.items do 
   @items.each do |item|
      json.set! item.id do 
         json.extract! item, :id, :item_name, :colors, :material, :dimensions, :theme, :description, :bells
         json.reviews item.reviews
         json.photoUrls item.photos.map{|file| url_for(file)}
      end
   end
end