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
  },
  {
    topic: "Kleding ruilen",
    situation: {
      nl: "Je hebt een paar dagen geleden een broek gekocht, maar hij blijkt te klein te zijn. Je gaat terug naar de winkel om hem om te ruilen.",
      en: "You bought a pair of pants a few days ago, but they turn out to be too small. You go back to the store to exchange them."
    },
    other: "Verkoopster",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, kan ik u ergens mee helpen?",
        en: "Good afternoon, can I help you with something?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik heb hier een paar dagen geleden deze broek gekocht, maar hij is helaas net te klein. Zou ik hem kunnen omruilen voor een maatje groter, of krijg ik mijn geld terug als u die maat niet meer heeft?",
        en: "Good afternoon. I bought these pants here a few days ago, but unfortunately they're just too small. Could I exchange them for a size bigger, or do I get my money back if you don't have that size anymore?"
      },
      {
        speaker: "other",
        nl: "Laat me even kijken of we die maat nog hebben. Ja, die hebben we gelukkig nog op voorraad.",
        en: "Let me check if we still have that size. Yes, fortunately we still have it in stock."
      },
      {
        speaker: "you",
        nl: "Wat fijn, dank u wel voor het checken.",
        en: "How nice, thank you for checking.",
        quick: true
      }
    ]
  },
  {
    topic: "Bibliotheek",
    situation: {
      nl: "Je hebt een boek van de bibliotheek te laat ingeleverd. Je gaat naar de balie om dit te bespreken.",
      en: "You returned a library book late. You go to the desk to discuss this."
    },
    other: "Bibliothecaris",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, u wilt dit boek inleveren? Ik zie dat het al een week te laat is.",
        en: "Good afternoon, you want to return this book? I see it's already a week overdue."
      },
      {
        speaker: "you",
        nl: "Ja, dat klopt, en het spijt me. Ik was de afgelopen weken erg druk met werk en ben het helaas vergeten. Moet ik nu een boete betalen, en hoeveel zou dat dan ongeveer zijn?",
        en: "Yes, that's right, and I'm sorry. I've been very busy with work the past few weeks and unfortunately forgot about it. Do I have to pay a fine now, and how much would that be roughly?"
      },
      {
        speaker: "other",
        nl: "Dat geeft niet, het gebeurt vaker. De boete is twee euro per week, dus in totaal wordt dat twee euro.",
        en: "That's fine, it happens more often. The fine is two euros per week, so in total that's two euros."
      },
      {
        speaker: "you",
        nl: "Oké, dat is gelukkig niet te veel. Hier is het geld.",
        en: "Okay, fortunately that's not too much. Here's the money.",
        quick: true
      }
    ]
  },
  {
    topic: "Op het werk",
    situation: {
      nl: "Je laptop van het werk doet het opeens niet meer. Je belt de IT-afdeling om hulp te vragen.",
      en: "Your work laptop suddenly stops working. You call the IT department for help."
    },
    other: "IT-medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemorgen, met de IT-helpdesk. Waar loopt u tegenaan?",
        en: "Good morning, IT helpdesk speaking. What's the problem you're running into?"
      },
      {
        speaker: "you",
        nl: "Goedemorgen. Mijn laptop start opeens niet meer op, ook niet na een herstart. Ik heb vandaag een belangrijke deadline, dus ik hoop dat het snel opgelost kan worden. Kunt u op afstand meekijken, of moet ik langskomen?",
        en: "Good morning. My laptop suddenly won't start anymore, not even after a restart. I have an important deadline today, so I hope it can be fixed quickly. Can you take a look remotely, or do I need to come by?"
      },
      {
        speaker: "other",
        nl: "Dat kan vervelend zijn met een deadline. Ik kan proberen om er nu op afstand naar te kijken, geef me twee minuten.",
        en: "That can be annoying with a deadline. I can try to take a look remotely right now, give me two minutes."
      },
      {
        speaker: "you",
        nl: "Dank u wel, ik wacht rustig af.",
        en: "Thank you, I'll wait calmly.",
        quick: true
      }
    ]
  },
  {
    topic: "Op het werk",
    situation: {
      nl: "Er begint een nieuwe collega op je afdeling. Je manager vraagt of jij hem de eerste week wilt rondleiden.",
      en: "A new colleague is starting in your department. Your manager asks if you'd like to show him around the first week."
    },
    other: "Manager",
    turns: [
      {
        speaker: "other",
        nl: "We krijgen volgende week een nieuwe collega, en ik zoek iemand die hem de eerste dagen kan begeleiden. Zou jij dat op je willen nemen? Het hoeft niet de hele dag, maar wel af en toe.",
        en: "We're getting a new colleague next week, and I'm looking for someone who can guide him the first few days. Would you be willing to take that on? It doesn't have to be all day, but every now and then."
      },
      {
        speaker: "you",
        nl: "Ja, dat wil ik graag doen. Ik kan hem op de eerste dag rondleiden en uitleggen hoe alles werkt. En de rest van de week kan hij bij mij terecht als hij vragen heeft.",
        en: "Yes, I'd be happy to do that. I can show him around on the first day and explain how everything works. And for the rest of the week he can come to me if he has questions."
      }
    ]
  },
  {
    topic: "Met de buren",
    situation: {
      nl: "Je buurvrouw is een paar dagen weg. Ze vraagt of jij haar pakketjes wilt aannemen.",
      en: "Your neighbor is away for a few days. She asks if you can accept her packages."
    },
    other: "Buurvrouw",
    turns: [
      {
        speaker: "other",
        nl: "Ik ben volgende week een paar dagen op vakantie, en ik verwacht nog een paar pakketjes. Zou jij ze voor mij kunnen aannemen, als de bezorger langskomt?",
        en: "I'm on vacation for a few days next week, and I'm still expecting a couple of packages. Could you accept them for me, when the delivery person comes by?"
      },
      {
        speaker: "you",
        nl: "Ja, natuurlijk, dat is geen probleem. Ik ben eigenlijk de hele week thuis, dus dat komt goed uit. Leg de pakketjes maar bij mij neer, dan zorg ik dat ze veilig blijven tot je terug bent.",
        en: "Yes, of course, that's no problem. I'm actually home all week, so that works out well. Just drop the packages off with me, then I'll make sure they stay safe until you're back."
      }
    ]
  },
  {
    topic: "Sociale afspraken",
    situation: {
      nl: "Je bent net verhuisd naar een nieuw huis. Je wilt een housewarming organiseren en vraagt een vriendin om mee te helpen.",
      en: "You've just moved into a new house. You want to organize a housewarming and ask a friend to help."
    },
    other: "Vriendin",
    turns: [
      {
        speaker: "other",
        nl: "Hé, hoe bevalt het nieuwe huis? Ben je al helemaal ingericht?",
        en: "Hey, how do you like the new house? Are you all settled in yet?"
      },
      {
        speaker: "you",
        nl: "Het bevalt heel goed, maar ik ben nog niet helemaal klaar met inrichten. Ik wil binnenkort een housewarming geven om het te vieren. Zou jij mij kunnen helpen met de voorbereidingen, zoals het versieren en het eten regelen?",
        en: "I like it a lot, but I'm not quite finished decorating yet. I want to throw a housewarming soon to celebrate. Could you help me with the preparations, like decorating and arranging the food?"
      },
      {
        speaker: "other",
        nl: "Leuk plan! Natuurlijk help ik je graag. Zullen we er dit weekend samen even voor gaan zitten?",
        en: "Fun plan! Of course I'll gladly help you. Shall we sit down together this weekend to plan it?"
      },
      {
        speaker: "you",
        nl: "Perfect, dan spreken we dit weekend af.",
        en: "Perfect, we'll arrange it this weekend then.",
        quick: true
      }
    ]
  },
  {
    topic: "Onderweg",
    situation: {
      nl: "Je hebt je bus gemist en moet toch op tijd naar een afspraak. Je vraagt iemand op straat naar een alternatief.",
      en: "You've missed your bus and still need to get to an appointment on time. You ask someone on the street for an alternative."
    },
    other: "Voorbijganger",
    turns: [
      {
        speaker: "other",
        nl: "Kan ik u helpen? U kijkt behoorlijk gestrest.",
        en: "Can I help you? You look quite stressed."
      },
      {
        speaker: "you",
        nl: "Ja, graag, dank u wel. Ik heb net mijn bus gemist en moet over twintig minuten op een afspraak zijn. Weet u misschien of er een andere bus rijdt, of is het te voet ook te doen?",
        en: "Yes, please, thank you. I just missed my bus and need to be at an appointment in twenty minutes. Do you maybe know if there's another bus, or is it doable on foot too?"
      },
      {
        speaker: "other",
        nl: "Er rijdt over vijf minuten nog een bus vanaf die halte daar, die brengt u er ook. Lopen zou wat langer duren.",
        en: "There's another bus in five minutes from that stop over there, that will get you there too. Walking would take a bit longer."
      },
      {
        speaker: "you",
        nl: "Dank u wel, dan haast ik me snel naar die halte.",
        en: "Thank you, I'll hurry to that stop then.",
        quick: true
      }
    ]
  },
  {
    topic: "Bij de tandarts",
    situation: {
      nl: "Je hebt al een paar dagen kiespijn. Je belt de tandarts om een afspraak te maken.",
      en: "You've had a toothache for a few days. You call the dentist to make an appointment."
    },
    other: "Assistente",
    turns: [
      {
        speaker: "other",
        nl: "Goedemorgen, met de tandartspraktijk. Waar kan ik u mee helpen?",
        en: "Good morning, dental practice speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemorgen. Ik heb al een paar dagen flinke kiespijn, vooral als ik iets kouds of warms eet. Zou ik zo snel mogelijk een afspraak kunnen maken? Ik kan bijna elk moment deze week.",
        en: "Good morning. I've had a bad toothache for a few days now, especially when I eat something cold or warm. Could I make an appointment as soon as possible? I'm available almost any time this week."
      },
      {
        speaker: "other",
        nl: "Dat klinkt vervelend. Ik kan u morgenochtend om negen uur inplannen, kan dat?",
        en: "That sounds unpleasant. I can schedule you for tomorrow morning at nine o'clock, does that work?"
      },
      {
        speaker: "you",
        nl: "Ja, dat is perfect. Dank u wel, tot morgen.",
        en: "Yes, that's perfect. Thank you, see you tomorrow.",
        quick: true
      }
    ]
  },
  {
    topic: "Ziekmelden",
    situation: {
      nl: "Je voelt je erg grieperig en kunt vandaag niet werken. Je belt je manager om je ziek te melden.",
      en: "You feel very feverish and can't work today. You call your manager to report sick."
    },
    other: "Manager",
    turns: [
      {
        speaker: "other",
        nl: "Goedemorgen, met mij. Alles goed? Ik zag dat je nog niet ingelogd bent.",
        en: "Good morning, it's me. All good? I noticed you haven't logged in yet."
      },
      {
        speaker: "you",
        nl: "Goedemorgen. Nee, het gaat eigenlijk niet zo goed. Ik heb hoge koorts en voel me erg grieperig, dus ik denk niet dat ik vandaag kan werken. Ik ga even rusten en hoop morgen weer beter te zijn.",
        en: "Good morning. No, it's actually not going very well. I have a high fever and feel very feverish, so I don't think I can work today. I'm going to rest for a bit and hope to feel better tomorrow."
      },
      {
        speaker: "other",
        nl: "Dat is jammer om te horen, beterschap! Neem lekker de tijd om uit te zieken, we redden het hier wel.",
        en: "Sorry to hear that, get well soon! Take your time to recover, we'll manage here."
      },
      {
        speaker: "you",
        nl: "Dank je wel voor je begrip. Ik hou je op de hoogte.",
        en: "Thank you for your understanding. I'll keep you posted.",
        quick: true
      }
    ]
  },
  {
    topic: "Loodgieter bellen",
    situation: {
      nl: "De kraan in je keuken lekt al een paar dagen. Je belt een loodgieter om het te laten repareren.",
      en: "The tap in your kitchen has been leaking for a few days. You call a plumber to have it repaired."
    },
    other: "Loodgieter",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met loodgietersbedrijf Jansen. Waarmee kan ik u helpen?",
        en: "Good afternoon, Jansen plumbing company speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. De kraan in mijn keuken lekt al een paar dagen, en het lijkt steeds erger te worden. Zou iemand deze week nog kunnen langskomen om ernaar te kijken?",
        en: "Good afternoon. The tap in my kitchen has been leaking for a few days now, and it seems to be getting worse. Could someone come by this week to take a look at it?"
      },
      {
        speaker: "other",
        nl: "Dat kan zeker. Ik kan morgenmiddag iemand sturen, tussen twee en vier uur. Komt dat uit?",
        en: "That's certainly possible. I can send someone tomorrow afternoon, between two and four o'clock. Does that work?"
      },
      {
        speaker: "you",
        nl: "Ja, dat komt goed uit. Dank u wel.",
        en: "Yes, that works well. Thank you.",
        quick: true
      }
    ]
  },
  {
    topic: "Winkelen",
    situation: {
      nl: "Je ziet in een winkel een jas die je erg mooi vindt, maar hij is best duur. Je vraagt de verkoper of er binnenkort korting op komt.",
      en: "You see a jacket in a store that you really like, but it's quite expensive. You ask the salesperson if there will be a discount soon."
    },
    other: "Verkoper",
    turns: [
      {
        speaker: "other",
        nl: "Kan ik u ergens mee helpen? Ik zag u al een tijdje naar deze jas kijken.",
        en: "Can I help you with something? I noticed you looking at this jacket for a while."
      },
      {
        speaker: "you",
        nl: "Ja, graag. Ik vind deze jas erg mooi, maar hij is eigenlijk net iets te duur voor mij. Weet u toevallig of hier binnenkort een uitverkoop is, of komt er misschien korting op dit merk?",
        en: "Yes, please. I think this jacket is very nice, but it's actually just a bit too expensive for me. Do you happen to know if there's a sale coming up soon, or will there maybe be a discount on this brand?"
      },
      {
        speaker: "other",
        nl: "Volgende week begint onze seizoensuitverkoop, en dan gaat er waarschijnlijk twintig procent van de prijs af.",
        en: "Our seasonal sale starts next week, and then the price will probably go down by twenty percent."
      },
      {
        speaker: "you",
        nl: "Goed om te weten, dan kom ik volgende week nog eens terug.",
        en: "Good to know, I'll come back again next week then.",
        quick: true
      }
    ]
  },
  {
    topic: "Op reis",
    situation: {
      nl: "Je hebt een kamer geboekt in een hotel, maar je reisplannen zijn veranderd. Je belt het hotel om de boeking aan te passen.",
      en: "You've booked a room at a hotel, but your travel plans have changed. You call the hotel to adjust the booking."
    },
    other: "Receptioniste",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met hotel De Zon. Waarmee kan ik u van dienst zijn?",
        en: "Good afternoon, Hotel De Zon speaking. How can I be of service to you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik heb bij u een kamer geboekt voor komend weekend, maar mijn reisplannen zijn veranderd. Zou het mogelijk zijn om de boeking te verzetten naar het weekend erna, in plaats van te annuleren?",
        en: "Good afternoon. I've booked a room with you for this coming weekend, but my travel plans have changed. Would it be possible to move the booking to the following weekend, instead of canceling?"
      },
      {
        speaker: "other",
        nl: "Dat is geen probleem, ik zie dat er dan ook nog plek is. Ik pas de boeking direct voor u aan.",
        en: "That's no problem, I see there's still room available then too. I'll adjust the booking for you right away."
      },
      {
        speaker: "you",
        nl: "Dank u wel, dat is fijn om te horen.",
        en: "Thank you, that's nice to hear.",
        quick: true
      }
    ]
  },
  {
    topic: "Op reis",
    situation: {
      nl: "Je vlucht heeft veel vertraging en je mist daardoor je aansluitende vlucht. Je gaat naar de balie van de luchtvaartmaatschappij.",
      en: "Your flight is badly delayed and because of that you miss your connecting flight. You go to the airline's desk."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, waarmee kan ik u helpen?",
        en: "Good afternoon, how can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Door de vertraging van mijn eerste vlucht heb ik net mijn aansluiting gemist. Is er een andere vlucht waarmee ik vandaag nog verder kan reizen, of moet ik wachten tot morgen?",
        en: "Good afternoon. Because of the delay of my first flight, I just missed my connection. Is there another flight I can still travel on today, or do I have to wait until tomorrow?"
      },
      {
        speaker: "other",
        nl: "Laat me even kijken. Er is gelukkig nog een vlucht vanavond om acht uur waar ik u op kan zetten.",
        en: "Let me take a look. Fortunately there's still a flight tonight at eight o'clock that I can put you on."
      },
      {
        speaker: "you",
        nl: "Wat een opluchting, dank u wel voor het regelen.",
        en: "What a relief, thank you for arranging that.",
        quick: true
      }
    ]
  },
  {
    topic: "Cursus volgen",
    situation: {
      nl: "Je wilt je inschrijven voor een schilderscursus bij het buurthuis. Je belt om te vragen naar de mogelijkheden.",
      en: "You want to sign up for a painting course at the community center. You call to ask about the options."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met het buurthuis. Waarmee kan ik u helpen?",
        en: "Good afternoon, community center speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik zag op uw website een schilderscursus voor beginners, en die lijkt me erg leuk. Kunt u mij vertellen wanneer die begint, en of er nog plek vrij is?",
        en: "Good afternoon. I saw a beginner's painting course on your website, and it seems really nice to me. Could you tell me when it starts, and whether there's still room available?"
      },
      {
        speaker: "other",
        nl: "Die cursus begint over twee weken, op dinsdagavond, en er zijn nog een paar plekken vrij.",
        en: "That course starts in two weeks, on Tuesday evening, and there are still a few spots available."
      },
      {
        speaker: "you",
        nl: "Dat klinkt goed, ik wil me graag inschrijven.",
        en: "That sounds good, I'd like to sign up.",
        quick: true
      }
    ]
  },
  {
    topic: "Op het werk",
    situation: {
      nl: "Je werkt al twee jaar bij hetzelfde bedrijf en hebt veel nieuwe taken erbij gekregen. Je vraagt je manager om een gesprek over je salaris.",
      en: "You've worked at the same company for two years and have taken on many new tasks. You ask your manager for a conversation about your salary."
    },
    other: "Manager",
    turns: [
      {
        speaker: "other",
        nl: "Je wilde een gesprek met me? Waar zullen we het over hebben?",
        en: "You wanted to have a conversation with me? What shall we talk about?"
      },
      {
        speaker: "you",
        nl: "Ja, ik wilde het graag hebben over mijn salaris. Ik werk hier nu twee jaar en heb het afgelopen jaar veel nieuwe taken erbij gekregen. Zou het mogelijk zijn om te kijken of mijn salaris daarbij past?",
        en: "Yes, I wanted to talk about my salary. I've been working here for two years now and have taken on a lot of new tasks over the past year. Would it be possible to look at whether my salary matches that?"
      },
      {
        speaker: "other",
        nl: "Dat is een terechte vraag. Laten we volgende week een aparte afspraak plannen om dit rustig te bespreken.",
        en: "That's a fair question. Let's schedule a separate appointment next week to discuss this calmly."
      },
      {
        speaker: "you",
        nl: "Dat lijkt me goed, dank je voor je tijd.",
        en: "That sounds good to me, thank you for your time.",
        quick: true
      }
    ]
  },
  {
    topic: "Op het werk",
    situation: {
      nl: "Je hebt de afgelopen weken veel overuren gemaakt voor een project. Je bespreekt met je manager hoe dit gecompenseerd kan worden.",
      en: "You've worked a lot of overtime recently for a project. You discuss with your manager how this can be compensated."
    },
    other: "Manager",
    turns: [
      {
        speaker: "other",
        nl: "Ik zag dat je de afgelopen weken flink wat overuren hebt gemaakt voor het project. Hoe gaat het ermee?",
        en: "I noticed you've worked quite a lot of overtime for the project these past weeks. How's it going?"
      },
      {
        speaker: "you",
        nl: "Het gaat wel, maar ik ben wel behoorlijk moe geworden van de extra uren. Zou het mogelijk zijn om die uren op een later moment op te nemen als vrije tijd, in plaats van dat ze gewoon verdwijnen?",
        en: "It's going okay, but I have gotten quite tired from the extra hours. Would it be possible to take those hours as time off later, instead of them just disappearing?"
      },
      {
        speaker: "other",
        nl: "Dat snap ik helemaal, en dat is zeker mogelijk. Laten we samen kijken welke dagen daarvoor het beste passen.",
        en: "I completely understand that, and that's certainly possible. Let's look together at which days would work best for that."
      }
    ]
  },
  {
    topic: "Vriendschap",
    situation: {
      nl: "Je hebt vorige week ruzie gehad met een goede vriend over een misverstand. Je belt hem om het weer goed te maken.",
      en: "You had an argument with a good friend last week over a misunderstanding. You call him to make up."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Hé, met mij. Ik had eigenlijk niet verwacht dat je zou bellen na vorige week.",
        en: "Hey, it's me. I actually hadn't expected you to call after last week."
      },
      {
        speaker: "you",
        nl: "Ik weet het, maar ik heb er veel over nagedacht en ik denk dat het gewoon een misverstand was. Het spijt me als ik iets verkeerds heb gezegd. Zullen we een keer afspreken om het rustig uit te praten?",
        en: "I know, but I've thought about it a lot and I think it was just a misunderstanding. I'm sorry if I said something wrong. Shall we meet up sometime to talk it out calmly?"
      },
      {
        speaker: "other",
        nl: "Dat vind ik fijn om te horen. Ja, laten we snel afspreken, ik mis onze gesprekken ook.",
        en: "I'm glad to hear that. Yes, let's meet up soon, I miss our conversations too."
      },
      {
        speaker: "you",
        nl: "Fijn, dan bel ik je snel om iets te plannen.",
        en: "Great, I'll call you soon to plan something.",
        quick: true
      }
    ]
  },
  {
    topic: "Familie",
    situation: {
      nl: "Je zus vraagt of jij een avond kunt oppassen op haar dochtertje.",
      en: "Your sister asks if you can babysit her daughter for an evening."
    },
    other: "Zus",
    turns: [
      {
        speaker: "other",
        nl: "Ik heb volgende week vrijdag een etentje met collega's, maar ik heb nog niemand voor de oppas. Zou jij die avond misschien kunnen oppassen op Sophie?",
        en: "I have a dinner with colleagues next Friday, but I don't have anyone for babysitting yet. Could you maybe babysit Sophie that evening?"
      },
      {
        speaker: "you",
        nl: "Ja, dat wil ik best doen, ze is altijd lief gezelschap. Hoe laat moet ik dan komen, en is er nog iets belangrijks dat ik moet weten over haar avondroutine?",
        en: "Yes, I'm happy to do that, she's always sweet company. What time should I come then, and is there anything important I should know about her evening routine?"
      }
    ]
  },
  {
    topic: "Met de buren",
    situation: {
      nl: "Je buurvrouw heeft haar been gebroken en kan haar hond even niet uitlaten. Ze vraagt of jij kunt helpen.",
      en: "Your neighbor has broken her leg and can't walk her dog for a while. She asks if you can help."
    },
    other: "Buurvrouw",
    turns: [
      {
        speaker: "other",
        nl: "Ik heb helaas mijn been gebroken en kan de komende weken niet met mijn hond wandelen. Zou jij hem misschien af en toe kunnen uitlaten? Hij heeft niet veel nodig, gewoon een rondje om het blok.",
        en: "Unfortunately I've broken my leg and can't walk my dog for the coming weeks. Could you maybe walk him every now and then? He doesn't need much, just a walk around the block."
      },
      {
        speaker: "you",
        nl: "Wat vervelend voor je, beterschap! Ik doe het met alle plezier, ik hou zelf ook van honden. Zal ik hem dan elke ochtend voor mijn werk even meenemen?",
        en: "How annoying for you, get well soon! I'd be happy to do it, I love dogs myself too. Shall I take him out every morning before my work then?"
      }
    ]
  },
  {
    topic: "Gezondheid & sport",
    situation: {
      nl: "Je wilt graag beginnen met hardlopen, maar vindt het lastig om het alleen vol te houden. Je vraagt een collega of ze zin heeft om samen te sporten.",
      en: "You'd like to start running, but find it hard to keep it up alone. You ask a colleague if she'd like to exercise together."
    },
    other: "Collega",
    turns: [
      {
        speaker: "other",
        nl: "Hé, ik zag op je bureau een hardloopschoen liggen. Ben je begonnen met hardlopen?",
        en: "Hey, I saw a running shoe on your desk. Have you started running?"
      },
      {
        speaker: "you",
        nl: "Ja, ik ben er net mee begonnen, maar ik merk dat ik het lastig vind om het alleen vol te houden. Heb jij zin om af en toe samen te gaan hardlopen? Dan houden we elkaar een beetje gemotiveerd.",
        en: "Yes, I've just started, but I notice I find it hard to keep it up alone. Do you feel like going running together sometimes? Then we can keep each other a bit motivated."
      },
      {
        speaker: "other",
        nl: "Wat leuk, ik loop zelf ook graag! Zullen we volgende week dinsdag na werk een rondje proberen?",
        en: "How nice, I like running myself too! Shall we try a round next Tuesday after work?"
      },
      {
        speaker: "you",
        nl: "Perfect, dan spreken we dinsdag af.",
        en: "Perfect, we'll arrange for Tuesday then.",
        quick: true
      }
    ]
  },
  {
    topic: "Gezond eten",
    situation: {
      nl: "Een collega heeft een heerlijk gerecht meegenomen voor de lunch. Je vraagt naar het recept.",
      en: "A colleague brought a delicious dish for lunch. You ask about the recipe."
    },
    other: "Collega",
    turns: [
      {
        speaker: "other",
        nl: "Wil je proeven? Ik heb gisteravond deze pastasalade gemaakt, met verse groente uit mijn tuin.",
        en: "Do you want to try some? I made this pasta salad last night, with fresh vegetables from my garden."
      },
      {
        speaker: "you",
        nl: "Ja, heel graag, het ziet er heerlijk uit! Zou je mij het recept kunnen geven? Ik kook zelf niet zo vaak met verse groente, dus ik wil dit graag een keer proberen te maken.",
        en: "Yes, gladly, it looks delicious! Could you give me the recipe? I don't cook with fresh vegetables that often myself, so I'd like to try making this sometime."
      }
    ]
  },
  {
    topic: "Advies geven",
    situation: {
      nl: "Je oude telefoon is stuk en je wilt een nieuwe kopen. Je vraagt een vriend die veel van technologie weet om advies.",
      en: "Your old phone is broken and you want to buy a new one. You ask a friend who knows a lot about technology for advice."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Ik hoorde dat je telefoon kapot is. Wat vervelend! Weet je al wat voor telefoon je wilt kopen?",
        en: "I heard your phone is broken. How annoying! Do you already know what kind of phone you want to buy?"
      },
      {
        speaker: "you",
        nl: "Nog niet echt, ik weet eigenlijk niet zo goed waar ik op moet letten. Ik gebruik mijn telefoon vooral voor foto's maken en berichten sturen. Wat zou jij aanraden binnen een redelijk budget?",
        en: "Not really yet, I don't really know what to look out for. I mainly use my phone for taking photos and sending messages. What would you recommend within a reasonable budget?"
      },
      {
        speaker: "other",
        nl: "Voor jouw gebruik zou ik een middenklasse telefoon aanraden, die zijn vaak veel goedkoper en werken bijna net zo goed als de dure modellen.",
        en: "For your use I would recommend a mid-range phone, they're often much cheaper and work almost as well as the expensive models."
      },
      {
        speaker: "you",
        nl: "Dat klinkt goed, dan ga ik daar eens naar kijken.",
        en: "That sounds good, I'll take a look at that then.",
        quick: true
      }
    ]
  },
  {
    topic: "Bij de bank",
    situation: {
      nl: "Je wilt een nieuwe bankrekening openen bij een andere bank. Je gaat naar het kantoor om informatie te vragen.",
      en: "You want to open a new bank account at a different bank. You go to the office to ask for information."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, waarmee kan ik u helpen?",
        en: "Good afternoon, how can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik wil graag een rekening bij u openen, maar ik heb eerst nog een paar vragen. Ik wil vooral weten of er maandelijkse kosten aan verbonden zijn, en hoe snel ik een bankpas krijg.",
        en: "Good afternoon. I'd like to open an account with you, but I have a few questions first. I especially want to know if there are monthly costs attached, and how quickly I get a bank card."
      },
      {
        speaker: "other",
        nl: "Dat kan ik u vertellen. Voor een basisrekening betaalt u geen maandelijkse kosten, en de bankpas ontvangt u meestal binnen een week per post.",
        en: "I can tell you that. For a basic account you don't pay monthly costs, and you usually receive the bank card within a week by mail."
      },
      {
        speaker: "you",
        nl: "Dat klinkt goed, dan wil ik graag een rekening openen.",
        en: "That sounds good, I'd like to open an account then.",
        quick: true
      }
    ]
  },
  {
    topic: "Bij de gemeente",
    situation: {
      nl: "Je paspoort verloopt binnenkort. Je belt de gemeente om een afspraak te maken voor een nieuw paspoort.",
      en: "Your passport is expiring soon. You call the municipality to make an appointment for a new passport."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemorgen, met de gemeente. Waarmee kan ik u helpen?",
        en: "Good morning, municipality speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemorgen. Mijn paspoort verloopt over twee maanden, en ik ga binnenkort op reis. Zou ik een afspraak kunnen maken om een nieuw paspoort aan te vragen, het liefst zo snel mogelijk?",
        en: "Good morning. My passport expires in two months, and I'm traveling soon. Could I make an appointment to apply for a new passport, preferably as soon as possible?"
      },
      {
        speaker: "other",
        nl: "Dat is goed, ik heb aanstaande donderdag om tien uur nog een plek vrij. Komt dat u uit?",
        en: "That's fine, I still have a spot available this coming Thursday at ten o'clock. Does that suit you?"
      },
      {
        speaker: "you",
        nl: "Ja, dat komt goed uit. Tot donderdag.",
        en: "Yes, that works well. See you Thursday.",
        quick: true
      }
    ]
  },
  {
    topic: "Nieuwe buurt",
    situation: {
      nl: "Je wilt weten welke activiteiten er in het buurthuis worden georganiseerd. Je belt om informatie te vragen.",
      en: "You want to know what activities are organized at the community center. You call to ask for information."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met het buurthuis. Waarmee kan ik u helpen?",
        en: "Good afternoon, community center speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik ben nieuw in de buurt en ik hoorde dat jullie allerlei activiteiten organiseren. Kunt u mij vertellen wat er zoal te doen is, vooral in het weekend?",
        en: "Good afternoon. I'm new to the neighborhood and I heard you organize all kinds of activities. Could you tell me what there is to do, especially on weekends?"
      },
      {
        speaker: "other",
        nl: "Zeker, we hebben bijvoorbeeld een yogales op zaterdagochtend en een gezellige koffieochtend op zondag.",
        en: "Certainly, we have for example a yoga class on Saturday morning and a nice coffee morning on Sunday."
      },
      {
        speaker: "you",
        nl: "Dat klinkt allebei leuk, ik kom binnenkort zeker een keer langs.",
        en: "Both sound nice, I'll definitely come by sometime soon.",
        quick: true
      }
    ]
  },
  {
    topic: "Familie",
    situation: {
      nl: "Je zoon wordt binnenkort zes jaar. Je vraagt je partner om hulp bij het organiseren van zijn verjaardagsfeest.",
      en: "Your son is turning six soon. You ask your partner for help organizing his birthday party."
    },
    other: "Partner",
    turns: [
      {
        speaker: "other",
        nl: "Hoe gaat het eigenlijk met de plannen voor het verjaardagsfeest van Tim? Weet je al wat je wilt doen?",
        en: "How are the plans for Tim's birthday party going actually? Do you already know what you want to do?"
      },
      {
        speaker: "you",
        nl: "Nog niet helemaal, maar ik dacht aan een feestje thuis in de tuin, met een paar spelletjes en een grote taart. Zou jij kunnen helpen met de uitnodigingen en het versieren van de tuin?",
        en: "Not entirely yet, but I was thinking of a party at home in the garden, with a few games and a big cake. Could you help with the invitations and decorating the garden?"
      }
    ]
  },
  {
    topic: "Wasmachine kapot",
    situation: {
      nl: "Je wasmachine doet het niet meer. Je belt een reparatieservice om iemand langs te laten komen.",
      en: "Your washing machine has stopped working. You call a repair service to have someone come by."
    },
    other: "Monteur",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met de reparatieservice. Waarmee kan ik u helpen?",
        en: "Good afternoon, repair service speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Mijn wasmachine start niet meer op, en ik hoor een raar geluid als ik op de knop druk. Zou iemand deze week nog kunnen langskomen om te kijken wat er aan de hand is?",
        en: "Good afternoon. My washing machine won't start anymore, and I hear a strange noise when I press the button. Could someone come by this week to see what's going on?"
      },
      {
        speaker: "other",
        nl: "Dat kan. Ik kan iemand sturen op donderdagochtend, tussen negen en elf uur. Komt dat uit?",
        en: "That's possible. I can send someone Thursday morning, between nine and eleven o'clock. Does that work?"
      },
      {
        speaker: "you",
        nl: "Ja, dat komt goed uit. Dank u wel.",
        en: "Yes, that works well. Thank you.",
        quick: true
      }
    ]
  },
  {
    topic: "Cadeau terugbrengen",
    situation: {
      nl: "Je hebt van een vriendin een trui gekregen, maar hij past niet goed. Je vraagt of je hem mag omruilen in de winkel waar ze hem gekocht heeft.",
      en: "You got a sweater from a friend, but it doesn't fit well. You ask if you can exchange it at the store where she bought it."
    },
    other: "Vriendin",
    turns: [
      {
        speaker: "other",
        nl: "Vond je de trui mooi die ik je gegeven heb? Ik was even bang dat de kleur niet zou passen bij jou.",
        en: "Did you like the sweater I gave you? I was a bit worried the color wouldn't suit you."
      },
      {
        speaker: "you",
        nl: "De kleur is juist heel mooi, maar hij is helaas net iets te klein. Weet je toevallig in welke winkel je hem gekocht hebt? Dan kan ik kijken of ik hem daar kan omruilen voor een maatje groter.",
        en: "The color is actually really nice, but unfortunately it's just a bit too small. Do you happen to know which store you bought it at? Then I can see if I can exchange it there for a size bigger."
      },
      {
        speaker: "other",
        nl: "Ja, ik heb hem bij de winkel in het centrum gekocht, en ik heb de bon nog. Ik stuur je een foto ervan.",
        en: "Yes, I bought it at the store downtown, and I still have the receipt. I'll send you a photo of it."
      },
      {
        speaker: "you",
        nl: "Dank je wel, dat is heel fijn.",
        en: "Thank you, that's very kind.",
        quick: true
      }
    ]
  },
  {
    topic: "Weer & afspraken",
    situation: {
      nl: "Er wordt zwaar onweer verwacht op de dag dat je met een vriend zou gaan wandelen. Je stelt voor om de afspraak te verzetten.",
      en: "Heavy thunderstorms are expected on the day you were going to go for a walk with a friend. You suggest rescheduling."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Heb je zin om morgen die lange wandeling te maken die we gepland hadden? Ik kijk er al naar uit.",
        en: "Do you feel like doing that long walk we planned tomorrow? I'm already looking forward to it."
      },
      {
        speaker: "you",
        nl: "Ik ook, maar ik zag net dat er morgen zwaar onweer wordt verwacht, de hele middag. Zullen we het liever verzetten naar zaterdag, als het weer beter is? Dan kunnen we ook langer buiten blijven.",
        en: "Me too, but I just saw that heavy thunderstorms are expected tomorrow, all afternoon. Shall we reschedule to Saturday instead, when the weather is better? Then we can also stay outside longer."
      },
      {
        speaker: "other",
        nl: "Goed idee, met onweer is wandelen inderdaad niet zo verstandig. Zaterdag is prima voor mij.",
        en: "Good idea, walking in a thunderstorm isn't really wise indeed. Saturday works fine for me."
      },
      {
        speaker: "you",
        nl: "Mooi, dan spreken we zaterdag af.",
        en: "Great, we'll meet up Saturday then.",
        quick: true
      }
    ]
  },
  {
    topic: "Autopech",
    situation: {
      nl: "Je auto slaat af op de snelweg en start niet meer. Je belt de wegenwacht om hulp.",
      en: "Your car stalls on the highway and won't start again. You call roadside assistance for help."
    },
    other: "Wegenwacht",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met de wegenwacht. Waar bevindt u zich, en wat is het probleem?",
        en: "Good afternoon, roadside assistance speaking. Where are you located, and what's the problem?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik sta op de snelweg net na afslag twaalf, en mijn auto start opeens niet meer. Ik heb de motorkap al even geopend, maar ik zie zelf niets vreemds. Hoe lang duurt het ongeveer voordat er iemand is?",
        en: "Good afternoon. I'm on the highway just after exit twelve, and my car suddenly won't start anymore. I've already opened the hood, but I don't see anything strange myself. How long does it take roughly before someone arrives?"
      },
      {
        speaker: "other",
        nl: "Ik stuur direct iemand naartoe, dat duurt ongeveer twintig minuten. Blijf voor de veiligheid wel achter de vangrail staan.",
        en: "I'm sending someone right away, that will take about twenty minutes. For safety, please stay behind the guardrail."
      },
      {
        speaker: "you",
        nl: "Oké, dank u wel, ik wacht daar rustig.",
        en: "Okay, thank you, I'll wait there calmly.",
        quick: true
      }
    ]
  },
  {
    topic: "Rijschool",
    situation: {
      nl: "Je wilt je rijbewijs gaan halen. Je belt een rijschool om te vragen naar de mogelijkheden.",
      en: "You want to get your driver's license. You call a driving school to ask about the options."
    },
    other: "Rijschool",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met rijschool Van Dijk. Waarmee kan ik u helpen?",
        en: "Good afternoon, Van Dijk driving school speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik wil graag mijn rijbewijs gaan halen, maar ik heb nog nooit achter het stuur gezeten. Hoeveel lessen heb ik ongeveer nodig, denkt u, en kan ik ergens deze maand nog beginnen?",
        en: "Good afternoon. I'd like to get my driver's license, but I've never sat behind the wheel before. How many lessons do you think I'd need roughly, and could I start sometime this month still?"
      },
      {
        speaker: "other",
        nl: "Dat verschilt per persoon, maar gemiddeld hebben mensen zo'n dertig lessen nodig. We hebben volgende week nog plek voor een eerste les.",
        en: "That differs per person, but on average people need about thirty lessons. We still have room next week for a first lesson."
      },
      {
        speaker: "you",
        nl: "Dat klinkt goed, ik wil me graag inschrijven.",
        en: "That sounds good, I'd like to sign up.",
        quick: true
      }
    ]
  },
  {
    topic: "Sollicitatiegesprek",
    situation: {
      nl: "Je hebt volgende week een sollicitatiegesprek voor een nieuwe baan. Je vraagt een vriend die hier ervaring mee heeft om advies.",
      en: "You have a job interview next week for a new job. You ask a friend with experience for advice."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Ik hoorde dat je volgende week een sollicitatiegesprek hebt. Hoe voel je je erbij? Ben je een beetje zenuwachtig?",
        en: "I heard you have a job interview next week. How are you feeling about it? Are you a bit nervous?"
      },
      {
        speaker: "you",
        nl: "Best wel eerlijk gezegd, het is alweer een tijdje geleden dat ik heb gesolliciteerd. Heb jij nog tips voor mij, aangezien jij hier veel ervaring mee hebt? Ik wil vooral weten hoe ik het beste kan reageren op lastige vragen.",
        en: "Quite honestly, yes, it's been a while since I last applied for a job. Do you have any tips for me, since you have a lot of experience with this? I especially want to know how best to respond to difficult questions."
      },
      {
        speaker: "other",
        nl: "Mijn beste tip is om altijd concrete voorbeelden te geven uit je eigen ervaring, in plaats van algemene antwoorden. En blijf vooral rustig ademen als je een moeilijke vraag krijgt.",
        en: "My best tip is to always give concrete examples from your own experience, instead of general answers. And especially keep breathing calmly when you get a difficult question."
      },
      {
        speaker: "you",
        nl: "Dank je wel, dat helpt me echt.",
        en: "Thank you, that really helps me.",
        quick: true
      }
    ]
  },
  {
    topic: "Verhuisbedrijf",
    situation: {
      nl: "Je gaat binnenkort verhuizen naar een groter huis. Je belt een verhuisbedrijf om een offerte te vragen.",
      en: "You're moving to a bigger house soon. You call a moving company to ask for a quote."
    },
    other: "Verhuisbedrijf",
    turns: [
      {
        speaker: "other",
        nl: "Goedemorgen, met verhuisbedrijf Snel. Waarmee kan ik u helpen?",
        en: "Good morning, Snel moving company speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemorgen. Ik ga over twee weken verhuizen naar een groter huis, en ik zoek een verhuisbedrijf dat kan helpen met de grote meubels. Zou u langs kunnen komen om een offerte te maken, of kan dat ook via de telefoon?",
        en: "Good morning. I'm moving to a bigger house in two weeks, and I'm looking for a moving company that can help with the big furniture. Could you come by to make a quote, or can that also be done over the phone?"
      },
      {
        speaker: "other",
        nl: "Voor een goede prijsopgave komen we het liefst even langs. Zou aanstaande vrijdag om twee uur u uitkomen?",
        en: "For an accurate quote we'd prefer to come by. Would this coming Friday at two o'clock suit you?"
      },
      {
        speaker: "you",
        nl: "Ja, dat komt goed uit. Tot vrijdag.",
        en: "Yes, that works well. See you Friday.",
        quick: true
      }
    ]
  },
  {
    topic: "Kinderopvang",
    situation: {
      nl: "Je gaat binnenkort weer werken en zoekt kinderopvang voor je zoontje. Je belt een kinderdagverblijf om informatie te vragen.",
      en: "You're going back to work soon and are looking for childcare for your son. You call a daycare center for information."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met kinderdagverblijf De Regenboog. Waarmee kan ik u helpen?",
        en: "Good afternoon, De Regenboog daycare speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik ga over een maand weer werken en zoek opvang voor mijn zoontje van twee jaar. Heeft u nog plek beschikbaar, en hoe werkt de wachtlijst als dat niet zo is?",
        en: "Good afternoon. I'm going back to work in a month and am looking for care for my two-year-old son. Do you still have room available, and how does the waiting list work if not?"
      },
      {
        speaker: "other",
        nl: "We hebben gelukkig nog een paar plekken vrij voor die leeftijd. Ik kan u een rondleiding geven, zodat u kunt zien hoe het er hier aan toe gaat.",
        en: "Fortunately we still have a few spots available for that age. I can give you a tour, so you can see what it's like here."
      },
      {
        speaker: "you",
        nl: "Dat lijkt me fijn, wanneer zou dat kunnen?",
        en: "That sounds nice, when would that be possible?",
        quick: true
      }
    ]
  },
  {
    topic: "Met de buren",
    situation: {
      nl: "De schutting tussen jouw tuin en die van de buurman is kapot gewaaid. Je bespreekt met hem wie dit gaat repareren.",
      en: "The fence between your garden and your neighbor's has blown over. You discuss with him who will fix it."
    },
    other: "Buurman",
    turns: [
      {
        speaker: "other",
        nl: "Heb je gezien dat de schutting tussen onze tuinen kapot is gewaaid? Volgens mij was het de storm van afgelopen week.",
        en: "Did you see that the fence between our gardens blew over? I think it was the storm from last week."
      },
      {
        speaker: "you",
        nl: "Ja, ik zag het gisteren al. Zullen we samen kijken hoe we dit het beste kunnen oplossen? Ik dacht dat we misschien de kosten kunnen delen, aangezien de schutting van ons allebei is.",
        en: "Yes, I saw it yesterday already. Shall we look together at how we can best solve this? I thought maybe we could split the costs, since the fence belongs to both of us."
      },
      {
        speaker: "other",
        nl: "Dat lijkt me redelijk. Ik ken wel een goede aannemer die dit snel kan repareren, zal ik hem bellen voor een prijsopgave?",
        en: "That seems reasonable to me. I know a good contractor who can fix this quickly, shall I call him for a price quote?"
      },
      {
        speaker: "you",
        nl: "Graag, laat me weten wat hij zegt.",
        en: "Please do, let me know what he says.",
        quick: true
      }
    ]
  },
  {
    topic: "Fitnessabonnement",
    situation: {
      nl: "Je wilt je abonnement bij de sportschool opzeggen omdat je gaat verhuizen. Je belt de klantenservice.",
      en: "You want to cancel your gym membership because you're moving. You call customer service."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met de klantenservice van FitClub. Waarmee kan ik u helpen?",
        en: "Good afternoon, FitClub customer service speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik ga volgende maand verhuizen naar een andere stad, en ik wil daarom mijn abonnement opzeggen. Hoe lang van tevoren moet ik dit doorgeven, en zijn er nog kosten aan verbonden?",
        en: "Good afternoon. I'm moving to another city next month, and I want to cancel my membership because of that. How far in advance do I need to report this, and are there any costs attached?"
      },
      {
        speaker: "other",
        nl: "U moet dit een maand van tevoren opzeggen, en dat doet u nu precies op tijd. Er zijn geen extra kosten aan verbonden.",
        en: "You need to cancel a month in advance, and you're doing that exactly on time now. There are no extra costs attached."
      },
      {
        speaker: "you",
        nl: "Dat is fijn om te horen, dank u wel.",
        en: "That's nice to hear, thank you.",
        quick: true
      }
    ]
  },
  {
    topic: "Energierekening",
    situation: {
      nl: "Je energierekening is de laatste maanden flink gestegen. Je belt je energieleverancier om te vragen waarom.",
      en: "Your energy bill has risen significantly in recent months. You call your energy provider to ask why."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met de klantenservice. Waarmee kan ik u helpen?",
        en: "Good afternoon, customer service speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik zag dat mijn energierekening de laatste paar maanden flink gestegen is, terwijl ik niet meer ben gaan gebruiken. Zou u kunnen uitleggen waar dat door komt, en kan ik mijn maandbedrag laten aanpassen?",
        en: "Good afternoon. I noticed my energy bill has risen significantly in the past few months, while I haven't started using more. Could you explain what's causing that, and can I have my monthly amount adjusted?"
      },
      {
        speaker: "other",
        nl: "Dat komt waarschijnlijk door de hogere energieprijzen dit jaar. Ik kan uw maandbedrag zeker aanpassen, zullen we dat nu samen doen?",
        en: "That's probably due to the higher energy prices this year. I can certainly adjust your monthly amount, shall we do that together now?"
      },
      {
        speaker: "you",
        nl: "Ja, graag, dat lijkt me verstandig.",
        en: "Yes, please, that seems wise to me.",
        quick: true
      }
    ]
  },
  {
    topic: "Pakket kwijt",
    situation: {
      nl: "Je hebt online iets besteld, maar het pakket is nooit aangekomen. Je belt de klantenservice van de bezorgdienst.",
      en: "You ordered something online, but the package never arrived. You call the delivery service's customer service."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met de klantenservice. Waarmee kan ik u helpen?",
        en: "Good afternoon, customer service speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Volgens de tracking is mijn pakket vorige week bezorgd, maar ik heb het nooit ontvangen. Zou u kunnen uitzoeken wat er is gebeurd, en wat de mogelijkheden zijn als het pakket echt kwijt is?",
        en: "Good afternoon. According to the tracking, my package was delivered last week, but I never received it. Could you find out what happened, and what the options are if the package is truly lost?"
      },
      {
        speaker: "other",
        nl: "Dat is heel vervelend, dat ga ik direct voor u uitzoeken. Als het pakket niet teruggevonden wordt, krijgt u vanzelfsprekend uw geld terug.",
        en: "That's very annoying, I'll look into that for you right away. If the package isn't found, you'll of course get your money back."
      },
      {
        speaker: "you",
        nl: "Dank u wel, ik hoor het graag van u.",
        en: "Thank you, I'd love to hear from you.",
        quick: true
      }
    ]
  },
  {
    topic: "Nederlands leren",
    situation: {
      nl: "Je hebt je taalcursus bijna afgerond. Je vraagt de docent naar het examen en het certificaat.",
      en: "You've almost finished your language course. You ask the teacher about the exam and the certificate."
    },
    other: "Docent",
    turns: [
      {
        speaker: "other",
        nl: "We zijn bijna aan het einde van de cursus. Heb je nog vragen over de laatste weken, of over het examen?",
        en: "We're almost at the end of the course. Do you have any questions about the last few weeks, or about the exam?"
      },
      {
        speaker: "you",
        nl: "Ja, eigenlijk wel. Ik wilde weten hoe het examen er precies uitziet, en of ik daarna automatisch een certificaat krijg. Moet ik me daar apart voor aanmelden?",
        en: "Yes, actually I do. I wanted to know exactly what the exam looks like, and whether I automatically get a certificate afterwards. Do I need to sign up separately for that?"
      },
      {
        speaker: "other",
        nl: "Het examen bestaat uit een schriftelijk en een mondeling deel, en je krijgt het certificaat automatisch als je slaagt. Aanmelden hoeft niet apart, dat regel ik voor de hele groep.",
        en: "The exam consists of a written and an oral part, and you automatically get the certificate if you pass. You don't need to sign up separately, I arrange that for the whole group."
      },
      {
        speaker: "you",
        nl: "Fijn, dan weet ik precies waar ik aan toe ben.",
        en: "Great, now I know exactly where I stand.",
        quick: true
      }
    ]
  },
  {
    topic: "Sociale afspraken",
    situation: {
      nl: "Een vriend heeft je vorige week geholpen met verhuizen. Je belt hem om te bedanken en stelt voor om samen te eten.",
      en: "A friend helped you move last week. You call him to thank him and suggest having dinner together."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Hoi! Hoe bevalt het nieuwe huis inmiddels? Is alles al een beetje op zijn plek?",
        en: "Hi! How do you like the new house so far? Is everything a bit in place already?"
      },
      {
        speaker: "you",
        nl: "Het bevalt heel goed, dank je wel! Ik wilde je trouwens nog bedanken voor je hulp met verhuizen vorige week, dat heeft me echt veel geholpen. Zullen we binnenkort samen eten, dan trakteer ik als bedankje?",
        en: "I like it a lot, thank you! By the way, I wanted to thank you again for your help moving last week, that really helped me a lot. Shall we have dinner together soon, my treat as a thank you?"
      },
      {
        speaker: "other",
        nl: "Graag gedaan, en dat klinkt heel gezellig! Zullen we volgende week vrijdag afspreken?",
        en: "You're welcome, and that sounds like fun! Shall we meet up next Friday?"
      },
      {
        speaker: "you",
        nl: "Perfect, dan zie ik je vrijdag.",
        en: "Perfect, I'll see you Friday then.",
        quick: true
      }
    ]
  },
  {
    topic: "Bouwoverlast",
    situation: {
      nl: "Er wordt al weken vroeg in de ochtend hard geboord bij de verbouwing naast je huis. Je spreekt de aannemer erop aan.",
      en: "There's been loud drilling early in the morning for weeks from the renovation next door. You address it with the contractor."
    },
    other: "Aannemer",
    turns: [
      {
        speaker: "other",
        nl: "Goedemorgen, kan ik iets voor u doen?",
        en: "Good morning, can I do something for you?"
      },
      {
        speaker: "you",
        nl: "Goedemorgen. Ik wilde u even aanspreken op het geluid van de verbouwing. Jullie beginnen vaak al om zeven uur met boren, en daar word ik elke keer wakker van. Zou het mogelijk zijn om pas na acht uur te beginnen?",
        en: "Good morning. I wanted to talk to you about the noise from the renovation. You often start drilling as early as seven o'clock, and it wakes me up every time. Would it be possible to start only after eight o'clock?"
      },
      {
        speaker: "other",
        nl: "Dat begrijp ik helemaal, sorry voor het ongemak. Ik zal het doorgeven aan het team, zodat we voortaan later beginnen.",
        en: "I completely understand, sorry for the inconvenience. I'll pass it on to the team, so we start later from now on."
      },
      {
        speaker: "you",
        nl: "Dank u wel, dat stel ik echt op prijs.",
        en: "Thank you, I really appreciate that.",
        quick: true
      }
    ]
  },
  {
    topic: "Museum",
    situation: {
      nl: "Je wilt met een groep vrienden een rondleiding boeken bij een museum. Je belt om de mogelijkheden te bespreken.",
      en: "You want to book a guided tour at a museum with a group of friends. You call to discuss the options."
    },
    other: "Medewerker",
    turns: [
      {
        speaker: "other",
        nl: "Goedemiddag, met het museum. Waarmee kan ik u helpen?",
        en: "Good afternoon, museum speaking. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik wil graag met een groep van acht vrienden een rondleiding boeken, het liefst op een zaterdag. Kunt u mij vertellen hoe lang een rondleiding duurt, en of we van tevoren moeten reserveren?",
        en: "Good afternoon. I'd like to book a guided tour with a group of eight friends, preferably on a Saturday. Could you tell me how long a tour takes, and whether we need to reserve in advance?"
      },
      {
        speaker: "other",
        nl: "Een rondleiding duurt ongeveer anderhalf uur, en voor een groep van acht is reserveren zeker verstandig. Zal ik u inplannen voor komende zaterdag om elf uur?",
        en: "A tour takes about an hour and a half, and for a group of eight, reserving is definitely wise. Shall I schedule you for this coming Saturday at eleven o'clock?"
      },
      {
        speaker: "you",
        nl: "Ja, graag, dat komt goed uit voor iedereen.",
        en: "Yes, please, that works well for everyone.",
        quick: true
      }
    ]
  },
  {
    topic: "Sociale afspraken",
    situation: {
      nl: "Je favoriete band komt binnenkort optreden. Je vraagt een vriendin of ze mee wil naar het concert.",
      en: "Your favorite band is performing soon. You ask a friend if she wants to come to the concert with you."
    },
    other: "Vriendin",
    turns: [
      {
        speaker: "other",
        nl: "Hé, heb je al iets leuks gepland voor volgende maand?",
        en: "Hey, do you already have something fun planned for next month?"
      },
      {
        speaker: "you",
        nl: "Nog niet echt, maar ik zag dat mijn favoriete band binnenkort optreedt in de stad. Heb je zin om samen te gaan? De kaartjes zijn niet heel duur, en het belooft een geweldige show te worden.",
        en: "Not really yet, but I saw that my favorite band is performing in the city soon. Do you feel like going together? The tickets aren't very expensive, and it promises to be a great show."
      },
      {
        speaker: "other",
        nl: "Wat leuk, ja graag! Ik ken die band ook wel, wanneer moeten we de kaartjes kopen?",
        en: "How nice, yes please! I know that band too, when do we need to buy the tickets?"
      },
      {
        speaker: "you",
        nl: "Volgens de website zijn ze al te koop, dus ik regel ze deze week nog.",
        en: "According to the website they're already on sale, so I'll arrange them this week.",
        quick: true
      }
    ]
  },
  {
    topic: "Tweedehands meubels",
    situation: {
      nl: "Je hebt online een tweedehands bank gezien die je graag wilt kopen. Je belt de verkoper om een afspraak te maken om hem op te halen.",
      en: "You saw a second-hand couch online that you'd like to buy. You call the seller to arrange picking it up."
    },
    other: "Verkoper",
    turns: [
      {
        speaker: "other",
        nl: "Hallo, met wie spreek ik?",
        en: "Hello, who am I speaking with?"
      },
      {
        speaker: "you",
        nl: "Hallo, u spreekt met mij over de bank die u online te koop heeft staan. Ik ben erg geïnteresseerd. Is hij nog beschikbaar, en zou ik hem dit weekend kunnen komen ophalen?",
        en: "Hello, I'm calling about the couch you have for sale online. I'm very interested. Is it still available, and could I come pick it up this weekend?"
      },
      {
        speaker: "other",
        nl: "Ja, hij is nog beschikbaar. Zaterdagmiddag zou prima uitkomen, dan ben ik thuis om je te helpen dragen.",
        en: "Yes, it's still available. Saturday afternoon would work well, I'll be home then to help you carry it."
      },
      {
        speaker: "you",
        nl: "Dat is fijn, dan zie ik u zaterdag.",
        en: "That's great, I'll see you Saturday then.",
        quick: true
      }
    ]
  }
];
