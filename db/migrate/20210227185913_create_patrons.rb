class CreatePatrons < ActiveRecord::Migration[6.1]
  def change
    create_table :patrons do |t|
      t.string :name
      t.string :drink
      t.belongs_to :brewery, null: false, foreign_key: true

      t.timestamps
    end
  end
end
