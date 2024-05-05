
try {
    var albums = [
        { database: 1, year: "", artist: "Tyler, The Creator", album: "Wolf", folder: "tylerthecreator/wolf", image: "albumcover.webp" },
        { database: 1, year: "", artist: "Tyler, The Creator", album: "Flower Boy", folder: "tylerthecreator/flowerboy", image: "albumcover.webp" },
        { database: 1, year: "", artist: "Tyler, The Creator", album: "Igor", folder: "tylerthecreator/igor", image: "igorcover.webp" },
        { database: 1, year: "", artist: "Tyler, The Creator", album: "Cherry Bomb", folder: "tylerthecreator/cherrybomb", image: "cherrybomb.webp" },
        { database: 1, year: "", artist: "Tyler, The Creator", album: "Goblin", folder: "tylerthecreator/goblin", image: "Goblincover.webp" },
        { database: 1, year: "", artist: "Arctic Monkeys", album: "AM", folder: "arcticmonkeys/am", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Arctic Monkeys", album: "Humbug", folder: "arcticmonkeys/humbug", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Arctic Monkeys", album: "WPSIATWIN", folder: "arcticmonkeys/wpsiatwin", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Arctic Monkeys", album: "Favourite Worst Nightmare", folder: "arcticmonkeys/fwn", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Arctic Monkeys", album: "Suck It and See", folder: "arcticmonkeys/sias", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Arctic Monkeys", album: "Tranquility Base Hotel & Casino", folder: "arcticmonkeys/tbhc", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Arctic Monkeys", album: "The Car", folder: "arcticmonkeys/car", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Wallows", album: "Nothing Happens", folder: "wallows/nonthinghappens", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Melanie Martinez", album: "Crybaby", folder: "melanie/crybaby", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Melanie Martinez", album: "K-12", folder: "melanie/k12", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Melanie Martinez", album: "Portals", folder: "melanie/portals", image: "albumcover.webp"},
        { database: 1, year: "", artist: "The weeknd", album: "Kiss Land", folder: "theweekend/kissland", image: "albumcover.webp"},
        { database: 1, year: "", artist: "The weeknd", album: "Beauty Behind the Madness", folder: "theweekend/bbtm", image: "albumcover.webp"},
        { database: 1, year: "", artist: "The weeknd", album: "starboy", folder: "theweekend/starboy", image: "albumcover.webp"},
        { database: 1, year: "", artist: "The weeknd", album: "Afterhours", folder: "theweekend/afterhours", image: "albumcover.webp"},
        { database: 1, year: "", artist: "The weeknd", album: "Dawnfm", folder: "theweekend/dawnfm", image: "albumcover.png"},
        { database: 1, year: "", artist: "Laufey", album: "Bewitched", folder: "laufey/bewitched", image: "albumcover.png"},
        { database: 2, year: "", artist: "Laufey", album: "Everything I Know About Love", folder: "laufey/eikal", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Roddy Ricch", album: "Live Life Fast", folder: "rr/llf", image: "albumcover.png"},
        { database: 1, year: "", artist: "Roddy Ricch", album: "Please Excuse Me for Being Antisocial", folder: "rr/pemfba", image: "albumcover.png"},
        { database: 1, year: "", artist: "Lemon Demon", album: "Spirit phone", folder: "ld/sp", image: "albumcover.png"},
        { database: 1, year: "", artist: "Lemon Demon", album: "Clown", folder: "ld/cc", image: "albumcover.jpg"},
        { database: 2, year: "", artist: "Kanye West", album: "The College Dropout", folder: "kanyewest/tcd", image: "albumcover.jpg"},
        { database: 2, year: "", artist: "Kanye West", album: "Late Registration", folder: "kanyewest/lr", image: "albumcover.webp"},
        { database: 2, year: "", artist: "Kanye West", album: "Graduation", folder: "kanyewest/grad", image: "albumcover.webp"},
        { database: 2, year: "", artist: "Kanye West", album: "808s & Heartbreak", folder: "kanyewest/808s", image: "albumcover.png"},
        { database: 1, year: "", artist: "Kanye West", album: "My Beautiful Dark Twisted Fantasy", folder: "kanyewest/mbdtf", image: "albumcover.jpg"},
        { database: 2, year: "", artist: "Kanye West", album: "Watch the Throne", folder: "kanyewest/wtt", image: "albumcover.webp"},
        { database: 2, year: "", artist: "Kanye West", album: "Cruel Summer", folder: "kanyewest/cs", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Kanye West", album: "Yeezus", folder: "kanyewest/yeezus", image: "Cover.jpg"},
        { database: 3, year: "", artist: "Kanye West", album: "The Life of Pablo", folder: "kanyewest/tlop", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Kanye West", album: "Ye", folder: "kanyewest/ye", image: "Cover.jpg" },
        { database: 2, year: "", artist: "Kanye West", album: "Kids See Ghosts", folder: "kanyewest/ksg", image: "albumcover.png"},
        { database: 1, year: "", artist: "Kanye West", album: "Jesus Is King", folder: "kanyewest/jesusisking", image: "Cover.jpg" },
        { database: 1, year: "", artist: "Kanye West", album: "Donda", folder: "kanyewest/donda", image: "cover.webp" },
        { database: 1, year: "", artist: "Kanye West", album: "Donda 2", folder: "kanyewest/donda2", image: "albumcover.webp" },
        { database: 2, year: "", artist: "Kanye West", album: "Vultures 1", folder: "kanyewest/vult1", image: "albumcover.webp"},
        { database: 2, year: "", artist: "Kanye West", album: "Vultures 2", folder: "kanyewest/vult2", image: "albumcover.webp"},
        { database: 2, year: "", artist: "Kanye West", album: "Vultures 3", folder: "kanyewest/vult3", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Drake", album: "Thank Me Later", folder: "drake/tml", image: "albumcover.webp"},
        { database: 1, year: "", artist: "Drake", album: "Take Care", folder: "drake/tc", image: "albumcover.webp" },
        { database: 1, year: "", artist: "Drake", album: "Nothing Was the Same", folder: "drake/nwts", image: "albumcover.webp "},
        { database: 1, year: "", artist: "Drake", album: "Views", folder: "drake/views", image: "albumcover.webp "},
        { database: 1, year: "", artist: "Drake", album: "Scorpion", folder: "drake/scorp", image: "albumcover.webp "},
        { database: 1, year: "", artist: "Drake", album: "Certified Lover Boy", folder: "drake/clb", image: "albumcover.webp "},
        { database: 1, year: "", artist: "Drake", album: "Honestly, Nevermind", folder: "drake/honnvm", image: "albumcover.webp "},
        { database: 1, year: "", artist: "Drake", album: "Her Loss", folder: "drake/herloss", image: "albumcover.webp "},
        { database: 1, year: "", artist: "Drake", album: "For All the Dogs", folder: "drake/fatd", image: "albumcover.webp "},
        { database: 1, year: "", artist: "Frank Ocean", album: "Channel Orange", folder: "franko/co", image: "albumcover.webp" },
        { database: 1, year: "", artist: "Frank Ocean", album: "Blonde", folder: "franko/blonde", image: "albumcover.webp" },
        { database: 2, year: "", artist: "Billie Eilish", album: "When We All Fall Asleep, Where Do We Go?", folder: "be/wwafawdwg", image: "albumcover.png" },
        { database: 1, year: "", artist: "Billie Eilish", album: "Happier Than Ever", folder: "be/hte", image: "albumcover.jpg" },
        { database: 2, year: "2024", artist: "Billie Eilish", album: "Hit Me Hard and Soft", folder: "be/hmhas", image: "albumcover.png" },
        { database: 1, year: "", artist: "SZA", album: "SOS", folder: "sza/sos", image: "albumcover.jpg" },
        { database: 1, year: "", artist: "Kendrick Lamar", album: "Mr. Morale & the Big Steppers", folder: "kenla/mmtbs", image: "albumcover.jpg" },
        { database: 1, year: "", artist: "Kendrick Lamar", album: "To Pimp a Butterfly", folder: "kenla/tpabf", image: "albumcover.jpg" },
        { database: 2, year: "", artist: "Billie Holiday", album: "God Bless The Child", folder: "billieh/gbtc", image: "albumcover.jpg"}
    //  { database: , artist: "", album: "", folder: "/", image: "webp" },
        // Add more albums here
    ];
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
            ""
        ], 
        "arcticmonkeys/sias": [
            ""
        ],
        "arcticmonkeys/tbhc": [
            ""
        ],
        "arcticmonkeys/car": [
            ""
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
            ""
        ],
        "melanie/k12": [
            ""
        ],
        "melanie/portals": [
            ""
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
            "01. Fragile.mp3",
            "02. Beautiful Stranger.mp3",
            "03. Valentine.mp3",
            "04. Above The Chinese Restaurant.mp3",
            "05. Dear Soulmate.mp3",
            "06. What Love Will Do to You.mp3",
            "07. I've Never Been In Love Before.mp3",
            "08. Just Like Chet.mp3",
            "09. Everything I Know About Love.mp3",
            "10. Falling Behind.mp3",
            "11. Hi.mp3",
            "12. Dance With You Tonight.mp3",
            "13. Night Light.mp3",
        ],
        "rr/llf": [
            ""
        ],
        "rr/pemfba": [
            ""
        ],
        "ld/sp": [
            ""
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
            "1. Intro.mp3",
            "2. We Don't Care.mp3",
            "3. Graduation Day.mp3",
            "4. All Falls Down.mp3",
            "5. I'll Fly Away.mp3",
            "6. Spaceship.mp3",
            "7. Jesus Walks.mp3",
            "8. Never Let Me Down.mp3",
            "9. Get Them High.mp3",
            "10. Workout Plan.mp3",
            "11. The New Workout Plan.mp3",
            "12. Slow Jams.mp3",
            "13. Breath In Breath Out.mp3",
            "14. School Spirit (skit 1).mp3",
            "15. School Spirit.mp3",
            "16. School Spirit (skit 2).mp3",
            "17. Lil Jimmy (skit).mp3",
            "18. Two Words.mp3",
            "19. Through The Wire.mp3",
            "20. Family Business.mp3",
            "21. Last Call.mp3",
        
        ],
        "kanyewest/lr": [
            "1. Wake Up Mr. West.mp3",
            "2. Heard 'Em Say.mp3",
            "3. Touch The Sky.mp3",
            "4. Gold Digger.mp3",
            "5. Skit #1.mp3",
            "6. Drive Slow.mp3",
            "7. My Way Home.mp3",
            "8. Crack Music.mp3",
            "9. Roses.mp3",
            "10. Bring Me Down.mp3",
            "11. Addiction.mp3",
            "12. Skit #2.mp3",
            "13. Diamonds From Sierra Leone (Remix).mp3",
            "14. We Major.mp3",
            "15. Skit #3.mp3",
            "16. Hey Mama.mp3",
            "17. Celebration.mp3",
            "18. Skit #4 .mp3",
            "19. Gone.mp3",
            "20. Diamonds From Sierra Leone (Bonus Track).mp3",
            "21. Late.mp3",
        ],
        "kanyewest/grad": [
            "1. Good Morning.mp3",
            "2. Champion.mp3",
            "3. Stronger.mp3",
            "4. I Wonder.mp3",
            "5. Good Life.mp3",
            "6. Can't Tell Me Nothing.mp3",
            "7. Barry Bonds.mp3",
            "8. Drunk and Hot Girls.mp3",
            "9. Flashing Lights.mp3",
            "10. Everything I Am.mp3",
            "11. The Glory.mp3",
            "12. Homecoming.mp3",
            "13. Big Brother.mp3",
            "14. Good Night.mp3",
        ],
        "kanyewest/808s": [
            "1. Say You Will.mp3",
            "2. Welcome to Heartbreak (feat. Kid Cudi).mp3",
            "3. Heartless.mp3",
            "4. Amazing (ft. Young Jeezy ).mp3",
            "5. Love Lockdown.mp3",
            "6. Paranoid (feat. Mr Hudson).mp3",
            "7. RoboCop.mp3",
            "8. Street Lights.mp3",
            "9. Bad News.mp3",   
            "10. See you in my nightmares.mp3",
            "11. Coldest Winter.mp3",
            "12. Pinocchio Story.mp3"
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
            "1. To The World.mp3",
            "2. Clique.mp3",
            "3. Mercy.1.mp3",
            "4. New God Flow.1.mp3",
            "5. The Morning.mp3",
            "6. Cold.1.mp3",
            "7. Higher.mp3",
            "8. Sin City.mp3",
            "9. The One.mp3",
            "10. Creepers.mp3",
            "11. Bliss.mp3",
            "12. Don't Like.1.mp3",
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
            "1. Ultralight Beam - Kanye West.mp3",
            "2. Father Stretch My Hands Pt. 1 - Kanye West.mp3",
            "3. Pt. 2 - Kanye West.mp3",
            "4. Famous - Kanye West.mp3",
            "5. Feedback - Kanye West.mp3",
            "6. Low Lights - Kanye West.mp3",
            "7. Highlights - Kanye West.mp3",
            "8. Freestyle 4 - Kanye West.mp3",
            "9. I Love Kanye - Kanye West.mp3",
            "10. Waves - Kanye West.mp3",
            "11. FML - Kanye West.mp3",
            "12. Real Friends - Kanye West.mp3",
            "13. Wolves - Kanye West.mp3",
            "14. Frank's Track - Kanye West.mp3",
            "15. Siiiiiiiiilver Surffffeeeeer Intermission - Kanye West.mp3",
            "16. 30 Hours - Kanye West.mp3",
            "17. No More Parties In LA - Kanye West.mp3",
            "18. Facts (Charlie Heat Version) - Kanye West.mp3",
            "19. Fade - Kanye West.mp3",
            "20. Saint Pablo - Kanye West.mp3",
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
            "1. Feel The Love.mp3",
            "2. Fire.mp3",
            "3. 4th Dimension.mp3",
            "4.Freeee.mp3",
            "5. Reborn.mp3",
            "6. Kids See Ghosts.mp3",
            "7. Cudi Montage.mp3"        
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
            "01 STARS.mp3",
            "02 KEYS TO MY LIFE.mp3",
            "03 PAID.mp3",
            "04 TALKING.mp3",
            "05 BACK TO ME.mp3",
            "06 HOODRAT.mp3",
            "07 DO IT.mp3",
            "08 PAPERWORK.mp3",
            "09 BURN.mp3",
            "10 FUK SUMN.mp3",
            "11 VULTURES.mp3",
            "12 CARNIVAL.mp3",
            "13 BEG FORGIVENESS.mp3",
            "14 GOOD DON'T DIE.mp3",
            "15 PROBLEMATIC.mp3",
            "16 KING.mp3",
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
            ""
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
            ""
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
            ""
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
        "be/wwafawdwg": [
            "!!!!!!!.mp3",
            "bad guy.mp3",
            "xanny.mp3",
            "you should see me in a crown.mp3",
            "all the good girls go to hell.mp3",
            "wish You Were Gay.mp3",
            "when the party's over.mp3",
            "8.mp3",
            "my strange addiction.mp3",
            "bury a friend.mp3",
            "ilomilo.mp3",
            "listen before i go.mp3",
            "i love you.mp3",
            "goodbye.mp3"	
        ],
        "be/hte": [
            "01. Getting Older.mp3",
            "02. I Didn't Change My Number(Explicit).mp3",
            "03. Billie Bossa Nova.mp3",
            "04. my future.mp3",
            "05. Oxytocin.mp3",
            "06. GOLDWING.mp3",
            "07. Lost Cause(Explicit).mp3",
            "08. Halley's Comet.mp3",
            "09. Not My Responsibility.mp3",
            "10. OverHeated(Explicit).mp3",
            "11. Everybody Dies.mp3",
            "12. Your Power.mp3",
            "13. NDA(Explicit).mp3",
            "14. Therefore I Am.mp3",
            "15. Happier Than Ever(Explicit).mp3",
            "16. Male Fantasy.mp3",
        ],
        "be/hmhas": [
            ""
        ],
        "sza/sos": [
            ""
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
        "billieh/gbtc": [
            "1. God Bless The Child.mp3",
            "2. Lover Man.mp3",
            "3. That Ole Devil Called Love.mp3",
            "4. Them There Eyes.mp3",
            "5. You're My Thrill.mp3",
            "6. Don't Explain.mp3",
            "7. Crazy He Calls Me.mp3",
            "8. Ain't Nobody's Business If I Do.mp3",
            "9. Keeps On A Rainin.mp3",
            "10. The Blues Are Brewin'.mp3",
        ],
    };
    var audio = document.getElementById("myAudio");
    var playButton = document.getElementById("playbuttonthung");
    var volumeControl = document.getElementById("volume");
    var progressBar = document.getElementById("progress");
    var currentTrackIndex = 0;
    var currentAlbum = "tylerthecreator/wolf"
    var currentAlbumIndex = 0;
    var audiotimern;
    let selectedDatabase;
    let DatabaseDomain;
    let selectedDatabaseimage;
    let DatabaseimageDomain;

    if (localStorage.getItem("Albumindex") !== null) {currentAlbumIndex = localStorage.getItem("Albumindex");}
    if (localStorage.getItem("Trackindex") !== null) {currentTrackIndex = localStorage.getItem("Trackindex");}
    if (localStorage.getItem("CurrentAlbum") !== null) {currentAlbum = localStorage.getItem("CurrentAlbum");}
    if (localStorage.getItem("timerforaudio") !== null) {audiotimern = localStorage.getItem("timerforaudio");}

    var currentTrackElements = document.querySelectorAll(".currentTrack");
    var currentTrack2Elements = document.querySelectorAll(".currentTrack2");
    
    const databases = [
        { id: 0, url: "https://playmusicstorage.web.app/" },
        { id: 1, url: "https://playmusicstorage.web.app/" },
        { id: 2, url: "https://playstorage2.web.app/" },
        { id: 3, url: "https://playstorage2.web.app/"}
    ];
    const databasesimages = [
        { id: 0, url: "https://playmusicstorage.web.app/" },
        { id: 1, url: "https://playmusicstorage.web.app/" },
        { id: 2, url: "https://playstorage2.web.app/" },
        { id: 3, url: "https://playstorage2.web.app/"}
    ];
    function fetchDatabase() {
        selectedDatabase = null;
        DatabaseDomain = null;
        selectedDatabase = databases.find(db => db.id === albums[currentAlbumIndex].database);
         DatabaseDomain = selectedDatabase.url;
    // You can add additional database fetching logic here if needed
    }
    function fetchDatabaseImages(item) {
        selectedDatabaseimage = null;
        DatabaseimageDomain = null;
        selectedDatabaseimage = databasesimages.find(db => db.id === albums[item].database);
        DatabaseimageDomain = selectedDatabaseimage.url;
    }
    fetchDatabase();

    function loadTrack() {      
        fetchDatabase();  
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
    function w() {
        for (let album in audioTracks) {
            for (let i = 0; i < audioTracks[album].length; i++) {
                let trackPath = audioTracks[album][i];
                let url = "https://8080-sillyangel-playcdn-1hnaf6evqy6.ws-us108.gitpod.io/songs/" + album + "/" + trackPath;
                let request = new XMLHttpRequest();
                request.open('HEAD', url, false);
                request.send();
            }
        }
    }
    function playPause() {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    }
    
    function setVolume() {
        localStorage.setItem("Volume", volumeControl.value);
        audio.volume = localStorage.getItem("Volume")
    }
    
    function skipTrack() {
        currentTrackIndex++;
        if (currentTrackIndex >= audioTracks[currentAlbum].length) {
            currentTrackIndex = 0; // Loop back to the first track
        }
        loadTrack();
        audio.play();
    }
    
    function previousTrack() {
        currentTrackIndex--;
        if (currentTrackIndex < 0) {
            currentTrackIndex = audioTracks[currentAlbum].length - 1; // Go to the last track
        }
        loadTrack();
        audio.play();
    }
    
    function seek(event) {
        const progressBar = document.getElementById('progress');
        const percent = event.offsetX / progressBar.offsetWidth;
        const seekTime = percent * audio.duration;
        if (isFinite(seekTime)) {
            audio.currentTime = seekTime;
        } else {
            console.error("Invalid seek time");
        }
    }
    
    // Modify the updateAlbumCover function

    function getContrastColor(rgbColor) {
        const [red, green, blue] = rgbColor.match(/\d+/g);
        const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
        return brightness >= 195 ? "#222222" : "white";
    }

    function updateAlbumCover() {
        const selectedAlbum = DatabaseDomain + "songs/" + currentAlbum + "/" +albums[currentAlbumIndex].image;
        const image = new Image();
        image.crossOrigin = "Anonymous";
        image.src = selectedAlbum,
        document.querySelectorAll('[id="albumCover"]').forEach(element => element.src = selectedAlbum);
    
        image.onload = function() {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0, image.width, image.height);
    
            const [red, green, blue] = context.getImageData(0, 0, canvas.width, canvas.height).data;
            const audioControls = document.querySelector('[id="playerfull"]');
            const audioControlsMini = document.querySelector(".audio-controls");
            const rgbColor = `rgb(${red},${green},${blue})`;
            // border color and background color is darker than the background color
            const backgroundColor = `rgb(${red - 35},${green - 35},${blue - 35})`
            const borderColor = `rgb(${red + 2},${green + 2},${blue + 2})`;
            const textContrastColor = getContrastColor(rgbColor);
    
                audioControls.style.backgroundColor = rgbColor;
                audioControls.style.color = textContrastColor;
    
    
                // color all i which are all fontawesome icons to the contrast color
                document.querySelectorAll('i').forEach(element => element.style.color = textContrastColor);
                document.body.style.backgroundColor = backgroundColor;
                document.body.style.color = textContrastColor;
            
                audioControlsMini.style.backgroundColor = rgbColor;
                audioControlsMini.style.color = textContrastColor;
                audioControlsMini.style.borderColor = borderColor;
        };
    }
    
    // Call the updateAlbumCover function when changing albums
    function nextAlbum() {
        currentAlbumIndex++;
        if (currentAlbumIndex >= albums.length) {
            currentAlbumIndex = 0; // Loop back to the first album
        }
        currentAlbum = albums[currentAlbumIndex].folder;
        currentTrackIndex = 0;
        // Check if audioTracks[currentAlbum] exists before loading
        if (audioTracks[currentAlbum]) {
            loadTrack();
            audio.play();
            // Update the album cover image
            updateAlbumCover();
        } else {
            // Handle the case when the album is not found
            console.error("Album not found: " + currentAlbum);
        }
    }
    
    function previousAlbum() {
        currentAlbumIndex--;
        if (currentAlbumIndex < 0) {
            currentAlbumIndex = albums.length - 1; // Go to the last album
        }
        currentAlbum = albums[currentAlbumIndex].folder;
        currentTrackIndex = 0;
        loadTrack();
        audio.play();
        // Update the album cover image
        updateAlbumCover();
    }
    audio.addEventListener("timeupdate", function() {
        var currentTime = audio.currentTime;
        var duration = audio.duration;
        // Check if duration is a finite number before calculating percentComplete
        if (isFinite(duration)) {
            var percentComplete = (currentTime / duration) * 100;
            progressBar.value = percentComplete;
        }
        localStorage.setItem("timerforaudio", audio.currentTime);
    });
    audio.currentTime = localStorage.getItem("timerforaudio");
    
    // Load the first track when the page loads
    loadTrack();
    // Event listener for when the current track ends
    audio.addEventListener("ended", function() {
        // Play the next track automatically
        skipTrack();
    });
    
    
    
    function updateTrackText() {
        var artist = albums[currentAlbumIndex].artist;
        var track = audioTracks[currentAlbum][currentTrackIndex];
    
        // Remove the .mp3 extension from the track name
        track = track.replace(".mp3", "");
    
        // Remove the numbering at the beginning of the track name, handling extra dash or period
        track = track.replace(/^\d+\s*[-.]*\s*/, "");
    
        // Loop through each element with class "currentTrack" and update its content
        currentTrackElements.forEach(function(element) {
            element.textContent = artist + " - " + track;
        });
    
        // Loop through each element with class "currentTrack2" and update its content
        currentTrack2Elements.forEach(function(element) {
            element.textContent = artist + " - " + track;
        });
    }
    
    
    // Call the function to update both elements
    updateTrackText();
    // Add these lines to update the song duration and current time
    var songTimeElement = document.getElementById("songTime");
    var songDurationElement = document.getElementById("songDuration");
    audio.addEventListener("timeupdate", function() {
        var currentTime = audio.currentTime;
        var duration = audio.duration;
        // Check if duration is a finite number before calculating percentComplete
        if (isFinite(duration)) {
            var percentComplete = (currentTime / duration) * 100;
            progressBar.value = percentComplete;
            // Update the song duration and current time
            var currentMinutes = Math.floor(currentTime / 60);
            var currentSeconds = Math.floor(currentTime % 60);
            var durationMinutes = Math.floor(duration / 60);
            var durationSeconds = Math.floor(duration % 60);
            // Display current time and duration in the format "M:SS"
            songTimeElement.textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;
            songDurationElement.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
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
    fetch('./json/songs.json')
        .then((response) => response.json())
        .then((data) => {
            const songSelector = document.getElementById('farts');
            songSelector.innerHTML = ''; // Clear existing content
    
            let currentArtist = ''; // Initialize the current artist
            data.albums.forEach((album, albumIndex) => {
                if (album.artist !== currentArtist) {
                    // Create a new <h1> for a different artist
                    const artistHeader = document.createElement('h1');
                    artistHeader.textContent = album.artist;
                    songSelector.appendChild(artistHeader);
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
            alert('Error loading JSON data:', error);
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
                        type: "image/png",
                    },
                    {
                        src: albums[currentAlbumIndex].image,
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: albums[currentAlbumIndex].image,
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: albums[currentAlbumIndex].image,
                        sizes: "256x256",
                        type: "image/png",
                    },
                    {
                        src: albums[currentAlbumIndex].image,
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: albums[currentAlbumIndex].image,
                        sizes: "512x512",
                        type: "image/png",
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
    
            if (albumName.includes(input) || artistName.includes(input)) {
                const listitem = document.createElement('li')
                const albumButton = document.createElement('button');
                albumButton.onclick = () => albumsec(i);
                albumButton.id = "buttonys"
                albumButton.textContent = `${obj.album} - ${obj.artist}`;
                listitem.appendChild(albumButton)
                listHolder.appendChild(listitem);
                listHolder.appendChild(document.createElement('br'));
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
    function consoled(text) {
          console.log(text);
    }
    navigator.serviceWorker.register("sw.js");
    
    
    } catch(error) {
        alert(error);
        alert(error.message);
        console.log(error);
        console.log(error.message);
    }