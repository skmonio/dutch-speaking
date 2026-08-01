const SCENARIOS = [
  {
    topic: "Gezondheid & sport",
    situation: {
      nl: "Je zit met een vriend te praten. Hij vertelt dat hij graag wil sporten, maar dat de sportschool hem te duur is. Hij vraagt jou om advies.",
      en: "You're sitting talking with a friend. He tells you he'd like to exercise, but that the gym is too expensive for him. He asks you for advice."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Mijn vrienden gaan naar de sportschool, maar ik vind dat te duur. Ik wil op een andere manier fit worden, zonder geld uit te geven. Wat zou jij aanbevelen?",
        en: "My friends go to the gym, but I think that's too expensive. I want to get fit in another way, without spending money. What would you recommend?"
      },
      {
        speaker: "you",
        nl: "Je kunt altijd een lange wandeling maken of gaan hardlopen. Je kunt ook met de fiets gaan in plaats van met de auto. En neem de trap in plaats van de lift, dat helpt ook al.",
        en: "You can always go for a long walk or go running. You could also go by bike instead of by car. And take the stairs instead of the elevator, that already helps too."
      }
    ]
  },
  {
    topic: "Bij de huisarts",
    situation: {
      nl: "Je hebt morgen een afspraak bij de huisarts, maar je kunt niet komen. Je belt de praktijk om de afspraak te verzetten.",
      en: "You have an appointment at the doctor's tomorrow, but you can't come. You call the practice to reschedule the appointment."
    },
    other: "Assistente",
    turns: [
      {
        speaker: "other",
        nl: "Goedemorgen, met de huisartsenpraktijk. Ik zie dat u morgen om tien uur een afspraak heeft voor een controle. Waar kan ik u mee helpen?",
        en: "Good morning, doctor's office speaking. I see you have an appointment tomorrow at ten o'clock for a check-up. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemorgen. Ik kan morgen helaas niet komen, want ik heb net een dringende vergadering op mijn werk gekregen. Zou het mogelijk zijn om de afspraak te verzetten naar donderdagmiddag? Anders zoek ik gewoon een moment dat u het beste uitkomt.",
        en: "Good morning. Unfortunately I can't come tomorrow, because I've just been given an urgent meeting at work. Would it be possible to move the appointment to Thursday afternoon? Otherwise I'll just find a time that suits you best."
      },
      {
        speaker: "other",
        nl: "Dat is geen probleem. Ik kan u donderdag om twee uur inplannen. Komt dat u uit?",
        en: "That's no problem. I can schedule you for Thursday at two o'clock. Does that suit you?"
      },
      {
        speaker: "you",
        nl: "Ja, dat komt goed uit. Dank u wel voor uw hulp.",
        en: "Yes, that works well. Thank you for your help.",
        quick: true
      }
    ]
  },
  {
    topic: "Op het werk",
    situation: {
      nl: "Je zus gaat trouwen op een dag dat jij moet werken. Je gaat naar je manager om te vragen of je die dag vrij mag nemen.",
      en: "Your sister is getting married on a day when you have to work. You go to your manager to ask if you can take that day off."
    },
    other: "Manager",
    turns: [
      {
        speaker: "other",
        nl: "Hoi, je wilde me even spreken? Ik heb tien minuten, dus vertel maar rustig waar het over gaat.",
        en: "Hi, you wanted to talk to me? I have ten minutes, so just tell me calmly what it's about."
      },
      {
        speaker: "you",
        nl: "Ja, ik wilde iets vragen over volgende week. Mijn zus gaat trouwen op vrijdag en ik zou daar heel graag bij willen zijn. Ik weet dat het kort van tevoren is, maar zou ik die dag vrij mogen nemen? Ik kan mijn werk deze week ook extra vroeg oppakken, zodat alles op tijd af is.",
        en: "Yes, I wanted to ask about next week. My sister is getting married on Friday and I'd really like to be there. I know it's short notice, but could I take that day off? I can also start my work extra early this week, so that everything is finished on time."
      },
      {
        speaker: "other",
        nl: "Dat lijkt me geen probleem, gefeliciteerd namens mij. Zorg je er wel voor dat je belangrijke taken deze week klaar zijn?",
        en: "That doesn't seem like a problem, congratulations from me. Will you make sure your important tasks are finished this week though?"
      },
      {
        speaker: "you",
        nl: "Natuurlijk, dank je wel! Ik zorg dat alles op tijd af is.",
        en: "Of course, thank you! I'll make sure everything is finished on time.",
        quick: true
      }
    ]
  },
  {
    topic: "Met de buren",
    situation: {
      nl: "Je buurman zet 's avonds laat vaak harde muziek aan. Jij kunt daardoor niet goed slapen. Je spreekt hem hierover aan.",
      en: "Your neighbor often plays loud music late in the evening. Because of this you can't sleep well. You talk to him about it."
    },
    other: "Buurman",
    turns: [
      {
        speaker: "other",
        nl: "Hoi! Wat leuk je te zien. Alles goed bij jou?",
        en: "Hi! Nice to see you. Everything good with you?"
      },
      {
        speaker: "you",
        nl: "Ja, goed hoor, dank je. Ik wilde je trouwens iets vragen. De laatste tijd hoor ik 's avonds laat vaak harde muziek uit jouw huis. Ik moet vroeg opstaan voor mijn werk en kan daardoor niet goed slapen. Zou je de muziek na een uur of tien wat zachter kunnen zetten? Dat zou echt schelen.",
        en: "Yes, good actually, thanks. I wanted to ask you something by the way. Lately I often hear loud music from your house late in the evening. I have to get up early for work and because of that I can't sleep well. Could you turn the music down a bit after around ten o'clock? That would really help."
      },
      {
        speaker: "other",
        nl: "Oh, sorry, dat wist ik helemaal niet! Ik zal er vanaf nu op letten.",
        en: "Oh, sorry, I didn't know that at all! I'll pay attention to it from now on."
      }
    ]
  },
  {
    topic: "Onderweg",
    situation: {
      nl: "Je bent in een stad die je niet goed kent. Je moet naar het station, maar je weet de weg niet. Je vraagt het aan een voorbijganger.",
      en: "You are in a city you don't know well. You need to get to the station, but you don't know the way. You ask a passerby."
    },
    other: "Voorbijganger",
    turns: [
      {
        speaker: "other",
        nl: "Hallo! U ziet er een beetje verdwaald uit. Kan ik u misschien ergens mee helpen?",
        en: "Hello! You look a bit lost. Can I maybe help you with something?"
      },
      {
        speaker: "you",
        nl: "Ja, graag, dank u wel. Ik ben hier niet bekend en ik moet naar het station, maar ik weet niet precies welke kant ik op moet. Zou u mij de weg kunnen wijzen, en weet u misschien ook of het ver lopen is?",
        en: "Yes, please, thank you. I'm not familiar with this area and I need to get to the station, but I don't know exactly which way to go. Could you show me the way, and do you also know whether it's a long walk?"
      },
      {
        speaker: "other",
        nl: "Natuurlijk, het is niet ver. Loop deze straat rechtdoor tot het stoplicht, sla daar linksaf, en dan ziet u het station al aan uw rechterhand.",
        en: "Of course, it's not far. Walk straight down this street to the traffic light, turn left there, and then you'll already see the station on your right."
      },
      {
        speaker: "you",
        nl: "Dank u wel! Dat is heel duidelijk uitgelegd.",
        en: "Thank you! That's explained very clearly.",
        quick: true
      }
    ]
  },
  {
    topic: "Sociale afspraken",
    situation: {
      nl: "Je hebt met een vriendin afgesproken om vanavond samen te eten. Je voelt je niet lekker en wilt liever thuisblijven. Je belt haar op.",
      en: "You've arranged to have dinner with a friend tonight. You don't feel well and would rather stay home. You call her."
    },
    other: "Vriendin",
    turns: [
      {
        speaker: "other",
        nl: "Hé! Ik heb er al zo'n zin in vanavond. Zal ik om zeven uur bij jou langskomen, of spreken we ergens anders af?",
        en: "Hey! I'm already really looking forward to tonight. Shall I come by your place at seven, or shall we meet somewhere else?"
      },
      {
        speaker: "you",
        nl: "Hoi, ik bel je eigenlijk voor iets anders. Ik voel me de laatste uren niet zo lekker en ik denk dat het verstandiger is om vanavond rustig thuis te blijven. Zou je het erg vinden als we het etentje verzetten naar een andere avond? Dan kan ik ook lekker uitrusten.",
        en: "Hi, actually I'm calling about something else. I haven't felt very well the last few hours and I think it's wiser to stay home quietly tonight. Would you mind if we moved the dinner to another evening? That way I can also rest properly."
      },
      {
        speaker: "other",
        nl: "Nee, joh, dat is helemaal geen probleem. Beterschap! Zullen we het dan volgende week zaterdag proberen?",
        en: "No, no, that's absolutely no problem. Get well soon! Shall we try next Saturday instead then?"
      },
      {
        speaker: "you",
        nl: "Dat lijkt me een goed idee. Dan ben ik ook weer helemaal fit.",
        en: "That sounds like a good idea. By then I'll also be completely fit again.",
        quick: true
      }
    ]
  },
  {
    topic: "Advies geven",
    situation: {
      nl: "Een vriend wil een tweedehands fiets kopen. Hij heeft dat nog nooit eerder gedaan en weet niet waar hij op moet letten. Hij vraagt jou om hulp.",
      en: "A friend wants to buy a second-hand bike. He's never done that before and doesn't know what to look out for. He asks you for help."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Ik heb eindelijk genoeg geld gespaard voor een fiets, maar nieuwe fietsen zijn zo duur. Ik denk erover om een tweedehands fiets te kopen, maar ik heb dat nog nooit gedaan. Waar moet ik allemaal op letten, denk je?",
        en: "I've finally saved up enough money for a bike, but new bikes are so expensive. I'm thinking about buying a second-hand bike, but I've never done that before. What should I look out for, do you think?"
      },
      {
        speaker: "you",
        nl: "Goed dat je dat vraagt. Check in ieder geval altijd eerst de banden en de remmen, want die zijn duur om te vervangen. Kijk ook goed of het frame niet te veel roest heeft. En probeer de fiets altijd even uit voordat je hem koopt, dan voel je meteen of alles soepel rijdt.",
        en: "Good that you're asking. Always check the tires and the brakes first, because those are expensive to replace. Also check carefully that the frame doesn't have too much rust. And always try the bike out before you buy it, then you'll immediately feel whether everything rides smoothly."
      }
    ]
  },
  {
    topic: "Op het werk",
    situation: {
      nl: "Je bent op je werk, tijdens de pauze. Een collega begint een gesprek over het weekend.",
      en: "You're at work, during the break. A colleague starts a conversation about the weekend."
    },
    other: "Collega",
    turns: [
      {
        speaker: "other",
        nl: "Het is bijna vrijdag en ik heb dit weekend eigenlijk nog helemaal niks gepland. Ik wil wel iets leuks doen, maar ik kan zo snel niks bedenken. Wat doe jij meestal in het weekend, en heb je nog tips voor mij?",
        en: "It's almost Friday and I actually have nothing planned yet for this weekend. I do want to do something fun, but I can't think of anything right away. What do you usually do on the weekend, and do you have any tips for me?"
      },
      {
        speaker: "you",
        nl: "Ik doe zelf graag iets actiefs, zoals een wandeling maken of naar de markt gaan. Je zou ook een terrasje kunnen pakken als het weer goed is, of een museum bezoeken als je liever binnen bent. En anders is een filmavond met vrienden ook altijd gezellig.",
        en: "I myself like to do something active, like going for a walk or going to the market. You could also sit on a terrace if the weather is good, or visit a museum if you'd rather be indoors. Otherwise a movie night with friends is always nice too."
      }
    ]
  },
  {
    topic: "Winkelen",
    situation: {
      nl: "Je hebt twee weken geleden een broodrooster gekocht, maar hij werkt niet meer. Je gaat terug naar de winkel om dit op te lossen.",
      en: "You bought a toaster two weeks ago, but it doesn't work anymore. You go back to the store to sort this out."
    },
    other: "Verkoper",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, welkom terug bij ons. Waarmee kan ik u vandaag helpen?",
        en: "Good afternoon, welcome back to our store. How can I help you today?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik heb hier twee weken geleden een broodrooster gekocht, maar sinds gisteren doet hij het niet meer. Ik heb geprobeerd hem opnieuw aan te sluiten, maar dat hielp niet. Kan ik hem omruilen voor een nieuwe, of krijg ik mijn geld terug?",
        en: "Good afternoon. I bought a toaster here two weeks ago, but since yesterday it doesn't work anymore. I've tried plugging it in again, but that didn't help. Can I exchange it for a new one, or do I get my money back?"
      },
      {
        speaker: "other",
        nl: "Wat vervelend om te horen. Heeft u de bon nog? Dan kunt u hem gratis omruilen voor een nieuwe.",
        en: "How annoying to hear. Do you still have the receipt? Then you can exchange it for a new one for free."
      },
      {
        speaker: "you",
        nl: "Ja, gelukkig wel. Ik heb de bon hier bij me.",
        en: "Yes, fortunately I do. I have the receipt here with me.",
        quick: true
      }
    ]
  },
  {
    topic: "Openbaar vervoer",
    situation: {
      nl: "Je moet naar een vergadering op je werk, maar je trein heeft vertraging. Je belt een collega om dit door te geven.",
      en: "You need to get to a meeting at work, but your train is delayed. You call a colleague to let them know."
    },
    other: "Collega",
    turns: [
      {
        speaker: "other",
        nl: "Hoi, waar blijf je nou? Iedereen is er al en de vergadering begint over vijf minuten.",
        en: "Hi, where are you? Everyone's already here and the meeting starts in five minutes."
      },
      {
        speaker: "you",
        nl: "Hoi, sorry dat ik het niet eerder heb gezegd! Mijn trein heeft opeens vertraging gekregen en ik sta al twintig minuten stil. Ik ben er waarschijnlijk over een halfuur. Kunnen jullie alvast beginnen zonder mij, en misschien iemand aantekeningen laten maken?",
        en: "Hi, sorry I didn't say it sooner! My train suddenly got delayed and I've already been standing still for twenty minutes. I'll probably be there in half an hour. Can you start without me, and maybe have someone take notes?"
      },
      {
        speaker: "other",
        nl: "Geen probleem, we beginnen vast. Ik vertel je straks precies wat je gemist hebt.",
        en: "No problem, we'll start now. I'll tell you later exactly what you missed."
      }
    ]
  },
  {
    topic: "Nederlands leren",
    situation: {
      nl: "Je leert Nederlands, maar grammatica vind je nog moeilijk. Je praat erover met een medestudent.",
      en: "You're learning Dutch, but you still find grammar difficult. You talk about it with a fellow student."
    },
    other: "Medestudent",
    turns: [
      {
        speaker: "other",
        nl: "Hé, hoe gaat het eigenlijk met je Nederlands? Ik zie je de laatste tijd steeds harder studeren.",
        en: "Hey, how's your Dutch actually going? I've noticed you studying harder and harder lately."
      },
      {
        speaker: "you",
        nl: "Het gaat wel goed, maar grammatica vind ik nog best lastig, vooral de werkwoordsvormen. Zou jij mij daar misschien een keer mee kunnen helpen? Of ken je anders een goede oefensite die je zelf hebt gebruikt?",
        en: "It's going alright, but I still find grammar quite difficult, especially the verb forms. Could you maybe help me with that sometime? Or do you know a good practice site that you've used yourself?"
      },
      {
        speaker: "other",
        nl: "Natuurlijk help ik je graag! Zullen we volgende week samen studeren in de bibliotheek?",
        en: "Of course I'll gladly help you! Shall we study together next week in the library?"
      },
      {
        speaker: "you",
        nl: "Ja, heel graag. Dank je wel voor je hulp.",
        en: "Yes, I'd really like that. Thank you for your help.",
        quick: true
      }
    ]
  },
  {
    topic: "Sociale afspraken",
    situation: {
      nl: "Je geeft binnenkort een klein feestje voor je verjaardag. Je wilt een goede vriend uitnodigen.",
      en: "You're having a small party for your birthday soon. You want to invite a good friend."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Hoi! Ik hoorde dat je binnenkort jarig bent. Ga je dit jaar iets leuks doen, of houd je het rustig?",
        en: "Hi! I heard you have a birthday coming up. Are you doing something fun this year, or are you keeping it quiet?"
      },
      {
        speaker: "you",
        nl: "Ja, ik geef een klein feestje bij mij thuis, met een paar goede vrienden. Het is zaterdag om acht uur 's avonds. Heb je zin om ook te komen? Het wordt vast gezellig.",
        en: "Yes, I'm having a small party at my place, with a few good friends. It's Saturday at eight in the evening. Do you feel like coming too? It'll definitely be fun."
      },
      {
        speaker: "other",
        nl: "Wat leuk, ik kom graag! Zal ik iets meenemen om te drinken of te eten?",
        en: "How nice, I'd love to come! Shall I bring something to drink or eat?"
      },
      {
        speaker: "you",
        nl: "Dat is niet nodig, maar het mag natuurlijk wel als je dat leuk vindt.",
        en: "That's not necessary, but you're welcome to of course if you'd like to.",
        quick: true
      }
    ]
  },
  {
    topic: "Wonen",
    situation: {
      nl: "Je zoekt een nieuw appartement en hebt er een gezien op internet. Je belt de makelaar op om het te bekijken.",
      en: "You're looking for a new apartment and saw one online. You call the estate agent to view it."
    },
    other: "Makelaar",
    turns: [
      {
        speaker: "other",
        nl: "Goedemorgen, met makelaarskantoor De Vries, u spreekt met Sanne. Waarmee kan ik u helpen?",
        en: "Good morning, De Vries estate agency, you're speaking with Sanne. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemorgen. Ik heb op uw website een appartement gezien dat mij erg aanspreekt, in de Molenstraat. Zou ik een afspraak kunnen maken om het van binnen te bekijken? Ik ben deze week eigenlijk elke dag beschikbaar.",
        en: "Good morning. I saw an apartment on your website that I like a lot, on the Molenstraat. Could I make an appointment to view the inside? I'm actually available every day this week."
      },
      {
        speaker: "other",
        nl: "Wat fijn dat u interesse heeft. Komt woensdagmiddag om drie uur u uit?",
        en: "How nice that you're interested. Does Wednesday afternoon at three o'clock suit you?"
      },
      {
        speaker: "you",
        nl: "Ja, dat komt perfect uit. Tot woensdag!",
        en: "Yes, that works perfectly. See you Wednesday!",
        quick: true
      }
    ]
  },
  {
    topic: "Gezond eten",
    situation: {
      nl: "Je bent op je werk, tijdens de pauze. Een collega vertelt dat hij vaak fastfood eet en vraagt wat jij daarvan vindt.",
      en: "You're at work, during the break. A colleague tells you he often eats fast food and asks what you think about it."
    },
    other: "Collega",
    turns: [
      {
        speaker: "other",
        nl: "Ik heb net weer een broodje gehaald bij de snackbar. Ik eet eigenlijk best vaak fastfood, gewoon omdat het snel en makkelijk is. Wat vind jij daar eigenlijk van?",
        en: "I've just picked up another sandwich from the snack bar. I actually eat fast food quite often, just because it's quick and easy. What do you actually think about that?"
      },
      {
        speaker: "you",
        nl: "Ik snap wel dat het makkelijk is, maar ik probeer het zelf niet te vaak te doen. Meestal kook ik met verse groente en fruit, dat voelt gewoon beter voor mijn lichaam. Af en toe iets lekkers is prima, zolang het niet elke dag is.",
        en: "I do understand that it's easy, but I try not to do it too often myself. I usually cook with fresh vegetables and fruit, that just feels better for my body. Something tasty now and then is fine, as long as it's not every day."
      }
    ]
  },
  {
    topic: "Cadeau kopen",
    situation: {
      nl: "Je beste vriendin is over twee weken jarig. Je hebt nog geen idee wat je haar zou moeten geven. Je vraagt een andere vriend om advies.",
      en: "Your best friend has a birthday in two weeks. You have no idea what to give her. You ask another friend for advice."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Ik hoorde dat Lisa binnenkort jarig is. Heb je al een cadeau voor haar gevonden? Ik weet zelf nooit zo goed wat ik moet geven, vooral niet als iemand eigenlijk al alles heeft.",
        en: "I heard that Lisa has a birthday coming up soon. Have you found a gift for her yet? I myself never really know what to give, especially not when someone already has everything."
      },
      {
        speaker: "you",
        nl: "Nee, ik heb ook nog geen idee, eerlijk gezegd. Ik dacht aan een cadeaubon voor een restaurant, want ze houdt van lekker eten. Je zou ook een boek van haar favoriete schrijver kunnen geven, of gewoon een leuke dag samen plannen in plaats van een cadeau.",
        en: "No, I don't have an idea yet either, to be honest. I was thinking of a gift card for a restaurant, because she loves good food. You could also give a book by her favorite writer, or just plan a fun day together instead of a gift."
      }
    ]
  },
  {
    topic: "Vakantie plannen",
    situation: {
      nl: "Je collega gaat dit jaar voor het eerst zelf een vakantie plannen. Ze weet nog niet goed waar ze heen wil. Ze vraagt jou om ideeën.",
      en: "Your colleague is planning a vacation by herself for the first time this year. She doesn't know yet where she wants to go. She asks you for ideas."
    },
    other: "Collega",
    turns: [
      {
        speaker: "other",
        nl: "Ik ga dit jaar voor het eerst zelf mijn vakantie regelen, en ik weet eigenlijk niet waar ik moet beginnen. Ik hou van rust, maar ook wel van een beetje cultuur. Heb jij misschien tips voor een leuke bestemming?",
        en: "This year I'm arranging my vacation by myself for the first time, and I actually don't know where to start. I like peace and quiet, but also a bit of culture. Do you maybe have tips for a nice destination?"
      },
      {
        speaker: "you",
        nl: "Wat leuk dat je dat zelf gaat doen! Als je van rust én cultuur houdt, zou je aan een stad aan zee kunnen denken, zoals Lissabon of Barcelona. Je kunt er overdag musea bezoeken en 's avonds gewoon ontspannen op het strand. Een andere optie is een klein dorp in de bergen, als je liever helemaal tot rust komt.",
        en: "How nice that you're doing that yourself! If you like both peace and culture, you could think of a coastal city, like Lisbon or Barcelona. You can visit museums during the day and just relax on the beach in the evening. Another option is a small village in the mountains, if you'd rather completely unwind."
      }
    ]
  },
  {
    topic: "Auto delen",
    situation: {
      nl: "Jij en een collega wonen in dezelfde buurt en rijden allebei elke dag met de auto naar hetzelfde werk. Je collega stelt voor om samen te rijden.",
      en: "You and a colleague live in the same neighborhood and both drive to the same work every day. Your colleague suggests carpooling."
    },
    other: "Collega",
    turns: [
      {
        speaker: "other",
        nl: "Ik zag laatst dat jij in dezelfde straat woont als ik. We rijden allebei elke dag met de auto naar hetzelfde werk, en dat kost best veel geld aan benzine. Zullen we om de beurt rijden, zodat we allebei minder hoeven te betalen?",
        en: "I noticed recently that you live in the same street as me. We both drive to the same work every day, and that costs quite a lot of money on gas. Shall we take turns driving, so we both have to pay less?"
      },
      {
        speaker: "you",
        nl: "Dat is eigenlijk een heel goed idee, daar had ik zelf nog niet aan gedacht. We zouden bijvoorbeeld om de week kunnen wisselen, of gewoon per dag afspreken wie er rijdt. Het scheelt ons dan ook nog eens file-stress, want dan kunnen we om de beurt rusten in de auto.",
        en: "That's actually a really good idea, I hadn't thought of that myself yet. We could for example switch every week, or just agree per day who drives. It also saves us traffic stress, because then we can take turns resting in the car."
      }
    ]
  },
  {
    topic: "Nieuwe buurt",
    situation: {
      nl: "Je bent net verhuisd naar een nieuwe buurt en kent nog bijna niemand. Je maakt kennis met een buurvrouw op straat.",
      en: "You've just moved to a new neighborhood and hardly know anyone yet. You meet a neighbor on the street."
    },
    other: "Buurvrouw",
    turns: [
      {
        speaker: "other",
        nl: "Oh hallo, jij bent toch net hier komen wonen? Welkom in de buurt! Zeg, ken je hier al een beetje de weg, of kan ik je nog ergens mee helpen?",
        en: "Oh hello, you just moved here, right? Welcome to the neighborhood! Say, do you know your way around here a bit yet, or can I help you with anything?"
      },
      {
        speaker: "you",
        nl: "Dank u wel, wat aardig! Ik ken de buurt eigenlijk nog helemaal niet zo goed. Ik zoek nog een goede supermarkt in de buurt, en ik hoorde dat er ergens een leuke markt is. Weet u misschien waar ik die kan vinden?",
        en: "Thank you, how kind! I actually don't know the neighborhood very well yet. I'm still looking for a good supermarket nearby, and I heard there's a nice market somewhere. Do you maybe know where I can find it?"
      },
      {
        speaker: "other",
        nl: "Zeker, de supermarkt is twee straten verderop, en de markt is elke zaterdag op het plein bij de kerk.",
        en: "Sure, the supermarket is two streets away, and the market is every Saturday on the square by the church."
      },
      {
        speaker: "you",
        nl: "Dank u wel, dat is heel handig om te weten!",
        en: "Thank you, that's very handy to know!",
        quick: true
      }
    ]
  },
  {
    topic: "Klacht doorgeven",
    situation: {
      nl: "Je internet thuis valt al een week steeds uit. Je belt de klantenservice van je provider om dit te melden.",
      en: "Your internet at home keeps dropping out for a week now. You call your provider's customer service to report this."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, u spreekt met de klantenservice. Waarmee kan ik u helpen?",
        en: "Good afternoon, customer service speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Mijn internet thuis valt al een week lang steeds uit, soms wel drie of vier keer per dag. Ik werk veel thuis, dus dit is best vervelend voor mij. Kunt u kijken wat er aan de hand is, of eventueel iemand langssturen om het te repareren?",
        en: "Good afternoon. My internet at home has been dropping out for a week now, sometimes three or four times a day. I work from home a lot, so this is quite annoying for me. Could you check what's going on, or possibly send someone to fix it?"
      },
      {
        speaker: "other",
        nl: "Wat vervelend om te horen. Ik ga dit voor u controleren en stuur binnen twee dagen een monteur langs.",
        en: "How annoying to hear. I'll check this for you and send a technician within two days."
      },
      {
        speaker: "you",
        nl: "Dank u wel, ik hoop dat het probleem dan snel opgelost is.",
        en: "Thank you, I hope the problem will be solved quickly then.",
        quick: true
      }
    ]
  },
  {
    topic: "Vrijwilligerswerk",
    situation: {
      nl: "Een vriend vertelt dat hij sinds kort vrijwilligerswerk doet. Hij vraagt wat jij daarvan vindt en of jij dat ook zou willen doen.",
      en: "A friend tells you he recently started doing volunteer work. He asks what you think of it and whether you would want to do that too."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Ik doe sinds een maand vrijwilligerswerk bij een buurthuis, en ik vind het eigenlijk heel leuk om te doen. Het kost wel wat vrije tijd, maar het geeft me ook veel energie. Zou jij dat ook wel eens willen proberen, denk je?",
        en: "I've been doing volunteer work at a community center for a month now, and I actually really enjoy it. It does cost some free time, but it also gives me a lot of energy. Would you also want to try that sometime, do you think?"
      },
      {
        speaker: "you",
        nl: "Wat goed van je, zeg! Ik heb er zelf ook weleens over nagedacht, vooral omdat ik het belangrijk vind om iets voor anderen te doen. Ik zou het misschien combineren met mijn hobby, bijvoorbeeld door kinderen te helpen met sporten. Het enige is dat ik bang ben dat ik er de tijd niet voor heb naast mijn werk.",
        en: "Good for you! I've also thought about it myself sometimes, especially because I find it important to do something for others. I might combine it with my hobby, for example by helping children with sports. The only thing is that I'm afraid I won't have the time for it alongside my work."
      }
    ]
  },
  {
    topic: "In het restaurant",
    situation: {
      nl: "Je eet in een restaurant, maar je gerecht is koud aangekomen. Je roept de ober erbij.",
      en: "You're eating at a restaurant, but your dish arrived cold. You call the waiter over."
    },
    other: "Ober",
    turns: [
      {
        speaker: "other",
        nl: "Goedenavond, is alles naar wens met de maaltijd? Ik zie dat u nog niet veel gegeten heeft.",
        en: "Good evening, is everything alright with the meal? I see you haven't eaten much yet."
      },
      {
        speaker: "you",
        nl: "Goedenavond. Eigenlijk niet helemaal, het spijt me dat ik het moet zeggen. Mijn soep is helaas koud aangekomen, terwijl de rest van het gerecht er wel goed uitziet. Zou het mogelijk zijn om een nieuwe, warme portie te krijgen?",
        en: "Good evening. Actually not entirely, I'm sorry to say. My soup unfortunately arrived cold, while the rest of the dish looks good. Would it be possible to get a new, warm portion?"
      },
      {
        speaker: "other",
        nl: "Wat vervelend, mijn excuses daarvoor. Ik breng u meteen een nieuwe, warme portie.",
        en: "How annoying, my apologies for that. I'll bring you a new, warm portion right away."
      },
      {
        speaker: "you",
        nl: "Dank u wel, dat stel ik op prijs.",
        en: "Thank you, I appreciate that.",
        quick: true
      }
    ]
  },
  {
    topic: "Verzekering",
    situation: {
      nl: "Je wilt een nieuwe zorgverzekering afsluiten voor volgend jaar. Je belt een verzekeraar om meer informatie te krijgen.",
      en: "You want to take out new health insurance for next year. You call an insurer for more information."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met de klantenservice. Waar kan ik u mee van dienst zijn?",
        en: "Good afternoon, customer service speaking. How can I be of service to you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik overweeg om volgend jaar bij u een zorgverzekering af te sluiten, maar ik heb nog een paar vragen. Ik wil vooral weten wat er precies vergoed wordt voor de tandarts, en of ik zelf mijn huisarts mag kiezen.",
        en: "Good afternoon. I'm considering taking out health insurance with you next year, but I still have a few questions. I especially want to know what exactly is covered for the dentist, and whether I can choose my own doctor."
      },
      {
        speaker: "other",
        nl: "Dat kan ik u vertellen. Bij het uitgebreide pakket wordt een deel van de tandartskosten vergoed, en u mag altijd zelf uw huisarts kiezen.",
        en: "I can tell you that. With the extensive package, part of the dentist costs are covered, and you can always choose your own doctor."
      },
      {
        speaker: "you",
        nl: "Dat is fijn om te horen, dank u voor de duidelijke uitleg.",
        en: "That's nice to hear, thank you for the clear explanation.",
        quick: true
      }
    ]
  },
  {
    topic: "Sportclub",
    situation: {
      nl: "Je wilt lid worden van een sportclub in je buurt. Je belt om te vragen naar de mogelijkheden.",
      en: "You want to become a member of a sports club in your neighborhood. You call to ask about the options."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met de tennisclub. Waarmee kan ik u helpen?",
        en: "Good afternoon, tennis club speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik wil graag lid worden, maar ik heb eigenlijk nog nooit getennist. Kan ik als beginner toch meedoen, en zijn er ook lessen voor mensen die net beginnen?",
        en: "Good afternoon. I'd like to become a member, but I've actually never played tennis before. Can I join as a beginner anyway, and are there also lessons for people who are just starting?"
      },
      {
        speaker: "other",
        nl: "Zeker, we hebben elke week een lesuur speciaal voor beginners. U kunt gewoon een keer gratis komen proberen.",
        en: "Certainly, we have a lesson hour every week especially for beginners. You can just come try it once for free."
      },
      {
        speaker: "you",
        nl: "Dat klinkt goed, dan kom ik binnenkort eens langs.",
        en: "That sounds good, I'll come by sometime soon then.",
        quick: true
      }
    ]
  },
  {
    topic: "Bij de kapper",
    situation: {
      nl: "Je hebt een afspraak bij de kapper, maar je moet die dag onverwacht werken. Je belt om de afspraak te verzetten.",
      en: "You have a hairdresser appointment, but you unexpectedly have to work that day. You call to reschedule."
    },
    other: "Kapper",
    turns: [
      {
        speaker: "other",
        nl: "Goedemorgen, met kapsalon Els. Waarmee kan ik u helpen?",
        en: "Good morning, Els hair salon speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemorgen. Ik heb morgen om vier uur een afspraak bij u, maar ik moet die dag onverwacht werken. Zou ik de afspraak kunnen verzetten naar een avond later deze week, als dat mogelijk is?",
        en: "Good morning. I have an appointment with you tomorrow at four o'clock, but I unexpectedly have to work that day. Could I move the appointment to an evening later this week, if that's possible?"
      },
      {
        speaker: "other",
        nl: "Dat is goed, ik heb donderdagavond om zes uur nog plek. Komt dat u uit?",
        en: "That's fine, I still have space Thursday evening at six o'clock. Does that suit you?"
      },
      {
        speaker: "you",
        nl: "Ja, dat komt goed uit. Tot donderdag!",
        en: "Yes, that works well. See you Thursday!",
        quick: true
      }
    ]
  },
  {
    topic: "Hulp aan de buren",
    situation: {
      nl: "Je buurman gaat binnenkort verhuizen en vraagt of jij een dagje kunt helpen met dragen.",
      en: "Your neighbor is moving soon and asks if you can help carry things for a day."
    },
    other: "Buurman",
    turns: [
      {
        speaker: "other",
        nl: "Ik ga volgende maand verhuizen naar een nieuw huis, en ik heb best veel spullen om te verplaatsen. Zou jij misschien een dagje kunnen helpen met dragen? Ik trakteer natuurlijk op pizza.",
        en: "I'm moving to a new house next month, and I have quite a lot of stuff to move. Could you maybe help carry things for a day? I'll of course treat you to pizza."
      },
      {
        speaker: "you",
        nl: "Dat wil ik best doen, al kan ik niet de hele dag, want ik heb 's middags al iets anders gepland. Ik kan wel de hele ochtend helpen met de zware spullen. Laat me weten welke dag jou het beste uitkomt.",
        en: "I'm happy to do that, although I can't do the whole day, because I already have something else planned in the afternoon. I can help with the heavy things all morning though. Let me know which day suits you best."
      }
    ]
  },
  {
    topic: "Sociale media",
    situation: {
      nl: "Een vriend vertelt dat hij minder tijd op sociale media wil doorbrengen. Hij vraagt wat jij daarvan vindt.",
      en: "A friend says he wants to spend less time on social media. He asks what you think about that."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Ik merk dat ik best veel tijd op mijn telefoon doorbreng, vooral op sociale media. Ik wil dat eigenlijk wel minder gaan doen, maar ik weet niet goed hoe ik dat het beste kan aanpakken. Wat vind jij daarvan, en heb je misschien tips?",
        en: "I notice that I spend quite a lot of time on my phone, especially on social media. I'd actually like to do that less, but I don't really know how best to approach it. What do you think about that, and do you maybe have tips?"
      },
      {
        speaker: "you",
        nl: "Ik snap dat helemaal, dat merk ik zelf ook weleens bij mezelf. Je zou bijvoorbeeld een tijdslimiet op je apps kunnen instellen, of je telefoon 's avonds in een andere kamer kunnen leggen. Het helpt ook om een leuke hobby te zoeken, zodat je minder snel verveeld op je telefoon kijkt.",
        en: "I totally understand that, I notice that in myself sometimes too. You could for example set a time limit on your apps, or put your phone in another room in the evening. It also helps to find a fun hobby, so you're less likely to check your phone out of boredom."
      }
    ]
  }
];
