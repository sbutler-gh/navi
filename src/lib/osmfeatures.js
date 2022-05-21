let array = [
    {
      Key: "aerialway",
      Value: "cable_car",
      Description: "A cable car run. Just one or two large cars. The traction cable forms a loop, but the cars do not loop around, they just move up and down on their own side, rolling along static cables over which they are suspended.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "gondola",
      Description: "An aerialway where the cabins go around in a circle.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "mixed_lift",
      Description: "A mixed lift, containing both gondolas and chairs.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "chair_lift",
      Description: "An open chairlift run. These have a single seat to sit on and are open to the outside air.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "drag_lift",
      Description: "An overhead tow-line for skiers and riders.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "t-bar",
      Description: "An overhead tow-line for skiers and riders with T-shaped carriers for two passengers.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "j-bar",
      Description: "J-bar lift or L-bar lift. Overhead tow-line for skiers and riders with carriers in J-shape.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "platter",
      Description: "An overhead tow-line for skiers and riders with platters.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "rope_tow",
      Description: "A tow-line for skiers and riders where passenger hold by hand or use special tow grabbers.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "magic_carpet",
      Description: "A ski lift for small children resembling a conveyor belt.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "zip_line",
      Description: "Zip line, gravity propelled aerial ropeslide like a flying fox or similar",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "goods",
      Description: "A cable supported lift for conveying goods, not passengers. Consider other values for aerialway in combination with access and usage keys instead of this.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "pylon",
      Description: "A pylon supporting the aerialway cable.",
      Category: ""
    },
    {
      Key: "aerialway",
      Value: "station",
      Description: "A station where passengers and/or goods can enter and/or leave the aerialway",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "aerodrome",
      Description: "An aerodrome, airport or airfield",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "apron",
      Description: "An area of an airport where planes are parked, unloaded or loaded, refueled, or boarded",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "gate",
      Description: "The bounded space, inside the airport terminal, where passengers wait before boarding their flight",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "hangar",
      Description: "A large airport building with extensive floor areas for housing aircraft or spacecraft",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "helipad",
      Description: "A landing area or platform designed for helicopters",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "heliport",
      Description: "A special aerodrome built for helicopters",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "navigationaid",
      Description: "A facility that supports visual navigation for aircraft",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "runway",
      Description: "A strip of land on which aircraft can take off and land.",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "spaceport",
      Description: "A spaceport or cosmodrome: a site for launching or receiving spacecraft",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "taxiway",
      Description: "A route where airplanes manouevre between runways and parking areas within an aerodrome",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "terminal",
      Description: "An airport passenger building",
      Category: ""
    },
    {
      Key: "aeroway",
      Value: "windsock",
      Description: "An object that shows wind direction and speed.",
      Category: ""
    },
    {
      Key: "Sustenance",
      Value: "",
      Description: "",
      Category: ""
    },
    {
      Key: "amenity",
      Value: "bar",
      Description: "Bar is a purpose-built commercial establishment that sells alcoholic drinks to be consumed on the premises. They are characterised by a noisy and vibrant atmosphere, similar to a party and usually don't sell food. See also the description of the tags amenity=pub;bar;restaurant for a distinction between these.",
      Category: "Sustenance\t\t\t"
    },
    {
      Key: "amenity",
      Value: "biergarten",
      Description: "Biergarten or beer garden is an open-air area where alcoholic beverages along with food is prepared and served. See also the description of the tags amenity=pub;bar;restaurant. A biergarten can commonly be found attached to a beer hall, pub, bar, or restaurant. In this case, you can use biergarten=yes additional to amenity=pub;bar;restaurant.",
      Category: "Sustenance\t\t\t"
    },
    {
      Key: "amenity",
      Value: "cafe",
      Description: "Cafe is generally an informal place that offers casual meals and beverages; typically, the focus is on coffee or tea. Also known as a coffeehouse/shop, bistro or sidewalk cafe. The kind of food served may be mapped with the tags cuisine=* and diet=*. See also the tags amenity=restaurant;bar;fast_food.",
      Category: "Sustenance\t\t\t"
    },
    {
      Key: "amenity",
      Value: "fast_food",
      Description: "Fast food restaurant (see also amenity=restaurant). The kind of food served can be tagged with cuisine=* and diet=*.",
      Category: "Sustenance\t\t\t"
    },
    {
      Key: "amenity",
      Value: "food_court",
      Description: "An area with several different restaurant food counters and a shared eating area. Commonly found in malls, airports, etc.",
      Category: "Sustenance\t\t\t"
    },
    {
      Key: "amenity",
      Value: "ice_cream",
      Description: "Ice cream shop or ice cream parlour. A place that sells ice cream and frozen yoghurt over the counter",
      Category: "Sustenance\t\t\t"
    },
    {
      Key: "amenity",
      Value: "pub",
      Description: "A place selling beer and other alcoholic drinks; may also provide food or accommodation (UK). See description of amenity=bar and amenity=pub for distinction between bar and pub",
      Category: "Sustenance\t\t\t"
    },
    {
      Key: "amenity",
      Value: "restaurant",
      Description: "Restaurant (not fast food, see amenity=fast_food). The kind of food served can be tagged with cuisine=* and diet=*.",
      Category: "Sustenance\t\t\t"
    },
    {
      Key: "Education",
      Value: "",
      Description: "",
      Category: ""
    },
    {
      Key: "amenity",
      Value: "college",
      Description: "Campus or buildings of an institute of Further Education (aka continuing education)",
      Category: "Education"
    },
    {
      Key: "amenity",
      Value: "driving_school",
      Description: "Driving School which offers motor vehicle driving lessons",
      Category: "Education"
    },
    {
      Key: "amenity",
      Value: "kindergarten",
      Description: "For children too young for a regular school (also known as preschool, playschool or nursery school), in some countries including afternoon supervision of primary school children.",
      Category: "Education"
    },
    {
      Key: "amenity",
      Value: "language_school",
      Description: "Language School: an educational institution where one studies a foreign language.",
      Category: "Education"
    },
    {
      Key: "amenity",
      Value: "library",
      Description: "A public library (municipal, university, …) to borrow books from.",
      Category: "Education"
    },
    {
      Key: "amenity",
      Value: "toy_library",
      Description: "A place to borrow games and toys, or play with them on site.",
      Category: "Education"
    },
    {
      Key: "amenity",
      Value: "music_school",
      Description: "A music school, an educational institution specialized in the study, training, and research of music.",
      Category: "Education"
    },
    {
      Key: "amenity",
      Value: "school",
      Description: "School and grounds - primary, middle and seconday schools",
      Category: "Education"
    },
    {
      Key: "amenity",
      Value: "university",
      Description: "An university campus: an institute of higher education",
      Category: "Education"
    },
    {
      Key: "Transportation",
      Value: "",
      Description: "",
      Category: ""
    },
    {
      Key: "amenity",
      Value: "bicycle_parking",
      Description: "Parking for bicycles",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "bicycle_repair_station",
      Description: "General tools for self-service bicycle repairs, usually on the roadside; no service",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "bicycle_rental",
      Description: "Rent a bicycle",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "boat_rental",
      Description: "Rent a Boat",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "boat_sharing",
      Description: "Share a Boat",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "bus_station",
      Description: "May also be tagged as public_transport=station.",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "car_rental",
      Description: "Rent a car",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "car_sharing",
      Description: "Share a car",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "car_wash",
      Description: "Wash a car",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "vehicle_inspection",
      Description: "Government vehicle inspection",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "charging_station",
      Description: "Charging facility for electric vehicles",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "ferry_terminal",
      Description: "Ferry terminal/stop. A place where people/cars/etc. can board and leave a ferry.",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "fuel",
      Description: "Petrol station; gas station; marine fuel; … Streets to petrol stations are often tagged highway=service.",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "grit_bin",
      Description: "A container that holds grit or a mixture of salt and grit.",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "motorcycle_parking",
      Description: "Parking for motorcycles",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "parking",
      Description: "Car park. Nodes and areas (without access tag) will get a parking symbol. Areas will be coloured. Streets on car parking are often tagged highway=service and service=parking_aisle.",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "parking_entrance",
      Description: "An entrance or exit to an underground or multi-storey parking facility. Group multiple parking entrances together with a relation using the tags type=site and site=parking. Do not mix with amenity=parking.",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "parking_space",
      Description: "A single parking space. Group multiple parking spaces together with a relation using the tags type=site and site=parking. Do not mix with amenity=parking.",
      Category: "Transportation"
    },
    {
      Key: "amenity",
      Value: "taxi",
      Description: "A place where taxis wait for passengers.",
      Category: "Transportation"
    },
    {
      Key: "Financial",
      Value: "",
      Description: "",
      Category: ""
    },
    {
      Key: "amenity",
      Value: "atm",
      Description: "ATM or cash point: a device that provides the clients of a financial institution with access to financial transactions.",
      Category: "Financial"
    },
    {
      Key: "amenity",
      Value: "bank",
      Description: "Bank or credit union: a financial establishment where customers can deposit and withdraw money, take loans, make investments and transfer funds.",
      Category: "Financial"
    },
    {
      Key: "amenity",
      Value: "bureau_de_change",
      Description: "Bureau de change, money changer, currency exchange, Wechsel, cambio – a place to change foreign bank notes and travellers cheques.",
      Category: "Financial"
    },
    {
      Key: "Healthcare",
      Value: "",
      Description: "",
      Category: ""
    },
    {
      Key: "amenity",
      Value: "baby_hatch",
      Description: "A place where a baby can be, out of necessity, anonymously left to be safely cared for and perhaps adopted.",
      Category: "Healthcare"
    },
    {
      Key: "amenity",
      Value: "clinic",
      Description: "A medium-sized medical facility or health centre.",
      Category: "Healthcare"
    },
    {
      Key: "amenity",
      Value: "dentist",
      Description: "A dentist practice / surgery.",
      Category: "Healthcare"
    },
    {
      Key: "amenity",
      Value: "doctors",
      Description: "A doctor's practice / surgery.",
      Category: "Healthcare"
    },
    {
      Key: "amenity",
      Value: "hospital",
      Description: "A hospital providing in-patient medical treatment. Often used in conjunction with emergency=* to note whether the medical centre has emergency facilities (A&E (brit.) or ER (am.))",
      Category: "Healthcare"
    },
    {
      Key: "amenity",
      Value: "nursing_home",
      Description: "Discouraged tag for a home for disabled or elderly persons who need permanent care. Use amenity=social_facility + social_facility=nursing_home now.",
      Category: "Healthcare"
    },
    {
      Key: "amenity",
      Value: "pharmacy",
      Description: "Pharmacy: a shop where a pharmacist sells medications\ndispensing=yes/no - availability of prescription-only medications",
      Category: "Healthcare"
    },
    {
      Key: "amenity",
      Value: "social_facility",
      Description: "A facility that provides social services: group & nursing homes, workshops for the disabled, homeless shelters, etc.",
      Category: "Healthcare"
    },
    {
      Key: "amenity",
      Value: "veterinary",
      Description: "A place where a veterinary surgeon, also known as a veterinarian or vet, practices.",
      Category: "Healthcare"
    },
    {
      Key: "Entertainment, Arts & Culture",
      Value: "",
      Description: "",
      Category: ""
    },
    {
      Key: "amenity",
      Value: "arts_centre",
      Description: "A venue where a variety of arts are performed or conducted",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "brothel",
      Description: "An establishment specifically dedicated to prostitution",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "casino",
      Description: "A gambling venue with at least one table game(e.g. roulette, blackjack) that takes bets on sporting and other events at agreed upon odds.",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "cinema",
      Description: "A place where films are shown (US: movie theater)",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "community_centre",
      Description: "A place mostly used for local events, festivities and group activities; including special interest and special age groups. .",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "conference_centre",
      Description: "A large building that is used to hold a convention",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "events_venue",
      Description: "A building specifically used for organising events",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "fountain",
      Description: "A fountain for cultural / decorational / recreational purposes.",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "gambling",
      Description: "A place for gambling, not being a shop=bookmaker, shop=lottery, amenity=casino, or leisure=adult_gaming_centre.Games that are covered by this definition include bingo and pachinko.",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "love_hotel",
      Description: "A love hotel is a type of short-stay hotel operated primarily for the purpose of allowing guests privacy for sexual activities.",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "nightclub",
      Description: "A place to drink and dance (nightclub). The German word is \"Disco\" or \"Discothek\". Please don't confuse this with the German \"Nachtclub\" which is most likely amenity=stripclub.",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "planetarium",
      Description: "A planetarium.",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "public_bookcase",
      Description: "A street furniture containing books. Take one or leave one.",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "social_centre",
      Description: "A place for free and not-for-profit activities.",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "stripclub",
      Description: "A place that offers striptease or lapdancing (for sexual services use amenity=brothel).",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "studio",
      Description: "TV radio or recording studio",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "swingerclub",
      Description: "A club where people meet to have a party and group sex.",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "amenity",
      Value: "theatre",
      Description: "A theatre or opera house where live performances occur, such as plays, musicals and formal concerts. Use amenity=cinema for movie theaters.",
      Category: "Entertainment, Arts, & Culture"
    },
    {
      Key: "Public Service",
      Value: "",
      Description: "",
      Category: ""
    },
    {
      Key: "amenity",
      Value: "courthouse",
      Description: "A building home to a court of law, where justice is dispensed",
      Category: "Public Service"
    },
    {
      Key: "amenity",
      Value: "embassy",
      Description: "Deprecated. An embassy, consulate or diplomatic office. Use office=diplomatic + diplomatic=embassy",
      Category: "Public Service"
    },
    {
      Key: "amenity",
      Value: "fire_station",
      Description: "A station of a fire brigade",
      Category: "Public Service"
    },
    {
      Key: "amenity",
      Value: "police",
      Description: "A police station where police officers patrol from and that is a first point of contact for civilians",
      Category: "Public Service"
    },
    {
      Key: "amenity",
      Value: "post_box",
      Description: "A box for the reception of mail. Alternative mail-carriers can be tagged via operator=*",
      Category: "Public Service"
    },
    {
      Key: "amenity",
      Value: "post_depot",
      Description: "Post depot or delivery office, where letters and parcels are collected and sorted prior to delivery.",
      Category: "Public Service"
    },
    {
      Key: "amenity",
      Value: "post_office",
      Description: "Post office building with postal services",
      Category: "Public Service"
    },
    {
      Key: "amenity",
      Value: "prison",
      Description: "A prison or jail where people are incarcerated before trial or after conviction",
      Category: "Public Service"
    },
    {
      Key: "amenity",
      Value: "ranger_station",
      Description: "National Park visitor headquarters: official park visitor facility with police, visitor information, permit services, etc",
      Category: "Public Service"
    },
    {
      Key: "amenity",
      Value: "townhall",
      Description: "Building where the administration of a village, town or city may be located, or just a community meeting place",
      Category: "Public Service"
    },
    {
      Key: "Facilities",
      Value: "",
      Description: "",
      Category: ""
    },
    {
      Key: "amenity",
      Value: "bbq",
      Description: "BBQ or Barbecue is a permanently built grill for cooking food, which is most typically used outdoors by the public. For example these may be found in city parks or at beaches. Use the tag fuel=* to specify the source of heating, such as fuel=wood;electric;charcoal. For mapping nearby table and chairs, see also the tag tourism=picnic_site. For mapping campfires and firepits, instead use the tag leisure=firepit.",
      Category: "Facilities"
    },
    {
      Key: "amenity",
      Value: "bench",
      Description: "A bench to sit down and relax a bit",
      Category: "Facilities"
    },
    {
      Key: "amenity",
      Value: "dog_toilet",
      Description: "Area designated for dogs to urinate and excrete.",
      Category: "Facilities"
    },
    {
      Key: "amenity",
      Value: "drinking_water",
      Description: "Drinking water is a place where humans can obtain potable water for consumption. Typically, the water is used for only drinking. Also known as a drinking fountain or bubbler.",
      Category: "Facilities"
    },
    {
      Key: "amenity",
      Value: "give_box",
      Description: "A small facility where people drop off and pick up various types of items in the sense of free sharing and reuse.",
      Category: "Facilities"
    },
    {
      Key: "amenity",
      Value: "parcel_locker",
      Description: "Machine for picking up and sending parcels",
      Category: "Facilities"
    },
    {
      Key: "amenity",
      Value: "shelter",
      Description: "A small shelter against bad weather conditions. To additionally describe the kind of shelter use shelter_type=*.",
      Category: "Facilities"
    },
    {
      Key: "amenity",
      Value: "shower",
      Description: "Public shower or bath.",
      Category: "Facilities"
    },
    {
      Key: "amenity",
      Value: "telephone",
      Description: "Public telephone",
      Category: "Facilities"
    },
    {
      Key: "amenity",
      Value: "toilets",
      Description: "Public toilets (might require a fee)",
      Category: "Facilities"
    },
    {
      Key: "amenity",
      Value: "water_point",
      Description: "Place where you can get large amounts of drinking water",
      Category: "Facilities"
    },
    {
      Key: "amenity",
      Value: "watering_place",
      Description: "Place where water is contained and animals can drink",
      Category: "Facilities"
    },
    {
      Key: "Waste Management",
      Value: "",
      Description: "",
      Category: ""
    },
    {
      Key: "amenity",
      Value: "sanitary_dump_station",
      Description: "A place for depositing human waste from a toilet holding tank.",
      Category: "Waste Management"
    },
    {
      Key: "amenity",
      Value: "recycling",
      Description: "Recycling facilities (bottle banks, etc.). Combine with recycling_type=container for containers or recycling_type=centre for recycling centres.",
      Category: "Waste Management"
    },
    {
      Key: "amenity",
      Value: "waste_basket",
      Description: "A single small container for depositing garbage that is easily accessible for pedestrians.",
      Category: "Waste Management"
    },
    {
      Key: "amenity",
      Value: "waste_disposal",
      Description: "A medium or large disposal bin, typically for bagged up household or industrial waste.",
      Category: "Waste Management"
    },
    {
      Key: "amenity",
      Value: "waste_transfer_station",
      Description: "A waste transfer station is a location that accepts, consolidates and transfers waste in bulk.",
      Category: "Waste Management"
    },
    {
      Key: "Others",
      Value: "",
      Description: "",
      Category: ""
    },
    {
      Key: "amenity",
      Value: "animal_boarding",
      Description: "A facility where you, paying a fee, can bring your animal for a limited period of time (e.g. for holidays)",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "animal_breeding",
      Description: "A facility where animals are bred, usually to sell them",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "animal_shelter",
      Description: "A shelter that recovers animals in trouble",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "baking_oven",
      Description: "An oven used for baking bread and similar, for example inside a building=bakehouse.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "childcare",
      Description: "A place where children of different ages are looked after which is not an amenity=kindergarten or preschool.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "clock",
      Description: "A public visible clock",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "crematorium",
      Description: "A place where dead human bodies are burnt",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "dive_centre",
      Description: "A dive center is the base location where sports divers usually start scuba diving or make dive guided trips at new locations.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "funeral_hall",
      Description: "A place for holding a funeral ceremony, other than a place of worship.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "grave_yard",
      Description: "A (smaller) place of burial, often you'll find a church nearby. Large places should be landuse=cemetery instead.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "gym",
      Description: "Deprecated. Use leisure=fitness_centre or leisure=sports_centre instead. A place which houses exercise equipment for the purpose of physical exercise.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "hunting_stand",
      Description: "A hunting stand: an open or enclosed platform used by hunters to place themselves at an elevated height above the terrain",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "internet_cafe",
      Description: "A place whose principal role is providing internet services to the public.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "kitchen",
      Description: "A public kitchen in a facility to use by everyone or customers",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "kneipp_water_cure",
      Description: "Outdoor foot bath facility. Usually this is a pool with cold water and handrail. Popular in German speaking countries.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "lounger",
      Description: "An object for people to lie down.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "marketplace",
      Description: "A marketplace where goods and services are traded daily or weekly.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "monastery",
      Description: "Monastery is the location of a monastery or a building in which monks and nuns live.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "photo_booth",
      Description: "Photo Booth – A stand to create instant photo.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "place_of_mourning",
      Description: "A room or building where families and friends can come, before the funeral, and view the body of the person who has died.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "place_of_worship",
      Description: "A church, mosque, or temple, etc. Note that you also need religion=*, usually denomination=* and preferably name=* as well as amenity=place_of_worship. See the article for details.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "public_bath",
      Description: "A location where the public may bathe in common, etc. japanese onsen, turkish bath, hot spring",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "public_building",
      Description: "A generic public building. Don't use! See office=government.",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "refugee_site",
      Description: "A human settlement sheltering refugees or internally displaced persons",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "vending_machine",
      Description: "A machine selling goods – food, tickets, newspapers, etc. Add type of goods using vending=*",
      Category: "Others"
    },
    {
      Key: "amenity",
      Value: "user defined",
      Description: "All commonly used values according to Taginfo",
      Category: "Others"
    },
    {
      Key: "barrier",
      Value: "cable_barrier",
      Description: "A road side or median barrier made of steel wire ropes mounted on weak posts.",
      Category: "Linear Barriers"
    },
    {
      Key: "barrier",
      Value: "city_wall",
      Description: "A fortification used to defend settlements in ancient to modern times.",
      Category: "Linear Barriers"
    },
    {
      Key: "barrier",
      Value: "ditch",
      Description: "A man made ditch or trench to prevent access to the other side.",
      Category: "Linear Barriers"
    },
    {
      Key: "barrier",
      Value: "fence",
      Description: "A freestanding structure designed to restrict or prevent movement across a boundary, generally distinguished from a wall by the lightness of its construction.",
      Category: "Linear Barriers"
    },
    {
      Key: "barrier",
      Value: "guard_rail",
      Description: "A rail, typically metal, designed to keep vehicles within their roadway and prevent dangerous collisions",
      Category: "Linear Barriers"
    },
    {
      Key: "barrier",
      Value: "handrail",
      Description: "A rail designed to be grasped by the hand so as to provide stability or support.",
      Category: "Linear Barriers"
    },
    {
      Key: "barrier",
      Value: "hedge",
      Description: "A line of closely spaced shrubs and tree species, which form a barrier or mark the boundary of an area.",
      Category: "Linear Barriers"
    },
    {
      Key: "barrier",
      Value: "kerb",
      Description: "A stone edging to a pavement or raised path (right side is bottom, left side is top).",
      Category: "Linear Barriers"
    },
    {
      Key: "barrier",
      Value: "retaining_wall",
      Description: "A structure that holds back soil or rock from a building, structure or area.",
      Category: "Linear Barriers"
    },
    {
      Key: "barrier",
      Value: "wall",
      Description: "A freestanding structure, designed to restrict or prevent movement across a boundary, typically made from solid brick, concrete or rocks, and almost always built so that it is opaque to vision.",
      Category: "Linear Barriers"
    },
    {
      Key: "barrier",
      Value: "block",
      Description: "One or more large immobile block(s) usually barring free access along a way.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "bollard",
      Description: "One or more solid (usually concrete or metal) pillar(s) used to control traffic.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "border_control",
      Description: "A control point at an international border between two countries.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "bump_gate",
      Description: "A drive-through gate used in rural areas to provide a barrier to livestock that does not require the driver to exit the vehicle.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "bus_trap",
      Description: "A short section of the roadway where there is a deep dip in the middle to prevent passage by some traffic.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "cattle_grid",
      Description: "A hole in the road surface covered in a series of bars that allow wheeled vehicles but not animals to cross.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "chain",
      Description: "A chain used to prevent motorised vehicles.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "cycle_barrier",
      Description: "A barrier along a path that slows or prevents access for bicycle users.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "debris",
      Description: "Debris blocking a road",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "entrance",
      Description: "An opening or gap in a barrier.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "full-height_turnstile",
      Description: "A full-height turnstile.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "gate",
      Description: "A section in a wall or fence which can be opened to allow access.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "hampshire_gate",
      Description: "A section of wire fence which can be removed temporarily.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "height_restrictor",
      Description: "A height restrictor which prevents access of vehicles higher than a set limit.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "horse_stile",
      Description: "A horse stile allows pedestrians and horses to cross a gap through a fence",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "jersey_barrier",
      Description: "A barrier made of heavy prefabricated blocks.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "kissing_gate",
      Description: "A type of gate where you have to go into an enclosure and open a gate to get through.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "lift_gate",
      Description: "A bar or pole pivoted (rotates upwards to open) in such a way as to allow the boom to block vehicular access through a controlled point.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "log",
      Description: "A log blocking access.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "motorcycle_barrier",
      Description: "A barrier along a path preventing access by motorcycles.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "rope",
      Description: "A flexible barrier made of rope.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "sally_port",
      Description: "A secure, controlled entryway to a fortification or prison.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "spikes",
      Description: "Spikes on the ground preventing unauthorized access.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "stile",
      Description: "A structure which provides people a passage through or over a boundary via steps, ladders or narrow gaps.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "sump_buster",
      Description: "A barrier to stop cars (two tracked vehicles with less than a certain ground clearance and width between tracks).",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "swing_gate",
      Description: "A gate consisting of a bar or pole pivoted (rotates sidewards to open) in such a way as to allow the boom to block vehicular access through a controlled point.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "toll_booth",
      Description: "A place where a road usage toll or fee is collected.",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "turnstile",
      Description: "A turnstile, a passage on foot designed to allow one person at a time to pass",
      Category: "Access control on highways"
    },
    {
      Key: "barrier",
      Value: "yes",
      Description: "Unspecific barrier value, it is always better to use more specific one if possible",
      Category: "Access control on highways"
    },
    {
      Key: "boundary",
      Value: "aboriginal_lands",
      Description: "A boundary representing official reservation boundaries of recognized aboriginal / indigenous / native peoples.",
      Category: "Boundary"
    },
    {
      Key: "boundary",
      Value: "administrative",
      Description: "An administrative boundary. Subdivisions of areas/territories/jurisdictions recognised by governments or other organisations for administrative purposes. These range from large groups of nation states right down to small administrative districts and suburbs, as indicated by the 'admin_level=*' combo tag.",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "border_zone",
      Description: "A border zone is an area near the border where special restrictions on movement apply. Usually a permit is required for visiting.",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "forest",
      Description: "A delimited forest is a land which is predominantly wooded and which is, for this reason, given defined boundaries. It may cover different tree stands, non-wooded areas, highways… but all the area within the boundaries are considered and managed as a single forest.",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "forest_compartment",
      Description: "A forest compartment is a numbered sub-division within a delimited forest, physically materialized with visible, typically cleared, boundaries.",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "hazard",
      Description: "A designated hazardous area, with a potential source of damage to health, life, property, or any other interest of value.",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "maritime",
      Description: "Maritime boundaries which are not administrative boundaries: the Baseline, Contiguous Zone and EEZ (Exclusive Economic Zone).",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "marker",
      Description: "A boundary marker, border marker, boundary stone, or border stone is a robust physical marker that identifies the start of a land boundary or the change in a boundary, especially a change in direction of a boundary. See also historic=boundary_stone",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "national_park",
      Description: "Area of outstanding natural beauty, set aside for conservation and for recreation (Other languages).",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "place",
      Description: "boundary=place is commonly used to map the boundaries of a place=*, when these boundaries can be defined but these are not administrative boundaries.",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "political",
      Description: "Electoral boundaries",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "postal_code",
      Description: "Postal code boundaries",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "protected_area",
      Description: "Protected areas, such as for national parks, marine protection areas, heritage sites, wilderness, cultural assets and similar.",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "special_economic_zone",
      Description: "A government-defined area in which business and trade laws are different.",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "disputed",
      Description: "An area of landed claimed by two or more parties (use with caution). See also Disputed territories.",
      Category: ""
    },
    {
      Key: "boundary",
      Value: "user defined",
      Description: "All commonly used values according to Taginfo",
      Category: ""
    },
    {
      Key: "building",
      Value: "apartments",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "barracks",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "bungalow",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "cabin",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "detached",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "dormitory",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "farm",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "ger",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "hotel",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "house",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "houseboat",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "residential",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "semidetached_house",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "static_caravan",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "terrace",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "commercial",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "industrial",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "kiosk",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "office",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "retail",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "supermarket",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "warehouse",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "cathedral",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "chapel",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "church",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "kingdom_hall",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "monastery",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "mosque",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "presbytery",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "religious",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "shrine",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "synagogue",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "temple",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "bakehouse",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "civic",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "college",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "fire_station",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "government",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "hospital",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "kindergarten",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "public",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "school",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "toilets",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "train_station",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "transportation",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "university",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "barn",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "conservatory",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "cowshed",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "farm_auxiliary",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "greenhouse",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "slurry_tank",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "stable",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "sty",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "grandstand",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "pavilion",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "riding_hall",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "sports_hall",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "stadium",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "hangar",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "hut",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "shed",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "carport",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "garage",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "garages",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "parking",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "digester",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "service",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "transformer_tower",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "water_tower",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "beach_hut",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "bunker",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "bridge",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "castle",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "construction",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "container",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "gatehouse",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "military",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "roof",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "ruins",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "tent",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "tree_house",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "yes",
      Description: "",
      Category: ""
    },
    {
      Key: "building",
      Value: "user defined",
      Description: "",
      Category: ""
    },
    {
      Key: "craft",
      Value: "agricultural_engines",
      Description: "A place where engines and tools for agricultural use are planned and constructed.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "atelier",
      Description: "A place where visual artists work",
      Category: ""
    },
    {
      Key: "craft",
      Value: "bakery",
      Description: "A workplace for fresh bakery goods. No shop.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "basket_maker",
      Description: "A person weaving baskets",
      Category: ""
    },
    {
      Key: "craft",
      Value: "beekeeper",
      Description: "The workplace of a beekeeper (apiarist).",
      Category: ""
    },
    {
      Key: "craft",
      Value: "blacksmith",
      Description: "A place where a blacksmith forges tools, horseshoes, etc. from iron.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "boatbuilder",
      Description: "A workplace where boats are planned and constructed",
      Category: ""
    },
    {
      Key: "craft",
      Value: "bookbinder",
      Description: "A workplace for physically assembling a book from a number of sheets of paper.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "brewery",
      Description: "A dedicated building for the making of beer.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "builder",
      Description: "A workplace or office of a tradesman who performs structural alterations and additions to buildings.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "cabinet_maker",
      Description: "A person who makes fine wooden furniture",
      Category: ""
    },
    {
      Key: "craft",
      Value: "car_painter",
      Description: "A place specializing in painting cars.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "carpenter",
      Description: "A workplace or office of carpenters that work with timber to construct, install and maintain buildings, furniture, and other objects.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "carpet_layer",
      Description: "A carpet layer is a tradesmen who specializes in laying carpets",
      Category: ""
    },
    {
      Key: "craft",
      Value: "caterer",
      Description: "A workplace or office of one who prepares customized meals for takeout, or provides prepared meals or supplies to a group at social gatherings",
      Category: ""
    },
    {
      Key: "craft",
      Value: "chimney_sweeper",
      Description: "A workplace or office of a person who cleans chimneys for a living.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "cleaning",
      Description: "Workplace or office of a person who cleaning building, industrial facilities or windows.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "clockmaker",
      Description: "A workplace or office of a clockmaker that is building, repairing or engraving clocks of all sorts.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "confectionery",
      Description: "A place where the set of food items that are rich in sugar, any one or type of which is called a confection is produced.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "cooper",
      Description: "A person or company that manufacture of containers and vessels mainly made of wood.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "dental_technician",
      Description: "A workplace for dental technician who constructs custom-made restorative and dental appliances",
      Category: ""
    },
    {
      Key: "craft",
      Value: "distillery",
      Description: "An establishment for distilling, especially for distilling alcoholic liquors.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "door_construction",
      Description: "A workplace of someone constructing doors",
      Category: ""
    },
    {
      Key: "craft",
      Value: "dressmaker",
      Description: "Dressmaker is a person who makes custom clothing for women, such as dresses, blouses, and evening gowns.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "electronics_repair",
      Description: "Repair shops and service centers which provides repair of computers, phones, appliance etc.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "embroiderer",
      Description: "Needlework or textile artist",
      Category: ""
    },
    {
      Key: "craft",
      Value: "electrician",
      Description: "A person or company that works with electricity or electrical systems.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "engraver",
      Description: "A workplace or office of an engraver.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "floorer",
      Description: "A workplace or office of a floorer.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "gardener",
      Description: "A workplace or office of a garden designer or a landscape gardener.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "glaziery",
      Description: "A place where residential, commercial, and artistic glass is selected, cut, installed, replaced, and removed",
      Category: ""
    },
    {
      Key: "craft",
      Value: "goldsmith",
      Description: "The workplace of a person who forges things out of gold, especially jewelry.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "grinding_mill",
      Description: "A device that breaks solid materials into smaller pieces by grinding, crushing, or cutting. The aftermath is powdered product, not liquid extract like oil mill.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "handicraft",
      Description: "A place where useful and decorative devices are made completely by hand or using only simple tools",
      Category: ""
    },
    {
      Key: "craft",
      Value: "hvac",
      Description: "A workplace or office of an HVAC system designer (Heating, Ventilating, and Air Conditioning)",
      Category: ""
    },
    {
      Key: "craft",
      Value: "insulation",
      Description: "A workplace or office of a person who does thermal insulation in buildings.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "interior_work",
      Description: "Workplace or office of a person who build non-load-bearing interior walls, especially drywall.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "jeweller",
      Description: "A place where necklaces, rings, brooches, earrings and bracelets and other personal adornments are created or repaired.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "joiner",
      Description: "An artisan who builds things by joining pieces of wood, particularly furniture or ornamental work.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "key_cutter",
      Description: "A place where keys can be duplicated from originals.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "locksmith",
      Description: "A place where locks and keys are created or repaired.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "metal_construction",
      Description: "Workplace or office of a person who work with metal. This applies to: planning, construction, trade, repair.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "mint",
      Description: "A place where coins and medals are hand crafted.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "musical_instrument",
      Description: "A craftsman creating musical instruments",
      Category: ""
    },
    {
      Key: "craft",
      Value: "oil_mill",
      Description: "A mill designed to crush or bruise oil-bearing seeds, such as linseed or peanuts, or other oil-rich vegetable material.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "optician",
      Description: "A place where lenses for the correction of a person's vision are designed, fitted and dispensed.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "organ_builder",
      Description: "Organ building is the profession of designing, building, restoring and maintaining pipe organs.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "painter",
      Description: "A workplace or office of a house painter which is a tradesman responsible for the painting and decorating of buildings.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "parquet_layer",
      Description: "A workplace or office of a parquet layer.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "paver",
      Description: "The workshop or office of a paver",
      Category: ""
    },
    {
      Key: "craft",
      Value: "photographer",
      Description: "A workplace or office of a person who takes photographs using a camera.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "photographic_laboratory",
      Description: "A place where photos taken on a film or digital images are transformed into a more permanent form, often on paper or plastic foil.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "piano_tuner",
      Description: "A piano tuner or technician. A professional that tunes, regulates and makes the maintenance of pianos. Most of them repair simple problems and some restore a whole piano.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "plasterer",
      Description: "A workplace or office of a tradesman who works with plaster, such as forming a layer of plaster on an interior wall or plaster decorative moldings on ceilings or walls.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "plumber",
      Description: "A workplace or office of a skilled tradesperson who specializes in (drinking) water supply, sewage and drainage systems",
      Category: ""
    },
    {
      Key: "craft",
      Value: "pottery",
      Description: "A place where earthenware, stoneware and porcelain and other ceramic ware is made by potters.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "printer",
      Description: "A small printing business which produces published works such as newspapers, books, magazines, etc.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "printmaker",
      Description: "A producer of fine art prints.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "rigger",
      Description: "The workplace of a person who makes masts, yards, sails, and cordage for sailboats and sailing ships (or possibly a person who works on ropes, booms, lifts, hoists and the like for a stage production)",
      Category: ""
    },
    {
      Key: "craft",
      Value: "roofer",
      Description: "A workplace or office of a tradesman who is specialized in roof covering and sealing.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "saddler",
      Description: "A place where saddles or accessories for cars and boats are produced or repaired.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "sailmaker",
      Description: "A workshop of a sailmaker who cleans, repairs and makes sails.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "sawmill",
      Description: "A sawmill is a facility where logs are cut into timber",
      Category: ""
    },
    {
      Key: "craft",
      Value: "scaffolder",
      Description: "A workplace or office of a tradesman who builds temporary structure used to support people and material in the construction or repair of buildings and other large structures.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "sculptor",
      Description: "The workplace of a sculptor.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "shoemaker",
      Description: "A place where shoes, boots, sandals, clogs and moccasins are created, repaired or altered to fit personal needs.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "signmaker",
      Description: "Signmaker",
      Category: ""
    },
    {
      Key: "craft",
      Value: "stand_builder",
      Description: "A workplace of a company that builds stands/booths for fairs.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "stonemason",
      Description: "A place where rough pieces of rock are shaped into accurate geometrical shapes.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "stove_fitter",
      Description: "A workplace/office of a person / company who designs and builds stoves / tiled stoves.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "sun_protection",
      Description: "A place where sun protection is made, repaired, or delivered for assembly, especially awnings and shutters.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "tailor",
      Description: "A place where clothing is made, repaired, or altered professionally, especially suits and men's clothing.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "tiler",
      Description: "A workplace or office of a person who lays tiles on floors, swimming pools and such.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "tinsmith",
      Description: "A person who makes and repairs things made of light-coloured metal, particularly tinware.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "toolmaker",
      Description: "A workplace of a company that builds complex tools, machine tools, moulds, gauges,... .",
      Category: ""
    },
    {
      Key: "craft",
      Value: "turner",
      Description: "A workplace or office of a turner.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "upholsterer",
      Description: "A place where furniture, especially seats are provided with padding, springs, webbing, and fabric or leather covers.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "watchmaker",
      Description: "A watchmaker is an artisan who makes and repairs watches. Today due to industrial production they mostly repair watches.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "water_well_drilling",
      Description: "A company that drills water wells.",
      Category: ""
    },
    {
      Key: "craft",
      Value: "window_construction",
      Description: "A workplace of someone constructing windows",
      Category: ""
    },
    {
      Key: "craft",
      Value: "winery",
      Description: "A place where wine is produced",
      Category: ""
    },
    {
      Key: "emergency",
      Value: "ambulance_station",
      Description: "A ambulance station is a structure or other area set aside for storage of ambulance vehicles, medical equipment, personal protective equipment, and other medical supplies.",
      Category: "Medical Rescue"
    },
    {
      Key: "emergency",
      Value: "defibrillator",
      Description: "Defibrillator, an external and portable electronic device that diagnoses and can correct arrhythmia of the heart automatically (aka Automated External Defibrillator, AED)",
      Category: "Medical Rescue"
    },
    {
      Key: "emergency",
      Value: "landing_site",
      Description: "Preselected flat area for a helicopter to land in an emergency situation",
      Category: "Medical Rescue"
    },
    {
      Key: "emergency",
      Value: "emergency_ward_entrance",
      Description: "The entrance to an emergency ward.",
      Category: "Medical Rescue"
    },
    {
      Key: "emergency",
      Value: "dry_riser_inlet",
      Description: "a point to which firefighters can connect a pressurized water source",
      Category: "Firefighters"
    },
    {
      Key: "emergency",
      Value: "fire_alarm_box",
      Description: "A device used for notifying a fire department of a fire.",
      Category: "Firefighters"
    },
    {
      Key: "emergency",
      Value: "fire_extinguisher",
      Description: "A fire extinguisher is an active fire protection device used to extinguish or control small fires, often in emergency situations.",
      Category: "Firefighters"
    },
    {
      Key: "emergency",
      Value: "fire_hose",
      Description: "A high-pressure hose used to carry water or other fire retardant (such as foam) to a fire to extinguish it.",
      Category: "Firefighters"
    },
    {
      Key: "emergency",
      Value: "fire_hydrant",
      Description: "An active fire protection measure, and a source of water provided in most urban, suburban, and rural areas with municipal water service to enable fire fighters to tap into the municipal water supply to assist in extinguishing a fire",
      Category: "Firefighters"
    },
    {
      Key: "emergency",
      Value: "water_tank",
      Description: "A large water basin or tank for a fire department to take water",
      Category: "Firefighters"
    },
    {
      Key: "emergency",
      Value: "suction_point",
      Description: "A preferred point to pump water off a river or other waters for a fire department.",
      Category: "Firefighters"
    },
    {
      Key: "emergency",
      Value: "lifeguard",
      Description: "A place where a lifeguard is on duty",
      Category: "Lifeguards"
    },
    {
      Key: "emergency",
      Value: "life_ring",
      Description: "A floating ring to throw out to someone who is struggling in water.",
      Category: "Lifeguards"
    },
    {
      Key: "lifeguard",
      Value: "tower",
      Description: "A tower used by lifeguard to watch and supervise swimmers in order to prevent drownings and other dangers",
      Category: "Lifeguards"
    },
    {
      Key: "emergency",
      Value: "assembly_point",
      Description: "A designated (safe) place where people can gather or must report to during an emergency or a fire drill",
      Category: "Assembly point"
    },
    {
      Key: "emergency",
      Value: "phone",
      Description: "Emergency telephone",
      Category: "Other structure"
    },
    {
      Key: "emergency",
      Value: "siren",
      Description: "A loud noise maker, such as an air raid siren or a tornado siren.",
      Category: "Other structure"
    },
    {
      Key: "emergency",
      Value: "drinking_water",
      Description: "A facility that provides drinking water in emergency situations",
      Category: "Other structure"
    },
    {
      Key: "geological",
      Value: "moraine",
      Description: "Any ice formed accumulation of unconsolidated glacial debris",
      Category: "Geological"
    },
    {
      Key: "geological",
      Value: "outcrop",
      Description: "A place where the bedrock or superficial deposits previously covered under the soil have become locally exposed",
      Category: "Geological"
    },
    {
      Key: "geological",
      Value: "palaeontological_site",
      Description: "A palaeontological site.",
      Category: "Geological"
    },
    {
      Key: "geological",
      Value: "volcanic_caldera_rim",
      Description: "Volcanic caldera rim",
      Category: "Geological"
    },
    {
      Key: "geological",
      Value: "volcanic_vent",
      Description: "Volcanic vent",
      Category: "Geological"
    },
    {
      Key: "geological",
      Value: "volcanic_lava_field",
      Description: "Volcanic lava field",
      Category: "Geological"
    },
    {
      Key: "geological",
      Value: "columnar_jointing",
      Description: "",
      Category: "Geological"
    },
    {
      Key: "healthcare=alternative",
      Value: "Someone practicing  alternative or complementary medicine but is not a  medical practitioner or a place where alternative or complementary medicine is practiced that does not fit into the other categories (except healthcare=yes)",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=audiologist",
      Value: "Audiologist; if linked with a shop please use shop=hearing_aids instead",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=birthing_centre",
      Value: "A non-clinical  birthing centre operated by midwives.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=blood_bank",
      Value: "Blood bank",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=blood_donation",
      Value: "A facility where you can donate blood, plasma and/or platelets, and possibly have stem cell samples taken.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=counselling",
      Value: "Healthcare counselling, e.g. an addiction centre, a nutritionist, or a sex therapist. Also see healthcare=nutrition_counselling",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=dialysis",
      Value: "A clinic for day patients to get a hemodialysis  Dialysis",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=hospice",
      Value: "A Hospice which provides palliative care to terminal ill people and support to their relatives.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=laboratory",
      Value: "Medical laboratory also called (analytical, diagnostic) is a place that analyzes body fluids such as blood, urine, faeces etc .",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=midwife",
      Value: "A  Midwife, a health professional who cares for mothers and newborns around childbirth.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=nurse",
      Value: "Nursing. A facility where some nurses may receive their patients.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=occupational_therapist",
      Value: "Someone who practices  occupational therapy but is not a  medical practitioner.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=optometrist",
      Value: "Optometrist; If linked with a shop please use shop=optician instead.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=physiotherapist",
      Value: "Someone who practices  physical therapy (or  kinesiotherapy in French-speaking countries) but is not a  medical practitioner.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=podiatrist",
      Value: "Someone who practices  podiatry but is not a Physician on Wikipedia.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=psychotherapist",
      Value: "Someone who practices  psychotherapy but is not a Physician on Wikipedia.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=rehabilitation",
      Value: "Medical rehabilitation facility; should not be used for a wellness clinic or hotel.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=sample_collection",
      Value: "Site or dedicated healthcare facility where samples of blood/urine/etc are obtained or collected for purpose of analyzing them for healthcare diagnostics.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=speech_therapist",
      Value: "Someone who practices  speech and language therapy.",
      Description: "",
      Category: ""
    },
    {
      Key: "healthcare=vaccination_centre",
      Value: "a healthcare facility specifically dedicated to administering vaccinations to individuals, to provide immunisation against infectious diseases.",
      Description: "",
      Category: ""
    },
    {
      Key: "highway",
      Value: "motorway",
      Description: "A restricted access major divided highway, normally with 2 or more running lanes plus emergency hard shoulder. Equivalent to the Freeway, Autobahn, etc..",
      Category: ""
    },
    {
      Key: "highway",
      Value: "trunk",
      Description: "The most important roads in a country's system that aren't motorways. (Need not necessarily be a divided highway.)",
      Category: ""
    },
    {
      Key: "highway",
      Value: "primary",
      Description: "The next most important roads in a country's system. (Often link larger towns.)",
      Category: ""
    },
    {
      Key: "highway",
      Value: "secondary",
      Description: "The next most important roads in a country's system. (Often link towns.)",
      Category: ""
    },
    {
      Key: "highway",
      Value: "tertiary",
      Description: "The next most important roads in a country's system. (Often link smaller towns and villages)",
      Category: ""
    },
    {
      Key: "highway",
      Value: "unclassified",
      Description: "The least important through roads in a country's system – i.e. minor roads of a lower classification than tertiary, but which serve a purpose other than access to properties. (Often link villages and hamlets.)The word 'unclassified' is a historical artefact of the UK road system and does not mean that the classification is unknown; you can use highway=road for that.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "residential",
      Description: "Roads which serve as an access to housing, without function of connecting settlements. Often lined with housing.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "motorway_link",
      Description: "The link roads (sliproads/ramps) leading to/from a motorway from/to a motorway or lower class highway. Normally with the same motorway restrictions.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "trunk_link",
      Description: "The link roads (sliproads/ramps) leading to/from a trunk road from/to a trunk road or lower class highway.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "primary_link",
      Description: "The link roads (sliproads/ramps) leading to/from a primary road from/to a primary road or lower class highway.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "secondary_link",
      Description: "The link roads (sliproads/ramps) leading to/from a secondary road from/to a secondary road or lower class highway.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "tertiary_link",
      Description: "The link roads (sliproads/ramps) leading to/from a tertiary road from/to a tertiary road or lower class highway.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "living_street",
      Description: "For living streets, which are residential streets where pedestrians have legal priority over cars, speeds are kept very low and where children are allowed to play on the street.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "service",
      Description: "For access roads to, or within an industrial estate, camp site, business park, car park, alleys, etc. Can be used in conjunction with service=* to indicate the type of usage and with access=* to indicate who can use it and in what circumstances.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "pedestrian",
      Description: "For roads used mainly/exclusively for pedestrians in shopping and some residential areas which may allow access by motorised vehicles only for very limited periods of the day. To create a 'square' or 'plaza' create a closed way and tag as pedestrian and also with area=yes.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "track",
      Description: "Roads for mostly agricultural or forestry uses. To describe the quality of a track, see tracktype=*. Note: Although tracks are often rough with unpaved surfaces, this tag is not describing the quality of a road but its use. Consequently, if you want to tag a general use road, use one of the general highway values instead of track.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "bus_guideway",
      Description: "A busway where the vehicle guided by the way (though not a railway) and is not suitable for other traffic. Please note: this is not a normal bus lane, use access=no, psv=yes instead!",
      Category: ""
    },
    {
      Key: "highway",
      Value: "escape",
      Description: "For runaway truck ramps, runaway truck lanes, emergency escape ramps, or truck arrester beds. It enables vehicles with braking failure to safely stop.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "raceway",
      Description: "A course or track for (motor) racing",
      Category: ""
    },
    {
      Key: "highway",
      Value: "road",
      Description: "A road/way/street/motorway/etc. of unknown type. It can stand for anything ranging from a footpath to a motorway. This tag should only be used temporarily until the road/way/etc. has been properly surveyed. If you do know the road type, do not use this value, instead use one of the more specific highway=* values.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "busway",
      Description: "A dedicated roadway for bus rapid transit systems",
      Category: ""
    },
    {
      Key: "highway",
      Value: "footway",
      Description: "For designated footpaths; i.e., mainly/exclusively for pedestrians. This includes walking tracks and gravel paths. If bicycles are allowed as well, you can indicate this by adding a bicycle=yes tag. Should not be used for paths where the primary or intended usage is unknown. Use highway=pedestrian for pedestrianised roads in shopping or residential areas and highway=track if it is usable by agricultural or similar vehicles.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "bridleway",
      Description: "For horse riders. Pedestrians are usually also permitted, cyclists may be permitted depending on local rules/laws. Motor vehicles are forbidden.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "steps",
      Description: "For flights of steps (stairs) on footways. Use with step_count=* to indicate the number of steps",
      Category: ""
    },
    {
      Key: "highway",
      Value: "corridor",
      Description: "For a hallway inside of a building.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "path",
      Description: "A non-specific path. Use highway=footway for paths mainly for walkers, highway=cycleway for one also usable by cyclists, highway=bridleway for ones available to horse riders as well as walkers and highway=track for ones which is passable by agriculture or similar vehicles.",
      Category: ""
    },
    {
      Key: "footway",
      Value: "sidewalk",
      Description: "Sidewalk that runs typically along residential road. Use in combination with highway=footway or highway=path",
      Category: ""
    },
    {
      Key: "footway",
      Value: "crossing",
      Description: "Crosswalk that connects two sidewalks on the opposite side of the road. Often recognized by painted markings on the road, road sign or traffic lights. Use in combination with highway=footway or highway=path. Useful information is presence of tactile_paving=*, wheelchair=* suitability and kerb=* represented as a node on the crosswalk way.",
      Category: ""
    },
    {
      Key: "sidewalk",
      Value: "both | left | right | no",
      Description: "Specifies that the highways has sidewalks on both sides, on one side or no sidewalk at all",
      Category: ""
    },
    {
      Key: "highway",
      Value: "cycleway",
      Description: "For designated cycleways. Add foot=*, though it may be avoided if default-access-restrictions do apply.",
      Category: ""
    },
    {
      Key: "cycleway",
      Value: "lane",
      Description: "A lane is a route that lies within the roadway",
      Category: ""
    },
    {
      Key: "cycleway",
      Value: "opposite",
      Description: "Used on ways with oneway=yes where it is legally permitted to cycle in both directions. Used together with oneway:bicycle=no.",
      Category: ""
    },
    {
      Key: "cycleway",
      Value: "opposite_lane",
      Description: "Used on ways with oneway=yes that have a cycling lane going the opposite direction of normal traffic flow (a \"contraflow\" lane). Used together with oneway:bicycle=no.",
      Category: ""
    },
    {
      Key: "cycleway",
      Value: "track",
      Description: "A track provides a route that is separated from traffic. In the United States, this term is often used to refer to bike lanes that are separated from lanes for cars by pavement buffers, bollards, parking lanes, and curbs. Note that a cycle track may alternatively be drawn as a separate way next to the road which is tagged as highway=cycleway.",
      Category: ""
    },
    {
      Key: "cycleway",
      Value: "opposite_track",
      Description: "Used on ways with oneway=yes that have a cycling track going the opposite direction of normal traffic flow. Used together with oneway:bicycle=no.",
      Category: ""
    },
    {
      Key: "cycleway",
      Value: "share_busway",
      Description: "There is a bus lane that cyclists are permitted to use.",
      Category: ""
    },
    {
      Key: "cycleway",
      Value: "opposite_share_busway",
      Description: "Used on ways with oneway=yes that have a bus lane that cyclists are also permitted to use, and which go in the opposite direction to normal traffic flow (a \"contraflow\" bus lane). Used together with oneway:bicycle=no.",
      Category: ""
    },
    {
      Key: "cycleway",
      Value: "shared_lane",
      Description: "Cyclists share a lane with motor vehicles, but there are markings indicating that they should share the lane with motorists. In some places these markings are known as \"sharrows\" ('sharing arrows') and this is the tag to use for those.",
      Category: ""
    },
    {
      Key: "busway",
      Value: "lane",
      Description: "Bus lane on both sides of the road. (See also: Parallel scheme for bus/psv lane tagging lanes:bus=* / lanes:psv=*)",
      Category: ""
    },
    {
      Key: "highway",
      Value: "proposed",
      Description: "For planned roads, use with proposed=* and a value of the proposed highway value.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "construction",
      Description: "For roads under construction. Use construction=* to hold the value for the completed road.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "bus_stop",
      Description: "A small bus stop. Optionally one may also use public_transport=stop_position for the position where the vehicle stops and public_transport=platform for the place where passengers wait.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "crossing",
      Description: "A.k.a. crosswalk. Pedestrians can cross a street here; e.g., zebra crossing",
      Category: ""
    },
    {
      Key: "highway",
      Value: "elevator",
      Description: "An elevator or lift, used to travel vertically, providing passenger and freight access between pathways at different floor levels.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "emergency_bay",
      Description: "An area beside a highway where you can safely stop your car in case of breakdown or emergency.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "emergency_access_point",
      Description: "Sign number which can be used to define your current position in case of an emergency. Use with ref=NUMBER_ON_THE_SIGN",
      Category: ""
    },
    {
      Key: "highway",
      Value: "give_way",
      Description: "A \"give way,\" or \"Yield\" sign",
      Category: ""
    },
    {
      Key: "emergency",
      Value: "phone",
      Description: "A calling device can be used to tell on your current position in case of an emergency. Use with ref=NUMBER_ON_THE_SIGN",
      Category: ""
    },
    {
      Key: "highway",
      Value: "milestone",
      Description: "Highway location marker",
      Category: ""
    },
    {
      Key: "highway",
      Value: "mini_roundabout",
      Description: "Similar to roundabouts, but at the center there is either a painted circle or a fully traversable island. In case of an untraversable center island, junction=roundabout should be used.Rendered as anti-clockwise by default direction=anticlockwise. To render clockwise add the tag direction=clockwise.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "motorway_junction",
      Description: "Indicates a junction (UK) or exit (US). ref=* should be set to the exit number or junction identifier. (Some roads – e.g., the A14 – also carry junction numbers, so the tag may be encountered elsewhere despite its name)",
      Category: ""
    },
    {
      Key: "highway",
      Value: "passing_place",
      Description: "The location of a passing space",
      Category: ""
    },
    {
      Key: "highway",
      Value: "platform",
      Description: "A platform at a bus stop or station.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "rest_area",
      Description: "Place where drivers can leave the road to rest, but not refuel.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "services",
      Description: "A service station to get food and eat something, often found at motorways",
      Category: ""
    },
    {
      Key: "highway",
      Value: "speed_camera",
      Description: "A fixed road-side or overhead speed camera.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "stop",
      Description: "A stop sign",
      Category: ""
    },
    {
      Key: "highway",
      Value: "street_lamp",
      Description: "A street light, lamppost, street lamp, light standard, or lamp standard is a raised source of light on the edge of a road, which is turned on or lit at a certain time every night",
      Category: ""
    },
    {
      Key: "highway",
      Value: "toll_gantry",
      Description: "A toll gantry is a gantry suspended over a way, usually a motorway, as part of a system of electronic toll collection. For a toll booth with any kind of barrier or booth see: barrier=toll_booth",
      Category: ""
    },
    {
      Key: "highway",
      Value: "traffic_mirror",
      Description: "Mirror that reflects the traffic on one road when direct view is blocked.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "traffic_signals",
      Description: "Lights that control the traffic",
      Category: ""
    },
    {
      Key: "highway",
      Value: "trailhead",
      Description: "Designated place to start on a trail or route",
      Category: ""
    },
    {
      Key: "highway",
      Value: "turning_circle",
      Description: "A turning circle is a rounded, widened area usually, but not necessarily, at the end of a road to facilitate easier turning of a vehicle. Also known as a cul de sac.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "turning_loop",
      Description: "A widened area of a highway with a non-traversable island for turning around, often circular and at the end of a road.",
      Category: ""
    },
    {
      Key: "highway",
      Value: "User Defined",
      Description: "All commonly used values according to Taginfo",
      Category: ""
    },
    {
      Key: "historic",
      Value: "aircraft",
      Description: "A decommissioned aircraft which generally remains in one place.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "aqueduct",
      Description: "A historic structure to convey water",
      Category: ""
    },
    {
      Key: "historic",
      Value: "archaeological_site",
      Description: "A place in which evidence of past activity is preserved.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "battlefield",
      Description: "The site of a battle or military skirmish in the past.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "bomb_crater",
      Description: "A bomb crater",
      Category: ""
    },
    {
      Key: "historic",
      Value: "boundary_stone",
      Description: "A historic physical marker that identifies a boundary",
      Category: ""
    },
    {
      Key: "historic",
      Value: "building",
      Description: "Unspecified historic building.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "cannon",
      Description: "A historic/retired cannon. Usually found on forts or battlefields.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "castle",
      Description: "Used for various kinds of castles, palaces, fortresses, manors, stately homes, kremlins, shiros and other.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "castle_wall",
      Description: "A fortification surrounding the bailey of a castle",
      Category: ""
    },
    {
      Key: "historic",
      Value: "charcoal_pile",
      Description: "Historic site of a charcoal pile. Often still in good condition in hilly forest areas.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "church",
      Description: "A church with a historical value.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "city_gate",
      Description: "A city gate within a city wall",
      Category: ""
    },
    {
      Key: "historic",
      Value: "citywalls",
      Description: "A citywall is a fortification used to defend a city.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "creamery",
      Description: "A creamery is an industrial building where butter and sometimes cheese or ice-cream were made from milk. For rural communities, it also served as a social gathering point.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "farm",
      Description: "A historical farm, kept in its original state.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "fort",
      Description: "A military fort, a stand-alone defensive structure which differs from a castle in that there is no permanent residence",
      Category: ""
    },
    {
      Key: "historic",
      Value: "gallows",
      Description: "remains of a gallows",
      Category: ""
    },
    {
      Key: "historic",
      Value: "highwater_mark",
      Description: "A marker for indicating past flood.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "locomotive",
      Description: "A decommissioned locomotive which generally remains in one place",
      Category: ""
    },
    {
      Key: "historic",
      Value: "manor",
      Description: "Historic manors/mansions having different use today",
      Category: ""
    },
    {
      Key: "historic",
      Value: "memorial",
      Description: "Small memorials, usually remembering special persons, people who lost their lives in the wars, past events or missing places.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "milestone",
      Description: "A historic marker that shows the distance to important destinations",
      Category: ""
    },
    {
      Key: "historic",
      Value: "monastery",
      Description: "Building/place that is a historically significant monastery.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "monument",
      Description: "A memorial object, which is especially large, built to remember, show respect to a person or group of people or to commemorate an event.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "optical_telegraph",
      Description: "Semaphore system",
      Category: ""
    },
    {
      Key: "historic",
      Value: "pa",
      Description: "A New Zealand Maori Pā",
      Category: ""
    },
    {
      Key: "historic",
      Value: "pillory",
      Description: "A pillory.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "railway_car",
      Description: "A decommissioned railway car which generally remains in one place",
      Category: ""
    },
    {
      Key: "historic",
      Value: "ruins",
      Description: "Remains of structures that were once complete, but have fallen into partial or complete disrepair.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "rune_stone",
      Description: "Stones, boulders or bedrock with historical runic inscriptions.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "ship",
      Description: "A decommissioned ship/submarine which generally remains in one place",
      Category: ""
    },
    {
      Key: "historic",
      Value: "tank",
      Description: "A decommissioned tank which generally remains in one place",
      Category: ""
    },
    {
      Key: "historic",
      Value: "tomb",
      Description: "A structure where somebody has been buried.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "tower",
      Description: "This property distinguishes a tower as historic",
      Category: ""
    },
    {
      Key: "historic",
      Value: "vehicle",
      Description: "A decommissioned vehicle which generally remains in one place",
      Category: ""
    },
    {
      Key: "historic",
      Value: "wayside_cross",
      Description: "A historical cross, symbol of christian faith.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "wayside_shrine",
      Description: "A shrine often showing a religious depiction. Tag is used also for modern shrines.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "wreck",
      Description: "A nautical craft that has been sunk or destroyed.",
      Category: ""
    },
    {
      Key: "historic",
      Value: "yes",
      Description: "Used to add the historic significance of the objects described by other tags.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "commercial",
      Description: "Predominantly commercial businesses and their offices. Commercial businesses which sell goods should be categorised as landuse=retail. Commercial businesses can sell services on site and may include private Doctor's Surgeries, and those non-government services for mental and physical health, such as a Counsellor's or Physiotherapist's practice or Veterinary. Government services and businesses should not use this tag. Commercial businesses can also include office buildings and business parks which have limited interface with the public and sell their services either on site, or externally. Commercial businesses have low amounts of public foot traffic.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "construction",
      Description: "A site which is under active development and construction of a building or structure, including any purposeful alteration to the land or vegetation upon it. Abandoned construction projects and sites should not use this tag.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "education",
      Description: "An area predominately used for educational purposes/facilities.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "industrial",
      Description: "Predominantly industrial landuses such as workshops, factories, or warehouses.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "residential",
      Description: "Land where people reside; predominantly residential detached (single houses, grouped dwellings), or attached (apartments, flats, units) dwellings. For \"Mixed-Use\" areas where more than half of the land is residential, tag as residential.\nSee also: Land use and areas of natural land § Open questions",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "retail",
      Description: "Predominantly retail businesses such as shops. Retail businesses sell physical goods such as food (prepared or grocery), clothing, medicine, stationary, appliances, tools, or other similar physical items. Retail businesses have high amounts of public foot traffic. Retail businesses do not exclusively provide or sell their services. For businesses which sell services see landuse=commercial.Generally a member of the public could freely walk into and access a retail business. Retail is a subset of commercial, but should be used and treated as mutually exclusive in OpenStreetMap.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "allotments",
      Description: "A piece of land given over to local residents for growing vegetables and flowers.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "farmland",
      Description: "An area of farmland used for tillage (cereals, vegetables, oil plants, flowers).",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "farmyard",
      Description: "An area of land with farm buildings like farmhouse, dwellings, farmsteads, sheds, stables, barns, equipment sheds, feed bunkers, etc. plus the open space in between them and the shrubbery/trees around them.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "flowerbed",
      Description: "An area designated for flowers",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "forest",
      Description: "Managed forest or woodland plantation (Other languages). Some use this to map an area of trees rather than the use of the land. See Forest.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "meadow",
      Description: "A meadow or pasture: land primarily vegetated by grass and non-woody plants, mainly used for hay or grazing",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "orchard",
      Description: "intentional planting of trees or shrubs maintained for food production",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "vineyard",
      Description: "A piece of land where grapes are grown.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "aquaculture",
      Description: "Aquaculture is the farming of freshwater and saltwater organisms such as finfish, mollusks, crustaceans and aquatic plants.Warning: currently, there is no convention on the exact meaning of this tag. Therefore, it makes sense to treat it like \"boundary of aquaculture\" (without implication of water body), which means, water body should be tagged by its own, using natural=water etc.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "basin",
      Description: "An area artificially graded to hold water.\nTogether with basin=* for stormwater/rainwater infiltration/detention/retention basins.\nOther languages.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "reservoir",
      Description: "A Reservoir on Wikipedia. Deprecated variant of natural=water + water=reservoir. See Proposed features/Reservoir for details.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "salt_pond",
      Description: "A place where salt (saline) water is evaporated to extract its salt.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "brownfield",
      Description: "Describes land scheduled for new development where old buildings have been demolished and cleared",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "cemetery",
      Description: "Place for burials. You can add religion=* (values listed in the place of worship page). Smaller places (e.g. with a church nearby) may use amenity=grave_yard instead.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "conservation",
      Description: "Protected areas (deprecated) Alternate tagging of same thing: boundary=protected_area, protected_area=*",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "depot",
      Description: "An area used as a depot for e.g. vehicles (trains, buses or trams). Consider using rather standard landuse tags like landuse=railway, landuse=commercial, landuse=industrial, with subtag like industrial=depot.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "garages",
      Description: "One level buildings with boxes commonly for cars, usually made of brick and metal. Usually this area belong to garage cooperative with own name, chairman, budget, rules, security, etc.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "grass",
      Description: "An area of mown and managed grass not otherwise covered by a more specific tag. Some view this as not a landuse, see the main page landuse=grass for discussion.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "greenfield",
      Description: "Describes land scheduled for new development where there have been no buildings before. A greenfield is scheduled to turn into a construction site",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "greenhouse_horticulture",
      Description: "Area used for growing plants in greenhouses",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "landfill",
      Description: "Place where waste is dumped.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "military",
      Description: "For land areas owned/used by the military for whatever purpose",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "plant_nursery",
      Description: "intentional planting of plants maintaining for the production of new plants",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "port",
      Description: "coastal industrial area where commercial traffic is handled. Consider using landuse=industrial + industrial=port for this type of industrial area.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "quarry",
      Description: "Surface mineral extraction",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "railway",
      Description: "Area for railway use, generally off-limits to the general public",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "recreation_ground",
      Description: "An open green space for general recreation, which may include pitches, nets and so on, usually municipal but possibly also private to colleges or companies",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "religious",
      Description: "An area used for religious purposes",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "village_green",
      Description: "A village green is a distinctive area of grassy public land in a village centre. Not a generic tag for urban greenery. It is a typical English term – defined separately from 'common land' under the Commons Registration Act 1965 and the Commons Act 2006.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "winter_sports",
      Description: "An area dedicated to winter sports (e.g. skiing)",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "user defined",
      Description: "All commonly used values according to Taginfo",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "adult_gaming_centre",
      Description: "A venue with gambling machines.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "amusement_arcade",
      Description: "A venue with pay-to-play games.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "beach_resort",
      Description: "A managed beach, including within the boundary any associated facilities. Entry may also require payment of a fee.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "bandstand",
      Description: "A bandstand is an open structure where musical bands can perform concerts",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "bird_hide",
      Description: "A place that is used to observe wildlife, especially birds.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "common",
      Description: "Identify land over which the public has general rights of use for certain leisure activities.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "dance",
      Description: "A dance venue or dance hall.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "disc_golf_course",
      Description: "A place to play disc golf",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "dog_park",
      Description: "A designated area, with or without a fenced boundary, where dog-owners are permitted to exercise their pets unrestrained.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "escape_game",
      Description: "A physical adventure game in which players solve a series of puzzles using clues, hints and strategy to complete the objectives at hand.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "firepit",
      Description: "A fire ring or fire pit, often at a campsite or picnic site",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "fishing",
      Description: "A public or private place for fishing",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "fitness_centre",
      Description: "Fitness centre, health club or gym with exercise machines, fitness classes or both, for exercise.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "fitness_station",
      Description: "An outdoor facility where people can practise typical fitness exercises",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "garden",
      Description: "A place where flowers and other plants are grown in a decorative and structured manner or for scientific purposes.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "hackerspace",
      Description: "A place where people with common interests (science, technology, ...) meet.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "horse_riding",
      Description: "A facility where people practise horse riding, usually in their spare time, e.g. a riding centre. For a riding arena use tag:leisure=pitch + tag:sport=equestrian.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "ice_rink",
      Description: "A place where you can skate and play bandy or ice hockey.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "marina",
      Description: "A facility for mooring leisure yachts and motor boats.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "miniature_golf",
      Description: "A place or area where you can play miniature golf.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "nature_reserve",
      Description: "A protected area of importance for wildlife, flora, fauna or features of geological or other special interest.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "park",
      Description: "A park, usually urban (municipal).",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "picnic_table",
      Description: "A table with benches for food and rest",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "pitch",
      Description: "An area designed for practising a particular sport, normally designated with appropriate markings.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "playground",
      Description: "A playground: an area designed for children to play.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "slipway",
      Description: "A slipway: a ramp for launching a boat into water",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "sports_centre",
      Description: "A sports centre is a distinct facility where sports take place within an enclosed area.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "stadium",
      Description: "A major sports facility with substantial tiered seating.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "summer_camp",
      Description: "A place for supervised camps for children or teenagers conducted during the summer months",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "swimming_area",
      Description: "An official open-space natural place where you can swim",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "swimming_pool",
      Description: "A swimming pool (water area only)",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "track",
      Description: "A track for running, cycling and other non-motorised racing such as horses, greyhounds.",
      Category: ""
    },
    {
      Key: "leisure",
      Value: "water_park",
      Description: "An amusement park with features like water slides, recreational pools (e.g. wave pools) or lazy rivers.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "adit",
      Description: "A type of entrance to an underground mine which is horizontal or nearly horizontal.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "beacon",
      Description: "A structure for signalling on land and sea",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "breakwater",
      Description: "A man-made structure designed to protect a shore or harbour from the sea and waves.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "bridge",
      Description: "The outline of a bridge, grouping together all features for that bridge.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "bunker_silo",
      Description: "An open-sided structure without a roof that can be used with vehicles to fill and empty them",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "carpet_hanger",
      Description: "A construction to hang carpets for cleaning with the help of carpet beaters.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "chimney",
      Description: "A tall distinctive vertical conduit for venting hot gases or smoke, normally found near power stations or large factories",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "column",
      Description: "A column used to support a structure or for decoration.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "communications_tower",
      Description: "A huge tower for transmitting radio applications",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "crane",
      Description: "A stationary, permanent crane.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "cross",
      Description: "Cross, especially one with little historical value",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "cutline",
      Description: "A straight line cut in a forest.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "clearcut",
      Description: "An area where all trees have been uniformly cut down.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "dovecote",
      Description: "A place where doves are farmed or stored.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "dyke",
      Description: "An embankment built to restrict the flow of water or other liquids",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "embankment",
      Description: "An artificial steep slope",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "flagpole",
      Description: "A long pole built to hold a flag",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "gasometer",
      Description: "A large container in which natural gas or town gas is stored near atmospheric pressure at ambient temperatures",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "goods_conveyor",
      Description: "A conveyor system for transporting materials",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "groyne",
      Description: "A rigid structure built from a shoreline or riverbank that interrupts water flow and limits the movement of sediment",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "guard_stone",
      Description: "A guard stone: a stone built onto or into the corner of a building or wall to prevent carriages from damaging the structure, often found on either side of an entrance to a laneway, or alongside a wall to protect it.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "kiln",
      Description: "A thermally insulated chamber used for processes such as burning, hardening, drying, or smelting",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "lighthouse",
      Description: "Tower that emits light to serve as a navigational aid at sea or on inland waterway",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "mast",
      Description: "A mast is a vertical structure built to hold, for example, antennas.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "mineshaft",
      Description: "A mineshaft: vertical tunnel into a mine where minerals are extracted.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "monitoring_station",
      Description: "A station that monitors something.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "obelisk",
      Description: "Tall, narrow, four-sided, tapered monument which usually ends in a pyramid-like shape at the top.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "observatory",
      Description: "Observatory: a location used for observing terrestrial or celestial events",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "offshore_platform",
      Description: "Offshore platform, oil platform or offshore drilling rig",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "petroleum_well",
      Description: "A hole bored in the earth, designed to bring petroleum oil or gas to the surface",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "pier",
      Description: "A pier is a raised walkway over water, supported by widely spread piles or pillars.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "pipeline",
      Description: "A major pipeline carrying gas, water, oil, etc.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "pump",
      Description: "A device in charge of moving or raising the level of liquids.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "pumping_station",
      Description: "Pumping station: a facility including pumps and equipment for pumping fluids from one place to another",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "reservoir_covered",
      Description: "A covered reservoir is a large man-made tank for holding fresh water",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "silo",
      Description: "A storage container for bulk material, often grains such as corn or wheat",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "snow_fence",
      Description: "A fence-like structure built to redirect drifting snow",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "snow_net",
      Description: "A netting fence built across steep slopes to reduce risk and severity of (snow) avalanches",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "storage_tank",
      Description: "A container that holds liquids or compressed gases",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "street_cabinet",
      Description: "A cabinet located in the street and hosting technical equipment to operate facilities such as electricity or street lights.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "stupa",
      Description: "A Buddhist dome-shaped structure with a spire on top",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "surveillance",
      Description: "A surveillance camera or other type of surveillance equipment.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "survey_point",
      Description: "A triangulation pillar, geodetic vertex, or other piece of fixed equipment used by topographers.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "tailings_pond",
      Description: "A body of liquid or slurry used to store byproducts of mining operations.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "telescope",
      Description: "Telescope: an instrument that aids in the observation of remote objects by collecting light or radio waves",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "tower",
      Description: "A tower is a free-standing structure which is higher than it is wide.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "video_wall",
      Description: "A digital screen, typically constructed out of smaller LED panels.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "wastewater_plant",
      Description: "A wastewater plant is a facility used to treat wastewater.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "watermill",
      Description: "A mill driven by water power.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "water_tower",
      Description: "Structure with a water tank at an altitude to increase pressure in water network",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "water_well",
      Description: "A structural facility to access ground water, created by digging or drilling.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "water_tap",
      Description: "Publicly usable water tap",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "water_works",
      Description: "A place where drinking water is found and applied to the local waterpipes network.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "wildlife_crossing",
      Description: "Structure that allow animals to cross human barriers safely.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "windmill",
      Description: "A traditional windmill, historically used to mill grain with wind power.",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "works",
      Description: "A factory or industrial production plant",
      Category: ""
    },
    {
      Key: "man_made",
      Value: "yes",
      Description: "",
      Category: ""
    },
    {
      Key: "military",
      Value: "airfield",
      Description: "A place where military planes take off and land.",
      Category: ""
    },
    {
      Key: "military",
      Value: "base",
      Description: "A facility where military personnel and equipment are based.",
      Category: ""
    },
    {
      Key: "military",
      Value: "bunker",
      Description: "A building reinforced to withstand attack",
      Category: ""
    },
    {
      Key: "military",
      Value: "barracks",
      Description: "Buildings where military personnel live and sleep",
      Category: ""
    },
    {
      Key: "military",
      Value: "checkpoint",
      Description: "Place where civilian visitors and vehicles will be checked by a military authority.",
      Category: ""
    },
    {
      Key: "military",
      Value: "danger_area",
      Description: "A danger area is a restricted area posing a threat to life or property.",
      Category: ""
    },
    {
      Key: "military",
      Value: "nuclear_explosion_site",
      Description: "Nuclear weapons test site",
      Category: ""
    },
    {
      Key: "military",
      Value: "obstacle_course",
      Description: "A military obstacle course: a series of challenging physical obstructions an individual or team must navigate usually while being timed",
      Category: ""
    },
    {
      Key: "military",
      Value: "office",
      Description: "Military offices, e.g. general staff office, military recruitment office etc",
      Category: ""
    },
    {
      Key: "military",
      Value: "range",
      Description: "Where military personnel practice with their weapons (firing, bombing, artillery, …)",
      Category: ""
    },
    {
      Key: "military",
      Value: "training_area",
      Description: "A military training area/proving ground",
      Category: ""
    },
    {
      Key: "military",
      Value: "trench",
      Description: "A military trench: an excavation in the ground that is generally deeper than it is wide, dug into the ground as a barrier for military purposes (e.g. trench warfare)",
      Category: ""
    },
    {
      Key: "natural",
      Value: "fell",
      Description: "Habitat above tree line covered with grass, dwarf shrubs and mosses.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "grassland",
      Description: "Areas where the vegetation is dominated by grasses (Poaceae) and other herbaceous (non-woody) plants.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "heath",
      Description: "A dwarf-shrub habitat, characterised by open, low growing woody vegetation, often dominated by plants of the Ericaceae.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "moor",
      Description: "Don't use, see wikipage",
      Category: ""
    },
    {
      Key: "natural",
      Value: "scrub",
      Description: "Uncultivated land covered with shrubs, bushes or stunted trees.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "shrubbery",
      Description: "An area of shrubbery that is actively maintained or pruned by humans. A slightly wilder look is also possible.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "tree",
      Description: "A single tree",
      Category: ""
    },
    {
      Key: "natural",
      Value: "tree_row",
      Description: "A line of trees",
      Category: ""
    },
    {
      Key: "natural",
      Value: "tundra",
      Description: "Treeless cold climate habitat with open, low growing sedges, grasses, mosses and lichens.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "wood",
      Description: "Tree-covered area (a 'forest' or 'wood')",
      Category: ""
    },
    {
      Key: "natural",
      Value: "bay",
      Description: "Named area of water mostly surrounded by land but with level connection to the ocean or a lake.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "beach",
      Description: "landform along a body of water which consists of sand, shingle or other loose material",
      Category: ""
    },
    {
      Key: "natural",
      Value: "blowhole",
      Description: "An opening to a sea cave which has grown landwards resulting in blasts of water from the opening due to the wave action.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "cape",
      Description: "A piece of elevated land sticking out into the sea or large lake.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "coastline",
      Description: "The mean high water (springs) line between the sea and land (with the water on the right side of the way)",
      Category: ""
    },
    {
      Key: "natural",
      Value: "crevasse",
      Description: "A large crack in a glacier",
      Category: ""
    },
    {
      Key: "natural",
      Value: "geyser",
      Description: "A spring characterized by intermittent discharge of water ejected turbulently and accompanied by steam",
      Category: ""
    },
    {
      Key: "natural",
      Value: "glacier",
      Description: "A permanent body of ice formed naturally from snow that is moving under its own weight.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "hot_spring",
      Description: "A spring of geothermally heated groundwater",
      Category: ""
    },
    {
      Key: "natural",
      Value: "isthmus",
      Description: "A narrow strip of land, bordered by water on both sides and connecting two larger land masses",
      Category: ""
    },
    {
      Key: "natural",
      Value: "mud",
      Description: "Area covered with mud: water saturated fine grained soil without significant plant growth.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "peninsula",
      Description: "A piece of land projecting into water from a larger land mass, nearly surrounded by water",
      Category: ""
    },
    {
      Key: "natural",
      Value: "reef",
      Description: "A feature (rock, sandbar, coral, etc) lying permanently beneath the surface of the water.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "shingle",
      Description: "An accumulation of rounded rock fragments on a beach or riverbed",
      Category: ""
    },
    {
      Key: "natural",
      Value: "shoal",
      Description: "An area of the water floor which nears the water surface and is exposed at low tide or when a river/lake is not full of water.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "spring",
      Description: "A place where ground water flows naturally from the ground",
      Category: ""
    },
    {
      Key: "natural",
      Value: "strait",
      Description: "A narrow area of water surrounded by land on two sides and by water on two other sides.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "water",
      Description: "Any inland body of water, from natural such as a lake or pond to artificial like a moat or canal",
      Category: ""
    },
    {
      Key: "natural",
      Value: "wetland",
      Description: "A natural area subject to inundation or with waterlogged ground",
      Category: ""
    },
    {
      Key: "natural",
      Value: "arch",
      Description: "A rock arch naturally formed by erosion, with an opening underneath.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "arete",
      Description: "A thin, almost knife-like, ridge of rock which is typically formed when two glaciers erode parallel U-shaped valleys",
      Category: ""
    },
    {
      Key: "natural",
      Value: "bare_rock",
      Description: "An area with sparse or no vegetation, so that the bedrock becomes visible",
      Category: ""
    },
    {
      Key: "natural",
      Value: "cave_entrance",
      Description: "An entrance to a cave: a natural underground space large enough for a human to enter",
      Category: ""
    },
    {
      Key: "natural",
      Value: "cliff",
      Description: "A vertical or almost vertical natural drop in terrain, usually with a bare rock surface. The bottom of the cliff is on the right side of the way.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "dune",
      Description: "A hill of sand formed by wind, covered with no or very little vegetation",
      Category: ""
    },
    {
      Key: "natural",
      Value: "earth_bank",
      Description: "Large erosion gully or steep earth bank.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "fumarole",
      Description: "A fumarole is an opening in a planet's crust, which emits steam and gases",
      Category: ""
    },
    {
      Key: "natural",
      Value: "hill",
      Description: "A hill",
      Category: ""
    },
    {
      Key: "natural",
      Value: "peak",
      Description: "The top (summit) of a hill or mountain.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "ridge",
      Description: "A mountain landform with a continuous elevated crest or linear hill",
      Category: ""
    },
    {
      Key: "natural",
      Value: "rock",
      Description: "A notable rock or group of rocks attached to the underlying bedrock",
      Category: ""
    },
    {
      Key: "natural",
      Value: "saddle",
      Description: "The lowest point along a ridge or between two mountain tops",
      Category: ""
    },
    {
      Key: "natural",
      Value: "sand",
      Description: "An area covered by sand with no or very little vegetation.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "scree",
      Description: "Unconsolidated angular stones formed by rockfall and weathering from adjacent rockfaces",
      Category: ""
    },
    {
      Key: "natural",
      Value: "sinkhole",
      Description: "A natural depression or hole in the surface topography.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "stone",
      Description: "A single notable freestanding rock, which may differ from the composition of the terrain it lies in.",
      Category: ""
    },
    {
      Key: "natural",
      Value: "valley",
      Description: "A natural depression flanked by ridges or ranges of mountains or hills",
      Category: ""
    },
    {
      Key: "natural",
      Value: "volcano",
      Description: "An opening exposed on the earth's surface where volcanic material is emitted.",
      Category: ""
    },
    {
      Key: "office",
      Value: "accountant",
      Description: "An office for an accountant.",
      Category: ""
    },
    {
      Key: "office",
      Value: "administrative",
      Description: "",
      Category: ""
    },
    {
      Key: "office",
      Value: "advertising_agency",
      Description: "A service-based business dedicated to creating, planning, and handling advertising.",
      Category: ""
    },
    {
      Key: "office",
      Value: "architect",
      Description: "An office for an architect or group of architects.",
      Category: ""
    },
    {
      Key: "office",
      Value: "association",
      Description: "An office of a non-profit organisation, society, e.g. student, sport, consumer, automobile, bike association, etc.",
      Category: ""
    },
    {
      Key: "office",
      Value: "chamber",
      Description: "professional chamber",
      Category: ""
    },
    {
      Key: "office",
      Value: "charity",
      Description: "An office of a charitable organization",
      Category: ""
    },
    {
      Key: "office",
      Value: "company",
      Description: "An office of a private company",
      Category: ""
    },
    {
      Key: "office",
      Value: "construction_company",
      Description: "",
      Category: ""
    },
    {
      Key: "office",
      Value: "consulting",
      Description: "An office for a consulting firm, providing expert professional advice to other companies or organisations.",
      Category: ""
    },
    {
      Key: "office",
      Value: "courier",
      Description: "A courier company",
      Category: ""
    },
    {
      Key: "office",
      Value: "coworking",
      Description: "An office where people can go to work (typically requires a fee); not limited to a single employer",
      Category: ""
    },
    {
      Key: "office",
      Value: "diplomatic",
      Description: "An embassy, diplomatic mission, consulate or liaison office of a foreign government or parastatal entity in a host country.",
      Category: ""
    },
    {
      Key: "office",
      Value: "educational_institution",
      Description: "An office for an educational institution.",
      Category: ""
    },
    {
      Key: "office",
      Value: "employment_agency",
      Description: "An office for an employment service.",
      Category: ""
    },
    {
      Key: "office",
      Value: "energy_supplier",
      Description: "An office for a energy supplier.",
      Category: ""
    },
    {
      Key: "office",
      Value: "engineer",
      Description: "An office for an engineer or group of engineers.",
      Category: ""
    },
    {
      Key: "office",
      Value: "estate_agent",
      Description: "A place where you can rent or buy a house.",
      Category: ""
    },
    {
      Key: "office",
      Value: "financial",
      Description: "An office of a company in the financial sector",
      Category: ""
    },
    {
      Key: "office",
      Value: "financial_advisor",
      Description: "A professional who offers financial planning and sells financial services to clients.",
      Category: ""
    },
    {
      Key: "office",
      Value: "forestry",
      Description: "A forestry office",
      Category: ""
    },
    {
      Key: "office",
      Value: "foundation",
      Description: "An office of a foundation",
      Category: ""
    },
    {
      Key: "office",
      Value: "geodesist",
      Description: "An office of a person doing land surveys.",
      Category: ""
    },
    {
      Key: "office",
      Value: "government",
      Description: "An office of a (supra)national, regional or local government agency or department",
      Category: ""
    },
    {
      Key: "office",
      Value: "graphic_design",
      Description: "An office of a graphic designer",
      Category: ""
    },
    {
      Key: "office",
      Value: "guide",
      Description: "An office for tour guides, mountain guides, dive guides, etc.",
      Category: ""
    },
    {
      Key: "office",
      Value: "harbour_master",
      Description: "The Harbourmaster's office",
      Category: ""
    },
    {
      Key: "office",
      Value: "insurance",
      Description: "An office at which you can take out insurance policies.",
      Category: ""
    },
    {
      Key: "office",
      Value: "it",
      Description: "An office for an IT specialist.",
      Category: ""
    },
    {
      Key: "office",
      Value: "lawyer",
      Description: "An office for a lawyer.",
      Category: ""
    },
    {
      Key: "office",
      Value: "logistics",
      Description: "An office for a forwarder / hauler.",
      Category: ""
    },
    {
      Key: "office",
      Value: "moving_company",
      Description: "An office which offers a relocation service.",
      Category: ""
    },
    {
      Key: "office",
      Value: "newspaper",
      Description: "An office of a newspaper",
      Category: ""
    },
    {
      Key: "office",
      Value: "ngo",
      Description: "An office for a non-profit, non-governmental organisation (NGO).",
      Category: ""
    },
    {
      Key: "office",
      Value: "notary",
      Description: "An office for a notary public (common law)",
      Category: ""
    },
    {
      Key: "office",
      Value: "political_party",
      Description: "An office of a political party",
      Category: ""
    },
    {
      Key: "office",
      Value: "property_management",
      Description: "Office of a company, which manages a real estate property.",
      Category: ""
    },
    {
      Key: "office",
      Value: "quango",
      Description: "An office of a quasi-autonomous non-governmental organisation.",
      Category: ""
    },
    {
      Key: "office",
      Value: "religion",
      Description: "office of a community of faith",
      Category: ""
    },
    {
      Key: "office",
      Value: "research",
      Description: "An office for research and development",
      Category: ""
    },
    {
      Key: "office",
      Value: "security",
      Description: "An office for private security guards",
      Category: ""
    },
    {
      Key: "office",
      Value: "surveyor",
      Description: "An office of a person doing technical surveys, such as land surveys or risk and damage evaluations of properties and equipment.",
      Category: ""
    },
    {
      Key: "office",
      Value: "tax_advisor",
      Description: "An office for a financial expert specially trained in tax law",
      Category: ""
    },
    {
      Key: "office",
      Value: "telecommunication",
      Description: "An office for a telecommunication company",
      Category: ""
    },
    {
      Key: "office",
      Value: "therapist",
      Description: "",
      Category: ""
    },
    {
      Key: "office",
      Value: "travel_agent",
      Description: "An office of a travel agent",
      Category: ""
    },
    {
      Key: "office",
      Value: "union",
      Description: "An office of a trade union, an association of workers forming a bargaining unit",
      Category: ""
    },
    {
      Key: "office",
      Value: "visa",
      Description: "An office of an organisation or business which offers visa assistance",
      Category: ""
    },
    {
      Key: "office",
      Value: "water_utility",
      Description: "The office for a water utility company or water board.",
      Category: ""
    },
    {
      Key: "office",
      Value: "yes",
      Description: "Generic tag for unspecified office type.",
      Category: ""
    },
    {
      Key: "place",
      Value: "country",
      Description: "A nation state or other high-level national political/administrative area.",
      Category: "Administratively declared places"
    },
    {
      Key: "place",
      Value: "state",
      Description: "A large sub-national political/administrative area.",
      Category: "Administratively declared places"
    },
    {
      Key: "place",
      Value: "region",
      Description: "Used both as a broad tag for geographic or historical areas with no clear boundary and for distinct administration areas (with specific boundaries) in some countries.",
      Category: "Administratively declared places"
    },
    {
      Key: "place",
      Value: "province",
      Description: "A province",
      Category: "Administratively declared places"
    },
    {
      Key: "place",
      Value: "district",
      Description: "A district - a type of administrative division that, in some countries, is managed by local government.",
      Category: "Administratively declared places"
    },
    {
      Key: "place",
      Value: "county",
      Description: "A county - a geographical region of a country.",
      Category: "Administratively declared places"
    },
    {
      Key: "place",
      Value: "municipality",
      Description: "A municipality - single urban administrative division having corporate status.",
      Category: "Administratively declared places"
    },
    {
      Key: "place",
      Value: "city",
      Description: "The largest urban settlement or settlements within the territory.",
      Category: "Populated settlements, urban"
    },
    {
      Key: "place",
      Value: "borough",
      Description: "A part in larger city grouped into administrative unit.",
      Category: "Populated settlements, urban"
    },
    {
      Key: "place",
      Value: "suburb",
      Description: "A part of a town or city with a well-known name and often a distinct identity.",
      Category: "Populated settlements, urban"
    },
    {
      Key: "place",
      Value: "quarter",
      Description: "A quarter is a named, geographically localised place within a suburb of a larger city or within a town which is bigger than a neighbourhood",
      Category: "Populated settlements, urban"
    },
    {
      Key: "place",
      Value: "neighbourhood",
      Description: "A neighbourhood is a smaller named, geographically localised place within a suburb of a larger city or within a town or village",
      Category: "Populated settlements, urban"
    },
    {
      Key: "place",
      Value: "city_block",
      Description: "A named city block, usually surrounded by streets.",
      Category: "Populated settlements, urban"
    },
    {
      Key: "place",
      Value: "plot",
      Description: "A named plot is a tract or parcel of land owned or meant to be owned by some owner.",
      Category: "Populated settlements, urban"
    },
    {
      Key: "place",
      Value: "town",
      Description: "An important urban centre, between a village and a city in size.",
      Category: "Populated settlements, urban and rural"
    },
    {
      Key: "place",
      Value: "village",
      Description: "A smaller distinct settlement, smaller than a town with few facilities available with people traveling to nearby towns to access these.",
      Category: "Populated settlements, urban and rural"
    },
    {
      Key: "place",
      Value: "hamlet",
      Description: "A smaller rural community, typically with fewer than 100-200 inhabitants, and little infrastructure.",
      Category: "Populated settlements, urban and rural"
    },
    {
      Key: "place",
      Value: "isolated_dwelling",
      Description: "The smallest kind of settlement (1-2 households).",
      Category: "Populated settlements, urban and rural"
    },
    {
      Key: "place",
      Value: "farm",
      Description: "An individually named farm.",
      Category: "Populated settlements, urban and rural"
    },
    {
      Key: "place",
      Value: "allotments",
      Description: "A separate settlement, which is located outside an officially inhabited locality and has its own addressing",
      Category: "Populated settlements, urban and rural"
    },
    {
      Key: "place",
      Value: "continent",
      Description: "One of the seven continents: Africa, Antarctica, Asia, Australia, Europe, North America, South America",
      Category: "Other places"
    },
    {
      Key: "place",
      Value: "archipelago",
      Description: "A named group or chain of closely related islands and islets.",
      Category: "Other places"
    },
    {
      Key: "place",
      Value: "island",
      Description: "Any piece of land that is completely surrounded by water and isolated from other significant landmasses.",
      Category: "Other places"
    },
    {
      Key: "place",
      Value: "islet",
      Description: "A very small island.",
      Category: "Other places"
    },
    {
      Key: "place",
      Value: "square",
      Description: "A town or village square: a (typically) paved open space, generally of architectural significance, which is surrounded by buildings in a built-up area such as a city, town or village.",
      Category: "Other places"
    },
    {
      Key: "place",
      Value: "locality",
      Description: "A named place that has no population.",
      Category: "Other places"
    },
    {
      Key: "place",
      Value: "sea",
      Description: "A part of an ocean.",
      Category: "Other places"
    },
    {
      Key: "place",
      Value: "ocean",
      Description: "The world's five main major oceanic divisions.",
      Category: "Other places"
    },
    {
      Key: "power",
      Value: "cable",
      Description: "An insulated cable carrying electrical power, such as transmission or distribution cables located underground and undersea cables",
      Category: ""
    },
    {
      Key: "power",
      Value: "catenary_mast",
      Description: "A pole supporting the overhead wires used to supply electricity to vehicles equipped with a pantograph such as trams and trains",
      Category: ""
    },
    {
      Key: "power",
      Value: "compensator",
      Description: "A static power device used to ensure power quality and electrical network resilience.",
      Category: ""
    },
    {
      Key: "power",
      Value: "connection",
      Description: "A freestanding electrical connection between two or more overhead wires",
      Category: ""
    },
    {
      Key: "power",
      Value: "converter",
      Description: "A device to convert power between alternating and direct current electrical power: often, but not only, over high voltage networks",
      Category: ""
    },
    {
      Key: "power",
      Value: "generator",
      Description: "A device which converts one form of energy to another, for example, an electrical generator.",
      Category: ""
    },
    {
      Key: "power",
      Value: "heliostat",
      Description: "A mirror of a heliostat device",
      Category: ""
    },
    {
      Key: "power",
      Value: "insulator",
      Description: "An electrical insulator which connects a power line to a support structure and prevents grounding.",
      Category: ""
    },
    {
      Key: "power",
      Value: "line",
      Description: "High-voltage power lines used for power transmission, usually supported by towers or pylons",
      Category: ""
    },
    {
      Key: "line",
      Value: "busbar",
      Description: "Identifies a power line as a busbar, the central connection in a substation",
      Category: ""
    },
    {
      Key: "line",
      Value: "bay",
      Description: "A power line within a substation which connects a circuit to a busbar",
      Category: ""
    },
    {
      Key: "power",
      Value: "minor_line",
      Description: "Minor power lines forming the distribution grid, usually carried by poles.",
      Category: ""
    },
    {
      Key: "power",
      Value: "plant",
      Description: "An industrial facility where power (electricity, useful heat, biogas) is produced by individual power generator units.",
      Category: ""
    },
    {
      Key: "power",
      Value: "pole",
      Description: "A single pole supporting power lines, often a wood, steel or concrete mast designed to carry minor power lines.",
      Category: ""
    },
    {
      Key: "power",
      Value: "portal",
      Description: "A supporting structure for power lines, composed of vertical legs with cables between them attached to a horizontal crossarm",
      Category: ""
    },
    {
      Key: "power",
      Value: "substation",
      Description: "A facility which controls the flow of electricity in a power network with transformers, switchgear or compensators.",
      Category: ""
    },
    {
      Key: "power",
      Value: "switch",
      Description: "A device which allows electrical network operators to power up & down lines and transformers in substations or along the power grid.",
      Category: ""
    },
    {
      Key: "power",
      Value: "switchgear",
      Description: "A switchgear, which comprises one or more busbar assemblies and a number of bays each connecting a circuit to the busbar assembly.",
      Category: ""
    },
    {
      Key: "power",
      Value: "terminal",
      Description: "A point of connection where an overhead power line ends on a building or wall, for example, when connecting it to an indoor substation",
      Category: ""
    },
    {
      Key: "power",
      Value: "tower",
      Description: "A tower or pylon carrying high voltage electricity cables. Often constructed from steel latticework but tubular or solid pylons are also used.",
      Category: ""
    },
    {
      Key: "power",
      Value: "transformer",
      Description: "A device for stepping up or down electric voltage. Large power transformers are typically located inside substations",
      Category: ""
    },
    {
      Key: "public_transport",
      Value: "stop_position",
      Description: "The position on the street or rails where a public transport vehicle stops.",
      Category: ""
    },
    {
      Key: "public_transport",
      Value: "platform",
      Description: "The place where passengers are waiting for the public transport vehicles.",
      Category: ""
    },
    {
      Key: "public_transport",
      Value: "station",
      Description: "A station is an area designed to access public transport.",
      Category: ""
    },
    {
      Key: "public_transport",
      Value: "stop_area",
      Description: "A relation that contains all elements of a train, subway, monorail, tram, bus, trolleybus, aerialway, or ferry stop.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "abandoned",
      Description: "The course of a former railway which has been abandoned and the track removed. The course is still recognized through embankments, cuttings, tree rows, bridges, tunnels, remaining track ties, building shapes and rolling or straight ways. For demolished rails that are no longer identifiable, e.g. that have been built over, some use highly questionale railway=razed",
      Category: ""
    },
    {
      Key: "railway",
      Value: "construction",
      Description: "Railway under construction.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "disused",
      Description: "A section of railway which is no longer used but where the track and infrastructure remains in place. The track is likely overgrown.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "funicular",
      Description: "Cable driven inclined railways on a steep slope, with a pair of cars connected by one cable",
      Category: ""
    },
    {
      Key: "railway",
      Value: "light_rail",
      Description: "A higher-standard tram system, normally in its own right-of-way. Often it connects towns and thus reaches a considerable length (tens of kilometers).",
      Category: ""
    },
    {
      Key: "railway",
      Value: "miniature",
      Description: "Miniature railways are narrower than narrow gauge and carry passengers, frequently at an exact scale of \"standard-sized\" rail (for example \"1/4 scale\"). They can often be found in parks.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "monorail",
      Description: "A railway with only a single rail. A monorail can run above the rail like in Las Vegas and Disneyland or can suspend below the rail like the Wuppertal Schwebebahn (Germany).",
      Category: ""
    },
    {
      Key: "railway",
      Value: "narrow_gauge",
      Description: "Narrow-gauge passenger or freight trains. Narrow gauge railways can have mainline railway service like the Rhaetian Railway in Switzerland or can be a small light industrial railway. Use gauge=* to specify the actual width of rails in mm.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "preserved",
      Description: "A railway running historic trains, usually a tourist attraction. Using railway:preserved=yes is an alternate method to mark railway as preserved.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "rail",
      Description: "Full sized passenger or freight trains in the standard gauge for the country or state.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "subway",
      Description: "A city passenger rail service running mostly grade separated (see Wikipedia:rapid transit). Often a significant portion of the line or its system/network is underground.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "tram",
      Description: "One or two carriage rail vehicles, usually sharing motor road, sometimes called \"street running\" (Other languages).",
      Category: ""
    },
    {
      Key: "railway",
      Value: "halt",
      Description: "A small station without switches",
      Category: ""
    },
    {
      Key: "railway",
      Value: "platform",
      Description: "This is parallel to the rail line for showing where the actual platforms are. It is also to know where you can change platform and enter the station, so use footpaths to connect them. This is really useful for routing too. Use in addition to public_transport=platform.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "station",
      Description: "Railway passenger and/or cargo station. Use in addition to public_transport=station.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "subway_entrance",
      Description: "The entrance to a subway station, usually going from surface to underground.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "tram_stop",
      Description: "A tram stop is a place where a passenger can embark / disembark a tram.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "buffer_stop",
      Description: "stops the train at the end of a track. see Buffer_stop.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "derail",
      Description: "a device used to prevent fouling of a rail track by unauthorized movements of trains or unattended rolling stock. See Derail_(railroad).",
      Category: ""
    },
    {
      Key: "railway",
      Value: "crossing",
      Description: "A point where pedestrians may cross.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "level_crossing",
      Description: "A point where rails and roads cross.",
      Category: ""
    },
    {
      Key: "landuse",
      Value: "railway",
      Description: "Ground used around railways and railway-stations.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "signal",
      Description: "Any kind of railway signal.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "switch",
      Description: "Full connections between railways (aka 'points').",
      Category: ""
    },
    {
      Key: "railway",
      Value: "railway_crossing",
      Description: "Crossing rails with no interconnection.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "turntable",
      Description: "These are used for changing the direction that part of a train is pointing in.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "roundhouse",
      Description: "A semicircular building with many stalls for servicing engines.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "traverser",
      Description: "These are used for changing trains between railways. Also known as transfer table.",
      Category: ""
    },
    {
      Key: "railway",
      Value: "wash",
      Description: "A Railroad car wash",
      Category: ""
    },
    {
      Key: "railway",
      Value: "water_crane",
      Description: "A structure to deliver water to steam locomotives",
      Category: ""
    },
    {
      Key: "railway",
      Value: "user defined",
      Description: "All commonly used values according to Taginfo",
      Category: ""
    },
    {
      Key: "route",
      Value: "bicycle",
      Description: "Cycle routes or bicycles route are named, numbered or otherwise signed. May go along roads, trails or dedicated cycle paths",
      Category: ""
    },
    {
      Key: "route",
      Value: "bus",
      Description: "The route a public bus service takes. See Buses.",
      Category: ""
    },
    {
      Key: "route",
      Value: "canoe",
      Description: "Signed route for canoeing through a waterway.",
      Category: ""
    },
    {
      Key: "route",
      Value: "detour",
      Description: "Route for fixed detour routes. Examples are Bedarfsumleitung in Germany and uitwijkroute in the Netherlands",
      Category: ""
    },
    {
      Key: "route",
      Value: "ferry",
      Description: "The route a ferry takes from terminal to terminal Please make sure to add at least one node per tile (zoom level 12), better at least one every few km, so offline editors catch it with bbox requests.",
      Category: ""
    },
    {
      Key: "route",
      Value: "foot",
      Description: "Walking Route - is used for routes which are walkable without any limitations regarding fitness, equipment or weather conditions.",
      Category: ""
    },
    {
      Key: "route",
      Value: "hiking",
      Description: "Hiking explains how to tag hiking routes.",
      Category: ""
    },
    {
      Key: "route",
      Value: "horse",
      Description: "Riding routes",
      Category: ""
    },
    {
      Key: "route",
      Value: "inline_skates",
      Description: "Inline has more information on the subject.",
      Category: ""
    },
    {
      Key: "route",
      Value: "light_rail",
      Description: "Route of a light rail line.",
      Category: ""
    },
    {
      Key: "route",
      Value: "mtb",
      Description: "Mountain biking explains how to tag mtb routes.",
      Category: ""
    },
    {
      Key: "route",
      Value: "piste",
      Description: "Route of a piste (e.g., snowshoe or XC-Ski trails) in a winter sport area.",
      Category: ""
    },
    {
      Key: "route",
      Value: "railway",
      Description: "A sequence of railway ways, often named (e.g., Channel Tunnel). See Railways.",
      Category: ""
    },
    {
      Key: "route",
      Value: "road",
      Description: "Can be used to map various road routes/long roads.",
      Category: ""
    },
    {
      Key: "route",
      Value: "running",
      Description: "For running (jogging) routes.",
      Category: ""
    },
    {
      Key: "route",
      Value: "ski",
      Description: "For ski tracks (e.g., XC-Ski Trails User:Langläufer/Loipemap).",
      Category: ""
    },
    {
      Key: "route",
      Value: "subway",
      Description: "Route of a metro service",
      Category: ""
    },
    {
      Key: "route",
      Value: "train",
      Description: "Train services (e.g., London-Paris Eurostar) See Railways.",
      Category: ""
    },
    {
      Key: "route",
      Value: "tracks",
      Description: "Railroad track as rail infrastructure.",
      Category: ""
    },
    {
      Key: "route",
      Value: "tram",
      Description: "See Trams for more information on tagging tram services.",
      Category: ""
    },
    {
      Key: "route",
      Value: "trolleybus",
      Description: "The route of a trolleybus service.",
      Category: ""
    },
    {
      Key: "route",
      Value: "User defined",
      Description: "All commonly used values according to Taginfo.",
      Category: ""
    },
    {
      Key: "shop",
      Value: "alcohol",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "bakery",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "beverages",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "brewing_supplies",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "butcher",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "cheese",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "chocolate",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "coffee",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "confectionery",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "convenience",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "deli",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "dairy",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "farm",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "frozen_food",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "greengrocer",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "health_food",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "ice_cream",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "organic",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "pasta",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "pastry",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "seafood",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "spices",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "tea",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "wine",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "water",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "department_store",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "general",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "kiosk",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "mall",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "supermarket",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "wholesale",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "baby_goods",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "bag",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "boutique",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "clothes",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "fabric",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "fashion",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "fashion_accessories",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "jewelry",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "leather",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "sewing",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "shoes",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "tailor",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "watches",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "wool",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "charity",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "second_hand",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "variety_store",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "beauty",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "chemist",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "cosmetics",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "drugstore",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "erotic",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "hairdresser",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "hairdresser_supply",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "hearing_aids",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "herbalist",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "massage",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "medical_supply",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "nutrition_supplements",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "optician",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "perfumery",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "tattoo",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "agrarian",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "appliance",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "bathroom_furnishing",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "doityourself",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "electrical",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "energy",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "fireplace",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "florist",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "garden_centre",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "garden_furniture",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "gas",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "glaziery",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "groundskeeping",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "hardware",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "houseware",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "locksmith",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "paint",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "security",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "trade",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "windows",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "antiques",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "bed",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "candles",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "carpet",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "curtain",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "doors",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "flooring",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "furniture",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "household_linen",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "interior_decoration",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "kitchen",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "lamps",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "lighting",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "tiles",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "window_blind",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "computer",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "electronics",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "hifi",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "mobile_phone",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "radiotechnics",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "vacuum_cleaner",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "atv",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "bicycle",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "boat",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "car",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "car_repair",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "car_parts",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "caravan",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "fuel",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "fishing",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "golf",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "hunting",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "jetski",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "military_surplus",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "motorcycle",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "outdoor",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "scuba_diving",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "ski",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "snowmobile",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "sports",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "swimming_pool",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "trailer",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "tyres",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "art",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "camera",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "collector",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "craft",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "frame",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "games",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "model",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "music",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "musical_instrument",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "photo",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "trophy",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "video",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "video_games",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "anime",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "books",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "gift",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "lottery",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "newsagent",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "stationery",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "ticket",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "bookmaker",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "cannabis",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "copyshop",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "dry_cleaning",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "e-cigarette",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "funeral_directors",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "laundry",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "money_lender",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "outpost",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "party",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "pawnbroker",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "pest_control",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "pet",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "pet_grooming",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "pyrotechnics",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "religion",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "storage_rental",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "tobacco",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "toys",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "travel_agency",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "weapons",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "vacant",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "yes",
      Description: "",
      Category: ""
    },
    {
      Key: "shop",
      Value: "user defined",
      Description: "",
      Category: ""
    },
    {
      Key: "sport",
      Value: "9pin",
      Description: "A bowling game played in Europe with only 9 pins.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "10pin",
      Description: "A bowling game popular in North America with 10 pins.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "american_football",
      Description: "A sport played by two teams of eleven players on a rectangular field with goalposts at each end.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "aikido",
      Description: "A Japanese martial art by blending with the motion of the attacker and redirecting the force of the attack rather than opposing it head-on.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "archery",
      Description: "The art, practice, or skill of propelling arrows with the use of a bow.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "athletics",
      Description: "A collection of sports which combines various athletic contests based on the skills of running, jumping, and throwing.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "australian_football",
      Description: "A sport played between two teams of eighteen players on the field of either an Australian football ground, a modified cricket field, or a similarly sized sports venue, also called football, footy, Aussie rules, or AFL.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "badminton",
      Description: "A racquet sport played by singles or in teams of two, who take positions on opposite halves of a rectangular court (pitch) divided by a net.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "bandy",
      Description: "Bandy is a sport played by two teams of eleven players on a rectangular field.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "baseball",
      Description: "A bat-and-ball game played between two teams of nine players on a field (pitch or stadium) each who take turns batting and fielding.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "basketball",
      Description: "A sport played by two teams of five players on a rectangular court.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "beachvolleyball",
      Description: "Volleyball played on a sand court",
      Category: ""
    },
    {
      Key: "sport",
      Value: "biathlon",
      Description: "The biathlon is a winter sport that combines cross-country skiing and rifle shooting.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "billiards",
      Description: "Cue sports, a wide variety of games of skill generally played with a cue stick which is used to strike billiard balls, moving them around a cloth-covered billiards table bounded by rubber cushions.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "bmx",
      Description: "A cycle sport performed on BMX bikes, either in competitive BMX racing or freestyle BMX, or else in general on- or off-road recreation.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "bobsleigh",
      Description: "A winter sport in which teams of two or four make timed runs down narrow, twisting, banked, iced tracks in a gravity-powered sled, also called luge or bobslede.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "boules",
      Description: "A group of games in which the objective is to throw or roll heavy balls as close as possible to a small target ball, also called pétanque, lyonnaise, bocce, or bocce volo.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "bowls",
      Description: "Sport in which the objective is to roll biased balls so that they stop close to a smaller ball",
      Category: ""
    },
    {
      Key: "sport",
      Value: "boxing",
      Description: "Boxing is a combat sport in which two people engage in a contest by throwing punches with gloved hands against each other.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "bullfighting",
      Description: "Bullfighting, both on foot and on horseback, is a physical contest in which bulls are fought by humans.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "canadian_football",
      Description: "A sport played by two teams of 12 players on a rectangular field with goal posts at each end.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "canoe",
      Description: "Canoe and Kayak.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "chess",
      Description: "Chess is a popular two-player strategy board game.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "cliff_diving",
      Description: "Non-competitive diving is jumping from a cliff or a rock into water.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "climbing",
      Description: "Marks elements to represent natural climbing sites (climbing areas, sectors, crags, frozen waterfalls, etc.) or artificial climbs (climbing walls, indoor climbing halls, etc.)",
      Category: ""
    },
    {
      Key: "sport",
      Value: "climbing_adventure",
      Description: "Used to tag an area as \"Adventure Park\", \"Ropes Courses\", \"Climbing Adventure\", \"Zip-line\", or \"Treetop Adventure\", where people climb, walk or otherwise move on prebuilt wires and other objects.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "cockfighting",
      Description: "A blood sport between two roosters (cocks), or more accurately gamecocks, held in a ring called a cockpit.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "cricket",
      Description: "A bat-and-ball sport contested by two teams, usually of eleven players, each on a large grass Cricket pitch. Played on a large circular or oval-shaped grassy Cricket field ground.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "crossfit",
      Description: "CrossFit, a branded fitness regimen",
      Category: ""
    },
    {
      Key: "sport",
      Value: "croquet",
      Description: "A sport or game that is played between two or more players embedded on a small grass playing court or pitch which involves hitting plastic or wooden balls with a mallet through hoops (often called \"wickets\" in the United States).",
      Category: ""
    },
    {
      Key: "sport",
      Value: "curling",
      Description: "A sport in which players slide stones on a sheet of ice towards a target area which is segmented into four concentric rings.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "cycle_polo",
      Description: "A cycle polo",
      Category: ""
    },
    {
      Key: "sport",
      Value: "cycling",
      Description: "The use of bicycles for sport, also called bicycling, mountain biking or biking.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "darts",
      Description: "Darts is a form of throwing game in which small missiles are thrown at a circular target (dartboard) fixed to a wall.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "dog_agility",
      Description: "Dog agility is a dog sport in which a handler directs a dog through an obstacle course in a race for both time and accuracy.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "dog_racing",
      Description: "A feature used for dog racing",
      Category: ""
    },
    {
      Key: "sport",
      Value: "equestrian",
      Description: "A sport practised with the horse as a partner; but for horse racing use tag:sport=horse_racing.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "fencing",
      Description: "Fencing is the martial art of fighting with blades. Divided into three weapon categories: foil, sabre (spelled saber in the United States) and épée.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "field_hockey",
      Description: "Indicates that object is related to field hockey, a stick and ball game played on a rectangular court with goals at either end.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "fitness",
      Description: "Fitness sports",
      Category: ""
    },
    {
      Key: "sport",
      Value: "five-a-side",
      Description: "A variation of soccer with only 5 persons per team on a smaller pitch",
      Category: ""
    },
    {
      Key: "sport",
      Value: "floorball",
      Description: "Floorball is a type of floor hockey with five players and a goalkeeper in each team.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "four_square",
      Description: "A hand ball game played on a square court.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "free_flying",
      Description: "Provides a way to tag landing and takeoff for free flying aircraft with additional related amenities.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "futsal",
      Description: "Futsal is a sport played by two teams of five players on a rectangular court.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "gaelic_games",
      Description: "Gaelic Games as played within the GAA in Ireland, including Gaelic Football, Hurling, Ladies Gaelic Football, Camogie, Handball and Rounders",
      Category: ""
    },
    {
      Key: "sport",
      Value: "gaga",
      Description: "Gaga (or gaga ball) is a variant of dodgeball that is played in a gaga \"pit\"",
      Category: ""
    },
    {
      Key: "sport",
      Value: "golf",
      Description: "a stick and ball game played from a 'tee' to a hole.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "gymnastics",
      Description: "Gymnastics",
      Category: ""
    },
    {
      Key: "sport",
      Value: "handball",
      Description: "A team sport played with goals and a thrown ball using the hands.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "hapkido",
      Description: "A dynamic and highly eclectic Korean martial art",
      Category: ""
    },
    {
      Key: "sport",
      Value: "horseshoes",
      Description: "Horseshoes",
      Category: ""
    },
    {
      Key: "sport",
      Value: "horse_racing",
      Description: "An equestrian sport in which several horses simultaneously race against each other.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "ice_hockey",
      Description: "A ball and stick game played on an ice rink.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "ice_skating",
      Description: "A sport or pastime by moving on ice while using ice skates.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "ice_stock",
      Description: "Ice stock sport, also known as Bavarian curling, is a winter sport, somewhat similar to curling. In German, it is known as Eisstockschießen.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "judo",
      Description: "Judo: a modern Japanese martial art, combat and Olympic sport.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "karate",
      Description: "Karate",
      Category: ""
    },
    {
      Key: "sport",
      Value: "karting",
      Description: "Kart racing",
      Category: ""
    },
    {
      Key: "sport",
      Value: "kickboxing",
      Description: "Kickboxing is a group of stand-up combat sports based on kicking and punching.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "kitesurfing",
      Description: "Property added to a sports facility to mark as used for kitesurfing",
      Category: ""
    },
    {
      Key: "sport",
      Value: "korfball",
      Description: "Korfball: a team sport played with a ball on a rectangular court",
      Category: ""
    },
    {
      Key: "sport",
      Value: "krachtbal",
      Description: "Team sport played with a heavy ball on a rectangular pitch, originating in West-Flanders, Belgium",
      Category: ""
    },
    {
      Key: "sport",
      Value: "lacrosse",
      Description: "A team sport played with a lacrosse stick and a lacrosse ball. Players use the head of the lacrosse stick to carry pass, catch, and shoot the ball into the goal.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "martial_arts",
      Description: "Codified systems and traditions of combat practices",
      Category: ""
    },
    {
      Key: "sport",
      Value: "miniature_golf",
      Description: "Miniature golf, also known as minigolf, mini-putt, crazy golf, or putt-putt, is an offshoot of the sport of golf focusing solely on the putting aspect of its parent game.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "model_aerodrome",
      Description: "Model aerodrome",
      Category: ""
    },
    {
      Key: "sport",
      Value: "motocross",
      Description: "Motorcycle racing on unpaved surfaces.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "motor",
      Description: "Motorsport: a sport with motorised vehicles, e.g. auto racing",
      Category: ""
    },
    {
      Key: "sport",
      Value: "multi",
      Description: "Property added to otherwise marked sports facility to indicate as suitable for more than one sport, without listing them",
      Category: ""
    },
    {
      Key: "sport",
      Value: "netball",
      Description: "A hand ball competition between two teams on a rectangular court.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "obstacle_course",
      Description: "A series of challenging physical obstacles an individual or team must navigate usually while being timed.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "orienteering",
      Description: "Orienteering",
      Category: ""
    },
    {
      Key: "sport",
      Value: "paddle_tennis",
      Description: "Paddle tennis is a racquet sport adapted from tennis and played for over a century.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "padel",
      Description: "A racket sport played in pairs. It consists of bouncing the ball in the opponent's court, with the possibility of bouncing it off the walls.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "parachuting",
      Description: "Parachuting / Skydiving",
      Category: ""
    },
    {
      Key: "sport",
      Value: "parkour",
      Description: "Parkour is a training discipline using movement that developed from military obstacle course training.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "pelota",
      Description: "Pelota, a variety of court sports played with a ball using one's hand, a racket, a wooden bat (pala), or a basket propulsor (txistera), against a wall or with two teams.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "pesäpallo",
      Description: "Pesäpallo, sometimes known as Finnish baseball, is a fast-moving bat-and-ball sport where the offense tries to score by hitting the ball successfully and running through the bases, while the defense tries to put the batter and runners out.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "pickleball",
      Description: "Pickleball, a tennis-like game played with a slower ball on a smaller court.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "pilates",
      Description: "Pilates is a physical fitness system developed in the early 20th century by Joseph Pilates.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "pole_dance",
      Description: "Pole dance as kind of sport",
      Category: ""
    },
    {
      Key: "sport",
      Value: "racquet",
      Description: "Racquetball is a racquet sport played with a hollow rubber ball",
      Category: ""
    },
    {
      Key: "sport",
      Value: "rc_car",
      Description: "Radio controlled cars",
      Category: ""
    },
    {
      Key: "sport",
      Value: "roller_skating",
      Description: "The traveling on surfaces with roller skates.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "rowing",
      Description: "Additional tag added on object to mark them as used for sport of rowing",
      Category: ""
    },
    {
      Key: "sport",
      Value: "rugby_league",
      Description: "Rugby league football",
      Category: ""
    },
    {
      Key: "sport",
      Value: "rugby_union",
      Description: "Rugby union football",
      Category: ""
    },
    {
      Key: "sport",
      Value: "running",
      Description: "Features dedicated to the sport of running",
      Category: ""
    },
    {
      Key: "sport",
      Value: "sailing",
      Description: "Sailing: the sport of using wind to power sails which propel a boat",
      Category: ""
    },
    {
      Key: "sport",
      Value: "scuba_diving",
      Description: "To mark a physical object as for scuba diving",
      Category: ""
    },
    {
      Key: "sport",
      Value: "shooting",
      Description: "Identifies given object as used for practicing shooting sports",
      Category: ""
    },
    {
      Key: "sport",
      Value: "shot-put",
      Description: "Shot-put is a sport involving throwing a heavy spherical object as far as possible.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "skateboard",
      Description: "An area designated and equipped for skateboarding",
      Category: ""
    },
    {
      Key: "sport",
      Value: "ski_jumping",
      Description: "Ski jumping is a winter sport in which competitors aim to achieve the longest jump after descending from a specially designed ramp on their skis.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "skiing",
      Description: "Identifies given object as used for practicing skiing",
      Category: ""
    },
    {
      Key: "sport",
      Value: "snooker",
      Description: "Snooker is a cue sport that is played on a rectangular table covered with a green cloth with pockets at each of the four corners and in the middle of each long side.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "soccer",
      Description: "Association football, more commonly known as football or soccer",
      Category: ""
    },
    {
      Key: "sport",
      Value: "speedway",
      Description: "Motorcycle speedway, usually referred to as speedway, is a motorcycle sport involving four and sometimes up to six riders competing over four anti-clockwise laps of an oval circuit.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "squash",
      Description: "Squash is a racket and ball sport played by two or four players in a four-walled court with a small, hollow rubber ball.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "sumo",
      Description: "A traditional martial arts sport of Japan.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "surfing",
      Description: "Indicates that a sport facility is for surfing.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "swimming",
      Description: "A place where people do swimming.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "table_tennis",
      Description: "A bat and ball game played over a table.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "table_soccer",
      Description: "Table Soccer or Table Football, also known as Foosball, Fussball, Kicker, or Tecball, is a table-top game and sport based off association football (soccer).",
      Category: ""
    },
    {
      Key: "sport",
      Value: "taekwondo",
      Description: "Taekwondo",
      Category: ""
    },
    {
      Key: "sport",
      Value: "tennis",
      Description: "A competition where two or four players use a ball and rackets over a net.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "toboggan",
      Description: "Public toboggan run",
      Category: ""
    },
    {
      Key: "sport",
      Value: "ultimate",
      Description: "Ultimate, also known as ultimate frisbee, is a team sport played with a flying disc (frisbee).",
      Category: ""
    },
    {
      Key: "sport",
      Value: "volleyball",
      Description: "Volleyball",
      Category: ""
    },
    {
      Key: "sport",
      Value: "wakeboarding",
      Description: "Wakeboarding is a water sport in which the rider, standing on a wakeboard, is towed behind a motorboat in order to perform aerial maneuvers.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "water_polo",
      Description: "A competitive ball sport played in a pool between two teams.",
      Category: ""
    },
    {
      Key: "sport",
      Value: "water_ski",
      Description: "Water skiing",
      Category: ""
    },
    {
      Key: "sport",
      Value: "weightlifting",
      Description: "Weightlifting",
      Category: ""
    },
    {
      Key: "sport",
      Value: "wrestling",
      Description: "Wrestling",
      Category: ""
    },
    {
      Key: "sport",
      Value: "yoga",
      Description: "Yoga as exercise",
      Category: ""
    },
    {
      Key: "sport",
      Value: "zurkhaneh_sport",
      Description: "A traditional system of athletics.",
      Category: ""
    },
    {
      Key: "telecom",
      Value: "exchange",
      Description: "A place to connect landlines subscribers to telecommunication service equipments",
      Category: ""
    },
    {
      Key: "telecom",
      Value: "connection_point",
      Description: "Last point of telecom local loops allowing direct connections towards a few households and subscribers",
      Category: ""
    },
    {
      Key: "telecom",
      Value: "distribution_point",
      Description: "Equipment, often small boxes, allowing to directly connect up to 15 individuals or households to a single upstream local loop cable towards telecom exchanges",
      Category: ""
    },
    {
      Key: "telecom",
      Value: "service_device",
      Description: "Active equipment which deliver service to connected customers. It can be for instance a DSLAM, a telephone switch, or more recently an OLT for optical networks. It excludes amplifiers or repeaters installed along local loops or long distance lines.",
      Category: ""
    },
    {
      Key: "telecom",
      Value: "data_center",
      Description: "A building used to house computers and network equipment.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "alpine_hut",
      Description: "A remote building located in the mountains intended to provide board and lodging.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "apartment",
      Description: "A furnished apartment or flat with cooking and bathroom facilities that can be rented for holiday vacations.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "aquarium",
      Description: "A facility with living aquatic animals for public viewing.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "artwork",
      Description: "A public piece of art.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "attraction",
      Description: "An object of interest for a tourist, or a purpose-built tourist attraction",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "camp_pitch",
      Description: "A tent or caravan pitch location within a campsite or caravan site",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "camp_site",
      Description: "An area where people can camp overnight using tents, camper vans or caravans.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "caravan_site",
      Description: "A place where you can stay in a caravan overnight or for longer periods.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "chalet",
      Description: "A holiday cottage with self-contained cooking and bathroom facilities.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "gallery",
      Description: "An area or building that displays a variety of visual art exhibitions.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "guest_house",
      Description: "Accommodation smaller than a hotel and typically owner-operated, such as bed&breakfasts etc.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "hostel",
      Description: "Cheap accommodation with shared bedrooms.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "hotel",
      Description: "Hotel - an establishment that provides paid lodging",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "information",
      Description: "Information for tourists and visitors, including information offices",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "motel",
      Description: "Short term accommodation, particularly for people travelling by car.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "museum",
      Description: "A museum: an institution with exhibitions on scientific, historical, cultural topics",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "picnic_site",
      Description: "A locality that is suitable for outdoors eating, with facilities to aid a picnic such as tables and benches",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "theme_park",
      Description: "An amusement park where entertainment is provided by rides, games, concessions.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "viewpoint",
      Description: "A place worth visiting, often high, with a good view of surrounding countryside or notable buildings.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "wilderness_hut",
      Description: "A remote building, with generally a fireplace, intended to provide temporary shelter and sleeping accommodation, typically un-serviced and with no staff.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "zoo",
      Description: "A zoological garden, where animals are confined for viewing by the public.",
      Category: ""
    },
    {
      Key: "tourism",
      Value: "yes",
      Description: "",
      Category: ""
    },
    {
      Key: "water",
      Value: "river",
      Description: "The water covered area of a river",
      Category: ""
    },
    {
      Key: "water",
      Value: "oxbow",
      Description: "An oxbow lake",
      Category: ""
    },
    {
      Key: "water",
      Value: "canal",
      Description: "The area covered by the water of a canal",
      Category: ""
    },
    {
      Key: "water",
      Value: "ditch",
      Description: "The water covered area of a waterway=ditch - a simple artificial waterway serving as a barrier or for draining surrounding land.",
      Category: ""
    },
    {
      Key: "water",
      Value: "lock",
      Description: "A device used for raising and lowering boats, ships and other watercraft between stretches of water of different levels on river and canal waterways",
      Category: ""
    },
    {
      Key: "water",
      Value: "fish_pass",
      Description: "Area of a fish pass for the fish to pass waterway dams or weirs. Should contain tag:waterway=fish_pass way inside.",
      Category: ""
    },
    {
      Key: "water",
      Value: "lake",
      Description: "A natural or semi-natural body of relatively still fresh or salt water which is surrounded by land",
      Category: ""
    },
    {
      Key: "water",
      Value: "reservoir",
      Description: "An artificial lake which may be used to store water. Usually formed by a dam over a natural water course.",
      Category: ""
    },
    {
      Key: "water",
      Value: "pond",
      Description: "A small body of standing water, man-made in most cases",
      Category: ""
    },
    {
      Key: "water",
      Value: "basin",
      Description: "An area of land artificially graded to hold water.",
      Category: ""
    },
    {
      Key: "water",
      Value: "lagoon",
      Description: "A body of shallow sea water or brackish water separated from the sea by a barrier.",
      Category: ""
    },
    {
      Key: "water",
      Value: "stream_pool",
      Description: "A stream pool: a small but relatively deep collection of fresh water, occurring along a narrow stream",
      Category: ""
    },
    {
      Key: "water",
      Value: "reflecting_pool",
      Description: "A shallow pool of water, undisturbed by fountain jets, for a calm reflective surface, often found in gardens, squares or at memorial sites",
      Category: ""
    },
    {
      Key: "water",
      Value: "moat",
      Description: "A deep, wide defensive ditch, normally filled with water, dug to surround a fortified habitation.",
      Category: ""
    },
    {
      Key: "water",
      Value: "wastewater",
      Description: "A clarifier or settling basin of a wastewater treatment plant.",
      Category: ""
    },
    {
      Key: "waterway",
      Value: "river",
      Description: "The linear flow of a river, in flow direction.",
      Category: "Natural watercourses"
    },
    {
      Key: "waterway",
      Value: "riverbank",
      Description: "Use of this tag is discouraged, see natural=water + water=river instead",
      Category: "Natural watercourses"
    },
    {
      Key: "waterway",
      Value: "stream",
      Description: "A naturally-forming waterway that is too narrow to be classed as a river.",
      Category: "Natural watercourses"
    },
    {
      Key: "waterway",
      Value: "tidal_channel",
      Description: "A natural intertidal waterway in mangroves, salt marshes and tidal flats with water flow in the direction of the tide",
      Category: "Natural watercourses"
    },
    {
      Key: "waterway",
      Value: "canal",
      Description: "An artificial '''open flow''' waterway used to carry useful water for transportation, waterpower, or irrigation.",
      Category: "Man-made waterways"
    },
    {
      Key: "waterway",
      Value: "drain",
      Description: "An artificial free flow waterway used for carrying superfluous water, usually lined with concrete.",
      Category: "Man-made waterways"
    },
    {
      Key: "waterway",
      Value: "ditch",
      Description: "A small man-made drainage waterway, usually unlined.",
      Category: "Man-made waterways"
    },
    {
      Key: "waterway",
      Value: "pressurised",
      Description: "An artificial waterway where water flows in a closed space without air",
      Category: "Man-made waterways"
    },
    {
      Key: "waterway",
      Value: "fairway",
      Description: "A navigable route in a lake or sea, often marked by buoys or beacons.",
      Category: "Man-made waterways"
    },
    {
      Key: "waterway",
      Value: "dock",
      Description: "An enclosed area of water for ships and other craft within which the height of the water can be managed.",
      Category: "Facilities"
    },
    {
      Key: "waterway",
      Value: "boatyard",
      Description: "A place for constructing, repairing and storing vessels out of the water.",
      Category: "Facilities"
    },
    {
      Key: "waterway",
      Value: "dam",
      Description: "A barrier built across a river or stream to block and regulate the flow of the river.",
      Category: "Barrieres on waterways"
    },
    {
      Key: "waterway",
      Value: "weir",
      Description: "A barrier built across a river to control water speed and depth. Designed to let water flow over the top all the time or at least in specific conditions.",
      Category: "Barrieres on waterways"
    },
    {
      Key: "waterway",
      Value: "waterfall",
      Description: "A place where water flows over a vertical drop or a series of drops in the course of a stream or river.",
      Category: "Barrieres on waterways"
    },
    {
      Key: "waterway",
      Value: "lock_gate",
      Description: "A gate of a lock",
      Category: "Barrieres on waterways"
    },
    {
      Key: "waterway",
      Value: "soakhole",
      Description: "The point at which a river or stream percolates into or through the soil",
      Category: "Other features on waterways"
    },
    {
      Key: "waterway",
      Value: "turning_point",
      Description: "A place to turn the driving direction for vessels, where the boats are longer than the river/canal is wide.",
      Category: "Other features on waterways"
    },
    {
      Key: "waterway",
      Value: "water_point",
      Description: "A place to fill fresh water holding tanks of a boat.",
      Category: "Other features on waterways"
    },
    {
      Key: "waterway",
      Value: "fuel",
      Description: "A place to get fuel for boats",
      Category: "Other features on waterways"
    }
  ]

  export default {array};