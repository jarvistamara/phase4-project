class AddBookCoverIsReadToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :book_cover, :string
    add_column :books, :is_read, :boolean
  end
end
