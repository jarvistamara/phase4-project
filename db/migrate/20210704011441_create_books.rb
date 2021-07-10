class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.text :summary
      t.text :description
      t.boolean :is_read
      t.string :book_cover
      t.integer :user_id


      t.timestamps
    end
  end
end
