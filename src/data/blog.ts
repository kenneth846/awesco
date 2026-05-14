export interface BlogPost {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;
  sections: BlogSection[];
  relatedSlugs?: string[];
}

export type BlogSection =
  | { type: 'intro'; body: string }
  | { type: 'h2'; heading: string; body: string }
  | { type: 'h2list'; heading: string; intro?: string; items: { heading?: string; body: string }[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'callout'; body: string }
  | { type: 'cta'; heading: string; body: string };

export const BLOG_POSTS: Record<string, BlogPost> = {
  'how-often-pump-septic-tank': {
    slug: 'how-often-pump-septic-tank',
    tag: 'Maintenance',
    date: 'April 2025',
    title: 'How Often Should You Pump Your Septic Tank?',
    excerpt: "The most common question we get — and the answer depends on more than just tank size. Here's how to figure out the right schedule for your household.",
    metaTitle: 'How Often Should You Pump Your Septic Tank? | A Wesco Septic',
    metaDescription: "Find out how often to pump your septic tank based on household size, tank capacity, and system age. Expert advice from A Wesco Septic in Snohomish County.",
    heroImage: '/services-hero.webp',
    sections: [
      {
        type: 'intro',
        body: "It's the single most common question we get: \"How often do I need to pump my septic tank?\" The honest answer is — it depends. Every household is different. But there are clear guidelines you can follow, and getting on the right schedule is the single best thing you can do to protect your septic system.",
      },
      {
        type: 'h2',
        heading: 'The General Rule of Thumb',
        body: "For a typical household of 4 people with a standard 1,000-gallon tank, pumping every 3 to 5 years is a reasonable baseline. The EPA recommends inspecting your septic system at least every 3 years and pumping when solids reach about one-third of the tank's capacity. But that rule doesn't apply equally to every home.",
      },
      {
        type: 'h2list',
        heading: 'Factors That Affect How Often You Need to Pump',
        intro: "Several variables push your pumping frequency up or down from that general guideline:",
        items: [
          {
            heading: 'Household size',
            body: "More people means more water use and more waste entering the tank. A single person in a 3-bedroom home might go 7+ years between pumps. A family of 6 might need service every 2 years.",
          },
          {
            heading: 'Tank size',
            body: "Older homes often have smaller tanks — sometimes 750 gallons or less. A 500-gallon tank fills up much faster than a 1,500-gallon tank, all else being equal.",
          },
          {
            heading: 'Garbage disposal use',
            body: "Garbage disposals add significant solids to your tank. If you use one regularly, shorten your pumping interval by at least a year.",
          },
          {
            heading: 'High-efficiency appliances',
            body: "Modern low-flow toilets and high-efficiency washing machines reduce water entering the tank, which can extend your pumping interval.",
          },
          {
            heading: 'System age and condition',
            body: "Older systems or tanks with known issues may need more frequent attention. During every pump-out, our crew checks for cracks, baffle condition, and signs of drain field stress.",
          },
        ],
      },
      {
        type: 'callout',
        body: "Pro tip: We recommend writing the date on the inside of your tank lid access cover after each pump-out. That simple habit has saved hundreds of our customers from guesswork.",
      },
      {
        type: 'h2',
        heading: 'What Happens If You Wait Too Long?',
        body: "When a tank gets too full, solids begin pushing through the outlet baffle and into your drain field. Once that happens, you're no longer looking at a $400 pump-out — you could be looking at a $10,000 to $30,000 drain field replacement. The drain field isn't designed to filter solid waste, and once it's clogged, there's often no going back.",
      },
      {
        type: 'h2',
        heading: 'Signs You\'re Overdue',
        body: "You shouldn't wait for problems to show up, but if you're seeing any of these, call us right away: slow-draining sinks or toilets throughout the house, gurgling sounds from drains after flushing, sewage odors inside or outside, or wet, spongy ground over your drain field. These are signs your tank is near or past capacity.",
      },
      {
        type: 'h2',
        heading: 'Our Recommendation',
        body: "For most households in Snohomish, King, and Island Counties, we recommend a pump-out every 3 to 4 years with an inspection every time. If you're not sure when your tank was last serviced, start with an inspection — we'll be able to tell you where things stand and give you a personalized recommendation. Every pump-out we do includes a free visual inspection at no extra charge.",
      },
      {
        type: 'cta',
        heading: 'Not Sure When You Last Had Service?',
        body: "We can help. Give us a call and we'll pull up your service history or schedule an inspection to assess your tank's current condition.",
      },
    ],
    relatedSlugs: ['signs-septic-tank-full', 'things-never-flush-septic'],
  },

  'signs-septic-tank-full': {
    slug: 'signs-septic-tank-full',
    tag: 'Warning Signs',
    date: 'March 2025',
    title: 'Warning Signs Your Septic Tank Is Full or Failing',
    excerpt: "Slow drains, gurgling toilets, and soggy ground are all red flags. Learn what to watch for and when to call for service before it becomes a backup.",
    metaTitle: 'Warning Signs Your Septic Tank Is Full or Failing | A Wesco Septic',
    metaDescription: 'Learn the warning signs of a full or failing septic tank — from slow drains to soggy yards. A Wesco Septic serves Snohomish and King Counties.',
    heroImage: '/services-hero.webp',
    sections: [
      {
        type: 'intro',
        body: "Your septic system doesn't usually fail without warning. There are almost always early signs that something's wrong — if you know what to look for. Catching these signals early is the difference between a simple pump-out and a five-figure repair bill.",
      },
      {
        type: 'h2list',
        heading: 'Warning Signs to Watch For',
        items: [
          {
            heading: 'Slow drains throughout the house',
            body: "If a single drain is slow, it's probably a clog in that drain line. But if multiple drains — sinks, tubs, toilets — are all draining slowly at the same time, the problem is likely downstream in your septic tank or the main line leading to it.",
          },
          {
            heading: 'Gurgling sounds after flushing',
            body: "A gurgling or bubbling noise coming from drains after you flush a toilet or run the washing machine is a classic sign of a full or pressurized tank. Air is being pushed back through the plumbing.",
          },
          {
            heading: 'Sewage odors inside or outside',
            body: "A properly functioning septic system should be odor-free. If you're smelling sewage indoors (especially in lower-level bathrooms or near floor drains) or outdoors near the tank or drain field, something is off. This can signal a full tank, a cracked tank, or a failing drain field.",
          },
          {
            heading: 'Wet, spongy, or unusually green grass over the drain field',
            body: "If the ground above your drain field is soggy, has standing water, or the grass there is noticeably greener and lusher than the rest of the yard — especially after dry weather — the drain field may be saturated and failing to absorb effluent properly.",
          },
          {
            heading: 'Sewage backup in toilets or drains',
            body: "This is the most serious sign and indicates the system is at or past capacity. Raw sewage backing up into your home is a health hazard. Stop all water use immediately and call us.",
          },
          {
            heading: 'You can\'t remember the last pump-out',
            body: "If it's been more than 5 years since your last pump-out, or you don't have any record of service on the home, that's a warning sign on its own. Don't wait for symptoms.",
          },
        ],
      },
      {
        type: 'h2',
        heading: 'Full vs. Failing: What\'s the Difference?',
        body: "A full tank means it's time to pump — it hasn't failed yet. A pump-out will usually resolve the symptoms quickly. A failing system means the tank, the baffles, or more likely the drain field has been damaged. Pumping alone won't fix it. That's why early detection matters so much: a full tank caught in time is a straightforward pump-out. Solids that reach the drain field can destroy it permanently.",
      },
      {
        type: 'callout',
        body: "Important: If you're seeing sewage backup inside your home, stop all water use immediately — no flushing, no laundry, no running water. Then call us. The longer wastewater has nowhere to go, the greater the risk of backflow into your living space.",
      },
      {
        type: 'h2',
        heading: 'What to Do If You Notice These Signs',
        body: "Don't ignore early warning signs and hope they go away. A slow drain or faint odor today can become a sewage backup tomorrow. Call us for an inspection — we'll diagnose the issue, tell you exactly what's going on, and give you an honest recommendation. We don't upsell, and we don't guess.",
      },
      {
        type: 'cta',
        heading: 'Noticing Any of These Signs?',
        body: "Don't wait for it to get worse. Call us today for a same-day or next-day inspection. We serve Snohomish County, King County, and Camano Island.",
      },
    ],
    relatedSlugs: ['how-often-pump-septic-tank', 'septic-alarm-going-off'],
  },

  'septic-inspection-home-purchase': {
    slug: 'septic-inspection-home-purchase',
    tag: 'Real Estate',
    date: 'February 2025',
    title: 'What to Expect from a Septic Inspection When Buying a Home',
    excerpt: "Buying a house with a septic system? Here's exactly what gets inspected, what the report means, and what to do if there's a problem before closing.",
    metaTitle: 'Septic Inspection When Buying a Home | A Wesco Septic',
    metaDescription: 'Buying a home with a septic system in Snohomish or King County? Learn what a septic inspection covers, what to look for, and when to walk away.',
    heroImage: '/services-hero.webp',
    sections: [
      {
        type: 'intro',
        body: "Buying a home with a septic system is different from buying one connected to municipal sewer. The septic system is a major piece of infrastructure that belongs entirely to you the moment you close — along with any problems it has. A thorough septic inspection before closing is not optional. It's essential.",
      },
      {
        type: 'h2',
        heading: 'Why a Septic Inspection Is Different from a General Home Inspection',
        body: "A standard home inspection might note the presence of a septic system, but it won't tell you much about its actual condition. A dedicated septic inspection is performed by someone trained specifically in septic systems — we pump the tank, visually inspect all accessible components, and evaluate how the system is performing. It's the only way to know what you're buying.",
      },
      {
        type: 'h2list',
        heading: 'What We Check During a Pre-Sale Inspection',
        items: [
          {
            heading: 'Tank condition',
            body: "We pump the tank and check for cracks, corrosion, root intrusion, and structural integrity. We inspect the inlet and outlet baffles, which prevent scum from flowing to the drain field.",
          },
          {
            heading: 'Liquid level',
            body: "The liquid level at the time of pumping tells us whether the system is processing effluent normally or whether there's a sign of drain field backup.",
          },
          {
            heading: 'Drain field function',
            body: "We look for signs of drain field saturation, surfacing effluent, and the overall condition of the absorption area. A failing drain field is the most expensive septic repair.",
          },
          {
            heading: 'Distribution box and risers',
            body: "We check that the distribution box is intact and distributing flow evenly across drain field lines, and confirm access risers are present and in good condition.",
          },
          {
            heading: 'System records',
            body: "We help verify the as-built drawing matches what's in the ground, and flag any discrepancies in system type, size, or component location.",
          },
        ],
      },
      {
        type: 'h2',
        heading: 'What the Inspection Report Tells You',
        body: "After the inspection, you'll get a clear, written report describing the condition of each component and any concerns found. This report is often required by lenders. More importantly, it tells you whether you're inheriting a healthy system, a system with minor deferred maintenance, or a system with serious problems. All of those require a different response at the negotiating table.",
      },
      {
        type: 'callout',
        body: "Real estate tip: If the inspection reveals a problem, you can often negotiate a price reduction or require the seller to remediate before closing. A failing drain field that would cost $20,000 to replace is a legitimate negotiating point — but only if you know about it before you sign.",
      },
      {
        type: 'h2',
        heading: 'Red Flags That Should Give You Pause',
        body: "Not every issue is a dealbreaker, but these warrant serious attention: signs of an unpermitted system modification, a drain field that's been recently replaced or showing signs of early failure, a tank that hasn't been pumped in 10+ years, or any evidence of sewage surfacing near the absorption area. These aren't necessarily reasons to walk away, but they are reasons to negotiate hard and go in with open eyes.",
      },
      {
        type: 'h2',
        heading: 'When to Schedule the Inspection',
        body: "Schedule the inspection during your inspection contingency window — usually within 10 to 15 days of mutual acceptance. This gives you time to review the results and negotiate if needed before your contingency deadline. Call us as early as possible; pre-purchase inspections book up quickly, especially in spring and summer.",
      },
      {
        type: 'cta',
        heading: 'Buying a Home in Snohomish, King, or Island County?',
        body: "We perform pre-purchase septic inspections with quick turnaround and written reports. Call or text us to schedule during your inspection window.",
      },
    ],
    relatedSlugs: ['how-often-pump-septic-tank', 'drain-field-failure-causes'],
  },

  'drain-field-failure-causes': {
    slug: 'drain-field-failure-causes',
    tag: 'Drain Field',
    date: 'January 2025',
    title: 'What Causes Drain Field Failure — and Can It Be Fixed?',
    excerpt: "Drain field failure doesn't always mean full replacement. Understanding the cause is the first step to finding the most cost-effective solution.",
    metaTitle: 'What Causes Drain Field Failure? | A Wesco Septic',
    metaDescription: "Learn what causes septic drain field failure and whether your system can be repaired or needs replacement. Expert guidance from A Wesco Septic.",
    heroImage: '/services-hero.webp',
    sections: [
      {
        type: 'intro',
        body: "Drain field failure is the worst-case scenario in septic system ownership — the repair that nobody wants to hear about. But it doesn't always mean a full system replacement. Understanding what caused the failure determines what your options are. Some failing drain fields can be restored. Others need to be replaced. Let's walk through both.",
      },
      {
        type: 'h2list',
        heading: 'Common Causes of Drain Field Failure',
        items: [
          {
            heading: 'Solids carryover from an overfull tank',
            body: "This is the most preventable cause. When a septic tank isn't pumped regularly, solids accumulate until they spill over the outlet baffle and into the drain field lines. Solid waste was never meant to reach the drain field — it clogs the soil pores that allow water to percolate into the ground.",
          },
          {
            heading: 'Soil saturation from excessive water use',
            body: "The drain field can only absorb as much water as the soil can handle. Running too many appliances at once, doing 10 loads of laundry in a day, or a leaky toilet running constantly can overwhelm the system and cause hydraulic failure.",
          },
          {
            heading: 'Root intrusion',
            body: "Tree and shrub roots can grow into drain field pipes, cracking them or blocking flow. Willows, poplars, and maples are especially aggressive and should never be planted near a septic system.",
          },
          {
            heading: 'Compaction from vehicles or construction',
            body: "Parking cars or heavy equipment over the drain field compacts the soil and can crush lateral pipes. Even driving over the area repeatedly can eliminate the soil's ability to absorb effluent.",
          },
          {
            heading: 'Biomat buildup',
            body: "A biomat is a layer of biological material that forms at the soil interface in the drain field. Some biomat is normal and even helps treatment. But excessive biomat — often from an overloaded or poorly maintained system — can seal off the soil and prevent absorption entirely.",
          },
          {
            heading: 'Age and design limitations',
            body: "Drain fields installed before the 1980s were often built with less stringent standards and materials. A system in service for 40+ years is nearing or past its expected lifespan regardless of maintenance.",
          },
        ],
      },
      {
        type: 'h2',
        heading: 'Signs Your Drain Field Is Failing',
        body: "Watch for wet or soggy ground above the drain field that doesn't dry out, unusually green or lush grass in that area, sewage odors outdoors, slow drains throughout the house, or sewage backing up inside. Any of these combined with a pumping history that's overdue is a strong indicator the drain field is struggling.",
      },
      {
        type: 'h2',
        heading: 'Can It Be Fixed Without Full Replacement?',
        body: "In some cases, yes. If the cause is hydraulic overload — too much water at once — resting the system for a period and reducing daily water use can allow the soil to recover. Certain drain field aeration and biological treatments can help break down biomat buildup. If the issue is a cracked or collapsed pipe, that section can sometimes be replaced without disturbing the entire field. The key is diagnosing the root cause accurately before deciding on a course of action. We don't recommend expensive repairs without being confident in the diagnosis.",
      },
      {
        type: 'callout',
        body: "If your drain field is failing, the worst thing you can do is keep pumping the tank and hoping the problem resolves itself. Without addressing the underlying cause, you'll just delay the inevitable and risk making the damage worse.",
      },
      {
        type: 'h2',
        heading: 'When Replacement Is the Only Option',
        body: "Full drain field replacement is necessary when the soil is permanently clogged, when root or physical damage is too extensive to repair, or when the existing system doesn't meet current health code requirements. Modern replacement systems — including mound systems, drip irrigation systems, and pressure-dosed systems — are more efficient and longer-lasting than what was installed in most older homes. We help homeowners navigate the permitting process and design a system that fits their property.",
      },
      {
        type: 'cta',
        heading: 'Worried About Your Drain Field?',
        body: "We can diagnose the issue and give you an honest assessment of your options. Call us to schedule a drain field evaluation — we serve Snohomish County, King County, and Camano Island.",
      },
    ],
    relatedSlugs: ['signs-septic-tank-full', 'septic-inspection-home-purchase'],
  },

  'septic-alarm-going-off': {
    slug: 'septic-alarm-going-off',
    tag: 'Emergency',
    date: 'December 2024',
    title: 'Your Septic Alarm Is Going Off — Here\'s What to Do Right Now',
    excerpt: "Don't panic. A beeping septic alarm is a warning, not a catastrophe — if you act quickly. Here's the immediate checklist to follow.",
    metaTitle: 'Septic Alarm Going Off? Here\'s What to Do | A Wesco Septic',
    metaDescription: "Septic alarm going off? Don't panic. Follow this step-by-step checklist and call A Wesco Septic for 24/7 emergency service in Snohomish and King County.",
    heroImage: '/services-hero.webp',
    sections: [
      {
        type: 'intro',
        body: "Your septic alarm is beeping. First: don't panic. A septic alarm is designed to give you advance warning before a serious problem occurs — not to tell you a catastrophe is already underway. But you do need to act quickly and carefully. Here's exactly what to do.",
      },
      {
        type: 'h2list',
        heading: 'Immediate Steps When the Alarm Goes Off',
        items: [
          {
            heading: 'Step 1: Silence the alarm (optional)',
            body: "Most septic alarms have a silence or mute button on the control panel. Silencing it doesn't fix the problem, but it stops the noise while you assess the situation. The alarm light will usually remain on.",
          },
          {
            heading: 'Step 2: Reduce water use immediately',
            body: "Stop running the dishwasher, laundry, and any non-essential water use. Don't do laundry, don't run the dishwasher, and minimize toilet flushes. This buys your system time.",
          },
          {
            heading: 'Step 3: Check the float or control panel',
            body: "If you can safely access the alarm panel or pump chamber, check whether the alarm is triggered by a high water level float or a pump failure indicator. High water level means effluent isn't moving out fast enough. Pump failure means the dosing pump may have stopped working.",
          },
          {
            heading: 'Step 4: Don\'t try to reset or repair it yourself',
            body: "Unless you're a licensed septic professional, don't open the pump chamber or attempt to reset any electrical components. Septic pump chambers contain hazardous gases. This is a job for a trained technician.",
          },
          {
            heading: 'Step 5: Call us',
            body: "We offer 24/7 emergency service throughout Snohomish County, King County, and Camano Island. The sooner you call, the more options we have before the situation becomes a backup.",
          },
        ],
      },
      {
        type: 'h2',
        heading: 'What Types of Systems Have Septic Alarms?',
        body: "Not all septic systems have alarms — conventional gravity systems typically don't. Alarms are most common on pump-assisted systems (mound systems, pressure-dosed systems, drip irrigation systems) and ATUs (aerobic treatment units). If your system has an alarm, it means there's a pump or mechanical component that needs to be monitored.",
      },
      {
        type: 'h2',
        heading: 'What the Alarm Is Actually Telling You',
        body: "A septic alarm typically indicates one of three things: the liquid level in the pump chamber has risen above the high-water float (meaning the pump isn't keeping up with inflow), the pump has failed and stopped moving effluent, or a float or sensor has become stuck in the alarm position due to a mechanical issue. The first two require prompt attention. The third is less urgent but still needs to be inspected.",
      },
      {
        type: 'callout',
        body: "Important: A septic alarm going off during or after heavy rainfall is more common. Groundwater infiltration can temporarily raise levels in the pump chamber. If this keeps happening every rain event, it indicates a more serious infiltration issue that should be addressed.",
      },
      {
        type: 'h2',
        heading: 'How Long Do You Have Before It Becomes a Backup?',
        body: "This depends on your tank size and household usage. With reduced water use, most households have 24 to 48 hours before a high-level alarm becomes a sewage backup. But that window shrinks fast if you continue normal water use. If the pump has failed completely, the clock is shorter. Don't wait until morning if the alarm went off at night and you have a large household.",
      },
      {
        type: 'cta',
        heading: 'Septic Alarm Going Off Right Now?',
        body: "Call us at (360) 668-6561 — we have technicians available 24/7 for emergency septic service throughout Snohomish County, King County, and Camano Island.",
      },
    ],
    relatedSlugs: ['signs-septic-tank-full', 'how-often-pump-septic-tank'],
  },

  'things-never-flush-septic': {
    slug: 'things-never-flush-septic',
    tag: 'Tips',
    date: 'November 2024',
    title: 'Things You Should Never Flush if You Have a Septic System',
    excerpt: "Septic systems aren't designed to handle what municipal sewer systems can. This list of no-flush items could save you thousands in repairs.",
    metaTitle: 'Things You Should Never Flush With a Septic System | A Wesco Septic',
    metaDescription: "Protect your septic system: learn what you should never flush or put down the drain. Expert tips from A Wesco Septic serving Snohomish and King County.",
    heroImage: '/services-hero.webp',
    sections: [
      {
        type: 'intro',
        body: "Your septic system relies on a delicate bacterial ecosystem to break down waste. It's not a garbage can, and it doesn't work the same way a municipal sewer line does. What you flush or drain has a direct impact on how long your system lasts — and what it costs you when something goes wrong.",
      },
      {
        type: 'h2list',
        heading: 'Never Flush These Items',
        intro: "These items should never go into a septic-connected toilet, no exceptions:",
        items: [
          {
            heading: '"Flushable" wipes',
            body: "This is the biggest culprit we see. Despite the label, flushable wipes do not break down in a septic system the way toilet paper does. They accumulate in the tank, clog the outlet baffle, and get pushed into the drain field. We find them in nearly every tank we pump.",
          },
          {
            heading: 'Paper towels, tissues, and napkins',
            body: "These are not designed to break down in water. Even if they make it through the toilet, they'll accumulate in your tank.",
          },
          {
            heading: 'Feminine hygiene products',
            body: "Tampons, pads, and applicators do not break down in a septic system. Period.",
          },
          {
            heading: 'Condoms',
            body: "Latex does not break down biologically. It will simply accumulate in your tank.",
          },
          {
            heading: 'Medications and pharmaceuticals',
            body: "Medications disrupt the bacterial balance in your tank that makes the system work. Flush them through your pharmacy's take-back program, not your toilet.",
          },
          {
            heading: 'Cotton balls and swabs',
            body: "Cotton doesn't break down — these will clog baffles and accumulate in your tank.",
          },
          {
            heading: 'Cat litter',
            body: "Even \"flushable\" cat litter can clog pipes and disrupt your tank's bacterial activity.",
          },
          {
            heading: 'Hair',
            body: "Clumps of hair from brushes or drains bind together in the tank and create blockages.",
          },
        ],
      },
      {
        type: 'h2list',
        heading: 'Keep These Out of Your Drains',
        intro: "Beyond the toilet, your sinks and drains are also connected to your septic system. Watch out for these:",
        items: [
          {
            heading: 'Grease, fats, and cooking oils',
            body: "These solidify in your pipes and tank. Pour them into a sealed container and put them in the trash.",
          },
          {
            heading: 'Harsh chemical drain cleaners',
            body: "Products like Drano kill the bacteria in your septic tank that digest waste. If you have a slow drain, call a plumber — don't pour chemicals into a septic-connected drain.",
          },
          {
            heading: 'Bleach in large quantities',
            body: "A small amount of bleach from laundry is usually fine. But pouring bleach directly down a drain, using it to clean a septic tank access cover, or using bleach tablets in your toilet tank can harm your system's bacterial balance.",
          },
          {
            heading: 'Paint, solvents, and automotive fluids',
            body: "These are toxic to the bacteria in your system and can contaminate groundwater. Dispose of them at a hazardous waste facility.",
          },
          {
            heading: 'Food waste from a garbage disposal',
            body: "If you have a garbage disposal connected to a septic system, use it sparingly. Excessive solid food waste can overwhelm your tank and shorten your pumping interval significantly.",
          },
        ],
      },
      {
        type: 'callout',
        body: "A simple rule of thumb: the only things that should go into a septic system are the three P's — pee, poo, and (septic-safe) paper. That's it.",
      },
      {
        type: 'h2',
        heading: 'Septic-Safe Products to Look For',
        body: "When shopping for household cleaners, look for products labeled \"septic safe\" — these are formulated without harsh antimicrobials or chemicals that damage beneficial bacteria. Seventh Generation, Method, and similar brands are generally safe. Single-ply toilet paper breaks down faster than thick multi-ply varieties.",
      },
      {
        type: 'cta',
        heading: 'Have Questions About What\'s Safe for Your System?',
        body: "Call us — we're happy to give you straight answers about your specific system and habits. And if it's been a while since your last pump-out, now's a good time to schedule one.",
      },
    ],
    relatedSlugs: ['how-often-pump-septic-tank', 'signs-septic-tank-full'],
  },
};

export const BLOG_LIST = Object.values(BLOG_POSTS);
