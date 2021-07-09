class User < ApplicationRecord
    has_many :books
    has_secure_password
    
    validates :name, presence: true
    validates :username, presence: true
    validates :password, presence: true, confirmation: true
    validate :password_contains_number
    
    def password_contains_number
        return if password.count("0-9") > 0
        errors.add :password, 'must contain at least one number'
    end

end
