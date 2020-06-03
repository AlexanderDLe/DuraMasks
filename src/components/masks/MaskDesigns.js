const maskPrice = 12.5;

export const selection = {
    ////////////
    // SOLIDS //
    ///////////
    black: {
        type: 'Mask',
        color: 'Black',
        img: 'Black.jpg',
        param: 'black',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: true,
        tags: [],
    },
    darkgrey: {
        type: 'Mask',
        color: 'Dark Grey',
        img: 'DarkGrey.jpg',
        param: 'darkgrey',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: true,
        tags: ['black', 'white'],
    },
    grey: {
        type: 'Mask',
        color: 'Grey',
        img: 'Grey.jpg',
        param: 'grey',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: false,
        tags: ['black', 'white'],
    },
    white: {
        type: 'Mask',
        color: 'White',
        img: 'White.jpg',
        param: 'white',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: false,
        tags: [],
    },
    ash: {
        type: 'Mask',
        color: 'Ash',
        img: 'Ash.jpg',
        param: 'ash',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: true,
        tags: ['black', 'grey'],
    },
    navyblue: {
        type: 'Mask',
        color: 'Navy Blue',
        img: 'NavyBlue.jpg',
        param: 'navyblue',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: true,
        tags: [],
    },
    navygrey: {
        type: 'Mask',
        color: 'Navy Grey',
        img: 'NavyGrey.jpg',
        param: 'navygrey',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: true,
        tags: ['blue'],
    },
    denim: {
        type: 'Mask',
        color: 'Denim',
        img: 'Denim.jpg',
        param: 'denim',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: false,
        tags: ['jeans', 'blue'],
    },
    jumper: {
        type: 'Mask',
        color: 'Jumper',
        img: 'Jumper.jpg',
        param: 'jumper',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: false,
        tags: ['green'],
    },
    green: {
        type: 'Mask',
        color: 'Green',
        img: 'Green.jpg',
        param: 'green',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: false,
        tags: [],
    },
    red: {
        type: 'Mask',
        color: 'Red',
        img: 'Red.jpg',
        param: 'red',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: false,
        tags: ['red', 'pink'],
    },
    pink: {
        type: 'Mask',
        color: 'Pink',
        img: 'Pink.jpg',
        param: 'pink',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: false,
        tags: ['red'],
    },
    orange: {
        type: 'Mask',
        color: 'Orange',
        img: 'Orange.jpg',
        param: 'orange',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: false,
        tags: ['orange'],
    },
    peach: {
        type: 'Mask',
        color: 'Peach',
        img: 'Peach.jpg',
        param: 'peach',
        price: maskPrice,
        category: 'solid',
        angled: true,
        hot: false,
        tags: ['orange'],
    },
    //////////////
    // BANDANAS //
    /////////////
    blackbandana: {
        type: 'Mask',
        color: 'Black Bandana',
        img: 'BlackBandana.jpg',
        param: 'blackbandana',
        price: maskPrice,
        category: 'bandana',
        angled: true,
        hot: true,
        tags: ['black'],
    },
    whitebandana: {
        type: 'Mask',
        color: 'White Bandana',
        img: 'WhiteBandana.jpg',
        param: 'whitebandana',
        price: maskPrice,
        category: 'bandana',
        angled: true,
        hot: true,
        tags: ['black'],
    },
    redbandana: {
        type: 'Mask',
        color: 'Red Bandana',
        img: 'RedBandana.jpg',
        param: 'redbandana',
        price: maskPrice,
        category: 'bandana',
        angled: true,
        hot: false,
        tags: ['pink'],
    },
    pinkbandana: {
        type: 'Mask',
        color: 'Pink Bandana',
        img: 'PinkBandana.jpg',
        param: 'pinkbandana',
        price: maskPrice,
        category: 'bandana',
        angled: true,
        hot: false,
        tags: ['red'],
    },
    navybandana: {
        type: 'Mask',
        color: 'Navy Bandana',
        img: 'NavyBandana.jpg',
        param: 'navybandana',
        price: maskPrice,
        category: 'bandana',
        angled: true,
        hot: true,
        tags: ['blue'],
    },
    bluebandana: {
        type: 'Mask',
        color: 'Blue Bandana',
        img: 'BlueBandana.jpg',
        param: 'bluebandana',
        price: maskPrice,
        category: 'bandana',
        angled: true,
        hot: false,
        tags: ['navy'],
    },
    ///////////////
    // PATTERNED //
    //////////////
    navycamo: {
        type: 'Mask',
        color: 'Navy Camo',
        img: 'NavyCamo.jpg',
        param: 'navycamo',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: true,
        tags: ['blue'],
    },
    armycamo: {
        type: 'Mask',
        color: 'Army Camo',
        img: 'ArmyCamo.jpg',
        param: 'armycamo',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: true,
        tags: ['green'],
    },
    artisanblack: {
        type: 'Mask',
        color: 'Artisan Black',
        img: 'ArtisanBlack.jpg',
        param: 'artisanblack',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: true,
        tags: [],
    },
    spots: {
        type: 'Mask',
        color: 'Spots',
        img: 'Spots.jpg',
        param: 'spots',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['black', 'white', 'dots'],
    },
    blackdotted: {
        type: 'Mask',
        color: 'Black Dotted',
        img: 'BlackDotted.jpg',
        param: 'blackdotted',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: true,
        tags: ['dots'],
    },
    artisanred: {
        type: 'Mask',
        color: 'Artisan Red',
        img: 'ArtisanRed.jpg',
        param: 'artisanred',
        price: maskPrice,
        category: 'pattern',
        angled: false,
        hot: false,
        tags: ['pink'],
    },
    ladybug: {
        type: 'Mask',
        color: 'Ladybug',
        img: 'Ladybug.jpg',
        param: 'ladybug',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['red'],
    },
    minnie: {
        type: 'Mask',
        color: 'Minnie',
        img: 'Minnie.jpg',
        param: 'minnie',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: true,
        tags: ['red'],
    },
    hearts: {
        type: 'Mask',
        color: 'Hearts',
        img: 'Hearts.jpg',
        param: 'hearts',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: true,
        tags: ['black', 'red'],
    },
    butterfly: {
        type: 'Mask',
        color: 'Butterfly',
        img: 'Butterfly.jpg',
        param: 'butterfly',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['black', 'purple', 'violet'],
    },
    swirl: {
        type: 'Mask',
        color: 'Swirl',
        img: 'Swirl.jpg',
        param: 'swirl',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['black'],
    },
    skulls: {
        type: 'Mask',
        color: 'Skulls',
        img: 'Skulls.jpg',
        param: 'skulls',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['black', 'orange'],
    },
    motion: {
        type: 'Mask',
        color: 'Motion',
        img: 'Motion.jpg',
        param: 'motion',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['green'],
    },
    polk: {
        type: 'Mask',
        color: 'Polk',
        img: 'Polk.jpg',
        param: 'polk',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: true,
        tags: ['white', 'brown', 'orange'],
    },
    cherries: {
        type: 'Mask',
        color: 'Cherries',
        img: 'Cherries.jpg',
        param: 'cherries',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['green', 'red'],
    },
    lavande: {
        type: 'Mask',
        color: 'Lavande',
        img: 'Lavande.jpg',
        param: 'lavande',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['black', 'pink'],
    },
    magnetic: {
        type: 'Mask',
        color: 'Magnetic',
        img: 'Magnetic.jpg',
        param: 'magnetic',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['blue', 'yellow', 'teal'],
    },
    native: {
        type: 'Mask',
        color: 'Native',
        img: 'Native.jpg',
        param: 'native',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['orange', 'brown'],
    },
    radiant: {
        type: 'Mask',
        color: 'Radiant',
        img: 'Radiant.jpg',
        param: 'radiant',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['yellow', 'orange', 'red'],
    },
    tribal: {
        type: 'Mask',
        color: 'Tribal',
        img: 'Tribal.jpg',
        param: 'tribal',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: true,
        tags: ['black', 'white'],
    },
    classic: {
        type: 'Mask',
        color: 'Classic',
        img: 'Classic.jpg',
        param: 'classic',
        price: maskPrice,
        category: 'pattern',
        angled: false,
        hot: false,
        tags: ['yellow', 'brown'],
    },
    calavera: {
        type: 'Mask',
        color: 'Calavera',
        img: 'Calavera.jpg',
        param: 'calavera',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: true,
        tags: ['red'],
    },
    nurse: {
        type: 'Mask',
        color: 'Nurse',
        img: 'Nurse.jpg',
        param: 'nurse',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['pink', 'red'],
    },
    apple: {
        type: 'Mask',
        color: 'Apple',
        img: 'Apple.jpg',
        param: 'apple',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['black', 'red'],
    },
    fancy: {
        type: 'Mask',
        color: 'Fancy',
        img: 'Fancy.jpg',
        param: 'fancy',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['black', 'pink'],
    },
    heels: {
        type: 'Mask',
        color: 'Heels',
        img: 'Heels.jpg',
        param: 'heels',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['brown', 'yellow'],
    },
    gardener: {
        type: 'Mask',
        color: 'Gardener',
        img: 'Gardener.jpg',
        param: 'gardener',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['yellow'],
    },
    rainbow: {
        type: 'Mask',
        color: 'Rainbow',
        img: 'Rainbow.jpg',
        param: 'rainbow',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['colorful'],
    },
    menace: {
        type: 'Mask',
        color: 'Menace',
        img: 'Menace.jpg',
        param: 'menace',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['green'],
    },
    music: {
        type: 'Mask',
        color: 'Music',
        img: 'Music.jpg',
        param: 'music',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        hot: false,
        tags: ['grey', 'orange'],
    },
    // firefighter: {
    //     type: 'Mask',
    //     color: 'Firefighter',
    //     img: 'Firefighter.jpg',
    //     param: 'firefighter',
    //     price: maskPrice,
    //     category: 'pattern',
    //     angled: true,
    //     hot: false,
    //     tags: ['orange'],
    // },
    ////////////
    // ANIMAL //
    ///////////
    paws: {
        type: 'Mask',
        color: 'Paws',
        img: 'Paws.jpg',
        param: 'paws',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: true,
        tags: ['black', 'dog'],
    },
    pupper: {
        type: 'Mask',
        color: 'Pupper',
        img: 'Pupper.jpg',
        param: 'pupper',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: true,
        tags: ['dog', 'black'],
    },
    woof: {
        type: 'Mask',
        color: 'Woof',
        img: 'Woof.jpg',
        param: 'woof',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: true,
        tags: ['dog', 'red'],
    },
    dawg: {
        type: 'Mask',
        color: 'Dawg',
        img: 'Dawg.jpg',
        param: 'dawg',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: false,
        tags: ['dog', 'brown'],
    },
    dalmation: {
        type: 'Mask',
        color: 'Dalmation',
        img: 'Dalmation.jpg',
        param: 'dalmation',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: false,
        tags: ['white', 'black'],
    },
    boyscout: {
        type: 'Mask',
        color: 'Boy Scout',
        img: 'BoyScout.jpg',
        param: 'boyscout',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: false,
        tags: ['blue', 'yellow'],
    },

    kittens: {
        type: 'Mask',
        color: 'Kittens',
        img: 'Kittens.jpg',
        param: 'kittens',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: true,
        tags: ['cat', 'brown'],
    },
    zebra: {
        type: 'Mask',
        color: 'Zebra',
        img: 'Zebra.jpg',
        param: 'zebra',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: false,
        tags: ['black', 'white'],
    },
    blackandwhite: {
        type: 'Mask',
        color: 'Black & White',
        img: 'Black&White.jpg',
        param: 'blackandwhite',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: false,
        tags: ['black', 'white'],
    },
    // leopard: {
    //     type: 'Mask',
    //     color: 'Leopard',
    //     img: 'Leopard.jpg',
    //     param: 'leopard',
    //     price: maskPrice,
    //     category: 'animal',
    //     angled: true,
    //     hot: true,
    //     tags: ['animal', 'brown'],
    // },
    cheetah: {
        type: 'Mask',
        color: 'Cheetah',
        img: 'Cheetah.jpg',
        param: 'cheetah',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: true,
        tags: ['animal', 'brown'],
    },
    violetredzebra: {
        type: 'Mask',
        color: 'Violet Red Zebra',
        img: 'VioletRedZebra.jpg',
        param: 'violetredzebra',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: false,
        tags: ['purple', 'magenta'],
    },
    cobra: {
        type: 'Mask',
        color: 'Cobra',
        img: 'Cobra.jpg',
        param: 'cobra',
        price: maskPrice,
        category: 'animal',
        angled: false,
        hot: false,
        tags: ['animal', 'orange', 'brown'],
    },
    play: {
        type: 'Mask',
        color: 'Play',
        img: 'Play.jpg',
        param: 'play',
        price: maskPrice,
        category: 'animal',
        angled: false,
        hot: false,
        tags: ['blue', 'red'],
    },
    madagascar: {
        type: 'Mask',
        color: 'Madagascar',
        img: 'Madagascar.jpg',
        param: 'madagascar',
        price: maskPrice,
        category: 'animal',
        angled: false,
        hot: false,
        tags: ['brown', 'yellow'],
    },
    parrots: {
        type: 'Mask',
        color: 'Parrots',
        img: 'Parrots.jpg',
        param: 'parrots',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: false,
        tags: ['bird', 'colorful'],
    },
    cute: {
        type: 'Mask',
        color: 'Cute',
        img: 'Cute.jpg',
        param: 'cute',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: false,
        tags: ['blue', 'cat', 'navy'],
    },
    unicorn: {
        type: 'Mask',
        color: 'Unicorn',
        img: 'Unicorn.jpg',
        param: 'unicorn',
        price: maskPrice,
        category: 'animal',
        angled: true,
        hot: false,
        tags: ['blue', 'pink'],
    },
    //////////////
    // HAWAIIAN //
    //////////////
    sunset: {
        type: 'Mask',
        color: 'Sunset',
        img: 'Sunset.jpg',
        param: 'sunset',
        price: maskPrice,
        category: 'hawaiian',
        angled: false,
        hot: true,
        tags: ['yellow', 'orange'],
    },
    hula: {
        type: 'Mask',
        color: 'Hula',
        img: 'Hula.jpg',
        param: 'hula',
        price: maskPrice,
        category: 'hawaiian',
        angled: false,
        hot: true,
        tags: ['pink', 'red', 'green'],
    },
    beach: {
        type: 'Mask',
        color: 'Beach',
        img: 'Beach.jpg',
        param: 'beach',
        price: maskPrice,
        category: 'hawaiian',
        angled: true,
        hot: true,
        tags: ['blue'],
    },
    koi: {
        type: 'Mask',
        color: 'Koi',
        img: 'Koi.jpg',
        param: 'koi',
        price: maskPrice,
        category: 'hawaiian',
        angled: true,
        hot: true,
        tags: ['red', 'pink'],
    },
    pineapple: {
        type: 'Mask',
        color: 'Pineapple',
        img: 'Pineapple.jpg',
        param: 'pineapple',
        price: maskPrice,
        category: 'hawaiian',
        angled: true,
        hot: false,
        tags: ['yellow'],
    },
    pond: {
        type: 'Mask',
        color: 'Pond',
        img: 'Pond.jpg',
        param: 'pond',
        price: maskPrice,
        category: 'hawaiian',
        angled: true,
        hot: false,
        tags: ['blue'],
    },
    canopy: {
        type: 'Mask',
        color: 'Canopy',
        img: 'Canopy.jpg',
        param: 'canopy',
        price: maskPrice,
        category: 'hawaiian',
        angled: true,
        hot: false,
        tags: ['pink', 'green'],
    },
    sky: {
        type: 'Mask',
        color: 'Sky',
        img: 'Sky.jpg',
        param: 'sky',
        price: maskPrice,
        category: 'hawaiian',
        angled: false,
        hot: true,
        tags: ['blue'],
    },
    dusk: {
        type: 'Mask',
        color: 'Dusk',
        img: 'Dusk.jpg',
        param: 'dusk',
        price: maskPrice,
        category: 'hawaiian',
        angled: false,
        hot: false,
        tags: ['pink'],
    },
    surf: {
        type: 'Mask',
        color: 'Surf',
        img: 'Surf.jpg',
        param: 'surf',
        price: maskPrice,
        category: 'hawaiian',
        angled: false,
        hot: false,
        tags: ['grey', 'yellow'],
    },
    bloom: {
        type: 'Mask',
        color: 'Bloom',
        img: 'Bloom.jpg',
        param: 'bloom',
        price: maskPrice,
        category: 'hawaiian',
        angled: true,
        hot: false,
        tags: ['orange', 'yellow'],
    },
    paradise: {
        type: 'Mask',
        color: 'Paradise',
        img: 'Paradise.jpg',
        param: 'paradise',
        price: maskPrice,
        category: 'hawaiian',
        angled: true,
        hot: false,
        tags: ['blue'],
    },
    palms: {
        type: 'Mask',
        color: 'Palms',
        img: 'Palms.jpg',
        param: 'palms',
        price: maskPrice,
        category: 'hawaiian',
        angled: true,
        hot: false,
        tags: ['black'],
    },
    honolulu: {
        type: 'Mask',
        color: 'Honolulu',
        img: 'Honolulu.jpg',
        param: 'honolulu',
        price: maskPrice,
        category: 'hawaiian',
        angled: true,
        hot: false,
        tags: ['red'],
    },
    river: {
        type: 'Mask',
        color: 'River',
        img: 'River.jpg',
        param: 'river',
        price: maskPrice,
        category: 'hawaiian',
        angled: true,
        hot: false,
        tags: ['green', 'brown'],
    },
    incas: {
        type: 'Mask',
        color: 'Incas',
        img: 'Incas.jpg',
        param: 'incas',
        price: maskPrice,
        category: 'hawaiian',
        angled: true,
        hot: false,
        tags: ['red', 'orange', 'yellow'],
    },
    ////////////
    // FLORAL //
    ////////////,
    midnight: {
        type: 'Mask',
        color: 'Midnight',
        img: 'Midnight.jpg',
        param: 'midnight',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: true,
        tags: ['black', 'yellow', 'white'],
    },
    bouquet: {
        type: 'Mask',
        color: 'Bouquet',
        img: 'Bouquet.jpg',
        param: 'bouquet',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: true,
        tags: ['black', 'purple'],
    },
    floralblue: {
        type: 'Mask',
        color: 'Floral Blue',
        img: 'FloralBlue.jpg',
        param: 'floralblue',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: true,
        tags: [],
    },
    majestic: {
        type: 'Mask',
        color: 'Majestic',
        img: 'Majestic.jpg',
        param: 'majestic',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: false,
        tags: ['red', 'yellow'],
    },
    corsage: {
        type: 'Mask',
        color: 'Corsage',
        img: 'Corsage.jpg',
        param: 'corsage',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: false,
        tags: ['black', 'red', 'yellow'],
    },
    spring: {
        type: 'Mask',
        color: 'Spring',
        img: 'Spring.jpg',
        param: 'spring',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: true,
        tags: ['pink', 'orange'],
    },
    floralwhite: {
        type: 'Mask',
        color: 'Floral White',
        img: 'FloralWhite.jpg',
        param: 'floralwhite',
        price: maskPrice,
        category: 'floral',
        angled: false,
        hot: true,
        tags: [],
    },
    garden: {
        type: 'Mask',
        color: 'Garden',
        img: 'Garden.jpg',
        param: 'garden',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: true,
        tags: [],
    },

    floret: {
        type: 'Mask',
        color: 'Floret',
        img: 'Floret.jpg',
        param: 'floret',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: true,
        tags: ['green', 'pink', 'purple'],
    },
    roses: {
        type: 'Mask',
        color: 'Roses',
        img: 'Roses.jpg',
        param: 'roses',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: false,
        tags: ['red'],
    },
    // floralgreen: {
    //     type: 'Mask',
    //     color: 'Floral Green',
    //     img: 'FloralGreen.jpg',
    //     param: 'floralgreen',
    //     price: maskPrice,
    //     category: 'floral',
    //     angled: true,
    //     hot: false,
    //     tags: [],
    // },
    florallavender: {
        type: 'Mask',
        color: 'Floral Lavender',
        img: 'FloralLavender.jpg',
        param: 'florallavender',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: false,
        tags: ['purple', 'violet'],
    },
    floralpink: {
        type: 'Mask',
        color: 'Floral Pink',
        img: 'FloralPink.jpg',
        param: 'floralpink',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: false,
        tags: ['red'],
    },
    purpleplaid: {
        type: 'Mask',
        color: 'Purple Plaid',
        img: 'PurplePlaid.jpg',
        param: 'purpleplaid',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: false,
        tags: ['lavender', 'violet'],
    },
    // orangeplaid: {
    //     type: 'Mask',
    //     color: 'Orange Plaid',
    //     img: 'OrangePlaid.jpg',
    //     param: 'orangeplaid',
    //     price: maskPrice,
    //     category: 'floral',
    //     angled: true,
    //     hot: false,
    //     tags: [],
    // },
    // rose: {
    //     type: 'Mask',
    //     color: 'Rose',
    //     img: 'Rose.jpg',
    //     param: 'rose',
    //     price: maskPrice,
    //     category: 'floral',
    //     angled: true,
    //     hot: false,
    //     tags: ['red'],
    // },
    floralburgundy: {
        type: 'Mask',
        color: 'Floral Burgundy',
        img: 'FloralBurgundy.jpg',
        param: 'floralburgundy',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: false,
        tags: ['pink', 'brown'],
    },
    stem: {
        type: 'Mask',
        color: 'Stem',
        img: 'Stem.jpg',
        param: 'stem',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: false,
        tags: ['white', 'green'],
    },
    // vines: {
    //     type: 'Mask',
    //     color: 'Vines',
    //     img: 'Vines.jpg',
    //     param: 'vines',
    //     price: maskPrice,
    //     category: 'floral',
    //     angled: true,
    //     hot: false,
    //     tags: ['green'],
    // },
    celeste: {
        type: 'Mask',
        color: 'Celeste',
        img: 'Celeste.jpg',
        param: 'celeste',
        price: maskPrice,
        category: 'floral',
        angled: true,
        hot: false,
        tags: ['blue', 'brown'],
    },
    // holly: {
    //     type: 'Mask',
    //     color: 'Holly',
    //     img: 'Holly.jpg',
    //     param: 'holly',
    //     price: maskPrice,
    //     category: 'floral',
    //     angled: true,
    //     hot: false,
    //     tags: ['pink', 'brown', 'burgundy'],
    // },
    //////////////
    // MEMORIAL //
    //////////////
    service: {
        type: 'Mask',
        color: 'Service',
        img: 'Service.jpg',
        param: 'service',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['green', 'brown'],
    },
    airforce: {
        type: 'Mask',
        color: 'Air Force',
        img: 'AirForce.jpg',
        param: 'airforce',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['brown', 'army'],
    },
    marines: {
        type: 'Mask',
        color: 'Marines',
        img: 'Marines.jpg',
        param: 'marines',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['brown', 'army'],
    },
    marinecorps: {
        type: 'Mask',
        color: 'Marine Corps',
        img: 'MarineCorps.jpg',
        param: 'marinecorps',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['blue'],
    },
    usnavy: {
        type: 'Mask',
        color: 'US Navy',
        img: 'USNavy.jpg',
        param: 'usnavy',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['blue'],
    },
    army: {
        type: 'Mask',
        color: 'Army',
        img: 'Army.jpg',
        param: 'army',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['blue'],
    },
    excellence: {
        type: 'Mask',
        color: 'Excellence',
        img: 'Excellence.jpg',
        param: 'excellence',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['blue'],
    },
    integrity: {
        type: 'Mask',
        color: 'Integrity',
        img: 'Integrity.jpg',
        param: 'integrity',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['blue'],
    },
    veteran: {
        type: 'Mask',
        color: 'Veteran',
        img: 'Veteran.jpg',
        param: 'veteran',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['brown'],
    },
    forces: {
        type: 'Mask',
        color: 'Forces',
        img: 'Forces.jpg',
        param: 'forces',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['green'],
    },
    usa: {
        type: 'Mask',
        color: 'USA',
        img: 'USA.jpg',
        param: 'usa',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['black'],
    },
    tags: {
        type: 'Mask',
        color: 'Tags',
        img: 'Tags.jpg',
        param: 'tags',
        price: maskPrice,
        category: 'patriot',
        angled: true,
        hot: false,
        tags: ['black'],
    },
    // LIMITED SUPPLY
    ////////////
    // ELASTIC //
    ////////////
    blackelastic: {
        type: 'Elastic',
        color: '1/4" Black Elastic',
        img: 'BlackElastic.jpg',
        param: 'blackelastic',
        price: {
            '25 Yards': 10,
            '85 Yards': 20,
            '200 Yards': 40,
        },
        category: 'custom',
        angled: false,
        hot: false,
        tags: ['elastic'],
    },
    whiteelastic: {
        type: 'Elastic',
        color: '1/4" White Elastic',
        img: 'WhiteElastic.jpg',
        param: 'whiteelastic',
        price: {
            '25 Yards': 10,
            '85 Yards': 20,
            '200 Yards': 40,
        },
        category: 'custom',
        angled: false,
        hot: false,
        tags: ['elastic'],
    },
};
