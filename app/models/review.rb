class Review < ApplicationRecord
   validates :title, :body, :rating, presence: true
   validates :item_id, uniqueness: { scope :author_id }

   belongs_to :item
   belongs_to :author, class_name: :User
end
