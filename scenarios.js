const SCENARIOS = [
  {
    topic: "Gezondheid & sport",
    situation: {
      nl: "Je vriend vraagt je om advies over sporten.",
      en: "Your friend is asking you for advice about exercising."
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
      nl: "Je belt de assistente van de huisarts om je afspraak te verzetten.",
      en: "You call the doctor's assistant to reschedule your appointment."
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
        nl: "Goedemorgen. Ik kan morgen helaas niet komen, want ik moet werken. Zou het mogelijk zijn om de afspraak te verzetten naar donderdag? Ik ben die dag de hele middag vrij.",
        en: "Good morning. Unfortunately I can't come tomorrow, because I have to work. Would it be possible to move the appointment to Thursday? I'm free that whole afternoon."
      },
      {
        speaker: "other",
        nl: "Dat is geen probleem. Ik kan u donderdag om twee uur inplannen. Komt dat u uit?",
        en: "That's no problem. I can schedule you for Thursday at two o'clock. Does that suit you?"
      },
      {
        speaker: "you",
        nl: "Ja, dat komt goed uit. Dank u wel voor uw hulp.",
        en: "Yes, that works well. Thank you for your help."
      }
    ]
  },
  {
    topic: "Op het werk",
    situation: {
      nl: "Je vraagt je manager om een dag vrij.",
      en: "You ask your manager for a day off."
    },
    other: "Manager",
    turns: [
      {
        speaker: "other",
        nl: "Je wilde iets vragen? Waar gaat het over?",
        en: "You wanted to ask something? What's it about?"
      },
      {
        speaker: "you",
        nl: "Ja, ik wilde vragen of ik volgende week vrijdag vrij mag nemen. Mijn zus trouwt en de bruiloft is die dag. Ik weet dat het weinig van tevoren is, maar ik hoop dat het toch kan.",
        en: "Yes, I wanted to ask if I could take next Friday off. My sister is getting married and the wedding is that day. I know it's short notice, but I hope it's still possible."
      },
      {
        speaker: "other",
        nl: "Dat lijkt me geen probleem. Zorg je er wel voor dat je werk op tijd af is voordat je weggaat?",
        en: "That doesn't seem like a problem to me. Will you make sure your work is finished on time before you leave?"
      },
      {
        speaker: "you",
        nl: "Natuurlijk, ik zal mijn taken deze week alvast afmaken.",
        en: "Of course, I'll finish my tasks this week already."
      }
    ]
  },
  {
    topic: "Met de buren",
    situation: {
      nl: "Je spreekt je buurman aan over geluidsoverlast.",
      en: "You talk to your neighbor about noise disturbance."
    },
    other: "Buurman",
    turns: [
      {
        speaker: "other",
        nl: "Hoi, alles goed? Ik zag je al aankomen.",
        en: "Hi, all good? I saw you coming already."
      },
      {
        speaker: "you",
        nl: "Hoi, met mij gaat het goed, dank je. Ik wilde je alleen even zeggen dat ik 's avonds laat vaak harde muziek hoor. Ik moet vroeg opstaan voor mijn werk en kan daardoor niet goed slapen. Zou je de muziek na tien uur wat zachter kunnen zetten?",
        en: "Hi, I'm doing well, thanks. I just wanted to tell you that I often hear loud music late in the evening. I have to get up early for work and because of that I can't sleep well. Could you turn the music down a bit after ten o'clock?"
      },
      {
        speaker: "other",
        nl: "Oh, dat wist ik niet. Sorry daarvoor, ik zal er voortaan op letten.",
        en: "Oh, I didn't know that. Sorry about that, I'll pay attention to it from now on."
      }
    ]
  },
  {
    topic: "Onderweg",
    situation: {
      nl: "Je vraagt een voorbijganger de weg naar het station.",
      en: "You ask a passerby for directions to the station."
    },
    other: "Voorbijganger",
    turns: [
      {
        speaker: "other",
        nl: "Kan ik u ergens mee helpen?",
        en: "Can I help you with something?"
      },
      {
        speaker: "you",
        nl: "Ja, graag. Ik zoek het treinstation, maar ik ken de weg hier niet zo goed. Kunt u mij vertellen hoe ik daar het snelst kom?",
        en: "Yes, please. I'm looking for the train station, but I don't know my way around here very well. Could you tell me the fastest way to get there?"
      },
      {
        speaker: "other",
        nl: "Natuurlijk. U loopt deze straat rechtdoor tot aan het stoplicht en dan slaat u linksaf. Het station ligt dan aan uw rechterhand, u kunt het gebouw al zien.",
        en: "Of course. You walk straight down this street to the traffic light and then turn left. The station is then on your right, you can already see the building."
      },
      {
        speaker: "you",
        nl: "Dank u wel, dat is heel duidelijk uitgelegd.",
        en: "Thank you, that's explained very clearly."
      }
    ]
  },
  {
    topic: "Sociale afspraken",
    situation: {
      nl: "Je belt een vriendin af voor het etentje van vanavond.",
      en: "You call a friend to cancel tonight's dinner."
    },
    other: "Vriendin",
    turns: [
      {
        speaker: "other",
        nl: "Hé, ik kijk al uit naar vanavond! Hoe laat zullen we afspreken?",
        en: "Hey, I'm already looking forward to tonight! What time shall we meet?"
      },
      {
        speaker: "you",
        nl: "Hoi, ik bel je eigenlijk om iets anders te zeggen. Ik voel me niet zo lekker en ik denk dat het verstandiger is om vanavond thuis te blijven. Vind je het erg als we het etentje verzetten naar een andere dag?",
        en: "Hi, actually I'm calling to say something else. I don't feel very well and I think it's wiser to stay home tonight. Do you mind if we move the dinner to another day?"
      },
      {
        speaker: "other",
        nl: "Nee, dat geeft helemaal niets. Beterschap! Zullen we volgende week zaterdag afspreken in plaats daarvan?",
        en: "No, that's absolutely fine. Get well soon! Shall we meet next Saturday instead?"
      },
      {
        speaker: "you",
        nl: "Dat lijkt me een goed idee. Dan kan ik ook helemaal hersteld zijn.",
        en: "That sounds like a good idea. That way I can also be fully recovered."
      }
    ]
  },
  {
    topic: "Advies geven",
    situation: {
      nl: "Een vriend wil weten wat je advies is over het kopen van een tweedehands fiets.",
      en: "A friend wants to know your advice about buying a second-hand bike."
    },
    other: "Vriend",
    turns: [
      {
        speaker: "other",
        nl: "Ik wil een tweedehands fiets kopen, maar ik heb geen idee waar ik op moet letten. Heb jij daar ervaring mee?",
        en: "I want to buy a second-hand bike, but I have no idea what to look out for. Do you have experience with that?"
      },
      {
        speaker: "you",
        nl: "Zeker. Controleer altijd eerst de banden en de remmen, want die zijn duur om te vervangen. Kijk ook of de fiets niet te veel roest heeft en probeer even te fietsen voordat je hem koopt. Zo weet je zeker of alles goed werkt.",
        en: "Sure. Always check the tires and the brakes first, because those are expensive to replace. Also check that the bike doesn't have too much rust and try riding it briefly before you buy it. That way you know for sure that everything works well."
      }
    ]
  },
  {
    topic: "Op het werk",
    situation: {
      nl: "Een collega vraagt wat je dit weekend gaat doen.",
      en: "A colleague asks what you're going to do this weekend."
    },
    other: "Collega",
    turns: [
      {
        speaker: "other",
        nl: "Heb je al plannen voor dit weekend?",
        en: "Do you already have plans for this weekend?"
      },
      {
        speaker: "you",
        nl: "Nog niet helemaal, maar ik denk dat ik zaterdag naar de markt ga en daarna misschien een terrasje pak als het weer goed is. Zondag wil ik het rustig aan doen en een boek lezen. En jij, heb jij al iets leuks gepland?",
        en: "Not entirely yet, but I think I'll go to the market on Saturday and maybe sit on a terrace afterwards if the weather is good. On Sunday I want to take it easy and read a book. And you, do you already have something fun planned?"
      }
    ]
  }
];
