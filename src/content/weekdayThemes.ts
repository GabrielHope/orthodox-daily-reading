import type { LengthTiers } from '@/lib/content/types';

export interface WeekdayTheme {
  name: string;
  bio: LengthTiers;
}

/**
 * The weekly Octoechos cycle: each day of the week carries a running
 * thematic dedication, independent of whatever fixed saint or moveable
 * feast also falls on that date. Keyed by JS Date.getUTCDay() (0 = Sunday).
 * Source: OCA "The Orthodox Faith" and GOARCH "Orthodox Worship" (both
 * consistent with ROCOR/pravoslavie.ru sources cross-checked).
 */
export const WEEKDAY_THEMES: Record<number, WeekdayTheme> = {
  0: {
    name: 'The Resurrection of Christ',
    bio: {
      short: 'Every Sunday is a "little Pascha" — a weekly commemoration of Christ\'s Resurrection.',
      medium: `Sunday, the Lord's Day, is dedicated to the Resurrection of Christ — a weekly echo of Pascha itself. This is why Orthodox Christians do not kneel in prayer on Sundays (outside of certain exceptions), and why the Sunday Matins service always includes one of eleven appointed Resurrection Gospel readings, cycling through the different Gospel accounts of the empty tomb across an eleven-week rotation.`,
      long: '[Room to expand: the early Church\'s shift from Sabbath to "the eighth day"; the eleven Resurrectional Gospels and their rotation; the theological meaning of gathering for the Eucharist specifically on this day.]',
    },
  },
  1: {
    name: 'The Bodiless Powers (Holy Angels)',
    bio: {
      short: 'Monday is dedicated to the Angels and Archangels — the bodiless powers who serve God and, tradition holds, are given to each person as a guardian at baptism.',
      medium: `Monday's dedication honors the Angels, Archangels, and the whole hierarchy of bodiless powers who surround the throne of God and serve as His messengers. Orthodox tradition holds that every baptized Christian receives a guardian angel, and Monday's hymnography specifically calls on their protection and intercession. Some monastics have historically kept Monday as an additional day of fasting, seeing in the angels' ceaseless service and praise of God a model for their own ascetic life.`,
      long: '[Room to expand: named archangels (Michael, Gabriel, etc.) and their roles in Scripture; the nine ranks of angels in Orthodox tradition (per Pseudo-Dionysius); the Synaxis of the Archangels, November 8.]',
    },
  },
  2: {
    name: 'St. John the Forerunner and Baptist',
    bio: {
      short: 'Tuesday honors St. John the Forerunner — the last of the Old Testament prophets and the one who baptized Christ Himself in the Jordan.',
      medium: `Tuesday is dedicated to St. John the Forerunner (the Baptist), and through him, to the whole line of Old Testament prophets he brings to a close. John's call to "repent, for the kingdom of heaven is at hand" (Matthew 3:2) prepared the way for Christ's own ministry, and it was John who baptized Christ in the Jordan — an event the Church celebrates each year at Theophany. His feast days are scattered throughout the calendar (his Nativity, June 24; his Beheading, August 29; the Synaxis in his honor the day after Theophany, January 7), but every Tuesday keeps his memory before the Church as well.`,
      long: '[Room to expand: John\'s life in the wilderness; his preaching and call to repentance; his martyrdom under Herod; his unique role as the one who baptized Christ; his veneration as greater than any man born of woman, per Christ\'s own words in Matthew 11:11.]',
    },
  },
  3: {
    name: 'The Precious Cross (Judas\' Betrayal)',
    bio: {
      short: 'Wednesday recalls the betrayal of Christ by Judas, and so is especially dedicated to the Cross.',
      medium: `Wednesday's dedication looks back to Judas Iscariot's agreement to betray Christ, and so, like Friday, it is given over to remembrance of the Cross. This is also the origin of the traditional Wednesday fast (from meat and dairy), observed alongside Friday's fast throughout most of the year outside of designated fast-free periods — the two days together forming a weekly echo of Great Lent's fasting discipline.`,
      long: '[Room to expand: the Gospel account of Judas\' bargain with the chief priests (Matthew 26:14-16); the theology of the Wednesday/Friday fast as a standing weekly discipline; how this connects to Holy Wednesday within Holy Week itself.]',
    },
  },
  4: {
    name: 'The Holy Apostles and St. Nicholas',
    bio: {
      short: 'Thursday honors the Twelve Apostles, and with them St. Nicholas of Myra, as a model of apostolic ministry and pastoral care.',
      medium: `Thursday is dedicated to the Holy Apostles, who received Christ's own commission to "go therefore and teach all nations" (Matthew 28:19), and alongside them, to St. Nicholas of Myra — chosen to represent, in a single widely-beloved figure, the whole line of bishops and hierarchs who succeeded the Apostles in shepherding the Church. St. Nicholas remains one of the most universally venerated saints in Orthodox Christianity, known for his generosity, his defense of Orthodox teaching at the First Ecumenical Council, and countless later accounts of his intercession.`,
      long: '[Room to expand: the calling and mission of the Twelve; St. Nicholas\'s life and the many popular stories associated with him (the three daughters, the slap at Nicaea); his enormous popular devotion East and West.]',
    },
  },
  5: {
    name: 'The Precious Cross (The Crucifixion)',
    bio: {
      short: 'Friday commemorates Christ\'s Crucifixion and death upon the Cross, and is kept as a fasting day throughout the year.',
      medium: `Friday is dedicated to the memory of Christ's Passion and death on the Cross — the day of the actual Crucifixion, kept weekly as Wednesday keeps the memory of His betrayal. Alongside Wednesday, Friday is observed as a fasting day throughout most of the year, a standing weekly discipline of remembrance and repentance tied directly to the Cross's meaning: an instrument of suffering transformed, by Christ's own death upon it, into the instrument of victory over death.`,
      long: '[Room to expand: the theology of the Cross as paradox — instrument of death and instrument of life; the weekly fasting discipline\'s history and rationale; connection to Holy Friday within Holy Week.]',
    },
  },
  6: {
    name: 'All Saints and the Departed',
    bio: {
      short: 'Saturday honors all the Saints, with the Theotokos foremost among them, together with all the faithful departed.',
      medium: `Saturday closes the weekly cycle by commemorating all the Saints — with the Theotokos honored first among them — together with all those who have "fallen asleep in the hope of the resurrection." This is why Saturday has traditionally been kept as a day for remembering the departed in prayer, including specific commemorative Saturdays throughout the year (such as the Saturdays of the Souls before Great Lent and around Pentecost) set aside for more extensive prayers for the dead.`,
      long: '[Room to expand: the theology of sleep/rest as the traditional image for death in Christian usage; the specific "Soul Saturdays" of the liturgical year; the place of the Theotokos as chief among the Saints.]',
    },
  },
};
