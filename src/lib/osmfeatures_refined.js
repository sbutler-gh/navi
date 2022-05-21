let array = [
{ "key": "aerialway", "value": "cable_car", "label": "Cable car", "description": `A cable car run. Just one or two large cars. The traction cable forms a loop, but the cars do not loop around, they just move up and down on their own side, rolling along static cables over which they are suspended.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "gondola", "label": "Gondola", "description": `An aerialway where the cabins go around in a circle.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "mixed_lift", "label": "Mixed lift", "description": `A mixed lift, containing both gondolas and chairs.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "chair_lift", "label": "Chair lift", "description": `An open chairlift run. These have a single seat to sit on and are open to the outside air.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "drag_lift", "label": "Drag lift", "description": `An overhead tow-line for skiers and riders.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "t-bar", "label": "T-bar", "description": `An overhead tow-line for skiers and riders with T-shaped carriers for two passengers.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "j-bar", "label": "J-bar", "description": `J-bar lift or L-bar lift. Overhead tow-line for skiers and riders with carriers in J-shape.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "platter", "label": "Platter", "description": `An overhead tow-line for skiers and riders with platters.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "rope_tow", "label": "Rope tow", "description": `A tow-line for skiers and riders where passenger hold by hand or use special tow grabbers.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "magic_carpet", "label": "Magic carpet", "description": `A ski lift for small children resembling a conveyor belt.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "zip_line", "label": "Zip line", "description": `Zip line, gravity propelled aerial ropeslide like a flying fox or similar`, "category": "Aerialway" },

{ "key": "aerialway", "value": "goods", "label": "Goods", "description": `A cable supported lift for conveying goods, not passengers. Consider other values for aerialway in combination with access and usage keys instead of this.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "pylon", "label": "Pylon", "description": `A pylon supporting the aerialway cable.`, "category": "Aerialway" },

{ "key": "aerialway", "value": "station", "label": "Station", "description": `A station where passengers and/or goods can enter and/or leave the aerialway`, "category": "Aerialway" },

{ "key": "aeroway", "value": "aerodrome", "label": "Aerodrome", "description": `An aerodrome, airport or airfield`, "category": "Aeroway" },

{ "key": "aeroway", "value": "apron", "label": "Apron", "description": `An area of an airport where planes are parked, unloaded or loaded, refueled, or boarded`, "category": "Aeroway" },

{ "key": "aeroway", "value": "gate", "label": "Gate", "description": `The bounded space, inside the airport terminal, where passengers wait before boarding their flight`, "category": "Aeroway" },

{ "key": "aeroway", "value": "hangar", "label": "Hangar", "description": `A large airport building with extensive floor areas for housing aircraft or spacecraft`, "category": "Aeroway" },

{ "key": "aeroway", "value": "helipad", "label": "Helipad", "description": `A landing area or platform designed for helicopters`, "category": "Aeroway" },

{ "key": "aeroway", "value": "heliport", "label": "Heliport", "description": `A special aerodrome built for helicopters`, "category": "Aeroway" },

{ "key": "aeroway", "value": "navigationaid", "label": "Navigationaid", "description": `A facility that supports visual navigation for aircraft`, "category": "Aeroway" },

{ "key": "aeroway", "value": "runway", "label": "Runway", "description": `A strip of land on which aircraft can take off and land.`, "category": "Aeroway" },

{ "key": "aeroway", "value": "spaceport", "label": "Spaceport", "description": `A spaceport or cosmodrome: a site for launching or receiving spacecraft`, "category": "Aeroway" },

{ "key": "aeroway", "value": "taxiway", "label": "Taxiway", "description": `A route where airplanes manouevre between runways and parking areas within an aerodrome`, "category": "Aeroway" },

{ "key": "aeroway", "value": "terminal", "label": "Terminal", "description": `An airport passenger building`, "category": "Aeroway" },

{ "key": "aeroway", "value": "windsock", "label": "Windsock", "description": `An object that shows wind direction and speed.`, "category": "Aeroway" },

{ "key": "Sustenance", "value": "", "label": "", "description": ``, "category": "Sustenance" },

{ "key": "amenity", "value": "bar", "label": "Bar", "description": `Bar is a purpose-built commercial establishment that sells alcoholic drinks to be consumed on the premises. They are characterised by a noisy and vibrant atmosphere, similar to a party and usually don't sell food. See also the description of the tags amenity=pub;bar;restaurant for a distinction between these.`, "category": "Sustenance " },

{ "key": "amenity", "value": "biergarten", "label": "Biergarten", "description": `Biergarten or beer garden is an open-air area where alcoholic beverages along with food is prepared and served. See also the description of the tags amenity=pub;bar;restaurant. A biergarten can commonly be found attached to a beer hall, pub, bar, or restaurant. In this case, you can use biergarten=yes additional to amenity=pub;bar;restaurant.`, "category": "Sustenance " },

{ "key": "amenity", "value": "cafe", "label": "Cafe", "description": `Cafe is generally an informal place that offers casual meals and beverages; typically, the focus is on coffee or tea. Also known as a coffeehouse/shop, bistro or sidewalk cafe. The kind of food served may be mapped with the tags cuisine=* and diet=*. See also the tags amenity=restaurant;bar;fast_food.`, "category": "Sustenance " },

{ "key": "amenity", "value": "fast_food", "label": "Fast food", "description": `Fast food restaurant (see also amenity=restaurant). The kind of food served can be tagged with cuisine=* and diet=*.`, "category": "Sustenance " },

{ "key": "amenity", "value": "food_court", "label": "Food court", "description": `An area with several different restaurant food counters and a shared eating area. Commonly found in malls, airports, etc.`, "category": "Sustenance " },

{ "key": "amenity", "value": "ice_cream", "label": "Ice cream", "description": `Ice cream shop or ice cream parlour. A place that sells ice cream and frozen yoghurt over the counter`, "category": "Sustenance " },

{ "key": "amenity", "value": "pub", "label": "Pub", "description": `A place selling beer and other alcoholic drinks; may also provide food or accommodation (UK). See description of amenity=bar and amenity=pub for distinction between bar and pub`, "category": "Sustenance " },

{ "key": "amenity", "value": "restaurant", "label": "Restaurant", "description": `Restaurant (not fast food, see amenity=fast_food). The kind of food served can be tagged with cuisine=* and diet=*.`, "category": "Sustenance " },

{ "key": "Education", "value": "", "label": "", "description": ``, "category": "Education" },

{ "key": "amenity", "value": "college", "label": "College", "description": `Campus or buildings of an institute of Further Education (aka continuing education)`, "category": "Education" },

{ "key": "amenity", "value": "driving_school", "label": "Driving school", "description": `Driving School which offers motor vehicle driving lessons`, "category": "Education" },

{ "key": "amenity", "value": "kindergarten", "label": "Kindergarten", "description": `For children too young for a regular school (also known as preschool, playschool or nursery school), in some countries including afternoon supervision of primary school children.`, "category": "Education" },

{ "key": "amenity", "value": "language_school", "label": "Language school", "description": `Language School: an educational institution where one studies a foreign language.`, "category": "Education" },

{ "key": "amenity", "value": "library", "label": "Library", "description": `A public library (municipal, university, …) to borrow books from.`, "category": "Education" },

{ "key": "amenity", "value": "toy_library", "label": "Toy library", "description": `A place to borrow games and toys, or play with them on site.`, "category": "Education" },

{ "key": "amenity", "value": "music_school", "label": "Music school", "description": `A music school, an educational institution specialized in the study, training, and research of music.`, "category": "Education" },

{ "key": "amenity", "value": "school", "label": "School", "description": `School and grounds - primary, middle and seconday schools`, "category": "Education" },

{ "key": "amenity", "value": "university", "label": "University", "description": `An university campus: an institute of higher education`, "category": "Education" },

{ "key": "Transportation", "value": "", "label": "", "description": ``, "category": "Transportation" },

{ "key": "amenity", "value": "bicycle_parking", "label": "Bicycle parking", "description": `Parking for bicycles`, "category": "Transportation" },

{ "key": "amenity", "value": "bicycle_repair_station", "label": "Bicycle repair station", "description": `General tools for self-service bicycle repairs, usually on the roadside; no service`, "category": "Transportation" },

{ "key": "amenity", "value": "bicycle_rental", "label": "Bicycle rental", "description": `Rent a bicycle`, "category": "Transportation" },

{ "key": "amenity", "value": "boat_rental", "label": "Boat rental", "description": `Rent a Boat`, "category": "Transportation" },

{ "key": "amenity", "value": "boat_sharing", "label": "Boat sharing", "description": `Share a Boat`, "category": "Transportation" },

{ "key": "amenity", "value": "bus_station", "label": "Bus station", "description": `May also be tagged as public_transport=station.`, "category": "Transportation" },

{ "key": "amenity", "value": "car_rental", "label": "Car rental", "description": `Rent a car`, "category": "Transportation" },

{ "key": "amenity", "value": "car_sharing", "label": "Car sharing", "description": `Share a car`, "category": "Transportation" },

{ "key": "amenity", "value": "car_wash", "label": "Car wash", "description": `Wash a car`, "category": "Transportation" },

{ "key": "amenity", "value": "vehicle_inspection", "label": "Vehicle inspection", "description": `Government vehicle inspection`, "category": "Transportation" },

{ "key": "amenity", "value": "charging_station", "label": "Charging station", "description": `Charging facility for electric vehicles`, "category": "Transportation" },

{ "key": "amenity", "value": "ferry_terminal", "label": "Ferry terminal", "description": `Ferry terminal/stop. A place where people/cars/etc. can board and leave a ferry.`, "category": "Transportation" },

{ "key": "amenity", "value": "fuel", "label": "Fuel", "description": `Petrol station; gas station; marine fuel; … Streets to petrol stations are often tagged highway=service.`, "category": "Transportation" },

{ "key": "amenity", "value": "grit_bin", "label": "Grit bin", "description": `A container that holds grit or a mixture of salt and grit.`, "category": "Transportation" },

{ "key": "amenity", "value": "motorcycle_parking", "label": "Motorcycle parking", "description": `Parking for motorcycles`, "category": "Transportation" },

{ "key": "amenity", "value": "parking", "label": "Parking", "description": `Car park. Nodes and areas (without access tag) will get a parking symbol. Areas will be coloured. Streets on car parking are often tagged highway=service and service=parking_aisle.`, "category": "Transportation" },

{ "key": "amenity", "value": "parking_entrance", "label": "Parking entrance", "description": `An entrance or exit to an underground or multi-storey parking facility. Group multiple parking entrances together with a relation using the tags type=site and site=parking. Do not mix with amenity=parking.`, "category": "Transportation" },

{ "key": "amenity", "value": "parking_space", "label": "Parking space", "description": `A single parking space. Group multiple parking spaces together with a relation using the tags type=site and site=parking. Do not mix with amenity=parking.`, "category": "Transportation" },

{ "key": "amenity", "value": "taxi", "label": "Taxi", "description": `A place where taxis wait for passengers.`, "category": "Transportation" },

{ "key": "Financial", "value": "", "label": "", "description": ``, "category": "Financial" },

{ "key": "amenity", "value": "atm", "label": "Atm", "description": `ATM or cash point: a device that provides the clients of a financial institution with access to financial transactions.`, "category": "Financial" },

{ "key": "amenity", "value": "bank", "label": "Bank", "description": `Bank or credit union: a financial establishment where customers can deposit and withdraw money, take loans, make investments and transfer funds.`, "category": "Financial" },

{ "key": "amenity", "value": "bureau_de_change", "label": "Bureau de change", "description": `Bureau de change, money changer, currency exchange, Wechsel, cambio – a place to change foreign bank notes and travellers cheques.`, "category": "Financial" },

{ "key": "Healthcare", "value": "", "label": "", "description": ``, "category": "Healthcare" },

{ "key": "amenity", "value": "baby_hatch", "label": "Baby hatch", "description": `A place where a baby can be, out of necessity, anonymously left to be safely cared for and perhaps adopted.`, "category": "Healthcare" },

{ "key": "amenity", "value": "clinic", "label": "Clinic", "description": `A medium-sized medical facility or health centre.`, "category": "Healthcare" },

{ "key": "amenity", "value": "dentist", "label": "Dentist", "description": `A dentist practice / surgery.`, "category": "Healthcare" },

{ "key": "amenity", "value": "doctors", "label": "Doctors", "description": `A doctor's practice / surgery.`, "category": "Healthcare" },

{ "key": "amenity", "value": "hospital", "label": "Hospital", "description": `A hospital providing in-patient medical treatment. Often used in conjunction with emergency=* to note whether the medical centre has emergency facilities (A&E (brit.) or ER (am.))`, "category": "Healthcare" },

{ "key": "amenity", "value": "nursing_home", "label": "Nursing home", "description": `Discouraged tag for a home for disabled or elderly persons who need permanent care. Use amenity=social_facility + social_facility=nursing_home now.`, "category": "Healthcare" },

{ "key": "amenity", "value": "pharmacy", "label": "Pharmacy", "description": `Pharmacy: a shop where a pharmacist sells medications dispensing=yes/no - availability of prescription-only medications`, "category": "Healthcare" },

{ "key": "amenity", "value": "social_facility", "label": "Social facility", "description": `A facility that provides social services: group & nursing homes, workshops for the disabled, homeless shelters, etc.`, "category": "Healthcare" },

{ "key": "amenity", "value": "veterinary", "label": "Veterinary", "description": `A place where a veterinary surgeon, also known as a veterinarian or vet, practices.`, "category": "Healthcare" },

{ "key": "Entertainment, Arts & Culture", "value": "", "label": "", "description": ``, "category": "Entertainment, Arts & Culture" },

{ "key": "amenity", "value": "arts_centre", "label": "Arts centre", "description": `A venue where a variety of arts are performed or conducted`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "brothel", "label": "Brothel", "description": `An establishment specifically dedicated to prostitution`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "casino", "label": "Casino", "description": `A gambling venue with at least one table game(e.g. roulette, blackjack) that takes bets on sporting and other events at agreed upon odds.`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "cinema", "label": "Cinema", "description": `A place where films are shown (US: movie theater)`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "community_centre", "label": "Community centre", "description": `A place mostly used for local events, festivities and group activities; including special interest and special age groups. .`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "conference_centre", "label": "Conference centre", "description": `A large building that is used to hold a convention`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "events_venue", "label": "Events venue", "description": `A building specifically used for organising events`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "fountain", "label": "Fountain", "description": `A fountain for cultural / decorational / recreational purposes.`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "gambling", "label": "Gambling", "description": `A place for gambling, not being a shop=bookmaker, shop=lottery, amenity=casino, or leisure=adult_gaming_centre.Games that are covered by this definition include bingo and pachinko.`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "love_hotel", "label": "Love hotel", "description": `A love hotel is a type of short-stay hotel operated primarily for the purpose of allowing guests privacy for sexual activities.`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "nightclub", "label": "Nightclub", "description": `A place to drink and dance (nightclub). The German word is "Disco" or "Discothek". Please don't confuse this with the German "Nachtclub" which is most likely amenity=stripclub.`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "planetarium", "label": "Planetarium", "description": `A planetarium.`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "public_bookcase", "label": "Public bookcase", "description": `A street furniture containing books. Take one or leave one.`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "social_centre", "label": "Social centre", "description": `A place for free and not-for-profit activities.`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "stripclub", "label": "Stripclub", "description": `A place that offers striptease or lapdancing (for sexual services use amenity=brothel).`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "studio", "label": "Studio", "description": `TV radio or recording studio`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "swingerclub", "label": "Swingerclub", "description": `A club where people meet to have a party and group sex.`, "category": "Entertainment, Arts, & Culture" },

{ "key": "amenity", "value": "theatre", "label": "Theatre", "description": `A theatre or opera house where live performances occur, such as plays, musicals and formal concerts. Use amenity=cinema for movie theaters.`, "category": "Entertainment, Arts, & Culture" },

{ "key": "Public Service", "value": "", "label": "", "description": ``, "category": "Public Service" },

{ "key": "amenity", "value": "courthouse", "label": "Courthouse", "description": `A building home to a court of law, where justice is dispensed`, "category": "Public Service" },

{ "key": "amenity", "value": "embassy", "label": "Embassy", "description": `Deprecated. An embassy, consulate or diplomatic office. Use office=diplomatic + diplomatic=embassy`, "category": "Public Service" },

{ "key": "amenity", "value": "fire_station", "label": "Fire station", "description": `A station of a fire brigade`, "category": "Public Service" },

{ "key": "amenity", "value": "police", "label": "Police", "description": `A police station where police officers patrol from and that is a first point of contact for civilians`, "category": "Public Service" },

{ "key": "amenity", "value": "post_box", "label": "Post box", "description": `A box for the reception of mail. Alternative mail-carriers can be tagged via operator=*`, "category": "Public Service" },

{ "key": "amenity", "value": "post_depot", "label": "Post depot", "description": `Post depot or delivery office, where letters and parcels are collected and sorted prior to delivery.`, "category": "Public Service" },

{ "key": "amenity", "value": "post_office", "label": "Post office", "description": `Post office building with postal services`, "category": "Public Service" },

{ "key": "amenity", "value": "prison", "label": "Prison", "description": `A prison or jail where people are incarcerated before trial or after conviction`, "category": "Public Service" },

{ "key": "amenity", "value": "ranger_station", "label": "Ranger station", "description": `National Park visitor headquarters: official park visitor facility with police, visitor information, permit services, etc`, "category": "Public Service" },

{ "key": "amenity", "value": "townhall", "label": "Townhall", "description": `Building where the administration of a village, town or city may be located, or just a community meeting place`, "category": "Public Service" },

{ "key": "Facilities", "value": "", "label": "", "description": ``, "category": "Facilities" },

{ "key": "amenity", "value": "bbq", "label": "Bbq", "description": `BBQ or Barbecue is a permanently built grill for cooking food, which is most typically used outdoors by the public. For example these may be found in city parks or at beaches. Use the tag fuel=* to specify the source of heating, such as fuel=wood;electric;charcoal. For mapping nearby table and chairs, see also the tag tourism=picnic_site. For mapping campfires and firepits, instead use the tag leisure=firepit.`, "category": "Facilities" },

{ "key": "amenity", "value": "bench", "label": "Bench", "description": `A bench to sit down and relax a bit`, "category": "Facilities" },

{ "key": "amenity", "value": "dog_toilet", "label": "Dog toilet", "description": `Area designated for dogs to urinate and excrete.`, "category": "Facilities" },

{ "key": "amenity", "value": "drinking_water", "label": "Drinking water", "description": `Drinking water is a place where humans can obtain potable water for consumption. Typically, the water is used for only drinking. Also known as a drinking fountain or bubbler.`, "category": "Facilities" },

{ "key": "amenity", "value": "give_box", "label": "Give box", "description": `A small facility where people drop off and pick up various types of items in the sense of free sharing and reuse.`, "category": "Facilities" },

{ "key": "amenity", "value": "parcel_locker", "label": "Parcel locker", "description": `Machine for picking up and sending parcels`, "category": "Facilities" },

{ "key": "amenity", "value": "shelter", "label": "Shelter", "description": `A small shelter against bad weather conditions. To additionally describe the kind of shelter use shelter_type=*.`, "category": "Facilities" },

{ "key": "amenity", "value": "shower", "label": "Shower", "description": `Public shower or bath.`, "category": "Facilities" },

{ "key": "amenity", "value": "telephone", "label": "Telephone", "description": `Public telephone`, "category": "Facilities" },

{ "key": "amenity", "value": "toilets", "label": "Toilets", "description": `Public toilets (might require a fee)`, "category": "Facilities" },

{ "key": "amenity", "value": "water_point", "label": "Water point", "description": `Place where you can get large amounts of drinking water`, "category": "Facilities" },

{ "key": "amenity", "value": "watering_place", "label": "Watering place", "description": `Place where water is contained and animals can drink`, "category": "Facilities" },

{ "key": "Waste Management", "value": "", "label": "", "description": ``, "category": "Waste Management" },

{ "key": "amenity", "value": "sanitary_dump_station", "label": "Sanitary dump station", "description": `A place for depositing human waste from a toilet holding tank.`, "category": "Waste Management" },

{ "key": "amenity", "value": "recycling", "label": "Recycling", "description": `Recycling facilities (bottle banks, etc.). Combine with recycling_type=container for containers or recycling_type=centre for recycling centres.`, "category": "Waste Management" },

{ "key": "amenity", "value": "waste_basket", "label": "Waste basket", "description": `A single small container for depositing garbage that is easily accessible for pedestrians.`, "category": "Waste Management" },

{ "key": "amenity", "value": "waste_disposal", "label": "Waste disposal", "description": `A medium or large disposal bin, typically for bagged up household or industrial waste.`, "category": "Waste Management" },

{ "key": "amenity", "value": "waste_transfer_station", "label": "Waste transfer station", "description": `A waste transfer station is a location that accepts, consolidates and transfers waste in bulk.`, "category": "Waste Management" },

{ "key": "Others", "value": "", "label": "", "description": ``, "category": "Others" },

{ "key": "amenity", "value": "animal_boarding", "label": "Animal boarding", "description": `A facility where you, paying a fee, can bring your animal for a limited period of time (e.g. for holidays)`, "category": "Others" },

{ "key": "amenity", "value": "animal_breeding", "label": "Animal breeding", "description": `A facility where animals are bred, usually to sell them`, "category": "Others" },

{ "key": "amenity", "value": "animal_shelter", "label": "Animal shelter", "description": `A shelter that recovers animals in trouble`, "category": "Others" },

{ "key": "amenity", "value": "baking_oven", "label": "Baking oven", "description": `An oven used for baking bread and similar, for example inside a building=bakehouse.`, "category": "Others" },

{ "key": "amenity", "value": "childcare", "label": "Childcare", "description": `A place where children of different ages are looked after which is not an amenity=kindergarten or preschool.`, "category": "Others" },

{ "key": "amenity", "value": "clock", "label": "Clock", "description": `A public visible clock`, "category": "Others" },

{ "key": "amenity", "value": "crematorium", "label": "Crematorium", "description": `A place where dead human bodies are burnt`, "category": "Others" },

{ "key": "amenity", "value": "dive_centre", "label": "Dive centre", "description": `A dive center is the base location where sports divers usually start scuba diving or make dive guided trips at new locations.`, "category": "Others" },

{ "key": "amenity", "value": "funeral_hall", "label": "Funeral hall", "description": `A place for holding a funeral ceremony, other than a place of worship.`, "category": "Others" },

{ "key": "amenity", "value": "grave_yard", "label": "Grave yard", "description": `A (smaller) place of burial, often you'll find a church nearby. Large places should be landuse=cemetery instead.`, "category": "Others" },

{ "key": "amenity", "value": "gym", "label": "Gym", "description": `Deprecated. Use leisure=fitness_centre or leisure=sports_centre instead. A place which houses exercise equipment for the purpose of physical exercise.`, "category": "Others" },

{ "key": "amenity", "value": "hunting_stand", "label": "Hunting stand", "description": `A hunting stand: an open or enclosed platform used by hunters to place themselves at an elevated height above the terrain`, "category": "Others" },

{ "key": "amenity", "value": "internet_cafe", "label": "Internet cafe", "description": `A place whose principal role is providing internet services to the public.`, "category": "Others" },

{ "key": "amenity", "value": "kitchen", "label": "Kitchen", "description": `A public kitchen in a facility to use by everyone or customers`, "category": "Others" },

{ "key": "amenity", "value": "kneipp_water_cure", "label": "Kneipp water cure", "description": `Outdoor foot bath facility. Usually this is a pool with cold water and handrail. Popular in German speaking countries.`, "category": "Others" },

{ "key": "amenity", "value": "lounger", "label": "Lounger", "description": `An object for people to lie down.`, "category": "Others" },

{ "key": "amenity", "value": "marketplace", "label": "Marketplace", "description": `A marketplace where goods and services are traded daily or weekly.`, "category": "Others" },

{ "key": "amenity", "value": "monastery", "label": "Monastery", "description": `Monastery is the location of a monastery or a building in which monks and nuns live.`, "category": "Others" },

{ "key": "amenity", "value": "photo_booth", "label": "Photo booth", "description": `Photo Booth – A stand to create instant photo.`, "category": "Others" },

{ "key": "amenity", "value": "place_of_mourning", "label": "Place of mourning", "description": `A room or building where families and friends can come, before the funeral, and view the body of the person who has died.`, "category": "Others" },

{ "key": "amenity", "value": "place_of_worship", "label": "Place of worship", "description": `A church, mosque, or temple, etc. Note that you also need religion=*, usually denomination=* and preferably name=* as well as amenity=place_of_worship. See the article for details.`, "category": "Others" },

{ "key": "amenity", "value": "public_bath", "label": "Public bath", "description": `A location where the public may bathe in common, etc. japanese onsen, turkish bath, hot spring`, "category": "Others" },

{ "key": "amenity", "value": "public_building", "label": "Public building", "description": `A generic public building. Don't use! See office=government.`, "category": "Others" },

{ "key": "amenity", "value": "refugee_site", "label": "Refugee site", "description": `A human settlement sheltering refugees or internally displaced persons`, "category": "Others" },

{ "key": "amenity", "value": "vending_machine", "label": "Vending machine", "description": `A machine selling goods – food, tickets, newspapers, etc. Add type of goods using vending=*`, "category": "Others" },

{ "key": "amenity", "value": "user defined", "label": "User defined", "description": `All commonly used values according to Taginfo`, "category": "Others" },

{ "key": "barrier", "value": "cable_barrier", "label": "Cable barrier", "description": `A road side or median barrier made of steel wire ropes mounted on weak posts.`, "category": "Linear Barriers" },

{ "key": "barrier", "value": "city_wall", "label": "City wall", "description": `A fortification used to defend settlements in ancient to modern times.`, "category": "Linear Barriers" },

{ "key": "barrier", "value": "ditch", "label": "Ditch", "description": `A man made ditch or trench to prevent access to the other side.`, "category": "Linear Barriers" },

{ "key": "barrier", "value": "fence", "label": "Fence", "description": `A freestanding structure designed to restrict or prevent movement across a boundary, generally distinguished from a wall by the lightness of its construction.`, "category": "Linear Barriers" },

{ "key": "barrier", "value": "guard_rail", "label": "Guard rail", "description": `A rail, typically metal, designed to keep vehicles within their roadway and prevent dangerous collisions`, "category": "Linear Barriers" },

{ "key": "barrier", "value": "handrail", "label": "Handrail", "description": `A rail designed to be grasped by the hand so as to provide stability or support.`, "category": "Linear Barriers" },

{ "key": "barrier", "value": "hedge", "label": "Hedge", "description": `A line of closely spaced shrubs and tree species, which form a barrier or mark the boundary of an area.`, "category": "Linear Barriers" },

{ "key": "barrier", "value": "kerb", "label": "Kerb", "description": `A stone edging to a pavement or raised path (right side is bottom, left side is top).`, "category": "Linear Barriers" },

{ "key": "barrier", "value": "retaining_wall", "label": "Retaining wall", "description": `A structure that holds back soil or rock from a building, structure or area.`, "category": "Linear Barriers" },

{ "key": "barrier", "value": "wall", "label": "Wall", "description": `A freestanding structure, designed to restrict or prevent movement across a boundary, typically made from solid brick, concrete or rocks, and almost always built so that it is opaque to vision.`, "category": "Linear Barriers" },

{ "key": "barrier", "value": "block", "label": "Block", "description": `One or more large immobile block(s) usually barring free access along a way.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "bollard", "label": "Bollard", "description": `One or more solid (usually concrete or metal) pillar(s) used to control traffic.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "border_control", "label": "Border control", "description": `A control point at an international border between two countries.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "bump_gate", "label": "Bump gate", "description": `A drive-through gate used in rural areas to provide a barrier to livestock that does not require the driver to exit the vehicle.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "bus_trap", "label": "Bus trap", "description": `A short section of the roadway where there is a deep dip in the middle to prevent passage by some traffic.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "cattle_grid", "label": "Cattle grid", "description": `A hole in the road surface covered in a series of bars that allow wheeled vehicles but not animals to cross.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "chain", "label": "Chain", "description": `A chain used to prevent motorised vehicles.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "cycle_barrier", "label": "Cycle barrier", "description": `A barrier along a path that slows or prevents access for bicycle users.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "debris", "label": "Debris", "description": `Debris blocking a road`, "category": "Access control on highways" },

{ "key": "barrier", "value": "entrance", "label": "Entrance", "description": `An opening or gap in a barrier.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "full-height_turnstile", "label": "Full-height turnstile", "description": `A full-height turnstile.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "gate", "label": "Gate", "description": `A section in a wall or fence which can be opened to allow access.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "hampshire_gate", "label": "Hampshire gate", "description": `A section of wire fence which can be removed temporarily.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "height_restrictor", "label": "Height restrictor", "description": `A height restrictor which prevents access of vehicles higher than a set limit.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "horse_stile", "label": "Horse stile", "description": `A horse stile allows pedestrians and horses to cross a gap through a fence`, "category": "Access control on highways" },

{ "key": "barrier", "value": "jersey_barrier", "label": "Jersey barrier", "description": `A barrier made of heavy prefabricated blocks.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "kissing_gate", "label": "Kissing gate", "description": `A type of gate where you have to go into an enclosure and open a gate to get through.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "lift_gate", "label": "Lift gate", "description": `A bar or pole pivoted (rotates upwards to open) in such a way as to allow the boom to block vehicular access through a controlled point.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "log", "label": "Log", "description": `A log blocking access.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "motorcycle_barrier", "label": "Motorcycle barrier", "description": `A barrier along a path preventing access by motorcycles.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "rope", "label": "Rope", "description": `A flexible barrier made of rope.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "sally_port", "label": "Sally port", "description": `A secure, controlled entryway to a fortification or prison.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "spikes", "label": "Spikes", "description": `Spikes on the ground preventing unauthorized access.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "stile", "label": "Stile", "description": `A structure which provides people a passage through or over a boundary via steps, ladders or narrow gaps.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "sump_buster", "label": "Sump buster", "description": `A barrier to stop cars (two tracked vehicles with less than a certain ground clearance and width between tracks).`, "category": "Access control on highways" },

{ "key": "barrier", "value": "swing_gate", "label": "Swing gate", "description": `A gate consisting of a bar or pole pivoted (rotates sidewards to open) in such a way as to allow the boom to block vehicular access through a controlled point.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "toll_booth", "label": "Toll booth", "description": `A place where a road usage toll or fee is collected.`, "category": "Access control on highways" },

{ "key": "barrier", "value": "turnstile", "label": "Turnstile", "description": `A turnstile, a passage on foot designed to allow one person at a time to pass`, "category": "Access control on highways" },

{ "key": "barrier", "value": "yes", "label": "Yes", "description": `Unspecific barrier value, it is always better to use more specific one if possible`, "category": "Access control on highways" },

{ "key": "boundary", "value": "aboriginal_lands", "label": "Aboriginal lands", "description": `A boundary representing official reservation boundaries of recognized aboriginal / indigenous / native peoples.`, "category": "Boundary" },

{ "key": "boundary", "value": "administrative", "label": "Administrative", "description": `An administrative boundary. Subdivisions of areas/territories/jurisdictions recognised by governments or other organisations for administrative purposes. These range from large groups of nation states right down to small administrative districts and suburbs, as indicated by the 'admin_level=*' combo tag.`, "category": "Boundary" },

{ "key": "boundary", "value": "border_zone", "label": "Border zone", "description": `A border zone is an area near the border where special restrictions on movement apply. Usually a permit is required for visiting.`, "category": "Boundary" },

{ "key": "boundary", "value": "forest", "label": "Forest", "description": `A delimited forest is a land which is predominantly wooded and which is, for this reason, given defined boundaries. It may cover different tree stands, non-wooded areas, highways… but all the area within the boundaries are considered and managed as a single forest.`, "category": "Boundary" },

{ "key": "boundary", "value": "forest_compartment", "label": "Forest compartment", "description": `A forest compartment is a numbered sub-division within a delimited forest, physically materialized with visible, typically cleared, boundaries.`, "category": "Boundary" },

{ "key": "boundary", "value": "hazard", "label": "Hazard", "description": `A designated hazardous area, with a potential source of damage to health, life, property, or any other interest of value.`, "category": "Boundary" },

{ "key": "boundary", "value": "maritime", "label": "Maritime", "description": `Maritime boundaries which are not administrative boundaries: the Baseline, Contiguous Zone and EEZ (Exclusive Economic Zone).`, "category": "Boundary" },

{ "key": "boundary", "value": "marker", "label": "Marker", "description": `A boundary marker, border marker, boundary stone, or border stone is a robust physical marker that identifies the start of a land boundary or the change in a boundary, especially a change in direction of a boundary. See also historic=boundary_stone`, "category": "Boundary" },

{ "key": "boundary", "value": "national_park", "label": "National park", "description": `Area of outstanding natural beauty, set aside for conservation and for recreation (Other languages).`, "category": "Boundary" },

{ "key": "boundary", "value": "place", "label": "Place", "description": `boundary=place is commonly used to map the boundaries of a place=*, when these boundaries can be defined but these are not administrative boundaries.`, "category": "Boundary" },

{ "key": "boundary", "value": "political", "label": "Political", "description": `Electoral boundaries`, "category": "Boundary" },

{ "key": "boundary", "value": "postal_code", "label": "Postal code", "description": `Postal code boundaries`, "category": "Boundary" },

{ "key": "boundary", "value": "protected_area", "label": "Protected area", "description": `Protected areas, such as for national parks, marine protection areas, heritage sites, wilderness, cultural assets and similar.`, "category": "Boundary" },

{ "key": "boundary", "value": "special_economic_zone", "label": "Special economic zone", "description": `A government-defined area in which business and trade laws are different.`, "category": "Boundary" },

{ "key": "boundary", "value": "disputed", "label": "Disputed", "description": `An area of landed claimed by two or more parties (use with caution). See also Disputed territories.`, "category": "Boundary" },

{ "key": "boundary", "value": "user defined", "label": "User defined", "description": `All commonly used values according to Taginfo`, "category": "Boundary" },

{ "key": "building", "value": "apartments", "label": "Apartments", "description": ``, "category": "Building" },

{ "key": "building", "value": "barracks", "label": "Barracks", "description": ``, "category": "Building" },

{ "key": "building", "value": "bungalow", "label": "Bungalow", "description": ``, "category": "Building" },

{ "key": "building", "value": "cabin", "label": "Cabin", "description": ``, "category": "Building" },

{ "key": "building", "value": "detached", "label": "Detached", "description": ``, "category": "Building" },

{ "key": "building", "value": "dormitory", "label": "Dormitory", "description": ``, "category": "Building" },

{ "key": "building", "value": "farm", "label": "Farm", "description": ``, "category": "Building" },

{ "key": "building", "value": "ger", "label": "Ger", "description": ``, "category": "Building" },

{ "key": "building", "value": "hotel", "label": "Hotel", "description": ``, "category": "Building" },

{ "key": "building", "value": "house", "label": "House", "description": ``, "category": "Building" },

{ "key": "building", "value": "houseboat", "label": "Houseboat", "description": ``, "category": "Building" },

{ "key": "building", "value": "residential", "label": "Residential", "description": ``, "category": "Building" },

{ "key": "building", "value": "semidetached_house", "label": "Semidetached house", "description": ``, "category": "Building" },

{ "key": "building", "value": "static_caravan", "label": "Static caravan", "description": ``, "category": "Building" },

{ "key": "building", "value": "terrace", "label": "Terrace", "description": ``, "category": "Building" },

{ "key": "building", "value": "commercial", "label": "Commercial", "description": ``, "category": "Building" },

{ "key": "building", "value": "industrial", "label": "Industrial", "description": ``, "category": "Building" },

{ "key": "building", "value": "kiosk", "label": "Kiosk", "description": ``, "category": "Building" },

{ "key": "building", "value": "office", "label": "Office", "description": ``, "category": "Building" },

{ "key": "building", "value": "retail", "label": "Retail", "description": ``, "category": "Building" },

{ "key": "building", "value": "supermarket", "label": "Supermarket", "description": ``, "category": "Building" },

{ "key": "building", "value": "warehouse", "label": "Warehouse", "description": ``, "category": "Building" },

{ "key": "building", "value": "cathedral", "label": "Cathedral", "description": ``, "category": "Building" },

{ "key": "building", "value": "chapel", "label": "Chapel", "description": ``, "category": "Building" },

{ "key": "building", "value": "church", "label": "Church", "description": ``, "category": "Building" },

{ "key": "building", "value": "kingdom_hall", "label": "Kingdom hall", "description": ``, "category": "Building" },

{ "key": "building", "value": "monastery", "label": "Monastery", "description": ``, "category": "Building" },

{ "key": "building", "value": "mosque", "label": "Mosque", "description": ``, "category": "Building" },

{ "key": "building", "value": "presbytery", "label": "Presbytery", "description": ``, "category": "Building" },

{ "key": "building", "value": "religious", "label": "Religious", "description": ``, "category": "Building" },

{ "key": "building", "value": "shrine", "label": "Shrine", "description": ``, "category": "Building" },

{ "key": "building", "value": "synagogue", "label": "Synagogue", "description": ``, "category": "Building" },

{ "key": "building", "value": "temple", "label": "Temple", "description": ``, "category": "Building" },

{ "key": "building", "value": "bakehouse", "label": "Bakehouse", "description": ``, "category": "Building" },

{ "key": "building", "value": "civic", "label": "Civic", "description": ``, "category": "Building" },

{ "key": "building", "value": "college", "label": "College", "description": ``, "category": "Building" },

{ "key": "building", "value": "fire_station", "label": "Fire station", "description": ``, "category": "Building" },

{ "key": "building", "value": "government", "label": "Government", "description": ``, "category": "Building" },

{ "key": "building", "value": "hospital", "label": "Hospital", "description": ``, "category": "Building" },

{ "key": "building", "value": "kindergarten", "label": "Kindergarten", "description": ``, "category": "Building" },

{ "key": "building", "value": "public", "label": "Public", "description": ``, "category": "Building" },

{ "key": "building", "value": "school", "label": "School", "description": ``, "category": "Building" },

{ "key": "building", "value": "toilets", "label": "Toilets", "description": ``, "category": "Building" },

{ "key": "building", "value": "train_station", "label": "Train station", "description": ``, "category": "Building" },

{ "key": "building", "value": "transportation", "label": "Transportation", "description": ``, "category": "Building" },

{ "key": "building", "value": "university", "label": "University", "description": ``, "category": "Building" },

{ "key": "building", "value": "barn", "label": "Barn", "description": ``, "category": "Building" },

{ "key": "building", "value": "conservatory", "label": "Conservatory", "description": ``, "category": "Building" },

{ "key": "building", "value": "cowshed", "label": "Cowshed", "description": ``, "category": "Building" },

{ "key": "building", "value": "farm_auxiliary", "label": "Farm auxiliary", "description": ``, "category": "Building" },

{ "key": "building", "value": "greenhouse", "label": "Greenhouse", "description": ``, "category": "Building" },

{ "key": "building", "value": "slurry_tank", "label": "Slurry tank", "description": ``, "category": "Building" },

{ "key": "building", "value": "stable", "label": "Stable", "description": ``, "category": "Building" },

{ "key": "building", "value": "sty", "label": "Sty", "description": ``, "category": "Building" },

{ "key": "building", "value": "grandstand", "label": "Grandstand", "description": ``, "category": "Building" },

{ "key": "building", "value": "pavilion", "label": "Pavilion", "description": ``, "category": "Building" },

{ "key": "building", "value": "riding_hall", "label": "Riding hall", "description": ``, "category": "Building" },

{ "key": "building", "value": "sports_hall", "label": "Sports hall", "description": ``, "category": "Building" },

{ "key": "building", "value": "stadium", "label": "Stadium", "description": ``, "category": "Building" },

{ "key": "building", "value": "hangar", "label": "Hangar", "description": ``, "category": "Building" },

{ "key": "building", "value": "hut", "label": "Hut", "description": ``, "category": "Building" },

{ "key": "building", "value": "shed", "label": "Shed", "description": ``, "category": "Building" },

{ "key": "building", "value": "carport", "label": "Carport", "description": ``, "category": "Building" },

{ "key": "building", "value": "garage", "label": "Garage", "description": ``, "category": "Building" },

{ "key": "building", "value": "garages", "label": "Garages", "description": ``, "category": "Building" },

{ "key": "building", "value": "parking", "label": "Parking", "description": ``, "category": "Building" },

{ "key": "building", "value": "digester", "label": "Digester", "description": ``, "category": "Building" },

{ "key": "building", "value": "service", "label": "Service", "description": ``, "category": "Building" },

{ "key": "building", "value": "transformer_tower", "label": "Transformer tower", "description": ``, "category": "Building" },

{ "key": "building", "value": "water_tower", "label": "Water tower", "description": ``, "category": "Building" },

{ "key": "building", "value": "beach_hut", "label": "Beach hut", "description": ``, "category": "Building" },

{ "key": "building", "value": "bunker", "label": "Bunker", "description": ``, "category": "Building" },

{ "key": "building", "value": "bridge", "label": "Bridge", "description": ``, "category": "Building" },

{ "key": "building", "value": "castle", "label": "Castle", "description": ``, "category": "Building" },

{ "key": "building", "value": "construction", "label": "Construction", "description": ``, "category": "Building" },

{ "key": "building", "value": "container", "label": "Container", "description": ``, "category": "Building" },

{ "key": "building", "value": "gatehouse", "label": "Gatehouse", "description": ``, "category": "Building" },

{ "key": "building", "value": "military", "label": "Military", "description": ``, "category": "Building" },

{ "key": "building", "value": "roof", "label": "Roof", "description": ``, "category": "Building" },

{ "key": "building", "value": "ruins", "label": "Ruins", "description": ``, "category": "Building" },

{ "key": "building", "value": "tent", "label": "Tent", "description": ``, "category": "Building" },

{ "key": "building", "value": "tree_house", "label": "Tree house", "description": ``, "category": "Building" },

{ "key": "building", "value": "yes", "label": "Yes", "description": ``, "category": "Building" },

{ "key": "building", "value": "user defined", "label": "User defined", "description": ``, "category": "Building" },

{ "key": "craft", "value": "agricultural_engines", "label": "Agricultural engines", "description": `A place where engines and tools for agricultural use are planned and constructed.`, "category": "Craft" },

{ "key": "craft", "value": "atelier", "label": "Atelier", "description": `A place where visual artists work`, "category": "Craft" },

{ "key": "craft", "value": "bakery", "label": "Bakery", "description": `A workplace for fresh bakery goods. No shop.`, "category": "Craft" },

{ "key": "craft", "value": "basket_maker", "label": "Basket maker", "description": `A person weaving baskets`, "category": "Craft" },

{ "key": "craft", "value": "beekeeper", "label": "Beekeeper", "description": `The workplace of a beekeeper (apiarist).`, "category": "Craft" },

{ "key": "craft", "value": "blacksmith", "label": "Blacksmith", "description": `A place where a blacksmith forges tools, horseshoes, etc. from iron.`, "category": "Craft" },

{ "key": "craft", "value": "boatbuilder", "label": "Boatbuilder", "description": `A workplace where boats are planned and constructed`, "category": "Craft" },

{ "key": "craft", "value": "bookbinder", "label": "Bookbinder", "description": `A workplace for physically assembling a book from a number of sheets of paper.`, "category": "Craft" },

{ "key": "craft", "value": "brewery", "label": "Brewery", "description": `A dedicated building for the making of beer.`, "category": "Craft" },

{ "key": "craft", "value": "builder", "label": "Builder", "description": `A workplace or office of a tradesman who performs structural alterations and additions to buildings.`, "category": "Craft" },

{ "key": "craft", "value": "cabinet_maker", "label": "Cabinet maker", "description": `A person who makes fine wooden furniture`, "category": "Craft" },

{ "key": "craft", "value": "car_painter", "label": "Car painter", "description": `A place specializing in painting cars.`, "category": "Craft" },

{ "key": "craft", "value": "carpenter", "label": "Carpenter", "description": `A workplace or office of carpenters that work with timber to construct, install and maintain buildings, furniture, and other objects.`, "category": "Craft" },

{ "key": "craft", "value": "carpet_layer", "label": "Carpet layer", "description": `A carpet layer is a tradesmen who specializes in laying carpets`, "category": "Craft" },

{ "key": "craft", "value": "caterer", "label": "Caterer", "description": `A workplace or office of one who prepares customized meals for takeout, or provides prepared meals or supplies to a group at social gatherings`, "category": "Craft" },

{ "key": "craft", "value": "chimney_sweeper", "label": "Chimney sweeper", "description": `A workplace or office of a person who cleans chimneys for a living.`, "category": "Craft" },

{ "key": "craft", "value": "cleaning", "label": "Cleaning", "description": `Workplace or office of a person who cleaning building, industrial facilities or windows.`, "category": "Craft" },

{ "key": "craft", "value": "clockmaker", "label": "Clockmaker", "description": `A workplace or office of a clockmaker that is building, repairing or engraving clocks of all sorts.`, "category": "Craft" },

{ "key": "craft", "value": "confectionery", "label": "Confectionery", "description": `A place where the set of food items that are rich in sugar, any one or type of which is called a confection is produced.`, "category": "Craft" },

{ "key": "craft", "value": "cooper", "label": "Cooper", "description": `A person or company that manufacture of containers and vessels mainly made of wood.`, "category": "Craft" },

{ "key": "craft", "value": "dental_technician", "label": "Dental technician", "description": `A workplace for dental technician who constructs custom-made restorative and dental appliances`, "category": "Craft" },

{ "key": "craft", "value": "distillery", "label": "Distillery", "description": `An establishment for distilling, especially for distilling alcoholic liquors.`, "category": "Craft" },

{ "key": "craft", "value": "door_construction", "label": "Door construction", "description": `A workplace of someone constructing doors`, "category": "Craft" },

{ "key": "craft", "value": "dressmaker", "label": "Dressmaker", "description": `Dressmaker is a person who makes custom clothing for women, such as dresses, blouses, and evening gowns.`, "category": "Craft" },

{ "key": "craft", "value": "electronics_repair", "label": "Electronics repair", "description": `Repair shops and service centers which provides repair of computers, phones, appliance etc.`, "category": "Craft" },

{ "key": "craft", "value": "embroiderer", "label": "Embroiderer", "description": `Needlework or textile artist`, "category": "Craft" },

{ "key": "craft", "value": "electrician", "label": "Electrician", "description": `A person or company that works with electricity or electrical systems.`, "category": "Craft" },

{ "key": "craft", "value": "engraver", "label": "Engraver", "description": `A workplace or office of an engraver.`, "category": "Craft" },

{ "key": "craft", "value": "floorer", "label": "Floorer", "description": `A workplace or office of a floorer.`, "category": "Craft" },

{ "key": "craft", "value": "gardener", "label": "Gardener", "description": `A workplace or office of a garden designer or a landscape gardener.`, "category": "Craft" },

{ "key": "craft", "value": "glaziery", "label": "Glaziery", "description": `A place where residential, commercial, and artistic glass is selected, cut, installed, replaced, and removed`, "category": "Craft" },

{ "key": "craft", "value": "goldsmith", "label": "Goldsmith", "description": `The workplace of a person who forges things out of gold, especially jewelry.`, "category": "Craft" },

{ "key": "craft", "value": "grinding_mill", "label": "Grinding mill", "description": `A device that breaks solid materials into smaller pieces by grinding, crushing, or cutting. The aftermath is powdered product, not liquid extract like oil mill.`, "category": "Craft" },

{ "key": "craft", "value": "handicraft", "label": "Handicraft", "description": `A place where useful and decorative devices are made completely by hand or using only simple tools`, "category": "Craft" },

{ "key": "craft", "value": "hvac", "label": "Hvac", "description": `A workplace or office of an HVAC system designer (Heating, Ventilating, and Air Conditioning)`, "category": "Craft" },

{ "key": "craft", "value": "insulation", "label": "Insulation", "description": `A workplace or office of a person who does thermal insulation in buildings.`, "category": "Craft" },

{ "key": "craft", "value": "interior_work", "label": "Interior work", "description": `Workplace or office of a person who build non-load-bearing interior walls, especially drywall.`, "category": "Craft" },

{ "key": "craft", "value": "jeweller", "label": "Jeweller", "description": `A place where necklaces, rings, brooches, earrings and bracelets and other personal adornments are created or repaired.`, "category": "Craft" },

{ "key": "craft", "value": "joiner", "label": "Joiner", "description": `An artisan who builds things by joining pieces of wood, particularly furniture or ornamental work.`, "category": "Craft" },

{ "key": "craft", "value": "key_cutter", "label": "Key cutter", "description": `A place where keys can be duplicated from originals.`, "category": "Craft" },

{ "key": "craft", "value": "locksmith", "label": "Locksmith", "description": `A place where locks and keys are created or repaired.`, "category": "Craft" },

{ "key": "craft", "value": "metal_construction", "label": "Metal construction", "description": `Workplace or office of a person who work with metal. This applies to: planning, construction, trade, repair.`, "category": "Craft" },

{ "key": "craft", "value": "mint", "label": "Mint", "description": `A place where coins and medals are hand crafted.`, "category": "Craft" },

{ "key": "craft", "value": "musical_instrument", "label": "Musical instrument", "description": `A craftsman creating musical instruments`, "category": "Craft" },

{ "key": "craft", "value": "oil_mill", "label": "Oil mill", "description": `A mill designed to crush or bruise oil-bearing seeds, such as linseed or peanuts, or other oil-rich vegetable material.`, "category": "Craft" },

{ "key": "craft", "value": "optician", "label": "Optician", "description": `A place where lenses for the correction of a person's vision are designed, fitted and dispensed.`, "category": "Craft" },

{ "key": "craft", "value": "organ_builder", "label": "Organ builder", "description": `Organ building is the profession of designing, building, restoring and maintaining pipe organs.`, "category": "Craft" },

{ "key": "craft", "value": "painter", "label": "Painter", "description": `A workplace or office of a house painter which is a tradesman responsible for the painting and decorating of buildings.`, "category": "Craft" },

{ "key": "craft", "value": "parquet_layer", "label": "Parquet layer", "description": `A workplace or office of a parquet layer.`, "category": "Craft" },

{ "key": "craft", "value": "paver", "label": "Paver", "description": `The workshop or office of a paver`, "category": "Craft" },

{ "key": "craft", "value": "photographer", "label": "Photographer", "description": `A workplace or office of a person who takes photographs using a camera.`, "category": "Craft" },

{ "key": "craft", "value": "photographic_laboratory", "label": "Photographic laboratory", "description": `A place where photos taken on a film or digital images are transformed into a more permanent form, often on paper or plastic foil.`, "category": "Craft" },

{ "key": "craft", "value": "piano_tuner", "label": "Piano tuner", "description": `A piano tuner or technician. A professional that tunes, regulates and makes the maintenance of pianos. Most of them repair simple problems and some restore a whole piano.`, "category": "Craft" },

{ "key": "craft", "value": "plasterer", "label": "Plasterer", "description": `A workplace or office of a tradesman who works with plaster, such as forming a layer of plaster on an interior wall or plaster decorative moldings on ceilings or walls.`, "category": "Craft" },

{ "key": "craft", "value": "plumber", "label": "Plumber", "description": `A workplace or office of a skilled tradesperson who specializes in (drinking) water supply, sewage and drainage systems`, "category": "Craft" },

{ "key": "craft", "value": "pottery", "label": "Pottery", "description": `A place where earthenware, stoneware and porcelain and other ceramic ware is made by potters.`, "category": "Craft" },

{ "key": "craft", "value": "printer", "label": "Printer", "description": `A small printing business which produces published works such as newspapers, books, magazines, etc.`, "category": "Craft" },

{ "key": "craft", "value": "printmaker", "label": "Printmaker", "description": `A producer of fine art prints.`, "category": "Craft" },

{ "key": "craft", "value": "rigger", "label": "Rigger", "description": `The workplace of a person who makes masts, yards, sails, and cordage for sailboats and sailing ships (or possibly a person who works on ropes, booms, lifts, hoists and the like for a stage production)`, "category": "Craft" },

{ "key": "craft", "value": "roofer", "label": "Roofer", "description": `A workplace or office of a tradesman who is specialized in roof covering and sealing.`, "category": "Craft" },

{ "key": "craft", "value": "saddler", "label": "Saddler", "description": `A place where saddles or accessories for cars and boats are produced or repaired.`, "category": "Craft" },

{ "key": "craft", "value": "sailmaker", "label": "Sailmaker", "description": `A workshop of a sailmaker who cleans, repairs and makes sails.`, "category": "Craft" },

{ "key": "craft", "value": "sawmill", "label": "Sawmill", "description": `A sawmill is a facility where logs are cut into timber`, "category": "Craft" },

{ "key": "craft", "value": "scaffolder", "label": "Scaffolder", "description": `A workplace or office of a tradesman who builds temporary structure used to support people and material in the construction or repair of buildings and other large structures.`, "category": "Craft" },

{ "key": "craft", "value": "sculptor", "label": "Sculptor", "description": `The workplace of a sculptor.`, "category": "Craft" },

{ "key": "craft", "value": "shoemaker", "label": "Shoemaker", "description": `A place where shoes, boots, sandals, clogs and moccasins are created, repaired or altered to fit personal needs.`, "category": "Craft" },

{ "key": "craft", "value": "signmaker", "label": "Signmaker", "description": `Signmaker`, "category": "Craft" },

{ "key": "craft", "value": "stand_builder", "label": "Stand builder", "description": `A workplace of a company that builds stands/booths for fairs.`, "category": "Craft" },

{ "key": "craft", "value": "stonemason", "label": "Stonemason", "description": `A place where rough pieces of rock are shaped into accurate geometrical shapes.`, "category": "Craft" },

{ "key": "craft", "value": "stove_fitter", "label": "Stove fitter", "description": `A workplace/office of a person / company who designs and builds stoves / tiled stoves.`, "category": "Craft" },

{ "key": "craft", "value": "sun_protection", "label": "Sun protection", "description": `A place where sun protection is made, repaired, or delivered for assembly, especially awnings and shutters.`, "category": "Craft" },

{ "key": "craft", "value": "tailor", "label": "Tailor", "description": `A place where clothing is made, repaired, or altered professionally, especially suits and men's clothing.`, "category": "Craft" },

{ "key": "craft", "value": "tiler", "label": "Tiler", "description": `A workplace or office of a person who lays tiles on floors, swimming pools and such.`, "category": "Craft" },

{ "key": "craft", "value": "tinsmith", "label": "Tinsmith", "description": `A person who makes and repairs things made of light-coloured metal, particularly tinware.`, "category": "Craft" },

{ "key": "craft", "value": "toolmaker", "label": "Toolmaker", "description": `A workplace of a company that builds complex tools, machine tools, moulds, gauges,... .`, "category": "Craft" },

{ "key": "craft", "value": "turner", "label": "Turner", "description": `A workplace or office of a turner.`, "category": "Craft" },

{ "key": "craft", "value": "upholsterer", "label": "Upholsterer", "description": `A place where furniture, especially seats are provided with padding, springs, webbing, and fabric or leather covers.`, "category": "Craft" },

{ "key": "craft", "value": "watchmaker", "label": "Watchmaker", "description": `A watchmaker is an artisan who makes and repairs watches. Today due to industrial production they mostly repair watches.`, "category": "Craft" },

{ "key": "craft", "value": "water_well_drilling", "label": "Water well drilling", "description": `A company that drills water wells.`, "category": "Craft" },

{ "key": "craft", "value": "window_construction", "label": "Window construction", "description": `A workplace of someone constructing windows`, "category": "Craft" },

{ "key": "craft", "value": "winery", "label": "Winery", "description": `A place where wine is produced`, "category": "Craft" },

{ "key": "emergency", "value": "ambulance_station", "label": "Ambulance station", "description": `A ambulance station is a structure or other area set aside for storage of ambulance vehicles, medical equipment, personal protective equipment, and other medical supplies.`, "category": "Medical Rescue" },

{ "key": "emergency", "value": "defibrillator", "label": "Defibrillator", "description": `Defibrillator, an external and portable electronic device that diagnoses and can correct arrhythmia of the heart automatically (aka Automated External Defibrillator, AED)`, "category": "Medical Rescue" },

{ "key": "emergency", "value": "landing_site", "label": "Landing site", "description": `Preselected flat area for a helicopter to land in an emergency situation`, "category": "Medical Rescue" },

{ "key": "emergency", "value": "emergency_ward_entrance", "label": "Emergency ward entrance", "description": `The entrance to an emergency ward.`, "category": "Medical Rescue" },

{ "key": "emergency", "value": "dry_riser_inlet", "label": "Dry riser inlet", "description": `a point to which firefighters can connect a pressurized water source`, "category": "Firefighters" },

{ "key": "emergency", "value": "fire_alarm_box", "label": "Fire alarm box", "description": `A device used for notifying a fire department of a fire.`, "category": "Firefighters" },

{ "key": "emergency", "value": "fire_extinguisher", "label": "Fire extinguisher", "description": `A fire extinguisher is an active fire protection device used to extinguish or control small fires, often in emergency situations.`, "category": "Firefighters" },

{ "key": "emergency", "value": "fire_hose", "label": "Fire hose", "description": `A high-pressure hose used to carry water or other fire retardant (such as foam) to a fire to extinguish it.`, "category": "Firefighters" },

{ "key": "emergency", "value": "fire_hydrant", "label": "Fire hydrant", "description": `An active fire protection measure, and a source of water provided in most urban, suburban, and rural areas with municipal water service to enable fire fighters to tap into the municipal water supply to assist in extinguishing a fire`, "category": "Firefighters" },

{ "key": "emergency", "value": "water_tank", "label": "Water tank", "description": `A large water basin or tank for a fire department to take water`, "category": "Firefighters" },

{ "key": "emergency", "value": "suction_point", "label": "Suction point", "description": `A preferred point to pump water off a river or other waters for a fire department.`, "category": "Firefighters" },

{ "key": "emergency", "value": "lifeguard", "label": "Lifeguard", "description": `A place where a lifeguard is on duty`, "category": "Lifeguards" },

{ "key": "emergency", "value": "life_ring", "label": "Life ring", "description": `A floating ring to throw out to someone who is struggling in water.`, "category": "Lifeguards" },

{ "key": "lifeguard", "value": "tower", "label": "Tower", "description": `A tower used by lifeguard to watch and supervise swimmers in order to prevent drownings and other dangers`, "category": "Lifeguards" },

{ "key": "emergency", "value": "assembly_point", "label": "Assembly point", "description": `A designated (safe) place where people can gather or must report to during an emergency or a fire drill`, "category": "Assembly point" },

{ "key": "emergency", "value": "phone", "label": "Phone", "description": `Emergency telephone`, "category": "Other structure" },

{ "key": "emergency", "value": "siren", "label": "Siren", "description": `A loud noise maker, such as an air raid siren or a tornado siren.`, "category": "Other structure" },

{ "key": "emergency", "value": "drinking_water", "label": "Drinking water", "description": `A facility that provides drinking water in emergency situations`, "category": "Other structure" },

{ "key": "geological", "value": "moraine", "label": "Moraine", "description": `Any ice formed accumulation of unconsolidated glacial debris`, "category": "Geological" },

{ "key": "geological", "value": "outcrop", "label": "Outcrop", "description": `A place where the bedrock or superficial deposits previously covered under the soil have become locally exposed`, "category": "Geological" },

{ "key": "geological", "value": "palaeontological_site", "label": "Palaeontological site", "description": `A palaeontological site.`, "category": "Geological" },

{ "key": "geological", "value": "volcanic_caldera_rim", "label": "Volcanic caldera rim", "description": `Volcanic caldera rim`, "category": "Geological" },

{ "key": "geological", "value": "volcanic_vent", "label": "Volcanic vent", "description": `Volcanic vent`, "category": "Geological" },

{ "key": "geological", "value": "volcanic_lava_field", "label": "Volcanic lava field", "description": `Volcanic lava field`, "category": "Geological" },

{ "key": "geological", "value": "columnar_jointing", "label": "Columnar jointing", "description": ``, "category": "Geological" },

{ "key": "healthcare=alternative", "value": "Someone practicing alternative or complementary medicine but is not a medical practitioner or a place where alternative or complementary medicine is practiced that does not fit into the other categories (except healthcare=yes)", "label": "Someone practicing alternative or complementary medicine but is not a medical practitioner or a place where alternative or complementary medicine is practiced that does not fit into the other categories (except healthcare=yes)", "description": ``, "category": "Healthcare=alternative" },

{ "key": "healthcare=audiologist", "value": "Audiologist; if linked with a shop please use shop=hearing_aids instead", "label": "Audiologist; if linked with a shop please use shop=hearing aids instead", "description": ``, "category": "Healthcare=audiologist" },

{ "key": "healthcare=birthing_centre", "value": "A non-clinical birthing centre operated by midwives.", "label": "A non-clinical birthing centre operated by midwives.", "description": ``, "category": "Healthcare=birthing_centre" },

{ "key": "healthcare=blood_bank", "value": "Blood bank", "label": "Blood bank", "description": ``, "category": "Healthcare=blood_bank" },

{ "key": "healthcare=blood_donation", "value": "A facility where you can donate blood, plasma and/or platelets, and possibly have stem cell samples taken.", "label": "A facility where you can donate blood, plasma and/or platelets, and possibly have stem cell samples taken.", "description": ``, "category": "Healthcare=blood_donation" },

{ "key": "healthcare=counselling", "value": "Healthcare counselling, e.g. an addiction centre, a nutritionist, or a sex therapist. Also see healthcare=nutrition_counselling", "label": "Healthcare counselling, e.g. an addiction centre, a nutritionist, or a sex therapist. Also see healthcare=nutrition counselling", "description": ``, "category": "Healthcare=counselling" },

{ "key": "healthcare=dialysis", "value": "A clinic for day patients to get a hemodialysis Dialysis", "label": "A clinic for day patients to get a hemodialysis Dialysis", "description": ``, "category": "Healthcare=dialysis" },

{ "key": "healthcare=hospice", "value": "A Hospice which provides palliative care to terminal ill people and support to their relatives.", "label": "A Hospice which provides palliative care to terminal ill people and support to their relatives.", "description": ``, "category": "Healthcare=hospice" },

{ "key": "healthcare=laboratory", "value": "Medical laboratory also called (analytical, diagnostic) is a place that analyzes body fluids such as blood, urine, faeces etc .", "label": "Medical laboratory also called (analytical, diagnostic) is a place that analyzes body fluids such as blood, urine, faeces etc .", "description": ``, "category": "Healthcare=laboratory" },

{ "key": "healthcare=midwife", "value": "A Midwife, a health professional who cares for mothers and newborns around childbirth.", "label": "A Midwife, a health professional who cares for mothers and newborns around childbirth.", "description": ``, "category": "Healthcare=midwife" },

{ "key": "healthcare=nurse", "value": "Nursing. A facility where some nurses may receive their patients.", "label": "Nursing. A facility where some nurses may receive their patients.", "description": ``, "category": "Healthcare=nurse" },

{ "key": "healthcare=occupational_therapist", "value": "Someone who practices occupational therapy but is not a medical practitioner.", "label": "Someone who practices occupational therapy but is not a medical practitioner.", "description": ``, "category": "Healthcare=occupational_therapist" },

{ "key": "healthcare=optometrist", "value": "Optometrist; If linked with a shop please use shop=optician instead.", "label": "Optometrist; If linked with a shop please use shop=optician instead.", "description": ``, "category": "Healthcare=optometrist" },

{ "key": "healthcare=physiotherapist", "value": "Someone who practices physical therapy (or kinesiotherapy in French-speaking countries) but is not a medical practitioner.", "label": "Someone who practices physical therapy (or kinesiotherapy in French-speaking countries) but is not a medical practitioner.", "description": ``, "category": "Healthcare=physiotherapist" },

{ "key": "healthcare=podiatrist", "value": "Someone who practices podiatry but is not a Physician on Wikipedia.", "label": "Someone who practices podiatry but is not a Physician on Wikipedia.", "description": ``, "category": "Healthcare=podiatrist" },

{ "key": "healthcare=psychotherapist", "value": "Someone who practices psychotherapy but is not a Physician on Wikipedia.", "label": "Someone who practices psychotherapy but is not a Physician on Wikipedia.", "description": ``, "category": "Healthcare=psychotherapist" },

{ "key": "healthcare=rehabilitation", "value": "Medical rehabilitation facility; should not be used for a wellness clinic or hotel.", "label": "Medical rehabilitation facility; should not be used for a wellness clinic or hotel.", "description": ``, "category": "Healthcare=rehabilitation" },

{ "key": "healthcare=sample_collection", "value": "Site or dedicated healthcare facility where samples of blood/urine/etc are obtained or collected for purpose of analyzing them for healthcare diagnostics.", "label": "Site or dedicated healthcare facility where samples of blood/urine/etc are obtained or collected for purpose of analyzing them for healthcare diagnostics.", "description": ``, "category": "Healthcare=sample_collection" },

{ "key": "healthcare=speech_therapist", "value": "Someone who practices speech and language therapy.", "label": "Someone who practices speech and language therapy.", "description": ``, "category": "Healthcare=speech_therapist" },

{ "key": "healthcare=vaccination_centre", "value": "a healthcare facility specifically dedicated to administering vaccinations to individuals, to provide immunisation against infectious diseases.", "label": "A healthcare facility specifically dedicated to administering vaccinations to individuals, to provide immunisation against infectious diseases.", "description": ``, "category": "Healthcare=vaccination_centre" },

{ "key": "highway", "value": "motorway", "label": "Motorway", "description": `A restricted access major divided highway, normally with 2 or more running lanes plus emergency hard shoulder. Equivalent to the Freeway, Autobahn, etc..`, "category": "Highway" },

{ "key": "highway", "value": "trunk", "label": "Trunk", "description": `The most important roads in a country's system that aren't motorways. (Need not necessarily be a divided highway.)`, "category": "Highway" },

{ "key": "highway", "value": "primary", "label": "Primary", "description": `The next most important roads in a country's system. (Often link larger towns.)`, "category": "Highway" },

{ "key": "highway", "value": "secondary", "label": "Secondary", "description": `The next most important roads in a country's system. (Often link towns.)`, "category": "Highway" },

{ "key": "highway", "value": "tertiary", "label": "Tertiary", "description": `The next most important roads in a country's system. (Often link smaller towns and villages)`, "category": "Highway" },

{ "key": "highway", "value": "unclassified", "label": "Unclassified", "description": `The least important through roads in a country's system – i.e. minor roads of a lower classification than tertiary, but which serve a purpose other than access to properties. (Often link villages and hamlets.)The word 'unclassified' is a historical artefact of the UK road system and does not mean that the classification is unknown; you can use highway=road for that.`, "category": "Highway" },

{ "key": "highway", "value": "residential", "label": "Residential", "description": `Roads which serve as an access to housing, without function of connecting settlements. Often lined with housing.`, "category": "Highway" },

{ "key": "highway", "value": "motorway_link", "label": "Motorway link", "description": `The link roads (sliproads/ramps) leading to/from a motorway from/to a motorway or lower class highway. Normally with the same motorway restrictions.`, "category": "Highway" },

{ "key": "highway", "value": "trunk_link", "label": "Trunk link", "description": `The link roads (sliproads/ramps) leading to/from a trunk road from/to a trunk road or lower class highway.`, "category": "Highway" },

{ "key": "highway", "value": "primary_link", "label": "Primary link", "description": `The link roads (sliproads/ramps) leading to/from a primary road from/to a primary road or lower class highway.`, "category": "Highway" },

{ "key": "highway", "value": "secondary_link", "label": "Secondary link", "description": `The link roads (sliproads/ramps) leading to/from a secondary road from/to a secondary road or lower class highway.`, "category": "Highway" },

{ "key": "highway", "value": "tertiary_link", "label": "Tertiary link", "description": `The link roads (sliproads/ramps) leading to/from a tertiary road from/to a tertiary road or lower class highway.`, "category": "Highway" },

{ "key": "highway", "value": "living_street", "label": "Living street", "description": `For living streets, which are residential streets where pedestrians have legal priority over cars, speeds are kept very low and where children are allowed to play on the street.`, "category": "Highway" },

{ "key": "highway", "value": "service", "label": "Service", "description": `For access roads to, or within an industrial estate, camp site, business park, car park, alleys, etc. Can be used in conjunction with service=* to indicate the type of usage and with access=* to indicate who can use it and in what circumstances.`, "category": "Highway" },

{ "key": "highway", "value": "pedestrian", "label": "Pedestrian", "description": `For roads used mainly/exclusively for pedestrians in shopping and some residential areas which may allow access by motorised vehicles only for very limited periods of the day. To create a 'square' or 'plaza' create a closed way and tag as pedestrian and also with area=yes.`, "category": "Highway" },

{ "key": "highway", "value": "track", "label": "Track", "description": `Roads for mostly agricultural or forestry uses. To describe the quality of a track, see tracktype=*. Note: Although tracks are often rough with unpaved surfaces, this tag is not describing the quality of a road but its use. Consequently, if you want to tag a general use road, use one of the general highway values instead of track.`, "category": "Highway" },

{ "key": "highway", "value": "bus_guideway", "label": "Bus guideway", "description": `A busway where the vehicle guided by the way (though not a railway) and is not suitable for other traffic. Please note: this is not a normal bus lane, use access=no, psv=yes instead!`, "category": "Highway" },

{ "key": "highway", "value": "escape", "label": "Escape", "description": `For runaway truck ramps, runaway truck lanes, emergency escape ramps, or truck arrester beds. It enables vehicles with braking failure to safely stop.`, "category": "Highway" },

{ "key": "highway", "value": "raceway", "label": "Raceway", "description": `A course or track for (motor) racing`, "category": "Highway" },

{ "key": "highway", "value": "road", "label": "Road", "description": `A road/way/street/motorway/etc. of unknown type. It can stand for anything ranging from a footpath to a motorway. This tag should only be used temporarily until the road/way/etc. has been properly surveyed. If you do know the road type, do not use this value, instead use one of the more specific highway=* values.`, "category": "Highway" },

{ "key": "highway", "value": "busway", "label": "Busway", "description": `A dedicated roadway for bus rapid transit systems`, "category": "Highway" },

{ "key": "highway", "value": "footway", "label": "Footway", "description": `For designated footpaths; i.e., mainly/exclusively for pedestrians. This includes walking tracks and gravel paths. If bicycles are allowed as well, you can indicate this by adding a bicycle=yes tag. Should not be used for paths where the primary or intended usage is unknown. Use highway=pedestrian for pedestrianised roads in shopping or residential areas and highway=track if it is usable by agricultural or similar vehicles.`, "category": "Highway" },

{ "key": "highway", "value": "bridleway", "label": "Bridleway", "description": `For horse riders. Pedestrians are usually also permitted, cyclists may be permitted depending on local rules/laws. Motor vehicles are forbidden.`, "category": "Highway" },

{ "key": "highway", "value": "steps", "label": "Steps", "description": `For flights of steps (stairs) on footways. Use with step_count=* to indicate the number of steps`, "category": "Highway" },

{ "key": "highway", "value": "corridor", "label": "Corridor", "description": `For a hallway inside of a building.`, "category": "Highway" },

{ "key": "highway", "value": "path", "label": "Path", "description": `A non-specific path. Use highway=footway for paths mainly for walkers, highway=cycleway for one also usable by cyclists, highway=bridleway for ones available to horse riders as well as walkers and highway=track for ones which is passable by agriculture or similar vehicles.`, "category": "Highway" },

{ "key": "footway", "value": "sidewalk", "label": "Sidewalk", "description": `Sidewalk that runs typically along residential road. Use in combination with highway=footway or highway=path`, "category": "Footway" },

{ "key": "footway", "value": "crossing", "label": "Crossing", "description": `Crosswalk that connects two sidewalks on the opposite side of the road. Often recognized by painted markings on the road, road sign or traffic lights. Use in combination with highway=footway or highway=path. Useful information is presence of tactile_paving=*, wheelchair=* suitability and kerb=* represented as a node on the crosswalk way.`, "category": "Footway" },

{ "key": "sidewalk", "value": "both | left | right | no", "label": "Both | left | right | no", "description": `Specifies that the highways has sidewalks on both sides, on one side or no sidewalk at all`, "category": "Sidewalk" },

{ "key": "highway", "value": "cycleway", "label": "Cycleway", "description": `For designated cycleways. Add foot=*, though it may be avoided if default-access-restrictions do apply.`, "category": "Highway" },

{ "key": "cycleway", "value": "lane", "label": "Lane", "description": `A lane is a route that lies within the roadway`, "category": "Cycleway" },

{ "key": "cycleway", "value": "opposite", "label": "Opposite", "description": `Used on ways with oneway=yes where it is legally permitted to cycle in both directions. Used together with oneway:bicycle=no.`, "category": "Cycleway" },

{ "key": "cycleway", "value": "opposite_lane", "label": "Opposite lane", "description": `Used on ways with oneway=yes that have a cycling lane going the opposite direction of normal traffic flow (a "contraflow" lane). Used together with oneway:bicycle=no.`, "category": "Cycleway" },

{ "key": "cycleway", "value": "track", "label": "Track", "description": `A track provides a route that is separated from traffic. In the United States, this term is often used to refer to bike lanes that are separated from lanes for cars by pavement buffers, bollards, parking lanes, and curbs. Note that a cycle track may alternatively be drawn as a separate way next to the road which is tagged as highway=cycleway.`, "category": "Cycleway" },

{ "key": "cycleway", "value": "opposite_track", "label": "Opposite track", "description": `Used on ways with oneway=yes that have a cycling track going the opposite direction of normal traffic flow. Used together with oneway:bicycle=no.`, "category": "Cycleway" },

{ "key": "cycleway", "value": "share_busway", "label": "Share busway", "description": `There is a bus lane that cyclists are permitted to use.`, "category": "Cycleway" },

{ "key": "cycleway", "value": "opposite_share_busway", "label": "Opposite share busway", "description": `Used on ways with oneway=yes that have a bus lane that cyclists are also permitted to use, and which go in the opposite direction to normal traffic flow (a "contraflow" bus lane). Used together with oneway:bicycle=no.`, "category": "Cycleway" },

{ "key": "cycleway", "value": "shared_lane", "label": "Shared lane", "description": `Cyclists share a lane with motor vehicles, but there are markings indicating that they should share the lane with motorists. In some places these markings are known as "sharrows" ('sharing arrows') and this is the tag to use for those.`, "category": "Cycleway" },

{ "key": "busway", "value": "lane", "label": "Lane", "description": `Bus lane on both sides of the road. (See also: Parallel scheme for bus/psv lane tagging lanes:bus=* / lanes:psv=*)`, "category": "Busway" },

{ "key": "highway", "value": "proposed", "label": "Proposed", "description": `For planned roads, use with proposed=* and a value of the proposed highway value.`, "category": "Highway" },

{ "key": "highway", "value": "construction", "label": "Construction", "description": `For roads under construction. Use construction=* to hold the value for the completed road.`, "category": "Highway" },

{ "key": "highway", "value": "bus_stop", "label": "Bus stop", "description": `A small bus stop. Optionally one may also use public_transport=stop_position for the position where the vehicle stops and public_transport=platform for the place where passengers wait.`, "category": "Highway" },

{ "key": "highway", "value": "crossing", "label": "Crossing", "description": `A.k.a. crosswalk. Pedestrians can cross a street here; e.g., zebra crossing`, "category": "Highway" },

{ "key": "highway", "value": "elevator", "label": "Elevator", "description": `An elevator or lift, used to travel vertically, providing passenger and freight access between pathways at different floor levels.`, "category": "Highway" },

{ "key": "highway", "value": "emergency_bay", "label": "Emergency bay", "description": `An area beside a highway where you can safely stop your car in case of breakdown or emergency.`, "category": "Highway" },

{ "key": "highway", "value": "emergency_access_point", "label": "Emergency access point", "description": `Sign number which can be used to define your current position in case of an emergency. Use with ref=NUMBER_ON_THE_SIGN`, "category": "Highway" },

{ "key": "highway", "value": "give_way", "label": "Give way", "description": `A "give way," or "Yield" sign`, "category": "Highway" },

{ "key": "emergency", "value": "phone", "label": "Phone", "description": `A calling device can be used to tell on your current position in case of an emergency. Use with ref=NUMBER_ON_THE_SIGN`, "category": "Emergency" },

{ "key": "highway", "value": "milestone", "label": "Milestone", "description": `Highway location marker`, "category": "Highway" },

{ "key": "highway", "value": "mini_roundabout", "label": "Mini roundabout", "description": `Similar to roundabouts, but at the center there is either a painted circle or a fully traversable island. In case of an untraversable center island, junction=roundabout should be used.Rendered as anti-clockwise by default direction=anticlockwise. To render clockwise add the tag direction=clockwise.`, "category": "Highway" },

{ "key": "highway", "value": "motorway_junction", "label": "Motorway junction", "description": `Indicates a junction (UK) or exit (US). ref=* should be set to the exit number or junction identifier. (Some roads – e.g., the A14 – also carry junction numbers, so the tag may be encountered elsewhere despite its name)`, "category": "Highway" },

{ "key": "highway", "value": "passing_place", "label": "Passing place", "description": `The location of a passing space`, "category": "Highway" },

{ "key": "highway", "value": "platform", "label": "Platform", "description": `A platform at a bus stop or station.`, "category": "Highway" },

{ "key": "highway", "value": "rest_area", "label": "Rest area", "description": `Place where drivers can leave the road to rest, but not refuel.`, "category": "Highway" },

{ "key": "highway", "value": "services", "label": "Services", "description": `A service station to get food and eat something, often found at motorways`, "category": "Highway" },

{ "key": "highway", "value": "speed_camera", "label": "Speed camera", "description": `A fixed road-side or overhead speed camera.`, "category": "Highway" },

{ "key": "highway", "value": "stop", "label": "Stop", "description": `A stop sign`, "category": "Highway" },

{ "key": "highway", "value": "street_lamp", "label": "Street lamp", "description": `A street light, lamppost, street lamp, light standard, or lamp standard is a raised source of light on the edge of a road, which is turned on or lit at a certain time every night`, "category": "Highway" },

{ "key": "highway", "value": "toll_gantry", "label": "Toll gantry", "description": `A toll gantry is a gantry suspended over a way, usually a motorway, as part of a system of electronic toll collection. For a toll booth with any kind of barrier or booth see: barrier=toll_booth`, "category": "Highway" },

{ "key": "highway", "value": "traffic_mirror", "label": "Traffic mirror", "description": `Mirror that reflects the traffic on one road when direct view is blocked.`, "category": "Highway" },

{ "key": "highway", "value": "traffic_signals", "label": "Traffic signals", "description": `Lights that control the traffic`, "category": "Highway" },

{ "key": "highway", "value": "trailhead", "label": "Trailhead", "description": `Designated place to start on a trail or route`, "category": "Highway" },

{ "key": "highway", "value": "turning_circle", "label": "Turning circle", "description": `A turning circle is a rounded, widened area usually, but not necessarily, at the end of a road to facilitate easier turning of a vehicle. Also known as a cul de sac.`, "category": "Highway" },

{ "key": "highway", "value": "turning_loop", "label": "Turning loop", "description": `A widened area of a highway with a non-traversable island for turning around, often circular and at the end of a road.`, "category": "Highway" },

{ "key": "highway", "value": "User Defined", "label": "User Defined", "description": `All commonly used values according to Taginfo`, "category": "Highway" },

{ "key": "historic", "value": "aircraft", "label": "Aircraft", "description": `A decommissioned aircraft which generally remains in one place.`, "category": "Historic" },

{ "key": "historic", "value": "aqueduct", "label": "Aqueduct", "description": `A historic structure to convey water`, "category": "Historic" },

{ "key": "historic", "value": "archaeological_site", "label": "Archaeological site", "description": `A place in which evidence of past activity is preserved.`, "category": "Historic" },

{ "key": "historic", "value": "battlefield", "label": "Battlefield", "description": `The site of a battle or military skirmish in the past.`, "category": "Historic" },

{ "key": "historic", "value": "bomb_crater", "label": "Bomb crater", "description": `A bomb crater`, "category": "Historic" },

{ "key": "historic", "value": "boundary_stone", "label": "Boundary stone", "description": `A historic physical marker that identifies a boundary`, "category": "Historic" },

{ "key": "historic", "value": "building", "label": "Building", "description": `Unspecified historic building.`, "category": "Historic" },

{ "key": "historic", "value": "cannon", "label": "Cannon", "description": `A historic/retired cannon. Usually found on forts or battlefields.`, "category": "Historic" },

{ "key": "historic", "value": "castle", "label": "Castle", "description": `Used for various kinds of castles, palaces, fortresses, manors, stately homes, kremlins, shiros and other.`, "category": "Historic" },

{ "key": "historic", "value": "castle_wall", "label": "Castle wall", "description": `A fortification surrounding the bailey of a castle`, "category": "Historic" },

{ "key": "historic", "value": "charcoal_pile", "label": "Charcoal pile", "description": `Historic site of a charcoal pile. Often still in good condition in hilly forest areas.`, "category": "Historic" },

{ "key": "historic", "value": "church", "label": "Church", "description": `A church with a historical value.`, "category": "Historic" },

{ "key": "historic", "value": "city_gate", "label": "City gate", "description": `A city gate within a city wall`, "category": "Historic" },

{ "key": "historic", "value": "citywalls", "label": "Citywalls", "description": `A citywall is a fortification used to defend a city.`, "category": "Historic" },

{ "key": "historic", "value": "creamery", "label": "Creamery", "description": `A creamery is an industrial building where butter and sometimes cheese or ice-cream were made from milk. For rural communities, it also served as a social gathering point.`, "category": "Historic" },

{ "key": "historic", "value": "farm", "label": "Farm", "description": `A historical farm, kept in its original state.`, "category": "Historic" },

{ "key": "historic", "value": "fort", "label": "Fort", "description": `A military fort, a stand-alone defensive structure which differs from a castle in that there is no permanent residence`, "category": "Historic" },

{ "key": "historic", "value": "gallows", "label": "Gallows", "description": `remains of a gallows`, "category": "Historic" },

{ "key": "historic", "value": "highwater_mark", "label": "Highwater mark", "description": `A marker for indicating past flood.`, "category": "Historic" },

{ "key": "historic", "value": "locomotive", "label": "Locomotive", "description": `A decommissioned locomotive which generally remains in one place`, "category": "Historic" },

{ "key": "historic", "value": "manor", "label": "Manor", "description": `Historic manors/mansions having different use today`, "category": "Historic" },

{ "key": "historic", "value": "memorial", "label": "Memorial", "description": `Small memorials, usually remembering special persons, people who lost their lives in the wars, past events or missing places.`, "category": "Historic" },

{ "key": "historic", "value": "milestone", "label": "Milestone", "description": `A historic marker that shows the distance to important destinations`, "category": "Historic" },

{ "key": "historic", "value": "monastery", "label": "Monastery", "description": `Building/place that is a historically significant monastery.`, "category": "Historic" },

{ "key": "historic", "value": "monument", "label": "Monument", "description": `A memorial object, which is especially large, built to remember, show respect to a person or group of people or to commemorate an event.`, "category": "Historic" },

{ "key": "historic", "value": "optical_telegraph", "label": "Optical telegraph", "description": `Semaphore system`, "category": "Historic" },

{ "key": "historic", "value": "pa", "label": "Pa", "description": `A New Zealand Maori Pā`, "category": "Historic" },

{ "key": "historic", "value": "pillory", "label": "Pillory", "description": `A pillory.`, "category": "Historic" },

{ "key": "historic", "value": "railway_car", "label": "Railway car", "description": `A decommissioned railway car which generally remains in one place`, "category": "Historic" },

{ "key": "historic", "value": "ruins", "label": "Ruins", "description": `Remains of structures that were once complete, but have fallen into partial or complete disrepair.`, "category": "Historic" },

{ "key": "historic", "value": "rune_stone", "label": "Rune stone", "description": `Stones, boulders or bedrock with historical runic inscriptions.`, "category": "Historic" },

{ "key": "historic", "value": "ship", "label": "Ship", "description": `A decommissioned ship/submarine which generally remains in one place`, "category": "Historic" },

{ "key": "historic", "value": "tank", "label": "Tank", "description": `A decommissioned tank which generally remains in one place`, "category": "Historic" },

{ "key": "historic", "value": "tomb", "label": "Tomb", "description": `A structure where somebody has been buried.`, "category": "Historic" },

{ "key": "historic", "value": "tower", "label": "Tower", "description": `This property distinguishes a tower as historic`, "category": "Historic" },

{ "key": "historic", "value": "vehicle", "label": "Vehicle", "description": `A decommissioned vehicle which generally remains in one place`, "category": "Historic" },

{ "key": "historic", "value": "wayside_cross", "label": "Wayside cross", "description": `A historical cross, symbol of christian faith.`, "category": "Historic" },

{ "key": "historic", "value": "wayside_shrine", "label": "Wayside shrine", "description": `A shrine often showing a religious depiction. Tag is used also for modern shrines.`, "category": "Historic" },

{ "key": "historic", "value": "wreck", "label": "Wreck", "description": `A nautical craft that has been sunk or destroyed.`, "category": "Historic" },

{ "key": "historic", "value": "yes", "label": "Yes", "description": `Used to add the historic significance of the objects described by other tags.`, "category": "Historic" },

{ "key": "landuse", "value": "commercial", "label": "Commercial", "description": `Predominantly commercial businesses and their offices. Commercial businesses which sell goods should be categorised as landuse=retail. Commercial businesses can sell services on site and may include private Doctor's Surgeries, and those non-government services for mental and physical health, such as a Counsellor's or Physiotherapist's practice or Veterinary. Government services and businesses should not use this tag. Commercial businesses can also include office buildings and business parks which have limited interface with the public and sell their services either on site, or externally. Commercial businesses have low amounts of public foot traffic.`, "category": "Landuse" },

{ "key": "landuse", "value": "construction", "label": "Construction", "description": `A site which is under active development and construction of a building or structure, including any purposeful alteration to the land or vegetation upon it. Abandoned construction projects and sites should not use this tag.`, "category": "Landuse" },

{ "key": "landuse", "value": "education", "label": "Education", "description": `An area predominately used for educational purposes/facilities.`, "category": "Landuse" },

{ "key": "landuse", "value": "industrial", "label": "Industrial", "description": `Predominantly industrial landuses such as workshops, factories, or warehouses.`, "category": "Landuse" },

{ "key": "landuse", "value": "residential", "label": "Residential", "description": `Land where people reside; predominantly residential detached (single houses, grouped dwellings), or attached (apartments, flats, units) dwellings. For "Mixed-Use" areas where more than half of the land is residential, tag as residential. See also: Land use and areas of natural land § Open questions`, "category": "Landuse" },

{ "key": "landuse", "value": "retail", "label": "Retail", "description": `Predominantly retail businesses such as shops. Retail businesses sell physical goods such as food (prepared or grocery), clothing, medicine, stationary, appliances, tools, or other similar physical items. Retail businesses have high amounts of public foot traffic. Retail businesses do not exclusively provide or sell their services. For businesses which sell services see landuse=commercial.Generally a member of the public could freely walk into and access a retail business. Retail is a subset of commercial, but should be used and treated as mutually exclusive in OpenStreetMap.`, "category": "Landuse" },

{ "key": "landuse", "value": "allotments", "label": "Allotments", "description": `A piece of land given over to local residents for growing vegetables and flowers.`, "category": "Landuse" },

{ "key": "landuse", "value": "farmland", "label": "Farmland", "description": `An area of farmland used for tillage (cereals, vegetables, oil plants, flowers).`, "category": "Landuse" },

{ "key": "landuse", "value": "farmyard", "label": "Farmyard", "description": `An area of land with farm buildings like farmhouse, dwellings, farmsteads, sheds, stables, barns, equipment sheds, feed bunkers, etc. plus the open space in between them and the shrubbery/trees around them.`, "category": "Landuse" },

{ "key": "landuse", "value": "flowerbed", "label": "Flowerbed", "description": `An area designated for flowers`, "category": "Landuse" },

{ "key": "landuse", "value": "forest", "label": "Forest", "description": `Managed forest or woodland plantation (Other languages). Some use this to map an area of trees rather than the use of the land. See Forest.`, "category": "Landuse" },

{ "key": "landuse", "value": "meadow", "label": "Meadow", "description": `A meadow or pasture: land primarily vegetated by grass and non-woody plants, mainly used for hay or grazing`, "category": "Landuse" },

{ "key": "landuse", "value": "orchard", "label": "Orchard", "description": `intentional planting of trees or shrubs maintained for food production`, "category": "Landuse" },

{ "key": "landuse", "value": "vineyard", "label": "Vineyard", "description": `A piece of land where grapes are grown.`, "category": "Landuse" },

{ "key": "landuse", "value": "aquaculture", "label": "Aquaculture", "description": `Aquaculture is the farming of freshwater and saltwater organisms such as finfish, mollusks, crustaceans and aquatic plants.Warning: currently, there is no convention on the exact meaning of this tag. Therefore, it makes sense to treat it like "boundary of aquaculture" (without implication of water body), which means, water body should be tagged by its own, using natural=water etc.`, "category": "Landuse" },

{ "key": "landuse", "value": "basin", "label": "Basin", "description": `An area artificially graded to hold water. Together with basin=* for stormwater/rainwater infiltration/detention/retention basins. Other languages.`, "category": "Landuse" },

{ "key": "landuse", "value": "reservoir", "label": "Reservoir", "description": `A Reservoir on Wikipedia. Deprecated variant of natural=water + water=reservoir. See Proposed features/Reservoir for details.`, "category": "Landuse" },

{ "key": "landuse", "value": "salt_pond", "label": "Salt pond", "description": `A place where salt (saline) water is evaporated to extract its salt.`, "category": "Landuse" },

{ "key": "landuse", "value": "brownfield", "label": "Brownfield", "description": `Describes land scheduled for new development where old buildings have been demolished and cleared`, "category": "Landuse" },

{ "key": "landuse", "value": "cemetery", "label": "Cemetery", "description": `Place for burials. You can add religion=* (values listed in the place of worship page). Smaller places (e.g. with a church nearby) may use amenity=grave_yard instead.`, "category": "Landuse" },

{ "key": "landuse", "value": "conservation", "label": "Conservation", "description": `Protected areas (deprecated) Alternate tagging of same thing: boundary=protected_area, protected_area=*`, "category": "Landuse" },

{ "key": "landuse", "value": "depot", "label": "Depot", "description": `An area used as a depot for e.g. vehicles (trains, buses or trams). Consider using rather standard landuse tags like landuse=railway, landuse=commercial, landuse=industrial, with subtag like industrial=depot.`, "category": "Landuse" },

{ "key": "landuse", "value": "garages", "label": "Garages", "description": `One level buildings with boxes commonly for cars, usually made of brick and metal. Usually this area belong to garage cooperative with own name, chairman, budget, rules, security, etc.`, "category": "Landuse" },

{ "key": "landuse", "value": "grass", "label": "Grass", "description": `An area of mown and managed grass not otherwise covered by a more specific tag. Some view this as not a landuse, see the main page landuse=grass for discussion.`, "category": "Landuse" },

{ "key": "landuse", "value": "greenfield", "label": "Greenfield", "description": `Describes land scheduled for new development where there have been no buildings before. A greenfield is scheduled to turn into a construction site`, "category": "Landuse" },

{ "key": "landuse", "value": "greenhouse_horticulture", "label": "Greenhouse horticulture", "description": `Area used for growing plants in greenhouses`, "category": "Landuse" },

{ "key": "landuse", "value": "landfill", "label": "Landfill", "description": `Place where waste is dumped.`, "category": "Landuse" },

{ "key": "landuse", "value": "military", "label": "Military", "description": `For land areas owned/used by the military for whatever purpose`, "category": "Landuse" },

{ "key": "landuse", "value": "plant_nursery", "label": "Plant nursery", "description": `intentional planting of plants maintaining for the production of new plants`, "category": "Landuse" },

{ "key": "landuse", "value": "port", "label": "Port", "description": `coastal industrial area where commercial traffic is handled. Consider using landuse=industrial + industrial=port for this type of industrial area.`, "category": "Landuse" },

{ "key": "landuse", "value": "quarry", "label": "Quarry", "description": `Surface mineral extraction`, "category": "Landuse" },

{ "key": "landuse", "value": "railway", "label": "Railway", "description": `Area for railway use, generally off-limits to the general public`, "category": "Landuse" },

{ "key": "landuse", "value": "recreation_ground", "label": "Recreation ground", "description": `An open green space for general recreation, which may include pitches, nets and so on, usually municipal but possibly also private to colleges or companies`, "category": "Landuse" },

{ "key": "landuse", "value": "religious", "label": "Religious", "description": `An area used for religious purposes`, "category": "Landuse" },

{ "key": "landuse", "value": "village_green", "label": "Village green", "description": `A village green is a distinctive area of grassy public land in a village centre. Not a generic tag for urban greenery. It is a typical English term – defined separately from 'common land' under the Commons Registration Act 1965 and the Commons Act 2006.`, "category": "Landuse" },

{ "key": "landuse", "value": "winter_sports", "label": "Winter sports", "description": `An area dedicated to winter sports (e.g. skiing)`, "category": "Landuse" },

{ "key": "landuse", "value": "user defined", "label": "User defined", "description": `All commonly used values according to Taginfo`, "category": "Landuse" },

{ "key": "leisure", "value": "adult_gaming_centre", "label": "Adult gaming centre", "description": `A venue with gambling machines.`, "category": "Leisure" },

{ "key": "leisure", "value": "amusement_arcade", "label": "Amusement arcade", "description": `A venue with pay-to-play games.`, "category": "Leisure" },

{ "key": "leisure", "value": "beach_resort", "label": "Beach resort", "description": `A managed beach, including within the boundary any associated facilities. Entry may also require payment of a fee.`, "category": "Leisure" },

{ "key": "leisure", "value": "bandstand", "label": "Bandstand", "description": `A bandstand is an open structure where musical bands can perform concerts`, "category": "Leisure" },

{ "key": "leisure", "value": "bird_hide", "label": "Bird hide", "description": `A place that is used to observe wildlife, especially birds.`, "category": "Leisure" },

{ "key": "leisure", "value": "common", "label": "Common", "description": `Identify land over which the public has general rights of use for certain leisure activities.`, "category": "Leisure" },

{ "key": "leisure", "value": "dance", "label": "Dance", "description": `A dance venue or dance hall.`, "category": "Leisure" },

{ "key": "leisure", "value": "disc_golf_course", "label": "Disc golf course", "description": `A place to play disc golf`, "category": "Leisure" },

{ "key": "leisure", "value": "dog_park", "label": "Dog park", "description": `A designated area, with or without a fenced boundary, where dog-owners are permitted to exercise their pets unrestrained.`, "category": "Leisure" },

{ "key": "leisure", "value": "escape_game", "label": "Escape game", "description": `A physical adventure game in which players solve a series of puzzles using clues, hints and strategy to complete the objectives at hand.`, "category": "Leisure" },

{ "key": "leisure", "value": "firepit", "label": "Firepit", "description": `A fire ring or fire pit, often at a campsite or picnic site`, "category": "Leisure" },

{ "key": "leisure", "value": "fishing", "label": "Fishing", "description": `A public or private place for fishing`, "category": "Leisure" },

{ "key": "leisure", "value": "fitness_centre", "label": "Fitness centre", "description": `Fitness centre, health club or gym with exercise machines, fitness classes or both, for exercise.`, "category": "Leisure" },

{ "key": "leisure", "value": "fitness_station", "label": "Fitness station", "description": `An outdoor facility where people can practise typical fitness exercises`, "category": "Leisure" },

{ "key": "leisure", "value": "garden", "label": "Garden", "description": `A place where flowers and other plants are grown in a decorative and structured manner or for scientific purposes.`, "category": "Leisure" },

{ "key": "leisure", "value": "hackerspace", "label": "Hackerspace", "description": `A place where people with common interests (science, technology, ...) meet.`, "category": "Leisure" },

{ "key": "leisure", "value": "horse_riding", "label": "Horse riding", "description": `A facility where people practise horse riding, usually in their spare time, e.g. a riding centre. For a riding arena use tag:leisure=pitch + tag:sport=equestrian.`, "category": "Leisure" },

{ "key": "leisure", "value": "ice_rink", "label": "Ice rink", "description": `A place where you can skate and play bandy or ice hockey.`, "category": "Leisure" },

{ "key": "leisure", "value": "marina", "label": "Marina", "description": `A facility for mooring leisure yachts and motor boats.`, "category": "Leisure" },

{ "key": "leisure", "value": "miniature_golf", "label": "Miniature golf", "description": `A place or area where you can play miniature golf.`, "category": "Leisure" },

{ "key": "leisure", "value": "nature_reserve", "label": "Nature reserve", "description": `A protected area of importance for wildlife, flora, fauna or features of geological or other special interest.`, "category": "Leisure" },

{ "key": "leisure", "value": "park", "label": "Park", "description": `A park, usually urban (municipal).`, "category": "Leisure" },

{ "key": "leisure", "value": "picnic_table", "label": "Picnic table", "description": `A table with benches for food and rest`, "category": "Leisure" },

{ "key": "leisure", "value": "pitch", "label": "Pitch", "description": `An area designed for practising a particular sport, normally designated with appropriate markings.`, "category": "Leisure" },

{ "key": "leisure", "value": "playground", "label": "Playground", "description": `A playground: an area designed for children to play.`, "category": "Leisure" },

{ "key": "leisure", "value": "slipway", "label": "Slipway", "description": `A slipway: a ramp for launching a boat into water`, "category": "Leisure" },

{ "key": "leisure", "value": "sports_centre", "label": "Sports centre", "description": `A sports centre is a distinct facility where sports take place within an enclosed area.`, "category": "Leisure" },

{ "key": "leisure", "value": "stadium", "label": "Stadium", "description": `A major sports facility with substantial tiered seating.`, "category": "Leisure" },

{ "key": "leisure", "value": "summer_camp", "label": "Summer camp", "description": `A place for supervised camps for children or teenagers conducted during the summer months`, "category": "Leisure" },

{ "key": "leisure", "value": "swimming_area", "label": "Swimming area", "description": `An official open-space natural place where you can swim`, "category": "Leisure" },

{ "key": "leisure", "value": "swimming_pool", "label": "Swimming pool", "description": `A swimming pool (water area only)`, "category": "Leisure" },

{ "key": "leisure", "value": "track", "label": "Track", "description": `A track for running, cycling and other non-motorised racing such as horses, greyhounds.`, "category": "Leisure" },

{ "key": "leisure", "value": "water_park", "label": "Water park", "description": `An amusement park with features like water slides, recreational pools (e.g. wave pools) or lazy rivers.`, "category": "Leisure" },

{ "key": "man_made", "value": "adit", "label": "Adit", "description": `A type of entrance to an underground mine which is horizontal or nearly horizontal.`, "category": "Man_made" },

{ "key": "man_made", "value": "beacon", "label": "Beacon", "description": `A structure for signalling on land and sea`, "category": "Man_made" },

{ "key": "man_made", "value": "breakwater", "label": "Breakwater", "description": `A man-made structure designed to protect a shore or harbour from the sea and waves.`, "category": "Man_made" },

{ "key": "man_made", "value": "bridge", "label": "Bridge", "description": `The outline of a bridge, grouping together all features for that bridge.`, "category": "Man_made" },

{ "key": "man_made", "value": "bunker_silo", "label": "Bunker silo", "description": `An open-sided structure without a roof that can be used with vehicles to fill and empty them`, "category": "Man_made" },

{ "key": "man_made", "value": "carpet_hanger", "label": "Carpet hanger", "description": `A construction to hang carpets for cleaning with the help of carpet beaters.`, "category": "Man_made" },

{ "key": "man_made", "value": "chimney", "label": "Chimney", "description": `A tall distinctive vertical conduit for venting hot gases or smoke, normally found near power stations or large factories`, "category": "Man_made" },

{ "key": "man_made", "value": "column", "label": "Column", "description": `A column used to support a structure or for decoration.`, "category": "Man_made" },

{ "key": "man_made", "value": "communications_tower", "label": "Communications tower", "description": `A huge tower for transmitting radio applications`, "category": "Man_made" },

{ "key": "man_made", "value": "crane", "label": "Crane", "description": `A stationary, permanent crane.`, "category": "Man_made" },

{ "key": "man_made", "value": "cross", "label": "Cross", "description": `Cross, especially one with little historical value`, "category": "Man_made" },

{ "key": "man_made", "value": "cutline", "label": "Cutline", "description": `A straight line cut in a forest.`, "category": "Man_made" },

{ "key": "man_made", "value": "clearcut", "label": "Clearcut", "description": `An area where all trees have been uniformly cut down.`, "category": "Man_made" },

{ "key": "man_made", "value": "dovecote", "label": "Dovecote", "description": `A place where doves are farmed or stored.`, "category": "Man_made" },

{ "key": "man_made", "value": "dyke", "label": "Dyke", "description": `An embankment built to restrict the flow of water or other liquids`, "category": "Man_made" },

{ "key": "man_made", "value": "embankment", "label": "Embankment", "description": `An artificial steep slope`, "category": "Man_made" },

{ "key": "man_made", "value": "flagpole", "label": "Flagpole", "description": `A long pole built to hold a flag`, "category": "Man_made" },

{ "key": "man_made", "value": "gasometer", "label": "Gasometer", "description": `A large container in which natural gas or town gas is stored near atmospheric pressure at ambient temperatures`, "category": "Man_made" },

{ "key": "man_made", "value": "goods_conveyor", "label": "Goods conveyor", "description": `A conveyor system for transporting materials`, "category": "Man_made" },

{ "key": "man_made", "value": "groyne", "label": "Groyne", "description": `A rigid structure built from a shoreline or riverbank that interrupts water flow and limits the movement of sediment`, "category": "Man_made" },

{ "key": "man_made", "value": "guard_stone", "label": "Guard stone", "description": `A guard stone: a stone built onto or into the corner of a building or wall to prevent carriages from damaging the structure, often found on either side of an entrance to a laneway, or alongside a wall to protect it.`, "category": "Man_made" },

{ "key": "man_made", "value": "kiln", "label": "Kiln", "description": `A thermally insulated chamber used for processes such as burning, hardening, drying, or smelting`, "category": "Man_made" },

{ "key": "man_made", "value": "lighthouse", "label": "Lighthouse", "description": `Tower that emits light to serve as a navigational aid at sea or on inland waterway`, "category": "Man_made" },

{ "key": "man_made", "value": "mast", "label": "Mast", "description": `A mast is a vertical structure built to hold, for example, antennas.`, "category": "Man_made" },

{ "key": "man_made", "value": "mineshaft", "label": "Mineshaft", "description": `A mineshaft: vertical tunnel into a mine where minerals are extracted.`, "category": "Man_made" },

{ "key": "man_made", "value": "monitoring_station", "label": "Monitoring station", "description": `A station that monitors something.`, "category": "Man_made" },

{ "key": "man_made", "value": "obelisk", "label": "Obelisk", "description": `Tall, narrow, four-sided, tapered monument which usually ends in a pyramid-like shape at the top.`, "category": "Man_made" },

{ "key": "man_made", "value": "observatory", "label": "Observatory", "description": `Observatory: a location used for observing terrestrial or celestial events`, "category": "Man_made" },

{ "key": "man_made", "value": "offshore_platform", "label": "Offshore platform", "description": `Offshore platform, oil platform or offshore drilling rig`, "category": "Man_made" },

{ "key": "man_made", "value": "petroleum_well", "label": "Petroleum well", "description": `A hole bored in the earth, designed to bring petroleum oil or gas to the surface`, "category": "Man_made" },

{ "key": "man_made", "value": "pier", "label": "Pier", "description": `A pier is a raised walkway over water, supported by widely spread piles or pillars.`, "category": "Man_made" },

{ "key": "man_made", "value": "pipeline", "label": "Pipeline", "description": `A major pipeline carrying gas, water, oil, etc.`, "category": "Man_made" },

{ "key": "man_made", "value": "pump", "label": "Pump", "description": `A device in charge of moving or raising the level of liquids.`, "category": "Man_made" },

{ "key": "man_made", "value": "pumping_station", "label": "Pumping station", "description": `Pumping station: a facility including pumps and equipment for pumping fluids from one place to another`, "category": "Man_made" },

{ "key": "man_made", "value": "reservoir_covered", "label": "Reservoir covered", "description": `A covered reservoir is a large man-made tank for holding fresh water`, "category": "Man_made" },

{ "key": "man_made", "value": "silo", "label": "Silo", "description": `A storage container for bulk material, often grains such as corn or wheat`, "category": "Man_made" },

{ "key": "man_made", "value": "snow_fence", "label": "Snow fence", "description": `A fence-like structure built to redirect drifting snow`, "category": "Man_made" },

{ "key": "man_made", "value": "snow_net", "label": "Snow net", "description": `A netting fence built across steep slopes to reduce risk and severity of (snow) avalanches`, "category": "Man_made" },

{ "key": "man_made", "value": "storage_tank", "label": "Storage tank", "description": `A container that holds liquids or compressed gases`, "category": "Man_made" },

{ "key": "man_made", "value": "street_cabinet", "label": "Street cabinet", "description": `A cabinet located in the street and hosting technical equipment to operate facilities such as electricity or street lights.`, "category": "Man_made" },

{ "key": "man_made", "value": "stupa", "label": "Stupa", "description": `A Buddhist dome-shaped structure with a spire on top`, "category": "Man_made" },

{ "key": "man_made", "value": "surveillance", "label": "Surveillance", "description": `A surveillance camera or other type of surveillance equipment.`, "category": "Man_made" },

{ "key": "man_made", "value": "survey_point", "label": "Survey point", "description": `A triangulation pillar, geodetic vertex, or other piece of fixed equipment used by topographers.`, "category": "Man_made" },

{ "key": "man_made", "value": "tailings_pond", "label": "Tailings pond", "description": `A body of liquid or slurry used to store byproducts of mining operations.`, "category": "Man_made" },

{ "key": "man_made", "value": "telescope", "label": "Telescope", "description": `Telescope: an instrument that aids in the observation of remote objects by collecting light or radio waves`, "category": "Man_made" },

{ "key": "man_made", "value": "tower", "label": "Tower", "description": `A tower is a free-standing structure which is higher than it is wide.`, "category": "Man_made" },

{ "key": "man_made", "value": "video_wall", "label": "Video wall", "description": `A digital screen, typically constructed out of smaller LED panels.`, "category": "Man_made" },

{ "key": "man_made", "value": "wastewater_plant", "label": "Wastewater plant", "description": `A wastewater plant is a facility used to treat wastewater.`, "category": "Man_made" },

{ "key": "man_made", "value": "watermill", "label": "Watermill", "description": `A mill driven by water power.`, "category": "Man_made" },

{ "key": "man_made", "value": "water_tower", "label": "Water tower", "description": `Structure with a water tank at an altitude to increase pressure in water network`, "category": "Man_made" },

{ "key": "man_made", "value": "water_well", "label": "Water well", "description": `A structural facility to access ground water, created by digging or drilling.`, "category": "Man_made" },

{ "key": "man_made", "value": "water_tap", "label": "Water tap", "description": `Publicly usable water tap`, "category": "Man_made" },

{ "key": "man_made", "value": "water_works", "label": "Water works", "description": `A place where drinking water is found and applied to the local waterpipes network.`, "category": "Man_made" },

{ "key": "man_made", "value": "wildlife_crossing", "label": "Wildlife crossing", "description": `Structure that allow animals to cross human barriers safely.`, "category": "Man_made" },

{ "key": "man_made", "value": "windmill", "label": "Windmill", "description": `A traditional windmill, historically used to mill grain with wind power.`, "category": "Man_made" },

{ "key": "man_made", "value": "works", "label": "Works", "description": `A factory or industrial production plant`, "category": "Man_made" },

{ "key": "man_made", "value": "yes", "label": "Yes", "description": ``, "category": "Man_made" },

{ "key": "military", "value": "airfield", "label": "Airfield", "description": `A place where military planes take off and land.`, "category": "Military" },

{ "key": "military", "value": "base", "label": "Base", "description": `A facility where military personnel and equipment are based.`, "category": "Military" },

{ "key": "military", "value": "bunker", "label": "Bunker", "description": `A building reinforced to withstand attack`, "category": "Military" },

{ "key": "military", "value": "barracks", "label": "Barracks", "description": `Buildings where military personnel live and sleep`, "category": "Military" },

{ "key": "military", "value": "checkpoint", "label": "Checkpoint", "description": `Place where civilian visitors and vehicles will be checked by a military authority.`, "category": "Military" },

{ "key": "military", "value": "danger_area", "label": "Danger area", "description": `A danger area is a restricted area posing a threat to life or property.`, "category": "Military" },

{ "key": "military", "value": "nuclear_explosion_site", "label": "Nuclear explosion site", "description": `Nuclear weapons test site`, "category": "Military" },

{ "key": "military", "value": "obstacle_course", "label": "Obstacle course", "description": `A military obstacle course: a series of challenging physical obstructions an individual or team must navigate usually while being timed`, "category": "Military" },

{ "key": "military", "value": "office", "label": "Office", "description": `Military offices, e.g. general staff office, military recruitment office etc`, "category": "Military" },

{ "key": "military", "value": "range", "label": "Range", "description": `Where military personnel practice with their weapons (firing, bombing, artillery, …)`, "category": "Military" },

{ "key": "military", "value": "training_area", "label": "Training area", "description": `A military training area/proving ground`, "category": "Military" },

{ "key": "military", "value": "trench", "label": "Trench", "description": `A military trench: an excavation in the ground that is generally deeper than it is wide, dug into the ground as a barrier for military purposes (e.g. trench warfare)`, "category": "Military" },

{ "key": "natural", "value": "fell", "label": "Fell", "description": `Habitat above tree line covered with grass, dwarf shrubs and mosses.`, "category": "Natural" },

{ "key": "natural", "value": "grassland", "label": "Grassland", "description": `Areas where the vegetation is dominated by grasses (Poaceae) and other herbaceous (non-woody) plants.`, "category": "Natural" },

{ "key": "natural", "value": "heath", "label": "Heath", "description": `A dwarf-shrub habitat, characterised by open, low growing woody vegetation, often dominated by plants of the Ericaceae.`, "category": "Natural" },

{ "key": "natural", "value": "moor", "label": "Moor", "description": `Don't use, see wikipage`, "category": "Natural" },

{ "key": "natural", "value": "scrub", "label": "Scrub", "description": `Uncultivated land covered with shrubs, bushes or stunted trees.`, "category": "Natural" },

{ "key": "natural", "value": "shrubbery", "label": "Shrubbery", "description": `An area of shrubbery that is actively maintained or pruned by humans. A slightly wilder look is also possible.`, "category": "Natural" },

{ "key": "natural", "value": "tree", "label": "Tree", "description": `A single tree`, "category": "Natural" },

{ "key": "natural", "value": "tree_row", "label": "Tree row", "description": `A line of trees`, "category": "Natural" },

{ "key": "natural", "value": "tundra", "label": "Tundra", "description": `Treeless cold climate habitat with open, low growing sedges, grasses, mosses and lichens.`, "category": "Natural" },

{ "key": "natural", "value": "wood", "label": "Wood", "description": `Tree-covered area (a 'forest' or 'wood')`, "category": "Natural" },

{ "key": "natural", "value": "bay", "label": "Bay", "description": `Named area of water mostly surrounded by land but with level connection to the ocean or a lake.`, "category": "Natural" },

{ "key": "natural", "value": "beach", "label": "Beach", "description": `landform along a body of water which consists of sand, shingle or other loose material`, "category": "Natural" },

{ "key": "natural", "value": "blowhole", "label": "Blowhole", "description": `An opening to a sea cave which has grown landwards resulting in blasts of water from the opening due to the wave action.`, "category": "Natural" },

{ "key": "natural", "value": "cape", "label": "Cape", "description": `A piece of elevated land sticking out into the sea or large lake.`, "category": "Natural" },

{ "key": "natural", "value": "coastline", "label": "Coastline", "description": `The mean high water (springs) line between the sea and land (with the water on the right side of the way)`, "category": "Natural" },

{ "key": "natural", "value": "crevasse", "label": "Crevasse", "description": `A large crack in a glacier`, "category": "Natural" },

{ "key": "natural", "value": "geyser", "label": "Geyser", "description": `A spring characterized by intermittent discharge of water ejected turbulently and accompanied by steam`, "category": "Natural" },

{ "key": "natural", "value": "glacier", "label": "Glacier", "description": `A permanent body of ice formed naturally from snow that is moving under its own weight.`, "category": "Natural" },

{ "key": "natural", "value": "hot_spring", "label": "Hot spring", "description": `A spring of geothermally heated groundwater`, "category": "Natural" },

{ "key": "natural", "value": "isthmus", "label": "Isthmus", "description": `A narrow strip of land, bordered by water on both sides and connecting two larger land masses`, "category": "Natural" },

{ "key": "natural", "value": "mud", "label": "Mud", "description": `Area covered with mud: water saturated fine grained soil without significant plant growth.`, "category": "Natural" },

{ "key": "natural", "value": "peninsula", "label": "Peninsula", "description": `A piece of land projecting into water from a larger land mass, nearly surrounded by water`, "category": "Natural" },

{ "key": "natural", "value": "reef", "label": "Reef", "description": `A feature (rock, sandbar, coral, etc) lying permanently beneath the surface of the water.`, "category": "Natural" },

{ "key": "natural", "value": "shingle", "label": "Shingle", "description": `An accumulation of rounded rock fragments on a beach or riverbed`, "category": "Natural" },

{ "key": "natural", "value": "shoal", "label": "Shoal", "description": `An area of the water floor which nears the water surface and is exposed at low tide or when a river/lake is not full of water.`, "category": "Natural" },

{ "key": "natural", "value": "spring", "label": "Spring", "description": `A place where ground water flows naturally from the ground`, "category": "Natural" },

{ "key": "natural", "value": "strait", "label": "Strait", "description": `A narrow area of water surrounded by land on two sides and by water on two other sides.`, "category": "Natural" },

{ "key": "natural", "value": "water", "label": "Water", "description": `Any inland body of water, from natural such as a lake or pond to artificial like a moat or canal`, "category": "Natural" },

{ "key": "natural", "value": "wetland", "label": "Wetland", "description": `A natural area subject to inundation or with waterlogged ground`, "category": "Natural" },

{ "key": "natural", "value": "arch", "label": "Arch", "description": `A rock arch naturally formed by erosion, with an opening underneath.`, "category": "Natural" },

{ "key": "natural", "value": "arete", "label": "Arete", "description": `A thin, almost knife-like, ridge of rock which is typically formed when two glaciers erode parallel U-shaped valleys`, "category": "Natural" },

{ "key": "natural", "value": "bare_rock", "label": "Bare rock", "description": `An area with sparse or no vegetation, so that the bedrock becomes visible`, "category": "Natural" },

{ "key": "natural", "value": "cave_entrance", "label": "Cave entrance", "description": `An entrance to a cave: a natural underground space large enough for a human to enter`, "category": "Natural" },

{ "key": "natural", "value": "cliff", "label": "Cliff", "description": `A vertical or almost vertical natural drop in terrain, usually with a bare rock surface. The bottom of the cliff is on the right side of the way.`, "category": "Natural" },

{ "key": "natural", "value": "dune", "label": "Dune", "description": `A hill of sand formed by wind, covered with no or very little vegetation`, "category": "Natural" },

{ "key": "natural", "value": "earth_bank", "label": "Earth bank", "description": `Large erosion gully or steep earth bank.`, "category": "Natural" },

{ "key": "natural", "value": "fumarole", "label": "Fumarole", "description": `A fumarole is an opening in a planet's crust, which emits steam and gases`, "category": "Natural" },

{ "key": "natural", "value": "hill", "label": "Hill", "description": `A hill`, "category": "Natural" },

{ "key": "natural", "value": "peak", "label": "Peak", "description": `The top (summit) of a hill or mountain.`, "category": "Natural" },

{ "key": "natural", "value": "ridge", "label": "Ridge", "description": `A mountain landform with a continuous elevated crest or linear hill`, "category": "Natural" },

{ "key": "natural", "value": "rock", "label": "Rock", "description": `A notable rock or group of rocks attached to the underlying bedrock`, "category": "Natural" },

{ "key": "natural", "value": "saddle", "label": "Saddle", "description": `The lowest point along a ridge or between two mountain tops`, "category": "Natural" },

{ "key": "natural", "value": "sand", "label": "Sand", "description": `An area covered by sand with no or very little vegetation.`, "category": "Natural" },

{ "key": "natural", "value": "scree", "label": "Scree", "description": `Unconsolidated angular stones formed by rockfall and weathering from adjacent rockfaces`, "category": "Natural" },

{ "key": "natural", "value": "sinkhole", "label": "Sinkhole", "description": `A natural depression or hole in the surface topography.`, "category": "Natural" },

{ "key": "natural", "value": "stone", "label": "Stone", "description": `A single notable freestanding rock, which may differ from the composition of the terrain it lies in.`, "category": "Natural" },

{ "key": "natural", "value": "valley", "label": "Valley", "description": `A natural depression flanked by ridges or ranges of mountains or hills`, "category": "Natural" },

{ "key": "natural", "value": "volcano", "label": "Volcano", "description": `An opening exposed on the earth's surface where volcanic material is emitted.`, "category": "Natural" },

{ "key": "office", "value": "accountant", "label": "Accountant", "description": `An office for an accountant.`, "category": "Office" },

{ "key": "office", "value": "administrative", "label": "Administrative", "description": ``, "category": "Office" },

{ "key": "office", "value": "advertising_agency", "label": "Advertising agency", "description": `A service-based business dedicated to creating, planning, and handling advertising.`, "category": "Office" },

{ "key": "office", "value": "architect", "label": "Architect", "description": `An office for an architect or group of architects.`, "category": "Office" },

{ "key": "office", "value": "association", "label": "Association", "description": `An office of a non-profit organisation, society, e.g. student, sport, consumer, automobile, bike association, etc.`, "category": "Office" },

{ "key": "office", "value": "chamber", "label": "Chamber", "description": `professional chamber`, "category": "Office" },

{ "key": "office", "value": "charity", "label": "Charity", "description": `An office of a charitable organization`, "category": "Office" },

{ "key": "office", "value": "company", "label": "Company", "description": `An office of a private company`, "category": "Office" },

{ "key": "office", "value": "construction_company", "label": "Construction company", "description": ``, "category": "Office" },

{ "key": "office", "value": "consulting", "label": "Consulting", "description": `An office for a consulting firm, providing expert professional advice to other companies or organisations.`, "category": "Office" },

{ "key": "office", "value": "courier", "label": "Courier", "description": `A courier company`, "category": "Office" },

{ "key": "office", "value": "coworking", "label": "Coworking", "description": `An office where people can go to work (typically requires a fee); not limited to a single employer`, "category": "Office" },

{ "key": "office", "value": "diplomatic", "label": "Diplomatic", "description": `An embassy, diplomatic mission, consulate or liaison office of a foreign government or parastatal entity in a host country.`, "category": "Office" },

{ "key": "office", "value": "educational_institution", "label": "Educational institution", "description": `An office for an educational institution.`, "category": "Office" },

{ "key": "office", "value": "employment_agency", "label": "Employment agency", "description": `An office for an employment service.`, "category": "Office" },

{ "key": "office", "value": "energy_supplier", "label": "Energy supplier", "description": `An office for a energy supplier.`, "category": "Office" },

{ "key": "office", "value": "engineer", "label": "Engineer", "description": `An office for an engineer or group of engineers.`, "category": "Office" },

{ "key": "office", "value": "estate_agent", "label": "Estate agent", "description": `A place where you can rent or buy a house.`, "category": "Office" },

{ "key": "office", "value": "financial", "label": "Financial", "description": `An office of a company in the financial sector`, "category": "Office" },

{ "key": "office", "value": "financial_advisor", "label": "Financial advisor", "description": `A professional who offers financial planning and sells financial services to clients.`, "category": "Office" },

{ "key": "office", "value": "forestry", "label": "Forestry", "description": `A forestry office`, "category": "Office" },

{ "key": "office", "value": "foundation", "label": "Foundation", "description": `An office of a foundation`, "category": "Office" },

{ "key": "office", "value": "geodesist", "label": "Geodesist", "description": `An office of a person doing land surveys.`, "category": "Office" },

{ "key": "office", "value": "government", "label": "Government", "description": `An office of a (supra)national, regional or local government agency or department`, "category": "Office" },

{ "key": "office", "value": "graphic_design", "label": "Graphic design", "description": `An office of a graphic designer`, "category": "Office" },

{ "key": "office", "value": "guide", "label": "Guide", "description": `An office for tour guides, mountain guides, dive guides, etc.`, "category": "Office" },

{ "key": "office", "value": "harbour_master", "label": "Harbour master", "description": `The Harbourmaster's office`, "category": "Office" },

{ "key": "office", "value": "insurance", "label": "Insurance", "description": `An office at which you can take out insurance policies.`, "category": "Office" },

{ "key": "office", "value": "it", "label": "It", "description": `An office for an IT specialist.`, "category": "Office" },

{ "key": "office", "value": "lawyer", "label": "Lawyer", "description": `An office for a lawyer.`, "category": "Office" },

{ "key": "office", "value": "logistics", "label": "Logistics", "description": `An office for a forwarder / hauler.`, "category": "Office" },

{ "key": "office", "value": "moving_company", "label": "Moving company", "description": `An office which offers a relocation service.`, "category": "Office" },

{ "key": "office", "value": "newspaper", "label": "Newspaper", "description": `An office of a newspaper`, "category": "Office" },

{ "key": "office", "value": "ngo", "label": "Ngo", "description": `An office for a non-profit, non-governmental organisation (NGO).`, "category": "Office" },

{ "key": "office", "value": "notary", "label": "Notary", "description": `An office for a notary public (common law)`, "category": "Office" },

{ "key": "office", "value": "political_party", "label": "Political party", "description": `An office of a political party`, "category": "Office" },

{ "key": "office", "value": "property_management", "label": "Property management", "description": `Office of a company, which manages a real estate property.`, "category": "Office" },

{ "key": "office", "value": "quango", "label": "Quango", "description": `An office of a quasi-autonomous non-governmental organisation.`, "category": "Office" },

{ "key": "office", "value": "religion", "label": "Religion", "description": `office of a community of faith`, "category": "Office" },

{ "key": "office", "value": "research", "label": "Research", "description": `An office for research and development`, "category": "Office" },

{ "key": "office", "value": "security", "label": "Security", "description": `An office for private security guards`, "category": "Office" },

{ "key": "office", "value": "surveyor", "label": "Surveyor", "description": `An office of a person doing technical surveys, such as land surveys or risk and damage evaluations of properties and equipment.`, "category": "Office" },

{ "key": "office", "value": "tax_advisor", "label": "Tax advisor", "description": `An office for a financial expert specially trained in tax law`, "category": "Office" },

{ "key": "office", "value": "telecommunication", "label": "Telecommunication", "description": `An office for a telecommunication company`, "category": "Office" },

{ "key": "office", "value": "therapist", "label": "Therapist", "description": ``, "category": "Office" },

{ "key": "office", "value": "travel_agent", "label": "Travel agent", "description": `An office of a travel agent`, "category": "Office" },

{ "key": "office", "value": "union", "label": "Union", "description": `An office of a trade union, an association of workers forming a bargaining unit`, "category": "Office" },

{ "key": "office", "value": "visa", "label": "Visa", "description": `An office of an organisation or business which offers visa assistance`, "category": "Office" },

{ "key": "office", "value": "water_utility", "label": "Water utility", "description": `The office for a water utility company or water board.`, "category": "Office" },

{ "key": "office", "value": "yes", "label": "Yes", "description": `Generic tag for unspecified office type.`, "category": "Office" },

{ "key": "place", "value": "country", "label": "Country", "description": `A nation state or other high-level national political/administrative area.`, "category": "Administratively declared places" },

{ "key": "place", "value": "state", "label": "State", "description": `A large sub-national political/administrative area.`, "category": "Administratively declared places" },

{ "key": "place", "value": "region", "label": "Region", "description": `Used both as a broad tag for geographic or historical areas with no clear boundary and for distinct administration areas (with specific boundaries) in some countries.`, "category": "Administratively declared places" },

{ "key": "place", "value": "province", "label": "Province", "description": `A province`, "category": "Administratively declared places" },

{ "key": "place", "value": "district", "label": "District", "description": `A district - a type of administrative division that, in some countries, is managed by local government.`, "category": "Administratively declared places" },

{ "key": "place", "value": "county", "label": "County", "description": `A county - a geographical region of a country.`, "category": "Administratively declared places" },

{ "key": "place", "value": "municipality", "label": "Municipality", "description": `A municipality - single urban administrative division having corporate status.`, "category": "Administratively declared places" },

{ "key": "place", "value": "city", "label": "City", "description": `The largest urban settlement or settlements within the territory.`, "category": "Populated settlements, urban" },

{ "key": "place", "value": "borough", "label": "Borough", "description": `A part in larger city grouped into administrative unit.`, "category": "Populated settlements, urban" },

{ "key": "place", "value": "suburb", "label": "Suburb", "description": `A part of a town or city with a well-known name and often a distinct identity.`, "category": "Populated settlements, urban" },

{ "key": "place", "value": "quarter", "label": "Quarter", "description": `A quarter is a named, geographically localised place within a suburb of a larger city or within a town which is bigger than a neighbourhood`, "category": "Populated settlements, urban" },

{ "key": "place", "value": "neighbourhood", "label": "Neighbourhood", "description": `A neighbourhood is a smaller named, geographically localised place within a suburb of a larger city or within a town or village`, "category": "Populated settlements, urban" },

{ "key": "place", "value": "city_block", "label": "City block", "description": `A named city block, usually surrounded by streets.`, "category": "Populated settlements, urban" },

{ "key": "place", "value": "plot", "label": "Plot", "description": `A named plot is a tract or parcel of land owned or meant to be owned by some owner.`, "category": "Populated settlements, urban" },

{ "key": "place", "value": "town", "label": "Town", "description": `An important urban centre, between a village and a city in size.`, "category": "Populated settlements, urban and rural" },

{ "key": "place", "value": "village", "label": "Village", "description": `A smaller distinct settlement, smaller than a town with few facilities available with people traveling to nearby towns to access these.`, "category": "Populated settlements, urban and rural" },

{ "key": "place", "value": "hamlet", "label": "Hamlet", "description": `A smaller rural community, typically with fewer than 100-200 inhabitants, and little infrastructure.`, "category": "Populated settlements, urban and rural" },

{ "key": "place", "value": "isolated_dwelling", "label": "Isolated dwelling", "description": `The smallest kind of settlement (1-2 households).`, "category": "Populated settlements, urban and rural" },

{ "key": "place", "value": "farm", "label": "Farm", "description": `An individually named farm.`, "category": "Populated settlements, urban and rural" },

{ "key": "place", "value": "allotments", "label": "Allotments", "description": `A separate settlement, which is located outside an officially inhabited locality and has its own addressing`, "category": "Populated settlements, urban and rural" },

{ "key": "place", "value": "continent", "label": "Continent", "description": `One of the seven continents: Africa, Antarctica, Asia, Australia, Europe, North America, South America`, "category": "Other places" },

{ "key": "place", "value": "archipelago", "label": "Archipelago", "description": `A named group or chain of closely related islands and islets.`, "category": "Other places" },

{ "key": "place", "value": "island", "label": "Island", "description": `Any piece of land that is completely surrounded by water and isolated from other significant landmasses.`, "category": "Other places" },

{ "key": "place", "value": "islet", "label": "Islet", "description": `A very small island.`, "category": "Other places" },

{ "key": "place", "value": "square", "label": "Square", "description": `A town or village square: a (typically) paved open space, generally of architectural significance, which is surrounded by buildings in a built-up area such as a city, town or village.`, "category": "Other places" },

{ "key": "place", "value": "locality", "label": "Locality", "description": `A named place that has no population.`, "category": "Other places" },

{ "key": "place", "value": "sea", "label": "Sea", "description": `A part of an ocean.`, "category": "Other places" },

{ "key": "place", "value": "ocean", "label": "Ocean", "description": `The world's five main major oceanic divisions.`, "category": "Other places" },

{ "key": "power", "value": "cable", "label": "Cable", "description": `An insulated cable carrying electrical power, such as transmission or distribution cables located underground and undersea cables`, "category": "Power" },

{ "key": "power", "value": "catenary_mast", "label": "Catenary mast", "description": `A pole supporting the overhead wires used to supply electricity to vehicles equipped with a pantograph such as trams and trains`, "category": "Power" },

{ "key": "power", "value": "compensator", "label": "Compensator", "description": `A static power device used to ensure power quality and electrical network resilience.`, "category": "Power" },

{ "key": "power", "value": "connection", "label": "Connection", "description": `A freestanding electrical connection between two or more overhead wires`, "category": "Power" },

{ "key": "power", "value": "converter", "label": "Converter", "description": `A device to convert power between alternating and direct current electrical power: often, but not only, over high voltage networks`, "category": "Power" },

{ "key": "power", "value": "generator", "label": "Generator", "description": `A device which converts one form of energy to another, for example, an electrical generator.`, "category": "Power" },

{ "key": "power", "value": "heliostat", "label": "Heliostat", "description": `A mirror of a heliostat device`, "category": "Power" },

{ "key": "power", "value": "insulator", "label": "Insulator", "description": `An electrical insulator which connects a power line to a support structure and prevents grounding.`, "category": "Power" },

{ "key": "power", "value": "line", "label": "Line", "description": `High-voltage power lines used for power transmission, usually supported by towers or pylons`, "category": "Power" },

{ "key": "line", "value": "busbar", "label": "Busbar", "description": `Identifies a power line as a busbar, the central connection in a substation`, "category": "Line" },

{ "key": "line", "value": "bay", "label": "Bay", "description": `A power line within a substation which connects a circuit to a busbar`, "category": "Line" },

{ "key": "power", "value": "minor_line", "label": "Minor line", "description": `Minor power lines forming the distribution grid, usually carried by poles.`, "category": "Power" },

{ "key": "power", "value": "plant", "label": "Plant", "description": `An industrial facility where power (electricity, useful heat, biogas) is produced by individual power generator units.`, "category": "Power" },

{ "key": "power", "value": "pole", "label": "Pole", "description": `A single pole supporting power lines, often a wood, steel or concrete mast designed to carry minor power lines.`, "category": "Power" },

{ "key": "power", "value": "portal", "label": "Portal", "description": `A supporting structure for power lines, composed of vertical legs with cables between them attached to a horizontal crossarm`, "category": "Power" },

{ "key": "power", "value": "substation", "label": "Substation", "description": `A facility which controls the flow of electricity in a power network with transformers, switchgear or compensators.`, "category": "Power" },

{ "key": "power", "value": "switch", "label": "Switch", "description": `A device which allows electrical network operators to power up & down lines and transformers in substations or along the power grid.`, "category": "Power" },

{ "key": "power", "value": "switchgear", "label": "Switchgear", "description": `A switchgear, which comprises one or more busbar assemblies and a number of bays each connecting a circuit to the busbar assembly.`, "category": "Power" },

{ "key": "power", "value": "terminal", "label": "Terminal", "description": `A point of connection where an overhead power line ends on a building or wall, for example, when connecting it to an indoor substation`, "category": "Power" },

{ "key": "power", "value": "tower", "label": "Tower", "description": `A tower or pylon carrying high voltage electricity cables. Often constructed from steel latticework but tubular or solid pylons are also used.`, "category": "Power" },

{ "key": "power", "value": "transformer", "label": "Transformer", "description": `A device for stepping up or down electric voltage. Large power transformers are typically located inside substations`, "category": "Power" },

{ "key": "public_transport", "value": "stop_position", "label": "Stop position", "description": `The position on the street or rails where a public transport vehicle stops.`, "category": "Public_transport" },

{ "key": "public_transport", "value": "platform", "label": "Platform", "description": `The place where passengers are waiting for the public transport vehicles.`, "category": "Public_transport" },

{ "key": "public_transport", "value": "station", "label": "Station", "description": `A station is an area designed to access public transport.`, "category": "Public_transport" },

{ "key": "public_transport", "value": "stop_area", "label": "Stop area", "description": `A relation that contains all elements of a train, subway, monorail, tram, bus, trolleybus, aerialway, or ferry stop.`, "category": "Public_transport" },

{ "key": "railway", "value": "abandoned", "label": "Abandoned", "description": `The course of a former railway which has been abandoned and the track removed. The course is still recognized through embankments, cuttings, tree rows, bridges, tunnels, remaining track ties, building shapes and rolling or straight ways. For demolished rails that are no longer identifiable, e.g. that have been built over, some use highly questionale railway=razed`, "category": "Railway" },

{ "key": "railway", "value": "construction", "label": "Construction", "description": `Railway under construction.`, "category": "Railway" },

{ "key": "railway", "value": "disused", "label": "Disused", "description": `A section of railway which is no longer used but where the track and infrastructure remains in place. The track is likely overgrown.`, "category": "Railway" },

{ "key": "railway", "value": "funicular", "label": "Funicular", "description": `Cable driven inclined railways on a steep slope, with a pair of cars connected by one cable`, "category": "Railway" },

{ "key": "railway", "value": "light_rail", "label": "Light rail", "description": `A higher-standard tram system, normally in its own right-of-way. Often it connects towns and thus reaches a considerable length (tens of kilometers).`, "category": "Railway" },

{ "key": "railway", "value": "miniature", "label": "Miniature", "description": `Miniature railways are narrower than narrow gauge and carry passengers, frequently at an exact scale of "standard-sized" rail (for example "1/4 scale"). They can often be found in parks.`, "category": "Railway" },

{ "key": "railway", "value": "monorail", "label": "Monorail", "description": `A railway with only a single rail. A monorail can run above the rail like in Las Vegas and Disneyland or can suspend below the rail like the Wuppertal Schwebebahn (Germany).`, "category": "Railway" },

{ "key": "railway", "value": "narrow_gauge", "label": "Narrow gauge", "description": `Narrow-gauge passenger or freight trains. Narrow gauge railways can have mainline railway service like the Rhaetian Railway in Switzerland or can be a small light industrial railway. Use gauge=* to specify the actual width of rails in mm.`, "category": "Railway" },

{ "key": "railway", "value": "preserved", "label": "Preserved", "description": `A railway running historic trains, usually a tourist attraction. Using railway:preserved=yes is an alternate method to mark railway as preserved.`, "category": "Railway" },

{ "key": "railway", "value": "rail", "label": "Rail", "description": `Full sized passenger or freight trains in the standard gauge for the country or state.`, "category": "Railway" },

{ "key": "railway", "value": "subway", "label": "Subway", "description": `A city passenger rail service running mostly grade separated (see Wikipedia:rapid transit). Often a significant portion of the line or its system/network is underground.`, "category": "Railway" },

{ "key": "railway", "value": "tram", "label": "Tram", "description": `One or two carriage rail vehicles, usually sharing motor road, sometimes called "street running" (Other languages).`, "category": "Railway" },

{ "key": "railway", "value": "halt", "label": "Halt", "description": `A small station without switches`, "category": "Railway" },

{ "key": "railway", "value": "platform", "label": "Platform", "description": `This is parallel to the rail line for showing where the actual platforms are. It is also to know where you can change platform and enter the station, so use footpaths to connect them. This is really useful for routing too. Use in addition to public_transport=platform.`, "category": "Railway" },

{ "key": "railway", "value": "station", "label": "Station", "description": `Railway passenger and/or cargo station. Use in addition to public_transport=station.`, "category": "Railway" },

{ "key": "railway", "value": "subway_entrance", "label": "Subway entrance", "description": `The entrance to a subway station, usually going from surface to underground.`, "category": "Railway" },

{ "key": "railway", "value": "tram_stop", "label": "Tram stop", "description": `A tram stop is a place where a passenger can embark / disembark a tram.`, "category": "Railway" },

{ "key": "railway", "value": "buffer_stop", "label": "Buffer stop", "description": `stops the train at the end of a track. see Buffer_stop.`, "category": "Railway" },

{ "key": "railway", "value": "derail", "label": "Derail", "description": `a device used to prevent fouling of a rail track by unauthorized movements of trains or unattended rolling stock. See Derail_(railroad).`, "category": "Railway" },

{ "key": "railway", "value": "crossing", "label": "Crossing", "description": `A point where pedestrians may cross.`, "category": "Railway" },

{ "key": "railway", "value": "level_crossing", "label": "Level crossing", "description": `A point where rails and roads cross.`, "category": "Railway" },

{ "key": "landuse", "value": "railway", "label": "Railway", "description": `Ground used around railways and railway-stations.`, "category": "Landuse" },

{ "key": "railway", "value": "signal", "label": "Signal", "description": `Any kind of railway signal.`, "category": "Railway" },

{ "key": "railway", "value": "switch", "label": "Switch", "description": `Full connections between railways (aka 'points').`, "category": "Railway" },

{ "key": "railway", "value": "railway_crossing", "label": "Railway crossing", "description": `Crossing rails with no interconnection.`, "category": "Railway" },

{ "key": "railway", "value": "turntable", "label": "Turntable", "description": `These are used for changing the direction that part of a train is pointing in.`, "category": "Railway" },

{ "key": "railway", "value": "roundhouse", "label": "Roundhouse", "description": `A semicircular building with many stalls for servicing engines.`, "category": "Railway" },

{ "key": "railway", "value": "traverser", "label": "Traverser", "description": `These are used for changing trains between railways. Also known as transfer table.`, "category": "Railway" },

{ "key": "railway", "value": "wash", "label": "Wash", "description": `A Railroad car wash`, "category": "Railway" },

{ "key": "railway", "value": "water_crane", "label": "Water crane", "description": `A structure to deliver water to steam locomotives`, "category": "Railway" },

{ "key": "railway", "value": "user defined", "label": "User defined", "description": `All commonly used values according to Taginfo`, "category": "Railway" },

{ "key": "route", "value": "bicycle", "label": "Bicycle", "description": `Cycle routes or bicycles route are named, numbered or otherwise signed. May go along roads, trails or dedicated cycle paths`, "category": "Route" },

{ "key": "route", "value": "bus", "label": "Bus", "description": `The route a public bus service takes. See Buses.`, "category": "Route" },

{ "key": "route", "value": "canoe", "label": "Canoe", "description": `Signed route for canoeing through a waterway.`, "category": "Route" },

{ "key": "route", "value": "detour", "label": "Detour", "description": `Route for fixed detour routes. Examples are Bedarfsumleitung in Germany and uitwijkroute in the Netherlands`, "category": "Route" },

{ "key": "route", "value": "ferry", "label": "Ferry", "description": `The route a ferry takes from terminal to terminal Please make sure to add at least one node per tile (zoom level 12), better at least one every few km, so offline editors catch it with bbox requests.`, "category": "Route" },

{ "key": "route", "value": "foot", "label": "Foot", "description": `Walking Route - is used for routes which are walkable without any limitations regarding fitness, equipment or weather conditions.`, "category": "Route" },

{ "key": "route", "value": "hiking", "label": "Hiking", "description": `Hiking explains how to tag hiking routes.`, "category": "Route" },

{ "key": "route", "value": "horse", "label": "Horse", "description": `Riding routes`, "category": "Route" },

{ "key": "route", "value": "inline_skates", "label": "Inline skates", "description": `Inline has more information on the subject.`, "category": "Route" },

{ "key": "route", "value": "light_rail", "label": "Light rail", "description": `Route of a light rail line.`, "category": "Route" },

{ "key": "route", "value": "mtb", "label": "Mtb", "description": `Mountain biking explains how to tag mtb routes.`, "category": "Route" },

{ "key": "route", "value": "piste", "label": "Piste", "description": `Route of a piste (e.g., snowshoe or XC-Ski trails) in a winter sport area.`, "category": "Route" },

{ "key": "route", "value": "railway", "label": "Railway", "description": `A sequence of railway ways, often named (e.g., Channel Tunnel). See Railways.`, "category": "Route" },

{ "key": "route", "value": "road", "label": "Road", "description": `Can be used to map various road routes/long roads.`, "category": "Route" },

{ "key": "route", "value": "running", "label": "Running", "description": `For running (jogging) routes.`, "category": "Route" },

{ "key": "route", "value": "ski", "label": "Ski", "description": `For ski tracks (e.g., XC-Ski Trails User:Langläufer/Loipemap).`, "category": "Route" },

{ "key": "route", "value": "subway", "label": "Subway", "description": `Route of a metro service`, "category": "Route" },

{ "key": "route", "value": "train", "label": "Train", "description": `Train services (e.g., London-Paris Eurostar) See Railways.`, "category": "Route" },

{ "key": "route", "value": "tracks", "label": "Tracks", "description": `Railroad track as rail infrastructure.`, "category": "Route" },

{ "key": "route", "value": "tram", "label": "Tram", "description": `See Trams for more information on tagging tram services.`, "category": "Route" },

{ "key": "route", "value": "trolleybus", "label": "Trolleybus", "description": `The route of a trolleybus service.`, "category": "Route" },

{ "key": "route", "value": "User defined", "label": "User defined", "description": `All commonly used values according to Taginfo.`, "category": "Route" },

{ "key": "shop", "value": "alcohol", "label": "Alcohol", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "bakery", "label": "Bakery", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "beverages", "label": "Beverages", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "brewing_supplies", "label": "Brewing supplies", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "butcher", "label": "Butcher", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "cheese", "label": "Cheese", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "chocolate", "label": "Chocolate", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "coffee", "label": "Coffee", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "confectionery", "label": "Confectionery", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "convenience", "label": "Convenience", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "deli", "label": "Deli", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "dairy", "label": "Dairy", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "farm", "label": "Farm", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "frozen_food", "label": "Frozen food", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "greengrocer", "label": "Greengrocer", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "health_food", "label": "Health food", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "ice_cream", "label": "Ice cream", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "organic", "label": "Organic", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "pasta", "label": "Pasta", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "pastry", "label": "Pastry", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "seafood", "label": "Seafood", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "spices", "label": "Spices", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "tea", "label": "Tea", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "wine", "label": "Wine", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "water", "label": "Water", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "department_store", "label": "Department store", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "general", "label": "General", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "kiosk", "label": "Kiosk", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "mall", "label": "Mall", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "supermarket", "label": "Supermarket", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "wholesale", "label": "Wholesale", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "baby_goods", "label": "Baby goods", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "bag", "label": "Bag", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "boutique", "label": "Boutique", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "clothes", "label": "Clothes", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "fabric", "label": "Fabric", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "fashion", "label": "Fashion", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "fashion_accessories", "label": "Fashion accessories", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "jewelry", "label": "Jewelry", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "leather", "label": "Leather", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "sewing", "label": "Sewing", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "shoes", "label": "Shoes", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "tailor", "label": "Tailor", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "watches", "label": "Watches", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "wool", "label": "Wool", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "charity", "label": "Charity", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "second_hand", "label": "Second hand", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "variety_store", "label": "Variety store", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "beauty", "label": "Beauty", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "chemist", "label": "Chemist", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "cosmetics", "label": "Cosmetics", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "drugstore", "label": "Drugstore", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "erotic", "label": "Erotic", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "hairdresser", "label": "Hairdresser", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "hairdresser_supply", "label": "Hairdresser supply", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "hearing_aids", "label": "Hearing aids", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "herbalist", "label": "Herbalist", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "massage", "label": "Massage", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "medical_supply", "label": "Medical supply", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "nutrition_supplements", "label": "Nutrition supplements", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "optician", "label": "Optician", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "perfumery", "label": "Perfumery", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "tattoo", "label": "Tattoo", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "agrarian", "label": "Agrarian", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "appliance", "label": "Appliance", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "bathroom_furnishing", "label": "Bathroom furnishing", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "doityourself", "label": "Doityourself", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "electrical", "label": "Electrical", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "energy", "label": "Energy", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "fireplace", "label": "Fireplace", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "florist", "label": "Florist", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "garden_centre", "label": "Garden centre", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "garden_furniture", "label": "Garden furniture", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "gas", "label": "Gas", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "glaziery", "label": "Glaziery", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "groundskeeping", "label": "Groundskeeping", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "hardware", "label": "Hardware", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "houseware", "label": "Houseware", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "locksmith", "label": "Locksmith", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "paint", "label": "Paint", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "security", "label": "Security", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "trade", "label": "Trade", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "windows", "label": "Windows", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "antiques", "label": "Antiques", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "bed", "label": "Bed", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "candles", "label": "Candles", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "carpet", "label": "Carpet", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "curtain", "label": "Curtain", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "doors", "label": "Doors", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "flooring", "label": "Flooring", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "furniture", "label": "Furniture", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "household_linen", "label": "Household linen", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "interior_decoration", "label": "Interior decoration", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "kitchen", "label": "Kitchen", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "lamps", "label": "Lamps", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "lighting", "label": "Lighting", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "tiles", "label": "Tiles", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "window_blind", "label": "Window blind", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "computer", "label": "Computer", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "electronics", "label": "Electronics", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "hifi", "label": "Hifi", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "mobile_phone", "label": "Mobile phone", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "radiotechnics", "label": "Radiotechnics", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "vacuum_cleaner", "label": "Vacuum cleaner", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "atv", "label": "Atv", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "bicycle", "label": "Bicycle", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "boat", "label": "Boat", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "car", "label": "Car", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "car_repair", "label": "Car repair", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "car_parts", "label": "Car parts", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "caravan", "label": "Caravan", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "fuel", "label": "Fuel", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "fishing", "label": "Fishing", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "golf", "label": "Golf", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "hunting", "label": "Hunting", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "jetski", "label": "Jetski", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "military_surplus", "label": "Military surplus", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "motorcycle", "label": "Motorcycle", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "outdoor", "label": "Outdoor", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "scuba_diving", "label": "Scuba diving", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "ski", "label": "Ski", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "snowmobile", "label": "Snowmobile", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "sports", "label": "Sports", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "swimming_pool", "label": "Swimming pool", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "trailer", "label": "Trailer", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "tyres", "label": "Tyres", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "art", "label": "Art", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "camera", "label": "Camera", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "collector", "label": "Collector", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "craft", "label": "Craft", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "frame", "label": "Frame", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "games", "label": "Games", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "model", "label": "Model", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "music", "label": "Music", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "musical_instrument", "label": "Musical instrument", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "photo", "label": "Photo", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "trophy", "label": "Trophy", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "video", "label": "Video", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "video_games", "label": "Video games", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "anime", "label": "Anime", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "books", "label": "Books", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "gift", "label": "Gift", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "lottery", "label": "Lottery", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "newsagent", "label": "Newsagent", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "stationery", "label": "Stationery", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "ticket", "label": "Ticket", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "bookmaker", "label": "Bookmaker", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "cannabis", "label": "Cannabis", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "copyshop", "label": "Copyshop", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "dry_cleaning", "label": "Dry cleaning", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "e-cigarette", "label": "E-cigarette", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "funeral_directors", "label": "Funeral directors", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "laundry", "label": "Laundry", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "money_lender", "label": "Money lender", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "outpost", "label": "Outpost", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "party", "label": "Party", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "pawnbroker", "label": "Pawnbroker", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "pest_control", "label": "Pest control", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "pet", "label": "Pet", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "pet_grooming", "label": "Pet grooming", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "pyrotechnics", "label": "Pyrotechnics", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "religion", "label": "Religion", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "storage_rental", "label": "Storage rental", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "tobacco", "label": "Tobacco", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "toys", "label": "Toys", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "travel_agency", "label": "Travel agency", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "weapons", "label": "Weapons", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "vacant", "label": "Vacant", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "yes", "label": "Yes", "description": ``, "category": "Shop" },

{ "key": "shop", "value": "user defined", "label": "User defined", "description": ``, "category": "Shop" },

{ "key": "sport", "value": "9pin", "label": "9pin", "description": `A bowling game played in Europe with only 9 pins.`, "category": "Sport" },

{ "key": "sport", "value": "10pin", "label": "10pin", "description": `A bowling game popular in North America with 10 pins.`, "category": "Sport" },

{ "key": "sport", "value": "american_football", "label": "American football", "description": `A sport played by two teams of eleven players on a rectangular field with goalposts at each end.`, "category": "Sport" },

{ "key": "sport", "value": "aikido", "label": "Aikido", "description": `A Japanese martial art by blending with the motion of the attacker and redirecting the force of the attack rather than opposing it head-on.`, "category": "Sport" },

{ "key": "sport", "value": "archery", "label": "Archery", "description": `The art, practice, or skill of propelling arrows with the use of a bow.`, "category": "Sport" },

{ "key": "sport", "value": "athletics", "label": "Athletics", "description": `A collection of sports which combines various athletic contests based on the skills of running, jumping, and throwing.`, "category": "Sport" },

{ "key": "sport", "value": "australian_football", "label": "Australian football", "description": `A sport played between two teams of eighteen players on the field of either an Australian football ground, a modified cricket field, or a similarly sized sports venue, also called football, footy, Aussie rules, or AFL.`, "category": "Sport" },

{ "key": "sport", "value": "badminton", "label": "Badminton", "description": `A racquet sport played by singles or in teams of two, who take positions on opposite halves of a rectangular court (pitch) divided by a net.`, "category": "Sport" },

{ "key": "sport", "value": "bandy", "label": "Bandy", "description": `Bandy is a sport played by two teams of eleven players on a rectangular field.`, "category": "Sport" },

{ "key": "sport", "value": "baseball", "label": "Baseball", "description": `A bat-and-ball game played between two teams of nine players on a field (pitch or stadium) each who take turns batting and fielding.`, "category": "Sport" },

{ "key": "sport", "value": "basketball", "label": "Basketball", "description": `A sport played by two teams of five players on a rectangular court.`, "category": "Sport" },

{ "key": "sport", "value": "beachvolleyball", "label": "Beachvolleyball", "description": `Volleyball played on a sand court`, "category": "Sport" },

{ "key": "sport", "value": "biathlon", "label": "Biathlon", "description": `The biathlon is a winter sport that combines cross-country skiing and rifle shooting.`, "category": "Sport" },

{ "key": "sport", "value": "billiards", "label": "Billiards", "description": `Cue sports, a wide variety of games of skill generally played with a cue stick which is used to strike billiard balls, moving them around a cloth-covered billiards table bounded by rubber cushions.`, "category": "Sport" },

{ "key": "sport", "value": "bmx", "label": "Bmx", "description": `A cycle sport performed on BMX bikes, either in competitive BMX racing or freestyle BMX, or else in general on- or off-road recreation.`, "category": "Sport" },

{ "key": "sport", "value": "bobsleigh", "label": "Bobsleigh", "description": `A winter sport in which teams of two or four make timed runs down narrow, twisting, banked, iced tracks in a gravity-powered sled, also called luge or bobslede.`, "category": "Sport" },

{ "key": "sport", "value": "boules", "label": "Boules", "description": `A group of games in which the objective is to throw or roll heavy balls as close as possible to a small target ball, also called pétanque, lyonnaise, bocce, or bocce volo.`, "category": "Sport" },

{ "key": "sport", "value": "bowls", "label": "Bowls", "description": `Sport in which the objective is to roll biased balls so that they stop close to a smaller ball`, "category": "Sport" },

{ "key": "sport", "value": "boxing", "label": "Boxing", "description": `Boxing is a combat sport in which two people engage in a contest by throwing punches with gloved hands against each other.`, "category": "Sport" },

{ "key": "sport", "value": "bullfighting", "label": "Bullfighting", "description": `Bullfighting, both on foot and on horseback, is a physical contest in which bulls are fought by humans.`, "category": "Sport" },

{ "key": "sport", "value": "canadian_football", "label": "Canadian football", "description": `A sport played by two teams of 12 players on a rectangular field with goal posts at each end.`, "category": "Sport" },

{ "key": "sport", "value": "canoe", "label": "Canoe", "description": `Canoe and Kayak.`, "category": "Sport" },

{ "key": "sport", "value": "chess", "label": "Chess", "description": `Chess is a popular two-player strategy board game.`, "category": "Sport" },

{ "key": "sport", "value": "cliff_diving", "label": "Cliff diving", "description": `Non-competitive diving is jumping from a cliff or a rock into water.`, "category": "Sport" },

{ "key": "sport", "value": "climbing", "label": "Climbing", "description": `Marks elements to represent natural climbing sites (climbing areas, sectors, crags, frozen waterfalls, etc.) or artificial climbs (climbing walls, indoor climbing halls, etc.)`, "category": "Sport" },

{ "key": "sport", "value": "climbing_adventure", "label": "Climbing adventure", "description": `Used to tag an area as "Adventure Park", "Ropes Courses", "Climbing Adventure", "Zip-line", or "Treetop Adventure", where people climb, walk or otherwise move on prebuilt wires and other objects.`, "category": "Sport" },

{ "key": "sport", "value": "cockfighting", "label": "Cockfighting", "description": `A blood sport between two roosters (cocks), or more accurately gamecocks, held in a ring called a cockpit.`, "category": "Sport" },

{ "key": "sport", "value": "cricket", "label": "Cricket", "description": `A bat-and-ball sport contested by two teams, usually of eleven players, each on a large grass Cricket pitch. Played on a large circular or oval-shaped grassy Cricket field ground.`, "category": "Sport" },

{ "key": "sport", "value": "crossfit", "label": "Crossfit", "description": `CrossFit, a branded fitness regimen`, "category": "Sport" },

{ "key": "sport", "value": "croquet", "label": "Croquet", "description": `A sport or game that is played between two or more players embedded on a small grass playing court or pitch which involves hitting plastic or wooden balls with a mallet through hoops (often called "wickets" in the United States).`, "category": "Sport" },

{ "key": "sport", "value": "curling", "label": "Curling", "description": `A sport in which players slide stones on a sheet of ice towards a target area which is segmented into four concentric rings.`, "category": "Sport" },

{ "key": "sport", "value": "cycle_polo", "label": "Cycle polo", "description": `A cycle polo`, "category": "Sport" },

{ "key": "sport", "value": "cycling", "label": "Cycling", "description": `The use of bicycles for sport, also called bicycling, mountain biking or biking.`, "category": "Sport" },

{ "key": "sport", "value": "darts", "label": "Darts", "description": `Darts is a form of throwing game in which small missiles are thrown at a circular target (dartboard) fixed to a wall.`, "category": "Sport" },

{ "key": "sport", "value": "dog_agility", "label": "Dog agility", "description": `Dog agility is a dog sport in which a handler directs a dog through an obstacle course in a race for both time and accuracy.`, "category": "Sport" },

{ "key": "sport", "value": "dog_racing", "label": "Dog racing", "description": `A feature used for dog racing`, "category": "Sport" },

{ "key": "sport", "value": "equestrian", "label": "Equestrian", "description": `A sport practised with the horse as a partner; but for horse racing use tag:sport=horse_racing.`, "category": "Sport" },

{ "key": "sport", "value": "fencing", "label": "Fencing", "description": `Fencing is the martial art of fighting with blades. Divided into three weapon categories: foil, sabre (spelled saber in the United States) and épée.`, "category": "Sport" },

{ "key": "sport", "value": "field_hockey", "label": "Field hockey", "description": `Indicates that object is related to field hockey, a stick and ball game played on a rectangular court with goals at either end.`, "category": "Sport" },

{ "key": "sport", "value": "fitness", "label": "Fitness", "description": `Fitness sports`, "category": "Sport" },

{ "key": "sport", "value": "five-a-side", "label": "Five-a-side", "description": `A variation of soccer with only 5 persons per team on a smaller pitch`, "category": "Sport" },

{ "key": "sport", "value": "floorball", "label": "Floorball", "description": `Floorball is a type of floor hockey with five players and a goalkeeper in each team.`, "category": "Sport" },

{ "key": "sport", "value": "four_square", "label": "Four square", "description": `A hand ball game played on a square court.`, "category": "Sport" },

{ "key": "sport", "value": "free_flying", "label": "Free flying", "description": `Provides a way to tag landing and takeoff for free flying aircraft with additional related amenities.`, "category": "Sport" },

{ "key": "sport", "value": "futsal", "label": "Futsal", "description": `Futsal is a sport played by two teams of five players on a rectangular court.`, "category": "Sport" },

{ "key": "sport", "value": "gaelic_games", "label": "Gaelic games", "description": `Gaelic Games as played within the GAA in Ireland, including Gaelic Football, Hurling, Ladies Gaelic Football, Camogie, Handball and Rounders`, "category": "Sport" },

{ "key": "sport", "value": "gaga", "label": "Gaga", "description": `Gaga (or gaga ball) is a variant of dodgeball that is played in a gaga "pit"`, "category": "Sport" },

{ "key": "sport", "value": "golf", "label": "Golf", "description": `a stick and ball game played from a 'tee' to a hole.`, "category": "Sport" },

{ "key": "sport", "value": "gymnastics", "label": "Gymnastics", "description": `Gymnastics`, "category": "Sport" },

{ "key": "sport", "value": "handball", "label": "Handball", "description": `A team sport played with goals and a thrown ball using the hands.`, "category": "Sport" },

{ "key": "sport", "value": "hapkido", "label": "Hapkido", "description": `A dynamic and highly eclectic Korean martial art`, "category": "Sport" },

{ "key": "sport", "value": "horseshoes", "label": "Horseshoes", "description": `Horseshoes`, "category": "Sport" },

{ "key": "sport", "value": "horse_racing", "label": "Horse racing", "description": `An equestrian sport in which several horses simultaneously race against each other.`, "category": "Sport" },

{ "key": "sport", "value": "ice_hockey", "label": "Ice hockey", "description": `A ball and stick game played on an ice rink.`, "category": "Sport" },

{ "key": "sport", "value": "ice_skating", "label": "Ice skating", "description": `A sport or pastime by moving on ice while using ice skates.`, "category": "Sport" },

{ "key": "sport", "value": "ice_stock", "label": "Ice stock", "description": `Ice stock sport, also known as Bavarian curling, is a winter sport, somewhat similar to curling. In German, it is known as Eisstockschießen.`, "category": "Sport" },

{ "key": "sport", "value": "judo", "label": "Judo", "description": `Judo: a modern Japanese martial art, combat and Olympic sport.`, "category": "Sport" },

{ "key": "sport", "value": "karate", "label": "Karate", "description": `Karate`, "category": "Sport" },

{ "key": "sport", "value": "karting", "label": "Karting", "description": `Kart racing`, "category": "Sport" },

{ "key": "sport", "value": "kickboxing", "label": "Kickboxing", "description": `Kickboxing is a group of stand-up combat sports based on kicking and punching.`, "category": "Sport" },

{ "key": "sport", "value": "kitesurfing", "label": "Kitesurfing", "description": `Property added to a sports facility to mark as used for kitesurfing`, "category": "Sport" },

{ "key": "sport", "value": "korfball", "label": "Korfball", "description": `Korfball: a team sport played with a ball on a rectangular court`, "category": "Sport" },

{ "key": "sport", "value": "krachtbal", "label": "Krachtbal", "description": `Team sport played with a heavy ball on a rectangular pitch, originating in West-Flanders, Belgium`, "category": "Sport" },

{ "key": "sport", "value": "lacrosse", "label": "Lacrosse", "description": `A team sport played with a lacrosse stick and a lacrosse ball. Players use the head of the lacrosse stick to carry pass, catch, and shoot the ball into the goal.`, "category": "Sport" },

{ "key": "sport", "value": "martial_arts", "label": "Martial arts", "description": `Codified systems and traditions of combat practices`, "category": "Sport" },

{ "key": "sport", "value": "miniature_golf", "label": "Miniature golf", "description": `Miniature golf, also known as minigolf, mini-putt, crazy golf, or putt-putt, is an offshoot of the sport of golf focusing solely on the putting aspect of its parent game.`, "category": "Sport" },

{ "key": "sport", "value": "model_aerodrome", "label": "Model aerodrome", "description": `Model aerodrome`, "category": "Sport" },

{ "key": "sport", "value": "motocross", "label": "Motocross", "description": `Motorcycle racing on unpaved surfaces.`, "category": "Sport" },

{ "key": "sport", "value": "motor", "label": "Motor", "description": `Motorsport: a sport with motorised vehicles, e.g. auto racing`, "category": "Sport" },

{ "key": "sport", "value": "multi", "label": "Multi", "description": `Property added to otherwise marked sports facility to indicate as suitable for more than one sport, without listing them`, "category": "Sport" },

{ "key": "sport", "value": "netball", "label": "Netball", "description": `A hand ball competition between two teams on a rectangular court.`, "category": "Sport" },

{ "key": "sport", "value": "obstacle_course", "label": "Obstacle course", "description": `A series of challenging physical obstacles an individual or team must navigate usually while being timed.`, "category": "Sport" },

{ "key": "sport", "value": "orienteering", "label": "Orienteering", "description": `Orienteering`, "category": "Sport" },

{ "key": "sport", "value": "paddle_tennis", "label": "Paddle tennis", "description": `Paddle tennis is a racquet sport adapted from tennis and played for over a century.`, "category": "Sport" },

{ "key": "sport", "value": "padel", "label": "Padel", "description": `A racket sport played in pairs. It consists of bouncing the ball in the opponent's court, with the possibility of bouncing it off the walls.`, "category": "Sport" },

{ "key": "sport", "value": "parachuting", "label": "Parachuting", "description": `Parachuting / Skydiving`, "category": "Sport" },

{ "key": "sport", "value": "parkour", "label": "Parkour", "description": `Parkour is a training discipline using movement that developed from military obstacle course training.`, "category": "Sport" },

{ "key": "sport", "value": "pelota", "label": "Pelota", "description": `Pelota, a variety of court sports played with a ball using one's hand, a racket, a wooden bat (pala), or a basket propulsor (txistera), against a wall or with two teams.`, "category": "Sport" },

{ "key": "sport", "value": "pesäpallo", "label": "Pesäpallo", "description": `Pesäpallo, sometimes known as Finnish baseball, is a fast-moving bat-and-ball sport where the offense tries to score by hitting the ball successfully and running through the bases, while the defense tries to put the batter and runners out.`, "category": "Sport" },

{ "key": "sport", "value": "pickleball", "label": "Pickleball", "description": `Pickleball, a tennis-like game played with a slower ball on a smaller court.`, "category": "Sport" },

{ "key": "sport", "value": "pilates", "label": "Pilates", "description": `Pilates is a physical fitness system developed in the early 20th century by Joseph Pilates.`, "category": "Sport" },

{ "key": "sport", "value": "pole_dance", "label": "Pole dance", "description": `Pole dance as kind of sport`, "category": "Sport" },

{ "key": "sport", "value": "racquet", "label": "Racquet", "description": `Racquetball is a racquet sport played with a hollow rubber ball`, "category": "Sport" },

{ "key": "sport", "value": "rc_car", "label": "Rc car", "description": `Radio controlled cars`, "category": "Sport" },

{ "key": "sport", "value": "roller_skating", "label": "Roller skating", "description": `The traveling on surfaces with roller skates.`, "category": "Sport" },

{ "key": "sport", "value": "rowing", "label": "Rowing", "description": `Additional tag added on object to mark them as used for sport of rowing`, "category": "Sport" },

{ "key": "sport", "value": "rugby_league", "label": "Rugby league", "description": `Rugby league football`, "category": "Sport" },

{ "key": "sport", "value": "rugby_union", "label": "Rugby union", "description": `Rugby union football`, "category": "Sport" },

{ "key": "sport", "value": "running", "label": "Running", "description": `Features dedicated to the sport of running`, "category": "Sport" },

{ "key": "sport", "value": "sailing", "label": "Sailing", "description": `Sailing: the sport of using wind to power sails which propel a boat`, "category": "Sport" },

{ "key": "sport", "value": "scuba_diving", "label": "Scuba diving", "description": `To mark a physical object as for scuba diving`, "category": "Sport" },

{ "key": "sport", "value": "shooting", "label": "Shooting", "description": `Identifies given object as used for practicing shooting sports`, "category": "Sport" },

{ "key": "sport", "value": "shot-put", "label": "Shot-put", "description": `Shot-put is a sport involving throwing a heavy spherical object as far as possible.`, "category": "Sport" },

{ "key": "sport", "value": "skateboard", "label": "Skateboard", "description": `An area designated and equipped for skateboarding`, "category": "Sport" },

{ "key": "sport", "value": "ski_jumping", "label": "Ski jumping", "description": `Ski jumping is a winter sport in which competitors aim to achieve the longest jump after descending from a specially designed ramp on their skis.`, "category": "Sport" },

{ "key": "sport", "value": "skiing", "label": "Skiing", "description": `Identifies given object as used for practicing skiing`, "category": "Sport" },

{ "key": "sport", "value": "snooker", "label": "Snooker", "description": `Snooker is a cue sport that is played on a rectangular table covered with a green cloth with pockets at each of the four corners and in the middle of each long side.`, "category": "Sport" },

{ "key": "sport", "value": "soccer", "label": "Soccer", "description": `Association football, more commonly known as football or soccer`, "category": "Sport" },

{ "key": "sport", "value": "speedway", "label": "Speedway", "description": `Motorcycle speedway, usually referred to as speedway, is a motorcycle sport involving four and sometimes up to six riders competing over four anti-clockwise laps of an oval circuit.`, "category": "Sport" },

{ "key": "sport", "value": "squash", "label": "Squash", "description": `Squash is a racket and ball sport played by two or four players in a four-walled court with a small, hollow rubber ball.`, "category": "Sport" },

{ "key": "sport", "value": "sumo", "label": "Sumo", "description": `A traditional martial arts sport of Japan.`, "category": "Sport" },

{ "key": "sport", "value": "surfing", "label": "Surfing", "description": `Indicates that a sport facility is for surfing.`, "category": "Sport" },

{ "key": "sport", "value": "swimming", "label": "Swimming", "description": `A place where people do swimming.`, "category": "Sport" },

{ "key": "sport", "value": "table_tennis", "label": "Table tennis", "description": `A bat and ball game played over a table.`, "category": "Sport" },

{ "key": "sport", "value": "table_soccer", "label": "Table soccer", "description": `Table Soccer or Table Football, also known as Foosball, Fussball, Kicker, or Tecball, is a table-top game and sport based off association football (soccer).`, "category": "Sport" },

{ "key": "sport", "value": "taekwondo", "label": "Taekwondo", "description": `Taekwondo`, "category": "Sport" },

{ "key": "sport", "value": "tennis", "label": "Tennis", "description": `A competition where two or four players use a ball and rackets over a net.`, "category": "Sport" },

{ "key": "sport", "value": "toboggan", "label": "Toboggan", "description": `Public toboggan run`, "category": "Sport" },

{ "key": "sport", "value": "ultimate", "label": "Ultimate", "description": `Ultimate, also known as ultimate frisbee, is a team sport played with a flying disc (frisbee).`, "category": "Sport" },

{ "key": "sport", "value": "volleyball", "label": "Volleyball", "description": `Volleyball`, "category": "Sport" },

{ "key": "sport", "value": "wakeboarding", "label": "Wakeboarding", "description": `Wakeboarding is a water sport in which the rider, standing on a wakeboard, is towed behind a motorboat in order to perform aerial maneuvers.`, "category": "Sport" },

{ "key": "sport", "value": "water_polo", "label": "Water polo", "description": `A competitive ball sport played in a pool between two teams.`, "category": "Sport" },

{ "key": "sport", "value": "water_ski", "label": "Water ski", "description": `Water skiing`, "category": "Sport" },

{ "key": "sport", "value": "weightlifting", "label": "Weightlifting", "description": `Weightlifting`, "category": "Sport" },

{ "key": "sport", "value": "wrestling", "label": "Wrestling", "description": `Wrestling`, "category": "Sport" },

{ "key": "sport", "value": "yoga", "label": "Yoga", "description": `Yoga as exercise`, "category": "Sport" },

{ "key": "sport", "value": "zurkhaneh_sport", "label": "Zurkhaneh sport", "description": `A traditional system of athletics.`, "category": "Sport" },

{ "key": "telecom", "value": "exchange", "label": "Exchange", "description": `A place to connect landlines subscribers to telecommunication service equipments`, "category": "Telecom" },

{ "key": "telecom", "value": "connection_point", "label": "Connection point", "description": `Last point of telecom local loops allowing direct connections towards a few households and subscribers`, "category": "Telecom" },

{ "key": "telecom", "value": "distribution_point", "label": "Distribution point", "description": `Equipment, often small boxes, allowing to directly connect up to 15 individuals or households to a single upstream local loop cable towards telecom exchanges`, "category": "Telecom" },

{ "key": "telecom", "value": "service_device", "label": "Service device", "description": `Active equipment which deliver service to connected customers. It can be for instance a DSLAM, a telephone switch, or more recently an OLT for optical networks. It excludes amplifiers or repeaters installed along local loops or long distance lines.`, "category": "Telecom" },

{ "key": "telecom", "value": "data_center", "label": "Data center", "description": `A building used to house computers and network equipment.`, "category": "Telecom" },

{ "key": "tourism", "value": "alpine_hut", "label": "Alpine hut", "description": `A remote building located in the mountains intended to provide board and lodging.`, "category": "Tourism" },

{ "key": "tourism", "value": "apartment", "label": "Apartment", "description": `A furnished apartment or flat with cooking and bathroom facilities that can be rented for holiday vacations.`, "category": "Tourism" },

{ "key": "tourism", "value": "aquarium", "label": "Aquarium", "description": `A facility with living aquatic animals for public viewing.`, "category": "Tourism" },

{ "key": "tourism", "value": "artwork", "label": "Artwork", "description": `A public piece of art.`, "category": "Tourism" },

{ "key": "tourism", "value": "attraction", "label": "Attraction", "description": `An object of interest for a tourist, or a purpose-built tourist attraction`, "category": "Tourism" },

{ "key": "tourism", "value": "camp_pitch", "label": "Camp pitch", "description": `A tent or caravan pitch location within a campsite or caravan site`, "category": "Tourism" },

{ "key": "tourism", "value": "camp_site", "label": "Camp site", "description": `An area where people can camp overnight using tents, camper vans or caravans.`, "category": "Tourism" },

{ "key": "tourism", "value": "caravan_site", "label": "Caravan site", "description": `A place where you can stay in a caravan overnight or for longer periods.`, "category": "Tourism" },

{ "key": "tourism", "value": "chalet", "label": "Chalet", "description": `A holiday cottage with self-contained cooking and bathroom facilities.`, "category": "Tourism" },

{ "key": "tourism", "value": "gallery", "label": "Gallery", "description": `An area or building that displays a variety of visual art exhibitions.`, "category": "Tourism" },

{ "key": "tourism", "value": "guest_house", "label": "Guest house", "description": `Accommodation smaller than a hotel and typically owner-operated, such as bed&breakfasts etc.`, "category": "Tourism" },

{ "key": "tourism", "value": "hostel", "label": "Hostel", "description": `Cheap accommodation with shared bedrooms.`, "category": "Tourism" },

{ "key": "tourism", "value": "hotel", "label": "Hotel", "description": `Hotel - an establishment that provides paid lodging`, "category": "Tourism" },

{ "key": "tourism", "value": "information", "label": "Information", "description": `Information for tourists and visitors, including information offices`, "category": "Tourism" },

{ "key": "tourism", "value": "motel", "label": "Motel", "description": `Short term accommodation, particularly for people travelling by car.`, "category": "Tourism" },

{ "key": "tourism", "value": "museum", "label": "Museum", "description": `A museum: an institution with exhibitions on scientific, historical, cultural topics`, "category": "Tourism" },

{ "key": "tourism", "value": "picnic_site", "label": "Picnic site", "description": `A locality that is suitable for outdoors eating, with facilities to aid a picnic such as tables and benches`, "category": "Tourism" },

{ "key": "tourism", "value": "theme_park", "label": "Theme park", "description": `An amusement park where entertainment is provided by rides, games, concessions.`, "category": "Tourism" },

{ "key": "tourism", "value": "viewpoint", "label": "Viewpoint", "description": `A place worth visiting, often high, with a good view of surrounding countryside or notable buildings.`, "category": "Tourism" },

{ "key": "tourism", "value": "wilderness_hut", "label": "Wilderness hut", "description": `A remote building, with generally a fireplace, intended to provide temporary shelter and sleeping accommodation, typically un-serviced and with no staff.`, "category": "Tourism" },

{ "key": "tourism", "value": "zoo", "label": "Zoo", "description": `A zoological garden, where animals are confined for viewing by the public.`, "category": "Tourism" },

{ "key": "tourism", "value": "yes", "label": "Yes", "description": ``, "category": "Tourism" },

{ "key": "water", "value": "river", "label": "River", "description": `The water covered area of a river`, "category": "Water" },

{ "key": "water", "value": "oxbow", "label": "Oxbow", "description": `An oxbow lake`, "category": "Water" },

{ "key": "water", "value": "canal", "label": "Canal", "description": `The area covered by the water of a canal`, "category": "Water" },

{ "key": "water", "value": "ditch", "label": "Ditch", "description": `The water covered area of a waterway=ditch - a simple artificial waterway serving as a barrier or for draining surrounding land.`, "category": "Water" },

{ "key": "water", "value": "lock", "label": "Lock", "description": `A device used for raising and lowering boats, ships and other watercraft between stretches of water of different levels on river and canal waterways`, "category": "Water" },

{ "key": "water", "value": "fish_pass", "label": "Fish pass", "description": `Area of a fish pass for the fish to pass waterway dams or weirs. Should contain tag:waterway=fish_pass way inside.`, "category": "Water" },

{ "key": "water", "value": "lake", "label": "Lake", "description": `A natural or semi-natural body of relatively still fresh or salt water which is surrounded by land`, "category": "Water" },

{ "key": "water", "value": "reservoir", "label": "Reservoir", "description": `An artificial lake which may be used to store water. Usually formed by a dam over a natural water course.`, "category": "Water" },

{ "key": "water", "value": "pond", "label": "Pond", "description": `A small body of standing water, man-made in most cases`, "category": "Water" },

{ "key": "water", "value": "basin", "label": "Basin", "description": `An area of land artificially graded to hold water.`, "category": "Water" },

{ "key": "water", "value": "lagoon", "label": "Lagoon", "description": `A body of shallow sea water or brackish water separated from the sea by a barrier.`, "category": "Water" },

{ "key": "water", "value": "stream_pool", "label": "Stream pool", "description": `A stream pool: a small but relatively deep collection of fresh water, occurring along a narrow stream`, "category": "Water" },

{ "key": "water", "value": "reflecting_pool", "label": "Reflecting pool", "description": `A shallow pool of water, undisturbed by fountain jets, for a calm reflective surface, often found in gardens, squares or at memorial sites`, "category": "Water" },

{ "key": "water", "value": "moat", "label": "Moat", "description": `A deep, wide defensive ditch, normally filled with water, dug to surround a fortified habitation.`, "category": "Water" },

{ "key": "water", "value": "wastewater", "label": "Wastewater", "description": `A clarifier or settling basin of a wastewater treatment plant.`, "category": "Water" },

{ "key": "waterway", "value": "river", "label": "River", "description": `The linear flow of a river, in flow direction.`, "category": "Natural watercourses" },

{ "key": "waterway", "value": "riverbank", "label": "Riverbank", "description": `Use of this tag is discouraged, see natural=water + water=river instead`, "category": "Natural watercourses" },

{ "key": "waterway", "value": "stream", "label": "Stream", "description": `A naturally-forming waterway that is too narrow to be classed as a river.`, "category": "Natural watercourses" },

{ "key": "waterway", "value": "tidal_channel", "label": "Tidal channel", "description": `A natural intertidal waterway in mangroves, salt marshes and tidal flats with water flow in the direction of the tide`, "category": "Natural watercourses" },

{ "key": "waterway", "value": "canal", "label": "Canal", "description": `An artificial '''open flow''' waterway used to carry useful water for transportation, waterpower, or irrigation.`, "category": "Man-made waterways" },

{ "key": "waterway", "value": "drain", "label": "Drain", "description": `An artificial free flow waterway used for carrying superfluous water, usually lined with concrete.`, "category": "Man-made waterways" },

{ "key": "waterway", "value": "ditch", "label": "Ditch", "description": `A small man-made drainage waterway, usually unlined.`, "category": "Man-made waterways" },

{ "key": "waterway", "value": "pressurised", "label": "Pressurised", "description": `An artificial waterway where water flows in a closed space without air`, "category": "Man-made waterways" },

{ "key": "waterway", "value": "fairway", "label": "Fairway", "description": `A navigable route in a lake or sea, often marked by buoys or beacons.`, "category": "Man-made waterways" },

{ "key": "waterway", "value": "dock", "label": "Dock", "description": `An enclosed area of water for ships and other craft within which the height of the water can be managed.`, "category": "Facilities" },

{ "key": "waterway", "value": "boatyard", "label": "Boatyard", "description": `A place for constructing, repairing and storing vessels out of the water.`, "category": "Facilities" },

{ "key": "waterway", "value": "dam", "label": "Dam", "description": `A barrier built across a river or stream to block and regulate the flow of the river.`, "category": "Barrieres on waterways" },

{ "key": "waterway", "value": "weir", "label": "Weir", "description": `A barrier built across a river to control water speed and depth. Designed to let water flow over the top all the time or at least in specific conditions.`, "category": "Barrieres on waterways" },

{ "key": "waterway", "value": "waterfall", "label": "Waterfall", "description": `A place where water flows over a vertical drop or a series of drops in the course of a stream or river.`, "category": "Barrieres on waterways" },

{ "key": "waterway", "value": "lock_gate", "label": "Lock gate", "description": `A gate of a lock`, "category": "Barrieres on waterways" },

{ "key": "waterway", "value": "soakhole", "label": "Soakhole", "description": `The point at which a river or stream percolates into or through the soil`, "category": "Other features on waterways" },

{ "key": "waterway", "value": "turning_point", "label": "Turning point", "description": `A place to turn the driving direction for vessels, where the boats are longer than the river/canal is wide.`, "category": "Other features on waterways" },

{ "key": "waterway", "value": "water_point", "label": "Water point", "description": `A place to fill fresh water holding tanks of a boat.`, "category": "Other features on waterways" },

{ "key": "waterway", "value": "fuel", "label": "Fuel", "description": `A place to get fuel for boats`, "category": "Other features on waterways" },
]
export default {array}