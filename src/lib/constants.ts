import { AmenityItem, ResidenceConfig, TowerInfo, GalleryItem } from './types';

export const SITE_CONFIG = {
  name: 'Sai World Dreams, Dombivli',
  shortName: 'Sai World Dreams',
  tagline: 'Live The Dream',
  subheadline: 'An 18-Acre Global Lifestyle World of the Family Inspired by Dubai Lifestyle',
  url: 'https://saiworlddreams-dombivli.com',
  developer: 'Paradise Group',
  developerExperience: '32+ Years of Excellence',
  developerProjects: '125+ Completed Projects',
  reraNumber: 'P52000033880, P52000045371, P52000046738',
  projectReraNumbers: ['P52000033880', 'P52000045371', 'P52000046738'],
  reraUrl: 'https://maharera.maharashtra.gov.in',
  reraPortalAltUrl: 'https://maharera.mahaonline.gov.in',
  reraAuthorisedAdvertiser: 'Rahul Kumar Maurya Property Adviser',
  reraAgentRegistrationNo: 'A011332602985',
  individualAgent: {
    name: 'Rahul Kumar Maurya',
    reraNumber: 'A011332602985',
    type: 'Individual',
    certificatePdfUrl: '/documents/rahul-kumar-maurya-rera-certificate.pdf',
  },
  financedBy: 'IndusInd Bank',
  siteAddress: 'Sai World Dreams, Kalyan Shil Road, Dombivli, Maharashtra, India',
  corporateOffice: 'M/s. Chariot Properties LLP., 1701, Satra Plaza, Plot No. 19 & 20, Sector - 19D, Vashi, Navi Mumbai.',
  phoneNumbers: ['+91 9373910844', '+91 9224136478'],
  email: 'sheltermauryashelter@gmail.com',
  brochureDownloadUrl: '/brochure/Sai-World-Dreams-Brochure.pdf',
  // Official WhatsApp configuration with pre-filled message requirement
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919373910844',
  whatsappMessage: 'Hello, I am interested in Sai World Dreams, Dombivli. Please share the project details.',
  developerCredit: {
    text: 'Developed by Integral Web Solution',
    name: 'Integral Web Solution',
    url: 'https://integralwebsolution.in/',
  },
  consultants: {
    architect: 'Hiten Sethi Architects',
    landscape: 'Newarch Landscapes LLP',
    liasoning: 'Spaceage Consultants',
    rcc: 'Structural Concept Designs Pvt. Ltd.',
    interior: 'Vini & Asso.',
    mep: 'Anil Verma & Asso.',
  }
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About the Project', href: '/about' },
  { label: 'Residences', href: '/residences' },
  { label: 'Floor Plans', href: '/floor-plans' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Location', href: '/location' },
  { label: 'Contact Us', href: '/contact' },
];

export const PROJECT_HIGHLIGHTS = [
  {
    title: '18 Acres Global Lifestyle',
    description: 'An all-inclusive integrated township with residential towers, high-street shopping boulevard, business complex and luxury hotel.',
    stat: '18 Acres',
  },
  {
    title: '8 Magnificent Towers',
    description: 'Majestic G+35 storey architectural towers offering panoramic views and world-class living standards.',
    stat: 'G+35 Storeys',
  },
  {
    title: '6-Acre Themed Podium',
    description: 'Expansive themed landscape podium featuring 60+ curated outdoor indulgences, elevated pathways and lush greens.',
    stat: '6 Acres',
  },
  {
    title: 'Dubai-Inspired Living',
    description: 'Conceived on the lines of iconic global destinations with seamless integration of retail, dining, leisure and hospitality.',
    stat: 'Dubai Themed',
  },
  {
    title: 'World Dreams Plaza',
    description: 'G+3 storeyed high-street plaza with multiplex, fine dining restaurants, cafes and lavish banquet facilities.',
    stat: 'G+3 Plaza',
  },
  {
    title: 'Business Park & 5-Star Hotel',
    description: 'G+33 storey business complex with premier office spaces and G+23 storey 5-star luxury hotel on premises.',
    stat: 'G+33 & G+23',
  },
];

export const RESIDENCE_CONFIGS: ResidenceConfig[] = [
  {
    id: '1-bhk',
    type: '1 BHK',
    name: '1 BHK Global Luxury Home',
    tagline: 'Efficiently Crafted Luxury for Modern Families',
    description: 'Thoughtfully designed 1 BHK luxury apartments featuring an expansive living/dining area, private balcony, master bedroom, dedicated kitchen with service platform, and two bathrooms.',
    towers: ['Tower Vista', 'Tower Breeze'],
    floorPlanImage: '/images/floor-plans/1bhk-unit-plan.jpg',
    features: [
      'Big Size Vitrified Tiles in Living & Dining',
      'Dedicated 1.2M (4\'0") Wide Balcony',
      'Granite Kitchen Platform with Service Counter',
      'European Wooden Flooring in Master Bedroom',
      '2 Separate Bathrooms with Branded Sanitary Ware',
      'Video Door Security System with Camera',
    ],
    specs: {
      livingDining: '10\'0" x 14\'0" (3.05 x 4.25m)',
      masterBedroom: '10\'0" x 10\'9" (3.05 x 3.25m)',
      balcony: '1.2 M (4\'0") Wide Balcony',
      kitchen: '7\'0" x 8\'6" (2.15 x 2.60m)',
    }
  },
  {
    id: '2-bhk',
    type: '2 BHK',
    name: '2 BHK Global Luxury Home',
    tagline: 'Spacious Elegance with Balanced Living & Solitude',
    description: 'Elegantly proportioned 2 BHK residences boasting dual balconies, generous master suite with ensuite bath, well-ventilated secondary bedroom, and a gourmet kitchen with dry balcony.',
    towers: ['Tower Castle', 'Tower Vista', 'Tower Breeze'],
    floorPlanImage: '/images/floor-plans/2bhk-unit-plan.jpg',
    features: [
      'Expansive Living & Dining with 1.5M (5\'0") Balcony',
      'Separate 1.0M (3\'3") Dry Balcony for Kitchen',
      'Master Bedroom with Ensuite Bathroom',
      'European Wooden Flooring in Master Bedroom',
      'Marble & Granite Window Sills with Half Round Moulding',
      'Branded Concealed Copper Wiring with MCB/ELCB',
    ],
    specs: {
      livingDining: '11\'0" x 18\'6" (3.35 x 5.65m)',
      masterBedroom: '10\'0" x 12\'0" (3.05 x 3.65m)',
      balcony: '1.5 M (5\'0") Wide Balcony',
      kitchen: '7\'0" x 9\'0" (2.15 x 2.75m)',
    }
  },
  {
    id: '2.5-bhk',
    type: '2.5 BHK',
    name: '2.5 BHK Global Luxury Home',
    tagline: 'Versatile Space Tailored for Growing Families and Work-from-Home',
    description: 'Sophisticated 2.5 BHK layouts featuring two lavish bedrooms plus an additional versatile half-bedroom ideal for a children’s study, guest room, or personal executive home office.',
    towers: ['Tower Vista'],
    floorPlanImage: '/images/floor-plans/2.5bhk-unit-plan.jpg',
    features: [
      'Versatile Study/Kids Room (9\'0" x 8\'0")',
      'Generous 18\'6" Living/Dining Hall',
      'Wide 1.5M (5\'0") Sundeck Balcony',
      'Spacious Kitchen with Attached Dry Balcony',
      'Two Designer Bathrooms with Premium C.P. Fittings',
      'European Wooden Flooring in Master Bedroom',
    ],
    specs: {
      livingDining: '18\'6" x 11\'0" (5.65 x 3.35m)',
      masterBedroom: '10\'9" x 11\'4" (3.25 x 3.45m)',
      balcony: '1.5 M (5\'0") Wide Balcony',
      kitchen: '9\'0" x 7\'0" (2.75 x 2.15m)',
    }
  },
  {
    id: '3-bhk',
    type: '3 BHK',
    name: '3 BHK Global Grand Suite',
    tagline: 'Uncompromising Grandeur and Panoramic Suburb Vistas',
    description: 'Palatial 3 BHK residences engineered for high-society family life. Featuring a magnificent 24\' living/dining hall, multiple sundeck balconies, walk-in closet space, and three full luxury bathrooms.',
    towers: ['Tower Castle', 'Tower Mist', 'Tower Spring'],
    floorPlanImage: '/images/floor-plans/3bhk-unit-plan.jpg',
    features: [
      'Palatial Living & Dining Room (24\'3" x 11\'0")',
      'Dedicated Walk-in Wardrobe Area in Master Suite',
      'Multiple Wide Sundeck Balconies with Scenic Views',
      'Shower Panel & Premium Geyser in Bathrooms',
      '4/3 Burner Gas Hob & Exhaust Chimney Provided',
      'Video Door Phone Security with Connected Intercom',
    ],
    specs: {
      livingDining: '24\'3" x 11\'0" (7.40 x 3.35m)',
      masterBedroom: '13\'9" x 11\'0" (4.20 x 3.35m)',
      balcony: 'Multiple 1.5 M (5\'0") Balconies',
      kitchen: '11\'0" x 8\'0" (3.35 x 2.45m)',
    }
  }
];

export const TOWERS_LIST: TowerInfo[] = [
  {
    id: 'castle',
    name: 'Tower 1 — Castle',
    height: 'G+35 Storeys',
    configurations: ['2 BHK', '3 BHK'],
    features: ['Double-height entrance lobby', 'Direct access to Kalyan Shil Road & Podium', 'High-speed elevators with generator backup'],
    typicalPlanImage: '/images/towers/tower-castle-typical.webp'
  },
  {
    id: 'vista',
    name: 'Tower 2 — Vista',
    height: 'G+35 Storeys',
    configurations: ['1 BHK', '2 BHK', '2.5 BHK'],
    features: ['Panoramic hill & podium views', 'Expansive floor lobbies', 'Designer corridors with CCTV'],
    typicalPlanImage: '/images/towers/tower-vista-typical.webp'
  },
  {
    id: 'mist',
    name: 'Tower 3 — Mist',
    height: 'G+35 Storeys',
    configurations: ['3 BHK'],
    features: ['Exclusive 3 BHK wing', 'Private sundeck balconies', 'Double height waiting lounge'],
    typicalPlanImage: '/images/towers/tower-mist-typical.webp'
  },
  {
    id: 'spring',
    name: 'Tower 4 — Spring',
    height: 'G+35 Storeys',
    configurations: ['3 BHK (Multiple Layouts)'],
    features: ['Luxury high-rise suites', 'Walk-in closets', 'Central podium view orientation'],
    typicalPlanImage: '/images/towers/tower-spring-typical.webp'
  },
  {
    id: 'orchard',
    name: 'Tower 5 — Orchard',
    height: 'G+35 Storeys',
    configurations: ['Luxury Residences'],
    features: ['Adjacent to Zen World gardens', 'Miyawaki forest breeze', 'Quiet residential zone'],
    typicalPlanImage: '/images/hero/hero-slide-3.webp'
  },
  {
    id: 'meadows',
    name: 'Tower 6 — Meadows',
    height: 'G+35 Storeys',
    configurations: ['Luxury Residences'],
    features: ['Facing 6-acre central podium', 'Designer entrance facade', '24x7 multi-tier security'],
    typicalPlanImage: '/images/hero/hero-slide-3.webp'
  },
  {
    id: 'breeze',
    name: 'Tower 7 — Breeze',
    height: 'G+35 Storeys',
    configurations: ['1 BHK', '1.5 BHK', '2 BHK'],
    features: ['Cross-ventilated layouts', 'Balcony homes overlooking landscaped greens', 'Dedicated service lifts'],
    typicalPlanImage: '/images/towers/tower-breeze-typical.webp'
  },
  {
    id: 'heaven',
    name: 'Tower 8 — Heaven',
    height: 'G+35 Storeys',
    configurations: ['Luxury Residences'],
    features: ['Pinnacle tower of the township', 'Direct connectivity to La Dreams Club', 'Uninterrupted skyline panorama'],
    typicalPlanImage: '/images/hero/hero-slide-3.webp'
  }
];

export const AMENITIES_WORLDS: {
  id: 'nirvana' | 'zen' | 'euphoria' | 'clubhouse';
  name: string;
  theme: string;
  tagline: string;
  description: string;
  items: AmenityItem[];
}[] = [
  {
    id: 'nirvana',
    name: 'Nirvana World',
    theme: 'Health & Fitness Zones',
    tagline: 'Your Dream Health Finds a Perfect Destination',
    description: 'Engineered for complete physical wellness with floodlit professional sports courts, a 600-meter elevated jogging track, open-air gymnasium and an Olympic-inspired leisure pool with sunken pool bar.',
    items: [
      {
        id: 'leisure-pool',
        name: 'Leisure & Lap Pool with Sunken Bar',
        category: 'nirvana',
        categoryLabel: 'Nirvana World',
        description: 'Expansive azure swimming pool featuring dedicated lap lanes, sunken loungers and an illuminated sunken pool bar.',
        image: '/images/amenities/leisure-lap-pool.webp',
        features: ['Lap Pool', 'Sunken Pool Bar', 'Pool Deck with Loungers', 'Infinity Edge']
      },
      {
        id: 'elevated-track',
        name: '600 Mtr. Elevated Jogging Track',
        category: 'nirvana',
        categoryLabel: 'Nirvana World',
        description: 'Illuminated 600-meter continuous elevated jogging pathway winding gracefully across the 6-acre podium.',
        image: '/images/amenities/elevated-jogging-track.webp',
        features: ['Synthetic Track', 'LED Handrail Lighting', 'Scenic Tree Canopy Views']
      },
      {
        id: 'futsal-court',
        name: 'Futsal Court with Floodlights',
        category: 'nirvana',
        categoryLabel: 'Nirvana World',
        description: 'Rooftop artificial turf futsal arena equipped with high-intensity floodlighting for nighttime matches.',
        image: '/images/amenities/futsal-court.webp',
        features: ['FIFA-grade Artificial Turf', 'Surround Enclosure', 'Floodlights']
      },
      {
        id: 'open-gym',
        name: 'Open Air Gymnasium',
        category: 'nirvana',
        categoryLabel: 'Nirvana World',
        description: 'Outdoor calisthenics and fitness workout stations nestled in open landscaped gardens.',
        image: '/images/amenities/open-air-gym.webp',
        features: ['All-weather Calisthenics Equipment', 'Rubber Shock Absorbing Base']
      },
      {
        id: 'net-cricket',
        name: 'Cricket Practice Pitch',
        category: 'nirvana',
        categoryLabel: 'Nirvana World',
        description: 'Full-length netted cricket batting and bowling practice pitch for sports enthusiasts.',
        image: '/images/amenities/net-cricket.webp',
        features: ['Netted Enclosure', 'Turf Pitch', 'Floodlighting']
      },
      {
        id: 'lawn-tennis',
        name: 'Lawn Tennis Court with Floodlights',
        category: 'nirvana',
        categoryLabel: 'Nirvana World',
        description: 'Regulation hard tennis court with tournament-level LED illumination and spectator bleachers.',
        image: '/images/amenities/lawn-tennis.webp',
        features: ['Acrylic Surface', 'Tournament Lighting', 'Spectator Seating']
      },
      {
        id: 'basketball-court',
        name: 'Basketball Court',
        category: 'nirvana',
        categoryLabel: 'Nirvana World',
        description: 'Vibrant outdoor basketball court with pro hoops and shock-absorbing multi-sport surface.',
        image: '/images/amenities/basketball-court.webp',
        features: ['Regulation Marking', 'Tempered Glass Backboards', 'Night Play Lights']
      }
    ]
  },
  {
    id: 'zen',
    name: 'Zen World',
    theme: 'Landscape & Leisure Zones',
    tagline: 'Your Dream Comfort For Eternal Peace Amidst Greens',
    description: 'Serene botanical realms and contemplative open spaces. From classical designer fountains and aromatic pergolas to dense Miyawaki forests and dedicated pet parks.',
    items: [
      {
        id: 'designer-fountain',
        name: 'Designer Fountain & Water Bodies',
        category: 'zen',
        categoryLabel: 'Zen World',
        description: 'Majestic multi-tiered illuminated central fountain creating an ambiance of royal elegance.',
        image: '/images/amenities/designer-fountain.webp',
        features: ['Multi-tier Water Cascades', 'Ambient Underwater Lights', 'Reflective Pool']
      },
      {
        id: 'yoga-lawn',
        name: 'Yoga Plaza & Meditation Deck',
        category: 'zen',
        categoryLabel: 'Zen World',
        description: 'Tranquil open-air green plaza dedicated to morning yoga, pranayama and mindful meditation.',
        image: '/images/amenities/yoga-lawn.webp',
        features: ['Natural Grass Lawn', 'Meditation Pavilion', 'Aromatic Planting']
      },
      {
        id: 'pergolas-gazebos',
        name: 'Designer Pergolas & Gazebos',
        category: 'zen',
        categoryLabel: 'Zen World',
        description: 'Shaded classical pavilions and bougainvillea-covered pergolas for relaxation and quiet conversations.',
        image: '/images/amenities/pergolas-gazebos.webp',
        features: ['Architectural Trellis', 'Comfortable Lounge Seating', 'Evening Illumination']
      },
      {
        id: 'pets-park',
        name: 'Pets Park with Play Equipment',
        category: 'zen',
        categoryLabel: 'Zen World',
        description: 'Fenced dedicated agility and socialization park created specifically for your furry companions.',
        image: '/images/amenities/pets-park.webp',
        features: ['Agility Obstacles', 'Dog Walk Tracks', 'Sanitation Stations']
      },
      {
        id: 'barbeque-pavilion',
        name: 'Barbeque Pavilion & Dining Lawn',
        category: 'zen',
        categoryLabel: 'Zen World',
        description: 'Alfresco culinary station with built-in grills, dining benches and open-air festive lawn.',
        image: '/images/amenities/barbeque-pavilion.webp',
        features: ['Barbeque Grills', 'Picnic Tables', 'Mood Lighting']
      }
    ]
  },
  {
    id: 'euphoria',
    name: 'Euphoria World',
    theme: 'Entertainment & Social Life Zones',
    tagline: 'Your Dream Entertainment Multiplying Your Joys Manifolds',
    description: 'A vibrant social arena catering to every family member: an amphitheatre for community cultural evenings, kids water splash pad, musical pavilion, skating rink, and a peaceful Saibaba & Lord Ganesha temple.',
    items: [
      {
        id: 'amphitheatre',
        name: 'Amphitheatre with Performance Stage',
        category: 'euphoria',
        categoryLabel: 'Euphoria World',
        description: 'Tiered open-air acoustic theatre hosting live performances, festive celebrations and community screenings.',
        image: '/images/amenities/amphitheatre.webp',
        features: ['Acoustic Shell Stage', 'Tiered Grass & Stone Seating', 'Event Lighting']
      },
      {
        id: 'kids-splash-pad',
        name: 'Kids Splash Pad with Water Play Station',
        category: 'euphoria',
        categoryLabel: 'Euphoria World',
        description: 'Thrilling water park arena featuring interactive splash rings, spray fountains and safe zero-depth water play.',
        image: '/images/amenities/kids-splash-pad.webp',
        features: ['Zero-depth Splash Pad', 'Water Cannon & Arches', 'Non-slip Safety Coating']
      },
      {
        id: 'kids-play-area',
        name: 'Well-Equipped Kids Play Area with Rubber Flooring',
        category: 'euphoria',
        categoryLabel: 'Euphoria World',
        description: 'Multifunctional children’s adventure zone with climbing domes, slides and impact-absorbing EPDM rubber safety flooring.',
        image: '/images/amenities/kids-play-area.webp',
        features: ['EPDM Rubber Flooring', 'Modern Multi-play Units', 'Toddler Friendly Zones']
      },
      {
        id: 'skating-rink',
        name: 'Skating Rink',
        category: 'euphoria',
        categoryLabel: 'Euphoria World',
        description: 'Dedicated smooth-finished roller skating rink with safety boundary handrails.',
        image: '/images/amenities/skating-rink.webp',
        features: ['Smooth Epoxy Coating', 'Protective Perimeter Railing', 'Coaching Bay']
      },
      {
        id: 'musical-pavilion',
        name: 'Musical Pavilion',
        category: 'euphoria',
        categoryLabel: 'Euphoria World',
        description: 'A dedicated acoustically designed pavilion for musical evenings, band performances and leisure gatherings.',
        image: '/images/amenities/musical-pavilion.webp',
        features: ['Canopied Stage', 'Ambient Sound System', 'Perimeter Garden Seating']
      },
      {
        id: 'open-air-jacuzzi',
        name: 'Open Air Jacuzzi',
        category: 'euphoria',
        categoryLabel: 'Euphoria World',
        description: 'Heated open-air hydrotherapy bubbling jacuzzi under the open sky for ultimate muscle relaxation.',
        image: '/images/amenities/open-air-jacuzzi.webp',
        features: ['Hydrotherapy Massage Jets', 'Temperature Control', 'Timber Deck Surround']
      },
      {
        id: 'temple',
        name: 'Saibaba & Lord Ganesha Temple',
        category: 'euphoria',
        categoryLabel: 'Euphoria World',
        description: 'Sanctified traditional marble temple creating a pious spiritual haven for peace and prayer.',
        image: '/images/amenities/temple.webp',
        features: ['Marble Carvings', 'Peaceful Courtyard', 'Daily Prayer Sanctum']
      }
    ]
  },
  {
    id: 'clubhouse',
    name: 'La Dreams Club',
    theme: 'The High-Society Clubhouse',
    tagline: 'Your Dream Club-Life For a Posh Community Lifestyle Experience',
    description: 'A palatial 3-level private club destination rivaling the world\'s finest private resorts. Equipped with state-of-the-art gymnasiums, a grand celebration banquet hall, private DTH mini-theatre, spa with jacuzzi, squash & badminton courts, karaoke studio, and rooftop sky lounge.',
    items: [
      {
        id: 'clubhouse-facade',
        name: '3-Level Architectural Clubhouse',
        category: 'clubhouse',
        categoryLabel: 'La Dreams Club',
        description: 'Imposing neo-classical clubhouse structure featuring an open-air cafeteria, grand reception lobby and rooftop lounges.',
        image: '/images/amenities/clubhouse-entrance-facade.webp',
        features: ['Triple Height Atrium', 'Open-air Cafeteria', 'Rooftop Viewing Promenade']
      },
      {
        id: 'banquet-hall',
        name: 'Grand Banquet Hall for Celebrations',
        category: 'clubhouse',
        categoryLabel: 'La Dreams Club',
        description: 'Opulent chandeliered banquet hall with pre-function lobby and culinary staging area for family celebrations.',
        image: '/images/amenities/banquet-hall.webp',
        features: ['Chandelier Lighting', 'Acoustic Wall Panelling', 'Catering Pantry Staging']
      },
      {
        id: 'private-theatre',
        name: 'Private Theatre with DTH & Surround Sound',
        category: 'clubhouse',
        categoryLabel: 'La Dreams Club',
        description: 'Exclusive multi-seat private screening cinema with plush recliner seats, 4K projection and Dolby Atmos sound.',
        image: '/images/amenities/private-theatre.webp',
        features: ['Plush Recliners', 'Dolby Digital Surround', 'Live Sports Screening']
      },
      {
        id: 'squash-court',
        name: 'Air-Conditioned Squash Court',
        category: 'clubhouse',
        categoryLabel: 'La Dreams Club',
        description: 'Glass-backed, fully air-conditioned regulation squash court with hardwood maple floor.',
        image: '/images/amenities/squash-court.webp',
        features: ['WSF Specification', 'Glass Back Wall', 'HVAC Temperature Control']
      },
      {
        id: 'indoor-games',
        name: 'Indoor Games Arena',
        category: 'clubhouse',
        categoryLabel: 'La Dreams Club',
        description: 'Recreational zone featuring international table tennis tables, pool & billiards, carrom and chess.',
        image: '/images/amenities/indoor-games.webp',
        features: ['Tournament Billiards', 'Table Tennis Tables', 'Board Games Lounge']
      },
      {
        id: 'zumba-aerobics',
        name: 'Health Zone for Zumba & Aerobics',
        category: 'clubhouse',
        categoryLabel: 'La Dreams Club',
        description: 'Mirror-lined group exercise studio with sprung wooden flooring and integrated sound system.',
        image: '/images/amenities/zumba-aerobics.webp',
        features: ['Full Mirror Wall', 'Sprung Wooden Flooring', 'Yoga & Pilates Props']
      },
      {
        id: 'library-reading',
        name: 'Well-Stocked Library & Reading Zone',
        category: 'clubhouse',
        categoryLabel: 'La Dreams Club',
        description: 'Quiet sanctuary filled with literature, comfortable reading armchairs and high-speed Wi-Fi workstations.',
        image: '/images/amenities/library-reading-zone.webp',
        features: ['Extensive Curated Books', 'Ergonomic Reading Chairs', 'Quiet Study Desks']
      },
      {
        id: 'clubhouse-rooftop',
        name: 'Rooftop Bar Lounge & Cafeteria',
        category: 'clubhouse',
        categoryLabel: 'La Dreams Club',
        description: 'Chic rooftop open-air lounge offering panoramic views of the landscaped podium and township skyline.',
        image: '/images/amenities/clubhouse-rooftop.webp',
        features: ['Skyline Views', 'Outdoor Bar Stools', 'Evening Cocktail Seating']
      }
    ]
  }
];

export const MASTER_PLAN_LEGENDS = [
  { id: 1, name: 'Lap Pool' },
  { id: 2, name: 'Infinity Edge' },
  { id: 3, name: 'Hot Jacuzzi' },
  { id: 4, name: 'Pool Deck' },
  { id: 5, name: 'Sunken Lounger' },
  { id: 6, name: 'Jacuzzi' },
  { id: 7, name: 'Bleachers' },
  { id: 8, name: 'Tennis Court' },
  { id: 9, name: 'Leisure Lawn' },
  { id: 10, name: 'Elevated Jogging Track' },
  { id: 11, name: 'Skating Rink' },
  { id: 12, name: 'Splash Pad' },
  { id: 13, name: 'Young Kids Play Zone' },
  { id: 14, name: 'Adult Kids Play Zone' },
  { id: 15, name: 'Toddlers Play Zone' },
  { id: 16, name: 'Green Plaza' },
  { id: 17, name: 'Pathway' },
  { id: 18, name: 'Entry Plaza' },
  { id: 19, name: 'Swing Yard' },
  { id: 20, name: 'Festival Lawn' },
  { id: 21, name: 'Yoga Lawn' },
  { id: 22, name: 'Yoga Deck' },
  { id: 23, name: "Senior's Gym" },
  { id: 24, name: 'Open Gym' },
  { id: 25, name: 'Seating Pod' },
  { id: 26, name: 'Game Zone' },
  { id: 27, name: 'Paved Plaza' },
  { id: 28, name: 'Trellis Plaza' },
  { id: 29, name: 'Gathering Lawn' },
  { id: 30, name: 'Connecting Plaza' },
  { id: 31, name: 'Seating Pavilion' },
  { id: 32, name: 'Temple' },
  { id: 33, name: 'Net Cricket' },
  { id: 34, name: 'Party Lawn' },
  { id: 35, name: 'Futsal Court' },
  { id: 36, name: 'Party Deck' },
  { id: 37, name: 'Informal Plaza' },
  { id: 38, name: 'Outdoor Working Pods' },
  { id: 39, name: 'Evening Lounge (On Club Rooftop)' },
  { id: 40, name: 'Bar Lounge (On Club Rooftop)' },
  { id: 41, name: 'Half-Basketball Court' },
  { id: 42, name: 'Outdoor Movie Screening Seating' },
  { id: 43, name: 'Stage Structure' },
  { id: 44, name: 'Pool Bar' },
  { id: 45, name: 'Family Swing Lawn' },
  { id: 46, name: 'Herb Garden' },
  { id: 47, name: 'Pet Park' },
  { id: 48, name: 'Miyawaki Forest' },
  { id: 49, name: 'Entry Water Feature' },
  { id: 50, name: 'Entry Gate' },
  { id: 51, name: 'Fountain Plaza' },
  { id: 52, name: 'Food Kiosk Plaza' },
  { id: 53, name: 'Entry Gate for P.G.' },
  { id: 54, name: 'Club House in P.G.' },
  { id: 55, name: 'Spill over Lawn' },
  { id: 56, name: 'Pavilion' },
  { id: 57, name: 'Play Court' },
  { id: 58, name: 'Bleachers' },
  { id: 59, name: 'Decorative Plaza' },
  { id: 60, name: 'Outdoor Sit-out' },
  { id: 61, name: 'Barbeque Pavilion' },
];

export const CONNECTIVITY_DATA = [
  { destination: 'Kalyan-Shil Road', time: '0 Min', type: 'road', status: 'Operational' },
  { destination: 'Multimodal Corridor', time: '5 Mins', type: 'road', status: 'Upcoming Infrastructure' },
  { destination: 'Kalyan-Taloja Metro', time: '2 Mins', type: 'metro', status: 'Upcoming Metro Line' },
  { destination: 'Dombivli Railway Station', time: '12 Mins', type: 'rail', status: 'Operational Central Railway' },
  { destination: 'Navi Mumbai International Airport', time: '30 Mins', type: 'airport', status: 'Upcoming International Hub' },
];

export const SCHOOLS_NEARBY = [
  { name: 'Ira Global School', time: '2 Mins' },
  { name: 'Vidya Niketan School', time: '3 Mins' },
  { name: 'Sriram School', time: '4 Mins' },
  { name: 'Ryan International School', time: '5 Mins' },
  { name: 'Omkar Cambridge International School', time: '8 Mins' },
];

export const HOSPITALS_NEARBY = [
  { name: 'Sai Hospital', time: '2 Mins' },
  { name: 'AIMS Hospital', time: '3 Mins' },
  { name: 'RR Hospital', time: '4 Mins' },
  { name: 'Icon Hospital', time: '4 Mins' },
  { name: 'Neon Hospital', time: '10 Mins' },
];

export const LUXURY_SPECIFICATIONS = [
  { category: 'Flooring & Finishes', items: [
    'Big Size Vitrified Tiles in Living, Dining and Passage Area',
    'Vitrified Tiles in Kitchen and Common Bedroom',
    'European Wooden Flooring in Master Bedroom',
    'Gypsum Finished Internal Walls with Premium Quality Plastic Paints',
    'Marble & Granite Window Sill with Half Round Moulding / Polished'
  ]},
  { category: 'Kitchen Innovations', items: [
    'Granite Kitchen Platform with Additional Service Platform',
    '4 / 3 Burner Gas Hob & Modern Exhaust Chimney Provided',
    'Water Purifier & Geyser for Hot Water at Kitchen Sink',
    'Exhaust Fan in Kitchen Window',
    'Dedicated Dry Balcony with Plumbing & Electrical Points'
  ]},
  { category: 'Bathrooms & Sanitary', items: [
    'Shower Panel in Master Bedrooms',
    'Branded Geysers Installed in Bathrooms',
    'Designer Bathrooms with Branded Sanitary Ware & Fixtures',
    'Concealed Plumbing with Premium Quality C.P. Fittings'
  ]},
  { category: 'Electrical & Security', items: [
    'Video Door Security Systems in Each Flat with Cameras',
    'Branded Concealed Copper Wiring with MCB / ELCB Protection',
    'Ample Electrical Points & Designer Modular Switches',
    'T.V., Telephone & High-Speed Internet Points in All Rooms',
    'Attractive Main Door with Elegant Big Handles & Night Latch'
  ]},
  { category: 'Tower Features', items: [
    'Grand Double-Height Entrance Lobbies',
    'Air-Conditioned Waiting Lounge & Art Gallery',
    '24x7 Security & Comprehensive CCTV Surveillance',
    'Designer Finished Floor Lobbies and Corridors',
    'High-Speed Elevators with Automatic Generator Backup',
    'Intercom System Connecting Security Gate & Residences',
    'High-Street Shopping Boulevard with Famous Brand Stores'
  ]}
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'aerial-township',
    title: '18-Acre Global Township Elevation',
    category: 'architecture',
    categoryLabel: 'Exterior & Architecture',
    image: '/images/hero/hero-slide-2.webp',
    caption: "Artist's impression of the expansive 18-acre integrated development with 8 towers, hotel, and business park.",
    isArtistImpression: true,
  },
  {
    id: 'twilight-towers',
    title: 'G+35 Storey Towers at Twilight',
    category: 'architecture',
    categoryLabel: 'Exterior & Architecture',
    image: '/images/hero/hero-slide-3.webp',
    caption: "Artist's impression of the 8 residential towers illuminated against the Dombivli skyline.",
    isArtistImpression: true,
  },
  {
    id: 'grand-night-view',
    title: 'Magnificent Township Night Panorama',
    category: 'architecture',
    categoryLabel: 'Exterior & Architecture',
    image: '/images/hero/hero-slide-4.webp',
    caption: "Artist's impression of the vibrant high-street retail boulevard and towers at night.",
    isArtistImpression: true,
  },
  {
    id: 'world-dreams-plaza',
    title: 'World Dreams Plaza Facade',
    category: 'commercial',
    categoryLabel: 'Retail & Commercial',
    image: '/images/overview/world-dreams-plaza.webp',
    caption: "Artist's impression of the G+3 high-street plaza with golden horse fountain and cinema multiplex.",
    isArtistImpression: true,
  },
  {
    id: 'shopping-boulevard',
    title: 'High-Street Shopping Promenade',
    category: 'commercial',
    categoryLabel: 'Retail & Commercial',
    image: '/images/overview/shopping-boulevard.webp',
    caption: "Artist's impression of the grand illuminated retail colonnade featuring leading global brands.",
    isArtistImpression: true,
  },
  {
    id: 'business-park-hotel',
    title: 'G+33 Business Park & 5-Star Hotel',
    category: 'commercial',
    categoryLabel: 'Retail & Commercial',
    image: '/images/overview/business-park-hotel.webp',
    caption: "Artist's impression of World Dreams Business Park and the G+23 storey 5-star luxury hotel.",
    isArtistImpression: true,
  },
  {
    id: 'podium-garden',
    title: '6-Acre Landscaped Podium',
    category: 'podium',
    categoryLabel: 'Landscaped Spaces',
    image: '/images/overview/podium-indulgences.webp',
    caption: "Artist's impression of the 6-acre themed podium with lush greens and 600m elevated jogging track.",
    isArtistImpression: true,
  },
  {
    id: 'designer-fountain',
    title: 'Zen World Central Water Cascades',
    category: 'podium',
    categoryLabel: 'Landscaped Spaces',
    image: '/images/amenities/designer-fountain.webp',
    caption: "Artist's impression of the classical tiered fountain at Zen World.",
    isArtistImpression: true,
  },
  {
    id: 'leisure-pool',
    title: 'Leisure & Lap Pool with Sunken Bar',
    category: 'amenities',
    categoryLabel: 'Amenities',
    image: '/images/amenities/leisure-lap-pool.webp',
    caption: "Artist's impression of the infinity-edge lap pool and sunken bar overlooking the clubhouse.",
    isArtistImpression: true,
  },
  {
    id: 'futsal-court',
    title: 'Rooftop Floodlit Futsal Court',
    category: 'amenities',
    categoryLabel: 'Amenities',
    image: '/images/amenities/futsal-court.webp',
    caption: "Artist's impression of the rooftop FIFA-grade turf futsal arena.",
    isArtistImpression: true,
  },
  {
    id: 'kids-splash-pad',
    title: 'Water Play Station & Splash Pad',
    category: 'amenities',
    categoryLabel: 'Amenities',
    image: '/images/amenities/kids-splash-pad.webp',
    caption: "Artist's impression of the zero-depth children's interactive water park.",
    isArtistImpression: true,
  },
  {
    id: 'clubhouse-facade',
    title: 'La Dreams 3-Level Clubhouse',
    category: 'clubhouse',
    categoryLabel: 'Clubhouse',
    image: '/images/amenities/clubhouse-entrance-facade.webp',
    caption: "Artist's impression of the grand entry colonnade of La Dreams high-society clubhouse.",
    isArtistImpression: true,
  },
  {
    id: 'banquet-hall',
    title: 'Grand Banquet Hall for Celebrations',
    category: 'clubhouse',
    categoryLabel: 'Clubhouse',
    image: '/images/amenities/banquet-hall.webp',
    caption: "Artist's impression of the opulent banquet hall designed for high-society social events.",
    isArtistImpression: true,
  },
  {
    id: 'private-theatre',
    title: 'Private Theatre with Recliner Seating',
    category: 'clubhouse',
    categoryLabel: 'Clubhouse',
    image: '/images/amenities/private-theatre.webp',
    caption: "Artist's impression of the private DTH mini-theatre with luxury recliner seating.",
    isArtistImpression: true,
  },
  {
    id: 'squash-court',
    title: 'Air-Conditioned Squash Arena',
    category: 'clubhouse',
    categoryLabel: 'Clubhouse',
    image: '/images/amenities/squash-court.webp',
    caption: "Artist's impression of the glass-backed regulation indoor squash court.",
    isArtistImpression: true,
  },
  {
    id: 'floor-plan-1bhk',
    title: '1 BHK Unit Plan',
    category: 'residences',
    categoryLabel: 'Residences',
    image: '/images/floor-plans/1bhk-unit-plan.jpg',
    caption: 'Official 1 BHK architectural floor plan with room dimensions and layout.',
    isArtistImpression: false,
  },
  {
    id: 'floor-plan-2bhk',
    title: '2 BHK Unit Plan',
    category: 'residences',
    categoryLabel: 'Residences',
    image: '/images/floor-plans/2bhk-unit-plan.jpg',
    caption: 'Official 2 BHK architectural floor plan with dual balconies and dry terrace.',
    isArtistImpression: false,
  },
  {
    id: 'floor-plan-2.5bhk',
    title: '2.5 BHK Unit Plan',
    category: 'residences',
    categoryLabel: 'Residences',
    image: '/images/floor-plans/2.5bhk-unit-plan.jpg',
    caption: 'Official 2.5 BHK architectural floor plan featuring flexible study/kids bedroom.',
    isArtistImpression: false,
  },
  {
    id: 'floor-plan-3bhk',
    title: '3 BHK Unit Plan',
    category: 'residences',
    categoryLabel: 'Residences',
    image: '/images/floor-plans/3bhk-unit-plan.jpg',
    caption: 'Official 3 BHK architectural floor plan with walk-in wardrobe and multiple balconies.',
    isArtistImpression: false,
  }
];
