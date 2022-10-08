class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :item_name
      t.float :price
      t.text :desc
      t.belongs_to :menu, null: false, foreign_key: true

      t.timestamps
    end
  end
end
