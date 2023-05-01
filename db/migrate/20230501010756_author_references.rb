class AuthorReferences < ActiveRecord::Migration[7.0]
  def change
    add_index :reviews, [:item_id, :author_id], unique: true
  end
end
