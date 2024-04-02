// https://playmusicstorage.web.app/
try {
    
    var albums = [
        { database: 1, artist: "Tyler, The Creator", album: "Wolf", folder: "tylerthecreator/wolf", image: "albumcover.webp" },
        { database: 1, artist: "Tyler, The Creator", album: "Flower Boy", folder: "tylerthecreator/flowerboy", image: "albumcover.webp" },
        { database: 1, artist: "Tyler, The Creator", album: "Igor", folder: "tylerthecreator/igor", image: "igorcover.webp" },
        { database: 1, artist: "Tyler, The Creator", album: "Cherry Bomb", folder: "tylerthecreator/cherrybomb", image: "cherrybomb.webp" },
        { database: 1, artist: "Tyler, The Creator", album: "Goblin", folder: "tylerthecreator/goblin", image: "Goblincover.webp" },
        { database: 1, artist: "Tyler, The Creator", album: "Bastard", folder: "tylerthecreator/bas", image: "albumcover.webp" },
        { database: 1, artist: "Arctic Monkeys", album: "AM", folder: "arcticmonkeys/am", image: "albumcover.webp"},
        { database: 1, artist: "Arctic Monkeys", album: "Humbug", folder: "arcticmonkeys/humbug", image: "albumcover.webp"},
        { database: 1, artist: "Arctic Monkeys", album: "WPSIATWIN", folder: "arcticmonkeys/wpsiatwin", image: "albumcover.webp"},
        { database: 1, artist: "Arctic Monkeys", album: "Favourite Worst Nightmare", folder: "arcticmonkeys/fwn", image: "albumcover.webp"},
        { database: 1, artist: "Arctic Monkeys", album: "Suck It and See", folder: "arcticmonkeys/sias", image: "albumcover.webp"},
        { database: 1, artist: "Arctic Monkeys", album: "Tranquility Base Hotel & Casino", folder: "arcticmonkeys/tbhc", image: "albumcover.webp"},
        { database: 1, artist: "Arctic Monkeys", album: "The Car", folder: "arcticmonkeys/car", image: "albumcover.webp"},
        { database: 1, artist: "Wallows", album: "Nothing Happens", folder: "wallows/nonthinghappens", image: "albumcover.webp"},
        { database: 1, artist: "Melanie Martinez", album: "Crybaby", folder: "melanie/crybaby", image: "albumcover.webp"},
        { database: 1, artist: "Melanie Martinez", album: "K-12", folder: "melanie/k12", image: "albumcover.webp"},
        { database: 1, artist: "Melanie Martinez", album: "Portals", folder: "melanie/portals", image: "albumcover.webp"},
        { database: 1, artist: "The weeknd", album: "Kiss Land", folder: "theweekend/kissland", image: "albumcover.webp"},
        { database: 1, artist: "The weeknd", album: "Beauty Behind the Madness", folder: "theweekend/bbtm", image: "albumcover.webp"},
        { database: 1, artist: "The weeknd", album: "starboy", folder: "theweekend/starboy", image: "albumcover.webp"},
        { database: 1, artist: "The weeknd", album: "Afterhours", folder: "theweekend/afterhours", image: "albumcover.webp"},
        { database: 1, artist: "The weeknd", album: "Dawnfm", folder: "theweekend/dawnfm", image: "albumcover.png"},
        { database: 1, artist: "Laufey", album: "Bewitched", folder: "laufey/bewitched", image: "albumcover.png"},
        { database: 1, artist: "Laufey", album: "Everything I know about love", folder: "laufey/eikal", image: "albumcover.png"},
        { database: 1, artist: "Roddy Ricch", album: "Life lives fast", folder: "rr/llf", image: "albumcover.png"},
        { database: 1, artist: "Roddy Ricch", album: "Please excuse me for being antisocial", folder: "rr/pemfba", image: "albumcover.png"},
        { database: 1, artist: "Lemon Demon", album: "Spirit phone", folder: "ld/sp", image: "albumcover.png"},
        { database: 1, artist: "Lemon Demon", album: "Clown", folder: "ld/cc", image: "albumcover.jpg"},
        { database: 1, artist: "Kanye West", album: "The College Dropout", folder: "kanyewest/tcd", image: "albumcover.webp"},
        { database: 1, artist: "Kanye West", album: "Late Registration", folder: "kanyewest/lr", image: "albumcover.webp"},
        { database: 1, artist: "Kanye West", album: "Graduation", folder: "kanyewest/grad", image: "albumcover.webp"},
        { database: 1, artist: "Kanye West", album: "808s & Heartbreak", folder: "kanyewest/808s", image: "albumcover.webp"},
        { database: 1, artist: "Kanye West", album: "My Beautiful Dark Twisted Fantasy", folder: "kanyewest/mbdtf", image: "albumcover.jpg"},
        { database: 1, artist: "Kanye West", album: "Watch the Throne", folder: "kanyewest/wtt", image: "albumcover.webp"},
        { database: 1, artist: "Kanye West", album: "Cruel Summer", folder: "kanyewest/cs", image: "albumcover.webp"},
        { database: 1, artist: "Kanye West", album: "Yeezus", folder: "kanyewest/yeezus", image: "Cover.jpg"},
        { database: 1, artist: "Kanye West", album: "The Life of Pablo", folder: "kanyewest/tlop", image: "albumcover.webp"},
        { database: 1, artist: "Kanye West", album: "Ye", folder: "kanyewest/ye", image: "Cover.jpg" },
        { database: 1, artist: "Kanye West", album: "Kids See Ghosts", folder: "kanyewest/ksg", image: "albumcover.webp"},
        { database: 1, artist: "Kanye West", album: "Jesus Is King", folder: "kanyewest/jesusisking", image: "Cover.jpg" },
        { database: 1, artist: "Kanye West", album: "Donda", folder: "kanyewest/donda", image: "cover.webp" },
        { database: 1, artist: "Kanye West", album: "Donda 2", folder: "kanyewest/donda2", image: "albumcover.webp" },
        { database: 1, artist: "Kanye West", album: "Vultures 1", folder: "kanyewest/vult1", image: "albumcover.webp"},
        { database: 1, artist: "Kanye West", album: "Vultures 2", folder: "kanyewest/vult2", image: "albumcover.webp"},
        { database: 1, artist: "Kanye West", album: "Vultures 3", folder: "kanyewest/vult3", image: "albumcover.webp"},
        { database: 1, artist: "Drake", album: "Thank Me Later", folder: "drake/tml", image: "albumcover.webp"},
        { database: 1, artist: "Drake", album: "Take Care", folder: "drake/tc", image: "albumcover.webp" },
        { database: 1, artist: "Drake", album: "Nothing Was the Same", folder: "drake/nwts", image: "albumcover.webp "},
        { database: 1, artist: "Drake", album: "Views", folder: "drake/views", image: "albumcover.webp "},
        { database: 1, artist: "Drake", album: "Scorpion", folder: "drake/scorp", image: "albumcover.webp "},
        { database: 1, artist: "Drake", album: "Certified Lover Boy", folder: "drake/clb", image: "albumcover.webp "},
        { database: 1, artist: "Drake", album: "Honestly, Nevermind", folder: "drake/honnvm", image: "albumcover.webp "},
        { database: 1, artist: "Drake", album: "Her Loss", folder: "drake/herloss", image: "albumcover.webp "},
        { database: 1, artist: "Drake", album: "For All the Dogs", folder: "drake/fatd", image: "albumcover.webp "},
        { database: 1, artist: "Frank Ocean", album: "Channel Orange", folder: "franko/co", image: "albumcover.webp" },
        { database: 1, artist: "Frank Ocean", album: "Blonde", folder: "franko/blonde", image: "albumcover.webp" },
        { database: 1, artist: "Heaven Pierce Her", album: "Zen, or the  Means Without Ends", folder: "hph/zotmwe", image: "albumcover.webp" },
        { database: 1, artist: "Heaven Pierce Her", album: "Flowerworks", folder: "hph/flowerworks", image: "albumcover.webp" },
        { database: 1, artist: "Heaven Pierce Her", album: "Ultrakill: Inf Hyperdeath", folder: "hph/ukih", image: "albumcover.webp" },
        { database: 1, artist: "Heaven Pierce Her", album: "Ultrakill: IMperfect Hatred", folder: "hph/ukih2", image: "albumcover.webp" },
        { database: 1, artist: "Sleeping with Siren", album: "With Ears to See and Eyes to Hear", folder: "kq/wetsaeth", image: "albumcover.webp" },
        { database: 1, artist: "Sleeping with Siren", album: "Let's Cheers to This", folder: "kq/lctt", image: "albumcover.webp" },
        { database: 1, artist: "Sleeping with Siren", album: "Feel", folder: "kq/fe", image: "albumcover.webp" },
        { database: 1, artist: "Sleeping with Siren", album: "Madness", folder: "kq/mad", image: "albumcover.webp" },
        { database: 1, artist: "Sleeping with Siren", album: "Gossip", folder: "kq/gos", image: "albumcover.webp" },
        { database: 1, artist: "Sleeping with Siren", album: "How It Feels to Be Lost", folder: "kq/hif", image: "albumcover.webp" },
        { database: 1, artist: "Sleeping with Siren", album: "Commplete Collapse", folder: "kq/cc", image: "albumcover.webp" },
        { database: 1, artist: "Pierce The Veil", album: "A Flair for the Dramatic", folder: "ptv/afftd", image: "albumcover.webp" },
        { database: 1, artist: "Pierce The Veil", album: "Selfish Machines", folder: "ptv/sm", image: "albumcover.webp" },
        { database: 1, artist: "Pierce The Veil", album: "Collide with the Sky", folder: "ptv/cwts", image: "albumcover.webp" },
        { database: 1, artist: "Pierce The Veil", album: "Misadventures", folder: "ptv/madv", image: "albumcover.webp" },
        { database: 1, artist: "Pierce The Veil", album: "The Jaws of Life", folder: "ptv/tjofl", image: "albumcover.webp" },
        { database: 1, artist: "The Smiths", album: "Smiths", folder: "smiths/tsm", image: "albumcover.webp" },
        { database: 1, artist: "The Smiths", album: "Meat is Murder", folder: "smiths/mim", image: "albumcover.webp" },
        { database: 1, artist: "The Smiths", album: "The Queen is Dead", folder: "smiths/tqid", image: "albumcover.webp" },
        { database: 1, artist: "The Smiths", album: "Strangeways, Here We Come", folder: "smiths/swhwc", image: "albumcover.webp" },
        { database: 1, artist: "Billie Eilish", album: "Happy Than Ever", folder: "be/hte", image: "albumcover.jpg" },
        { database: 1, artist: "SZA", album: "SOS", folder: "sza/sos", image: "albumcover.jpg" },
        { database: 1, artist: "Kendrick Lamar", album: "Mr morale and the big steppers", folder: "kenla/mmtbs", image: "albumcover.jpg" },
        { database: 1, artist: "Kendrick Lamar", album: "To a pimp a butterfly", folder: "kenla/tpabf", image: "albumcover.jpg" }
    //  { database: , artist: "", album: "", folder: "/", image: "webp" },
        // Add more albums here
    ];
    // have more database / storage for to bypass limit
    var audioTracks = {
        "tylerthecreator/wolf": [
            "WOLF.mp3",
            "Jamba.mp3",
            "Cowboy.mp3",
            "Awkward.mp3",
            "Domo23.mp3",
            "Answer.mp3",
            "Slater.mp3",
            "48.mp3",
            "Colossus.mp3",
            "10 PartyIsntOver_Campfire_Bimmer.mp3",
            "IFHY.mp3",
            "Pigs.mp3",
            "Parking Lot.mp3",
            "Rusty.mp3",
            "Trashwang.mp3",
            "Treehome95.mp3",
            "Tamale.mp3",
            "Lone.mp3"
        ],
        "tylerthecreator/flowerboy": [
            "01 Foreword (feat. Rex Orange County).mp3",
            "02 Where This Flower Blooms (feat. Frank Ocean).mp3",
            "Sometimes....mp3",
            "04 See You Again (feat. Kali Uchis).mp3",
            "05 Who Dat Boy (feat. A$AP Rocky).mp3",
            "06 Pothole (feat. Jaden Smith).mp3",
            "07 Garden Shed (feat. Estelle).mp3",
            "08 Boredom (feat. Rex Orange County _ Anna of the North).mp3",
            "09 I Ain_t Got Time!.mp3",
            "10 911 _ Mr. Lonely (feat. Frank Ocean _ Steve Lacy).mp3",
            "11 Droppin_ Seeds (feat. Lil Wayne).mp3",
            "November.mp3",
            "Glitter.mp3",
            "Enjoy Right Now, Today.mp3"
        ],
        "tylerthecreator/igor": [
            "01 IGOR_S THEME (feat. Lil Uzi Vert _ Kali Uchis).mp3",
            "02 EARFQUAKE (feat. Playboi Carti _ Charlie Wilson).mp3",
            "03 I THINK (feat. Solange).mp3",
            "04 BOYFRIEND (feat. Charlie Wilson _ Santigold).mp3",
            "05 RUNNING OUT OF TIME (feat. Jessy Wilson).mp3",
            "06 NEW MAGIC WAND (feat. Santigold _ Jessy Wilson).mp3",
            "07 A BOY IS A GUN_.mp3",
            "08 PUPPET (feat. Kanye West).mp3",
            "09 WHAT_S GOOD (feat. Slowthai).mp3",
            "10 GONE, GONE _ THANK YOU (feat. CeeLo Green, Cullen Omori _ La Roux).mp3",
            "11 I DON_T LOVE YOU ANYMORE (feat. Charlie Wilson, Jessy Wilson _ Solange).mp3",
            "12 ARE WE STILL FRIENDS_ (feat. Pharrell Williams).mp3"
        ],
        "tylerthecreator/cherrybomb": [
            "1 Deathcamp.mp3",
            "2 Buffalo.mp3",
            "3 PILOT.mp3",
            "4 RUN.mp3",
            "5 FIND YOUR WINGS.mp3",
            "6 Cherry Bomb.mp3",
            "7 BLOW MY LOAD.mp3",
            "8 2SEATER.mp3",
            "9 THE BROWN STAINS OF DARKEESE.mp3",
            "10 F YOUNG _ PERFECT.mp3",
            "11 SMUCKERS.mp3",
            "12 KEEP DA O_S.mp3",
            "13 OKAGA, CA.mp3"
        ],
        "tylerthecreator/goblin": [
          "01 Goblin.mp3",
          "02 Yonkers.mp3",
          "03 Radicals.mp3",
          "04 She (feat. Frank Ocean).mp3",
          "05 Transylvania.mp3",
          "06 Nightmare.mp3",
          "07 Tron Cat.mp3",
          "08 Her.mp3",
          "13 Window (feat. Domo Genesis, Hodgy Beats, Frank Ocean & Mike G).mp3",
          "14 AU79.mp3",
          "15 Golden.mp3",
          "2-01 Burger (feat. Hodgy Beats).mp3",
          "2-03 Steak Sauce.mp3",
        ],
        "tylerthecreator/bas": [
        ],
        "arcticmonkeys/am": [
            "01 - Do I Wanna Know.mp3",
            "02 - R U Mine.mp3",
            "03 - One For the Road.mp3",
            "04 - Arabella.mp3",
            "05 - I Want It All.mp3",
            "06 - No. 1 Party Anthem.mp3",
            "07 - Mad Sounds.mp3",
            "08 - Fireside.mp3",
            "09 - Why'd You Only Call Me When You're High.mp3",
            "10 - Snap Out of It.mp3",
            "11 - Knee Socks.mp3",
            "12 - I Wanna Be Yours.mp3"
        ],
        "arcticmonkeys/humbug": [
            "01. My Propeller.mp3",
            "02. Crying Lightning.mp3",
            "03. Dangerous Animals.mp3",
            "04. Secret Door.mp3",
            "05. Potion Approaching.mp3",
            "06. Fire And The Thud.mp3",
            "07. Cornerstone.mp3",
            "08. Dance Little Liar.mp3",
            "09. pretty visitors.mp3",
            "10 the jeweller's hands.mp3",
            "11_red right hand(2)(2).mp3"
        ],
        "arcticmonkeys/wpsiatwin": [
          "01 The View from the Afternoon.mp3",
          "02 I Bet You Look Good on the Dancefloor.mp3",
          "03 Fake Tales of San Francisco.mp3",
          "04 Dancing Shoes.mp3",
          "05 You Probably Couldn't See for the Lights But You Were Staring.mp3",
          "06 Still Take You Home.mp3",
          "07 Riot Van.mp3",
          "08 Red Light Indicates Doors Are Secured.mp3",
          "09 Mardy Bum.mp3",
          "10 Perhaps Vampires Is a Bit Strong But.mp3",
          "11 When the Sun Goes Down.mp3",
          "12 From the Ritz to the Rubble.mp3",
          "13 A Certain Romance.mp3",
        ],
        "arcticmonkeys/fwn": [
       ], 
        "arcticmonkeys/sias": [
        ],
        "arcticmonkeys/tbhc": [
        ],
        "arcticmonkeys/car": [
        ],
        "wallows/nonthinghappens": [
          "Only Friend.mp3",
          "Treacherous Doctor.mp3",
          "Sidelines.mp3",
          "Are You Bored Yet (feat. Clairo).mp3",
          "Scrawny.mp3",
          "Ice Cold Pool.mp3",
          "Worlds Apart.mp3",
          "What You Like.mp3",
          "Remember When.mp3",
          "I_m Full.mp3",
          "Do Not Wait.mp3"
      ],
        "melanie/crybaby": [

        ],
        "melanie/k12": [

        ],
        "melanie/portals": [

        ],
        "theweekend/kissland": [
            "01 - The Weeknd - Professional.mp3",
            "02 - The Weeknd - The Town.mp3",
            "03 - The Weeknd - Adaptation.mp3",
            "04 - The Weeknd - Love in the Sky.mp3",
            "05 - The Weeknd - Belong to the World.mp3",
            "06 - The Weeknd - Live For (Feat. Drake).mp3",
            "07 - The Weeknd - Wanderlust.mp3",
            "08 - The Weeknd - Kiss Land.mp3",
            "09 - The Weeknd - Pretty.mp3",
            "10 - The Weeknd - Tears in the Rain.mp3",
        ],
        "theweekend/bbtm": [
            "01 Real Life.mp3",
            "02 Losers.mp3",
            "03 Tell Your Friends.mp3",
            "04 Often.mp3",
            "05 The Hills.mp3",
            "06 Acquainted.mp3",
            "07 Can't Feel My Face.mp3",
            "08 Shameless.mp3",
            "09 Earned It (Fifty Shades Of Grey).mp3",
            "10 In The Night.mp3",
            "11 As You Are.mp3",
            "12 Dark Times.mp3",
            "13 Prisoner.mp3",
            "14 Angel.mp3"
        ],
        "theweekend/starboy": [
            "01. Starboy.mp3",
            "02. Party Monster.mp3",
            "03. False Alarm.mp3",
            "04. Reminder.mp3",
            "05. Rockin.mp3",
            "06. Secrets.mp3",
            "07. True Colors.mp3",
            "08. Stargirl Interlude.mp3",
            "09. Sidewalks.mp3",
            "10. Six Feet Under.mp3",
            "11. Love To Lay.mp3",
            "12. A Lonely Night.mp3",
            "13. Attention.mp3",
            "14. Ordinary Life.mp3",
            "15. Nothing Without You.mp3",
            "16. All I Know.mp3",
            "17. Die For You.mp3",
            "18. I Feel It Coming.mp3",
            "19. Die For You (Remix).mp3",
            "20. Starboy (Kygo Remix).mp3",
            "21. Reminder (Remix).mp3"
    
        ],
        "theweekend/afterhours": [
            "01 Alone Again.mp3",
            "02 Too Late.mp3",
            "03 Hardest To Love.mp3",
            "04 Scared To Live.mp3",
            "05 Snowchild.mp3",
            "06 Escape From LA.mp3",
            "07 Heartless.mp3",
            "08 Faith.mp3",
            "09 Blinding Lights.mp3",
            "10 In Your Eyes.mp3",
            "11 Save Your Tears.mp3",
            "12 Repeat After Me (Interlude).mp3",
            "13 After Hours.mp3",
            "14 Until I Bleed Out.mp3"
        ],
        "theweekend/dawnfm": [
            "01. Dawn FM.mp3",
            "02. Gasoline.mp3",
            "03. How Do I Make You Love Me_.mp3",
            "04. Take My Breath.mp3",
            "05. Sacrifice.mp3",
            "06. A Tale By Quincy.mp3",
            "07. Out of Time.mp3",
            "08. Here We Go… Again.mp3",
            "09. Best Friends.mp3",
            "10. Is There Someone Else_.mp3",
            "11. Starry Eyes.mp3",
            "12. Every Angel is Terrifying.mp3",
            "13. Don’t Break My Heart.mp3",
            "14. I Heard You’re Married.mp3",
            "15. Less Than Zero.mp3",
            "16. Phantom Regret by Jim.mp3"
        ],
        "laufey/bewitched": [
            "01 Dreamer.mp3",
            "02 Second Best.mp3",
            "03 Haunted.mp3",
            "04 Must Be Love.mp3",
            "05 While You Were Sleeping.mp3",
            "06 Lovesick.mp3",
            "07 California and Me (feat. Philharm.mp3",
            "08 Nocturne (Interlude).mp3",
            "09 Promise.mp3",
            "10 From The Start.mp3",
            "11 Misty.mp3",
            "12 Serendipity.mp3",
            "13 Letter To My 13 Year Old Self.mp3",
            "14 Bewitched.mp3"
        ],
        "laufey/eikal": [

        ],
        "rr/llf": [

        ],
        "rr/pemfba": [

        ],
        "ld/sp": [

        ],
        "ld/cc": [
            "01. Error.mp3",
            "02. Lemon Demon.mp3",
            "03. Ten Thousand Light Years Away.mp3",
            "04. Don't Be Like the Sun.mp3",
            "05. Bowling Alley.mp3",
            "06. Wrong.mp3",
            "07. Hazel's Modus Operandi.mp3",
            "08. Idiot Control Now.mp3",
            "09. Pepper and Salt.mp3",
            "10. Holy Bison Beaks!.mp3",
            "11. Somnolence.mp3",
            "12. Fire Motif.mp3",
            "13. Hyakugojyuuichi 2003.mp3",
            "14. Elsewhere.mp3",
        ],
        "kanyewest/tcd": [
            ""
        ],
        "kanyewest/lr": [
            ""
        ],
        "kanyewest/grad": [
            ""
        ],
        "kanyewest/808s": [
            ""
        ],
        "kanyewest/mbdtf": [
            "01. Dark Fantasy.mp3",
            "02. Who Will Survive In America.mp3",
            "03. Gorgeous [feat. Kid Cudi].mp3",
            "04. POWER.mp3",
            "05. All Of The Lights [Interlude].mp3",
            "06. All Of The Lights.mp3",
            "07. Monster [feat. Jay-Z, Rick Ross, Nicki Minaj & Bon Iver].mp3",
            "08. So Appalled [feat. Jay-Z, Pusha T, CyHi Da Prynce, Swizz Beatz & The RZA].mp3",
            "09. Devil In A New Dress [feat. Rick Ross].mp3",
            "10. Runaway [feat. Pusha T].mp3",
            "11. Hell Of A Life.mp3",
            "12. Blame Game [feat. John Legend].mp3",
            "13. Lost In The World [feat. Bon Iver].mp3"
        ],
        "kanyewest/wtt": [
            ""
        ],
        "kanyewest/cs": [
            ""
        ],
        "kanyewest/yeezus": [
          "01 Kanye West - On Sight.mp3",
          "02 Kanye West - Black Skinhead.mp3",
          "03 Kanye West - I Am A God.mp3",
          "04 Kanye West - New Slaves.mp3",
          "05 Kanye West - Hold My Liquor.mp3",
          "06 Kanye West - I'm In It.mp3",
          "07 Kanye West - Blood On The Leaves.mp3",
          "08 Kanye West - Guilt Trip.mp3",
          "09 Kanye West - Send It Up.mp3",
          "10 Kanye West - Bound 2.mp3"
        ],
        "kanyewest/tlop": [
            ""
        ],
        "kanyewest/ye": [
            "01. I Thought About Killing You.mp3",
            "02. Yikes.mp3",
            "03. All Mine.mp3",
            "04. Wouldn't Leave.mp3",
            "05. No Mistakes.mp3",
            "06. Ghost Town.mp3",
            "07. Violent Crimes.mp3"
        ],
        "kanyewest/ksg": [
            ""
        ],
        "kanyewest/jesusisking": [
            "01 Every Hour (feat. Sunday Service.mp3",
            "02 Selah.mp3",
            "03 Follow God.mp3",
            "04 Closed on Sunday.mp3",
            "05 On God.mp3",
            "06 Everything We Need (feat. Ty Doll.mp3",
            "07 Water (feat. Ant Clemons).mp3",
            "08 God Is.mp3",
            "09 Hands On (feat. Fred Hammond).mp3",
            "10 Use This Gospel (feat. Clipse & K.mp3",
            "11 Jesus Is Lord.mp3"
        ],
        "kanyewest/donda": [
            "01. Donda Chant.mp3",
            "02. Jail.mp3",
            "03. God Breathed.mp3",
            "04. Off The Grid.mp3",
            "05. Hurricane.mp3",
            "06. Praise God.mp3",
            "07. Jonah.mp3",
            "08. Ok Ok.mp3",
            "09. Junya.mp3",
            "10. Believe What I Say.mp3",
            "11. 24.mp3",
            "12. Remote Control.mp3",
            "13. Moon.mp3",
            "14. Heaven and Hell.mp3",
            "15. Donda.mp3",
            "16. Keep My Spirit Alive.mp3",
            "17. Jesus Lord.mp3",
            "18. New Again.mp3",
            "19. Tell The Vision.mp3",
            "20. Lord I Need You.mp3",
            "21. Pure Souls.mp3",
            "22. Come to Life.mp3",
            "23. No Child Left Behind.mp3",
            "24. Jail pt 2.mp3",
            "25. Ok Ok pt 2.mp3",
            "26. Junya pt 2.mp3",
            "27. Jesus Lord pt 2.mp3"
        ],
        "kanyewest/donda2": [
            "01 True Love (feat. XXXTentacion).mp3",
            "02 Broken Road (feat. Don Toliver).mp3",
            "03 Get Lost.mp3",
            "04 Too Easy.mp3",
            "05 Flowers.mp3",
            "06 Security.mp3",
            "07 We Did It Kid (feat. Baby Keem _ Migos).mp3",
            "08 Pablo (feat. Travis Scott _ Future).mp3",
            "09 Louie Bags (feat. Jack Harlow).mp3",
            "10 Happy (feat. Future).mp3",
            "11 Sci Fi (feat. Sean Leon).mp3",
            "12 Selfish (feat. XXXTentacion).mp3",
            "13 Lord Lift Me Up.mp3",
            "14 Keep It Burning (feat. Future).mp3",
            "15 City of Gods (with Fivio Foreign _ Alicia Keys).mp3",
            "16 First Time in a Long Time (feat. Soulja Boy).mp3"
        ],
        "kanyewest/vult1": [
            ""
        ],
        "kanyewest/vult2": [
            ""
        ],
        "kanyewest/vult3": [
            ""
        ],
        "drake/tml": [
            "01 Fireworks (Ft. Alicia Keys).mp3",
            "02 Karaoke.mp3",
            "03 The Resistance.mp3",
            "04 Over.mp3",
            "05 Show Me A Good Time.mp3",
            "06 Up All Night (Ft. Nicki Minaj).mp3",
            "07 Fancy (Ft. T.I. & Swizz Beatz).mp3",
            "08 Shut It Down (Ft. The-Dream).mp3",
            "09 Unforgettable (Ft. Young Jeezy).mp3",
            "10 Light Up (Ft. Jay-Z).mp3",
            "11 Miss Me (Ft. Lil Wayne).mp3",
            "12 Cece's Interlude.mp3",
            "13 Find Your Love.mp3",
            "14 Thank Me Now.mp3"
        ],
        "drake/tc": [

        ],
        "drake/nwts": [
            "01 - Drake - Tuscan Leather.mp3",
            "02 - Drake - Furthest Thing.mp3",
            "03 - Drake - Started From The Bottom.mp3",
            "04 - Drake - Wu-Tang Forever.mp3",
            "05 - Drake - Own It.mp3",
            "06 - Drake - Worst Behavior.mp3",
            "07 - Drake - From Time (Feat. Jhene Aiko).mp3",
            "08 - Drake - Hold On, We're Going Home (Feat. Majid Jordan).mp3",
            "09 - Drake - Connect.mp3",
            "10 - Drake - The Language.mp3",
            "11 - Drake - 305 To My City (Feat. Detail).mp3",
            "12 - Drake - Too Much (Feat. Sampha).mp3",
            "13 - Drake - Pound Cake-Paris Morton Music 2 (Feat. Jay-Z).mp3",
            "14 - Drake - Come Thru.mp3",
            "15 - Drake - All Me (Feat. Big Sean & 2 Chainz).mp3",
            "16 - Drake - The Motion (Feat. Sampha).mp3"
        ],
        "drake/views": [
            "01 Keep the Family Close.mp3",
            "02 9.mp3",
            "03 U With Me_.mp3",
            "04 Feel No Ways.mp3",
            "05 Hype.mp3",
            "06 Weston Road Flows.mp3",
            "07 Redemption.mp3",
            "08 With You (feat. PARTYNEXTDOOR).mp3",
            "09 Faithful (feat. Pimp C & dvsn).mp3",
            "10 Still Here.mp3",
            "11 Controlla.mp3",
            "12 One Dance (feat. Wizkid & Kyla).mp3",
            "13 Grammys (feat. Future).mp3",
            "14 Childs Play.mp3",
            "15 Pop Style.mp3",
            "16 Too Good (feat. Rihanna).mp3",
            "17 Summers Over Interlude.mp3",
            "18 Fire & Desire.mp3",
            "19 Views.mp3",
            "20 Hotline Bling.mp3"
        ],
        "drake/scorp": [
            "1-01 Survival.mp3",
            "1-02 Nonstop.mp3",
            "1-03 Elevate.mp3",
            "1-04 Emotionless.mp3",
            "1-05 God's Plan.mp3",
            "1-06 I'm Upset.mp3",
            "1-07 8 Out Of 10.mp3",
            "1-08 Mob Ties.mp3",
            "1-09 Can't Take a Joke.mp3",
            "1-10 Sandra's Rose.mp3",
            "1-11 Talk Up (feat. JAY-Z).mp3",
            "1-12 Is There More.mp3",
            "2-01 Peak.mp3",
            "2-02 Summer Games.mp3",
            "2-03 Jaded.mp3",
            "2-04 Nice For What.mp3",
            "2-05 Finesse.mp3",
            "2-06 Ratchet Happy Birthday.mp3",
            "2-07 That's How You Feel.mp3",
            "2-08 Blue Tint.mp3",
            "2-09 In My Feelings.mp3",
            "2-10 Don't Matter to Me (feat. Michael Jackson).mp3",
            "2-11 After Dark (feat. Static Major & Ty Dolla $ign).mp3",
            "2-12 Final Fantasy.mp3",
            "2-13 March 14.mp3"
        ],
        "drake/clb": [
            "01. Champagne Poetry.mp3",
            "02. Papi’s Home.mp3",
            "03. Girls Want Girls.mp3",
            "04. In The Bible.mp3",
            "05. Love All.mp3",
            "06. Fair Trade.mp3",
            "07. Way 2 Sexy.mp3",
            "08. TSU.mp3",
            "09. N 2 Deep.mp3",
            "10. Pipe Down.mp3",
            "11. Yebba’s Heartbreak.mp3",
            "12. No Friends In The Industry.mp3",
            "13. Knife Talk.mp3",
            "14. 7am On Bridle Path.mp3",
            "15. Race My Mind.mp3",
            "16. Fountains.mp3",
            "17. Get Along Better.mp3",
            "18. You Only Live Twice.mp3",
            "19. IMY2.mp3",
            "20. Fucking Fans.mp3",
            "21. The Remorse.mp3"
        ],
        "drake/honnvm": [

        ],
        "drake/herloss": [
            "01. Rich Flex.mp3",
            "02. Major Distribution.mp3",
            "03. On BS.mp3",
            "04. BackOutsideBoyz.mp3",
            "05. Privileged Rappers.mp3",
            "06. Spin Bout U.mp3",
            "07. Hours In Silence.mp3",
            "08. Treacherous Twins.mp3",
            "09. Circo Loco.mp3",
            "10. Pussy & Millions.mp3",
            "11. Broke Boys.mp3",
            "12. Middle of the Ocean.mp3",
            "13. Jumbotron Shit Poppin.mp3",
            "14. More M’s.mp3",
            "15. 3AM on Glenwood.mp3",
            "16. I Guess It’s Fuck Me.mp3",
        ],
        "drake/fatd": [

        ],
        "franko/co": [
            "01 Start.mp3",
            "02 Thinkin Bout You.mp3",
            "03 Fertilizer.mp3",
            "04 Sierra Leone.mp3",
            "05 Sweet Life.mp3",
            "06 Not Just Money.mp3",
            "07 Super Rich Kids (feat. Earl Sweat.mp3",
            "08 Pilot Jones.mp3",
            "09 Crack Rock.mp3",
            "10 Pyramids.mp3",
            "11 Lost.mp3",
            "12 White (feat. John Mayer).mp3",
            "13 Monks.mp3",
            "14 Bad Religion.mp3",
            "15 Pink Matter (feat. André 3000).mp3",
            "16 Forrest Gump.mp3",
            "17 End.mp3",
        ],
        "franko/blonde": [
            "01 Nikes.mp3",
            "02 Ivy.mp3",
            "03 Pink + White.mp3",
            "04 Be Yourself.mp3",
            "05 Solo.mp3",
            "06 Skyline To.mp3",
            "07 Self Control.mp3",
            "08 Good Guy.mp3",
            "09 Nights.mp3",
            "10 Solo (Reprise).mp3",
            "11 Pretty Sweet.mp3",
            "12 Facebook Story.mp3",
            "13 Close to You.mp3",
            "14 White Ferrari.mp3",
            "15 Seigfried.mp3",
            "16 Godspeed.mp3",
            "17 Futura Free.mp3",
        ],
        "hph/zotmwe": [],
        "hph/flowerworks": [],
        "hph/ukih": [],
        "hph/ukih2": [],
        "kq/wetsaeth": [],
        "kq/lctt": [],
        "kq/fe": [],
        "kq/mad": [],
        "kq/gos": [],
        "kq/hif": [],
        "kq/cc": [],
        "kq/cc": [],
        "ptv/afftd": [],
        "ptv/sm": [],
        "ptv/cwts": [],
        "ptv/madv": [],
        "ptv/tjofl": [],
        "smiths/tsm": [],
        "smiths/mim": [],
        "smiths/tqid": [],
        "smiths/swhwc": [],
        "be/hte": [
            "01. Getting Older.mp3",
            "02. I Didn't Change My Number(Explicit).mp3",
            "03. Billie Bossa Nova.mp3",
            "04. my future.mp3",
            "05. Oxytocin.mp3",
            "06. GOLDWING.mp3",
            "07. lost cause(explicit).mp3",
            "08. halley's comet.mp3",
            "09. not my responsibility.mp3",
            "10. overheated(explicit).mp3",
            "11. everybody dies.mp3",
            "12. your power.mp3",
            "13. nda(explicit).mp3",
            "14. therefore i am.mp3",
            "15. happier than ever(explicit).mp3",
            "16. male fantasy.mp3"
        ],
        "kenla/mmtbs": [
            "01. United In Grief.mp3",
            "02. N95.mp3",
            "03. Worldwide Steppers.mp3",
            "04. Die Hard.mp3",
            "05. Father Time.mp3",
            "06. Rich (Interlude).mp3",
            "07. Rich Spirit.mp3",
            "08. We Cry Together.mp3",
            "09. Purple Hearts.mp3",
            "10. Count Me Out.mp3",
            "11. Crown.mp3",
            "12. Silent Hill.mp3",
            "13. Savior (Interlude).mp3",
            "14. Savior.mp3",
            "15. Auntie Diaries.mp3",
            "16. Mr.Morale.mp3",-
            "17. Mother I Sober.mp3",
            "18. Mirror.mp3",
        ],
        "kenla/tpabf": [
            "01. Wesley's Theory.mp3",
            "02. For Free! (Interlude).mp3",
            "03. King Kunta.mp3",
            "04. Institutionalized.mp3",
            "05. These Walls.mp3",
            "06. u.mp3",
            "07. Alright.mp3",
            "08. For Sale! (Interlude).mp3",
            "09. Momma.mp3",
            "10. Hood Politics.mp3",
            "11. How Much A Dollar Cost.mp3",
            "12. Complexion (A Zulu Love).mp3",
            "13. The Blacker The Berry.mp3",
            "14. You Ain't Gotta Lie (Momma Said).mp3",
            "15. i.mp3",
            "16. Mortal Man.mp3"
        ],
    };
    var audio = document.getElementById("myAudio");
    var playButton = document.querySelectorAll("#playbuttonthung");
    var volumeControl = document.getElementById("volume");
    var progressBar = document.querySelectorAll("progress");
    var currentTrackIndex = 0;
    var currentAlbum = "tylerthecreator/wolf"
    var currentAlbumIndex = 0;
    var audiotimern;
    var repeatButtonClickCount = 0;
    var folart = [];
    let playbackMode = "none";
    let currentTime = 0;
    if (localStorage.getItem("Albumindex") !== null) {
        currentAlbumIndex = localStorage.getItem("Albumindex");
    }
    
    if (localStorage.getItem("Trackindex") !== null) {
        currentTrackIndex = localStorage.getItem("Trackindex");
    }

    if (localStorage.getItem("CurrentAlbum") !== null) {
        currentAlbum = localStorage.getItem("CurrentAlbum");
    }
    
    if (localStorage.getItem("timerforaudio") !== null) {
        audiotimern = localStorage.getItem("timerforaudio");
    }
    const databases = [
        { id: 0, url: "playmusicstorage.web.app/" },
        { id: 1, url: "https://playmusicstorage.web.app/" },
        // Add more databases as needed
      ];
      const selectedDatabase = databases.find(databases => databases.id === albums[currentAlbumIndex].database);
      const DatabaseDomain = selectedDatabase.url;
    function loadTrack() {        
            var trackPath = audioTracks[currentAlbum][currentTrackIndex];

            audio.src = DatabaseDomain + "songs/" + currentAlbum + "/" + trackPath;
            audio.load();
    
            updateTrackText();
            updateAlbumCover();
            
            mediathinggy();
            localStorage.setItem("Albumindex", currentAlbumIndex);
            localStorage.setItem("Trackindex", currentTrackIndex);
            localStorage.setItem("CurrentAlbum", currentAlbum);
    }
    loadTrack();    

     // delete this very soon 
function getLyrics(track) {
  var apiKey = 'fiE1SC2YyfP5bN4Ku6BqChOfU46ltaZMhFxOVjlknfeIZG9Glkp5yCU_Kve1qlvo';

  fetch(`https://api.genius.com/search?q=${track}&access_token=${apiKey}`, {})
    .then(response => response.json())
    .then(data => {
      if (data.response && data.response.hits && data.response.hits.length > 0) {
        var song = data.response.hits[0].result;
        console.log(`Title: ${song.title} by ${song.primary_artist.name}`);
        console.log(`URL: ${song.url}`);
        console.log(`Thumbnail: ${song.song_art_image_thumbnail_url}`);
        console.log(`Image: ${song.song_art_image_url}`);
        console.log(`Lyrics:\n${song.path}`);
        console.log(`https://api.genius.com/search?q=${track}?access_token=${apiKey}`);
        console.log(`https://api.genius.com/songs/${song.id}?access_token=${apiKey}`);
        fetch(`https://api.genius.com/songs/${song.id}?access_token=${apiKey}`, {})
        
    .then(response => response.json())
    .then(data => {
        let embedContent = `<div id='rg_embed_link_${song.id}' class='rg_embed_link' data-song-id='${song.id}'><a href='https://genius.com/${song.path}'></a></div> <script crossorigin src='//genius.com/songs/${song.id}/embed.js'></script>`;
    document.getElementById('lyrics').innerHTML = embedContent;
    navigator.clipboard.writeText(embedContent)
    alert(document.getElementById('lyrics').innerHTML);
})
      } else {
        console.log('No matching song found.');
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === '\\') {
      doSomething();
    }
  });
  
  function doSomething() {
    var iframethingy = document.getElementById("iframeas");
    if (iframethingy.style.display === "block") {
        iframethingy.style.display = "none";
    } else {
        iframethingy.style.display = "block";
    }
}

    
    function playPause() {
        const isPaused = audio.paused;
        audio[isPaused ? 'play' : 'pause']();
        const iconClass = isPaused ? 'fas fa-pause' : 'fas fa-play';
        playButton.forEach(element => element.innerHTML = `<i class="${iconClass}"></i>`);
    }
    function setVolume() {
        localStorage.setItem("Volume", volumeControl.value);
        audio.volume = localStorage.getItem("Volume");
    }
    
    var volumeControl = document.getElementById('volume');
    volumeControl.addEventListener('input', setVolume);
    
    function changeTrack(step) {
        currentTrackIndex += step;
        let trackCount = audioTracks[currentAlbum].length;
    
        if (playbackMode === "repeat-song") {
            audio.currentTime = 0;
            audio.play();
            playbackMode = "none";
        updatePlaybackModeText();
            return;
        }
    
        // The rest of the previous logic remains unchanged
        if (playbackMode === "repeat") {
            currentTrackIndex = ((currentTrackIndex % trackCount) + trackCount) % trackCount;
        } else if (playbackMode === "loop" && currentTrackIndex < 0) {
            currentTrackIndex = trackCount - 1;        
        } else {
            currentTrackIndex = currentTrackIndex % trackCount;
        }
        updatePlaybackModeText();
        loadTrack();
        audio.play();
    }
    

    function toggleRepeat() {
        repeatButtonClickCount += 1;
    
        // After the third click, reset the counter to return to normal playback
        if (repeatButtonClickCount > 2) {
            repeatButtonClickCount = 0;
            playbackMode = "none";
        } else if (repeatButtonClickCount === 1) {
            // On the first click, enable album repeat
            playbackMode = "repeat-song";

        } else if (repeatButtonClickCount === 2) {
            playbackMode = "repeat";
        }
    
        updatePlaybackModeText();
    }
    
    // repeat function and all of the other stuff
    function updatePlaybackModeText() {
        var buttonrepeat = document.getElementById("repeatbutton");
        if (playbackMode === "none") {
            buttonrepeat.innerHTML = '<i class="fa-solid fa-repeat" style="color: #ffffff;"></i>';
        } else if (playbackMode === "repeatalbum") {
            buttonrepeat.innerHTML = '<i class="fa-solid fa-repeat" style="color: #889ab3;"></i>';
        } else if (playbackMode === "repeat-song") {
            buttonrepeat.innerHTML = '<i class="fa-solid fa-repeat" style="color: #889ab3;"></i>';
        }
    }
    // if spacebar is clicked pause without keycode since keycode is deprecated
    document.addEventListener('keydown', function(event) {
        const target = event.target;
        const nodeName = target.nodeName.toLowerCase();
      
        if (nodeName === 'input' || nodeName === 'textarea') {
          return; // Skip the keyboard shortcuts if the target is an input or textarea
        }
      
        if (event.code === 'Space') {
          event.preventDefault();
          playPause();
        } else if (event.code === 'ArrowRight') {
          event.preventDefault();
          skipTrack();  
        } else if (event.code === 'ArrowLeft') {
            event.preventDefault();
            previousTrack();
        } else if (event.code === 'ArrowUp') {
          event.preventDefault();
          volumeControl = document.getElementById("volume");
          volumeControl.value = parseFloat(volumeControl.value) + 0.03;
          audio.volume = volumeControl.value;
          setVolume();
        } else if (event.code === 'ArrowDown') {
          event.preventDefault();
          volumeControl = document.getElementById("volume");
          volumeControl.value = parseFloat(volumeControl.value) - 0.01;
          audio.volume = volumeControl.value;
          setVolume();
        } else if (event.code === 'KeyF') {
          event.preventDefault();
          openfullplayer();
        } else if (event.code === 'KeyG') {
          event.preventDefault();
          hidefullplayer();
        } else if (event.code === 'KeyL') {
          event.preventDefault();
          toggleRepeat();
        }
      });
      



    function skipTrack() {
        changeTrack(1);
    }

    function previousTrack() {
        changeTrack(-1);
    }

    function seek(event, progressBarId) {
        const percent = event.offsetX / document.getElementById(progressBarId).offsetWidth;
        audio.currentTime = isFinite(percent * audio.duration) ? percent * audio.duration : console.error("Invalid seek time");
    }
    
    function getContrastColor(rgbColor) {
        const [r, g, b] = rgbColor.match(/\d+/g).map(Number);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.5 ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
    }

    function updateAlbumCover() {
        const selectedAlbum = DatabaseDomain + "songs/" + currentAlbum + "/" +albums[currentAlbumIndex].image;
        const image = new Image();
        image.crossOrigin = "Anonymous";
        image.src = selectedAlbum;
        document.querySelectorAll('[id="albumCover"]').forEach(element => element.src = selectedAlbum);

        image.onload = function() {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0, image.width, image.height);

            const [red, green, blue] = context.getImageData(0, 0, canvas.width, canvas.height).data;
            const audioControls = document.querySelector(".audio-controls-full");
            const audioControlsMini = document.querySelector(".audio-controls");
            const rgbColor = `rgb(${red},${green},${blue})`;
            const textContrastColor = getContrastColor(rgbColor);

                audioControls.style.backgroundColor = rgbColor;
                audioControls.style.color = textContrastColor;

                audioControlsMini.style.backgroundColor = rgbColor;
                audioControlsMini.style.color = textContrastColor;
                audioControlsMini.style.borderColor = rgbColor;
        };
    }
                    
    
    
    // Call the updateAlbumCover function when changing albums
    function changeAlbum(step) {
        currentAlbumIndex += step;
        let albumCount = albums.length;
        currentAlbumIndex = ((currentAlbumIndex % albumCount) + albumCount) % albumCount;
        currentAlbum = albums[currentAlbumIndex].folder;
        currentTrackIndex = 0;
        if (audioTracks[currentAlbum]) {
            loadTrack();
            audio.play();
            updateAlbumCover();
        } else {
            console.error(`Album not found: ${currentAlbum}`);
        }
    }

    function nextAlbum() {
        changeAlbum(1);
    }

    function previousAlbum() {
        changeAlbum(-1);
    }

    audio.addEventListener("timeupdate", function() {
        const duration = audio.duration;
        if (isFinite(duration)) {
            const percentComplete = (audio.currentTime / duration) * 100;
            progressBar.forEach(element => element.value = percentComplete);
        }
        localStorage.setItem("timerforaudio", audio.currentTime);
    });

    audio.currentTime = localStorage.getItem("timerforaudio");

    loadTrack();

    audio.addEventListener("ended", skipTrack);

    function updateTrackText() {
        var currentTrackElements = document.querySelectorAll(".currentTrack");
        var currentTrack2Elements = document.querySelectorAll(".currentTrack2");
        var currentartist = document.querySelectorAll(".currentartist");
        var currentartist2  = document.querySelectorAll('.currentartist2')
        
        var artist = albums[currentAlbumIndex].artist;
        var track = audioTracks[currentAlbum][currentTrackIndex];
    
        // Remove the .mp3 extension from the track name
        track = track.replace(".mp3", "");
    
        // Remove the numbering at the beginning of the track name, handling extra dash or period
        track = track.replace(/^\d+\s*[-.]*\s*/, "");
    
        currentTrackElements.forEach(function(element) {
            element.textContent = track;
        });
        
        currentartist.forEach(function(element) {
            element.textContent = artist;
        });

        currentartist2.forEach(function(element){
            element.textContent = artist;
        });

        currentTrack2Elements.forEach(function(element) {
            element.textContent =  track;
        });
    }
    const elementsById = ['songselector', 'accountsettings', 'searching', 'lilbrary', 'settings', 'mlogin'].reduce((obj, id) => {
        obj[id] = document.getElementById(id);
        return obj;
    }, {});

    const elementsByClassName = ['audio-controls-full', 'audio-controls', 'sidebarmen'].reduce((obj, className) => {
        obj[className] = document.getElementsByClassName(className);
        return obj;
    }, {});

    function hidefullplayer() {
        elementsById['songselector'].style.display = "flex";
        elementsByClassName['audio-controls-full'][0].style.display = "none";
        elementsByClassName['audio-controls'][0].style.display = "flex";
        elementsByClassName['sidebarmen'][0].style.display = "block";
    }

    function openfullplayer() {
        Object.values(elementsById).forEach(element => element.style.display = "none");
        elementsById['songselector'].style.display = "none";
        elementsByClassName['audio-controls-full'][0].style.display = "flex";
        elementsByClassName['audio-controls'][0].style.display = "none";
        elementsByClassName['sidebarmen'][0].style.display = "none";
    }
    
 
    
    // Call the function to update both elements
    updateTrackText();
    // Add these lines to update the song duration and current time
    var songTimeElement = document.querySelectorAll("#songTime");
    var songDurationElement = document.querySelectorAll("#songDuration");
    var songTimeElement2 = document.getElementById("songTime2");
    var songDurationElement2 = document.getElementById("songDuration2");
    audio.addEventListener("timeupdate", function() {
        var currentTime = audio.currentTime;
        var duration = audio.duration;
        // Check if duration is a finite number before calculating percentComplete
        if (isFinite(duration)) {
            var percentComplete = (currentTime / duration) * 100;
            
            progressBar.forEach(function(element) {
                element.value = percentComplete;
            });
            // Update the song duration and current time
            var currentMinutes = Math.floor(currentTime / 60);
            var currentSeconds = Math.floor(currentTime % 60);
            var durationMinutes = Math.floor(duration / 60);
            var durationSeconds = Math.floor(duration % 60);
            // Display current time and duration in the format "M:SS"
            songTimeElement.forEach(function(element) {
                element.textContent = textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;;
            });
            songDurationElement.forEach(function(element) {
                element.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
            })
            songTimeElement2.textContent = textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;;
            songDurationElement2.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
        }
    });


    // load the songs
    
    document.getElementById('hideExplicitCheckbox').addEventListener('change', (event) => {
        localStorage.setItem('hideExplicit', event.target.checked ? 'true' : 'false');
        // Clear existing content and re-fetch the data
        const songSelector = document.getElementById('farts');
        songSelector.innerHTML = '';
        fetchAndDisplayAlbums();
      });
      document.getElementById('swithcbox').addEventListener('change', (event) => {
        if (event.target.checked == true) {
            document.getElementById('farts').style.display = "none";
            document.getElementById("single").style.display = "block";
        } else {
            document.getElementById('farts').style.display = "block";
            document.getElementById("single").style.display = "none";
        }
    });
    function fetchAndDisplayAlbums () {
    fetch('json/songs.json')
        .then((response) => response.json())
        .then((data) => {
            const songSelector = document.getElementById('farts');
            
            songSelector.innerHTML = ''; // Clear existing content
    
            let currentArtist = ''; // Initialize the current artist
            data.albums.forEach((album, albumIndex) => {
                if (album.artist !== currentArtist) {
                    // Create a new <h1> for a different artist
                    const artistHeader = document.createElement('h1');
                    const icon = document.createElement('i');
                    const buttonstar = document.createElement('button');
                    icon.className = "fa-regular fa-star";
                    artistHeader.textContent = album.artist;
                    buttonstar.style.backgroundColor = "none";
                    icon.style.fontSize = "25px";
                    icon.style.marginLeft = "15px";
                    icon.style.color = "#ffffff";
                    songSelector.appendChild(artistHeader);
                    artistHeader.appendChild(buttonstar)
                    buttonstar.appendChild(icon);

                    var clickcount = 0;
                    buttonstar.addEventListener("click", function() {
                        clickcount += 1;
                        
                        if (clickcount > 1) {
                            clickcount = 0;
                            icon.className = "fa-regular fa-star";
                        } else if (clickcount === 1) {
                            icon.className = "fa-solid fa-star";
                            // album.artist
                            alert(folart)
                            folart.push(album.artist);
                            localStorage.setItem("folart", folart.push)
                        }
                    });
                    
                    // Update the current artist
                    currentArtist = album.artist;
                }
    
                // Create a button for the album
                const albumButton = document.createElement('button');
                const imageSize = getSelectedSize(); // Call a function to get the selected size
                albumButton.innerHTML = `<img src="${album.cover}" alt="${album.album}" class="album-${imageSize}">`;
                albumButton.onclick = () => albumsec(albumIndex);
                songSelector.appendChild(albumButton);
    
        
                // if "explicit": "true" hide the album and if localstorage is set to hide explicit albums hide them but hide them is set to true
                if (album.explicit === "true" && localStorage.getItem("hideExplicit") === "true") {
                    albumButton.style.display = "none";
                    console.log('albumButton:', albumButton);
                    const artistHeaders = document.querySelectorAll('h1');
                    artistHeaders.forEach((artistHeader) => {
                        const artistAlbums = data.albums.filter(album => album.artist === artistHeader.textContent);
                          if (artistAlbums.every(album => album.explicit === "true")) {
                            artistHeader.style.display = "none";
                    }});
                }
            });
            const selectedSize = getSelectedSize();
            localStorage.setItem('selectedSize', selectedSize);
            // After all albums have been processed, check if all albums of an artist are explicit
    
        })
        .catch((error) => {
            console.log('Error loading JSON data:', error);
            console.log('Error loading JSON data:', error);
        });
    }
    fetchAndDisplayAlbums();
    const radioOptions = document.getElementsByName('size');
    radioOptions.forEach(option => {
        option.addEventListener('click', fetchAndDisplayAlbums);
    });
// Function to get the selected size from the radio button
function getSelectedSize() {
    const radioOptions = document.getElementsByName('size');
    let selectedSize = localStorage.getItem('selectedSize'); // Check if a value is saved in localStorage

    // If no value is saved in localStorage, set the default to "medium"
    if (!selectedSize) {
        selectedSize = 'medium';
    }

    for (let i = 0; i < radioOptions.length; i++) {
        if (radioOptions[i].value === selectedSize) {
            radioOptions[i].checked = true; // Check the appropriate radio button based on the saved value
        }
        radioOptions[i].addEventListener('click', function() {
            if (this.checked && this.value !== selectedSize) { // Check if the selected size is different
                selectedSize = this.value;
                localStorage.setItem('selectedSize', selectedSize); // Save the selected size to localStorage
                fetchAndDisplayAlbums(); // Fetch and display albums with the updated size
            }
        });
    }

    // Return the selected size
    return selectedSize;
}

    document.getElementById("single").style.display = "none"; 
    function albumsec(albumnumber) {
        // Retrieve the album details from the albums array
        const albumDetails = albums[albumnumber];
    
        if (albumDetails) {
            // Update the currentAlbumIndex
            currentAlbumIndex = albumnumber;
    
            // Update the currentAlbum and currentTrackIndex
            currentAlbum = albumDetails.folder;
            currentTrackIndex = 0;
    
            // Load the track and play it
            loadTrack();
            audio.play();
    
            // Update the album cover image
            updateAlbumCover();
        } else {
            console.error(`Album with index ${albumnumber} not found in the albums array.`);
        }
    }
    
    
    
    function mediathinggy() {
        var track = audioTracks[currentAlbum][currentTrackIndex]
        track = track.replace(".mp3", "");
        track = track.replace(/^\d+\s*[-.]*\s*/, "");
        if ("mediaSession" in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: track,
                artist: albums[currentAlbumIndex].artist,
                album: albums[currentAlbumIndex].album,
                artwork: [{
                        src: albums[currentAlbumIndex].image,
                        sizes: "96x96",
                        type: "image/webp",
                    },
                    {
                        src: albums[currentAlbumIndex].image,
                        sizes: "128x128",
                        type: "image/webp",
                    },
                    {
                        src: albums[currentAlbumIndex].image,
                        sizes: "192x192",
                        type: "image/webp",
                    },
                    {
                        src: albums[currentAlbumIndex].image,
                        sizes: "256x256",
                        type: "image/webp",
                    },
                    {
                        src: albums[currentAlbumIndex].image,
                        sizes: "384x384",
                        type: "image/webp",
                    },
                    {
                        src: albums[currentAlbumIndex].image,
                        sizes: "512x512",
                        type: "image/webp",
                    },
                ],
            });
    
    
            navigator.mediaSession.setActionHandler("play", () => {
                playPause();
            });
            navigator.mediaSession.setActionHandler("pause", () => {
                playPause();
            });
            navigator.mediaSession.setActionHandler("seekto", (details) => {
                if (details && details.seekTime !== undefined) {
                    if (details.fastSeek && 'fastSeek' in audio) {
                        audio.fastSeek(details.seekTime);
                    } else {
                        audio.currentTime = details.seekTime;
                    }
                } else {
                    console.error("Invalid or missing details for seekto operation");
                }
            });
            
            navigator.mediaSession.setActionHandler("previoustrack", () => {
                previousTrack();
            });
            navigator.mediaSession.setActionHandler("nexttrack", () => {
                skipTrack();
            });
    
        }
    }
    function switchthingy(st) {
        var home = document.getElementById("songselector");
        var search = document.getElementById("searching");
        var libaraby = document.getElementById("lilbrary");
        var login = document.getElementById("mlogin");
        var accountsettings = document.getElementById("accountsettings");
        var settings = document.getElementById("settings");
    
        home.style.display = "none";
        search.style.display = "none";
        libaraby.style.display = "none";
        login.style.display = "none";
        accountsettings.style.display = "none";
        settings.style.display = "none";
    
        switch(st) {
            case "hom":
                home.style.display = "flex";
                break;
            case "lil":
                libaraby.style.display = "flex";
                break;
            case "user":
                login.style.display = "block";
                break;
            case "search":
                search.style.display = "block";
                break;
            case "set":
                settings.style.display = "block";
                break;
        }
    }

    function searchfunction() {
        const input = document.getElementById('myInput').value.toLowerCase();
        const listHolder = document.querySelector('#list-holder');
        listHolder.innerHTML = "";
    
        for (let i = 0; i < albums.length; i++) {
            const obj = albums[i];
            const albumName = obj.album.toLowerCase();
            const artistName = obj.artist.toLowerCase();
    
          // ... (previous code)

if (albumName.includes(input) || artistName.includes(input)) {
    const div = document.createElement('div');
    const imagealbum = document.createElement('img');
    const listitem = document.createElement('li');
    const label = document.createElement('span');
    const label2 = document.createElement('span');
    const br = document.createElement('br');
    label.style.fontSize = "20px";

    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.width = "200px";
    div.style.display = "inline-block";
    div.style.backgroundColor = "#343434";
    div.style.borderRadius = "10px";
    
    imagealbum.style.borderRadius = "5px";
    imagealbum.style.width = "200px";
    imagealbum.style.height = "200px";

    label2.style.color = "grey";

    label.style.color = "white";
    label.style.overflow = "hidden";
    label.style.textOverflow = "ellipsis";
    label.style.whiteSpace = "nowrap";  // Prevents text wrapping
    label.style.display = "inline-block";

    label.textContent = `${obj.album}`;
    label2.textContent = `${obj.artist}`;

    div.addEventListener('click', function() {
        albumsec(i)
    });
    
    imagealbum.src = obj.image;
    listitem.appendChild(label);
    listitem.appendChild(br)
    listitem.appendChild(label2);
    div.appendChild(imagealbum);
    div.appendChild(listitem);
    div.appendChild(document.createElement('br'));
    listHolder.appendChild(div);
}

        }
    }
    
    
    function darkmode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    
    window.addEventListener("DOMContentLoaded", async event => {
      installApp()
    });
    
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });
    
    window.addEventListener('appinstalled', (e) => {
    });
    
    async function installApp() {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        deferredPrompt = null;
      }
    }
    function consoled(text, type) {
        if (type === 'error') {
            console.error(text);
        } else if (type == 'warn') {
          console.warn(text);
        } else if (type == 'debug') {
        console.debug(text);
        }
    }
    function w() {
        for (let album in audioTracks) {
            audioTracks[album].forEach(trackPath => {
                let url = `https://playmusicstorage.web.app/songs/${album}/${trackPath}`;
                let request = new XMLHttpRequest();
                request.open('HEAD', url, false);
                request.send();
            });
        }
    }
    navigator.serviceWorker.register("/js/sw.js");
    
    
    } catch(error) {
        console.log(error);
        console.log(error.message);
        console.log(error);
        console.log(error.message);
    }
