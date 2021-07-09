class RemoveIsReadFromBook < ActiveRecord::Migration[6.1]
  def change
    remove_column :books, :is_read, :string
  end
end
