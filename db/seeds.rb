# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

User.create!([{
    name: "Tamara",
    username: "Tamara",
    password: "Password1",
    password_confirmation: "Password1"
},
{
    name: "Omar",
    username: "Omar",
    password: "Password2",
    password_confirmation: "Password2"
},
{
    name: "Amari",
    username: "Amari",
    password: "Password3",
    password_confirmation: "Password3"
}])

Book.destroy_all

Book.create!([{
    title: "Tower of Dawn",
    author: "Sarah J Mass",
    genre: "Young Adult",
    is_read: false,
    is_unread: true,
    book_cover: "https://drive.google.com/file/d/1j-lwmA78uzVcpE3ngardJK0X7hUa7BfZ/view?usp=sharing",
    user_id: 1
},
{
    title: "The Silent Corner",
    author: "Dean Koontz",
    genre: "Fiction",
    is_read: false,
    is_unread: true,
    book_cover: "https://drive.google.com/file/d/1bu07GheILms3euljowSaaGtZjSwN16rN/view?usp=sharing",
    user_id: 2
},
{
    title: "The Mysterious Island",
    author: "Jules Verne",
    genre: "Science Fiction",
    is_read: true,
    is_unread: false,
    book_cover: "https://drive.google.com/file/d/1IWH6iVFPJ7XXVdJB6ZrI_PfYU-vxvBEz/view?usp=sharing",
    user_id: 3
}])