export interface CityData {
  slug: string;
  name: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  heroLine1: string;
  heroLine2: string;
  intro: string;
  services: string[];
  nearbyNote: string;
}

const BASE_SERVICES = [
  'Septic Tank Pumping',
  'Septic System Inspections',
  'Septic Repairs',
  'Drain Field Repair',
  'Maintenance Agreements',
  '24/7 Emergency Service',
];

function make(
  slug: string,
  name: string,
  county: string,
  intro: string,
  nearbyNote: string
): CityData {
  return {
    slug,
    name,
    county,
    metaTitle: `Septic Services in ${name}, WA | A Wesco Septic`,
    metaDescription: `A Wesco Septic provides professional septic tank pumping, inspections, repairs, and drain field services in ${name}, Washington. Licensed, insured, and available 24/7. Call (360) 668-6561.`,
    heroLine1: `SEPTIC SERVICES`,
    heroLine2: name.toUpperCase(),
    intro,
    services: BASE_SERVICES,
    nearbyNote,
  };
}

export const CITIES: Record<string, CityData> = {
  'snohomish-washington': make(
    'snohomish-washington', 'Snohomish', 'Snohomish County',
    'A Wesco Septic has been serving the Snohomish community since 1989. Our office is located right here in Snohomish — meaning faster response times and a team that knows your neighborhood, your soil, and your systems. From routine pumping to emergency repairs, we\'re your local septic experts.',
    'We also serve Monroe, Lake Stevens, Everett, and all surrounding Snohomish County communities.'
  ),
  'everett-washington': make(
    'everett-washington', 'Everett', 'Snohomish County',
    'As Snohomish County\'s largest city, Everett is home to thousands of properties with septic systems — especially in the surrounding unincorporated areas. A Wesco Septic provides reliable septic pumping, inspection, and repair services throughout Everett and the surrounding region.',
    'We also serve Marysville, Mukilteo, Mill Creek, and all of Snohomish County.'
  ),
  'lake-stevens-washington': make(
    'lake-stevens-washington', 'Lake Stevens', 'Snohomish County',
    'Lake Stevens continues to grow rapidly, with many properties on private septic systems outside the city\'s sewer service area. A Wesco Septic handles everything from routine maintenance to complex drain field repairs throughout the Lake Stevens area.',
    'We also serve Marysville, Snohomish, Monroe, and all of eastern Snohomish County.'
  ),
  'marysville-washington': make(
    'marysville-washington', 'Marysville', 'Snohomish County',
    'Marysville and the Tulalip area include a wide range of residential and rural properties on septic systems. Our team serves homeowners, landlords, and businesses throughout Marysville with professional, reliable septic service.',
    'We also serve Arlington, Stanwood, Tulalip, Everett, and all of northern Snohomish County.'
  ),
  'monroe-washington': make(
    'monroe-washington', 'Monroe', 'Snohomish County',
    'Monroe and the surrounding Sky Valley communities have many rural and semi-rural properties with private septic systems. A Wesco Septic provides expert service throughout Monroe and the surrounding foothills — from routine pumping to full system rehabilitation.',
    'We also serve Sultan, Snohomish, Duvall, and the Sky Valley corridor.'
  ),
  'mukilteo-washington': make(
    'mukilteo-washington', 'Mukilteo', 'Snohomish County',
    'Mukilteo\'s waterfront and hillside properties often rely on private septic systems. A Wesco Septic provides prompt, professional service throughout Mukilteo, handling everything from regular maintenance to pre-sale septic inspections.',
    'We also serve Lynnwood, Edmonds, Everett, and all of south Snohomish County.'
  ),
  'arlington-washington': make(
    'arlington-washington', 'Arlington', 'Snohomish County',
    'Arlington\'s mix of rural farmland and growing suburban areas means many homeowners and businesses rely on private septic systems. A Wesco Septic has deep experience with the variety of system types found throughout the Arlington area.',
    'We also serve Stanwood, Marysville, Granite Falls, and all of northern Snohomish County.'
  ),
  'granite-falls-washington': make(
    'granite-falls-washington', 'Granite Falls', 'Snohomish County',
    'Granite Falls and the Mountain Loop Highway corridor are home to many rural properties that depend on private septic systems. A Wesco Septic serves this area regularly with pumping, inspection, and repair services.',
    'We also serve Arlington, Monroe, Sultan, and all of eastern Snohomish County.'
  ),
  'stanwood-washington': make(
    'stanwood-washington', 'Stanwood', 'Snohomish County',
    'Stanwood and the Stillaguamish River corridor feature a high density of rural and semi-rural properties with private septic systems. A Wesco Septic provides thorough, dependable service to homeowners and farms throughout the Stanwood area.',
    'We also serve Arlington, Marysville, Camano Island, and all of northwest Snohomish County.'
  ),
  'sultan-washington': make(
    'sultan-washington', 'Sultan', 'Snohomish County',
    'Sultan and the eastern foothills of Snohomish County are home to many rural properties with older or custom septic systems. A Wesco Septic\'s experienced technicians handle all types of systems — including aerobic and mound systems common in this area.',
    'We also serve Monroe, Gold Bar, and all of the Sky Valley corridor.'
  ),
  'goldbar-washington': make(
    'goldbar-washington', 'Gold Bar', 'Snohomish County',
    'Gold Bar and Wallace Falls area residents rely on private septic systems. A Wesco Septic makes regular service runs to this community, providing the same high-quality service as our Snohomish County neighbors closer to the city.',
    'We also serve Sultan, Monroe, and all of eastern Snohomish County.'
  ),
  'tulalip-washington': make(
    'tulalip-washington', 'Tulalip', 'Snohomish County',
    'The Tulalip area, including tribal lands and surrounding unincorporated communities, includes many properties on private septic systems. A Wesco Septic provides professional service throughout this area with respect for the land and community.',
    'We also serve Marysville, Stanwood, Everett, and all of northwest Snohomish County.'
  ),
  'mill-creek-washington': make(
    'mill-creek-washington', 'Mill Creek', 'Snohomish County',
    'Mill Creek\'s established neighborhoods include many properties on private septic systems, particularly in areas that pre-date municipal sewer expansion. A Wesco Septic provides routine and emergency service throughout Mill Creek.',
    'We also serve Bothell, Lynnwood, Mukilteo, and all of south Snohomish County.'
  ),
  'bothell-washington': make(
    'bothell-washington', 'Bothell', 'King/Snohomish County',
    'Bothell straddles both King and Snohomish counties, and many of its older and rural properties remain on private septic systems. A Wesco Septic serves both sides of the county line with reliable pumping, inspection, and repair services.',
    'We also serve Kenmore, Kirkland, Woodinville, Mill Creek, and all of the Bothell area.'
  ),
  'edmonds-washington': make(
    'edmonds-washington', 'Edmonds', 'Snohomish County',
    'Edmonds\' hillside neighborhoods and waterfront properties include many homes on private septic systems. A Wesco Septic provides professional service throughout Edmonds, including pre-sale inspections commonly required in real estate transactions.',
    'We also serve Lynnwood, Mountlake Terrace, Mukilteo, and all of south Snohomish County.'
  ),
  'lynnwood-washington': make(
    'lynnwood-washington', 'Lynnwood', 'Snohomish County',
    'Lynnwood\'s older neighborhoods and surrounding rural areas include properties on private septic systems. A Wesco Septic provides timely, professional service throughout Lynnwood and handles everything from routine pumping to complex system repairs.',
    'We also serve Mountlake Terrace, Edmonds, Mill Creek, and all of south Snohomish County.'
  ),
  'mountlake-terrace-washington': make(
    'mountlake-terrace-washington', 'Mountlake Terrace', 'Snohomish County',
    'Mountlake Terrace properties on private septic systems benefit from A Wesco Septic\'s proximity and fast response times. We serve this community with the same professional standard we\'ve maintained since 1989.',
    'We also serve Lynnwood, Shoreline, Edmonds, and all of south Snohomish County.'
  ),
  'shoreline-washington': make(
    'shoreline-washington', 'Shoreline', 'King County',
    'Shoreline\'s older residential areas include properties that still rely on private septic systems. A Wesco Septic provides professional service throughout Shoreline, including escrow inspections and routine maintenance.',
    'We also serve Kenmore, Seattle, Mountlake Terrace, and all of north King County.'
  ),
  'bellevue': make(
    'bellevue', 'Bellevue', 'King County',
    'While much of Bellevue is served by municipal sewer, many properties in the greater Bellevue area — particularly in unincorporated neighborhoods and the eastern foothills — rely on private septic systems. A Wesco Septic serves these areas with expert care.',
    'We also serve Kirkland, Redmond, Sammamish, Issaquah, and all of the Eastside.'
  ),
  'kirkland-washington': make(
    'kirkland-washington', 'Kirkland', 'King County',
    'Kirkland\'s waterfront neighborhoods and surrounding hillside areas include many homes on private septic systems. A Wesco Septic provides reliable service throughout Kirkland, including pre-purchase inspections for home buyers in this competitive market.',
    'We also serve Bellevue, Redmond, Kenmore, Bothell, and all of the Eastside.'
  ),
  'kenmore-washington': make(
    'kenmore-washington', 'Kenmore', 'King County',
    'Kenmore\'s lakeside and hillside properties include homes on private septic systems. A Wesco Septic provides professional pumping, inspection, and repair services throughout Kenmore and the surrounding Lake Washington communities.',
    'We also serve Bothell, Kirkland, Shoreline, and all of north King County.'
  ),
  'redmond-washington': make(
    'redmond-washington', 'Redmond', 'King County',
    'Redmond\'s tech corridors and surrounding residential neighborhoods include many properties on private septic systems, especially in the Novelty Hill and Ames Lake areas. A Wesco Septic serves all of greater Redmond.',
    'We also serve Sammamish, Kirkland, Carnation, Duvall, and all of the Eastside.'
  ),
  'sammamish-washington': make(
    'sammamish-washington', 'Sammamish', 'King County',
    'Sammamish Plateau\'s newer developments and surrounding rural areas include many properties with private septic systems. A Wesco Septic provides expert service throughout Sammamish, from routine maintenance to complex system repairs.',
    'We also serve Issaquah, Redmond, Bellevue, Fall City, and all of the Sammamish Plateau.'
  ),
  'mercer-island-washington': make(
    'mercer-island-washington', 'Mercer Island', 'King County',
    'Mercer Island\'s established neighborhoods include homes on private septic systems. A Wesco Septic provides professional, discreet service to Mercer Island residents, including pre-sale inspections and routine pumping.',
    'We also serve Bellevue, Issaquah, Renton, and all of the Lake Washington communities.'
  ),
  'issaquah-washington': make(
    'issaquah-washington', 'Issaquah', 'King County',
    'Issaquah and the surrounding Issaquah Highlands and Tiger Mountain communities have many properties on private septic systems. A Wesco Septic provides expert service throughout this growing area, handling all system types.',
    'We also serve Sammamish, Fall City, Renton, Bellevue, and all of the Issaquah Highlands area.'
  ),
  'carnation-washington': make(
    'carnation-washington', 'Carnation', 'King County',
    'Carnation and the Snoqualmie Valley agricultural corridor feature many rural properties with private septic systems. A Wesco Septic regularly serves this community and understands the unique challenges of rural and agricultural septic systems.',
    'We also serve Duvall, Fall City, Redmond, Monroe, and all of the Snoqualmie Valley.'
  ),
  'duvall-washington': make(
    'duvall-washington', 'Duvall', 'King County',
    'Duvall\'s rural character and horse properties mean many homeowners rely on private septic systems. A Wesco Septic provides dependable service to the Duvall community, including large-lot systems and systems serving multiple structures.',
    'We also serve Carnation, Monroe, Redmond, and all of the Snoqualmie Valley.'
  ),
  'fall-city-washington': make(
    'fall-city-washington', 'Fall City', 'King County',
    'Fall City and the Snoqualmie River Valley are home to many rural properties with private septic systems. A Wesco Septic serves this area with the expertise needed for older systems and challenging soil conditions common in valley settings.',
    'We also serve Carnation, Issaquah, Sammamish, Preston, and all of the Snoqualmie Valley.'
  ),
  'preston-washington': make(
    'preston-washington', 'Preston', 'King County',
    'Preston and the surrounding rural King County communities have a high density of properties on private septic systems. A Wesco Septic provides experienced, reliable service to this area including older system types common in rural communities.',
    'We also serve Fall City, Issaquah, Renton, and all of southeast King County.'
  ),
  'renton-washington': make(
    'renton-washington', 'Renton', 'King County',
    'Renton\'s hillside neighborhoods and surrounding rural areas include many properties on private septic systems. A Wesco Septic provides professional service throughout Renton, including inspections frequently required for home sales in this active market.',
    'We also serve Issaquah, Bellevue, SeaTac, Tukwila, and all of south King County.'
  ),
  'seattle-washington': make(
    'seattle-washington', 'Seattle', 'King County',
    'While Seattle\'s dense core is served by municipal sewer, many properties in outlying Seattle neighborhoods and surrounding communities rely on private septic systems. A Wesco Septic serves these areas and the greater Seattle region.',
    'We also serve Shoreline, Renton, Burien, SeaTac, and all of King County.'
  ),
  'seatac-washington': make(
    'seatac-washington', 'SeaTac', 'King County',
    'SeaTac and the surrounding communities include properties on private septic systems. A Wesco Septic provides professional service throughout SeaTac, handling routine maintenance and complex system repairs.',
    'We also serve Burien, Tukwila, Renton, and all of south King County.'
  ),
  'burien-washington': make(
    'burien-washington', 'Burien', 'King County',
    'Burien\'s established neighborhoods include homes on private septic systems, particularly in areas that have not connected to municipal sewer. A Wesco Septic provides reliable service throughout Burien.',
    'We also serve SeaTac, Tukwila, Renton, and all of south King County.'
  ),
  'tukwila-washington': make(
    'tukwila-washington', 'Tukwila', 'King County',
    'Tukwila and the surrounding Duwamish Valley area include properties on private septic systems. A Wesco Septic provides professional septic service throughout Tukwila and south King County.',
    'We also serve Renton, Burien, SeaTac, and all of south King County.'
  ),
  'woodinville-washington': make(
    'woodinville-washington', 'Woodinville', 'King County',
    'Woodinville\'s wine country and rural residential areas feature many properties on private septic systems. A Wesco Septic serves Woodinville regularly with expert pumping, inspection, and repair services suited to rural and agricultural properties.',
    'We also serve Bothell, Duvall, Redmond, Kirkland, and all of northeast King County.'
  ),
  'camano-island-washington': make(
    'camano-island-washington', 'Camano Island', 'Island County',
    'Camano Island is primarily served by private septic systems — there is no municipal sewer on the island. A Wesco Septic provides full-service septic care throughout Camano Island, including pumping, inspections, repairs, and drain field rehabilitation. We make regular runs to the island so scheduling is never an issue.',
    'We also serve Stanwood, Marysville, and all of northwest Snohomish County.'
  ),
};
