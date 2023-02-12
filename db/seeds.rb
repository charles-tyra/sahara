# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transcation do 
   User.destroy_all
   Item.destroy_all

   Item.create!(
      item_name: "Aluminum rug",
      color: "Gray Gray",
      material: "",
      dimensions: "3 x 2",
      theme: "Garden Outdoors",
      description: "",
      bells: 1500
   )
   Item.create!(
      item_name: "Blocks rug",
      color: "Black Gray",
      material: "",
      dimensions: "3 x 3",
      theme: "Living room",
      description: "",
      bells: 1500
   )
   Item.create!(
      item_name: "Design kitchen mat",
      color: "Black Orange",
      material: "",
      dimensions: "2 x 1",
      theme: "Kitchen",
      description: "",
      bells: 1000
   )
   Item.create!(
      item_name: "Wooden-deck rug",
      color: "Black Black",
      material: "",
      dimensions: "3 x 2",
      theme: "Outdoors Garden",
      description: "",
      bells: 1500
   )
   Item.create!(
      item_name: "Argyle rug",
      color: "Blue Green",
      material: "",
      dimensions: "4 x 2",
      theme: "Living room Expensive",
      description: "",
      bells: 2000
   )
   Item.create!(
      item_name: "Blocks rug",
      color: "Blue Blue",
      material: "",
      dimensions: "3 x 3",
      theme: "Living room",
      description: "",
      bells: 1500
   )
   # Item.create!(
   #    item_name: "Design kitchen mat",
   #    color: "Blue Black",
   #    material: "",
   #    dimensions: "2 x 1",
   #    theme: "Kitchen",
   #    description: "",
   #    bells: 1000
   # )
   Item.create!(
      item_name: "Dotted rug",
      color: "Blue Blue",
      material: "",
      dimensions: "4 x 3",
      theme: "Fancy Child's room",
      description: "",
      bells: 2000
   )
   Item.create!(
      item_name: "Argyle rug",
      color: "Blue Green",
      material: "",
      dimensions: "4 x 2",
      theme: "Living room Expensive",
      description: "",
      bells: 2000
   )
   Item.create!(
      item_name: "Kilim-style carpet",
      color: "Blue Black",
      material: "",
      dimensions: "5 x 5",
      theme: "Living room",
      description: "",
      bells: 2000
   )
   Item.create!(
      item_name: "Kitchen mat",
      color: "Blue Blue",
      material: "",
      dimensions: "2 x 1",
      theme: "Kitchen",
      description: "",
      bells: 1000
   )
   Item.create!(
      item_name: "Medium round mat",
      color: "Blue Blue",
      material: "",
      dimensions: "3 x 3",
      theme: "Living room Child's room",
      description: "",
      bells: 1500
   )
   Item.create!(
      item_name: "Message mat",
      color: "Blue Blue",
      material: "",
      dimensions: "2 x 1",
      theme: "Child's room",
      description: "",
      bells: 1000
   )
   Item.create!(
      item_name: "Persian rug",
      color: "Blue Beige",
      material: "",
      dimensions: "5 x 5",
      theme: "Expensive Living room",
      description: "",
      bells: 2000
   )
   Item.create!(
      item_name: "Shaggy rug",
      color: "Blue Blue",
      material: "",
      dimensions: "5 x 5",
      theme: "Living room Child's room",
      description: "",
      bells: 2000
   )
   Item.create!(
      item_name: "Small round mat",
      color: "Blue Blue",
      material: "",
      dimensions: "2 x 2",
      theme: "Living room Child's room",
      description: "",
      bells: 1000
   )
   Item.create!(
      item_name: "Stripes rug",
      color: "Blue White",
      material: "",
      dimensions: "4 x 3",
      theme: "Fancy Child's room",
      description: "",
      bells: 2000
   )
   Item.create!(
      item_name: "Vinyl sheet",
      color: "Blue Colorful",
      material: "",
      dimensions: "3 x 2",
      theme: "Ocean Resort Garden",
      description: "",
      bells: 1500
   )
   Item.create!(
      item_name: "Wavy rug",
      color: "Blue Blue",
      material: "",
      dimensions: "3 x 3",
      theme: "Living room Child's room",
      description: "",
      bells: 2000
   )
   Item.create!(
      item_name: "Botanical rug",
      color: "Green Green",
      material: "",
      dimensions: "4 x 3",
      theme: "Living room",
      description: "",
      bells: 2000
   )
end