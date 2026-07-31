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
        nl: "Goedemorgen, met de huisartsenpraktijk. U had morgen om tien uur een afspraak. Waar kan ik u mee helpen?",
        en: "Good morning, doctor's office speaking. You had an appointment tomorrow at ten o'clock. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemorgen. Ik kan morgen niet komen, want ik moet werken. Kan ik de afspraak verzetten naar donderdag? Die middag ben ik helemaal vrij.",
        en: "Good morning. I can't come tomorrow, because I have to work. Can I move the appointment to Thursday? I'm completely free that afternoon."
      },
      {
        speaker: "other",
        nl: "Dat is geen probleem. Ik kan u donderdag om twee uur inplannen. Komt dat u uit?",
        en: "That's no problem. I can schedule you for Thursday at two o'clock. Does that suit you?"
      },
      {
        speaker: "you",
        nl: "Ja, dat komt goed uit. Dank u wel.",
        en: "Yes, that works well. Thank you."
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
        nl: "Hoi, je wilde me iets vragen? Waar gaat het over?",
        en: "Hi, you wanted to ask me something? What's it about?"
      },
      {
        speaker: "you",
        nl: "Ja. Mag ik volgende week vrijdag vrij nemen? Mijn zus trouwt die dag. Ik weet dat het kort van tevoren is, maar ik hoop dat het toch kan.",
        en: "Yes. Could I take next Friday off? My sister is getting married that day. I know it's short notice, but I hope it's still possible."
      },
      {
        speaker: "other",
        nl: "Dat is geen probleem. Maak je je werk deze week wel op tijd af?",
        en: "That's no problem. Will you finish your work this week on time though?"
      },
      {
        speaker: "you",
        nl: "Natuurlijk. Ik maak mijn taken deze week alvast af.",
        en: "Of course. I'll get my tasks done this week already."
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
        nl: "Hoi! Alles goed met jou?",
        en: "Hi! Everything good with you?"
      },
      {
        speaker: "you",
        nl: "Ja, goed hoor. Ik wil je wel iets vragen. Ik hoor 's avonds vaak harde muziek. Ik moet vroeg opstaan voor mijn werk en kan dan niet goed slapen. Kun je de muziek na tien uur zachter zetten?",
        en: "Yes, good actually. I do want to ask you something. I often hear loud music in the evening. I have to get up early for work and can't sleep well then. Could you turn the music down after ten o'clock?"
      },
      {
        speaker: "other",
        nl: "Oh, dat wist ik niet. Sorry! Ik let er vanaf nu op.",
        en: "Oh, I didn't know that. Sorry! I'll pay attention to it from now on."
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
        nl: "Hallo, kan ik u ergens mee helpen?",
        en: "Hello, can I help you with something?"
      },
      {
        speaker: "you",
        nl: "Ja, graag. Ik zoek het station. Ik ken de weg hier niet zo goed. Hoe kom ik daar het snelst?",
        en: "Yes, please. I'm looking for the station. I don't know my way around here very well. What's the fastest way to get there?"
      },
      {
        speaker: "other",
        nl: "Natuurlijk. Loop deze straat rechtdoor tot het stoplicht. Sla daar linksaf. Het station is dan aan uw rechterhand.",
        en: "Of course. Walk straight down this street to the traffic light. Turn left there. The station is then on your right."
      },
      {
        speaker: "you",
        nl: "Dank u wel! Dat is heel duidelijk.",
        en: "Thank you! That's very clear."
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
        nl: "Hé, ik kijk al uit naar vanavond! Hoe laat spreken we af?",
        en: "Hey, I'm already looking forward to tonight! What time shall we meet?"
      },
      {
        speaker: "you",
        nl: "Hoi. Ik bel je voor iets anders. Ik voel me niet zo lekker. Ik denk dat ik vanavond beter thuis kan blijven. Vind je het erg als we een andere dag afspreken?",
        en: "Hi. I'm calling about something else. I don't feel very well. I think it's better if I stay home tonight. Do you mind if we meet on another day?"
      },
      {
        speaker: "other",
        nl: "Nee, dat is niet erg. Beterschap! Zullen we volgende week zaterdag afspreken?",
        en: "No, that's fine. Get well soon! Shall we meet next Saturday?"
      },
      {
        speaker: "you",
        nl: "Dat is een goed idee. Dan ben ik ook weer helemaal beter.",
        en: "That's a good idea. By then I'll also be completely better again."
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
        nl: "Ik wil een tweedehands fiets kopen. Ik weet niet goed waar ik op moet letten. Heb jij daar ervaring mee?",
        en: "I want to buy a second-hand bike. I don't really know what to look out for. Do you have experience with that?"
      },
      {
        speaker: "you",
        nl: "Zeker. Check altijd eerst de banden en de remmen, want die zijn duur om te vervangen. Kijk ook of de fiets niet te veel roest heeft. Fiets even een stukje voordat je hem koopt.",
        en: "Sure. Always check the tires and the brakes first, because those are expensive to replace. Also check that the bike doesn't have too much rust. Ride it a bit before you buy it."
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
        nl: "Hé, heb je al plannen voor dit weekend?",
        en: "Hey, do you already have plans for this weekend?"
      },
      {
        speaker: "you",
        nl: "Nog niet helemaal. Zaterdag ga ik naar de markt. Daarna zit ik misschien op een terras, als het weer goed is. Zondag doe ik het rustig aan met een boek. En jij, heb jij al iets leuks gepland?",
        en: "Not entirely yet. On Saturday I'm going to the market. Afterwards I might sit on a terrace, if the weather is good. On Sunday I'll take it easy with a book. And you, do you already have something fun planned?"
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
        nl: "Goedemiddag. Waarmee kan ik u helpen?",
        en: "Good afternoon. How can I help you?"
      },
      {
        speaker: "you",
        nl: "Goedemiddag. Ik heb twee weken geleden deze broodrooster gekocht. Hij doet het nu niet meer. Kan ik hem omruilen voor een nieuwe?",
        en: "Good afternoon. I bought this toaster two weeks ago. It doesn't work anymore now. Can I exchange it for a new one?"
      },
      {
        speaker: "other",
        nl: "Dat is jammer. Heeft u de bon nog? Dan kunt u hem gratis omruilen.",
        en: "That's a shame. Do you still have the receipt? Then you can exchange it for free."
      },
      {
        speaker: "you",
        nl: "Ja, ik heb de bon hier bij me.",
        en: "Yes, I have the receipt here with me."
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
        nl: "Hoi, waar blijf je? De vergadering begint zo.",
        en: "Hi, where are you? The meeting starts soon."
      },
      {
        speaker: "you",
        nl: "Hoi, sorry! Mijn trein heeft vertraging. Ik ben er over twintig minuten. Kunnen jullie alvast beginnen zonder mij?",
        en: "Hi, sorry! My train is delayed. I'll be there in twenty minutes. Can you all start without me?"
      },
      {
        speaker: "other",
        nl: "Geen probleem. Ik vertel je later wat je gemist hebt.",
        en: "No problem. I'll tell you later what you missed."
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
        nl: "Hoe gaat het met je Nederlands? Vind je het moeilijk?",
        en: "How is your Dutch going? Do you find it difficult?"
      },
      {
        speaker: "you",
        nl: "Het gaat wel goed, maar grammatica vind ik nog lastig. Kun jij mij misschien een keer helpen met oefenen?",
        en: "It's going alright, but I still find grammar difficult. Could you maybe help me practice sometime?"
      },
      {
        speaker: "other",
        nl: "Natuurlijk! Zullen we volgende week samen studeren in de bibliotheek?",
        en: "Of course! Shall we study together next week in the library?"
      },
      {
        speaker: "you",
        nl: "Ja, heel graag. Dank je wel voor je hulp.",
        en: "Yes, I'd really like that. Thank you for your help."
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
        nl: "Hoi! Doe je iets leuks voor je verjaardag dit jaar?",
        en: "Hi! Are you doing something fun for your birthday this year?"
      },
      {
        speaker: "you",
        nl: "Ja, ik geef een klein feestje bij mij thuis. Kom je ook? Het is zaterdag om acht uur.",
        en: "Yes, I'm having a small party at my place. Are you coming too? It's Saturday at eight o'clock."
      },
      {
        speaker: "other",
        nl: "Leuk, ik kom graag! Zal ik iets meenemen om te drinken?",
        en: "Nice, I'd love to come! Shall I bring something to drink?"
      },
      {
        speaker: "you",
        nl: "Dat is niet nodig, maar het mag natuurlijk wel.",
        en: "That's not necessary, but you're welcome to of course."
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
        nl: "Goedemorgen, met makelaarskantoor De Vries.",
        en: "Good morning, De Vries estate agency speaking."
      },
      {
        speaker: "you",
        nl: "Goedemorgen. Ik heb een appartement op uw website gezien. Kan ik een afspraak maken om het te bekijken?",
        en: "Good morning. I saw an apartment on your website. Can I make an appointment to view it?"
      },
      {
        speaker: "other",
        nl: "Zeker. Komt woensdagmiddag om drie uur u uit?",
        en: "Certainly. Does Wednesday afternoon at three o'clock suit you?"
      },
      {
        speaker: "you",
        nl: "Ja, dat komt goed uit. Tot woensdag!",
        en: "Yes, that works well. See you Wednesday!"
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
        nl: "Eet jij weleens fastfood? Ik doe het zelf best vaak.",
        en: "Do you ever eat fast food? I do it myself quite often."
      },
      {
        speaker: "you",
        nl: "Ik eet het soms, maar niet te vaak. Meestal kook ik gezond, met groente en fruit. Zo voel ik me beter.",
        en: "I eat it sometimes, but not too often. I usually cook healthy, with vegetables and fruit. That way I feel better."
      }
    ]
  }
];
