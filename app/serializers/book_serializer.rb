class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :description, :summary
  belongs_to :user
end
