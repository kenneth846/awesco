export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceStep {
  n: string;
  title: string;
  body: string;
}

export interface ServiceBenefit {
  icon: string; // lucide icon name
  title: string;
  body: string;
}

export interface ServiceData {
  slug: string;
  heroImage?: string; // optional — falls back to plain dark bg if not set
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  defaultService: string;
  intro: {
    heading: string;
    body: string;
  };
  whyMatters: {
    heading: string;
    body: string;
    bullets: string[];
  };
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  faqs: ServiceFAQ[];
  closingCTA: string;
}

export const SERVICES: Record<string, ServiceData> = {

  // ─── 1. Septic Tank Pumping ────────────────────────────────────────────────
  'septic-tank-pumping': {
    slug: 'septic-tank-pumping',
    heroImage: '/services-hero.webp',
    metaTitle: 'Septic Tank Pumping | Snohomish | A Wesco Septic',
    metaDescription:
      'Professional septic tank pumping throughout Snohomish County, King County, and Camano Island. Every pump includes a complimentary inspection. Call (360) 668-6561.',
    canonicalPath: '/services/septic-tank-pumping',
    eyebrow: '/ SERVICE · PUMPING',
    heroTitle: 'Septic Tank\nPumping',
    heroSubtitle:
      'Pumping your septic tank is one of the most important steps you can take to keep your entire septic system healthy. We provide professional, thorough, and reliable pumping throughout Snohomish County, King County, and Camano Island.',
    defaultService: 'Septic Tank Pumping',
    intro: {
      heading: 'Protect Your Home. Protect Your System.',
      body: 'Septic tanks should be pumped every 2–3 years depending on the age of your system, tank size, and number of people in your household. Skipping or delaying pumping can lead to costly backups, damage to your drain field, and premature system failure. Our experienced crew shows up on time, explains everything clearly, and leaves your yard exactly as they found it.',
    },
    whyMatters: {
      heading: 'Why Regular Pumping Matters',
      body: 'Your septic tank is working around the clock. Solids accumulate over time, and when the tank gets too full, they can push through to the drain field — causing the kind of damage that costs thousands to fix. Regular pumping is the single most cost-effective thing you can do for your system.',
      bullets: [
        'Prevents sewage backups and yard overflows',
        'Protects and extends the life of your drain field',
        'Keeps your system flowing correctly and efficiently',
        'Identifies potential issues before they become expensive',
        'Maintains home value — especially important for resale',
      ],
    },
    benefits: [
      { icon: 'Search', title: 'Courtesy Inspection', body: 'Every pumping includes a complimentary inspection to check for signs of wear, damage, or malfunction — at no extra charge.' },
      { icon: 'Wrench', title: 'Expert Technicians', body: 'Our experienced crew explains how your system works and gives you straight answers on how to best maintain it.' },
      { icon: 'Shield', title: 'Exceptional Service', body: 'Consistent, honest, and professional service on every visit. We treat your home the way we\'d treat our own.' },
      { icon: 'Zap', title: '24/7 Emergency Response', body: 'We\'re on call around the clock and proudly offer same-day or next-day service whenever your system needs attention.' },
    ],
    process: [
      { n: '01', title: 'We locate & access the tank', body: 'Our crew locates your tank lid and access port. If you don\'t know where it is, we can locate it for you.' },
      { n: '02', title: 'Full pump-out', body: 'We completely pump the tank — liquid and solid waste — using our professional vacuum equipment.' },
      { n: '03', title: 'Inspection', body: 'We inspect the tank interior, baffles, lids, and filter for wear, damage, or anything that needs attention.' },
      { n: '04', title: 'Debrief & schedule', body: 'We walk you through what we found, answer your questions, and help you set a maintenance schedule going forward.' },
    ],
    faqs: [
      { q: 'How often should I pump my septic tank?', a: 'It depends on household size, tank size, and usage. Most households should pump every 2–3 years. If you don\'t know the last pump date, call us — we\'ll get you on a schedule.' },
      { q: 'What are signs my tank is full?', a: 'Slow drains across multiple fixtures, gurgling toilets, sewage odors inside or outside, soggy ground near the tank or drain field, and backups at the lowest drain are the most common warning signs.' },
      { q: 'Can I use water while the tank is being pumped?', a: 'It\'s best to limit water use during service. We\'ll tell you what\'s safe during the appointment so you don\'t overload the system while we\'re working.' },
      { q: 'Does pumping fix slow drains?', a: 'If slow drains are caused by an overfull tank or clogged filter, pumping often helps. If the drain field is saturated or there\'s a line issue, additional diagnosis may be needed — we\'ll let you know what we find.' },
      { q: 'Do you need to dig to access the tank?', a: 'Usually no. Most tanks have a riser or accessible lid. If the lid is buried, there\'s typically a small additional charge for excavation. We\'ll always communicate costs upfront.' },
      { q: 'What happens to the waste you pump out?', a: 'All waste is transported to a licensed disposal and treatment facility. Everything is handled legally and responsibly — you don\'t need to worry about that.' },
    ],
    closingCTA: 'Don\'t wait for a backup. Schedule your septic tank pumping today.',
  },

  // ─── 2. Septic Inspections ─────────────────────────────────────────────────
  'septic-inspections': {
    slug: 'septic-inspections',
    heroImage: '/services-hero.webp',
    metaTitle: 'Septic System Inspections | Snohomish | A Wesco Septic',
    metaDescription:
      'Routine and real estate septic inspections throughout Snohomish County, King County, and Camano Island. Trusted by homeowners and real estate agents since 1989. Call (360) 668-6561.',
    canonicalPath: '/services/septic-inspections',
    eyebrow: '/ SERVICE · INSPECTIONS',
    heroTitle: 'Septic System\nInspections',
    heroSubtitle:
      'Whether it\'s routine maintenance, a real estate transaction, or a pre-purchase check — inspecting a septic system is essential for identifying potential issues early and avoiding costly problems down the road.',
    defaultService: 'Septic Inspection',
    intro: {
      heading: 'Know Exactly What You\'re Dealing With.',
      body: 'A proper septic inspection gives you the full picture: the condition of the tank, baffles, filters, distribution box, drain field, and any electrical components. Whether you\'re a homeowner staying on top of maintenance, a buyer protecting your investment, or a real estate agent needing reliable escrow documentation — we deliver clear, thorough, written reports you can rely on.',
    },
    whyMatters: {
      heading: 'Why Inspections Matter',
      body: 'Most septic problems start small and grow silently underground. By the time you see symptoms — soggy ground, slow drains, odors — the damage may already be significant. A routine inspection finds small issues before they become expensive emergencies.',
      bullets: [
        'Catch problems before they become expensive emergencies',
        'Required documentation for most home sales and refinances',
        'Protects buyers from inheriting a failing system',
        'Satisfies county health department requirements in many areas',
        'Establishes a maintenance baseline for the life of the system',
      ],
    },
    benefits: [
      { icon: 'FileText', title: 'Written Report', body: 'Every inspection includes a detailed written report documenting system condition, components checked, and any findings — ready for escrow or your records.' },
      { icon: 'Home', title: 'Real Estate Ready', body: 'We work with buyers, sellers, and agents regularly. We know what lenders and county offices need and deliver it on time.' },
      { icon: 'Clock', title: 'Prompt Scheduling', body: 'Real estate transactions move fast. We prioritize inspection scheduling to keep your closing on track.' },
      { icon: 'Shield', title: 'Fully Licensed', body: 'All inspections are performed by licensed, experienced technicians who know exactly what to look for in this region\'s systems.' },
    ],
    process: [
      { n: '01', title: 'Visual & access inspection', body: 'We locate and access all components: tank lid, distribution box, and drain field observation points.' },
      { n: '02', title: 'Tank & baffle evaluation', body: 'We inspect tank condition, inlet and outlet baffles, and the effluent filter for wear, damage, or blockage.' },
      { n: '03', title: 'Drain field assessment', body: 'We evaluate drain field performance, looking for saturation, surfacing effluent, or signs of failure.' },
      { n: '04', title: 'Written findings', body: 'We document all findings in a clear written report and walk you through what we found and any recommended next steps.' },
    ],
    faqs: [
      { q: 'What does a septic inspection include?', a: 'We inspect the tank, baffles, filter, inlet/outlet pipes, distribution box, and drain field. We test for function, check for damage, and document everything in a written report.' },
      { q: 'How long does an inspection take?', a: 'Most inspections take 1–2 hours depending on system size and accessibility. Real estate inspections may take slightly longer if documentation is needed.' },
      { q: 'Do you do real estate / escrow inspections?', a: 'Yes, absolutely. We perform septic inspections for home sales and escrow situations regularly and can walk you through exactly what to expect and what documentation you\'ll receive.' },
      { q: 'What if the inspection finds a problem?', a: 'We\'ll explain exactly what was found, what it means, and what options you have. We can often handle repairs ourselves, which keeps things streamlined for buyers and sellers.' },
      { q: 'Can a septic inspection fail?', a: 'We don\'t "pass" or "fail" systems — we document what we find. Our report describes the condition and any deficiencies. What happens next is up to the parties involved in the transaction.' },
      { q: 'How often should I get a routine inspection?', a: 'Every 3 years is a good general guideline, ideally timed with your pump-out. Some county regulations require more frequent inspections — we can advise based on your system and location.' },
    ],
    closingCTA: 'Need a septic inspection for a real estate transaction or routine check? Schedule with us today.',
  },

  // ─── 3. Septic Repairs ─────────────────────────────────────────────────────
  'septic-repairs': {
    slug: 'septic-repairs',
    heroImage: '/services-hero.webp',
    metaTitle: 'Septic Repairs | Snohomish | A Wesco Septic',
    metaDescription:
      'Expert septic system repairs in Snohomish County, King County, and Camano Island. Jetting, line repairs, electrical work, and more. 24/7 emergency response. Call (360) 668-6561.',
    canonicalPath: '/services/septic-repairs',
    eyebrow: '/ SERVICE · REPAIRS',
    heroTitle: 'Septic System\nRepairs',
    heroSubtitle:
      'From jetting services and line repairs to advanced electrical work, our team handles the full range of septic system repairs. When something\'s wrong, we find it fast and fix it right.',
    defaultService: 'Septic Repair',
    intro: {
      heading: 'Full-Scope Septic Repair Services.',
      body: 'Septic systems are complex — they involve underground pipes, tanks, pumps, electrical controls, and drain fields that all have to work together. When something breaks down, you need a team that can diagnose the whole system, not just patch the obvious symptom. Our technicians have decades of experience with all types of septic systems throughout the Pacific Northwest.',
    },
    whyMatters: {
      heading: 'What We Repair',
      body: 'We handle the full spectrum of septic repair work — from simple fixes to complex system rehabilitation. If it\'s part of your septic system, we can repair it.',
      bullets: [
        'Clogged or damaged pipes and jetting services',
        'Broken or deteriorated tank baffles and filters',
        'Failed pump replacement and pump chamber repairs',
        'Septic alarm systems and float switch repairs',
        'Electrical controls, panels, and wiring',
        'Distribution boxes and diversion valves',
        'Riser and lid replacement',
      ],
    },
    benefits: [
      { icon: 'Zap', title: '24/7 Emergency Response', body: 'Septic emergencies don\'t wait for business hours. We\'re on call around the clock and dispatch quickly when you need us.' },
      { icon: 'Search', title: 'Accurate Diagnosis', body: 'We investigate the root cause, not just the symptoms — so repairs actually stick and problems don\'t come back.' },
      { icon: 'Wrench', title: 'Full-Service Crew', body: 'One call, one team. We handle mechanical, electrical, and structural repairs without subcontracting.' },
      { icon: 'Shield', title: 'Quality Parts & Workmanship', body: 'We use professional-grade components and stand behind our repair work. Do it right the first time.' },
    ],
    process: [
      { n: '01', title: 'Diagnosis', body: 'We systematically evaluate your system to pinpoint the cause — not just the symptom. This saves time and money on repairs.' },
      { n: '02', title: 'Clear estimate', body: 'Before we touch anything, we explain what\'s needed, why, and what it will cost. No surprises.' },
      { n: '03', title: 'Repair', body: 'Our technicians complete the repair efficiently using quality parts. Most common repairs are completed in a single visit.' },
      { n: '04', title: 'Verify & test', body: 'We test the repaired system to confirm everything is working correctly before we leave.' },
    ],
    faqs: [
      { q: 'My septic alarm is going off — what should I do?', a: 'Reduce water use immediately (no laundry, shorter showers, hold off on the dishwasher) and call us. An alarm typically means high water in the pump chamber — a system issue that needs attention before it becomes a sewage backup.' },
      { q: 'Can you handle pump replacements?', a: 'Yes. Pump failures are one of the most common repairs we handle. We carry common pump models and can often complete a replacement on the same visit as the service call.' },
      { q: 'Do you do emergency repairs?', a: 'Absolutely. If you\'re dealing with a backup, alarm condition, sewage smell, or standing wastewater — call us immediately. We offer 24/7 emergency dispatch.' },
      { q: 'What is jetting and when is it needed?', a: 'Hydro-jetting uses high-pressure water to clear blockages from pipes and lines in and around your septic system. It\'s effective for grease buildup, root intrusion, and other obstructions that standard snaking can\'t clear.' },
      { q: 'Can you repair electrical components?', a: 'Yes. We handle septic-related electrical work including float switches, control panels, alarm systems, and pump wiring. Our technicians are trained on both mechanical and electrical septic systems.' },
      { q: 'How do I know if I need a repair or a full replacement?', a: 'In many cases, targeted repairs are far more cost-effective than full replacement. We\'ll give you an honest assessment and recommend the option that makes the most sense for your situation and budget.' },
    ],
    closingCTA: 'System acting up? Don\'t wait — call us or request service online.',
  },

  // ─── 4. Drain Field Repair ─────────────────────────────────────────────────
  'septic-drainfield-repair': {
    slug: 'septic-drainfield-repair',
    heroImage: '/services-hero.webp',
    metaTitle: 'Septic Drain Field Repair | Snohomish | A Wesco Septic',
    metaDescription:
      'Drain field repair and restoration in Snohomish County, King County, and Camano Island. Soggy ground, slow drains, sewage odors — we diagnose and fix it. Call (360) 668-6561.',
    canonicalPath: '/services/septic-drainfield-repair',
    eyebrow: '/ SERVICE · DRAIN FIELD',
    heroTitle: 'Septic Drain\nField Repair',
    heroSubtitle:
      'Soggy ground, standing water, sewage odors outdoors, or slow drains throughout the house are all signs your drain field may be in trouble. We diagnose and restore failing drain fields throughout the region.',
    defaultService: 'Drain Field Repair',
    intro: {
      heading: 'Don\'t Ignore the Warning Signs.',
      body: 'Your drain field is the final stage of your septic system — where treated wastewater disperses safely into the soil. When it fails, the consequences range from unpleasant to a full environmental and health hazard. The good news: not every drain field problem means full replacement. Experienced diagnosis and targeted intervention can often restore function at a fraction of the replacement cost.',
    },
    whyMatters: {
      heading: 'Signs of a Drain Field Problem',
      body: 'Drain field failure often develops slowly before becoming obvious. Knowing the warning signs early can save thousands of dollars and a lot of stress.',
      bullets: [
        'Soggy or spongy ground over the drain field area',
        'Standing water or puddles that don\'t drain after dry weather',
        'Sewage odors outside, especially near the drain field',
        'Slow drains throughout the entire home (not just one fixture)',
        'Backups or gurgling that gets worse after heavy rain',
        'Unusually lush, green grass over the drain field in dry weather',
      ],
    },
    benefits: [
      { icon: 'Search', title: 'Accurate Diagnosis First', body: 'We identify the root cause — whether it\'s hydraulic overload, biomat buildup, soil compaction, or structural failure — before recommending any repair.' },
      { icon: 'Layers', title: 'Restoration Before Replacement', body: 'We explore all options to restore your existing system before recommending full replacement. Targeted repairs are often far more affordable.' },
      { icon: 'Shield', title: 'Regulatory Compliance', body: 'Drain field work often involves health department permits. We manage the documentation and compliance requirements so you don\'t have to.' },
      { icon: 'Wrench', title: 'Complete Repair Capability', body: 'From rerouting distribution to full lateral replacement, our team handles the full scope of drain field rehabilitation.' },
    ],
    process: [
      { n: '01', title: 'Assess the system', body: 'We evaluate the full system — tank condition, distribution box, and drain field — to understand what\'s happening and why.' },
      { n: '02', title: 'Diagnose the cause', body: 'We identify whether the problem is hydraulic overload, biomat accumulation, physical damage, or soil failure — the cause determines the right solution.' },
      { n: '03', title: 'Recommend & plan', body: 'We present your options clearly, with costs, so you can make an informed decision. We always start with the least invasive effective solution.' },
      { n: '04', title: 'Repair & restore', body: 'We complete the repair — which may include resting the field, rerouting flow, replacing laterals, or more — and verify performance before we leave.' },
    ],
    faqs: [
      { q: 'Can a failing drain field be repaired or does it always need replacement?', a: 'Not always replacement. Many drain field problems — especially those caught early — can be addressed with targeted repairs, resting periods, or flow rerouting. We always recommend the most cost-effective solution that actually works.' },
      { q: 'What causes drain field failure?', a: 'The most common causes are: infrequent pumping leading to solids reaching the field, hydraulic overload from too much water use, biomat buildup in the soil, physical damage from vehicles or root intrusion, and plain old age.' },
      { q: 'How long does drain field repair take?', a: 'It depends on the extent of the problem. Simple interventions can be done in a day. More extensive rehabilitation or replacement can take several days. We\'ll give you a realistic timeline with your estimate.' },
      { q: 'Do I need a permit for drain field work?', a: 'Most drain field repair and replacement work does require a county permit. We handle the permitting process for our clients — it\'s part of how we do business.' },
      { q: 'What does drain field replacement cost?', a: 'Costs vary significantly based on soil conditions, system type, size, and local requirements. We provide written estimates before any work begins so there are no surprises.' },
      { q: 'Can heavy rain cause drain field problems?', a: 'Yes. Heavy or prolonged rain can saturate the soil around your drain field, temporarily or permanently reducing its capacity to absorb effluent. If your symptoms only appear or worsen in wet weather, this is often a contributing factor.' },
    ],
    closingCTA: 'Worried about your drain field? Get a diagnosis before it becomes an emergency.',
  },

  // ─── 5. Maintenance Agreements ─────────────────────────────────────────────
  'maintenance-agreements': {
    slug: 'maintenance-agreements',
    heroImage: '/services-hero.webp',
    metaTitle: 'Septic Maintenance Agreements | Snohomish | A Wesco Septic',
    metaDescription:
      'Stay ahead of septic problems with a maintenance agreement from A Wesco Septic. Routine pumping, inspections, and priority service across Snohomish County, King County, and Camano Island. Call (360) 668-6561.',
    canonicalPath: '/services/maintenance-agreements',
    eyebrow: '/ SERVICE · MAINTENANCE',
    heroTitle: 'Maintenance\nAgreements',
    heroSubtitle:
      'Stay on schedule, reduce emergency calls, and extend the life of your septic system with a routine service plan. We handle the reminders — you don\'t have to think about it.',
    defaultService: 'Maintenance Agreement',
    intro: {
      heading: 'Set It. Forget It. Protect It.',
      body: 'Most septic problems are entirely preventable with consistent maintenance. The challenge is remembering — and that\'s where a maintenance agreement comes in. We track your service history, remind you when you\'re due, and show up on schedule. You get peace of mind knowing your system is looked after by the same trusted team, year after year.',
    },
    whyMatters: {
      heading: 'What a Maintenance Agreement Includes',
      body: 'Our maintenance plans are designed to cover everything that keeps your system running reliably — without unexpected costs.',
      bullets: [
        'Scheduled routine pump-outs on your custom interval',
        'Courtesy system inspection with every service visit',
        'Priority scheduling over non-contract customers',
        'Service history tracking — we know your system',
        'Reminders so you never have to track it yourself',
        'Discounted rates on any additional repairs needed',
      ],
    },
    benefits: [
      { icon: 'Calendar', title: 'Automatic Reminders', body: 'We track your service history and send reminders when you\'re due. You never have to wonder if your system has been serviced.' },
      { icon: 'Star', title: 'Priority Scheduling', body: 'Agreement customers get priority scheduling — especially important during peak seasons and emergency situations.' },
      { icon: 'TrendingDown', title: 'Lower Long-Term Costs', body: 'Consistent maintenance prevents the expensive emergency repairs and premature system failures that catch homeowners off guard.' },
      { icon: 'Shield', title: 'One Trusted Team', body: 'The same experienced technicians service your system every time — they know your setup and your history.' },
    ],
    process: [
      { n: '01', title: 'We assess your system', body: 'We review your system type, tank size, household size, and service history to recommend the right maintenance interval for you.' },
      { n: '02', title: 'We build your plan', body: 'We create a custom schedule that fits your system needs and budget — typically a 2- or 3-year pump cycle with annual inspections.' },
      { n: '03', title: 'We take it from there', body: 'We track your due dates, remind you ahead of time, and schedule service at your convenience — no hunting around for numbers.' },
      { n: '04', title: 'You stay protected', body: 'With regular service on the books, you\'re far less likely to face an emergency, and if one does arise, you\'re first in line.' },
    ],
    faqs: [
      { q: 'What\'s included in a maintenance agreement?', a: 'Plans vary based on your system, but typically include scheduled pump-outs, courtesy inspections, priority service, and service history tracking. We\'ll customize a plan that fits your system and needs.' },
      { q: 'How is the maintenance interval determined?', a: 'We base it on your tank size, household size, usage patterns, and past service history. Most households pump every 2–3 years, but your system may need more or less frequent service.' },
      { q: 'Do I save money with a maintenance agreement?', a: 'Yes — in two ways. First, you typically get discounted rates on routine service. Second, and more importantly, consistent maintenance prevents the emergency repairs and early system failures that cost far more than regular pumping.' },
      { q: 'Can I cancel the agreement?', a: 'We\'ll go over the terms when you sign up. We want the relationship to work for both sides — our goal is to earn your business long-term through good service, not contracts.' },
      { q: 'What if something comes up between scheduled visits?', a: 'Agreement customers get priority scheduling for any service call — scheduled or unscheduled. If something comes up between maintenance visits, you\'re at the front of the line.' },
      { q: 'Do you offer agreements for commercial properties?', a: 'Yes. We work with residential homeowners, landlords, HOAs, and commercial property owners. Commercial systems often benefit most from structured maintenance plans given the higher usage levels.' },
    ],
    closingCTA: 'Ready to stop worrying about your septic system? Set up a maintenance agreement today.',
  },
};
