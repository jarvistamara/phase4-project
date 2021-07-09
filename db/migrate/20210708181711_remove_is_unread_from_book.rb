class RemoveIsUnreadFromBook < ActiveRecord::Migration[6.1]
  def change
    remove_column :books, :is_unread, :string
  end
end
