json.cart do
   json.extract! @cart, :id, :item_id, :quantity
   json.item do
      json.bells @cart.item.bells
   end
end