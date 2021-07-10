class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :summary, :description, :is_read, :book_cover
  belongs_to :user
end
