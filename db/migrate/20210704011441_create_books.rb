class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.boolean :is_read
      t.boolean :is_unread
      t.string :book_cover
      t.integer :user_id
      t.integer :review_id

      t.timestamps
    end
  end
end
