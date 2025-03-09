const GetSubclass = (result) => { 

    let num = (Math.random() * 10)

    if (result === "Barbarian"){
        switch (true) {
            case num < 2.5:
                return "Wildheart"
            case num >= 2.5 && num < 5:
                return "Berserker"
            case num >= 5 && num < 7.5:
                return " Wild Magic"
            case num >= 7.5:
                return "Giant"
            default:
                return "Berserker"
        }
    }

    if (result === "Bard"){
        switch (true) {
            case num < 2.5:
                return "College of Lore"
            case num >= 2.5 && num < 5:
                return "College of Valour"
            case num >= 5 && num < 7.5:
                return "College of Swords"
            case num >= 7.5:
                return "College of Glamour"
            default:
                return "College of Swords"
        }
    }

    if (result === "Cleric"){
        switch (true) {
            case (num >= 0.00 && num < 1.25):
               return "Life Domain";
            case (num >= 1.25 && num < 2.50):
               return "Light Domain";
            case (num >= 2.50 && num < 3.75):
               return "Trickery Domain";
            case (num >= 3.75 && num < 5.00):
                return "Knowledge Domain";
            case (num >= 5.00 && num < 6.25):
                return "Nature Domain";
            case (num >= 6.25 && num < 7.50):
               return "Tempest Domain";
            case (num >= 7.50 && num < 8.75):
               return "War Domain";
            case num >= 8.75:
                return "Death Domain";
            default:
                return "Tempest Domain";
        }
    }

    if (result === "Druid"){
        switch (true) {
            case num < 2.5:
                return "Circle of the Land"
            case num >= 2.5 && num < 5:
                return "Circle of the Moon"
            case num >= 5 && num < 7.5:
                return "Circle of Spores"
            case num >= 7.5:
                return "Circle of the Stars"
            default:
                return "Circle of the Stars"
        }
    }

    if (result === "Fighter"){
        switch (true) {
            case num < 2.5:
                return "Battle Master"
            case num >= 2.5 && num < 5:
                return "Eldritch Knight"
            case num >= 5 && num < 7.5:
                return "Champion"
            case num >= 7.5:
                return "Arcane Archer"
            default:
                return "Arcane Archer"
        }
    }

    if (result === "Monk"){
        switch (true) {
            case num < 2.5:
                return "Way of the Four Elements"
            case num >= 2.5 && num < 5:
                return "Way of the Open Hand"
            case num >= 5 && num < 7.5:
                return "Way of Shadow"
            case num >= 7.5:
                return "Way of the Drunken Master"
            default:
                return "Way of the Open Hand"
        }
    }

    if (result === "Paladin"){
        switch (true) {
            case num < 2:
                return "Oath of the Ancients"
            case num >= 2 && num < 4:
                return "Oath of Devotion"
            case num >= 4 && num < 6:
                return "Oath of Vengance"
            case num >= 6 && num < 8:
                return "Oath of the Crown"
            case num >= 8:
                return "Oathbreaker"
            default:
                return "Oath of Vengance"
        }
    }

    if (result === "Ranger"){
        switch (true) {
            case num < 2.5:
                return "Hunter"
            case num >= 2.5 && num < 5:
                return "Beast Master"
            case num >= 5 && num < 7.5:
                return "Gloom Stalker"
            case num >= 7.5:
                return "Swarmkeeper"
            default:
                return "Swarmkeeper"
        }
    }

    if (result === "Rogue"){
        switch (true) {
            case num < 2.5:
                return "Thief"
            case num >= 2.5 && num < 5:
                return "Arcane Trickster"
            case num >= 5 && num < 7.5:
                return "Assasin"
            case num >= 7.5:
                return "Swashbuckler"
            default:
                return "Assasin"
        }
    }

    if (result === "Sorcerer"){
        switch (true) {
            case num < 2.5:
                return "Wild Magic "
            case num >= 2.5 && num < 5:
                return "Draconic Bloodline"
            case num >= 5 && num < 7.5:
                return "Storm Sorcery"
            case num >= 7.5:
                return "Shadow Magic"
            default:
                return "Storm Sorcery"
        }
    }

    if (result === "Warlock"){
        switch (true) {
            case num < 2.5:
                return "The Fiend"
            case num >= 2.5 && num < 5:
                return "The Great Old One"
            case num >= 5 && num < 7.5:
                return "The Archfey"
            case num >= 7.5:
                return "The Hexblade"
            default:
                return "The Fiend"
        }
    }

    if (result === "Wizard"){
      switch (true) {
        case (num >= 0.00 && num < 1.11):
            return "Abjuration";
        case (num >= 1.11 && num < 2.22):
            return "Evocation";
        case (num >= 2.22 && num < 3.33):
            return "Necromancy";
        case (num >= 3.33 && num < 4.44):
            return "Conjuration";
        case (num >= 4.44 && num < 5.55):
            return "Enchantment";
        case (num >= 5.55 && num < 6.66):
            return "Divination";
        case (num >= 6.66 && num < 7.77):
            return "Illusion";
        case (num >= 7.77 && num < 8.88):
            return "Transmutation";
        case (num >= 8.88 && num <= 10.00):
            return "Bladesinging";
        default:
            return "Divination";
    }
    }
}


export default GetSubclass;