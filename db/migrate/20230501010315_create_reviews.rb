class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :item, null: false, foreign_key: true, index:true
      t.references :author, null:false, foreign_key: { to_table: :users }
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false

      t.timestamps
    end
  end
end
