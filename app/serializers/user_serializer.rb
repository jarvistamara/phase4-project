class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password, :password_confirmation
end
