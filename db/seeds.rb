# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri'

ApplicationRecord.transaction do 
   User.destroy_all
   Item.destroy_all

   User.create!(email: 'charles.tyra@gmail.com', password: 'tobiedog', first_name: 'Charles', last_name: 'Tyra')
   Item.create!(
      item_name: "Aluminum rug",
      colors: "Gray",
      material: "unknown",
      dimensions: "3x2",
      theme: "Garden Outdoors",
      description: "With its sleek and modern design, the Aluminum Rug will instantly elevate the look of your outdoor space. The aluminum material provides a smooth and flat surface that's easy to clean and maintain, making it the perfect choice for high-traffic areas. Plus, the lightweight construction makes it easy to move and rearrange as needed.",
      bells: 1500
   )
   Item.create!(
      item_name: "Blocks rug",
      colors: "Black Gray",
      material: "tbd",
      dimensions: "3x3",
      theme: "Living room",
      description: "The rug features a bold blue block pattern that is sure to make a statement in any space. The unique design is sure to be a conversation starter and will add a touch of character to any room. Whether you're looking to create a cozy reading nook or simply add some interest to a neutral-toned room, this rug is the perfect choice.",
      bells: 1500
   )
   Item.create!(
      item_name: "Design kitchen mat",
      colors: "Black Orange",
      material: "tbd",
      dimensions: "2x1",
      theme: "Kitchen",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Wooden-deck rug",
      colors: "Black",
      material: "tbd",
      dimensions: "3x2",
      theme: "Outdoors Garden",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Blocks rug",
      colors: "Blue",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Living room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Design kitchen mat",
      colors: "Blue Black",
      material: "sdf",
      dimensions: "2 x 1",
      theme: "Kitchen",
      description: "sdf",
      bells: 1000
   )
   Item.create!(
      item_name: "Dotted rug",
      colors: "Blue",
      material: "tbd",
      dimensions: "4x3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Argyle rug",
      colors: "Blue Green",
      material: "tbd",
      dimensions: "4x3",
      theme: "Living room Expensive",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Kilim-style carpet",
      colors: "Blue Black",
      material: "tbd",
      dimensions: "5x5",
      theme: "Living room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Kitchen mat",
      colors: "Blue",
      material: "tbd",
      dimensions: "2x1",
      theme: "Kitchen",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Medium round mat",
      colors: "Blue",
      material: "tbd",
      dimensions: "3x3",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Message mat",
      colors: "Blue",
      material: "tbd",
      dimensions: "2x1",
      theme: "Child's room",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Persian rug",
      colors: "Blue Beige",
      material: "tbd",
      dimensions: "5x5",
      theme: "Expensive Living room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Shaggy rug",
      colors: "Blue",
      material: "tbd",
      dimensions: "5x5",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Small round mat",
      colors: "Blue",
      material: "tbd",
      dimensions: "2x2",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Stripes rug",
      colors: "Blue White",
      material: "tbd",
      dimensions: "4x3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Vinyl sheet",
      colors: "Blue Colorful",
      material: "tbd",
      dimensions: "3x2",
      theme: "Ocean Resort Garden",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Wavy rug",
      colors: "Blue",
      material: "tbd",
      dimensions: "3x3",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Botanical rug",
      colors: "Green",
      material: "tbd",
      dimensions: "4x3",
      theme: "Living room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Earth rug",
      colors: "Blue White",
      material: "tbd",
      dimensions: "3x3",
      theme: "Space Sci Fi",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Fluffy rug",
      colors: "White",
      material: "tbd",
      dimensions: "3x3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Fossil rug",
      colors: "Purple White",
      material: "tbd",
      dimensions: "4x4",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Iron entrance mat",
      colors: "Black",
      material: "tbd",
      dimensions: "2x1",
      theme: "Shop Cafe",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Lacy rug",
      colors: "Beige White",
      material: "tbd",
      dimensions: "3x3",
      theme: "Fancy Expensive",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Magic-circle rug",
      colors: "Purple",
      material: "tbd",
      dimensions: "4x3",
      theme: "Living room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Mush rug",
      colors: "Red",
      material: "tbd",
      dimensions: "3x3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Oval entrance mat",
      colors: "Blue",
      material: "tbd",
      dimensions: "2x1",
      theme: "Living room",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Red carpet",
      colors: "Red",
      material: "tbd",
      dimensions: "3x2",
      theme: "Expensive Party",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Rough rug",
      colors: "Brown",
      material: "tbd",
      dimensions: "2x1",
      theme: "Living room",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Rubber mud mat",
      colors: "Green",
      material: "tbd",
      dimensions: "2x1",
      theme: "School",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Shanty mat",
      colors: "Brown Beige",
      material: "tbd",
      dimensions: "4x4",
      theme: "Harmonious Horror",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Sloppy rug",
      colors: "Aqua",
      material: "tbd",
      dimensions: "4x4",
      theme: "Living room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Snowflake rug",
      colors: "Aqua White",
      material: "tbd",
      dimensions: "3x3",
      theme: "Freezing cold Fancy",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Tatami mat",
      colors: "Green Yellow",
      material: "tbd",
      dimensions: "3x2",
      theme: "Harmonious",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Tropical rug",
      colors: "Green Beige",
      material: "tbd",
      dimensions: "3x3",
      theme: "Ocean Resort",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Bone entrance mat",
      colors: "Green",
      material: "tbd",
      dimensions: "2x1",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Coconut mat",
      colors: "Brown",
      material: "tbd",
      dimensions: "2x1",
      theme: "Cafe",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Cookie rug",
      colors: "Orange Yellow",
      material: "tbd",
      dimensions: "3x3",
      theme: "Ocean Resort",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Imperial rug",
      colors: "Red",
      material: "tbd",
      dimensions: "4x4",
      theme: "Ocean Resort",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Record rug",
      colors: "Black Red",
      material: "tbd",
      dimensions: "3x3",
      theme: "Living room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Skull rug",
      colors: "Gray Black",
      material: "tbd",
      dimensions: "3x3",
      theme: "Horror Child's room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Stage rug",
      colors: "Colorful Yellow",
      material: "tbd",
      dimensions: "3x3",
      theme: "Concert Party",
      description: "tbd",
      bells: 1500
   )
end

Item.first.photo.attach(
   io: URI.open("https://sahara-seeds.s3.amazonaws.com/Aluminum_Rug.png"),
   filename: "Aluminum_Rug.png"
)