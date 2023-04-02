class Cart < ApplicationRecord
   validates :quantity, presence: true
   validates :item_id, uniqueness: { scope: :owner_id }

   belongs_to :item
   belongs_to :owner, class_name :User
end
