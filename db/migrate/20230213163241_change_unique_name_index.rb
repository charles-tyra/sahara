class ChangeUniqueNameIndex < ActiveRecord::Migration[7.0]
  def change
    remove_index :items, :item_name
    add_index :items, :item_name
  end
end
