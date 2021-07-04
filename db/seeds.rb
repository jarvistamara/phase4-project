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
    password: "Password",
    password_confirmation: "Password"
},
{
    name: "Omar",
    username: "Omar",
    password: "Password.",
    password_confirmation: "Password"
},
{
    name: "Amari",
    username: "Amari",
    password: "Password",
    password_confirmation: "Password"
}])

Book.destroy_all

Book.create!([{
    title: "Tower of Dawn",
    author: "Sarah J Mass",
    genre: "Young Adult",
    is_read: false,
    is_unread: true,
    book_cover: "",
    user_id: 1,
    review_id: 1
},
{
    title: "The Silent Corner",
    author: "Dean Koontz",
    genre: "Fiction",
    is_read: false,
    is_unread: true,
    book_cover: "",
    user_id: 2,
    review_id: 1
},
{
    title: "The Mysterious Island",
    author: "Jules Verne",
    genre: "Science Fiction",
    is_read: true,
    is_unread: false,
    book_cover: "",
    user_id: 3,
    review_id: 1
}])

Review.destroy_all

Review.create!([{
    title: "Best Book I’ve read in YEARS!",
    content: "Schlitz coloring book green juice, tofu subway tile freegan fingerstache waistcoat shabby chic. Twee lumbersexual organic iPhone, 3 wolf moon asymmetrical schlitz sartorial flannel deep v. Single-origin coffee kogi sartorial small batch typewriter tilde tofu banjo XOXO edison bulb retro unicorn pickled tattooed actually. Offal four dollar toast humblebrag etsy wolf YOLO migas quinoa chambray.",
    rating: 5,
    user_id: 1,
    book_id: 1
},
{
    title: "I wanted to at least like it!",
    content: "Im baby migas hot chicken blue bottle YOLO succulents. Vexillologist fashion axe trust fund cornhole chartreuse waistcoat taxidermy sartorial blog flannel thundercats. Kombucha cred 3 wolf moon lo-fi. 90s flannel subway tile 3 wolf moon tilde snackwave messenger bag readymade edison bulb offal PBR&B.",
    rating: 1,
    user_id: 2,
    book_id: 2
},
{
    title: "What a cliffhanger...",
    content: "Echo park pok pok sustainable lo-fi, gentrify live-edge pabst normcore drinking vinegar ugh migas hell of taxidermy. Cliche taxidermy flexitarian 8-bit, ramps pabst glossier retro edison bulb. Ugh messenger bag single-origin coffee cray taiyaki. Quinoa photo booth affogato man braid williamsburg ramps artisan, man bun kinfolk shabby chic. Disrupt tattooed fam, iceland green juice adaptogen mixtape seitan lumbersexual polaroid kinfolk post-ironic meditation. Portland letterpress butcher vegan fingerstache readymade. Chambray pitchfork everyday carry, godard DIY lomo portland lo-fi you probably havent heard of them.",
    rating: 5,
    user_id: 3,
    book_id: 3
}])