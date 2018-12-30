class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :text
      t.string :image
      t.integer :user_id, null: false, foreign_key: true
      t.integer :group_id, null: false, forreign_key: true
      t.timestamps null: true
    end
  end
end
