json.cart do
   json.extract! @cart, :id, :item_id, :quantity
end