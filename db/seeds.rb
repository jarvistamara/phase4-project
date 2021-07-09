# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.destroy_all
User.create!(
    name: "Tamara",
    username: "Tamara",
    password: "Password1",
    password_confirmation: "Password1"
)

Book.destroy_all
Book.create!([{
    title: "Tower of Dawn",
    author: "Sarah J Mass",
    genre: "Young Adult",
    description: "Chaol Westfall and Nesryn Faliq have arrived in the shining city of Antica to forge an alliance with the Khagan of the Southern Continent, whose vast armies are Erilea's last hope. But they have also come to Antica for another purpose: to seek healing at the famed Torre Cesme for the wounds Chaol received in Rifthold.

    After enduring unspeakable horrors as a child, Yrene Towers has no desire to help the young lord from Adarlan, let alone heal him. Yet she has sworn an oath to assist those in need—and will honor it. But Lord Westfall carries shadows from his own past, and Yrene soon comes to realize they could engulf them both.
    
    In this sweeping parallel novel to the New York Times bestselling Empire of Storms, Chaol, Nesryn, and Yrene will have to draw on every scrap of their resilience if they wish to save their friends. But while they become entangled in the political webs of the khaganate, deep in the shadows of mighty mountains where warriors soar on legendary ruks, long-awaited answers slumber. Answers that might offer their world a chance at survival—or doom them all . . .",
    summary: "In this sweeping parallel novel to the New York Times bestselling Empire of Storms, Chaol, Nesryn, and Yrene will have to draw on every scrap of their resilience if they wish to save their friends. But while they become entangled in the political webs of the khaganate, deep in the shadows of mighty mountains where warriors soar on legendary ruks, long-awaited answers slumber. Answers that might offer their world a chance at survival—or doom them all . . .",
    user_id: 1,
    book_cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1497973101l/31450852.jpg",
    is_read: true
},
{
    title: "The Silent Corner",
    author: "Dean Koontz",
    genre: "Fiction",
    description: "I very much need to be dead.

    These are the chilling words left behind by a man who had everything to live for—but took his own life. In the aftermath, his widow, Jane Hawk, does what all her grief, fear, and fury demand: find the truth, no matter what.
    
    People of talent and accomplishment, people admired and happy and sound of mind, have been committing suicide in surprising numbers. When Jane seeks to learn why, she becomes the most-wanted fugitive in America. Her powerful enemies are protecting a secret so important—so terrifying—that they will exterminate anyone in their way.
    
    But all their power and viciousness may not be enough to stop a woman as clever as they are cold-blooded, as relentless as they are ruthless—and who is driven by a righteous rage they can never comprehend. Because it is born of love.",
    summary: "Meet Jane Hawk—a remarkable new heroine certain to become an icon of suspense, propelled by the singular narrative genius of #1 New York Times bestselling author Dean Koontz.",
    user_id: 1,
    book_cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1487804391l/32148091._SY475_.jpg",
    is_read: true
},
{
    title: "The Mysterious Island",
    author: "Jules Verne",
    genre: "Science Fiction",
    description: "After hijacking a balloon from a Confederate camp, a band of five northern prisoners escapes the American Civil War. Seven thousand miles later, they drop from the clouds onto an uncharted volcanic island in the Pacific. Through teamwork, scientific knowledge, engineering, and perseverance, they endeavour to build a colony from scratch. But this island of abundant resources has its secrets. The castaways discover they are not alone. A shadowy, yet familiar, agent of their unfathomable fate is watching.

    What unfolds in Jules Verne’s imaginative marvel is both an enthralling mystery and the ultimate in survivalist adventures.",
    summary: "Based on the true story of Alexander Selkirk, who survived alone for almost five years on an uninhabited island off the coast of Chile, The Mysterious Island is considered by many to be Jules Verne's masterpiece. Wide-eyed mid-nineteenth-century humanistic optimism in a breezy, blissfully readable translation by Stump (Kirkus Reviews), here is the enthralling tale of five men and a dog who land in a balloon on a faraway, fantastic island of bewildering goings-on and their struggle to survive as they uncover the island's secret.",
    user_id: 1,
    book_cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388278046l/32831.jpg",
    is_read: true
}])
