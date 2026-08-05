const SCENARIOS = [
  {
    topic: "Gezondheid & sport",
    situation: { nl: "Je zit met een vriend te praten. Hij vertelt dat hij graag wil sporten, maar dat de sportschool hem te duur is. Hij vraagt jou om advies.", en: "You're sitting talking with a friend. He tells you he'd like to exercise, but that the gym is too expensive for him. He asks you for advice." },
    other: "Vriend",
    turns: [
      { speaker: "other", nl: "Mijn vrienden gaan naar de sportschool, maar ik vind dat te duur. Ik wil op een andere manier fit worden, zonder geld uit te geven. Wat zou jij aanbevelen?", en: "My friends go to the gym, but I think that's too expensive. I want to get fit in another way, without spending money. What would you recommend?" },
      {
        speaker: "you",
        options: [
          { nl: "Het is niet nodig om naar de sportschool te gaan. Je kunt ook gratis dingen doen, zoals fietsen, hardlopen, of zwemmen in de gracht. Of je kunt iets online vinden om thuis te oefenen.", en: "It's not necessary to go to the gym. You can also do free things, like cycling, running, or swimming in the canal. Or you can find something online to practice at home." }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "sportschool", en: "gym" },
      { nl: "aanbevelen", en: "to recommend" },
      { nl: "buitenzwembad", en: "outdoor pool" },
      { nl: "beweging", en: "exercise/movement" },
      { nl: "motiverend", en: "motivating" },
      { nl: "in plaats van", en: "instead of" },
      { nl: "trap", en: "stairs" }
    ]
  },
  {
    topic: "Bij de huisarts",
    situation: { nl: "Je hebt morgen een afspraak bij de huisarts, maar je kunt niet komen. Je belt de praktijk om de afspraak te verzetten.", en: "You have an appointment at the doctor's tomorrow, but you can't come. You call the practice to reschedule the appointment." },
    other: "Assistente",
    turns: [
      { speaker: "other", nl: "Goedemorgen, met de huisartsenpraktijk. Ik zie dat u morgen om tien uur een afspraak heeft voor een controle. Waar kan ik u mee helpen?", en: "Good morning, doctor's office speaking. I see you have an appointment tomorrow at ten o'clock for a check-up. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Hoi, ik heb morgen een afspraak, maar helaas kan ik niet komen, want ik heb een andere afspraak. Morgen ben ik vrij, dus kunt u een nieuwe afspraak voor mij maken?", en: "Hi, I have an appointment tomorrow, but unfortunately I can't come, because I have another appointment. Tomorrow I'm free, so could you make a new appointment for me?" }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "verzetten", en: "to reschedule" },
      { nl: "controle", en: "check-up" },
      { nl: "dringende", en: "urgent" },
      { nl: "uitkomt", en: "suits/works for" },
      { nl: "toevallig", en: "by any chance" },
      { nl: "huisartsenpraktijk", en: "doctor's practice" },
      { nl: "helaas", en: "unfortunately" }
    ]
  },
  {
    topic: "Op het werk",
    situation: { nl: "Je zus gaat trouwen op een dag dat jij moet werken. Je gaat naar je manager om te vragen of je die dag vrij mag nemen.", en: "Your sister is getting married on a day when you have to work. You go to your manager to ask if you can take that day off." },
    other: "Manager",
    turns: [
      { speaker: "other", nl: "Hoi, je wilde me even spreken? Ik heb tien minuten, dus vertel maar rustig waar het over gaat.", en: "Hi, you wanted to talk to me? I have ten minutes, so just tell me calmly what it's about." },
      {
        speaker: "you",
        options: [
          { nl: "Ik weet dat je niet veel tijd hebt, maar ik moet je iets vragen. Volgende week heb ik iets belangrijks met mijn familie, maar ik moet dan werken. Kun je me helpen? Misschien kan een collega dan voor mij werken.", en: "I know you don't have much time, but I need to ask you something. Next week I have something important with my family, but I have to work then. Can you help me? Maybe a colleague could work for me then." }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "trouwen", en: "to get married" },
      { nl: "vrij mag nemen", en: "to be allowed time off" },
      { nl: "kort van tevoren", en: "short notice" },
      { nl: "familiegebeurtenis", en: "family event" },
      { nl: "oppakken", en: "to take on" },
      { nl: "vertel maar rustig", en: "tell me calmly" }
    ]
  },
  {
    topic: "Met de buren",
    situation: { nl: "Je buurman zet 's avonds laat vaak harde muziek aan. Jij kunt daardoor niet goed slapen. Je spreekt hem hierover aan.", en: "Your neighbor often plays loud music late in the evening. Because of this you can't sleep well. You talk to him about it." },
    other: "Buurman",
    turns: [
      { speaker: "other", nl: "Hoi! Wat leuk je te zien. Alles goed bij jou?", en: "Hi! Nice to see you. Everything good with you?" },
      {
        speaker: "you",
        options: [
          { nl: "Hoi buurman. Ja, prima eigenlijk. Ik wil je iets vragen: waarom speel je 's avonds vaak zo harde muziek? Misschien vind jij het leuk, maar ik niet zo leuk. Kun je de volgende keer de muziek een beetje zachter zetten?", en: "Hi neighbor. Yes, actually fine. I want to ask you something: why do you often play such loud music in the evening? Maybe you like it, but I don't like it so much. Could you turn the music down a bit next time?" }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "storend", en: "disturbing" },
      { nl: "schelen", en: "to matter/help" },
      { nl: "zachter", en: "softer/quieter" },
      { nl: "volume", en: "volume" },
      { nl: "muur", en: "wall" },
      { nl: "de laatste tijd", en: "lately" }
    ]
  },
  {
    topic: "Onderweg",
    situation: { nl: "Je bent in een stad die je niet goed kent. Je moet naar het station, maar je weet de weg niet. Je vraagt het aan een voorbijganger.", en: "You are in a city you don't know well. You need to get to the station, but you don't know the way. You ask a passerby." },
    other: "Voorbijganger",
    turns: [
      { speaker: "other", nl: "Hallo! U ziet er een beetje verdwaald uit. Kan ik u misschien ergens mee helpen?", en: "Hello! You look a bit lost. Can I maybe help you with something?" },
      {
        speaker: "you",
        options: [
          { nl: "Ja, graag. Ik zoek het treinstation, maar ik kan het niet vinden. Ik heb nog maar tien minuten voordat de trein gaat. Welke weg is het snelst?", en: "Yes, please. I'm looking for the train station, but I can't find it. I only have ten minutes left before the train leaves. Which way is the fastest?" }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "verdwaald", en: "lost" },
      { nl: "bekend", en: "familiar" },
      { nl: "de weg kunnen wijzen", en: "to be able to show the way" },
      { nl: "kwijt", en: "lost/missing" },
      { nl: "ver lopen", en: "far to walk" },
      { nl: "welke kant", en: "which direction" }
    ]
  },
  {
    topic: "Sociale afspraken",
    situation: { nl: "Je hebt met een vriendin afgesproken om vanavond samen te eten. Je voelt je niet lekker en wilt liever thuisblijven. Je belt haar op.", en: "You've arranged to have dinner with a friend tonight. You don't feel well and would rather stay home. You call her." },
    other: "Vriendin",
    turns: [
      { speaker: "other", nl: "Hé! Ik heb er al zo'n zin in vanavond. Zal ik om zeven uur bij jou langskomen, of spreken we ergens anders af?", en: "Hey! I'm already really looking forward to tonight. Shall I come by your place at seven, or shall we meet somewhere else?" },
      {
        speaker: "you",
        options: [
          { nl: "Hoi, sorry, maar ik kan vanavond niet. Ik voel me al de hele dag ziek en ik wil vanavond liever rusten. Hopelijk voel ik me over een paar dagen beter. Misschien kunnen we elkaar een andere avond zien.", en: "Hi, sorry, but I can't tonight. I've felt sick all day and I'd rather rest tonight. Hopefully I'll feel better in a few days. Maybe we can see each other another evening." }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "verstandiger", en: "wiser" },
      { nl: "etentje", en: "dinner" },
      { nl: "uitrusten", en: "to rest" },
      { nl: "afzeggen", en: "to cancel" },
      { nl: "fit", en: "well/fit" },
      { nl: "erg vinden", en: "to mind" }
    ]
  },
  {
    topic: "Advies geven",
    situation: { nl: "Een vriend wil een tweedehands fiets kopen. Hij heeft dat nog nooit eerder gedaan en weet niet waar hij op moet letten. Hij vraagt jou om hulp.", en: "A friend wants to buy a second-hand bike. He's never done that before and doesn't know what to look out for. He asks you for help." },
    other: "Vriend",
    turns: [
      { speaker: "other", nl: "Ik heb eindelijk genoeg geld gespaard voor een fiets, maar nieuwe fietsen zijn zo duur. Ik denk erover om een tweedehands fiets te kopen, maar ik heb dat nog nooit gedaan. Waar moet ik allemaal op letten, denk je?", en: "I've finally saved up enough money for a bike, but new bikes are so expensive. I'm thinking about buying a second-hand bike, but I've never done that before. What should I look out for, do you think?" },
      {
        speaker: "you",
        options: [
          { nl: "Koop iets dat niet te goedkoop en niet te duur is. Volgens mij is tweehonderd euro genoeg. Kijk goed naar de remmen, dat is belangrijk. Probeer de fiets uit voordat je hem koopt. En check ook op roest, soms is dat oké, maar niet te veel.", en: "Buy something that's not too cheap and not too expensive. I think two hundred euros is enough. Look carefully at the brakes, that's important. Try the bike out before you buy it. And also check for rust, sometimes that's okay, but not too much." }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "tweedehands", en: "second-hand" },
      { nl: "remmen", en: "brakes" },
      { nl: "roest", en: "rust" },
      { nl: "ketting", en: "chain" },
      { nl: "versnellingen", en: "gears" },
      { nl: "zadel", en: "saddle" },
      { nl: "onderhandel", en: "negotiate" }
    ]
  },
  {
    topic: "Op het werk",
    situation: { nl: "Je bent op je werk, tijdens de pauze. Een collega begint een gesprek over het weekend.", en: "You're at work, during the break. A colleague starts a conversation about the weekend." },
    other: "Collega",
    turns: [
      { speaker: "other", nl: "Het is bijna vrijdag en ik heb dit weekend eigenlijk nog helemaal niks gepland. Ik wil wel iets leuks doen, maar ik kan zo snel niks bedenken. Wat doe jij meestal in het weekend, en heb je nog tips voor mij?", en: "It's almost Friday and I actually have nothing planned yet for this weekend. I do want to do something fun, but I can't think of anything right away. What do you usually do on the weekend, and do you have any tips for me?" },
      {
        speaker: "you",
        options: [
          { nl: "Meestal doe ik niet zoveel. Lezen, slapen, eten — het is toch weekend, haha! In de zomer ga ik soms naar het meer om te zwemmen, of ik ga de stad in voor een koffie. Ik kan ook naar de sportschool gaan, maar vaak is het druk.", en: "Usually I don't do that much. Reading, sleeping, eating — it's the weekend after all, haha! In summer I sometimes go to the lake to swim, or I go into the city for a coffee. I can also go to the gym, but it's often busy." }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "terrasje", en: "outdoor cafe seat" },
      { nl: "filmavond", en: "movie night" },
      { nl: "gezellig", en: "nice/cozy" },
      { nl: "fietstochtjes", en: "bike rides" },
      { nl: "dagje", en: "day trip" },
      { nl: "markt", en: "market" }
    ]
  },
  {
    topic: "Winkelen",
    situation: { nl: "Je hebt twee weken geleden een broodrooster gekocht, maar hij werkt niet meer. Je gaat terug naar de winkel om dit op te lossen.", en: "You bought a toaster two weeks ago, but it doesn't work anymore. You go back to the store to sort this out." },
    other: "Verkoper",
    turns: [
      { speaker: "other", nl: "Goedemiddag, welkom terug bij ons. Waarmee kan ik u vandaag helpen?", en: "Good afternoon, welcome back to our store. How can I help you today?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik heb hier twee weken geleden een broodrooster gekocht, maar hij werkt niet meer. Volgens mij is hij kapot. Ik heb alles geprobeerd, maar hij doet niks. Kan ik hem misschien terugbrengen en een andere broodrooster proberen?", en: "Good afternoon. I bought a toaster here two weeks ago, but it doesn't work anymore. I think it's broken. I've tried everything, but it doesn't do anything. Could I maybe bring it back and try a different toaster?" }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "broodrooster", en: "toaster" },
      { nl: "omruilen", en: "to exchange" },
      { nl: "defect", en: "broken/faulty" },
      { nl: "aan te sluiten", en: "to plug in" },
      { nl: "apparaat", en: "appliance" },
      { nl: "geld terug", en: "money back" }
    ]
  },
  {
    topic: "Openbaar vervoer",
    situation: { nl: "Je moet naar een vergadering op je werk, maar je trein heeft vertraging. Je belt een collega om dit door te geven.", en: "You need to get to a meeting at work, but your train is delayed. You call a colleague to let them know." },
    other: "Collega",
    turns: [
      { speaker: "other", nl: "Hoi, waar blijf je nou? Iedereen is er al en de vergadering begint over vijf minuten.", en: "Hi, where are you? Everyone's already here and the meeting starts in five minutes." },
      {
        speaker: "you",
        options: [
          { nl: "Ik kom, maar er was een probleem met de trein. Ik ben er over ongeveer twintig minuten. Kunnen jullie op mij wachten?", en: "I'm coming, but there was a problem with the train. I'll be there in about twenty minutes. Can you wait for me?" }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "vertraging", en: "delay" },
      { nl: "opeens", en: "suddenly" },
      { nl: "treinstoring", en: "train disruption" },
      { nl: "aantekeningen", en: "notes" },
      { nl: "sluit later aan", en: "I'll join later" },
      { nl: "melding", en: "notice" }
    ]
  },
  {
    topic: "Nederlands leren",
    situation: { nl: "Je leert Nederlands, maar grammatica vind je nog moeilijk. Je praat erover met een medestudent.", en: "You're learning Dutch, but you still find grammar difficult. You talk about it with a fellow student." },
    other: "Medestudent",
    turns: [
      { speaker: "other", nl: "Hé, hoe gaat het eigenlijk met je Nederlands? Ik zie je de laatste tijd steeds harder studeren.", en: "Hey, how's your Dutch actually going? I've noticed you studying harder and harder lately." },
      {
        speaker: "you",
        options: [
          { nl: "Het gaat goed, maar soms is het moeilijk/lastig. Ik snap sommige woorden wel, andere niet. Ik moet meer oefenen om te verbeteren. Daarom spreek ik nu meer Nederlands op mijn werk.", en: "It's going well, but sometimes it's difficult. I understand some words, others not. I need to practice more to improve. That's why I now speak more Dutch at work." }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "werkwoordsvormen", en: "verb forms" },
      { nl: "lastig", en: "difficult" },
      { nl: "oefensite", en: "practice website" },
      { nl: "snap", en: "understand" },
      { nl: "handige manier", en: "handy way" },
      { nl: "harder studeren", en: "study harder" }
    ]
  },
  {
    topic: "Sociale afspraken",
    situation: { nl: "Je geeft binnenkort een klein feestje voor je verjaardag. Je wilt een goede vriend uitnodigen.", en: "You're having a small party for your birthday soon. You want to invite a good friend." },
    other: "Vriend",
    turns: [
      { speaker: "other", nl: "Hoi! Ik hoorde dat je binnenkort jarig bent. Ga je dit jaar iets leuks doen, of houd je het rustig?", en: "Hi! I heard you have a birthday coming up. Are you doing something fun this year, or are you keeping it quiet?" },
      {
        speaker: "you",
        options: [
          { nl: "Ja, ik geef een klein feestje voor mijn verjaardag — eten, drankjes, spelletjes, zoiets. Ben je vrij? Wil je bij mij komen? Vind je dat leuk?", en: "Yes, I'm having a small party for my birthday — food, drinks, games, something like that. Are you free? Do you want to come to my place? Would you like that?" }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "jarig", en: "having a birthday" },
      { nl: "feestje", en: "party" },
      { nl: "van harte welkom", en: "very welcome" },
      { nl: "gezellig", en: "fun/pleasant" },
      { nl: "houd je het rustig", en: "keep it quiet" }
    ]
  },
  {
    topic: "Wonen",
    situation: { nl: "Je zoekt een nieuw appartement en hebt er een gezien op internet. Je belt de makelaar op om het te bekijken.", en: "You're looking for a new apartment and saw one online. You call the estate agent to view it." },
    other: "Makelaar",
    turns: [
      { speaker: "other", nl: "Goedemorgen, met makelaarskantoor De Vries, u spreekt met Sanne. Waarmee kan ik u helpen?", en: "Good morning, De Vries estate agency, you're speaking with Sanne. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Ja, hoi, met Steve. Ik heb een mooi appartement van u op internet gezien. Kan ik daarvoor een afspraak maken? Welke datum heeft u? Het is op [straatnaam]. Dicht bij het bos.", en: "Yes, hi, this is Steve. I saw a nice apartment of yours online. Can I make an appointment for that? What date do you have available? It's on [street name]. Close to the forest." }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "makelaar", en: "estate agent" },
      { nl: "aanspreekt", en: "appeals to" },
      { nl: "bezichtigen", en: "to view (property)" },
      { nl: "beschikbaar", en: "available" },
      { nl: "van binnen te bekijken", en: "to see the inside" }
    ]
  },
  {
    topic: "Gezond eten",
    situation: { nl: "Je bent op je werk, tijdens de pauze. Een collega vertelt dat hij vaak fastfood eet en vraagt wat jij daarvan vindt.", en: "You're at work, during the break. A colleague tells you he often eats fast food and asks what you think about it." },
    other: "Collega",
    turns: [
      { speaker: "other", nl: "Ik heb net weer een broodje gehaald bij de snackbar. Ik eet eigenlijk best vaak fastfood, gewoon omdat het snel en makkelijk is. Wat vind jij daar eigenlijk van?", en: "I've just picked up another sandwich from the snack bar. I actually eat fast food quite often, just because it's quick and easy. What do you actually think about that?" },
      {
        speaker: "you",
        options: [
          { nl: "Ik vind fastfood ook lekker, maar niet elke dag. Je moet ook groente en fruit eten. Snackbar-eten is niet zo gezond — er zit altijd veel zout in. Als je geen tijd hebt, is dat oké. Maar als je wel tijd hebt, kun je beter iets maken dat goed is voor je lichaam.", en: "I like fast food too, but not every day. You should also eat vegetables and fruit. Snack bar food isn't very healthy — it always has a lot of salt in it. If you don't have time, that's okay. But if you do have time, it's better to make something that's good for your body." }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "snackbar", en: "snack bar" },
      { nl: "verse groente", en: "fresh vegetables" },
      { nl: "uitzondering", en: "exception" },
      { nl: "gezonde keuzes", en: "healthy choices" },
      { nl: "ingrediënten", en: "ingredients" }
    ]
  },
  {
    topic: "Cadeau kopen",
    situation: { nl: "Je beste vriendin is over twee weken jarig. Je hebt nog geen idee wat je haar zou moeten geven. Je vraagt een andere vriend om advies.", en: "Your best friend has a birthday in two weeks. You have no idea what to give her. You ask another friend for advice." },
    other: "Vriend",
    turns: [
      { speaker: "other", nl: "Ik hoorde dat Lisa binnenkort jarig is. Heb je al een cadeau voor haar gevonden? Ik weet zelf nooit zo goed wat ik moet geven, vooral niet als iemand eigenlijk al alles heeft.", en: "I heard that Lisa has a birthday coming up soon. Have you found a gift for her yet? I myself never really know what to give, especially not when someone already has everything." },
      {
        speaker: "you",
        options: [
          { nl: "Geld is altijd een goed idee voor een cadeautje, of een cadeaubon — dan kan ze zelf iets kopen wat ze wil. Of je kunt ook iets geven dat je zelf gemaakt hebt, zoals een toetje of iets handgemaakt.", en: "Money is always a good idea for a gift, or a gift card — then she can buy something herself that she wants. Or you can also give something you made yourself, like a dessert or something handmade." }
        ],
        simple: []
      }
    ],
    hints: [],
    glossary: [
      { nl: "cadeaubon", en: "gift card" },
      { nl: "schrijver", en: "writer" },
      { nl: "workshop", en: "workshop" },
      { nl: "sieraden", en: "jewelry" },
      { nl: "persoonlijks", en: "something personal" }
    ]
  },
  {
    topic: "Vakantie plannen",
    situation: { nl: "Je collega gaat dit jaar voor het eerst zelf een vakantie plannen. Ze weet nog niet goed waar ze heen wil. Ze vraagt jou om ideeën.", en: "Your colleague is planning a vacation by herself for the first time this year. She doesn't know yet where she wants to go. She asks you for ideas." },
    other: "Collega",
    turns: [
      { speaker: "other", nl: "Ik ga dit jaar voor het eerst zelf mijn vakantie regelen, en ik weet eigenlijk niet waar ik moet beginnen. Ik hou van rust, maar ook wel van een beetje cultuur. Heb jij misschien tips voor een leuke bestemming?", en: "This year I'm arranging my vacation by myself for the first time, and I actually don't know where to start. I like peace and quiet, but also a bit of culture. Do you maybe have tips for a nice destination?" },
      {
        speaker: "you",
        options: [
          { nl: "Wat leuk dat je dat zelf gaat doen! Als je van rust én cultuur houdt, zou je aan een stad aan zee kunnen denken, zoals Lissabon of Barcelona. Je kunt er overdag musea bezoeken en 's avonds gewoon ontspannen op het strand. Een andere optie is een klein dorp in de bergen, als je liever helemaal tot rust komt.", en: "How nice that you're doing that yourself! If you like both peace and culture, you could think of a coastal city, like Lisbon or Barcelona. You can visit museums during the day and just relax on the beach in the evening. Another option is a small village in the mountains, if you'd rather completely unwind." },
          { nl: "Een reis naar Italië combineert vaak strand, eten en cultuur heel goed. Je kunt ook een rondreis maken langs meerdere steden.", en: "A trip to Italy often combines beach, food, and culture well. You could also make a tour along several cities." },
          { nl: "Denk aan een bestemming met natuur én een gezellig centrum, zoals in Oostenrijk. Zo kun je zowel wandelen als de stad in.", en: "Think of a destination with nature and also a cozy center, like in Austria. That way you can both hike and enjoy the city." }
        ],
        simple: [
          { nl: "Ga naar een stad aan zee. Daar kun je rusten en ook musea bezoeken.", en: "Go to a coastal city. There you can rest and also visit museums." },
          { nl: "Misschien een strandvakantie? Dan kun je rusten en zwemmen.", en: "Maybe a beach vacation? Then you can rest and swim." },
          { nl: "Of kies een rustig dorpje in de bergen. Daar kun je goed uitrusten.", en: "Or choose a quiet village in the mountains. You can rest well there." }
        ]
      }
    ],
    hints: [
      "een reis boeken (book a trip)",
      "cultuur opsnuiven (soak up culture)",
      "een rustige plek (a quiet place)"
    ],
    glossary: [
      { nl: "bestemming", en: "destination" },
      { nl: "rondreis", en: "tour/round trip" },
      { nl: "ontspannen", en: "to relax" },
      { nl: "tot rust komt", en: "unwinds/relaxes fully" },
      { nl: "dorp in de bergen", en: "village in the mountains" }
    ]
  },
  {
    topic: "Auto delen",
    situation: { nl: "Jij en een collega wonen in dezelfde buurt en rijden allebei elke dag met de auto naar hetzelfde werk. Je collega stelt voor om samen te rijden.", en: "You and a colleague live in the same neighborhood and both drive to the same work every day. Your colleague suggests carpooling." },
    other: "Collega",
    turns: [
      { speaker: "other", nl: "Ik zag laatst dat jij in dezelfde straat woont als ik. We rijden allebei elke dag met de auto naar hetzelfde werk, en dat kost best veel geld aan benzine. Zullen we om de beurt rijden, zodat we allebei minder hoeven te betalen?", en: "I noticed recently that you live in the same street as me. We both drive to the same work every day, and that costs quite a lot of money on gas. Shall we take turns driving, so we both have to pay less?" },
      {
        speaker: "you",
        options: [
          { nl: "Dat is eigenlijk een heel goed idee, daar had ik zelf nog niet aan gedacht. We zouden bijvoorbeeld om de week kunnen wisselen, of gewoon per dag afspreken wie er rijdt. Het scheelt ons dan ook nog eens file-stress, want dan kunnen we om de beurt rusten in de auto.", en: "That's actually a really good idea, I hadn't thought of that myself yet. We could for example switch every week, or just agree per day who drives. It also saves us traffic stress, because then we can take turns resting in the car." },
          { nl: "Zullen we een rooster maken, zodat we allebei weten wanneer wie rijdt? Dat scheelt ons echt geld.", en: "Shall we make a schedule, so we both know when who drives? That really saves us money." },
          { nl: "Laten we het gewoon per week afspreken wie rijdt. Zo delen we de kosten eerlijk.", en: "Let's just agree per week who drives. That way we share the costs fairly." }
        ],
        simple: [
          { nl: "Goed idee! We kunnen om de beurt rijden.", en: "Good idea! We can take turns driving." },
          { nl: "Dat is fijn. Dan rijden we samen naar het werk.", en: "That's nice. Then we'll drive to work together." }
        ]
      }
    ],
    hints: [
      "carpoolen (to carpool)",
      "brandstofkosten (fuel costs)",
      "afwisselen (to alternate)"
    ],
    glossary: [
      { nl: "benzine", en: "gas/petrol" },
      { nl: "om de beurt", en: "taking turns" },
      { nl: "rooster", en: "schedule" },
      { nl: "file-stress", en: "traffic stress" },
      { nl: "wisselen", en: "to switch" }
    ]
  },
  {
    topic: "Nieuwe buurt",
    situation: { nl: "Je bent net verhuisd naar een nieuwe buurt en kent nog bijna niemand. Je maakt kennis met een buurvrouw op straat.", en: "You've just moved to a new neighborhood and hardly know anyone yet. You meet a neighbor on the street." },
    other: "Buurvrouw",
    turns: [
      { speaker: "other", nl: "Oh hallo, jij bent toch net hier komen wonen? Welkom in de buurt! Zeg, ken je hier al een beetje de weg, of kan ik je nog ergens mee helpen?", en: "Oh hello, you just moved here, right? Welcome to the neighborhood! Say, do you know your way around here a bit yet, or can I help you with anything?" },
      {
        speaker: "you",
        options: [
          { nl: "Dank u wel, wat aardig! Ik ken de buurt eigenlijk nog helemaal niet zo goed. Ik zoek nog een goede supermarkt in de buurt, en ik hoorde dat er ergens een leuke markt is. Weet u misschien waar ik die kan vinden?", en: "Thank you, how kind! I actually don't know the neighborhood very well yet. I'm still looking for a good supermarket nearby, and I heard there's a nice market somewhere. Do you maybe know where I can find it?" },
          { nl: "Ik ben hier pas komen wonen en mis nog een vaste supermarkt. Kunt u me een goede aanraden?", en: "I just moved here and still miss a regular supermarket. Could you recommend a good one?" },
          { nl: "Ik zoek nog mijn weg in deze buurt. Is er een markt of winkelstraat die u kunt aanbevelen?", en: "I'm still finding my way in this neighborhood. Is there a market or shopping street you can recommend?" }
        ],
        simple: [
          { nl: "Ik zoek een supermarkt en een markt. Weet u waar die zijn?", en: "I'm looking for a supermarket and a market. Do you know where they are?" },
          { nl: "Ik ben hier nieuw. Is er een supermarkt dichtbij?", en: "I'm new here. Is there a supermarket nearby?" }
        ]
      }
    ],
    hints: [
      "zich thuis voelen (feel at home)",
      "buurtgenoten (neighbors)",
      "de omgeving verkennen (explore the area)"
    ],
    glossary: [
      { nl: "supermarkt", en: "supermarket" },
      { nl: "aanraden", en: "to recommend" },
      { nl: "winkelstraat", en: "shopping street" },
      { nl: "pas komen wonen", en: "just moved here" },
      { nl: "weg", en: "way/directions" }
    ]
  },
  {
    topic: "Klacht doorgeven",
    situation: { nl: "Je internet thuis valt al een week steeds uit. Je belt de klantenservice van je provider om dit te melden.", en: "Your internet at home keeps dropping out for a week now. You call your provider's customer service to report this." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, u spreekt met de klantenservice. Waarmee kan ik u helpen?", en: "Good afternoon, customer service speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Mijn internet thuis valt al een week lang steeds uit, soms wel drie of vier keer per dag. Ik werk veel thuis, dus dit is best vervelend voor mij. Kunt u kijken wat er aan de hand is, of eventueel iemand langssturen om het te repareren?", en: "Good afternoon. My internet at home has been dropping out for a week now, sometimes three or four times a day. I work from home a lot, so this is quite annoying for me. Could you check what's going on, or possibly send someone to fix it?" },
          { nl: "Mijn internetverbinding valt regelmatig weg, ook meerdere keren per dag. Kan er iets aan gedaan worden?", en: "My internet connection drops regularly, even several times a day. Can something be done about it?" },
          { nl: "Er is al een week een probleem met mijn internet thuis. Zou er een monteur langs kunnen komen?", en: "There's been a problem with my home internet for a week now. Could a technician come by?" }
        ],
        simple: [
          { nl: "Mijn internet werkt niet goed. Kunt u dit repareren?", en: "My internet isn't working well. Can you fix this?" },
          { nl: "Mijn internet valt steeds uit. Kan iemand dit oplossen?", en: "My internet keeps dropping out. Can someone fix this?" }
        ]
      }
    ],
    hints: [
      "storing (disruption/outage)",
      "opnieuw opstarten (restart)",
      "technische problemen (technical issues)"
    ],
    glossary: [
      { nl: "internetverbinding", en: "internet connection" },
      { nl: "klantenservice", en: "customer service" },
      { nl: "monteur", en: "technician" },
      { nl: "vervelend", en: "annoying" },
      { nl: "aan de hand", en: "going on" }
    ]
  },
  {
    topic: "Vrijwilligerswerk",
    situation: { nl: "Een vriend vertelt dat hij sinds kort vrijwilligerswerk doet. Hij vraagt wat jij daarvan vindt en of jij dat ook zou willen doen.", en: "A friend tells you he recently started doing volunteer work. He asks what you think of it and whether you would want to do that too." },
    other: "Vriend",
    turns: [
      { speaker: "other", nl: "Ik doe sinds een maand vrijwilligerswerk bij een buurthuis, en ik vind het eigenlijk heel leuk om te doen. Het kost wel wat vrije tijd, maar het geeft me ook veel energie. Zou jij dat ook wel eens willen proberen, denk je?", en: "I've been doing volunteer work at a community center for a month now, and I actually really enjoy it. It does cost some free time, but it also gives me a lot of energy. Would you also want to try that sometime, do you think?" },
      {
        speaker: "you",
        options: [
          { nl: "Wat goed van je, zeg! Ik heb er zelf ook weleens over nagedacht, vooral omdat ik het belangrijk vind om iets voor anderen te doen. Ik zou het misschien combineren met mijn hobby, bijvoorbeeld door kinderen te helpen met sporten. Het enige is dat ik bang ben dat ik er de tijd niet voor heb naast mijn werk.", en: "Good for you! I've also thought about it myself sometimes, especially because I find it important to do something for others. I might combine it with my hobby, for example by helping children with sports. The only thing is that I'm afraid I won't have the time for it alongside my work." },
          { nl: "Ik vind het idee eigenlijk heel mooi. Misschien kan ik ergens beginnen waar ik mijn eigen talenten kan gebruiken.", en: "I actually find the idea really nice. Maybe I could start somewhere where I can use my own talents." },
          { nl: "Dat spreekt me wel aan, al twijfel ik over de tijd die het kost. Hoeveel uur per week ben jij er ongeveer mee bezig?", en: "That does appeal to me, though I'm unsure about the time it takes. How many hours a week are you roughly busy with it?" }
        ],
        simple: [
          { nl: "Dat is leuk! Ik wil dat ook wel eens proberen.", en: "That's nice! I'd like to try that sometime too." },
          { nl: "Wat goed van jou! Misschien doe ik dat ook.", en: "Good for you! Maybe I'll do that too." }
        ]
      }
    ],
    hints: [
      "iets terugdoen (give something back)",
      "betrokken zijn (be involved)",
      "vrije tijd besteden (spend free time)"
    ],
    glossary: [
      { nl: "buurthuis", en: "community center" },
      { nl: "energie", en: "energy" },
      { nl: "talenten", en: "talents" },
      { nl: "twijfel", en: "doubt" },
      { nl: "spreekt me wel aan", en: "does appeal to me" }
    ]
  },
  {
    topic: "In het restaurant",
    situation: { nl: "Je eet in een restaurant, maar je gerecht is koud aangekomen. Je roept de ober erbij.", en: "You're eating at a restaurant, but your dish arrived cold. You call the waiter over." },
    other: "Ober",
    turns: [
      { speaker: "other", nl: "Goedenavond, is alles naar wens met de maaltijd? Ik zie dat u nog niet veel gegeten heeft.", en: "Good evening, is everything alright with the meal? I see you haven't eaten much yet." },
      {
        speaker: "you",
        options: [
          { nl: "Goedenavond. Eigenlijk niet helemaal, het spijt me dat ik het moet zeggen. Mijn soep is helaas koud aangekomen, terwijl de rest van het gerecht er wel goed uitziet. Zou het mogelijk zijn om een nieuwe, warme portie te krijgen?", en: "Good evening. Actually not entirely, I'm sorry to say. My soup unfortunately arrived cold, while the rest of the dish looks good. Would it be possible to get a new, warm portion?" },
          { nl: "Helaas is mijn soep koud geserveerd. Zou de keuken een verse portie kunnen maken?", en: "Unfortunately my soup was served cold. Could the kitchen make a fresh portion?" },
          { nl: "Het spijt me, maar dit gerecht is koud aangekomen. Kan het opnieuw opgewarmd worden?", en: "I'm sorry, but this dish arrived cold. Can it be reheated?" }
        ],
        simple: [
          { nl: "Mijn soep is koud. Mag ik een warme, nieuwe portie?", en: "My soup is cold. Can I get a warm, new portion?" },
          { nl: "Dit is koud. Kan het opnieuw opgewarmd worden?", en: "This is cold. Can it be reheated?" },
          { nl: "Sorry, maar dit gerecht is koud. Kan de keuken het opnieuw maken?", en: "Sorry, but this dish is cold. Can the kitchen make it again?" }
        ]
      }
    ],
    hints: [
      "opnieuw opwarmen (reheat)",
      "een klacht indienen (file a complaint)",
      "de rekening (the bill)"
    ],
    glossary: [
      { nl: "soep", en: "soup" },
      { nl: "koud aangekomen", en: "arrived cold" },
      { nl: "portie", en: "portion" },
      { nl: "keuken", en: "kitchen" },
      { nl: "opgewarmd", en: "reheated" }
    ]
  },
  {
    topic: "Verzekering",
    situation: { nl: "Je wilt een nieuwe zorgverzekering afsluiten voor volgend jaar. Je belt een verzekeraar om meer informatie te krijgen.", en: "You want to take out new health insurance for next year. You call an insurer for more information." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met de klantenservice. Waar kan ik u mee van dienst zijn?", en: "Good afternoon, customer service speaking. How can I be of service to you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik overweeg om volgend jaar bij u een zorgverzekering af te sluiten, maar ik heb nog een paar vragen. Ik wil vooral weten wat er precies vergoed wordt voor de tandarts, en of ik zelf mijn huisarts mag kiezen.", en: "Good afternoon. I'm considering taking out health insurance with you next year, but I still have a few questions. I especially want to know what exactly is covered for the dentist, and whether I can choose my own doctor." },
          { nl: "Ik wil graag weten welke pakketten jullie aanbieden. Vergoeden jullie ook fysiotherapie?", en: "I'd like to know which packages you offer. Do you also cover physiotherapy?" },
          { nl: "Kunt u mij uitleggen wat het verschil is tussen de pakketten? Ik ben vooral benieuwd naar de tandartsvergoeding.", en: "Could you explain the difference between the packages? I'm especially curious about the dentist coverage." }
        ],
        simple: [
          { nl: "Ik wil een verzekering afsluiten. Wat kost dat, en wat is inbegrepen?", en: "I want to take out insurance. What does it cost, and what's included?" },
          { nl: "Ik zoek een zorgverzekering. Wat vergoedt u allemaal?", en: "I'm looking for health insurance. What all do you cover?" }
        ]
      }
    ],
    hints: [
      "eigen risico (deductible)",
      "premie (premium)",
      "dekking (coverage)"
    ],
    glossary: [
      { nl: "zorgverzekering", en: "health insurance" },
      { nl: "vergoed", en: "reimbursed" },
      { nl: "tandarts", en: "dentist" },
      { nl: "pakketten", en: "packages/plans" },
      { nl: "fysiotherapie", en: "physiotherapy" }
    ]
  },
  {
    topic: "Sportclub",
    situation: { nl: "Je wilt lid worden van een sportclub in je buurt. Je belt om te vragen naar de mogelijkheden.", en: "You want to become a member of a sports club in your neighborhood. You call to ask about the options." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met de tennisclub. Waarmee kan ik u helpen?", en: "Good afternoon, tennis club speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik wil graag lid worden, maar ik heb eigenlijk nog nooit getennist. Kan ik als beginner toch meedoen, en zijn er ook lessen voor mensen die net beginnen?", en: "Good afternoon. I'd like to become a member, but I've actually never played tennis before. Can I join as a beginner anyway, and are there also lessons for people who are just starting?" },
          { nl: "Ik heb nog geen ervaring met tennis, maar wil het graag leren. Bieden jullie ook lessen voor volwassenen aan?", en: "I have no experience with tennis yet, but would like to learn. Do you also offer lessons for adults?" },
          { nl: "Kan ik me aanmelden zonder ervaring? Ik hoor graag of er begeleiding is voor nieuwe leden.", en: "Can I sign up without experience? I'd love to hear if there's guidance for new members." }
        ],
        simple: [
          { nl: "Ik ben een beginner. Zijn er ook lessen voor mij?", en: "I'm a beginner. Are there also lessons for me?" },
          { nl: "Ik heb nog nooit getennist. Kan ik toch meedoen?", en: "I've never played tennis. Can I join anyway?" }
        ]
      }
    ],
    hints: [
      "inschrijfgeld (registration fee)",
      "trainingstijden (training times)",
      "uitrusting (equipment)"
    ],
    glossary: [
      { nl: "lid worden", en: "to become a member" },
      { nl: "beginner", en: "beginner" },
      { nl: "begeleiding", en: "guidance" },
      { nl: "ervaring", en: "experience" },
      { nl: "meedoen", en: "to join in" }
    ]
  },
  {
    topic: "Bij de kapper",
    situation: { nl: "Je hebt een afspraak bij de kapper, maar je moet die dag onverwacht werken. Je belt om de afspraak te verzetten.", en: "You have a hairdresser appointment, but you unexpectedly have to work that day. You call to reschedule." },
    other: "Kapper",
    turns: [
      { speaker: "other", nl: "Goedemorgen, met kapsalon Els. Waarmee kan ik u helpen?", en: "Good morning, Els hair salon speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemorgen. Ik heb morgen om vier uur een afspraak bij u, maar ik moet die dag onverwacht werken. Zou ik de afspraak kunnen verzetten naar een avond later deze week, als dat mogelijk is?", en: "Good morning. I have an appointment with you tomorrow at four o'clock, but I unexpectedly have to work that day. Could I move the appointment to an evening later this week, if that's possible?" },
          { nl: "Ik moet mijn afspraak van morgen helaas verzetten wegens werk. Heeft u deze week nog een andere avond vrij?", en: "I unfortunately need to move tomorrow's appointment because of work. Do you have another evening free this week?" },
          { nl: "Er komt iets tussen voor morgen. Zou donderdag of vrijdag mogelijk zijn in plaats daarvan?", en: "Something has come up for tomorrow. Would Thursday or Friday be possible instead?" }
        ],
        simple: [
          { nl: "Ik moet morgen werken. Kan mijn afspraak naar donderdag?", en: "I have to work tomorrow. Can my appointment move to Thursday?" },
          { nl: "Ik kan morgen niet komen. Heeft u een andere dag?", en: "I can't come tomorrow. Do you have another day?" }
        ]
      }
    ],
    hints: [
      "een nieuwe afspraak maken (make a new appointment)",
      "verplaatsen (to move/reschedule)",
      "rooster (schedule)"
    ],
    glossary: [
      { nl: "kapsalon", en: "hair salon" },
      { nl: "onverwacht", en: "unexpectedly" },
      { nl: "verzetten", en: "to reschedule" },
      { nl: "komt iets tussen", en: "something comes up" },
      { nl: "avond later", en: "a later evening" }
    ]
  },
  {
    topic: "Hulp aan de buren",
    situation: { nl: "Je buurman gaat binnenkort verhuizen en vraagt of jij een dagje kunt helpen met dragen.", en: "Your neighbor is moving soon and asks if you can help carry things for a day." },
    other: "Buurman",
    turns: [
      { speaker: "other", nl: "Ik ga volgende maand verhuizen naar een nieuw huis, en ik heb best veel spullen om te verplaatsen. Zou jij misschien een dagje kunnen helpen met dragen? Ik trakteer natuurlijk op pizza.", en: "I'm moving to a new house next month, and I have quite a lot of stuff to move. Could you maybe help carry things for a day? I'll of course treat you to pizza." },
      {
        speaker: "you",
        options: [
          { nl: "Dat wil ik best doen, al kan ik niet de hele dag, want ik heb 's middags al iets anders gepland. Ik kan wel de hele ochtend helpen met de zware spullen. Laat me weten welke dag jou het beste uitkomt.", en: "I'm happy to do that, although I can't do the whole day, because I already have something else planned in the afternoon. I can help with the heavy things all morning though. Let me know which day suits you best." },
          { nl: "Ik kan zeker een paar uur komen helpen, vooral met de zware dozen. Laat me weten hoe laat je begint.", en: "I can definitely come help for a few hours, especially with the heavy boxes. Let me know what time you start." },
          { nl: "Tuurlijk help ik mee met verhuizen. Ik kan 's ochtends komen, is dat handig voor je?", en: "Sure, I'll help with the move. I can come in the morning, does that work for you?" }
        ],
        simple: [
          { nl: "Ik help graag 's ochtends. 's Middags kan ik helaas niet.", en: "I'm happy to help in the morning. In the afternoon I unfortunately can't." },
          { nl: "Ik kan een paar uur helpen met dragen. Zeg maar hoe laat.", en: "I can help carry things for a few hours. Just tell me the time." }
        ]
      }
    ],
    hints: [
      "een handje helpen (lend a hand)",
      "inpakken (to pack)",
      "verhuisdozen (moving boxes)"
    ],
    glossary: [
      { nl: "verhuizen", en: "to move house" },
      { nl: "dragen", en: "to carry" },
      { nl: "trakteer", en: "treat (someone)" },
      { nl: "zware spullen", en: "heavy items" },
      { nl: "dozen", en: "boxes" }
    ]
  },
  {
    topic: "Sociale media",
    situation: { nl: "Een vriend vertelt dat hij minder tijd op sociale media wil doorbrengen. Hij vraagt wat jij daarvan vindt.", en: "A friend says he wants to spend less time on social media. He asks what you think about that." },
    other: "Vriend",
    turns: [
      { speaker: "other", nl: "Ik merk dat ik best veel tijd op mijn telefoon doorbreng, vooral op sociale media. Ik wil dat eigenlijk wel minder gaan doen, maar ik weet niet goed hoe ik dat het beste kan aanpakken. Wat vind jij daarvan, en heb je misschien tips?", en: "I notice that I spend quite a lot of time on my phone, especially on social media. I'd actually like to do that less, but I don't really know how best to approach it. What do you think about that, and do you maybe have tips?" },
      {
        speaker: "you",
        options: [
          { nl: "Ik snap dat helemaal, dat merk ik zelf ook weleens bij mezelf. Je zou bijvoorbeeld een tijdslimiet op je apps kunnen instellen, of je telefoon 's avonds in een andere kamer kunnen leggen. Het helpt ook om een leuke hobby te zoeken, zodat je minder snel verveeld op je telefoon kijkt.", en: "I totally understand that, I notice that in myself sometimes too. You could for example set a time limit on your apps, or put your phone in another room in the evening. It also helps to find a fun hobby, so you're less likely to check your phone out of boredom." },
          { nl: "Probeer misschien apps van je telefoon te verwijderen en alleen via de computer te kijken. Dat maakt het minder verleidelijk.", en: "Maybe try removing the apps from your phone and only checking on the computer. That makes it less tempting." },
          { nl: "Je zou vaste momenten kunnen instellen waarop je even kijkt, in plaats van de hele dag. Dat werkt vaak goed.", en: "You could set fixed moments to check, instead of all day. That often works well." }
        ],
        simple: [
          { nl: "Zet een tijdslimiet op je telefoon. Dat helpt echt.", en: "Set a time limit on your phone. That really helps." },
          { nl: "Leg je telefoon 's avonds weg. Dan kijk je minder vaak.", en: "Put your phone away in the evening. Then you'll check it less." }
        ]
      }
    ],
    hints: [
      "schermtijd (screen time)",
      "afleiding (distraction)",
      "bewust omgaan met (be mindful of)"
    ],
    glossary: [
      { nl: "tijdslimiet", en: "time limit" },
      { nl: "verveeld", en: "bored" },
      { nl: "verleidelijk", en: "tempting" },
      { nl: "apps", en: "apps" },
      { nl: "vaste momenten", en: "fixed moments" }
    ]
  },
  {
    topic: "Kleding ruilen",
    situation: { nl: "Je hebt een paar dagen geleden een broek gekocht, maar hij blijkt te klein te zijn. Je gaat terug naar de winkel om hem om te ruilen.", en: "You bought a pair of pants a few days ago, but they turn out to be too small. You go back to the store to exchange them." },
    other: "Verkoopster",
    turns: [
      { speaker: "other", nl: "Goedemiddag, kan ik u ergens mee helpen?", en: "Good afternoon, can I help you with something?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik heb hier een paar dagen geleden deze broek gekocht, maar hij is helaas net te klein. Zou ik hem kunnen omruilen voor een maatje groter, of krijg ik mijn geld terug als u die maat niet meer heeft?", en: "Good afternoon. I bought these pants here a few days ago, but unfortunately they're just too small. Could I exchange them for a size bigger, or do I get my money back if you don't have that size anymore?" },
          { nl: "Deze broek past helaas niet goed. Zou ik een andere maat kunnen proberen?", en: "These pants unfortunately don't fit well. Could I try a different size?" },
          { nl: "De maat is jammer genoeg fout. Heeft u dit model ook in een grotere maat?", en: "The size is unfortunately wrong. Do you have this model in a bigger size too?" }
        ],
        simple: [
          { nl: "Deze broek is te klein. Heeft u een grotere maat?", en: "These pants are too small. Do you have a bigger size?" },
          { nl: "Deze maat past niet goed. Mag ik een andere maat proberen?", en: "This size doesn't fit well. May I try a different size?" }
        ]
      }
    ],
    hints: [
      "passen (to try on)",
      "ruilen (to exchange)",
      "bonnetje (receipt)"
    ],
    glossary: [
      { nl: "broek", en: "pants" },
      { nl: "maatje groter", en: "a size bigger" },
      { nl: "past helaas niet goed", en: "unfortunately doesn't fit well" },
      { nl: "model", en: "model/style" },
      { nl: "maat", en: "size" }
    ]
  },
  {
    topic: "Bibliotheek",
    situation: { nl: "Je hebt een boek van de bibliotheek te laat ingeleverd. Je gaat naar de balie om dit te bespreken.", en: "You returned a library book late. You go to the desk to discuss this." },
    other: "Bibliothecaris",
    turns: [
      { speaker: "other", nl: "Goedemiddag, u wilt dit boek inleveren? Ik zie dat het al een week te laat is.", en: "Good afternoon, you want to return this book? I see it's already a week overdue." },
      {
        speaker: "you",
        options: [
          { nl: "Ja, dat klopt, en het spijt me. Ik was de afgelopen weken erg druk met werk en ben het helaas vergeten. Moet ik nu een boete betalen, en hoeveel zou dat dan ongeveer zijn?", en: "Yes, that's right, and I'm sorry. I've been very busy with work the past few weeks and unfortunately forgot about it. Do I have to pay a fine now, and how much would that be roughly?" },
          { nl: "Het boek is inderdaad te laat, dat spijt me. Kan ik de boete meteen contant betalen?", en: "The book is indeed late, I'm sorry about that. Can I pay the fine in cash right away?" },
          { nl: "Ik ben de inleverdatum vergeten, sorry daarvoor. Wat moet ik nu doen om het recht te zetten?", en: "I forgot about the return date, sorry about that. What should I do now to fix it?" }
        ],
        simple: [
          { nl: "Sorry, ik ben het boek vergeten. Moet ik een boete betalen?", en: "Sorry, I forgot about the book. Do I have to pay a fine?" },
          { nl: "Het boek is te laat. Wat moet ik nu doen?", en: "The book is late. What should I do now?" }
        ]
      }
    ],
    hints: [
      "verlengen (to renew/extend)",
      "lidmaatschap (membership)",
      "op tijd inleveren (return on time)"
    ],
    glossary: [
      { nl: "boete", en: "fine" },
      { nl: "inleverdatum", en: "return date" },
      { nl: "contant", en: "in cash" },
      { nl: "recht te zetten", en: "to fix/set right" },
      { nl: "te laat", en: "too late" }
    ]
  },
  {
    topic: "Op het werk",
    situation: { nl: "Je laptop van het werk doet het opeens niet meer. Je belt de IT-afdeling om hulp te vragen.", en: "Your work laptop suddenly stops working. You call the IT department for help." },
    other: "IT-medewerker",
    turns: [
      { speaker: "other", nl: "Goedemorgen, met de IT-helpdesk. Waar loopt u tegenaan?", en: "Good morning, IT helpdesk speaking. What's the problem you're running into?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemorgen. Mijn laptop start opeens niet meer op, ook niet na een herstart. Ik heb vandaag een belangrijke deadline, dus ik hoop dat het snel opgelost kan worden. Kunt u op afstand meekijken, of moet ik langskomen?", en: "Good morning. My laptop suddenly won't start anymore, not even after a restart. I have an important deadline today, so I hope it can be fixed quickly. Can you take a look remotely, or do I need to come by?" },
          { nl: "Mijn laptop reageert nergens meer op. Zou u er telefonisch bij kunnen helpen?", en: "My laptop isn't responding to anything anymore. Could you help over the phone?" },
          { nl: "Het scherm blijft zwart, zelfs na opnieuw opstarten. Is er iemand die er snel naar kan kijken?", en: "The screen stays black, even after restarting. Is there someone who can take a look quickly?" }
        ],
        simple: [
          { nl: "Mijn laptop doet het niet. Kunt u mij helpen?", en: "My laptop isn't working. Can you help me?" },
          { nl: "Mijn laptop start niet op. Kan iemand dit snel maken?", en: "My laptop won't start. Can someone fix this quickly?" }
        ]
      }
    ],
    hints: [
      "een probleem melden (report a problem)",
      "back-up maken (make a backup)",
      "IT-afdeling (IT department)"
    ],
    glossary: [
      { nl: "opstarten", en: "to start up" },
      { nl: "herstart", en: "restart" },
      { nl: "deadline", en: "deadline" },
      { nl: "op afstand", en: "remotely" },
      { nl: "scherm", en: "screen" }
    ]
  },
  {
    topic: "Op het werk",
    situation: { nl: "Er begint een nieuwe collega op je afdeling. Je manager vraagt of jij hem de eerste week wilt rondleiden.", en: "A new colleague is starting in your department. Your manager asks if you'd like to show him around the first week." },
    other: "Manager",
    turns: [
      { speaker: "other", nl: "We krijgen volgende week een nieuwe collega, en ik zoek iemand die hem de eerste dagen kan begeleiden. Zou jij dat op je willen nemen? Het hoeft niet de hele dag, maar wel af en toe.", en: "We're getting a new colleague next week, and I'm looking for someone who can guide him the first few days. Would you be willing to take that on? It doesn't have to be all day, but every now and then." },
      {
        speaker: "you",
        options: [
          { nl: "Ja, dat wil ik graag doen. Ik kan hem op de eerste dag rondleiden en uitleggen hoe alles werkt. En de rest van de week kan hij bij mij terecht als hij vragen heeft.", en: "Yes, I'd be happy to do that. I can show him around on the first day and explain how everything works. And for the rest of the week he can come to me if he has questions." },
          { nl: "Natuurlijk wil ik hem inwerken. Ik laat hem de belangrijkste dingen zien op zijn eerste dag.", en: "Of course I want to help him get settled in. I'll show him the most important things on his first day." },
          { nl: "Geen probleem, ik neem hem graag onder mijn hoede. Ik zorg dat hij zich snel thuis voelt.", en: "No problem, I'll gladly take him under my wing. I'll make sure he feels at home quickly." }
        ],
        simple: [
          { nl: "Ja, ik help hem graag de eerste dagen.", en: "Yes, I'm happy to help him the first few days." },
          { nl: "Natuurlijk, ik laat hem graag alles zien.", en: "Of course, I'm happy to show him everything." }
        ]
      }
    ],
    hints: [
      "wegwijs maken (show the ropes)",
      "vragen stellen (ask questions)",
      "welkom heten (welcome someone)"
    ],
    glossary: [
      { nl: "begeleiden", en: "to guide" },
      { nl: "inwerken", en: "to train/onboard" },
      { nl: "onder mijn hoede", en: "under my wing" },
      { nl: "bij mij terecht", en: "can turn to me" },
      { nl: "rondleiden", en: "to show around" }
    ]
  },
  {
    topic: "Met de buren",
    situation: { nl: "Je buurvrouw is een paar dagen weg. Ze vraagt of jij haar pakketjes wilt aannemen.", en: "Your neighbor is away for a few days. She asks if you can accept her packages." },
    other: "Buurvrouw",
    turns: [
      { speaker: "other", nl: "Ik ben volgende week een paar dagen op vakantie, en ik verwacht nog een paar pakketjes. Zou jij ze voor mij kunnen aannemen, als de bezorger langskomt?", en: "I'm on vacation for a few days next week, and I'm still expecting a couple of packages. Could you accept them for me, when the delivery person comes by?" },
      {
        speaker: "you",
        options: [
          { nl: "Ja, natuurlijk, dat is geen probleem. Ik ben eigenlijk de hele week thuis, dus dat komt goed uit. Leg de pakketjes maar bij mij neer, dan zorg ik dat ze veilig blijven tot je terug bent.", en: "Yes, of course, that's no problem. I'm actually home all week, so that works out well. Just drop the packages off with me, then I'll make sure they stay safe until you're back." },
          { nl: "Dat doe ik met plezier, ik ben toch veel thuis. Zet de pakketjes gerust bij mij neer.", en: "I'm happy to do that, I'm home a lot anyway. Just leave the packages with me." },
          { nl: "Natuurlijk regel ik dat voor je. Ik zorg dat ze veilig bij mij blijven staan.", en: "Of course I'll arrange that for you. I'll make sure they stay safe with me." }
        ],
        simple: [
          { nl: "Geen probleem, ik ben thuis. Ik neem ze wel aan.", en: "No problem, I'm home. I'll accept them." },
          { nl: "Dat is goed. Ik ben veel thuis, dus dat lukt prima.", en: "That's fine. I'm home a lot, so that works well." }
        ]
      }
    ],
    hints: [
      "thuis bezorgen (deliver at home)",
      "sleutel geven (give a key)",
      "op tijd zijn (be on time)"
    ],
    glossary: [
      { nl: "bezorger", en: "delivery person" },
      { nl: "pakketjes", en: "packages" },
      { nl: "veilig", en: "safe" },
      { nl: "komt goed uit", en: "works out well" },
      { nl: "geen probleem", en: "no problem" }
    ]
  },
  {
    topic: "Sociale afspraken",
    situation: { nl: "Je bent net verhuisd naar een nieuw huis. Je wilt een housewarming organiseren en vraagt een vriendin om mee te helpen.", en: "You've just moved into a new house. You want to organize a housewarming and ask a friend to help." },
    other: "Vriendin",
    turns: [
      { speaker: "other", nl: "Hé, hoe bevalt het nieuwe huis? Ben je al helemaal ingericht?", en: "Hey, how do you like the new house? Are you all settled in yet?" },
      {
        speaker: "you",
        options: [
          { nl: "Het bevalt heel goed, maar ik ben nog niet helemaal klaar met inrichten. Ik wil binnenkort een housewarming geven om het te vieren. Zou jij mij kunnen helpen met de voorbereidingen, zoals het versieren en het eten regelen?", en: "I like it a lot, but I'm not quite finished decorating yet. I want to throw a housewarming soon to celebrate. Could you help me with the preparations, like decorating and arranging the food?" },
          { nl: "Ik wil binnenkort mensen uitnodigen om het nieuwe huis te vieren. Zou je willen meedenken over de indeling van de avond?", en: "I want to invite people soon to celebrate the new house. Would you want to help think about the plan for the evening?" },
          { nl: "Ik plan een housewarming, maar heb nog geen idee waar ik moet beginnen. Kun je me helpen met de boodschappen?", en: "I'm planning a housewarming, but have no idea where to start. Can you help me with the groceries?" }
        ],
        simple: [
          { nl: "Ik geef binnenkort een feestje. Kun je me helpen met de voorbereiding?", en: "I'm having a party soon. Can you help me with the preparation?" },
          { nl: "Ik wil een feestje geven in mijn nieuwe huis. Help je mee?", en: "I want to have a party in my new house. Will you help?" }
        ]
      }
    ],
    hints: [
      "gasten ontvangen (host guests)",
      "hapjes maken (make snacks)",
      "de boel inrichten (set up the place)"
    ],
    glossary: [
      { nl: "housewarming", en: "housewarming party" },
      { nl: "ingericht", en: "furnished/decorated" },
      { nl: "versieren", en: "to decorate" },
      { nl: "voorbereidingen", en: "preparations" },
      { nl: "indeling", en: "layout/plan" }
    ]
  },
  {
    topic: "Onderweg",
    situation: { nl: "Je hebt je bus gemist en moet toch op tijd naar een afspraak. Je vraagt iemand op straat naar een alternatief.", en: "You've missed your bus and still need to get to an appointment on time. You ask someone on the street for an alternative." },
    other: "Voorbijganger",
    turns: [
      { speaker: "other", nl: "Kan ik u helpen? U kijkt behoorlijk gestrest.", en: "Can I help you? You look quite stressed." },
      {
        speaker: "you",
        options: [
          { nl: "Ja, graag, dank u wel. Ik heb net mijn bus gemist en moet over twintig minuten op een afspraak zijn. Weet u misschien of er een andere bus rijdt, of is het te voet ook te doen?", en: "Yes, please, thank you. I just missed my bus and need to be at an appointment in twenty minutes. Do you maybe know if there's another bus, or is it doable on foot too?" },
          { nl: "Mijn bus is net weggereden voor mijn neus. Rijdt er misschien snel een andere?", en: "My bus just left right in front of me. Is there maybe another one coming soon?" },
          { nl: "Ik ben net te laat voor de bus. Is lopen naar mijn afspraak een optie, denkt u?", en: "I'm just too late for the bus. Is walking to my appointment an option, do you think?" }
        ],
        simple: [
          { nl: "Ik heb mijn bus gemist. Is er een andere bus?", en: "I missed my bus. Is there another bus?" },
          { nl: "Mijn bus is net weg. Kan ik ook lopen naar mijn afspraak?", en: "My bus just left. Can I also walk to my appointment?" }
        ]
      }
    ],
    hints: [
      "een taxi nemen (take a taxi)",
      "de volgende bus (the next bus)",
      "je haasten (to hurry)"
    ],
    glossary: [
      { nl: "gestrest", en: "stressed" },
      { nl: "weggereden", en: "drove off" },
      { nl: "voor mijn neus", en: "right in front of me" },
      { nl: "lopen", en: "to walk" },
      { nl: "op tijd", en: "on time" }
    ]
  },
  {
    topic: "Bij de tandarts",
    situation: { nl: "Je hebt al een paar dagen kiespijn. Je belt de tandarts om een afspraak te maken.", en: "You've had a toothache for a few days. You call the dentist to make an appointment." },
    other: "Assistente",
    turns: [
      { speaker: "other", nl: "Goedemorgen, met de tandartspraktijk. Waar kan ik u mee helpen?", en: "Good morning, dental practice speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemorgen. Ik heb al een paar dagen flinke kiespijn, vooral als ik iets kouds of warms eet. Zou ik zo snel mogelijk een afspraak kunnen maken? Ik kan bijna elk moment deze week.", en: "Good morning. I've had a bad toothache for a few days now, especially when I eat something cold or warm. Could I make an appointment as soon as possible? I'm available almost any time this week." },
          { nl: "Mijn kies doet al dagen pijn, vooral 's nachts. Kan ik snel terecht bij de tandarts?", en: "My tooth has been hurting for days, especially at night. Can I get in soon at the dentist?" },
          { nl: "De pijn wordt steeds erger. Is er misschien een spoedafspraak mogelijk?", en: "The pain keeps getting worse. Is an emergency appointment maybe possible?" }
        ],
        simple: [
          { nl: "Ik heb kiespijn. Kan ik snel een afspraak krijgen?", en: "I have a toothache. Can I get an appointment soon?" },
          { nl: "Mijn kies doet al dagen pijn. Kan ik snel langskomen?", en: "My tooth has hurt for days. Can I come by soon?" }
        ]
      }
    ],
    hints: [
      "ontsteking (infection)",
      "pijnstiller (painkiller)",
      "gevoelig zijn (be sensitive)"
    ],
    glossary: [
      { nl: "kiespijn", en: "toothache" },
      { nl: "spoedafspraak", en: "emergency appointment" },
      { nl: "kies", en: "molar/tooth" },
      { nl: "erger", en: "worse" },
      { nl: "flinke", en: "significant/bad" }
    ]
  },
  {
    topic: "Ziekmelden",
    situation: { nl: "Je voelt je erg grieperig en kunt vandaag niet werken. Je belt je manager om je ziek te melden.", en: "You feel very feverish and can't work today. You call your manager to report sick." },
    other: "Manager",
    turns: [
      { speaker: "other", nl: "Goedemorgen, met mij. Alles goed? Ik zag dat je nog niet ingelogd bent.", en: "Good morning, it's me. All good? I noticed you haven't logged in yet." },
      {
        speaker: "you",
        options: [
          { nl: "Goedemorgen. Nee, het gaat eigenlijk niet zo goed. Ik heb hoge koorts en voel me erg grieperig, dus ik denk niet dat ik vandaag kan werken. Ik ga even rusten en hoop morgen weer beter te zijn.", en: "Good morning. No, it's actually not going very well. I have a high fever and feel very feverish, so I don't think I can work today. I'm going to rest for a bit and hope to feel better tomorrow." },
          { nl: "Ik voel me erg beroerd vandaag, met koorts. Ik denk dat het beter is als ik vandaag thuisblijf.", en: "I feel quite awful today, with a fever. I think it's better if I stay home today." },
          { nl: "Helaas voel ik me te ziek om te werken. Ik hoop morgen weer aan de slag te kunnen.", en: "Unfortunately I feel too sick to work. I hope to be back at it tomorrow." }
        ],
        simple: [
          { nl: "Ik ben ziek. Ik kan vandaag niet werken.", en: "I'm sick. I can't work today." },
          { nl: "Ik heb koorts. Ik blijf vandaag thuis.", en: "I have a fever. I'm staying home today." },
          { nl: "Ik voel me niet goed. Ik ga vandaag rusten.", en: "I don't feel well. I'm going to rest today." }
        ]
      }
    ],
    hints: [
      "uitzieken (to recover from illness)",
      "beterschap (get well)",
      "thuisblijven (stay home)"
    ],
    glossary: [
      { nl: "grieperig", en: "feverish/flu-like" },
      { nl: "koorts", en: "fever" },
      { nl: "beroerd", en: "awful/unwell" },
      { nl: "rusten", en: "to rest" },
      { nl: "ingelogd", en: "logged in" }
    ]
  },
  {
    topic: "Loodgieter bellen",
    situation: { nl: "De kraan in je keuken lekt al een paar dagen. Je belt een loodgieter om het te laten repareren.", en: "The tap in your kitchen has been leaking for a few days. You call a plumber to have it repaired." },
    other: "Loodgieter",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met loodgietersbedrijf Jansen. Waarmee kan ik u helpen?", en: "Good afternoon, Jansen plumbing company speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. De kraan in mijn keuken lekt al een paar dagen, en het lijkt steeds erger te worden. Zou iemand deze week nog kunnen langskomen om ernaar te kijken?", en: "Good afternoon. The tap in my kitchen has been leaking for a few days now, and it seems to be getting worse. Could someone come by this week to take a look at it?" },
          { nl: "Er druppelt al dagen water uit mijn kraan. Zou er snel iemand kunnen komen kijken?", en: "Water has been dripping from my tap for days. Could someone come take a look soon?" },
          { nl: "Mijn keukenkraan lekt steeds meer. Is het mogelijk om deze week nog langs te komen?", en: "My kitchen tap keeps leaking more and more. Is it possible to come by this week still?" }
        ],
        simple: [
          { nl: "Mijn kraan lekt. Kan iemand komen kijken?", en: "My tap is leaking. Can someone come take a look?" },
          { nl: "Er druppelt water uit mijn kraan. Kunt u dit repareren?", en: "Water is dripping from my tap. Can you repair this?" }
        ]
      }
    ],
    hints: [
      "een monteur inschakelen (call in a repairman)",
      "waterschade (water damage)",
      "repareren (to repair)"
    ],
    glossary: [
      { nl: "lekt", en: "leaks" },
      { nl: "druppelt", en: "drips" },
      { nl: "langskomen", en: "to come by" },
      { nl: "steeds erger", en: "worse and worse" },
      { nl: "loodgietersbedrijf", en: "plumbing company" }
    ]
  },
  {
    topic: "Winkelen",
    situation: { nl: "Je ziet in een winkel een jas die je erg mooi vindt, maar hij is best duur. Je vraagt de verkoper of er binnenkort korting op komt.", en: "You see a jacket in a store that you really like, but it's quite expensive. You ask the salesperson if there will be a discount soon." },
    other: "Verkoper",
    turns: [
      { speaker: "other", nl: "Kan ik u ergens mee helpen? Ik zag u al een tijdje naar deze jas kijken.", en: "Can I help you with something? I noticed you looking at this jacket for a while." },
      {
        speaker: "you",
        options: [
          { nl: "Ja, graag. Ik vind deze jas erg mooi, maar hij is eigenlijk net iets te duur voor mij. Weet u toevallig of hier binnenkort een uitverkoop is, of komt er misschien korting op dit merk?", en: "Yes, please. I think this jacket is very nice, but it's actually just a bit too expensive for me. Do you happen to know if there's a sale coming up soon, or will there maybe be a discount on this brand?" },
          { nl: "Deze jas vind ik echt prachtig, maar de prijs is best hoog. Verwacht u binnenkort een actie?", en: "I really love this jacket, but the price is quite high. Are you expecting a sale soon?" },
          { nl: "Ik twijfel door de prijs van deze jas. Is er misschien een studentenkorting of iets dergelijks?", en: "I'm hesitant because of the price of this jacket. Is there maybe a student discount or something like that?" }
        ],
        simple: [
          { nl: "Deze jas is mooi maar duur. Komt er nog korting?", en: "This jacket is nice but expensive. Will there be a discount?" },
          { nl: "Ik vind deze jas mooi, maar duur. Is er binnenkort een uitverkoop?", en: "I like this jacket, but it's expensive. Is there a sale coming up soon?" }
        ]
      }
    ],
    hints: [
      "afprijzen (to mark down)",
      "prijskaartje (price tag)",
      "een koopje (a bargain)"
    ],
    glossary: [
      { nl: "uitverkoop", en: "sale" },
      { nl: "actie", en: "promotion/sale" },
      { nl: "studentenkorting", en: "student discount" },
      { nl: "prijs", en: "price" },
      { nl: "twijfel", en: "hesitation/doubt" }
    ]
  },
  {
    topic: "Op reis",
    situation: { nl: "Je hebt een kamer geboekt in een hotel, maar je reisplannen zijn veranderd. Je belt het hotel om de boeking aan te passen.", en: "You've booked a room at a hotel, but your travel plans have changed. You call the hotel to adjust the booking." },
    other: "Receptioniste",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met hotel De Zon. Waarmee kan ik u van dienst zijn?", en: "Good afternoon, Hotel De Zon speaking. How can I be of service to you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik heb bij u een kamer geboekt voor komend weekend, maar mijn reisplannen zijn veranderd. Zou het mogelijk zijn om de boeking te verzetten naar het weekend erna, in plaats van te annuleren?", en: "Good afternoon. I've booked a room with you for this coming weekend, but my travel plans have changed. Would it be possible to move the booking to the following weekend, instead of canceling?" },
          { nl: "Door veranderde plannen kan ik dit weekend niet komen. Kan de boeking naar een latere datum?", en: "Due to changed plans I can't come this weekend. Can the booking move to a later date?" },
          { nl: "Ik moet mijn verblijf verschuiven door omstandigheden. Is een andere week mogelijk zonder extra kosten?", en: "I need to shift my stay due to circumstances. Is another week possible without extra costs?" }
        ],
        simple: [
          { nl: "Mijn plannen zijn veranderd. Kan ik de boeking verzetten?", en: "My plans have changed. Can I move the booking?" },
          { nl: "Ik kan dit weekend niet komen. Mag het een andere datum zijn?", en: "I can't come this weekend. Can it be a different date?" }
        ]
      }
    ],
    hints: [
      "reservering wijzigen (change reservation)",
      "aanbetaling (deposit)",
      "een latere datum (a later date)"
    ],
    glossary: [
      { nl: "boeking", en: "booking" },
      { nl: "annuleren", en: "to cancel" },
      { nl: "verzetten", en: "to reschedule" },
      { nl: "verblijf", en: "stay" },
      { nl: "omstandigheden", en: "circumstances" }
    ]
  },
  {
    topic: "Op reis",
    situation: { nl: "Je vlucht heeft veel vertraging en je mist daardoor je aansluitende vlucht. Je gaat naar de balie van de luchtvaartmaatschappij.", en: "Your flight is badly delayed and because of that you miss your connecting flight. You go to the airline's desk." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, waarmee kan ik u helpen?", en: "Good afternoon, how can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Door de vertraging van mijn eerste vlucht heb ik net mijn aansluiting gemist. Is er een andere vlucht waarmee ik vandaag nog verder kan reizen, of moet ik wachten tot morgen?", en: "Good afternoon. Because of the delay of my first flight, I just missed my connection. Is there another flight I can still travel on today, or do I have to wait until tomorrow?" },
          { nl: "Ik heb mijn overstap gemist door de vertraging. Wanneer vertrekt de volgende vlucht naar mijn bestemming?", en: "I missed my connection because of the delay. When does the next flight to my destination leave?" },
          { nl: "Door de vertraging zit ik nu vast op het vliegveld. Kunt u mij op een latere vlucht zetten?", en: "Because of the delay I'm now stuck at the airport. Can you put me on a later flight?" }
        ],
        simple: [
          { nl: "Ik heb mijn vlucht gemist. Is er een andere vlucht vandaag?", en: "I missed my flight. Is there another flight today?" },
          { nl: "Mijn vlucht had vertraging. Kunt u mij op een andere vlucht zetten?", en: "My flight was delayed. Can you put me on another flight?" }
        ]
      }
    ],
    hints: [
      "omboeken (to rebook)",
      "instapkaart (boarding pass)",
      "vertrektijd (departure time)"
    ],
    glossary: [
      { nl: "aansluiting", en: "connection" },
      { nl: "overstap", en: "connecting flight/transfer" },
      { nl: "bestemming", en: "destination" },
      { nl: "vliegveld", en: "airport" },
      { nl: "vertraging", en: "delay" }
    ]
  },
  {
    topic: "Cursus volgen",
    situation: { nl: "Je wilt je inschrijven voor een schilderscursus bij het buurthuis. Je belt om te vragen naar de mogelijkheden.", en: "You want to sign up for a painting course at the community center. You call to ask about the options." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met het buurthuis. Waarmee kan ik u helpen?", en: "Good afternoon, community center speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik zag op uw website een schilderscursus voor beginners, en die lijkt me erg leuk. Kunt u mij vertellen wanneer die begint, en of er nog plek vrij is?", en: "Good afternoon. I saw a beginner's painting course on your website, and it seems really nice to me. Could you tell me when it starts, and whether there's still room available?" },
          { nl: "Ik wil me graag aanmelden voor de schilderscursus. Is er nog ruimte voor nieuwe deelnemers?", en: "I'd like to sign up for the painting course. Is there still room for new participants?" },
          { nl: "De cursus voor beginners lijkt me leuk. Kunt u vertellen hoeveel de cursus ongeveer kost?", en: "The beginner course sounds nice to me. Could you tell me roughly what the course costs?" }
        ],
        simple: [
          { nl: "Ik wil me inschrijven. Is er nog plek?", en: "I want to sign up. Is there still room?" },
          { nl: "Ik wil de schilderscursus doen. Wanneer begint die?", en: "I want to take the painting course. When does it start?" }
        ]
      }
    ],
    hints: [
      "materiaal meenemen (bring supplies)",
      "creatief bezig zijn (be creative)",
      "wekelijkse les (weekly lesson)"
    ],
    glossary: [
      { nl: "schilderscursus", en: "painting course" },
      { nl: "deelnemers", en: "participants" },
      { nl: "beginners", en: "beginners" },
      { nl: "plek vrij", en: "room available" },
      { nl: "aanmelden", en: "to sign up" }
    ]
  },
  {
    topic: "Op het werk",
    situation: { nl: "Je werkt al twee jaar bij hetzelfde bedrijf en hebt veel nieuwe taken erbij gekregen. Je vraagt je manager om een gesprek over je salaris.", en: "You've worked at the same company for two years and have taken on many new tasks. You ask your manager for a conversation about your salary." },
    other: "Manager",
    turns: [
      { speaker: "other", nl: "Je wilde een gesprek met me? Waar zullen we het over hebben?", en: "You wanted to have a conversation with me? What shall we talk about?" },
      {
        speaker: "you",
        options: [
          { nl: "Ja, ik wilde het graag hebben over mijn salaris. Ik werk hier nu twee jaar en heb het afgelopen jaar veel nieuwe taken erbij gekregen. Zou het mogelijk zijn om te kijken of mijn salaris daarbij past?", en: "Yes, I wanted to talk about my salary. I've been working here for two years now and have taken on a lot of new tasks over the past year. Would it be possible to look at whether my salary matches that?" },
          { nl: "Ik heb het afgelopen jaar meer verantwoordelijkheid gekregen. Kunnen we kijken naar een aanpassing van mijn salaris?", en: "I've taken on more responsibility this past year. Can we look at adjusting my salary?" },
          { nl: "Mijn takenpakket is flink gegroeid sinds vorig jaar. Is er ruimte om dit te bespreken?", en: "My workload has grown a lot since last year. Is there room to discuss this?" }
        ],
        simple: [
          { nl: "Ik wil praten over mijn salaris. Heeft u tijd deze week?", en: "I want to talk about my salary. Do you have time this week?" },
          { nl: "Ik doe nu meer werk. Kunnen we praten over mijn salaris?", en: "I do more work now. Can we talk about my salary?" }
        ]
      }
    ],
    hints: [
      "loonsverhoging (pay raise)",
      "functioneringsgesprek (performance review)",
      "onderhandelen (to negotiate)"
    ],
    glossary: [
      { nl: "salaris", en: "salary" },
      { nl: "verantwoordelijkheid", en: "responsibility" },
      { nl: "takenpakket", en: "workload/tasks" },
      { nl: "aanpassing", en: "adjustment" },
      { nl: "gegroeid", en: "grown" }
    ]
  },
  {
    topic: "Op het werk",
    situation: { nl: "Je hebt de afgelopen weken veel overuren gemaakt voor een project. Je bespreekt met je manager hoe dit gecompenseerd kan worden.", en: "You've worked a lot of overtime recently for a project. You discuss with your manager how this can be compensated." },
    other: "Manager",
    turns: [
      { speaker: "other", nl: "Ik zag dat je de afgelopen weken flink wat overuren hebt gemaakt voor het project. Hoe gaat het ermee?", en: "I noticed you've worked quite a lot of overtime for the project these past weeks. How's it going?" },
      {
        speaker: "you",
        options: [
          { nl: "Het gaat wel, maar ik ben wel behoorlijk moe geworden van de extra uren. Zou het mogelijk zijn om die uren op een later moment op te nemen als vrije tijd, in plaats van dat ze gewoon verdwijnen?", en: "It's going okay, but I have gotten quite tired from the extra hours. Would it be possible to take those hours as time off later, instead of them just disappearing?" },
          { nl: "De extra uren beginnen op te tellen. Zou ik hiervoor vrije dagen terug kunnen krijgen?", en: "The extra hours are starting to add up. Could I get days off in return for this?" },
          { nl: "Ik heb veel extra tijd in het project gestoken. Kan dit gecompenseerd worden met vrije tijd?", en: "I've put a lot of extra time into the project. Can this be compensated with time off?" }
        ],
        simple: [
          { nl: "Ik heb veel overuren gemaakt. Mag ik die later opnemen als vrije tijd?", en: "I've worked a lot of overtime. Can I take those as time off later?" },
          { nl: "Ik heb veel extra uren gewerkt. Kan ik daarvoor vrije dagen krijgen?", en: "I've worked a lot of extra hours. Can I get days off for that?" }
        ]
      }
    ],
    hints: [
      "verlofuren (leave hours)",
      "balans vinden (find balance)",
      "opnemen (to take (time off))"
    ],
    glossary: [
      { nl: "overuren", en: "overtime" },
      { nl: "vrije tijd", en: "free time/time off" },
      { nl: "gecompenseerd", en: "compensated" },
      { nl: "op te tellen", en: "to add up" },
      { nl: "moe", en: "tired" }
    ]
  },
  {
    topic: "Vriendschap",
    situation: { nl: "Je hebt vorige week ruzie gehad met een goede vriend over een misverstand. Je belt hem om het weer goed te maken.", en: "You had an argument with a good friend last week over a misunderstanding. You call him to make up." },
    other: "Vriend",
    turns: [
      { speaker: "other", nl: "Hé, met mij. Ik had eigenlijk niet verwacht dat je zou bellen na vorige week.", en: "Hey, it's me. I actually hadn't expected you to call after last week." },
      {
        speaker: "you",
        options: [
          { nl: "Ik weet het, maar ik heb er veel over nagedacht en ik denk dat het gewoon een misverstand was. Het spijt me als ik iets verkeerds heb gezegd. Zullen we een keer afspreken om het rustig uit te praten?", en: "I know, but I've thought about it a lot and I think it was just a misunderstanding. I'm sorry if I said something wrong. Shall we meet up sometime to talk it out calmly?" },
          { nl: "Ik heb nagedacht over wat er gebeurd is en het spijt me. Zullen we er samen over praten?", en: "I've thought about what happened and I'm sorry. Shall we talk about it together?" },
          { nl: "Het voelde niet goed om het zo te laten. Kunnen we binnenkort afspreken om het uit te praten?", en: "It didn't feel right to leave it like that. Can we meet up soon to talk it through?" }
        ],
        simple: [
          { nl: "Het spijt me van vorige week. Zullen we praten?", en: "I'm sorry about last week. Shall we talk?" },
          { nl: "Het was een misverstand. Zullen we snel afspreken?", en: "It was a misunderstanding. Shall we meet up soon?" },
          { nl: "Ik denk dat het gewoon een misverstand was. Wil jij ook praten?", en: "I think it was just a misunderstanding. Do you want to talk too?" }
        ]
      }
    ],
    hints: [
      "het goedmaken (to make up)",
      "sorry zeggen (say sorry)",
      "begrip tonen (show understanding)"
    ],
    glossary: [
      { nl: "misverstand", en: "misunderstanding" },
      { nl: "uit te praten", en: "to talk through" },
      { nl: "nagedacht", en: "thought about" },
      { nl: "het spijt me", en: "I'm sorry" },
      { nl: "afspreken", en: "to arrange to meet" }
    ]
  },
  {
    topic: "Familie",
    situation: { nl: "Je zus vraagt of jij een avond kunt oppassen op haar dochtertje.", en: "Your sister asks if you can babysit her daughter for an evening." },
    other: "Zus",
    turns: [
      { speaker: "other", nl: "Ik heb volgende week vrijdag een etentje met collega's, maar ik heb nog niemand voor de oppas. Zou jij die avond misschien kunnen oppassen op Sophie?", en: "I have a dinner with colleagues next Friday, but I don't have anyone for babysitting yet. Could you maybe babysit Sophie that evening?" },
      {
        speaker: "you",
        options: [
          { nl: "Ja, dat wil ik best doen, ze is altijd lief gezelschap. Hoe laat moet ik dan komen, en is er nog iets belangrijks dat ik moet weten over haar avondroutine?", en: "Yes, I'm happy to do that, she's always sweet company. What time should I come then, and is there anything important I should know about her evening routine?" },
          { nl: "Ik pas graag op Sophie die avond. Vertel me gerust wat ik moet weten voordat ze naar bed gaat.", en: "I'm happy to babysit Sophie that evening. Feel free to tell me what I should know before she goes to bed." },
          { nl: "Natuurlijk kan ik oppassen. Stuur me even door hoe laat ik moet zijn.", en: "Of course I can babysit. Just send me what time I should be there." }
        ],
        simple: [
          { nl: "Ja, dat doe ik graag. Hoe laat moet ik komen?", en: "Yes, I'm happy to do that. What time should I come?" },
          { nl: "Natuurlijk pas ik op Sophie. Stuur me de tijd.", en: "Of course I'll babysit Sophie. Send me the time." }
        ]
      }
    ],
    hints: [
      "kinderen op bed leggen (put kids to bed)",
      "verantwoordelijkheid nemen (take responsibility)",
      "een avondje uit (a night out)"
    ],
    glossary: [
      { nl: "oppassen", en: "to babysit" },
      { nl: "etentje", en: "dinner" },
      { nl: "avondroutine", en: "evening routine" },
      { nl: "gezelschap", en: "company" },
      { nl: "naar bed gaat", en: "goes to bed" }
    ]
  },
  {
    topic: "Met de buren",
    situation: { nl: "Je buurvrouw heeft haar been gebroken en kan haar hond even niet uitlaten. Ze vraagt of jij kunt helpen.", en: "Your neighbor has broken her leg and can't walk her dog for a while. She asks if you can help." },
    other: "Buurvrouw",
    turns: [
      { speaker: "other", nl: "Ik heb helaas mijn been gebroken en kan de komende weken niet met mijn hond wandelen. Zou jij hem misschien af en toe kunnen uitlaten? Hij heeft niet veel nodig, gewoon een rondje om het blok.", en: "Unfortunately I've broken my leg and can't walk my dog for the coming weeks. Could you maybe walk him every now and then? He doesn't need much, just a walk around the block." },
      {
        speaker: "you",
        options: [
          { nl: "Wat vervelend voor je, beterschap! Ik doe het met alle plezier, ik hou zelf ook van honden. Zal ik hem dan elke ochtend voor mijn werk even meenemen?", en: "How annoying for you, get well soon! I'd be happy to do it, I love dogs myself too. Shall I take him out every morning before my work then?" },
          { nl: "Vervelend van je been! Ik loop graag met hem, zeg maar welk tijdstip jou uitkomt.", en: "Sorry about your leg! I'm happy to walk him, just tell me what time suits you." },
          { nl: "Beterschap gewenst. Ik kan hem elke dag even meenemen tot je weer kunt lopen.", en: "Get well soon. I can take him out every day until you can walk again." }
        ],
        simple: [
          { nl: "Natuurlijk help ik. Ik laat hem 's ochtends uit.", en: "Of course I'll help. I'll walk him in the morning." },
          { nl: "Ik loop graag met je hond. Beterschap met je been!", en: "I'm happy to walk your dog. Get well soon with your leg!" }
        ]
      }
    ],
    hints: [
      "hond uitlaten (walk the dog)",
      "herstellen (to recover)",
      "op de been (back on your feet)"
    ],
    glossary: [
      { nl: "been gebroken", en: "broken leg" },
      { nl: "uitlaten", en: "to walk (a dog)" },
      { nl: "rondje om het blok", en: "a walk around the block" },
      { nl: "beterschap", en: "get well soon" },
      { nl: "plezier", en: "pleasure" }
    ]
  },
  {
    topic: "Gezondheid & sport",
    situation: { nl: "Je wilt graag beginnen met hardlopen, maar vindt het lastig om het alleen vol te houden. Je vraagt een collega of ze zin heeft om samen te sporten.", en: "You'd like to start running, but find it hard to keep it up alone. You ask a colleague if she'd like to exercise together." },
    other: "Collega",
    turns: [
      { speaker: "other", nl: "Hé, ik zag op je bureau een hardloopschoen liggen. Ben je begonnen met hardlopen?", en: "Hey, I saw a running shoe on your desk. Have you started running?" },
      {
        speaker: "you",
        options: [
          { nl: "Ja, ik ben er net mee begonnen, maar ik merk dat ik het lastig vind om het alleen vol te houden. Heb jij zin om af en toe samen te gaan hardlopen? Dan houden we elkaar een beetje gemotiveerd.", en: "Yes, I've just started, but I notice I find it hard to keep it up alone. Do you feel like going running together sometimes? Then we can keep each other a bit motivated." },
          { nl: "Ik ben net begonnen met hardlopen en zoek gezelschap. Heb jij zin om af en toe mee te doen?", en: "I just started running and I'm looking for company. Do you feel like joining sometimes?" },
          { nl: "Alleen hardlopen vind ik saai. Zullen we samen een vast moment in de week afspreken?", en: "Running alone is boring to me. Shall we agree on a fixed time during the week together?" }
        ],
        simple: [
          { nl: "Zullen we samen gaan hardlopen? Dat is leuker dan alleen.", en: "Shall we go running together? That's more fun than alone." },
          { nl: "Ik hardloop liever met iemand samen. Heb je zin?", en: "I prefer running with someone. Do you feel like it?" }
        ]
      }
    ],
    hints: [
      "een hardloopschema (running schedule)",
      "conditie (fitness/stamina)",
      "elkaar aanmoedigen (encourage each other)"
    ],
    glossary: [
      { nl: "hardloopschoen", en: "running shoe" },
      { nl: "vol te houden", en: "to keep it up" },
      { nl: "gemotiveerd", en: "motivated" },
      { nl: "gezelschap", en: "company" },
      { nl: "saai", en: "boring" }
    ]
  },
  {
    topic: "Gezond eten",
    situation: { nl: "Een collega heeft een heerlijk gerecht meegenomen voor de lunch. Je vraagt naar het recept.", en: "A colleague brought a delicious dish for lunch. You ask about the recipe." },
    other: "Collega",
    turns: [
      { speaker: "other", nl: "Wil je proeven? Ik heb gisteravond deze pastasalade gemaakt, met verse groente uit mijn tuin.", en: "Do you want to try some? I made this pasta salad last night, with fresh vegetables from my garden." },
      {
        speaker: "you",
        options: [
          { nl: "Ja, heel graag, het ziet er heerlijk uit! Zou je mij het recept kunnen geven? Ik kook zelf niet zo vaak met verse groente, dus ik wil dit graag een keer proberen te maken.", en: "Yes, gladly, it looks delicious! Could you give me the recipe? I don't cook with fresh vegetables that often myself, so I'd like to try making this sometime." },
          { nl: "Deze salade ziet er top uit! Zou je me willen vertellen welke ingrediënten je gebruikt hebt?", en: "This salad looks amazing! Would you tell me which ingredients you used?" },
          { nl: "Wat lekker gemaakt, zeg! Mag ik het recept van je overnemen?", en: "What a delicious dish! Can I get the recipe from you?" }
        ],
        simple: [
          { nl: "Dit ziet er lekker uit! Mag ik het recept?", en: "This looks delicious! Can I have the recipe?" },
          { nl: "Wat ruikt dit lekker! Hoe heb je dit gemaakt?", en: "This smells so good! How did you make this?" },
          { nl: "Ik wil dit ook een keer koken. Welke ingrediënten gebruik je?", en: "I'd like to cook this myself sometime. Which ingredients do you use?" }
        ]
      }
    ],
    hints: [
      "op smaak brengen (season to taste)",
      "een gerecht bereiden (prepare a dish)",
      "verse producten (fresh produce)"
    ],
    glossary: [
      { nl: "pastasalade", en: "pasta salad" },
      { nl: "tuin", en: "garden" },
      { nl: "ingrediënten", en: "ingredients" },
      { nl: "proeven", en: "to taste" },
      { nl: "recept", en: "recipe" }
    ]
  },
  {
    topic: "Advies geven",
    situation: { nl: "Je oude telefoon is stuk en je wilt een nieuwe kopen. Je vraagt een vriend die veel van technologie weet om advies.", en: "Your old phone is broken and you want to buy a new one. You ask a friend who knows a lot about technology for advice." },
    other: "Vriend",
    turns: [
      { speaker: "other", nl: "Ik hoorde dat je telefoon kapot is. Wat vervelend! Weet je al wat voor telefoon je wilt kopen?", en: "I heard your phone is broken. How annoying! Do you already know what kind of phone you want to buy?" },
      {
        speaker: "you",
        options: [
          { nl: "Nog niet echt, ik weet eigenlijk niet zo goed waar ik op moet letten. Ik gebruik mijn telefoon vooral voor foto's maken en berichten sturen. Wat zou jij aanraden binnen een redelijk budget?", en: "Not really yet, I don't really know what to look out for. I mainly use my phone for taking photos and sending messages. What would you recommend within a reasonable budget?" },
          { nl: "Ik zoek een telefoon die niet te duur is, maar wel goede foto's maakt. Welk merk zou jij aanraden?", en: "I'm looking for a phone that's not too expensive, but takes good photos. Which brand would you recommend?" },
          { nl: "Een simpele telefoon met een goede batterij is genoeg voor mij. Heb jij een tip binnen mijn budget?", en: "A simple phone with a good battery is enough for me. Do you have a tip within my budget?" }
        ],
        simple: [
          { nl: "Ik gebruik mijn telefoon voor foto's en berichten. Wat is een goede, niet te dure telefoon?", en: "I use my phone for photos and messages. What's a good, not too expensive phone?" },
          { nl: "Mijn telefoon is kapot. Welke telefoon is goed en niet duur?", en: "My phone is broken. Which phone is good and not expensive?" }
        ]
      }
    ],
    hints: [
      "prijs-kwaliteitverhouding (value for money)",
      "opslagruimte (storage space)",
      "tweedehands toestel (second-hand device)"
    ],
    glossary: [
      { nl: "budget", en: "budget" },
      { nl: "merk", en: "brand" },
      { nl: "batterij", en: "battery" },
      { nl: "foto's maken", en: "to take photos" },
      { nl: "berichten", en: "messages" }
    ]
  },
  {
    topic: "Bij de bank",
    situation: { nl: "Je wilt een nieuwe bankrekening openen bij een andere bank. Je gaat naar het kantoor om informatie te vragen.", en: "You want to open a new bank account at a different bank. You go to the office to ask for information." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, waarmee kan ik u helpen?", en: "Good afternoon, how can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik wil graag een rekening bij u openen, maar ik heb eerst nog een paar vragen. Ik wil vooral weten of er maandelijkse kosten aan verbonden zijn, en hoe snel ik een bankpas krijg.", en: "Good afternoon. I'd like to open an account with you, but I have a few questions first. I especially want to know if there are monthly costs attached, and how quickly I get a bank card." },
          { nl: "Ik overweeg een rekening bij jullie te openen. Zijn er kosten verbonden aan het gebruik van de pas?", en: "I'm considering opening an account with you. Are there any costs attached to using the card?" },
          { nl: "Ik wil graag meer weten over jullie rekeningen. Hoe snel kan ik online bankieren gebruiken?", en: "I'd like to know more about your accounts. How quickly can I start using online banking?" }
        ],
        simple: [
          { nl: "Ik wil een rekening openen. Kost dat geld per maand?", en: "I want to open an account. Does that cost money per month?" },
          { nl: "Ik wil een nieuwe bankrekening. Wanneer krijg ik een pas?", en: "I want a new bank account. When do I get a card?" }
        ]
      }
    ],
    hints: [
      "rente (interest)",
      "een spaarrekening (savings account)",
      "afschrijvingen (bank debits/statements)"
    ],
    glossary: [
      { nl: "rekening", en: "account" },
      { nl: "maandelijkse kosten", en: "monthly costs" },
      { nl: "bankpas", en: "bank card" },
      { nl: "online bankieren", en: "online banking" },
      { nl: "overweeg", en: "considering" }
    ]
  },
  {
    topic: "Bij de gemeente",
    situation: { nl: "Je paspoort verloopt binnenkort. Je belt de gemeente om een afspraak te maken voor een nieuw paspoort.", en: "Your passport is expiring soon. You call the municipality to make an appointment for a new passport." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemorgen, met de gemeente. Waarmee kan ik u helpen?", en: "Good morning, municipality speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemorgen. Mijn paspoort verloopt over twee maanden, en ik ga binnenkort op reis. Zou ik een afspraak kunnen maken om een nieuw paspoort aan te vragen, het liefst zo snel mogelijk?", en: "Good morning. My passport expires in two months, and I'm traveling soon. Could I make an appointment to apply for a new passport, preferably as soon as possible?" },
          { nl: "Mijn paspoort loopt binnenkort af, en ik reis snel. Wanneer kan ik langskomen voor een nieuw paspoort?", en: "My passport expires soon, and I'm traveling soon. When can I come by for a new passport?" },
          { nl: "Ik heb een nieuw paspoort nodig voor mijn reis. Is er deze week nog een afspraak mogelijk?", en: "I need a new passport for my trip. Is there an appointment possible this week still?" }
        ],
        simple: [
          { nl: "Mijn paspoort is bijna verlopen. Kan ik snel een nieuwe aanvragen?", en: "My passport is almost expired. Can I apply for a new one soon?" },
          { nl: "Ik heb snel een nieuw paspoort nodig. Wanneer kan ik langskomen?", en: "I need a new passport soon. When can I come by?" }
        ]
      }
    ],
    hints: [
      "identiteitsbewijs (ID document)",
      "pasfoto (passport photo)",
      "geldig tot (valid until)"
    ],
    glossary: [
      { nl: "paspoort", en: "passport" },
      { nl: "verloopt", en: "expires" },
      { nl: "aanvragen", en: "to apply for" },
      { nl: "zo snel mogelijk", en: "as soon as possible" },
      { nl: "reis", en: "trip" }
    ]
  },
  {
    topic: "Nieuwe buurt",
    situation: { nl: "Je wilt weten welke activiteiten er in het buurthuis worden georganiseerd. Je belt om informatie te vragen.", en: "You want to know what activities are organized at the community center. You call to ask for information." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met het buurthuis. Waarmee kan ik u helpen?", en: "Good afternoon, community center speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik ben nieuw in de buurt en ik hoorde dat jullie allerlei activiteiten organiseren. Kunt u mij vertellen wat er zoal te doen is, vooral in het weekend?", en: "Good afternoon. I'm new to the neighborhood and I heard you organize all kinds of activities. Could you tell me what there is to do, especially on weekends?" },
          { nl: "Ik woon hier nog maar kort en wil graag mensen leren kennen. Zijn er activiteiten waar ik aan kan meedoen?", en: "I've only lived here a short while and would like to meet people. Are there activities I could join?" },
          { nl: "Ik hoorde goede dingen over het buurthuis. Wat voor programma bieden jullie zoal aan?", en: "I heard good things about the community center. What kind of program do you offer?" }
        ],
        simple: [
          { nl: "Ik ben nieuw hier. Welke activiteiten zijn er in het weekend?", en: "I'm new here. What activities are there on weekends?" },
          { nl: "Ik woon hier net. Wat kan ik hier allemaal doen?", en: "I just moved here. What can I do here?" }
        ]
      }
    ],
    hints: [
      "deelnemen aan (participate in)",
      "een cursus volgen (take a course)",
      "sociale contacten (social contacts)"
    ],
    glossary: [
      { nl: "activiteiten", en: "activities" },
      { nl: "organiseren", en: "to organize" },
      { nl: "programma", en: "program" },
      { nl: "mensen leren kennen", en: "get to know people" },
      { nl: "nieuw", en: "new" }
    ]
  },
  {
    topic: "Familie",
    situation: { nl: "Je zoon wordt binnenkort zes jaar. Je vraagt je partner om hulp bij het organiseren van zijn verjaardagsfeest.", en: "Your son is turning six soon. You ask your partner for help organizing his birthday party." },
    other: "Partner",
    turns: [
      { speaker: "other", nl: "Hoe gaat het eigenlijk met de plannen voor het verjaardagsfeest van Tim? Weet je al wat je wilt doen?", en: "How are the plans for Tim's birthday party going actually? Do you already know what you want to do?" },
      {
        speaker: "you",
        options: [
          { nl: "Nog niet helemaal, maar ik dacht aan een feestje thuis in de tuin, met een paar spelletjes en een grote taart. Zou jij kunnen helpen met de uitnodigingen en het versieren van de tuin?", en: "Not entirely yet, but I was thinking of a party at home in the garden, with a few games and a big cake. Could you help with the invitations and decorating the garden?" },
          { nl: "Ik denk aan een gezellig feestje met vriendjes in de tuin. Zou jij willen helpen met de versiering?", en: "I'm thinking of a fun party with friends in the garden. Would you want to help with the decorations?" },
          { nl: "Een feestje met spelletjes lijkt me leuk voor Tim. Kun jij de uitnodigingen regelen?", en: "A party with games sounds nice for Tim. Could you arrange the invitations?" }
        ],
        simple: [
          { nl: "Ik wil een feestje in de tuin. Kun je helpen met de uitnodigingen?", en: "I want a party in the garden. Can you help with the invitations?" },
          { nl: "Ik plan een feestje voor Tim. Kun je meehelpen?", en: "I'm planning a party for Tim. Can you help?" }
        ]
      }
    ],
    hints: [
      "ballonnen ophangen (hang balloons)",
      "cadeautjes (small gifts)",
      "een thema kiezen (choose a theme)"
    ],
    glossary: [
      { nl: "verjaardagsfeest", en: "birthday party" },
      { nl: "uitnodigingen", en: "invitations" },
      { nl: "versieren", en: "to decorate" },
      { nl: "taart", en: "cake" },
      { nl: "spelletjes", en: "games" }
    ]
  },
  {
    topic: "Wasmachine kapot",
    situation: { nl: "Je wasmachine doet het niet meer. Je belt een reparatieservice om iemand langs te laten komen.", en: "Your washing machine has stopped working. You call a repair service to have someone come by." },
    other: "Monteur",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met de reparatieservice. Waarmee kan ik u helpen?", en: "Good afternoon, repair service speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Mijn wasmachine start niet meer op, en ik hoor een raar geluid als ik op de knop druk. Zou iemand deze week nog kunnen langskomen om te kijken wat er aan de hand is?", en: "Good afternoon. My washing machine won't start anymore, and I hear a strange noise when I press the button. Could someone come by this week to see what's going on?" },
          { nl: "Mijn wasmachine maakt vreemde geluiden en start niet meer. Kan er snel iemand langskomen?", en: "My washing machine makes strange noises and won't start anymore. Could someone come by soon?" },
          { nl: "Er is iets mis met mijn wasmachine, hij doet het gewoon niet meer. Wanneer zou een monteur kunnen komen?", en: "Something is wrong with my washing machine, it just stopped working. When could a technician come?" }
        ],
        simple: [
          { nl: "Mijn wasmachine is kapot. Kan iemand deze week komen?", en: "My washing machine is broken. Can someone come this week?" },
          { nl: "Mijn wasmachine start niet meer op. Kunt u dit repareren?", en: "My washing machine won't start anymore. Can you repair this?" }
        ]
      }
    ],
    hints: [
      "storing verhelpen (fix a malfunction)",
      "onderdeel vervangen (replace a part)",
      "garantie (warranty)"
    ],
    glossary: [
      { nl: "wasmachine", en: "washing machine" },
      { nl: "raar geluid", en: "strange noise" },
      { nl: "monteur", en: "technician" },
      { nl: "start niet meer op", en: "won't start anymore" },
      { nl: "knop", en: "button" }
    ]
  },
  {
    topic: "Cadeau terugbrengen",
    situation: { nl: "Je hebt van een vriendin een trui gekregen, maar hij past niet goed. Je vraagt of je hem mag omruilen in de winkel waar ze hem gekocht heeft.", en: "You got a sweater from a friend, but it doesn't fit well. You ask if you can exchange it at the store where she bought it." },
    other: "Vriendin",
    turns: [
      { speaker: "other", nl: "Vond je de trui mooi die ik je gegeven heb? Ik was even bang dat de kleur niet zou passen bij jou.", en: "Did you like the sweater I gave you? I was a bit worried the color wouldn't suit you." },
      {
        speaker: "you",
        options: [
          { nl: "De kleur is juist heel mooi, maar hij is helaas net iets te klein. Weet je toevallig in welke winkel je hem gekocht hebt? Dan kan ik kijken of ik hem daar kan omruilen voor een maatje groter.", en: "The color is actually really nice, but unfortunately it's just a bit too small. Do you happen to know which store you bought it at? Then I can see if I can exchange it there for a size bigger." },
          { nl: "De trui is echt mooi, maar past helaas niet. Weet je nog in welke winkel je hem gehaald hebt?", en: "The sweater is really beautiful, but unfortunately doesn't fit. Do you remember which store you got it from?" },
          { nl: "Ik hou van de kleur, maar de maat klopt niet. Kun je me vertellen waar je hem gekocht hebt?", en: "I love the color, but the size isn't right. Can you tell me where you bought it?" }
        ],
        simple: [
          { nl: "De trui is te klein. Weet je waar je hem gekocht hebt?", en: "The sweater is too small. Do you know where you bought it?" },
          { nl: "Deze trui past niet goed. In welke winkel heb je hem gekocht?", en: "This sweater doesn't fit well. Which store did you buy it at?" }
        ]
      }
    ],
    hints: [
      "ruilen zonder bon (exchange without receipt)",
      "een maatje kleiner/groter (a size smaller/bigger)",
      "goed staan (look good on someone)"
    ],
    glossary: [
      { nl: "trui", en: "sweater" },
      { nl: "kleur", en: "color" },
      { nl: "maatje groter", en: "a size bigger" },
      { nl: "past", en: "fits" },
      { nl: "gegeven", en: "given" }
    ]
  },
  {
    topic: "Weer & afspraken",
    situation: { nl: "Er wordt zwaar onweer verwacht op de dag dat je met een vriend zou gaan wandelen. Je stelt voor om de afspraak te verzetten.", en: "Heavy thunderstorms are expected on the day you were going to go for a walk with a friend. You suggest rescheduling." },
    other: "Vriend",
    turns: [
      { speaker: "other", nl: "Heb je zin om morgen die lange wandeling te maken die we gepland hadden? Ik kijk er al naar uit.", en: "Do you feel like doing that long walk we planned tomorrow? I'm already looking forward to it." },
      {
        speaker: "you",
        options: [
          { nl: "Ik ook, maar ik zag net dat er morgen zwaar onweer wordt verwacht, de hele middag. Zullen we het liever verzetten naar zaterdag, als het weer beter is? Dan kunnen we ook langer buiten blijven.", en: "Me too, but I just saw that heavy thunderstorms are expected tomorrow, all afternoon. Shall we reschedule to Saturday instead, when the weather is better? Then we can also stay outside longer." },
          { nl: "Het weerbericht voorspelt morgen onweer. Zullen we de wandeling verzetten naar een droge dag?", en: "The weather forecast predicts a thunderstorm tomorrow. Shall we move the walk to a dry day?" },
          { nl: "Met dit weer lijkt wandelen morgen geen goed idee. Kunnen we het uitstellen tot het weekend?", en: "With this weather, walking tomorrow doesn't seem like a good idea. Can we postpone it to the weekend?" }
        ],
        simple: [
          { nl: "Er komt morgen onweer. Zullen we naar zaterdag verzetten?", en: "There's a thunderstorm coming tomorrow. Shall we move it to Saturday?" },
          { nl: "Het weer wordt slecht morgen. Kunnen we een andere dag wandelen?", en: "The weather will be bad tomorrow. Can we walk on a different day?" }
        ]
      }
    ],
    hints: [
      "stormachtig (stormy)",
      "buiten actief zijn (be active outside)",
      "een andere dag prikken (pick another day)"
    ],
    glossary: [
      { nl: "onweer", en: "thunderstorm" },
      { nl: "weerbericht", en: "weather forecast" },
      { nl: "verzetten", en: "to reschedule" },
      { nl: "droge dag", en: "dry day" },
      { nl: "uitstellen", en: "to postpone" }
    ]
  },
  {
    topic: "Autopech",
    situation: { nl: "Je auto slaat af op de snelweg en start niet meer. Je belt de wegenwacht om hulp.", en: "Your car stalls on the highway and won't start again. You call roadside assistance for help." },
    other: "Wegenwacht",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met de wegenwacht. Waar bevindt u zich, en wat is het probleem?", en: "Good afternoon, roadside assistance speaking. Where are you located, and what's the problem?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik sta op de snelweg net na afslag twaalf, en mijn auto start opeens niet meer. Ik heb de motorkap al even geopend, maar ik zie zelf niets vreemds. Hoe lang duurt het ongeveer voordat er iemand is?", en: "Good afternoon. I'm on the highway just after exit twelve, and my car suddenly won't start anymore. I've already opened the hood, but I don't see anything strange myself. How long does it take roughly before someone arrives?" },
          { nl: "Mijn auto weigert dienst midden op de snelweg. Kunt u snel iemand sturen?", en: "My car refuses to work in the middle of the highway. Can you send someone quickly?" },
          { nl: "Ik sta stil met autopech op de snelweg. Hoe snel kan er hulp zijn?", en: "I'm stuck with car trouble on the highway. How soon can help arrive?" }
        ],
        simple: [
          { nl: "Mijn auto start niet. Hoe lang duurt het voor er hulp komt?", en: "My car won't start. How long until help arrives?" },
          { nl: "Mijn auto doet het niet meer. Kunt u snel komen?", en: "My car has stopped working. Can you come quickly?" },
          { nl: "Ik sta vast op de snelweg. Komt er snel iemand?", en: "I'm stuck on the highway. Is someone coming soon?" }
        ]
      }
    ],
    hints: [
      "accu leeg (dead battery)",
      "pech onderweg (breakdown on the way)",
      "sleepwagen (tow truck)"
    ],
    glossary: [
      { nl: "motorkap", en: "hood (of a car)" },
      { nl: "afslag", en: "exit (highway)" },
      { nl: "snelweg", en: "highway" },
      { nl: "wegenwacht", en: "roadside assistance" },
      { nl: "slaat af", en: "stalls" }
    ]
  },
  {
    topic: "Rijschool",
    situation: { nl: "Je wilt je rijbewijs gaan halen. Je belt een rijschool om te vragen naar de mogelijkheden.", en: "You want to get your driver's license. You call a driving school to ask about the options." },
    other: "Rijschool",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met rijschool Van Dijk. Waarmee kan ik u helpen?", en: "Good afternoon, Van Dijk driving school speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik wil graag mijn rijbewijs gaan halen, maar ik heb nog nooit achter het stuur gezeten. Hoeveel lessen heb ik ongeveer nodig, denkt u, en kan ik ergens deze maand nog beginnen?", en: "Good afternoon. I'd like to get my driver's license, but I've never sat behind the wheel before. How many lessons do you think I'd need roughly, and could I start sometime this month still?" },
          { nl: "Ik wil graag leren autorijden, als complete beginner. Wat kost een lespakket ongeveer?", en: "I'd like to learn to drive, as a complete beginner. What does a lesson package cost roughly?" },
          { nl: "Ik heb nog nooit gereden en wil starten met lessen. Is er deze maand nog ruimte?", en: "I've never driven before and want to start with lessons. Is there room this month still?" }
        ],
        simple: [
          { nl: "Ik wil mijn rijbewijs halen. Hoeveel lessen heb ik nodig?", en: "I want to get my driver's license. How many lessons do I need?" },
          { nl: "Ik heb nog nooit gereden. Kan ik bij u lessen nemen?", en: "I've never driven before. Can I take lessons with you?" }
        ]
      }
    ],
    hints: [
      "theorie-examen (theory exam)",
      "rijvaardigheid (driving skill)",
      "een rijles inplannen (schedule a driving lesson)"
    ],
    glossary: [
      { nl: "rijbewijs", en: "driver's license" },
      { nl: "stuur", en: "steering wheel" },
      { nl: "lespakket", en: "lesson package" },
      { nl: "lessen", en: "lessons" },
      { nl: "beginner", en: "beginner" }
    ]
  },
  {
    topic: "Sollicitatiegesprek",
    situation: { nl: "Je hebt volgende week een sollicitatiegesprek voor een nieuwe baan. Je vraagt een vriend die hier ervaring mee heeft om advies.", en: "You have a job interview next week for a new job. You ask a friend with experience for advice." },
    other: "Vriend",
    turns: [
      { speaker: "other", nl: "Ik hoorde dat je volgende week een sollicitatiegesprek hebt. Hoe voel je je erbij? Ben je een beetje zenuwachtig?", en: "I heard you have a job interview next week. How are you feeling about it? Are you a bit nervous?" },
      {
        speaker: "you",
        options: [
          { nl: "Best wel eerlijk gezegd, het is alweer een tijdje geleden dat ik heb gesolliciteerd. Heb jij nog tips voor mij, aangezien jij hier veel ervaring mee hebt? Ik wil vooral weten hoe ik het beste kan reageren op lastige vragen.", en: "Quite honestly, yes, it's been a while since I last applied for a job. Do you have any tips for me, since you have a lot of experience with this? I especially want to know how best to respond to difficult questions." },
          { nl: "Ik heb al een tijd niet gesolliciteerd en ben er wat onzeker over. Heb je advies over hoe ik overkom?", en: "I haven't applied for a job in a while and feel a bit unsure about it. Do you have advice on how I come across?" },
          { nl: "Het is lang geleden dat ik een gesprek had. Wat vind jij het belangrijkste om te laten zien?", en: "It's been a long time since I had an interview. What do you think is most important to show?" }
        ],
        simple: [
          { nl: "Ik ben een beetje zenuwachtig. Heb je tips voor het gesprek?", en: "I'm a bit nervous. Do you have tips for the interview?" },
          { nl: "Ik heb volgende week een sollicitatiegesprek. Heb je advies voor mij?", en: "I have a job interview next week. Do you have advice for me?" }
        ]
      }
    ],
    hints: [
      "zelfverzekerd overkomen (come across confident)",
      "cv (resume/CV)",
      "sterke punten (strong points)"
    ],
    glossary: [
      { nl: "sollicitatiegesprek", en: "job interview" },
      { nl: "zenuwachtig", en: "nervous" },
      { nl: "lastige vragen", en: "difficult questions" },
      { nl: "overkom", en: "come across" },
      { nl: "ervaring", en: "experience" }
    ]
  },
  {
    topic: "Verhuisbedrijf",
    situation: { nl: "Je gaat binnenkort verhuizen naar een groter huis. Je belt een verhuisbedrijf om een offerte te vragen.", en: "You're moving to a bigger house soon. You call a moving company to ask for a quote." },
    other: "Verhuisbedrijf",
    turns: [
      { speaker: "other", nl: "Goedemorgen, met verhuisbedrijf Snel. Waarmee kan ik u helpen?", en: "Good morning, Snel moving company speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemorgen. Ik ga over twee weken verhuizen naar een groter huis, en ik zoek een verhuisbedrijf dat kan helpen met de grote meubels. Zou u langs kunnen komen om een offerte te maken, of kan dat ook via de telefoon?", en: "Good morning. I'm moving to a bigger house in two weeks, and I'm looking for a moving company that can help with the big furniture. Could you come by to make a quote, or can that also be done over the phone?" },
          { nl: "Ik verhuis binnenkort en heb hulp nodig met de zware spullen. Kunt u een prijsopgave sturen?", en: "I'm moving soon and need help with the heavy items. Could you send a price quote?" },
          { nl: "Voor mijn verhuizing zoek ik professionele hulp. Wanneer kunt u langskomen voor een offerte?", en: "For my move I'm looking for professional help. When could you come by for a quote?" }
        ],
        simple: [
          { nl: "Ik ga verhuizen. Kunt u een offerte maken?", en: "I'm moving. Can you make a quote?" },
          { nl: "Ik ga binnenkort verhuizen. Wat kost uw hulp?", en: "I'm moving soon. What does your help cost?" }
        ]
      }
    ],
    hints: [
      "verhuisdatum (moving date)",
      "inpakmateriaal (packing material)",
      "transport regelen (arrange transport)"
    ],
    glossary: [
      { nl: "verhuisbedrijf", en: "moving company" },
      { nl: "offerte", en: "quote" },
      { nl: "meubels", en: "furniture" },
      { nl: "prijsopgave", en: "price quote" },
      { nl: "zware", en: "heavy" }
    ]
  },
  {
    topic: "Kinderopvang",
    situation: { nl: "Je gaat binnenkort weer werken en zoekt kinderopvang voor je zoontje. Je belt een kinderdagverblijf om informatie te vragen.", en: "You're going back to work soon and are looking for childcare for your son. You call a daycare center for information." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met kinderdagverblijf De Regenboog. Waarmee kan ik u helpen?", en: "Good afternoon, De Regenboog daycare speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik ga over een maand weer werken en zoek opvang voor mijn zoontje van twee jaar. Heeft u nog plek beschikbaar, en hoe werkt de wachtlijst als dat niet zo is?", en: "Good afternoon. I'm going back to work in a month and am looking for care for my two-year-old son. Do you still have room available, and how does the waiting list work if not?" },
          { nl: "Ik zoek binnenkort opvang voor mijn kind. Is er plek beschikbaar op korte termijn?", en: "I'm looking for childcare soon for my child. Is there room available on short notice?" },
          { nl: "Mijn zoontje heeft opvang nodig zodra ik weer ga werken. Kan ik een rondleiding krijgen?", en: "My son will need care once I'm back at work. Could I get a tour?" }
        ],
        simple: [
          { nl: "Ik zoek opvang voor mijn zoontje. Heeft u nog plek?", en: "I'm looking for care for my son. Do you have room?" },
          { nl: "Ik ga weer werken. Ik zoek opvang voor mijn kind.", en: "I'm going back to work. I'm looking for childcare for my child." }
        ]
      }
    ],
    hints: [
      "aanmelden (to register)",
      "openingstijden (opening hours)",
      "groepsgrootte (group size)"
    ],
    glossary: [
      { nl: "kinderdagverblijf", en: "daycare center" },
      { nl: "wachtlijst", en: "waiting list" },
      { nl: "opvang", en: "childcare" },
      { nl: "rondleiding", en: "tour" },
      { nl: "beschikbaar", en: "available" }
    ]
  },
  {
    topic: "Met de buren",
    situation: { nl: "De schutting tussen jouw tuin en die van de buurman is kapot gewaaid. Je bespreekt met hem wie dit gaat repareren.", en: "The fence between your garden and your neighbor's has blown over. You discuss with him who will fix it." },
    other: "Buurman",
    turns: [
      { speaker: "other", nl: "Heb je gezien dat de schutting tussen onze tuinen kapot is gewaaid? Volgens mij was het de storm van afgelopen week.", en: "Did you see that the fence between our gardens blew over? I think it was the storm from last week." },
      {
        speaker: "you",
        options: [
          { nl: "Ja, ik zag het gisteren al. Zullen we samen kijken hoe we dit het beste kunnen oplossen? Ik dacht dat we misschien de kosten kunnen delen, aangezien de schutting van ons allebei is.", en: "Yes, I saw it yesterday already. Shall we look together at how we can best solve this? I thought maybe we could split the costs, since the fence belongs to both of us." },
          { nl: "De schutting is helaas beschadigd door de storm. Zullen we samen een oplossing zoeken?", en: "The fence unfortunately got damaged by the storm. Shall we look for a solution together?" },
          { nl: "Het hek tussen onze tuinen is stuk. Kunnen we de reparatie samen regelen?", en: "The fence between our gardens is broken. Can we arrange the repair together?" }
        ],
        simple: [
          { nl: "De schutting is kapot. Zullen we de kosten samen betalen?", en: "The fence is broken. Shall we split the cost together?" },
          { nl: "Het hek is stuk door de storm. Zullen we dit samen oplossen?", en: "The fence is broken because of the storm. Shall we solve this together?" }
        ]
      }
    ],
    hints: [
      "een vakman inhuren (hire a professional)",
      "de helft betalen (pay half)",
      "schade melden (report damage)"
    ],
    glossary: [
      { nl: "schutting", en: "fence" },
      { nl: "storm", en: "storm" },
      { nl: "beschadigd", en: "damaged" },
      { nl: "kosten", en: "costs" },
      { nl: "delen", en: "to share" }
    ]
  },
  {
    topic: "Fitnessabonnement",
    situation: { nl: "Je wilt je abonnement bij de sportschool opzeggen omdat je gaat verhuizen. Je belt de klantenservice.", en: "You want to cancel your gym membership because you're moving. You call customer service." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met de klantenservice van FitClub. Waarmee kan ik u helpen?", en: "Good afternoon, FitClub customer service speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik ga volgende maand verhuizen naar een andere stad, en ik wil daarom mijn abonnement opzeggen. Hoe lang van tevoren moet ik dit doorgeven, en zijn er nog kosten aan verbonden?", en: "Good afternoon. I'm moving to another city next month, and I want to cancel my membership because of that. How far in advance do I need to report this, and are there any costs attached?" },
          { nl: "Ik verhuis binnenkort naar een andere stad. Kan ik mijn lidmaatschap op tijd stopzetten?", en: "I'm moving to another city soon. Can I cancel my membership in time?" },
          { nl: "Door mijn verhuizing wil ik het abonnement beëindigen. Wat zijn de voorwaarden hiervoor?", en: "Because of my move I want to end the membership. What are the conditions for that?" }
        ],
        simple: [
          { nl: "Ik ga verhuizen. Ik wil mijn abonnement opzeggen.", en: "I'm moving. I want to cancel my membership." },
          { nl: "Ik verhuis naar een andere stad. Kan ik stoppen met mijn abonnement?", en: "I'm moving to another city. Can I stop my membership?" }
        ]
      }
    ],
    hints: [
      "opzegtermijn (notice period)",
      "contract beëindigen (end a contract)",
      "bevestiging ontvangen (receive confirmation)"
    ],
    glossary: [
      { nl: "abonnement", en: "membership/subscription" },
      { nl: "opzeggen", en: "to cancel" },
      { nl: "voorwaarden", en: "conditions" },
      { nl: "lidmaatschap", en: "membership" },
      { nl: "verhuizen", en: "to move house" }
    ]
  },
  {
    topic: "Energierekening",
    situation: { nl: "Je energierekening is de laatste maanden flink gestegen. Je belt je energieleverancier om te vragen waarom.", en: "Your energy bill has risen significantly in recent months. You call your energy provider to ask why." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met de klantenservice. Waarmee kan ik u helpen?", en: "Good afternoon, customer service speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik zag dat mijn energierekening de laatste paar maanden flink gestegen is, terwijl ik niet meer ben gaan gebruiken. Zou u kunnen uitleggen waar dat door komt, en kan ik mijn maandbedrag laten aanpassen?", en: "Good afternoon. I noticed my energy bill has risen significantly in the past few months, while I haven't started using more. Could you explain what's causing that, and can I have my monthly amount adjusted?" },
          { nl: "Mijn maandelijkse rekening is flink omhooggegaan. Kunt u uitleggen wat de reden is?", en: "My monthly bill has gone up quite a lot. Could you explain the reason?" },
          { nl: "Ik betaal nu veel meer dan vorig jaar. Kan het bedrag opnieuw berekend worden?", en: "I'm now paying much more than last year. Can the amount be recalculated?" }
        ],
        simple: [
          { nl: "Mijn rekening is hoger geworden. Waarom is dat, en kunt u het aanpassen?", en: "My bill has gone up. Why is that, and can you adjust it?" },
          { nl: "Ik betaal nu veel meer. Kunt u uitleggen waarom?", en: "I'm now paying much more. Can you explain why?" }
        ]
      }
    ],
    hints: [
      "energieverbruik (energy usage)",
      "voorschotbedrag (advance payment)",
      "meterstand doorgeven (submit meter reading)"
    ],
    glossary: [
      { nl: "energierekening", en: "energy bill" },
      { nl: "gestegen", en: "risen" },
      { nl: "maandbedrag", en: "monthly amount" },
      { nl: "opnieuw berekend", en: "recalculated" },
      { nl: "gebruiken", en: "to use" }
    ]
  },
  {
    topic: "Pakket kwijt",
    situation: { nl: "Je hebt online iets besteld, maar het pakket is nooit aangekomen. Je belt de klantenservice van de bezorgdienst.", en: "You ordered something online, but the package never arrived. You call the delivery service's customer service." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met de klantenservice. Waarmee kan ik u helpen?", en: "Good afternoon, customer service speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Volgens de tracking is mijn pakket vorige week bezorgd, maar ik heb het nooit ontvangen. Zou u kunnen uitzoeken wat er is gebeurd, en wat de mogelijkheden zijn als het pakket echt kwijt is?", en: "Good afternoon. According to the tracking, my package was delivered last week, but I never received it. Could you find out what happened, and what the options are if the package is truly lost?" },
          { nl: "Mijn bestelling staat als bezorgd, maar ik heb niets ontvangen. Kunt u dit navragen?", en: "My order shows as delivered, but I haven't received anything. Could you look into this?" },
          { nl: "Er is iets misgegaan met de levering van mijn pakket. Wat zijn de vervolgstappen?", en: "Something went wrong with the delivery of my package. What are the next steps?" }
        ],
        simple: [
          { nl: "Mijn pakket is niet aangekomen. Kunt u dit uitzoeken?", en: "My package hasn't arrived. Can you look into this?" },
          { nl: "Ik heb mijn pakket nooit gekregen. Wat kunt u doen?", en: "I never received my package. What can you do?" }
        ]
      }
    ],
    hints: [
      "zoekraken (to get lost in transit)",
      "schadevergoeding (compensation)",
      "bezorgbewijs (proof of delivery)"
    ],
    glossary: [
      { nl: "tracking", en: "tracking" },
      { nl: "bezorgd", en: "delivered" },
      { nl: "ontvangen", en: "received" },
      { nl: "vervolgstappen", en: "next steps" },
      { nl: "navragen", en: "to look into/inquire" }
    ]
  },
  {
    topic: "Nederlands leren",
    situation: { nl: "Je hebt je taalcursus bijna afgerond. Je vraagt de docent naar het examen en het certificaat.", en: "You've almost finished your language course. You ask the teacher about the exam and the certificate." },
    other: "Docent",
    turns: [
      { speaker: "other", nl: "We zijn bijna aan het einde van de cursus. Heb je nog vragen over de laatste weken, of over het examen?", en: "We're almost at the end of the course. Do you have any questions about the last few weeks, or about the exam?" },
      {
        speaker: "you",
        options: [
          { nl: "Ja, eigenlijk wel. Ik wilde weten hoe het examen er precies uitziet, en of ik daarna automatisch een certificaat krijg. Moet ik me daar apart voor aanmelden?", en: "Yes, actually I do. I wanted to know exactly what the exam looks like, and whether I automatically get a certificate afterwards. Do I need to sign up separately for that?" },
          { nl: "Ik ben benieuwd naar de opzet van het examen. Krijgen we ook een oefenversie vooraf?", en: "I'm curious about the setup of the exam. Do we also get a practice version beforehand?" },
          { nl: "Kunt u vertellen wat er precies getoetst wordt? En wanneer ontvangen we de uitslag?", en: "Could you tell me exactly what's being tested? And when do we get the results?" }
        ],
        simple: [
          { nl: "Hoe ziet het examen eruit? Krijg ik daarna een certificaat?", en: "What does the exam look like? Do I get a certificate afterwards?" },
          { nl: "Ik heb een vraag over het examen. Wanneer is het?", en: "I have a question about the exam. When is it?" }
        ]
      }
    ],
    hints: [
      "oefenexamen (practice exam)",
      "slagen voor (pass an exam)",
      "diploma behalen (obtain a diploma)"
    ],
    glossary: [
      { nl: "examen", en: "exam" },
      { nl: "certificaat", en: "certificate" },
      { nl: "aanmelden", en: "to sign up" },
      { nl: "uitslag", en: "result" },
      { nl: "getoetst", en: "tested" }
    ]
  },
  {
    topic: "Sociale afspraken",
    situation: { nl: "Een vriend heeft je vorige week geholpen met verhuizen. Je belt hem om te bedanken en stelt voor om samen te eten.", en: "A friend helped you move last week. You call him to thank him and suggest having dinner together." },
    other: "Vriend",
    turns: [
      { speaker: "other", nl: "Hoi! Hoe bevalt het nieuwe huis inmiddels? Is alles al een beetje op zijn plek?", en: "Hi! How do you like the new house so far? Is everything a bit in place already?" },
      {
        speaker: "you",
        options: [
          { nl: "Het bevalt heel goed, dank je wel! Ik wilde je trouwens nog bedanken voor je hulp met verhuizen vorige week, dat heeft me echt veel geholpen. Zullen we binnenkort samen eten, dan trakteer ik als bedankje?", en: "I like it a lot, thank you! By the way, I wanted to thank you again for your help moving last week, that really helped me a lot. Shall we have dinner together soon, my treat as a thank you?" },
          { nl: "Je hulp met verhuizen was echt fijn, dank je wel daarvoor. Zullen we snel iets afspreken om dat te vieren?", en: "Your help with moving was really nice, thank you for that. Shall we arrange something soon to celebrate?" },
          { nl: "Ik wilde je nogmaals bedanken voor afgelopen week. Heb je zin om samen iets te gaan drinken?", en: "I wanted to thank you again for last week. Do you feel like getting a drink together?" }
        ],
        simple: [
          { nl: "Dank je voor je hulp! Zullen we samen eten?", en: "Thank you for your help! Shall we have dinner together?" },
          { nl: "Bedankt voor je hulp met verhuizen! Ik trakteer op eten.", en: "Thanks for your help moving! I'll treat you to dinner." },
          { nl: "Wat fijn dat je hebt geholpen! Zullen we snel iets drinken?", en: "How nice that you helped! Shall we get a drink soon?" }
        ]
      }
    ],
    hints: [
      "dankbaar zijn (be grateful)",
      "iets terugdoen (return the favor)",
      "een etentje aanbieden (offer a dinner)"
    ],
    glossary: [
      { nl: "bedanken", en: "to thank" },
      { nl: "trakteer", en: "treat (someone)" },
      { nl: "op zijn plek", en: "in place" },
      { nl: "nogmaals", en: "again" },
      { nl: "drinken", en: "to drink" }
    ]
  },
  {
    topic: "Bouwoverlast",
    situation: { nl: "Er wordt al weken vroeg in de ochtend hard geboord bij de verbouwing naast je huis. Je spreekt de aannemer erop aan.", en: "There's been loud drilling early in the morning for weeks from the renovation next door. You address it with the contractor." },
    other: "Aannemer",
    turns: [
      { speaker: "other", nl: "Goedemorgen, kan ik iets voor u doen?", en: "Good morning, can I do something for you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemorgen. Ik wilde u even aanspreken op het geluid van de verbouwing. Jullie beginnen vaak al om zeven uur met boren, en daar word ik elke keer wakker van. Zou het mogelijk zijn om pas na acht uur te beginnen?", en: "Good morning. I wanted to talk to you about the noise from the renovation. You often start drilling as early as seven o'clock, and it wakes me up every time. Would it be possible to start only after eight o'clock?" },
          { nl: "Het vroege boren stoort mijn nachtrust. Zou het team iets later kunnen beginnen?", en: "The early drilling disturbs my sleep. Could the team maybe start a bit later?" },
          { nl: "Ik word elke ochtend wakker van het lawaai. Is een latere starttijd mogelijk?", en: "I wake up to the noise every morning. Is a later start time possible?" }
        ],
        simple: [
          { nl: "Het boren is erg vroeg. Kunt u later beginnen?", en: "The drilling is very early. Can you start later?" },
          { nl: "Ik word wakker van het lawaai. Kunt u iets later starten?", en: "I wake up from the noise. Could you start a bit later?" }
        ]
      }
    ],
    hints: [
      "geluidsoverlast (noise nuisance)",
      "werktijden aanpassen (adjust working hours)",
      "begrip vragen (ask for understanding)"
    ],
    glossary: [
      { nl: "verbouwing", en: "renovation" },
      { nl: "boren", en: "to drill" },
      { nl: "wakker", en: "awake" },
      { nl: "aanspreken", en: "to address/talk to" },
      { nl: "nachtrust", en: "night's sleep" }
    ]
  },
  {
    topic: "Museum",
    situation: { nl: "Je wilt met een groep vrienden een rondleiding boeken bij een museum. Je belt om de mogelijkheden te bespreken.", en: "You want to book a guided tour at a museum with a group of friends. You call to discuss the options." },
    other: "Medewerker",
    turns: [
      { speaker: "other", nl: "Goedemiddag, met het museum. Waarmee kan ik u helpen?", en: "Good afternoon, museum speaking. How can I help you?" },
      {
        speaker: "you",
        options: [
          { nl: "Goedemiddag. Ik wil graag met een groep van acht vrienden een rondleiding boeken, het liefst op een zaterdag. Kunt u mij vertellen hoe lang een rondleiding duurt, en of we van tevoren moeten reserveren?", en: "Good afternoon. I'd like to book a guided tour with a group of eight friends, preferably on a Saturday. Could you tell me how long a tour takes, and whether we need to reserve in advance?" },
          { nl: "We willen graag met een groep een rondleiding volgen. Is reserveren verplicht voor grotere groepen?", en: "We'd like to follow a guided tour with a group. Is reserving mandatory for bigger groups?" },
          { nl: "Voor acht personen zoeken we een gezamenlijke tour. Wat zijn de tijden in het weekend?", en: "For eight people we're looking for a joint tour. What are the times on the weekend?" }
        ],
        simple: [
          { nl: "We zijn met acht vrienden. Kunnen we een rondleiding boeken?", en: "We're with eight friends. Can we book a guided tour?" },
          { nl: "We willen graag een rondleiding met een groep. Kan dat in het weekend?", en: "We'd like a guided tour with a group. Is that possible on the weekend?" }
        ]
      }
    ],
    hints: [
      "toegangsprijs (admission price)",
      "gids (tour guide)",
      "openingstijden (opening hours)"
    ],
    glossary: [
      { nl: "rondleiding", en: "guided tour" },
      { nl: "reserveren", en: "to reserve" },
      { nl: "groep", en: "group" },
      { nl: "tour", en: "tour" },
      { nl: "verplicht", en: "mandatory" }
    ]
  },
  {
    topic: "Sociale afspraken",
    situation: { nl: "Je favoriete band komt binnenkort optreden. Je vraagt een vriendin of ze mee wil naar het concert.", en: "Your favorite band is performing soon. You ask a friend if she wants to come to the concert with you." },
    other: "Vriendin",
    turns: [
      { speaker: "other", nl: "Hé, heb je al iets leuks gepland voor volgende maand?", en: "Hey, do you already have something fun planned for next month?" },
      {
        speaker: "you",
        options: [
          { nl: "Nog niet echt, maar ik zag dat mijn favoriete band binnenkort optreedt in de stad. Heb je zin om samen te gaan? De kaartjes zijn niet heel duur, en het belooft een geweldige show te worden.", en: "Not really yet, but I saw that my favorite band is performing in the city soon. Do you feel like going together? The tickets aren't very expensive, and it promises to be a great show." },
          { nl: "Er is binnenkort een concert van een band die ik erg leuk vind. Heb je zin om mee te gaan?", en: "There's a concert coming up soon from a band I really like. Do you feel like coming along?" },
          { nl: "Ik overweeg kaartjes te kopen voor een concert. Lijkt het je wat om samen te gaan?", en: "I'm considering buying tickets for a concert. Does it sound like something for you to go together?" }
        ],
        simple: [
          { nl: "Mijn favoriete band speelt binnenkort. Ga je mee?", en: "My favorite band is playing soon. Will you come with me?" },
          { nl: "Er is binnenkort een leuk concert. Heb je zin om mee te gaan?", en: "There's a nice concert coming up soon. Do you feel like coming along?" },
          { nl: "De kaartjes zijn niet duur. Zullen we samen gaan?", en: "The tickets aren't expensive. Shall we go together?" }
        ]
      }
    ],
    hints: [
      "een optreden bijwonen (attend a performance)",
      "kaartjes bemachtigen (get hold of tickets)",
      "live muziek (live music)"
    ],
    glossary: [
      { nl: "optreedt", en: "performs" },
      { nl: "kaartjes", en: "tickets" },
      { nl: "show", en: "show" },
      { nl: "concert", en: "concert" },
      { nl: "band", en: "band" }
    ]
  },
  {
    topic: "Tweedehands meubels",
    situation: { nl: "Je hebt online een tweedehands bank gezien die je graag wilt kopen. Je belt de verkoper om een afspraak te maken om hem op te halen.", en: "You saw a second-hand couch online that you'd like to buy. You call the seller to arrange picking it up." },
    other: "Verkoper",
    turns: [
      { speaker: "other", nl: "Hallo, met wie spreek ik?", en: "Hello, who am I speaking with?" },
      {
        speaker: "you",
        options: [
          { nl: "Hallo, u spreekt met mij over de bank die u online te koop heeft staan. Ik ben erg geïnteresseerd. Is hij nog beschikbaar, en zou ik hem dit weekend kunnen komen ophalen?", en: "Hello, I'm calling about the couch you have for sale online. I'm very interested. Is it still available, and could I come pick it up this weekend?" },
          { nl: "Ik heb interesse in de bank die u aanbiedt. Is hij nog te koop, en kan ik hem komen bekijken?", en: "I'm interested in the couch you're offering. Is it still for sale, and can I come see it?" },
          { nl: "De bank op uw advertentie spreekt me aan. Zou ik hem dit weekend kunnen ophalen?", en: "The couch in your ad appeals to me. Could I pick it up this weekend?" }
        ],
        simple: [
          { nl: "Ik wil de bank kopen. Kan ik hem dit weekend ophalen?", en: "I want to buy the couch. Can I pick it up this weekend?" },
          { nl: "Is de bank nog te koop? Ik wil hem graag ophalen.", en: "Is the couch still for sale? I'd like to pick it up." }
        ]
      }
    ],
    hints: [
      "staat van het meubel (condition of the furniture)",
      "afhalen (to pick up)",
      "prijs onderhandelen (negotiate price)"
    ],
    glossary: [
      { nl: "bank", en: "couch" },
      { nl: "beschikbaar", en: "available" },
      { nl: "ophalen", en: "to pick up" },
      { nl: "advertentie", en: "listing/ad" },
      { nl: "geïnteresseerd", en: "interested" }
    ]
  }
];
