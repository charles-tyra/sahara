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


   aluminum = Item.create!(
      item_name: "Aluminum rug",
      colors: "Gray",
      material: "High-grade aluminum",
      dimensions: "3x2",
      theme: "Garden Outdoors",
      description: "With its sleek and modern design, the Aluminum Rug will instantly elevate the look of your outdoor space. The aluminum material provides a smooth and flat surface that's easy to clean and maintain, making it the perfect choice for high-traffic areas. Plus, the lightweight construction makes it easy to move and rearrange as needed.",
      bells: 1500
   )
   blackblock = Item.create!(
      item_name: "Blocks rug",
      colors: "Black Gray",
      material: "Plush",
      dimensions: "3x3",
      theme: "Living room",
      description: "The rug features a bold blue block pattern that is sure to make a statement in any space. The unique design is sure to be a conversation starter and will add a touch of character to any room. Whether you're looking to create a cozy reading nook or simply add some interest to a neutral-toned room, this rug is the perfect choice.",
      bells: 1500
   )
   blackdesign = Item.create!(
      item_name: "Design kitchen mat",
      colors: "Black Orange",
      material: "Polyvinyl Chloride, Polyester",
      dimensions: "2x1",
      theme: "Kitchen",
      description: "The black design is sleek and modern, making it a great fit for any kitchen style. Whether you have a classic or contemporary kitchen, this mat will add a touch of elegance and sophistication to your space. Plus, the mat's non-slip backing ensures that it stays securely in place, even in high traffic areas.",
      bells: 1000
   )
   blackwooden = Item.create!(
      item_name: "Wooden-deck rug",
      colors: "Black",
      material: "Black Ash planks",
      dimensions: "3x2",
      theme: "Outdoors Garden",
      description: "Elevate your outdoor living space with our stylish and practical black wooden deck rug! This rug is designed to add a touch of sophistication to your deck, while also providing a comfortable and durable surface to walk on.",
      bells: 1500
   )
   blueblock = Item.create!(
      item_name: "Blocks rug",
      colors: "Blue",
      material: "Plush",
      dimensions: "3 x 3",
      theme: "Living room",
      description: "Introducing our stunning blue blocks rug - the perfect addition to any modern home. This rug features a striking design of blue blocks on a neutral background, adding a pop of color and visual interest to any room.",
      bells: 1500
   )
   bluedesign = Item.create!(
      item_name: "Design kitchen mat",
      colors: "Blue Black",
      material: "Polyvinyl Chloride, Polyester",
      dimensions: "2 x 1",
      theme: "Kitchen",
      description: "Featuring a unique blue design that adds a touch of sophistication and elegance to your kitchen decor, this mat is also incredibly practical. Its non-slip backing ensures a safe and secure grip on any surface, while its stain-resistant surface is easy to clean and maintain.",
      bells: 1000
   )
   bluedotted = Item.create!(
      item_name: "Dotted rug",
      colors: "Blue",
      material: "Plush",
      dimensions: "4x3",
      theme: "Fancy Child's room",
      description: "Crafted from high-quality materials, this rug is designed to last for years to come. It's soft, plush texture is a treat for the feet, making it perfect for cozying up on during those chilly nights. The durable construction also means it can withstand heavy foot traffic and everyday wear and tear.",
      bells: 2000
   )
   blueargyle = Item.create!(
      item_name: "Argyle rug",
      colors: "Blue Green",
      material: "Wool",
      dimensions: "4x3",
      theme: "Living room Expensive",
      description: "The stunning blue argyle pattern is eye-catching and sophisticated, making it perfect for living rooms, bedrooms, and even offices. This rug is sure to impress and make a bold statement wherever you choose to place it.",
      bells: 2000
   )
   bluekilim = Item.create!(
      item_name: "Kilim-style carpet",
      colors: "Blue Black",
      material: "Wool",
      dimensions: "5x5",
      theme: "Living room",
      description: "The stunning blue tones and intricate patterns are inspired by the traditional kilim style, creating a one-of-a-kind rug that will add a touch of elegance to your home. This rug is perfect for adding character and personality to your living space and will make a bold statement wherever you choose to place it.",
      bells: 2000
   )
   bluekitchen = Item.create!(
      item_name: "Kitchen mat",
      colors: "Blue",
      material: "PVC",
      dimensions: "2x1",
      theme: "Kitchen",
      description: "Don't settle for discomfort while cooking and standing in the kitchen. Our blue kitchen mat is the perfect solution to make your time in the kitchen more enjoyable and comfortable. Order now and experience the difference it makes in your daily routine.",
      bells: 1000
   )
   bluemedium = Item.create!(
      item_name: "Medium round mat",
      colors: "Blue",
      material: "Faux Fur",
      dimensions: "3x3",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 1500
   )
   bluemessage = Item.create!(
      item_name: "Message mat",
      colors: "Blue",
      material: "Plush",
      dimensions: "2x1",
      theme: "Child's room",
      description: "tbd",
      bells: 1000
   )
   bluepersian = Item.create!(
      item_name: "Persian rug",
      colors: "Blue Beige",
      material: "Wool",
      dimensions: "5x5",
      theme: "Expensive Living room",
      description: "tbd",
      bells: 2000
   )
   blueshaggy = Item.create!(
      item_name: "Shaggy rug",
      colors: "Blue",
      material: "tbd",
      dimensions: "5x5",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 2000
   )
   bluesmall = Item.create!(
      item_name: "Small round mat",
      colors: "Blue",
      material: "tbd",
      dimensions: "2x2",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 1000
   )
   bluestripes = Item.create!(
      item_name: "Stripes rug",
      colors: "Blue White",
      material: "tbd",
      dimensions: "4x3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 2000
   )
   bluevinyl = Item.create!(
      item_name: "Vinyl sheet",
      colors: "Blue Colorful",
      material: "tbd",
      dimensions: "3x2",
      theme: "Ocean Resort Garden",
      description: "tbd",
      bells: 1500
   )
   bluewavy = Item.create!(
      item_name: "Wavy rug",
      colors: "Blue",
      material: "tbd",
      dimensions: "3x3",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 2000
   )
   botanical = Item.create!(
      item_name: "Botanical rug",
      colors: "Green",
      material: "tbd",
      dimensions: "4x3",
      theme: "Living room",
      description: "tbd",
      bells: 2000
   )
   earth = Item.create!(
      item_name: "Earth rug",
      colors: "Blue White",
      material: "tbd",
      dimensions: "3x3",
      theme: "Space Sci Fi",
      description: "tbd",
      bells: 1500
   )
   fluffy = Item.create!(
      item_name: "Fluffy rug",
      colors: "White",
      material: "tbd",
      dimensions: "3x3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 1500
   )
   fossil = Item.create!(
      item_name: "Fossil rug",
      colors: "Purple White",
      material: "tbd",
      dimensions: "4x4",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 1500
   )
   ironentrance = Item.create!(
      item_name: "Iron entrance mat",
      colors: "Black",
      material: "tbd",
      dimensions: "2x1",
      theme: "Shop Cafe",
      description: "tbd",
      bells: 1000
   )
   lacy = Item.create!(
      item_name: "Lacy rug",
      colors: "Beige White",
      material: "tbd",
      dimensions: "3x3",
      theme: "Fancy Expensive",
      description: "tbd",
      bells: 1500
   )
   magiccircle = Item.create!(
      item_name: "Magic-circle rug",
      colors: "Purple",
      material: "tbd",
      dimensions: "4x3",
      theme: "Horror Child's room",
      description: "tbd",
      bells: 1500
   )
   mush = Item.create!(
      item_name: "Mush rug",
      colors: "Red",
      material: "tbd",
      dimensions: "3x3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 1500
   )
   ovalentrance = Item.create!(
      item_name: "Oval entrance mat",
      colors: "Blue",
      material: "tbd",
      dimensions: "2x1",
      theme: "Living room",
      description: "tbd",
      bells: 1000
   )
   red = Item.create!(
      item_name: "Red carpet",
      colors: "Red",
      material: "tbd",
      dimensions: "3x2",
      theme: "Expensive Party",
      description: "tbd",
      bells: 1500
   )
   rough = Item.create!(
      item_name: "Rough rug",
      colors: "Brown",
      material: "tbd",
      dimensions: "2x1",
      theme: "Living room",
      description: "tbd",
      bells: 1000
   )
   rubber = Item.create!(
      item_name: "Rubber mud mat",
      colors: "Green",
      material: "tbd",
      dimensions: "2x1",
      theme: "School",
      description: "tbd",
      bells: 1000
   )
   shanty = Item.create!(
      item_name: "Shanty mat",
      colors: "Brown Beige",
      material: "tbd",
      dimensions: "4x4",
      theme: "Harmonious Horror",
      description: "tbd",
      bells: 2000
   )
   sloppy = Item.create!(
      item_name: "Sloppy rug",
      colors: "Aqua",
      material: "tbd",
      dimensions: "4x4",
      theme: "Living room",
      description: "tbd",
      bells: 2000
   )
   snowflake = Item.create!(
      item_name: "Snowflake rug",
      colors: "Aqua White",
      material: "tbd",
      dimensions: "3x3",
      theme: "Freezing cold Fancy",
      description: "tbd",
      bells: 1500
   )
   tatami = Item.create!(
      item_name: "Tatami mat",
      colors: "Green Yellow",
      material: "tbd",
      dimensions: "3x2",
      theme: "Harmonious",
      description: "tbd",
      bells: 1500
   )
   tropical = Item.create!(
      item_name: "Tropical rug",
      colors: "Green Beige",
      material: "tbd",
      dimensions: "3x3",
      theme: "Ocean Resort",
      description: "tbd",
      bells: 1500
   )
   boneentrance = Item.create!(
      item_name: "Bone entrance mat",
      colors: "Green",
      material: "tbd",
      dimensions: "2x1",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 1000
   )
   coconut = Item.create!(
      item_name: "Coconut mat",
      colors: "Brown",
      material: "tbd",
      dimensions: "2x1",
      theme: "Cafe",
      description: "tbd",
      bells: 1000
   )
   cookie = Item.create!(
      item_name: "Cookie rug",
      colors: "Orange Yellow",
      material: "tbd",
      dimensions: "3x3",
      theme: "Ocean Resort",
      description: "tbd",
      bells: 1500
   )
   imperial = Item.create!(
      item_name: "Imperial rug",
      colors: "Red",
      material: "tbd",
      dimensions: "4x4",
      theme: "Ocean Resort",
      description: "tbd",
      bells: 1500
   )
   record = Item.create!(
      item_name: "Record rug",
      colors: "Black Red",
      material: "tbd",
      dimensions: "3x3",
      theme: "Living room",
      description: "tbd",
      bells: 1500
   )
   skull = Item.create!(
      item_name: "Skull rug",
      colors: "Gray Black",
      material: "tbd",
      dimensions: "3x3",
      theme: "Horror Child's room",
      description: "tbd",
      bells: 1500
   )
   stage = Item.create!(
      item_name: "Stage rug",
      colors: "Colorful Yellow",
      material: "tbd",
      dimensions: "3x3",
      theme: "Concert Party",
      description: "tbd",
      bells: 1500
   )


   aluminum.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/Aluminum_Rug.png"),
      filename: "Aluminum_Rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/aluminum_rug_show.png"),
      filename: "aluminum_rug_show.png"
   }])

   blackblock.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/black_blocks_rug.png"),
      filename: "black_blocks_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_black_blocks_rug+Medium.png"),
      filename: "show_black_blocks_rug.png"
   }])

   blackdesign.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/black_design_kitchen_mat.png"),
      filename: "black_design_kitchen_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_black_design_kitchen_mat+Medium.png"),
      filename: "show_black_design_kitchen_mat.png"
   }])

   blackwooden.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/black_wooden_deck_rug.png"),
      filename: "black_wooden_deck_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_black_wooden_deck_rug+Medium.png"),
      filename: "show_black_wooden_deck_rug.png"
   }])

   blueblock.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_blocks_rug.png"),
      filename: "blue_blocks_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_blocks_rug.jpeg"),
      filename: "show_blue_blocks_rug.jpeg"
   }])

   bluedesign.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_design_kitchen_mat.png"),
      filename: "blue_design_kitchen_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_design_kitchen_mat.jpeg"),
      filename: "show_blue_design_kitchen_mat.jpeg"
   }])

   bluedotted.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_dotted_rug.png"),
      filename: "blue_dotted_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_dotted_rug.jpeg"),
      filename: "show_blue_dotted_rug.jpeg"
   }])

   blueargyle.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_argyle_rug.png"),
      filename: "blue_argyle_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_argyle_rug.jpeg"),
      filename: "show_blue_argyle_rug.jpeg"
   }])

   bluekilim.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_kilim_style_carpet.png"),
      filename: "blue_kilim_style_carpet.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_kilim_style_carpet.jpeg"),
      filename: "show_blue_kilim_style_carpet.jpeg"
   }])

   bluekitchen.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_kitchen_mat.png"),
      filename: "blue_kitchen_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_kitchen_mat.jpeg"),
      filename: "show_blue_kitchen_mat.jpeg"
   }])

   bluemedium.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_medium_round_mat.png"),
      filename: "blue_medium_round_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_medium_round_mat.jpeg"),
      filename: "show_blue_medium_round_mat.jpeg"
   }])

   bluemessage.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_message_mat.png"),
      filename: "blue_message_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_message_mat.jpeg"),
      filename: "show_blue_message_mat.jpeg"
   }])

   bluepersian.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_persian_rug.png"),
      filename: "blue_persian_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_persian_rug.jpeg"),
      filename: "show_blue_persian_rug.png"
   }])

   blueshaggy.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_shaggy_rug.png"),
      filename: "blue_shaggy_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_shaggy_rug.jpeg"),
      filename: "show_blue_shaggy_rug.jpeg"
   }])

   bluesmall.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_small_round_mat.png"),
      filename: "blue_small_round_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_small_round_mat.jpeg"),
      filename: "show_blue_small_round_mat.jpeg"
   }])

   bluestripes.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_stripes_rug.png"),
      filename: "blue_stripes_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_stripes_rug.jpeg"),
      filename: "show_blue_stripes_rug.jpeg"
   }])

   bluevinyl.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_vinyl_sheet.png"),
      filename: "blue_vinyl_sheet.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_vinyl_sheet.jpeg"),
      filename: "show_blue_vinyl_sheet.jpeg"
   }])

   bluewavy.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/blue_wavy_rug.png"),
      filename: "blue_wavy_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_blue_wavy_rug.jpeg"),
      filename: "show_blue_wavy_rug.jpeg"
   }])

   botanical.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/botanical_rug.png"),
      filename: "botanical_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_botanical_rug.jpeg"),
      filename: "show_botanical_rug.jpeg"
   }])

   earth.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/earth_rug.png"),
      filename: "earth_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_earth_rug.jpeg"),
      filename: "show_earth_rug.jpeg"
   }])

   fluffy.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/fluffy_rug.png"),
      filename: "fluffy_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_fluffy_rug.jpeg"),
      filename: "show_fluffy_rug.png"
   }])

   fossil.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/fossil_rug.png"),
      filename: "fossil_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_fossil_rug.webp"),
      filename: "show_fossil_rug.png"
   }])

   ironentrance.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/iron_entrance_mat.png"),
      filename: "iron_entrance_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_iron_entrance_mat.jpeg"),
      filename: "show_iron_entrance_mat.jpeg"
   }])
  
   lacy.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/lacy_rug.png"),
      filename: "lacy_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_lacy_rug.jpeg"),
      filename: "show_lacy_rug.jpeg"
   }])
  
   magiccircle.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/magic_circle_rug.png"),
      filename: "magic_circle_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_magic_circle_rug.jpeg"),
      filename: "show_magic_circle_rug.jpeg"
   }])
  
   mush.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/mush_rug.png"),
      filename: "mush_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_mush_rug.jpeg"),
      filename: "show_mush_rug.jpeg"
   }])
  
   ovalentrance.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/oval_entrance_mat.png"),
      filename: "oval_entrance_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_oval_entrance_mat.jpeg"),
      filename: "show_oval_entrance_mat.jpeg"
   }])
  
   red.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/red_carpet.png"),
      filename: "red_carpet.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_red_carpet.jpeg"),
      filename: "show_red_carpet.jpeg"
   }])
  
   rough.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/rough_rug.png"),
      filename: "rough_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_rough_rug.jpeg"),
      filename: "show_rough_rug.jpeg"
   }])
  
   rubber.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/rubber_mud_mat.png"),
      filename: "rubber_mud_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_rubber_mud_mat.jpeg"),
      filename: "show_rubber_mud_mat.jpeg"
   }])
  
   shanty.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/shanty_mat.png"),
      filename: "shanty_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_shanty_mat.jpeg"),
      filename: "show_shanty_mat.jpeg"
   }])
  
   sloppy.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/sloppy_rug.png"),
      filename: "sloppy_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_sloppy_rug.jpeg"),
      filename: "show_sloppy_rug.jpeg"
   }])
  
   snowflake.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/snowflake_rug.png"),
      filename: "snowflake_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_snowflake_rug.png"),
      filename: "show_snowflake_rug.png"
   }])
  
   tatami.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/tatami_mat.png"),
      filename: "tatami_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_tatami_rug.jpeg"),
      filename: "show_tatami_rug.jpeg"
   }])
  
   tropical.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/tropical_rug.png"),
      filename: "tropical_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_tropical_rug.jpeg"),
      filename: "show_tropical_rug.jpeg"
   }])
  
   boneentrance.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/bone_entrance_mat.png"),
      filename: "bone_entrance_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_bone_entrance_mat.jpeg"),
      filename: "show_bone_entrance_mat.jpeg"
   }])

   coconut.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/coconut_mat.png"),
      filename: "cocount_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_coconut_mat.jpeg"),
      filename: "show_coconut_mat.jpeg"
   }])

   cookie.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/cookie_rug.png"),
      filename: "cookie_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_cookie_rug.jpeg"),
      filename: "show_cookie_rug.jpeg"
   }])

   imperial.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/imperial_rug.png"),
      filename: "imperial_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_imperial_rug.jpeg"),
      filename: "show_imperial_rug.jpeg"
   }])

   record.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/record_rug.png"),
      filename: "record_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_record_rug.jpeg"),
      filename: "show_record_rug.jpeg"
   }])

   skull.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/skull_rug.png"),
      filename: "skull_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_skull_rug.jpeg"),
      filename: "show_skull_rug.jpeg"
   }])

   stage.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/stage_rug.png"),
      filename: "stage_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/show_stage_rug.jpeg"),
      filename: "show_stage_rug.jpeg"
   }])
end
