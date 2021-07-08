class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :is_read, :is_unread, :book_cover
end
