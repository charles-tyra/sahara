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
      description: "Crafted from high-quality materials, this mat is soft to the touch and perfect for use in a variety of settings. Whether you're looking to add a cozy touch to your living room, create a soft surface for yoga or meditation, or simply add a pop of color to your bedroom, this mat is the perfect choice. Its medium size makes it easy to move and place wherever you need it, and the round shape adds a touch of whimsy and fun to your decor. Plus, its durable construction means it will last for years to come, making it a smart investment for any home.",
      bells: 1500
   )
   bluemessage = Item.create!(
      item_name: "Message mat",
      colors: "Blue",
      material: "Plush",
      dimensions: "2x1",
      theme: "Child's room",
      description: "Perfect for use in a variety of settings, this mat is ideal for adding a touch of personality to your entryway, reception area, or anywhere else you want to make a statement. And with its durable construction, you can be sure it will last for years to come, making it a smart investment for any home or office.",
      bells: 1000
   )
   bluepersian = Item.create!(
      item_name: "Persian rug",
      colors: "Blue Beige",
      material: "Wool",
      dimensions: "5x5",
      theme: "Expensive Living room",
      description: "Transform your space into a sophisticated and elegant oasis with our blue Persian rug! Whether you're looking to add a touch of luxury to your living room, create a warm and inviting feel in your bedroom, or add a touch of refinement to your office, this rug is the perfect choice. And with its durable construction, you can be sure it will last for years to come, making it a smart investment for any home or office.",
      bells: 2000
   )
   blueshaggy = Item.create!(
      item_name: "Shaggy rug",
      colors: "Blue",
      material: "Shag",
      dimensions: "5x5",
      theme: "Living room Child's room",
      description: "Looking for a comfortable and stylish way to add texture and warmth to your floors? Look no further than our blue shaggy rug! Whether you're looking to add a cozy touch to your living room, create a soft and inviting play area for kids, or simply add a pop of color to your bedroom, this rug is the perfect choice. And with its versatile design, it can be easily paired with a variety of decor styles, from modern to bohemian.",
      bells: 2000
   )
   bluesmall = Item.create!(
      item_name: "Small round mat",
      colors: "Blue",
      material: "Polyester",
      dimensions: "2x2",
      theme: "Living room Child's room",
      description: "Looking for a small, versatile, and stylish accessory to add to your home decor? Look no further than our blue small round mat! Perfect for use as a place to rest a cup of tea or coffee, as a decoration for a shelf or tabletop, or even as a soft surface for a small plant, this mat is a versatile and functional addition to your home.",
      bells: 1000
   )
   bluestripes = Item.create!(
      item_name: "Stripes rug",
      colors: "Blue White",
      material: "Polyester",
      dimensions: "4x3",
      theme: "Fancy Child's room",
      description: "Crafted from high-quality materials, this rug features a striking blue color and modern stripe pattern that is sure to catch the eye. The durable construction means it can stand up to heavy foot traffic, making it perfect for use in high-traffic areas such as entryways, living rooms, or home offices. Whether you're looking to add a modern touch to your space, or simply want to update your decor with a fresh new look, this rug is the perfect choice. And with its versatile design, it can be easily paired with a variety of decor styles, from minimalist to eclectic.",
      bells: 2000
   )
   bluevinyl = Item.create!(
      item_name: "Vinyl sheet",
      colors: "Blue Colorful",
      material: "Nylon",
      dimensions: "3x2",
      theme: "Ocean Garden",
      description: "Whether you're looking to protect your floors from spills and stains, add a touch of color and style to your outdoor patio, or even use it as a protective mat for your pet's food and water bowls, this vinyl rug is the perfect choice. And with its durable construction, you can be sure it will last for years to come, making it a smart investment for any home.",
      bells: 1500
   )
   bluewavy = Item.create!(
      item_name: "Wavy rug",
      colors: "Blue",
      material: "Plush",
      dimensions: "3x3",
      theme: "Living room Child's room",
      description: "Looking for a rug that is not only beautiful but also unique and eye-catching? Look no further than our blue wavy rug! Whether you're looking to add a touch of luxury to your living room, create a calming and soothing atmosphere in your bedroom, or add a touch of refinement to your office, this rug is the perfect choice. And with its durable construction, you can be sure it will last for years to come, making it a smart investment for any home or office.",
      bells: 2000
   )
   botanical = Item.create!(
      item_name: "Botanical rug",
      colors: "Green",
      material: "Polyester",
      dimensions: "4x3",
      theme: "Living room",
      description: "Looking for a rug that can transform your space into a lush and inviting garden oasis? Look no further than our botanical rug! Whether you're looking to create a calming and soothing atmosphere in your bedroom, or add a touch of nature to your living room, this rug is the perfect choice. The botanical design brings the beauty of nature into your home, creating a welcoming and tranquil space that you and your guests will love.",
      bells: 2000
   )
   earth = Item.create!(
      item_name: "Earth rug",
      colors: "Blue White",
      material: "Plush",
      dimensions: "3x3",
      theme: "Space Sci Fi",
      description: "Crafted from natural and sustainable materials, this rug is the perfect choice for anyone who is passionate about protecting the environment. The rug features earthy tones and a unique texture that is inspired by the natural beauty of the planet. Our Earth rug is also a great conversation starter, allowing you to share your passion for sustainability and environmental responsibility with your friends and family.",
      bells: 1500
   )
   fluffy = Item.create!(
      item_name: "Fluffy rug",
      colors: "White",
      material: "Fluff",
      dimensions: "3x3",
      theme: "Fancy Child's room",
      description: "Looking for a rug that is not only soft and cozy but also stylish and versatile? Look no further than our fluffy rug! Whether you're looking to create a cozy and inviting atmosphere in your living room, add a touch of comfort to your bedroom, or even use it as a comfy and stylish pet bed, this rug is the perfect choice.",
      bells: 1500
   )
   fossil = Item.create!(
      item_name: "Fossil rug",
      colors: "Purple White",
      material: "Plush",
      dimensions: "4x4",
      theme: "Fancy Child's room",
      description: "Looking for a rug that is not only beautiful but also unique and distinctive? Look no further than our fossil rug! So why settle for a plain and boring rug when you can add a touch of character and style with our fossil rug? Order yours today and transform your space into a beautiful and distinctive oasis!",
      bells: 1500
   )
   ironentrance = Item.create!(
      item_name: "Iron entrance mat",
      colors: "Black",
      material: "High-grade Iron",
      dimensions: "2x1",
      theme: "Shop Cafe",
      description: "An iron entrance mat is a highly durable and stylish option for your entryway. Crafted from durable iron, this type of mat is designed to withstand heavy foot traffic and the elements, making it a great choice for both indoor and outdoor use. One of the key benefits of an iron entrance mat is its ability to effectively scrape dirt, debris, and moisture from shoes. This helps to keep your floors clean and dry, while also reducing the risk of slips and falls.",
      bells: 1000
   )
   lacy = Item.create!(
      item_name: "Lacy rug",
      colors: "Beige White",
      material: "Frizzle",
      dimensions: "3x3",
      theme: "Fancy Expensive",
      description: "A lacy rug is a beautiful and intricate piece that adds elegance and sophistication to any room. This type of rug features a delicate and intricate pattern that creates a lacy effect, often resembling the intricate designs found in lace fabric. Overall, a lacy rug is a beautiful and sophisticated addition to any room. Its delicate and intricate design creates a unique and elegant atmosphere, while its durability and easy maintenance make it a practical choice for busy households.",
      bells: 1500
   )
   magiccircle = Item.create!(
      item_name: "Magic-circle rug",
      colors: "Purple",
      material: "Rails",
      dimensions: "4x3",
      theme: "Horror Child's room",
      description: "The magic circle rug is a unique and stylish rug that features a circular pattern with concentric rings, often in different colors. This design creates a visually stunning effect that can add a touch of whimsy and fun to any room.",
      bells: 1500
   )
   mush = Item.create!(
      item_name: "Mush rug",
      colors: "Red",
      material: "Shiitake",
      dimensions: "3x3",
      theme: "Fancy Child's room",
      description: "Mush rugs are typically made from high-quality materials such as wool, cotton, or synthetic fibers, and are available in a range of sizes and shapes to fit a variety of spaces. They are a popular choice for nature-themed decor, children's rooms, or any space where a touch of whimsy and playfulness is desired. One of the key benefits of a mush rug is its ability to add a playful and fun element to any room. The mushroom designs can evoke feelings of magic and enchantment, creating a sense of wonder and imagination.",
      bells: 1500
   )
   ovalentrance = Item.create!(
      item_name: "Oval entrance mat",
      colors: "Blue",
      material: "Circles",
      dimensions: "2x1",
      theme: "Living room",
      description: "An oval entrance mat is a functional and practical piece that is designed to be placed at the entrance of a home or business. As the name suggests, these mats are oval in shape and are typically made from durable materials such as rubber, coir, or synthetic fibers. In addition to their practical benefits, oval entrance mats can also add a decorative touch to the entrance of a home or business. They are available in a variety of styles and designs, from simple and understated to bold and colorful.",
      bells: 1000
   )
   red = Item.create!(
      item_name: "Red carpet",
      colors: "Red",
      material: "Pure Red",
      dimensions: "3x2",
      theme: "Expensive Party",
      description: "A red carpet is a long, plush, and often luxurious carpet typically used for formal events such as movie premieres, awards ceremonies, and other special occasions. The carpet is traditionally red in color, although other colors such as blue or green may also be used. The origin of the red carpet can be traced back to ancient Greece, where it was used to welcome victorious warriors and leaders home from battle. The tradition was later adopted by European monarchs and eventually spread to other cultures and events, including Hollywood movie premieres and other high-profile events. In addition to its historical significance, the red carpet has become a symbol of glamour, elegance, and prestige. Walking the red carpet has become a rite of passage for many celebrities, and the media often pays close attention to the fashion and style choices of those in attendance.",
      bells: 1500
   )
   rough = Item.create!(
      item_name: "Rough rug",
      colors: "Brown",
      material: "Wire Frames",
      dimensions: "2x1",
      theme: "School",
      description: "A rough rug is a type of rug that is designed to have a rough or coarse texture, often featuring a raised or looped pile. These rugs are typically made from natural materials such as wool, jute, or sisal, which gives them their distinct texture and appearance. Rough rugs are also a popular choice for adding a natural, rustic, or bohemian touch to a space. The natural materials used in their construction give them a warm and organic feel that can help to create a cozy and inviting atmosphere.",
      bells: 1000
   )
   rubber = Item.create!(
      item_name: "Rubber mud mat",
      colors: "Green",
      material: "Rubber",
      dimensions: "2x1",
      theme: "School",
      description: "A rubber mud mat is a type of mat that is designed to remove dirt, debris, and moisture from shoes before they enter a building or home. These mats are typically made from rubber or other synthetic materials and are designed to be durable, slip-resistant, and easy to clean. One of the key benefits of a rubber mud mat is its ability to effectively remove dirt and moisture from shoes. The raised pattern or textured surface of the mat helps to scrape off dirt and debris, while the rubber material helps to absorb moisture and prevent slips and falls.",
      bells: 1000
   )
   shanty = Item.create!(
      item_name: "Shanty mat",
      colors: "Brown Beige",
      material: "Bamboo",
      dimensions: "4x4",
      theme: "Harmonious Horror",
      description: "A shanty mat is a type of woven mat traditionally made by sailors on board ships during long voyages. It was used as a protective covering for the deck or as a mat to sit or sleep on. Shanty mats are typically made from strips of old rope, which are woven together in a square or rectangular pattern. The rope is often made from natural fibers like hemp or sisal, and the mats are usually woven in a loose, open pattern to allow water to pass through. The mats can be made in a variety of sizes and colors, depending on the availability of materials and the preferences of the sailors making them.",
      bells: 2000
   )
   sloppy = Item.create!(
      item_name: "Sloppy rug",
      colors: "Aqua",
      material: "Whatever we've got",
      dimensions: "4x4",
      theme: "Living room",
      description: "An unkempt rug is a rug that has not been properly cared for and maintained. Over time, rugs can accumulate dust, dirt, and debris, and if not cleaned regularly, this can cause the rug to appear messy and unattractive. Additionally, if a rug is not regularly vacuumed, the fibers can become matted and tangled, causing the rug to look uneven and sloppy. To avoid an unkempt rug, it is important to regularly clean and maintain your rug. This may involve vacuuming the rug regularly, using a spot cleaner to treat any spills or stains, and periodically taking the rug outside to shake off any loose dirt and debris. In addition, it is a good idea to have the rug professionally cleaned on a regular basis to keep it looking its best and to extend its lifespan.",
      bells: 2000
   )
   snowflake = Item.create!(
      item_name: "Snowflake rug",
      colors: "Aqua White",
      material: "Ice",
      dimensions: "3x3",
      theme: "Freezing cold Fancy",
      description: "A snowflake rug is a type of decorative rug or mat that features a snowflake pattern. Snowflake rugs are often used during the winter season to add a festive touch to a room or to provide a cozy and warm feeling during colder months. Snowflake rugs can be made from a variety of materials, including wool, cotton, and synthetic fibers. They come in a range of sizes, from small accent mats to large area rugs, and can be found in a variety of colors, though they are most commonly white or blue to represent the icy and snowy winter landscape.",
      bells: 1500
   )
   tatami = Item.create!(
      item_name: "Tatami mat",
      colors: "Green Yellow",
      material: "Bamboo",
      dimensions: "3x2",
      theme: "Harmonious",
      description: "The tatami mat is a traditional type of flooring used in Japan. It is a rectangular mat made of woven rush straw that is compressed and covered in a tightly woven rush cover. The mat is typically around 1.5 to 2 inches thick, and can range in size from about 3 feet by 6 feet to 3 feet by 9 feet, although there are also other sizes available. Tatami mats are commonly used in traditional Japanese architecture, and are often found in rooms where people sit and sleep. They are used as a base for futons or as a floor covering in living rooms, tea rooms, and other spaces where people gather. The softness and resilience of the tatami mat make it comfortable for sitting or sleeping on, and its natural materials allow it to be breathable, keeping the room cool in the summer and warm in the winter.",
      bells: 1500
   )
   tropical = Item.create!(
      item_name: "Tropical rug",
      colors: "Green Beige",
      material: "Tiny Islands",
      dimensions: "3x3",
      theme: "Ocean",
      description: "tbd",
      bells: 1500
   )
   boneentrance = Item.create!(
      item_name: "Bone entrance mat",
      colors: "Green",
      material: "Plastic recycled bones",
      dimensions: "2x1",
      theme: "Living room Child's room",
      description: "tbd",
      bells: 1000
   )
   coconut = Item.create!(
      item_name: "Coconut mat",
      colors: "Brown",
      material: "Coconuts",
      dimensions: "2x1",
      theme: "Cafe",
      description: "tbd",
      bells: 1000
   )
   cookie = Item.create!(
      item_name: "Cookie rug",
      colors: "Orange Yellow",
      material: "Flour, water, eggs",
      dimensions: "3x3",
      theme: "Child's Room",
      description: "tbd",
      bells: 1500
   )
   imperial = Item.create!(
      item_name: "Imperial rug",
      colors: "Red",
      material: "Silk",
      dimensions: "4x4",
      theme: "Harmonious",
      description: "tbd",
      bells: 1500
   )
   record = Item.create!(
      item_name: "Record rug",
      colors: "Black Red",
      material: "Polyvinyl Chloride",
      dimensions: "3x3",
      theme: "Living room",
      description: "tbd",
      bells: 1500
   )
   skull = Item.create!(
      item_name: "Skull rug",
      colors: "Gray Black",
      material: "Calcium",
      dimensions: "3x3",
      theme: "Horror Child's room",
      description: "tbd",
      bells: 1500
   )
   stage = Item.create!(
      item_name: "Stage rug",
      colors: "Colorful Yellow",
      material: "Splintered wood",
      dimensions: "3x3",
      theme: "Concert Party",
      description: "tbd",
      bells: 1500
   )

   blueexercise = Item.create!(
      item_name: "Exercise mat",
      colors: "Blue",
      material: "PVC",
      dimensions: "3x2",
      theme: "School",
      description: "tbd",
      bells: 1500
   )
   redexercise = Item.create!(
      item_name: "Exercise mat",
      colors: "Red",
      material: "PVC",
      dimensions: "3x2",
      theme: "School",
      description: "tbd",
      bells: 1500
   )
   greenexquisite = Item.create!(
      item_name: "Exquisite rug",
      colors: "Green Yellow",
      material: "Rare fibers",
      dimensions: "2x1",
      theme: "Harmonious",
      description: "tbd",
      bells: 1000
   )
   spooky = Item.create!(
      item_name: "Spooky rug",
      colors: "Orange Purple",
      material: "Nightmares",
      dimensions: "4x4",
      theme: "Horror Party",
      description: "tbd",
      bells: 2000
   )
   festive = Item.create!(
      item_name: "Festive rug",
      colors: "Brown Colorful",
      material: "Turkey feathers",
      dimensions: "4x4",
      theme: "Party Fancy",
      description: "tbd",
      bells: 1500
   )
   maple = Item.create!(
      item_name: "Maple-leaf rug",
      colors: "Red Orange",
      material: "Maple syrup",
      dimensions: "3x3",
      theme: "Harmonious Garden",
      description: "tbd",
      bells: 2400
   )
   bunnyday = Item.create!(
      item_name: "Bunny Day rug",
      colors: "Colorful",
      material: "Recycled eggshells",
      dimensions: "3x3",
      theme: "Fancy Child's room",
      description: "tbd",
      bells: 2400
   )
   fish = Item.create!(
      item_name: "Fish rug",
      colors: "Aqua",
      material: "Dried fish scales",
      dimensions: "3x3",
      theme: "Ocean Child's room",
      description: "tbd",
      bells: 2400
   )
   pirate = Item.create!(
      item_name: "Pirate rug",
      colors: "Blue Brown",
      material: "Gold",
      dimensions: "3x2",
      theme: "Ocean Horror",
      description: "tbd",
      bells: 375
   )
   cinnamoroll = Item.create!(
      item_name: "Cinnamoroll rug",
      colors: "Aqua White",
      material: "Cinnabuns",
      dimensions: "3x3",
      theme: "Fancy Child's Room",
      description: "tbd",
      bells: 1500
   )
   greenchecked = Item.create!(
      item_name: "Checked rug",
      colors: "Green Purple",
      material: "Wool",
      dimensions: "4x4",
      theme: "Living room Child's Room",
      description: "tbd",
      bells: 2000
   )

   naturalwooden = Item.create!(
      item_name: "Wooden-deck rug",
      colors: "Brown",
      material: "Wood",
      dimensions: "3x2",
      theme: "Outdoors Garden",
      description: "tbd",
      bells: 1500
   )
   whitewooden = Item.create!(
      item_name: "Wooden-deck rug",
      colors: "White",
      material: "Wood",
      dimensions: "3x2",
      theme: "Outdoors Garden",
      description: "tbd",
      bells: 1500
   )
   brownkitchen = Item.create!(
      item_name: "Kitchen mat",
      colors: "Brown",
      material: "PVC",
      dimensions: "2x1",
      theme: "Kitchen",
      description: "tbd",
      bells: 1000
   )
   graybrick = Item.create!(
      item_name: "Brick rug",
      colors: "Gray",
      material: "Brick",
      dimensions: "2x2",
      theme: "Garden Outdoors European",
      description: "tbd",
      bells: 1000
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

   blueexercise.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/blue_exercise_mat.png"),
      filename: "blue_exercise_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/show_blue_exercise_mat.png"),
      filename: "show_blue_exercise_mat.png"
   }])

   redexercise.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/red_exercise_mat.png"),
      filename: "red_exercise_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/show_red_exercise_mat.jpeg"),
      filename: "show_red_exercise_mat.png"
   }])

   greenexquisite.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/green_exquisite_rug.png"),
      filename: "green_exquisite_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/show_green_exquisite_rug.jpeg"),
      filename: "show_green_exquisite_rug.png"
   }])

   spooky.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/spooky_rug.png"),
      filename: "spooky_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/show_spooky_rug.jpeg"),
      filename: "show_spooky_rug.png"
   }])

   festive.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/festive_rug.png"),
      filename: "festive_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/show_festive_rug.jpeg"),
      filename: "show_festive_rug.jpeg"
   }])

   maple.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/maple_leaf_rug.png"),
      filename: "maple_leaf_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/show_maple_leaf_rug.jpeg"),
      filename: "show_maple_leaf_rug.jpeg"
   }])

   bunnyday.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/bunny_day_rug.png"),
      filename: "bunny_day_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/show_bunny_day_rug.png"),
      filename: "show_bunny_day_rug.png"
   }])

   fish.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/fish_rug.png"),
      filename: "fish_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/show_fish_rug.jpeg"),
      filename: "show_fish_rug.jpeg"
   }])

   pirate.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/pirate_rug.png"),
      filename: "pirate_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/show_pirate_rug.jpeg"),
      filename: "show_pirate_rug.jpeg"
   }])

   cinnamoroll.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/cinnamoroll_rug.png"),
      filename: "cinnamoroll_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/show_cinnamoroll_rug.jpeg"),
      filename: "show_cinnamoroll_rug.jpeg"
   }])

   greenchecked.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/green_checked_rug.png"),
      filename: "green_checked_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs/show_green_checked_rug.jpeg"),
      filename: "show_green_checked_rug.jpeg"
   }])

   naturalwooden.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs2/natural_wooden_deck_rug.png"),
      filename: "natural_wooden_deck_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs2/show_natural_wooden_deck_rug.jpeg"),
      filename: "show_natural_wooden_deck_rug.jpeg"
   }])

   whitewooden.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs2/white_wooden_deck_rug.png"),
      filename: "white_wooden_deck_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs2/show_white_wooden_deck_rug.jpeg"),
      filename: "show_white_wooden_deck_rug.jpeg"
   }])

   brownkitchen.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs2/brown_kitchen_mat.png"),
      filename: "brown_kitchen_mat.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs2/show_brown_kitchen_mat.jpeg"),
      filename: "show_brown_kitchen_mat.png"
   }])

   graybrick.photos.attach([{
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs2/gray_brick_rug.png"),
      filename: "gray_brick_rug.png"
   },
   {
      io: URI.open("https://sahara-seeds.s3.amazonaws.com/newrugs2/show_gray_brick+_rug.jpeg"),
      filename: "show_gray_brick_rug.jpeg"
   }])
end
