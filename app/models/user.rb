class User < ApplicationRecord
    has_many :books
    has_secure_password
    
    validates(:name, { :length => { :minimum => 2 } })
    validates :username, uniqueness: true
    validates(:password, { :length => { :in => 6..20 } })


end