class User < ApplicationRecord
    has_secure_password
    has_many :books

    validates :name, presence: true
    validates :username, uniqueness: true, presence: true
    validates :password, length: { in: 5..10 }, presence: true, confirmation: true
    validate :password_contains_number
    
    def password_contains_number
        return if password.count("0-9") > 0
        errors.add :password, 'must contain at least one number'
    end

end
