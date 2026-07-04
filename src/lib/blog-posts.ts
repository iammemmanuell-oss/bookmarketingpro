export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  time: string;
  author: string;
  date: string;
  content: {
    intro: string;
    sections: { heading: string; body: string[] }[];
    takeaways: string[];
  };
};

export const POSTS: BlogPost[] = [
  {
    slug: "90-day-amazon-ads-framework",
    category: "Amazon PPC",
    title: "The 90 Day Amazon Ads Framework That Actually Works",
    excerpt:
      "How to structure Sponsored Products, Brands, and Display campaigns over a 90 day window so you scale profitably instead of burning budget.",
    time: "8 min read",
    author: "Head of Digital Ads",
    date: "March 12, 2026",
    content: {
      intro:
        "Most authors run Amazon ads the same way every month and wonder why the numbers plateau. A structured 90 day framework fixes that. It gives every campaign a job, a budget, and a graduation path.",
      sections: [
        {
          heading: "Days 1 to 30: Discovery",
          body: [
            "Launch broad and phrase match Sponsored Products across your seed keyword list. Cap daily budgets low, around ten dollars per campaign, and let the search term reports do the heavy lifting.",
            "Add Sponsored Brands with a headline pointed at your series, even if you only have one book. It reserves brand real estate and starts training the algorithm on your author name.",
          ],
        },
        {
          heading: "Days 31 to 60: Refinement",
          body: [
            "Promote every keyword and ASIN that converted at your target ACoS into a dedicated exact match campaign. Raise its bid and give it its own budget.",
            "Kill spend on anything that has spent more than two times your royalty with zero sales. Be ruthless. The middle 60 percent of a campaign is where budget quietly disappears.",
          ],
        },
        {
          heading: "Days 61 to 90: Scale",
          body: [
            "Introduce Sponsored Display retargeting on your best converting product pages. Layer in category targeting on Sponsored Products for competitors that share your reader.",
            "By day 90 you should have three tiers: discovery campaigns that stay cheap, converters that carry the weight, and defensive brand campaigns that protect the search page you already own.",
          ],
        },
      ],
      takeaways: [
        "Every campaign needs a clear job. Discovery, converter, or defender.",
        "Graduate winners into dedicated exact match campaigns.",
        "Cut long tail spend early, not after it has drained the budget.",
      ],
    },
  },
  {
    slug: "vet-a-booktok-creator",
    category: "BookTok",
    title: "How to Vet a BookTok Creator Before You Pay Them",
    excerpt:
      "The five signal checks we run on every creator before a client dollar goes anywhere near them.",
    time: "6 min read",
    author: "Lead Book Publicist",
    date: "February 27, 2026",
    content: {
      intro:
        "BookTok can move real copies. It can also drain a budget on creators whose numbers do not survive a second look. Here is the checklist we run on every profile before we send a brief.",
      sections: [
        {
          heading: "Engagement quality, not follower count",
          body: [
            "A creator with 40k engaged followers will out sell a 400k profile with hollow reach. Look at comments on their last ten videos. Real readers talk about characters, tropes, and pacing. Bots post emojis.",
          ],
        },
        {
          heading: "Genre alignment",
          body: [
            "Contemporary romance readers do not convert on hard science fiction. A creator can be talented and still be the wrong match. Read their pinned videos and their bookshelf tags.",
          ],
        },
        {
          heading: "Sponsored post performance",
          body: [
            "Compare their organic average views against their sponsored average. A gap larger than 40 percent means their audience tunes out for paid placements.",
          ],
        },
        {
          heading: "Historical sales signal",
          body: [
            "Ask for two client references who tracked BookBeam or KDP sales rank inside 72 hours of a video. Screenshots beat vague testimonials.",
          ],
        },
        {
          heading: "Brief responsiveness",
          body: [
            "Send the brief before contracts. Creators who ask thoughtful questions produce content that sells. Creators who reply with an emoji do not.",
          ],
        },
      ],
      takeaways: [
        "Engagement quality is the leading indicator, not follower count.",
        "Sponsored versus organic view gaps expose fake audiences.",
        "References with tracked sales data protect your budget.",
      ],
    },
  },
  {
    slug: "pre-order-window-length",
    category: "Launch Strategy",
    title: "Pre Order Windows: How Long Should Yours Be?",
    excerpt:
      "Short, medium, or long pre order. We break down the trade offs and the numbers behind each approach.",
    time: "5 min read",
    author: "Managing Director",
    date: "February 10, 2026",
    content: {
      intro:
        "Every pre order length has a reason to exist. The wrong one leaks momentum. The right one compounds it.",
      sections: [
        {
          heading: "Two weeks: momentum stacking",
          body: [
            "Short windows concentrate all pre order sales into a single Amazon reporting spike on launch day. Great for debut authors who need one big signal.",
          ],
        },
        {
          heading: "Six weeks: platform building",
          body: [
            "Long enough to run a proper ad campaign, book podcasts, and stack review copies. This is our default recommendation for most fiction launches.",
          ],
        },
        {
          heading: "Three months plus: series continuation",
          body: [
            "Reserved for established series with a hungry reader base. The pre order becomes a marketing surface in itself.",
          ],
        },
      ],
      takeaways: [
        "Debut authors: short windows for a concentrated launch signal.",
        "Most launches: six weeks is the sweet spot.",
        "Long windows only work when a reader base is already waiting.",
      ],
    },
  },
  {
    slug: "reader-magnet-funnel",
    category: "Author Platform",
    title: "The Reader Magnet Funnel Every Fiction Author Should Own",
    excerpt:
      "A step by step teardown of the magnet, landing page, and welcome sequence we build for every fiction client.",
    time: "10 min read",
    author: "Managing Director",
    date: "January 22, 2026",
    content: {
      intro:
        "A reader magnet funnel is the single highest leverage asset a fiction author can own. It converts ad clicks into subscribers, and subscribers into launch day buyers.",
      sections: [
        {
          heading: "The magnet",
          body: [
            "A prequel novella, a bonus chapter, or a deleted scene. It must live inside the world of the main book so a subscriber who loves the magnet is guaranteed to want the novel.",
          ],
        },
        {
          heading: "The landing page",
          body: [
            "One headline, one cover image, one email field. No navigation, no social links, no distractions. Every element that is not the opt in reduces conversion.",
          ],
        },
        {
          heading: "The welcome sequence",
          body: [
            "Seven emails over fourteen days. Deliver the magnet, share the origin story, tease the main book, invite reviews, offer a discount, request a reply, and set the cadence for future emails.",
          ],
        },
      ],
      takeaways: [
        "The magnet must be tonally identical to the main book.",
        "Landing pages convert on subtraction, not addition.",
        "The welcome sequence is where new subscribers become buyers.",
      ],
    },
  },
  {
    slug: "static-vs-video-ads",
    category: "Meta Ads",
    title: "Static vs Video Ads for Novels: What Actually Converts",
    excerpt:
      "We tested both across a dozen fiction accounts. Here is what the data says about creative that sells books.",
    time: "7 min read",
    author: "Head of Digital Ads",
    date: "January 8, 2026",
    content: {
      intro:
        "We ran a controlled test across twelve fiction accounts over ninety days. Same audiences, same budgets, same landing pages. Only the creative changed.",
      sections: [
        {
          heading: "The static winner",
          body: [
            "Cover plus a bold trope call out beat every other static format. Readers scan for tropes, not blurbs.",
          ],
        },
        {
          heading: "The video winner",
          body: [
            "Voiceover reading the opening paragraph over slow camera moves across the cover. It converted at roughly 1.4 times the static baseline on cold audiences.",
          ],
        },
        {
          heading: "The verdict",
          body: [
            "Video wins on cold traffic. Static wins on retargeting. Run both.",
          ],
        },
      ],
      takeaways: [
        "Trope call outs beat blurbs on static ads.",
        "Video wins on cold audiences by around 40 percent.",
        "Retargeting still belongs to static creative.",
      ],
    },
  },
  {
    slug: "kdp-vs-wide-2026",
    category: "Publishing",
    title: "KDP vs Wide Distribution in 2026",
    excerpt:
      "The exclusivity decision has changed. Here is how we think about it for new titles this year.",
    time: "9 min read",
    author: "Managing Director",
    date: "December 14, 2025",
    content: {
      intro:
        "The KDP Select versus wide distribution decision is no longer a purely commercial one. In 2026, the reader habits in each ecosystem have diverged enough to matter.",
      sections: [
        {
          heading: "The case for KDP Select",
          body: [
            "Page reads through Kindle Unlimited still deliver reliable income for genre fiction, especially romance, romantasy, and thriller. The 90 day exclusivity locks you out of other retailers but unlocks page read royalties.",
          ],
        },
        {
          heading: "The case for wide",
          body: [
            "Kobo, Apple Books, and Google Play grew double digits again this year, and international readers overwhelmingly buy outside Amazon. Wide is where long term catalog income compounds.",
          ],
        },
        {
          heading: "Our recommendation",
          body: [
            "New series in a KU heavy genre: start Select for one enrollment cycle, then evaluate. Everything else: start wide from day one.",
          ],
        },
      ],
      takeaways: [
        "KU still drives real income for genre fiction.",
        "Wide readers are growing faster outside the United States.",
        "Default to wide unless your genre is KU heavy.",
      ],
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
