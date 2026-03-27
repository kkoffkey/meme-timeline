export type Meme = {
  id: string;
  name: string;
  description: string;
  year: number;
  month: number; // 1–12
  thumbnailUrl: string;
  kymUrl: string;
};

export type MonthMarker = {
  year: number;
  month: number;
  label: string;
  shortLabel: string;
};

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function generateMonthMarkers(): MonthMarker[] {
  const markers: MonthMarker[] = [];
  for (let year = 2005; year <= 2008; year++) {
    for (let m = 1; m <= 12; m++) {
      markers.push({
        year,
        month: m,
        label: `${MONTH_NAMES[m - 1]} ${year}`,
        shortLabel: MONTH_SHORT[m - 1],
      });
    }
  }
  return markers; // 48 markers
}

export const MEMES: Meme[] = [
  // ── 2005 ──────────────────────────────────────────────────────────────────
  {
    id: "numa-numa",
    name: "Numa Numa",
    description:
      "Gary Brolsma's enthusiastic lip-sync to O-Zone's 'Dragostea Din Tei' became one of the very first viral video sensations, racking up millions of views before YouTube even existed.",
    year: 2005,
    month: 1,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/070/Picture_61.png",
    kymUrl: "https://knowyourmeme.com/memes/numa-numa",
  },
  {
    id: "star-wars-kid",
    name: "Star Wars Kid",
    description:
      "Footage of teenager Ghyslain Raza swinging a golf ball retriever like a lightsaber leaked online in 2003 and exploded in popularity throughout 2005, becoming one of the most-viewed internet videos of the era.",
    year: 2005,
    month: 1,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/014/star_wars_kid_meme_banner_image.jpg",
    kymUrl: "https://knowyourmeme.com/memes/star-wars-kid",
  },
  {
    id: "all-your-base",
    name: "All Your Base Are Belong to Us",
    description:
      "A hilariously mistranslated cutscene from the 1992 Sega game Zero Wing spawned one of the earliest and most enduring internet memes, with the phrase photoshopped onto landmarks worldwide.",
    year: 2005,
    month: 2,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/013/maxresdefault-2.jpg",
    kymUrl: "https://knowyourmeme.com/memes/all-your-base-are-belong-to-us",
  },
  {
    id: "leeroy-jenkins",
    name: "Leeroy Jenkins",
    description:
      "A World of Warcraft player charges headlong into battle shouting his own name, completely ruining his guild's meticulous battle plan. The cry of 'LEEEEEROY JENKINS!' became a symbol of impulsive recklessness everywhere.",
    year: 2005,
    month: 4,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/191/leeroy-jenkins.jpg",
    kymUrl: "https://knowyourmeme.com/memes/leeroy-jenkins",
  },
  {
    id: "chuck-norris-facts",
    name: "Chuck Norris Facts",
    description:
      "A series of satirical 'facts' about action star Chuck Norris's superhuman toughness spread through email chains, forums, and early social media — 'Chuck Norris doesn't do push-ups; he pushes the Earth down.'",
    year: 2005,
    month: 9,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/244/nope.jpg",
    kymUrl: "https://knowyourmeme.com/memes/chuck-norris-facts",
  },

  // ── 2006 ──────────────────────────────────────────────────────────────────
  {
    id: "mentos-diet-coke",
    name: "Mentos & Diet Coke",
    description:
      "Dropping Mentos into Diet Coke creates a spectacular geyser of foam. EepyBird's choreographed fountain video hit over a million views in 12 days and sparked countless imitations.",
    year: 2006,
    month: 6,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/403/sneezing-panda-sneeze.jpg",
    kymUrl: "https://knowyourmeme.com/memes/diet-coke-mentos-eruption",
  },
  {
    id: "lonelygirl15",
    name: "Lonelygirl15",
    description:
      "A seemingly authentic YouTube vlog from a quirky homeschooled teen named 'Bree' captivated thousands — until the whole thing was revealed as an elaborate scripted fiction, making it YouTube's first viral narrative series.",
    year: 2006,
    month: 7,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/004/488/lonelygirl-15.jpg",
    kymUrl: "https://knowyourmeme.com/memes/lonelygirl15",
  },
  {
    id: "lolcats",
    name: "LOLcats",
    description:
      "Funny cat photos captioned in deliberately broken 'lolspeak' ('I can has cheezburger?') became a defining format of early internet humor, spawning countless image macros and launching the I Can Has Cheezburger website.",
    year: 2006,
    month: 11,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/018/lol.jpg",
    kymUrl: "https://knowyourmeme.com/memes/lolcats",
  },
  {
    id: "sneezing-baby-panda",
    name: "Sneezing Baby Panda",
    description:
      "A 17-second clip of a baby giant panda letting out an enormous sneeze — startling its own mother — became an irresistible loop that spread across the early web and accumulated over 160 million views.",
    year: 2006,
    month: 11,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/403/sneezing-panda-sneeze.jpg",
    kymUrl: "https://knowyourmeme.com/memes/sneezing-baby-panda",
  },

  // ── 2007 ──────────────────────────────────────────────────────────────────
  {
    id: "i-can-has-cheezburger",
    name: "I Can Has Cheezburger?",
    description:
      "The blog launched in January 2007 to aggregate LOLcat images quickly became one of the most-visited websites on the internet, with Time Magazine covering the phenomenon and spawning an entire media empire.",
    year: 2007,
    month: 1,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/018/lol.jpg",
    kymUrl: "https://knowyourmeme.com/memes/lolcats",
  },
  {
    id: "chocolate-rain",
    name: "Chocolate Rain",
    description:
      "Tay Zonday's unexpectedly deep baritone voice singing his original song — a serious commentary on systemic racism — went massively viral on YouTube in 2007, spawning thousands of parodies and celebrity covers.",
    year: 2007,
    month: 4,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/010/chocolate_rain_banner.jpg",
    kymUrl: "https://knowyourmeme.com/memes/chocolate-rain",
  },
  {
    id: "charlie-bit-my-finger",
    name: "Charlie Bit My Finger",
    description:
      "A 55-second home video of baby Charlie biting his older brother Harry's finger became the most-viewed YouTube video for years, reaching 878 million views by 2012 and becoming a timeless symbol of internet innocence.",
    year: 2007,
    month: 5,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/131/tdy_or_charlie_150501.today-inline-vid-featured-desktop.jpg",
    kymUrl: "https://knowyourmeme.com/memes/charlie-bit-my-finger",
  },
  {
    id: "dramatic-chipmunk",
    name: "Dramatic Chipmunk",
    description:
      "A five-second clip of a prairie dog (not actually a chipmunk) slowly turning to camera with a dramatic orchestral sting became one of the most remixed reaction videos of the era.",
    year: 2007,
    month: 6,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/019/dramatic-chipmunk.gif",
    kymUrl: "https://knowyourmeme.com/memes/dramatic-chipmunk",
  },
  {
    id: "keyboard-cat",
    name: "Keyboard Cat",
    description:
      "A 1984 tape of an orange tabby cat dressed in a blue shirt and 'playing' a keyboard was uploaded to YouTube in 2007 and later became the quintessential 'play-off' reaction to embarrassing moments.",
    year: 2007,
    month: 6,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/166/1920.jpg",
    kymUrl: "https://knowyourmeme.com/memes/keyboard-cat",
  },
  {
    id: "leave-britney-alone",
    name: "Leave Britney Alone",
    description:
      "Chris Crocker's tearful, mascara-streaked YouTube monologue pleading for people to stop criticizing Britney Spears received 2 million views in two hours and became a defining moment at the intersection of celebrity culture and the internet.",
    year: 2007,
    month: 9,
    thumbnailUrl:
      "https://zquared.com/wp-content/uploads/2024/09/cropped-Z-icon-32x32.png",
    kymUrl: "https://knowyourmeme.com/memes/leave-britney-alone",
  },

  // ── 2008 ──────────────────────────────────────────────────────────────────
  {
    id: "fail-blog",
    name: "Fail Blog",
    description:
      "Launched in January 2008, Fail Blog aggregated photos and videos of spectacular blunders and mishaps under the banner 'FAIL.' It became one of the most-visited humor sites on the internet and codified 'fail' as internet slang.",
    year: 2008,
    month: 1,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/068/davidafterdentist.png",
    kymUrl: "https://knowyourmeme.com/memes/fail",
  },
  {
    id: "david-after-dentist",
    name: "David After Dentist",
    description:
      "Seven-year-old David DeVore Jr.'s hilariously disoriented philosophical musings while coming out of dental anesthesia — 'Is this real life?' — became one of YouTube's most beloved early viral videos.",
    year: 2008,
    month: 2,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/068/davidafterdentist.png",
    kymUrl: "https://knowyourmeme.com/memes/david-after-dentist",
  },
  {
    id: "rickroll",
    name: "Rickroll",
    description:
      "The ultimate bait-and-switch prank: trick someone into clicking a link, and Rick Astley's 'Never Gonna Give You Up' starts playing. The meme peaked when Astley himself performed a surprise live rickroll at the 2008 Macy's Thanksgiving Day Parade.",
    year: 2008,
    month: 4,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/007/bd6.jpg",
    kymUrl: "https://knowyourmeme.com/memes/rickroll",
  },
  {
    id: "success-kid",
    name: "Success Kid",
    description:
      "A photo of toddler Sammy Griner clenching his fist triumphantly at the beach became the universal symbol of minor victories, from nailing a parking spot to finishing a project just before the deadline.",
    year: 2008,
    month: 8,
    thumbnailUrl:
      "https://i.kym-cdn.com/entries/icons/original/000/000/745/success.jpg",
    kymUrl: "https://knowyourmeme.com/memes/success-kid-i-hate-sandcastles",
  },
];
