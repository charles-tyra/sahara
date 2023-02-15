json.item do 
   json.extract! @item, :id, :item_name, :colors, :material, :dimensions, :theme, :description, :bells
   json.photoUrls @item.photos.map{|file| url_for(file)}
end