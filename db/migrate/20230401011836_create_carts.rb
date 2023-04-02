class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.references :item, null: false, foreign_key: true, index: true
      t.references :owner, null: false, foreign_key: { to_table: :users }
      t.integer :quantity, null: false

      t.timestamps
    end
    add_index :carts, [:item_id, :owner_id], unique: true
  end
end
