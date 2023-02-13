# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
   User.destroy_all
   Item.destroy_all

   User.create!(email: 'charles.tyra@gmail.com', password: 'tobiedog', first_name: 'Charles', last_name: 'Tyra')
   Item.create!(
      item_name: "Aluminum rug",
      colors: "Gray Gray",
      material: "unknown",
      dimensions: "3 x 2",
      theme: "Garden Outdoors",
      description: "With its sleek and modern design, the Aluminum Rug will instantly elevate the look of your outdoor space. The aluminum material provides a smooth and flat surface that's easy to clean and maintain, making it the perfect choice for high-traffic areas. Plus, the lightweight construction makes it easy to move and rearrange as needed.",
      bells: 1500
   )
   Item.create!(
      item_name: "Blocks rug",
      colors: "Black Gray",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Living room",
      description: "The rug features a bold blue block pattern that is sure to make a statement in any space. The unique design is sure to be a conversation starter and will add a touch of character to any room. Whether you're looking to create a cozy reading nook or simply add some interest to a neutral-toned room, this rug is the perfect choice.",
      bells: 1500
   )
   Item.create!(
      item_name: "Design kitchen mat",
      colors: "Black Orange",
      material: "tbd",
      dimensions: "2 x 1",
      theme: "Kitchen",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Wooden-deck rug",
      colors: "Black Black",
      material: "tbd",
      dimensions: "3 x 2",
      theme: "Outdoors Garden",
      description: "tbd",
      bells: 1500
   )
   # Item.create!(
   #    item_name: "Blocks rug",
   #    colors: "Blue Blue",
   #    material: "tbd",
   #    dimensions: "3 x 3",
   #    theme: "Living room",
   #    description: "tbd",
   #    bells: 1500
   # )
   # Item.create!(
   #    item_name: "Design kitchen mat",
   #    colors: "Blue Black",
   #    material: "",
   #    dimensions: "2 x 1",
   #    theme: "Kitchen",
   #    description: "",
   #    bells: 1000
   # )
   Item.create!(
      item_name: "Dotted rug",
      colors: "Blue Blue",
      material: "tbd",
      dimensions: "4 x 3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Argyle rug",
      colors: "Blue Green",
      material: "tbd",
      dimensions: "4 x 2",
      theme: "Living room Expensive",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Kilim-style carpet",
      colors: "Blue Black",
      material: "tbd",
      dimensions: "5 x 5",
      theme: "Living room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Kitchen mat",
      colors: "Blue Blue",
      material: "tbd",
      dimensions: "2 x 1",
      theme: "Kitchen",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Medium round mat",
      colors: "Blue Blue",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Message mat",
      colors: "Blue Blue",
      material: "tbd",
      dimensions: "2 x 1",
      theme: "Child's room",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Persian rug",
      colors: "Blue Beige",
      material: "tbd",
      dimensions: "5 x 5",
      theme: "Expensive Living room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Shaggy rug",
      colors: "Blue Blue",
      material: "tbd",
      dimensions: "5 x 5",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Small round mat",
      colors: "Blue Blue",
      material: "tbd",
      dimensions: "2 x 2",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Stripes rug",
      colors: "Blue White",
      material: "tbd",
      dimensions: "4 x 3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Vinyl sheet",
      colors: "Blue Colorful",
      material: "tbd",
      dimensions: "3 x 2",
      theme: "Ocean Resort Garden",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Wavy rug",
      colors: "Blue Blue",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Botanical rug",
      colors: "Green Green",
      material: "tbd",
      dimensions: "4 x 3",
      theme: "Living room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Earth rug",
      colors: "Blue White",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Space Sci Fi",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Fluffy rug",
      colors: "White White",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Fossil rug",
      colors: "Purple White",
      material: "tbd",
      dimensions: "4 x 4",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Iron entrance mat",
      colors: "Black Black",
      material: "tbd",
      dimensions: "2 x 1",
      theme: "Shop Cafe",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Lacy rug",
      colors: "Beige White",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Fancy Expensive",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Magic-circle rug",
      colors: "Purple Purple",
      material: "tbd",
      dimensions: "4 x 3",
      theme: "Living room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Mush rug",
      colors: "Red Red",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Oval entrance mat",
      colors: "Blue Blue",
      material: "tbd",
      dimensions: "2 x 1",
      theme: "Living room",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Red carpet",
      colors: "Red Red",
      material: "tbd",
      dimensions: "3 x 2",
      theme: "Expensive Party",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Rough rug",
      colors: "Brown Brown",
      material: "tbd",
      dimensions: "2 x 1",
      theme: "Living room",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Rubber mud mat",
      colors: "Green Green",
      material: "tbd",
      dimensions: "2 x 1",
      theme: "School",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Shanty mat",
      colors: "Brown Beige",
      material: "tbd",
      dimensions: "4 x 4",
      theme: "Harmonious Horror",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Sloppy rug",
      colors: "Aqua Aqua",
      material: "tbd",
      dimensions: "4 x 4",
      theme: "Living room",
      description: "tbd",
      bells: 2000
   )
   Item.create!(
      item_name: "Snowflake rug",
      colors: "Aqua White",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Freezing cold Fancy",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Tatami mat",
      colors: "Green Yellow",
      material: "tbd",
      dimensions: "3 x 2",
      theme: "Harmonious",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Tropical rug",
      colors: "Green Beige",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Ocean Resort",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Bone entrance mat",
      colors: "Green Green",
      material: "tbd",
      dimensions: "2 x 1",
      theme: "Livig room Child's room",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Coconut mat",
      colors: "Brown",
      material: "tbd",
      dimensions: "2 x 1",
      theme: "Cafe",
      description: "tbd",
      bells: 1000
   )
   Item.create!(
      item_name: "Cookie rug",
      colors: "Orange Yellow",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Ocean Resort",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Imperial rug",
      colors: "Red Red",
      material: "tbd",
      dimensions: "4 x 4",
      theme: "Ocean Resort",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Record rug",
      colors: "Black Red",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Living room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Skull rug",
      colors: "Gray Black",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Horror Child's room",
      description: "tbd",
      bells: 1500
   )
   Item.create!(
      item_name: "Stage rug",
      colors: "Colorful Yellow",
      material: "tbd",
      dimensions: "3 x 3",
      theme: "Concert Party",
      description: "tbd",
      bells: 1500
   )
end