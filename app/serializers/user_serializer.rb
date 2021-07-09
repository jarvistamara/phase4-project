class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password, :password_confirmation
  has_many :books
end
