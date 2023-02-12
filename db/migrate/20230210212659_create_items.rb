class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :item_name, null: false, index: { unique: true }
      t.string :colors, null: false
      t.string :material, null: false
      t.string :dimensions, null: false
      t.string :theme, null: false
      t.text :description, null: false
      t.integer :bells, null: false

      t.timestamps
    end
  end
end
