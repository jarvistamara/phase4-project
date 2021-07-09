class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :description, :summary, :book_cover, :is_read
  belongs_to :user
end
