class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.string :name
      t.date :rdate
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
