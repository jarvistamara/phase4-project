class RemoveBookCoverFromBook < ActiveRecord::Migration[6.1]
  def change
    remove_column :books, :book_cover, :string
  end
end
