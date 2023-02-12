class Item < ApplicationRecord
   validates :item_name, :colors, :material, :dimensions, :theme, :description, :bells, presence: true
end
