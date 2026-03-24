import { createContext, useContext } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de';
export type Theme = 'dark' | 'light';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

export function detectLanguage(): Language {
  const browserLang = navigator.language?.toLowerCase() || 'en';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('de')) return 'de';
  return 'en';
}

type TranslationKeys = {
  // Navbar
  nav_home: string;
  nav_shop: string;
  nav_collections: string;
  nav_story: string;
  nav_lookbook: string;
  nav_blog: string;
  nav_contact: string;

  // Hero
  hero_subtitle: string;
  hero_slogan: string;
  hero_cta: string;
  hero_explore: string;

  // Featured
  featured_title: string;
  featured_subtitle: string;
  featured_view_all: string;

  // Collections
  collections_title: string;
  collections_subtitle: string;
  collection_neon_name: string;
  collection_neon_desc: string;
  collection_ghost_name: string;
  collection_ghost_desc: string;
  collection_explore: string;

  // CTA Section
  cta_title: string;
  cta_subtitle: string;
  cta_button: string;

  // Shop
  shop_title: string;
  shop_subtitle: string;
  shop_filter_all: string;
  shop_filter_tshirts: string;
  shop_filter_hoodies: string;
  shop_filter_oversized: string;
  shop_filter_caps: string;
  shop_filter_cases: string;
  shop_filter_accessories: string;
  shop_add_cart: string;
  shop_deploy_signal: string;
  shop_product_label: string;
  shop_loadout: string;
  shop_no_signals: string;
  shop_purge: string;
  shop_no_products: string;
  shop_from: string;
  shop_size: string;
  shop_color: string;
  shop_order_assets_singular: string;
  shop_order_assets_plural: string;
  shop_product_fallback: string;

  // Product Detail Page (PDP)
  pdp_data_log: string;
  pdp_size_matrix: string;
  pdp_color_channel: string;
  pdp_back: string;
  pdp_cta_deploy: string;
  pdp_logistics: string;
  pdp_share: string;
  pdp_logistics_text: string;
  pdp_copy_signal_link: string;
  pdp_broadcast_signal_link: string;
  pdp_description_fallback: string;
  pdp_asset_not_found: string;

  // Brand Story

  // Checkout (Nike Redesign)
  checkout_protocol_title: string;
  checkout_step_1: string;
  checkout_step_2: string;
  checkout_step_3: string;
  checkout_email_label: string;
  checkout_fname_label: string;
  checkout_lname_label: string;
  checkout_address_label: string;
  checkout_postal_label: string;
  checkout_city_label: string;
  checkout_country_label: string;
  checkout_phone_label: string;
  checkout_validate_btn: string;
  checkout_shipping_promise: string;
  checkout_inventory_title: string;
  checkout_subtotal_label: string;
  checkout_shipping_label: string;
  checkout_total_label: string;
  checkout_qty: string;
  checkout_size: string;
  checkout_success_title: string;
  checkout_success_desc: string;
  checkout_back_system: string;
  checkout_back_cart: string;
  checkout_edit: string;
  checkout_cc_num: string;
  checkout_cc_secure: string;
  checkout_auth_btn: string;
  checkout_terms_agree: string;
  checkout_final_btn: string;
  story_title: string;
  story_subtitle: string;
  story_chapter1_title: string;
  story_chapter1_text: string;
  story_chapter2_title: string;
  story_chapter2_text: string;
  story_chapter3_title: string;
  story_chapter3_text: string;
  story_manifesto_title: string;
  story_manifesto_text: string;

  // Lookbook
  lookbook_title: string;
  lookbook_subtitle: string;

  // Blog
  blog_title: string;
  blog_subtitle: string;
  blog_read_more: string;

  // Contact
  contact_title: string;
  contact_subtitle: string;
  contact_name: string;
  contact_email: string;
  contact_message: string;
  contact_send: string;
  contact_sent: string;

  // Footer
  footer_tagline: string;
  footer_quick_links: string;
  footer_follow_us: string;
  footer_newsletter: string;
  footer_newsletter_placeholder: string;
  footer_subscribe: string;
  footer_rights: string;

  // Products
  product_tshirt_1: string;
  product_tshirt_2: string;
  product_hoodie_1: string;
  product_hoodie_2: string;
  product_oversized_1: string;
  product_cap_1: string;
  product_case_1: string;
  product_case_2: string;

  product_tshirt_desc: string;
  product_hoodie_desc: string;
  product_oversized_desc: string;
  product_cap_desc: string;
  product_case_desc: string;

  product_1_tagline: string;
  product_2_tagline: string;
  product_3_tagline: string;
  product_4_tagline: string;
  product_5_tagline: string;
  product_6_tagline: string;
  product_7_tagline: string;
  product_8_tagline: string;

  // Blog Article - Cyberpunk Fashion 2026
  blog_article_back: string;
  blog_article_tag: string;
  blog_article_title: string;
  blog_article_date: string;
  blog_article_read_time: string;
  blog_article_intro_1: string;
  blog_article_intro_2: string;
  blog_article_s1_title: string;
  blog_article_s1_p1: string;
  blog_article_s1_p2: string;
  blog_article_s1_sub1_title: string;
  blog_article_s1_sub1_p1: string;
  blog_article_s2_title: string;
  blog_article_s2_p1: string;
  blog_article_s2_p2: string;
  blog_article_s2_sub1_title: string;
  blog_article_s2_sub1_p1: string;
  blog_article_s3_title: string;
  blog_article_s3_p1: string;
  blog_article_s3_p2: string;
  blog_article_s3_p3: string;
  blog_article_conclusion_title: string;
  blog_article_conclusion_p1: string;
  blog_article_conclusion_p2: string;
  blog_article_related_title: string;

  // Cookie Consent Banner
  cookie_title: string;
  cookie_subtitle: string;
  cookie_description: string;
  cookie_accept: string;
  cookie_reject: string;
  cookie_customize: string;
  cookie_save: string;
  cookie_privacy_link: string;
  cookie_policy_link: string;
  cookie_necessary: string;
  cookie_necessary_desc: string;
  cookie_analytics: string;
  cookie_analytics_desc: string;
  cookie_marketing: string;
  cookie_marketing_desc: string;
  cookie_functional: string;
  cookie_functional_desc: string;

  // Policy Pages
  policy_back_home: string;
  policy_last_updated: string;
  privacy_title: string;
  privacy_s1_title: string;
  privacy_s1_text: string;
  privacy_s2_title: string;
  privacy_s2_text: string;
  privacy_s3_title: string;
  privacy_s3_text: string;
  privacy_s4_title: string;
  privacy_s4_text: string;
  privacy_s5_title: string;
  privacy_s5_text: string;
  privacy_s6_title: string;
  privacy_s6_text: string;
  cookie_policy_title: string;
  cpolicy_s1_title: string;
  cpolicy_s1_text: string;
  cpolicy_s2_title: string;
  cpolicy_s2_text: string;
  cpolicy_necessary_detail: string;
  cpolicy_analytics_detail: string;
  cpolicy_marketing_detail: string;
  cpolicy_functional_detail: string;
  cpolicy_s3_title: string;
  cpolicy_s3_text: string;
  cpolicy_s4_title: string;
  cpolicy_s4_text: string;

  // Checkout Sidebar
  checkout_title: string;
  checkout_subtitle: string;
  checkout_summary: string;
  checkout_address: string;
  checkout_city: string;
  checkout_country: string;
  checkout_postal: string;
  checkout_confirm: string;
  checkout_total: string;
  checkout_empty: string;
  checkout_processing: string;
  checkout_success_text: string;
  checkout_continue: string;
  checkout_promo: string;
  checkout_apply: string;
  checkout_subtotal: string;
  checkout_shipping_cost: string;
  checkout_free: string;
  checkout_fname: string;
  checkout_lname: string;
  checkout_email: string;
  checkout_paypal: string;
  checkout_terms: string;
  checkout_address_ph: string;
  checkout_submitting: string;
  checkout_item_placeholder: string;
  checkout_color_short: string;
  checkout_size_short: string;
  checkout_not_available: string;
  checkout_promo_placeholder: string;

  // Auth Error
  auth_error_title: string;
  auth_error_default_message: string;
  auth_error_auto_return_prefix: string;
  auth_error_auto_return_suffix: string;
  auth_error_redirecting: string;
  auth_error_return_home: string;
};

const translations: Record<Language, TranslationKeys> = {
  en: {
    nav_home: 'Home',
    nav_shop: 'Shop',
    nav_collections: 'Collections',
    nav_story: 'Our Story',
    nav_lookbook: 'Lookbook',
    nav_blog: 'Blog',
    nav_contact: 'Contact',

    hero_subtitle: 'CYBERPUNK STREETWEAR',
    hero_slogan: 'Wear Tomorrow Today',
    hero_cta: 'SYSTEM ACCESS\n(SHOP)',
    hero_explore: 'DISCOVER THE REBELLION',

    featured_title: 'FEATURED DROPS',
    featured_subtitle: 'The latest from the underground. Limited pieces for digital rebels.',
    featured_view_all: 'VIEW ALL PRODUCTS',

    collections_title: 'DROP 01',
    collections_subtitle: 'First deployment of the GLITHEX system.',
    collection_neon_name: 'UNIT 01: NEON REBELLION',
    collection_neon_desc: 'Initial system deployment. Essential gear for the digital underground.',
    collection_ghost_name: 'DIGITAL GHOST',
    collection_ghost_desc: 'Invisible in the system. Present in the streets. The ghost protocol.',
    collection_explore: 'ACCESS',

    cta_title: 'JOIN THE REBELLION',
    cta_subtitle: 'The system wants conformity. We offer resistance. Wear the code that breaks the matrix.',
    cta_button: 'SHOP NOW',

    shop_title: 'THE ARSENAL',
    shop_subtitle: 'SIGNAL DETECTED. LOADOUT READY.',
    shop_filter_all: 'All',
    shop_filter_tshirts: 'T-Shirts',
    shop_filter_hoodies: 'Hoodies',
    shop_filter_oversized: 'Oversized',
    shop_filter_caps: 'Caps',
    shop_filter_cases: 'Phone Cases',
    shop_filter_accessories: 'ACCESSORIES',
    shop_add_cart: 'DEPLOY',
    shop_deploy_signal: 'EXECUTE',
    shop_product_label: 'ASSET:',
    shop_loadout: 'LOADOUT',
    shop_no_signals: 'NO SIGNALS',
    shop_purge: 'PURGE',
    shop_no_products: 'NO ASSETS DETECTED.',
    shop_from: 'From',
    shop_size: 'Size',
    shop_color: 'Color',
    shop_order_assets_singular: 'asset',
    shop_order_assets_plural: 'assets',
    shop_product_fallback: 'Urban cyberwear unit',

    pdp_data_log: 'DATA LOG',
    pdp_size_matrix: 'SIZE MATRIX',
    pdp_color_channel: 'COLOR CHANNEL',
    pdp_back: 'BACK TO OUTPOST',
    pdp_cta_deploy: 'Deploy Unit',
    pdp_logistics: 'LOGISTICS & RETURNS',
    pdp_share: 'SHARE SIGNAL',
    pdp_logistics_text: 'Express routing available. Standard return cycles supported within 14 solar days.',
    pdp_copy_signal_link: 'Copy signal link',
    pdp_broadcast_signal_link: 'Broadcast signal link',
    pdp_description_fallback: 'System-ready apparel designed for urban environments. High-performance material routing.',
    pdp_asset_not_found: 'ASSET NOT FOUND_',

    checkout_protocol_title: 'CHECKOUT PROTOCOL',
    checkout_step_1: '1. PHYSICAL COORDINATES',
    checkout_step_2: '2. FINANCIAL UPLINK (PAYMENT)',
    checkout_step_3: '3. FINAL VERIFICATION',
    checkout_email_label: 'COM-LINK (EMAIL)',
    checkout_fname_label: 'PRIMARY IDENTIFIER (NAME)',
    checkout_lname_label: 'CLONE IDENTIFIER (LAST NAME)',
    checkout_address_label: 'EXACT COORDINATES (STREET & NUMBER)',
    checkout_postal_label: 'SECTOR CODE (ZIP)',
    checkout_city_label: 'URBAN CORE (CITY)',
    checkout_country_label: 'TERRITORY (COUNTRY)',
    checkout_phone_label: 'CONTACT NETWORK (PHONE)',
    checkout_validate_btn: 'VALIDATE COORDINATES',
    checkout_shipping_promise: 'Logistics networks guarantee deployment as soon as possible.',
    checkout_inventory_title: 'IN YOUR INVENTORY',
    checkout_subtotal_label: 'Subtotal',
    checkout_shipping_label: 'Transfer Freight',
    checkout_total_label: 'Physical Total',
    checkout_qty: 'QTY',
    checkout_size: 'SIZE',
    checkout_success_title: 'TRANSMISSION CONFIRMED',
    checkout_success_desc: 'Your coordinates have been assimilated. Tactical assets are en route.',
    checkout_back_system: 'RETURN TO SYSTEM',
    checkout_back_cart: 'BACK TO CART',
    checkout_edit: 'EDIT',
    checkout_cc_num: 'BANK CARD NUMBER (SIMULATION)',
    checkout_cc_secure: 'Secure network platform (Ends in 4092)',
    checkout_auth_btn: 'AUTHORIZE UPLINK',
    checkout_terms_agree: 'By confirming this transmission, you authorize the deployment of tactical assets to your physical coordinates and unconditionally accept the GLITHEX Terms of Service Protocol.',
    checkout_final_btn: 'CONFIRM TRANSMISSION',

    story_title: 'THE GLITHEX PROTOCOL',
    story_subtitle: 'Every rebellion starts with a signal.',
    story_chapter1_title: 'CHAPTER I: THE SIGNAL',
    story_chapter1_text: 'In 2049, the global network became a cage. Every transaction monitored, every thought cataloged. The corporations promised safety but delivered control. Then, from the depths of the dark web, a signal emerged — a glitch in the system that couldn\'t be patched. They called it GLITHEX.',
    story_chapter2_title: 'CHAPTER II: THE COLLECTIVE',
    story_chapter2_text: 'GLITHEX wasn\'t just code — it was a movement. Hackers, artists, rebels, and dreamers united under one banner. They wore their defiance like armor, turning streetwear into statements. Each design was a cipher, each pattern a message to those who knew how to read it.',
    story_chapter3_title: 'CHAPTER III: THE REBELLION',
    story_chapter3_text: 'Now the signal spreads across every city, every screen, every street corner. GLITHEX is more than clothing — it\'s identity. It\'s the mark of those who refuse to be rendered invisible by the machine. The rebellion isn\'t coming. It\'s already here.',
    story_manifesto_title: 'THE MANIFESTO',
    story_manifesto_text: 'We are the glitch in the system. We are the error they can\'t debug. We wear tomorrow because today is already obsolete. GLITHEX — where fashion meets the future, and the future fights back.',

    lookbook_title: 'LOOKBOOK',
    lookbook_subtitle: 'Visual transmissions from the underground.',

    blog_title: 'TRANSMISSIONS',
    blog_subtitle: 'Dispatches from the cyberpunk frontier.',
    blog_read_more: 'READ MORE',

    contact_title: 'ESTABLISH CONNECTION',
    contact_subtitle: 'Send a signal to GLITHEX headquarters.',
    contact_name: 'Alias',
    contact_email: 'Encrypted Email',
    contact_message: 'Your Transmission',
    contact_send: 'TRANSMIT',
    contact_sent: 'Signal transmitted successfully.',

    footer_tagline: 'Cyberpunk streetwear for digital rebels. Wear Tomorrow Today.',
    footer_quick_links: 'Quick Links',
    footer_follow_us: 'Follow the Signal',
    footer_newsletter: 'Join the Network',
    footer_newsletter_placeholder: 'Enter your email...',
    footer_subscribe: 'SUBSCRIBE',
    footer_rights: '© 2026 GLITHEX. All rights reserved. The rebellion continues.',

    product_tshirt_1: 'Glitch Core Tee',
    product_tshirt_2: 'Neural Network Tee',
    product_hoodie_1: 'Neon Rebellion Hoodie',
    product_hoodie_2: 'Dark Protocol Hoodie',
    product_oversized_1: 'System Error Oversized',
    product_cap_1: 'Cyber Signal Cap',
    product_case_1: 'Matrix Break Case',
    product_case_2: 'Ghost Protocol Case',

    product_tshirt_desc: 'Classified asset. Optimal performance verified in urban sprawls and localized grids. Signal capacity 100%. Equip to initiate next-gen aesthetics override.',
    product_hoodie_desc: 'Thermal shielding active. Designed for maximum anonymity in deeply monitored sectors. Bio-rhythm concealment enabled.',
    product_oversized_desc: 'System error aesthetic. Non-conforming fit designed to disrupt facial recognition algorithms and surveillance patterns.',
    product_cap_desc: 'Cranial signal deflector. Blocks unauthorized neuro-scans while maintaining high visibility in the underground network.',
    product_case_desc: 'Hardware armor. Military-grade polymer shell protects comm-devices from EMP blasts and physical kinetic impact.',

    product_1_tagline: 'Break the system. Wear the glitch.',
    product_2_tagline: 'Control the signal. Override reality.',
    product_3_tagline: 'Born to disrupt the grid.',
    product_4_tagline: 'Stay hidden. Strike the system.',
    product_5_tagline: 'Error detected. Authority rejected.',
    product_6_tagline: 'Intercept signals. Own the noise.',
    product_7_tagline: 'Impact ready. System unbreakable.',
    product_8_tagline: 'Invisible mode. Untouchable presence.',

    blog_article_back: 'BACK TO TRANSMISSIONS',
    blog_article_tag: 'CYBERPUNK FASHION',
    blog_article_title: 'The Rise of Cyberpunk Fashion in 2026',
    blog_article_date: 'March 10, 2026',
    blog_article_read_time: '5 min read',
    blog_article_intro_1: 'The year 2026 marks a turning point for <strong>cyberpunk fashion</strong>. What was once confined to science fiction films and video games has erupted onto the streets of every major city. From Tokyo to Berlin, London to Los Angeles, a new generation of style rebels is embracing <strong>futuristic streetwear</strong> that blurs the line between technology and self-expression. The cyberpunk aesthetic is no longer a niche subculture — it is the defining fashion movement of our decade.',
    blog_article_intro_2: 'At the heart of this revolution lies <strong>techwear</strong>: garments engineered with advanced fabrics, functional design, and a dark, utilitarian beauty that speaks to a world increasingly shaped by digital culture. Brands like GLITHEX are leading this charge, transforming <strong>cyberpunk clothing</strong> from costume into couture.',
    blog_article_s1_title: 'From Screens to Streets: How Cyberpunk Fashion Went Mainstream',
    blog_article_s1_p1: 'The seeds of cyberpunk fashion were planted decades ago in films like Blade Runner and The Matrix, but the explosion of cyberpunk-themed video games, anime, and digital art in the early 2020s brought the aesthetic to a massive new audience. By 2024, search interest in "cyberpunk clothing" had tripled, and by 2026, futuristic streetwear has become one of the fastest-growing segments in the global fashion industry.',
    blog_article_s1_p2: 'Social media platforms, especially TikTok and Instagram, accelerated this shift. Influencers and content creators began showcasing techwear outfits — dark, layered, and loaded with functional details like waterproof zippers, modular pockets, and reflective accents. The look resonated with a generation that grew up online, one that sees fashion as an extension of their digital identity.',
    blog_article_s1_sub1_title: 'The Role of Gaming Culture in Cyberpunk Style',
    blog_article_s1_sub1_p1: 'Games like Cyberpunk 2077 and Ghost in the Shell: SAC_2045 didn\'t just entertain — they became style guides. Players spent hours customizing their avatars with neon-lit jackets, tactical vests, and holographic accessories. When they logged off, they wanted to bring that aesthetic into the real world. This crossover between virtual and physical fashion is one of the most significant cultural shifts of the 2020s, and it has made cyberpunk fashion a permanent fixture in modern streetwear.',
    blog_article_s2_title: 'Techwear: The Engine Behind the Cyberpunk Fashion Revolution',
    blog_article_s2_p1: 'At its core, techwear is about merging form with function. Unlike traditional streetwear, which prioritizes branding and logos, techwear focuses on materials science, ergonomic construction, and weather resistance. Fabrics like Gore-Tex, Schoeller, and recycled nylon are standard. Designs feature articulated cuts for mobility, sealed seams for waterproofing, and hidden compartments for everyday carry.',
    blog_article_s2_p2: 'But what sets 2026\'s techwear apart is its embrace of aesthetics. Early techwear was purely utilitarian — think hiking gear in black. Today\'s cyberpunk clothing combines that functionality with bold visual statements: neon stitching, holographic prints, LED-embedded accessories, and silhouettes inspired by dystopian fiction. The result is clothing that looks like it belongs in a sci-fi film but performs in the real world.',
    blog_article_s2_sub1_title: 'Sustainable Innovation in Futuristic Streetwear',
    blog_article_s2_sub1_p1: 'One of the most exciting developments in cyberpunk fashion is the push toward sustainability. Brands are experimenting with bio-fabricated materials, recycled ocean plastics, and zero-waste pattern cutting. GLITHEX, for example, uses recycled polyester blends and eco-friendly dyes in its collections, proving that futuristic streetwear can be forward-thinking in more ways than one. The cyberpunk ethos of questioning systems and challenging the status quo extends naturally to environmental responsibility.',
    blog_article_s3_title: 'The Future of Cyberpunk Clothing: What Comes Next',
    blog_article_s3_p1: 'As we look beyond 2026, the trajectory of cyberpunk fashion points toward even deeper integration with technology. Wearable tech is evolving beyond smartwatches — we are seeing garments with embedded sensors that monitor biometrics, jackets with built-in heating systems controlled by smartphone apps, and accessories that interact with augmented reality environments.',
    blog_article_s3_p2: 'The metaverse is also reshaping how we think about cyberpunk clothing. Digital fashion — garments designed exclusively for virtual spaces — is a booming market. Some brands now sell physical and digital versions of the same piece, allowing customers to wear their style across both realities. This dual-existence model is quintessentially cyberpunk: identity is no longer bound to one world.',
    blog_article_s3_p3: 'Customization and personalization will also define the next chapter. AI-driven design tools are enabling consumers to co-create their techwear pieces, choosing materials, colorways, and functional features. The era of mass-produced uniformity is ending. In its place, a new paradigm emerges — one where every garment is as unique as the rebel who wears it.',
    blog_article_conclusion_title: 'Conclusion: Wear the Future',
    blog_article_conclusion_p1: 'Cyberpunk fashion in 2026 is more than a trend — it is a cultural statement. It represents a generation that refuses to separate technology from identity, function from beauty, or the virtual from the real. Techwear and futuristic streetwear have given us a new vocabulary for self-expression, one written in waterproof fabrics, neon threads, and defiant silhouettes.',
    blog_article_conclusion_p2: 'Whether you are a long-time techwear enthusiast or just discovering cyberpunk clothing for the first time, one thing is clear: the future of fashion is here, and it glitches beautifully. At GLITHEX, we don\'t just follow the signal — we are the signal.',
    blog_article_related_title: 'Related Transmissions',

    // Cookie Consent
    cookie_title: 'COOKIE PROTOCOL',
    cookie_subtitle: 'Data transmission detected',
    cookie_description: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies. Read our',
    cookie_accept: 'ACCEPT ALL',
    cookie_reject: 'REJECT ALL',
    cookie_customize: 'CUSTOMIZE',
    cookie_save: 'SAVE PREFERENCES',
    cookie_privacy_link: 'Privacy Policy',
    cookie_policy_link: 'Cookie Policy',
    cookie_necessary: 'Necessary',
    cookie_necessary_desc: 'Essential for the website to function. Cannot be disabled.',
    cookie_analytics: 'Analytics',
    cookie_analytics_desc: 'Help us understand how visitors interact with our website.',
    cookie_marketing: 'Marketing',
    cookie_marketing_desc: 'Used to deliver personalized advertisements.',
    cookie_functional: 'Functional',
    cookie_functional_desc: 'Enable enhanced functionality and personalization.',

    // Policy Pages
    policy_back_home: 'BACK TO HOME',
    policy_last_updated: 'Last updated: March 15, 2026',
    privacy_title: 'PRIVACY POLICY',
    privacy_s1_title: '1. INFORMATION WE COLLECT',
    privacy_s1_text: 'We collect information you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact us. This may include your name, email address, shipping address, payment information, and any other information you choose to provide.',
    privacy_s2_title: '2. HOW WE USE YOUR INFORMATION',
    privacy_s2_text: 'We use the information we collect to process transactions, send you order confirmations, respond to your requests, send marketing communications (with your consent), improve our website and services, and comply with legal obligations.',
    privacy_s3_title: '3. INFORMATION SHARING',
    privacy_s3_text: 'We do not sell your personal information. We may share your information with service providers who assist us in operating our website, conducting our business, or serving our users. These third parties are obligated to keep your information confidential.',
    privacy_s4_title: '4. DATA SECURITY',
    privacy_s4_text: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.',
    privacy_s5_title: '5. YOUR RIGHTS',
    privacy_s5_text: 'Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. You may also withdraw consent at any time where we rely on consent to process your data.',
    privacy_s6_title: '6. CONTACT US',
    privacy_s6_text: 'If you have any questions about this Privacy Policy or our data practices, please contact us at',
    cookie_policy_title: 'COOKIE POLICY',
    cpolicy_s1_title: '1. WHAT ARE COOKIES',
    cpolicy_s1_text: 'Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.',
    cpolicy_s2_title: '2. COOKIES WE USE',
    cpolicy_s2_text: 'We use the following categories of cookies on our website:',
    cpolicy_necessary_detail: 'These cookies are essential for the website to function properly. They enable basic functions like page navigation, secure access, and session management. The website cannot function properly without these cookies.',
    cpolicy_analytics_detail: 'These cookies collect information about how visitors use our website, such as which pages are visited most often and if visitors get error messages. All information these cookies collect is aggregated and anonymous.',
    cpolicy_marketing_detail: 'These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user. They are usually placed by advertising networks with our permission.',
    cpolicy_functional_detail: 'These cookies enable the website to provide enhanced functionality and personalization, such as remembering your language preference, theme choice, and other customized settings.',
    cpolicy_s3_title: '3. MANAGING COOKIES',
    cpolicy_s3_text: 'You can manage your cookie preferences at any time through your browser settings. Most browsers allow you to refuse cookies or delete cookies that have already been set. Please note that disabling certain cookies may affect the functionality of our website.',
    cpolicy_s4_title: '4. CONTACT US',
    cpolicy_s4_text: 'If you have any questions about our use of cookies, please contact us at',

    // Checkout
    checkout_title: 'TRANSMISSION COORDINATES',
    checkout_subtitle: 'Secure shipping protocol initiated',
    checkout_summary: 'LOADOUT SUMMARY',
    checkout_address: 'SHIPPING ADDRESS',
    checkout_city: 'CITY / SECTOR',
    checkout_country: 'COUNTRY / NODE',
    checkout_postal: 'POSTAL CODE',
    checkout_confirm: 'INITIATE TRANSFER',
    checkout_total: 'TOTAL CREDITS',
    checkout_empty: 'NO ASSETS DETECTED',
    checkout_processing: 'PROCESSING...',
    checkout_success_title: 'TRANSFER COMPLETE',
    checkout_success_text: 'Your gear is being prepped for deployment. Signal transmission confirmed.',
    checkout_continue: 'CONTINUE MISSION',
    checkout_promo: 'Promo Code',
    checkout_apply: 'Apply',
    checkout_subtotal: 'Subtotal',
    checkout_shipping_cost: 'Estimated Shipping & Handling',
    checkout_free: 'Free',
    checkout_fname: 'First Name',
    checkout_lname: 'Last Name',
    checkout_email: 'Email Address',
    checkout_paypal: 'Pay with Crypto / External',
    checkout_terms: 'By selecting a payment method, you confirm that you have read and accepted the Terms of Use and Privacy Policy.',
    checkout_address_ph: 'TRANSMISSION ADDRESS',
    checkout_submitting: 'SUBMITTING...',
    checkout_item_placeholder: 'ITEM',
    checkout_color_short: 'CLR',
    checkout_size_short: 'SZ',
    checkout_not_available: 'N/A',
    checkout_promo_placeholder: 'XXXX-XXXX',
    auth_error_title: 'Authentication Error',
    auth_error_default_message: 'Sorry, your authentication information is invalid or has expired',
    auth_error_auto_return_prefix: 'Will automatically return to the home page in',
    auth_error_auto_return_suffix: 'seconds',
    auth_error_redirecting: 'Redirecting...',
    auth_error_return_home: 'Return to Home',
  },

  es: {
    nav_home: 'Inicio',
    nav_shop: 'Tienda',
    nav_collections: 'Colecciones',
    nav_story: 'Nuestra Historia',
    nav_lookbook: 'Lookbook',
    nav_blog: 'Blog',
    nav_contact: 'Contacto',

    hero_subtitle: 'STREETWEAR CYBERPUNK',
    hero_slogan: 'Wear Tomorrow Today',
    hero_cta: 'ACCESO AL SISTEMA\n(TIENDA)',
    hero_explore: 'DESCUBRE LA REBELIÓN',

    featured_title: 'LANZAMIENTOS DESTACADOS',
    featured_subtitle: 'Lo último del underground. Piezas limitadas para rebeldes digitales.',
    featured_view_all: 'VER TODOS LOS PRODUCTOS',

    collections_title: 'DROP 01',
    collections_subtitle: 'Primer despliegue del sistema GLITHEX.',
    collection_neon_name: 'UNIT 01: NEON REBELLION',
    collection_neon_desc: 'Despliegue inicial del sistema. Equipamiento esencial para el underground digital.',
    collection_ghost_name: 'DIGITAL GHOST',
    collection_ghost_desc: 'Invisible en el sistema. Presente en las calles. El protocolo fantasma.',
    collection_explore: 'ACCEDER',

    cta_title: 'ÚNETE A LA REBELIÓN',
    cta_subtitle: 'El sistema quiere conformidad. Nosotros ofrecemos resistencia. Viste el código que rompe la matrix.',
    cta_button: 'COMPRAR AHORA',

    shop_title: 'EL ARSENAL',
    shop_subtitle: 'Equípate para la revolución digital.',
    shop_filter_all: 'Todo',
    shop_filter_tshirts: 'Camisetas',
    shop_filter_hoodies: 'Sudaderas',
    shop_filter_oversized: 'Oversize',
    shop_filter_caps: 'Gorras',
    shop_filter_cases: 'Fundas',
    shop_filter_accessories: 'ACCESORIOS',
    shop_add_cart: 'DESPLEGAR',
    shop_deploy_signal: 'EJECUTAR',
    shop_product_label: 'ACTIVO:',
    shop_loadout: 'EQUIPAMIENTO',
    shop_no_signals: 'SIN SEÑALES',
    shop_purge: 'PURGAR',
    shop_no_products: 'SIN ACTIVOS.',
    shop_from: 'Desde',
    shop_size: 'Talla',
    shop_color: 'Color',
    shop_order_assets_singular: 'activo',
    shop_order_assets_plural: 'activos',
    shop_product_fallback: 'Unidad de cyberwear urbano',

    pdp_data_log: 'REGISTRO DE DATOS',
    pdp_size_matrix: 'MATRIZ DE TALLAS',
    pdp_color_channel: 'CANAL DE COLOR',
    pdp_back: 'VOLVER AL ARSENAL',
    pdp_cta_deploy: 'Desplegar Unidad',
    pdp_logistics: 'ENVÍOS Y DEVOLUCIONES',
    pdp_share: 'COMPARTIR SEÑAL',
    pdp_logistics_text: 'Envíos rápidos a toda la red urbana. Devoluciones permitidas en un ciclo de 14 días.',
    pdp_copy_signal_link: 'Copiar enlace de señal',
    pdp_broadcast_signal_link: 'Transmitir enlace de señal',
    pdp_description_fallback: 'Prenda preparada para entornos urbanos. Rendimiento avanzado y diseño de alta señal.',
    pdp_asset_not_found: 'ACTIVO NO ENCONTRADO_',

    checkout_protocol_title: 'PROTOCOLO DE SALIDA',
    checkout_step_1: '1. COORDENADAS FÍSICAS',
    checkout_step_2: '2. UPLINK FINANCIERO (PAGO)',
    checkout_step_3: '3. VERIFICACIÓN FINAL',
    checkout_email_label: 'COM-LINK (CORREO ELECTRÓNICO)',
    checkout_fname_label: 'IDENTIFICADOR PRINCIPAL (NOMBRE)',
    checkout_lname_label: 'CLON IDENTIFICADOR (APELLIDOS)',
    checkout_address_label: 'COORDENADAS EXACTAS (CALLE Y NÚMERO)',
    checkout_postal_label: 'CÓDIGO SECTOR (C.P.)',
    checkout_city_label: 'NÚCLEO URBANO (CIUDAD)',
    checkout_country_label: 'TERRITORIO (PAÍS)',
    checkout_phone_label: 'RED DE CONTACTO (TELÉFONO)',
    checkout_validate_btn: 'VALIDAR COORDENADAS',
    checkout_shipping_promise: 'Las redes de logística garantizan el despliegue lo antes posible.',
    checkout_inventory_title: 'EN TU INVENTARIO',
    checkout_subtotal_label: 'Subtotal',
    checkout_shipping_label: 'Flete de Transferencia',
    checkout_total_label: 'Total Físico',
    checkout_qty: 'CANT',
    checkout_size: 'TALLA',
    checkout_success_title: 'TRANSMISIÓN CONFIRMADA',
    checkout_success_desc: 'Tus coordenadas han sido asimiladas. Los activos tácticos están en ruta hacia tu localización.',
    checkout_back_system: 'VOLVER AL SISTEMA',
    checkout_back_cart: 'VOLVER AL CARRITO',
    checkout_edit: 'EDITAR',
    checkout_cc_num: 'NÚMERO DE TARJETA BANCARIA (SIMULACIÓN)',
    checkout_cc_secure: 'Plataforma de red asegurada (Termina en 4092)',
    checkout_auth_btn: 'AUTORIZAR UPLINK',
    checkout_terms_agree: 'Al confirmar esta transmisión, autorizas el despliegue de los activos tácticos a tus coordenadas físicas y aceptas incondicionalmente el Protocolo de Términos de Servicio de GLITHEX.',
    checkout_final_btn: 'CONFIRMAR TRANSMISIÓN',

    story_title: 'EL PROTOCOLO GLITHEX',
    story_subtitle: 'Toda rebelión comienza con una señal.',
    story_chapter1_title: 'CAPÍTULO I: LA SEÑAL',
    story_chapter1_text: 'En 2049, la red global se convirtió en una jaula. Cada transacción monitoreada, cada pensamiento catalogado. Las corporaciones prometieron seguridad pero entregaron control. Entonces, desde las profundidades de la dark web, emergió una señal — un glitch en el sistema que no podía ser parcheado. Lo llamaron GLITHEX.',
    story_chapter2_title: 'CAPÍTULO II: EL COLECTIVO',
    story_chapter2_text: 'GLITHEX no era solo código — era un movimiento. Hackers, artistas, rebeldes y soñadores unidos bajo una bandera. Vestían su desafío como armadura, convirtiendo el streetwear en declaraciones. Cada diseño era un cifrado, cada patrón un mensaje para quienes sabían leerlo.',
    story_chapter3_title: 'CAPÍTULO III: LA REBELIÓN',
    story_chapter3_text: 'Ahora la señal se extiende por cada ciudad, cada pantalla, cada esquina. GLITHEX es más que ropa — es identidad. Es la marca de quienes se niegan a ser invisibles ante la máquina. La rebelión no viene. Ya está aquí.',
    story_manifesto_title: 'EL MANIFIESTO',
    story_manifesto_text: 'Somos el glitch en el sistema. Somos el error que no pueden depurar. Vestimos el mañana porque el hoy ya es obsoleto. GLITHEX — donde la moda se encuentra con el futuro, y el futuro contraataca.',

    lookbook_title: 'LOOKBOOK',
    lookbook_subtitle: 'Transmisiones visuales desde el underground.',

    blog_title: 'TRANSMISIONES',
    blog_subtitle: 'Despachos desde la frontera cyberpunk.',
    blog_read_more: 'LEER MÁS',

    contact_title: 'ESTABLECER CONEXIÓN',
    contact_subtitle: 'Envía una señal al cuartel general de GLITHEX.',
    contact_name: 'Alias',
    contact_email: 'Email Encriptado',
    contact_message: 'Tu Transmisión',
    contact_send: 'TRANSMITIR',
    contact_sent: 'Señal transmitida con éxito.',

    footer_tagline: 'Streetwear cyberpunk para rebeldes digitales. Wear Tomorrow Today.',
    footer_quick_links: 'Enlaces Rápidos',
    footer_follow_us: 'Sigue la Señal',
    footer_newsletter: 'Únete a la Red',
    footer_newsletter_placeholder: 'Introduce tu email...',
    footer_subscribe: 'SUSCRIBIRSE',
    footer_rights: '© 2026 GLITHEX. Todos los derechos reservados. La rebelión continúa.',

    product_tshirt_1: 'Camiseta Glitch Core',
    product_tshirt_2: 'Camiseta Red Neural',
    product_hoodie_1: 'Hoodie Rebelión Neón',
    product_hoodie_2: 'Hoodie Protocolo Oscuro',
    product_oversized_1: 'Oversized Error de Sistema',
    product_cap_1: 'Gorra Señal Cyber',
    product_case_1: 'Funda Ruptura Matrix',
    product_case_2: 'Funda Protocolo Fantasma',

    product_tshirt_desc: 'Activo clasificado. Rendimiento óptimo en expansiones urbanas y redes locales. Capacidad de señal 100%. Equipar para anular la estética de la generación actual.',
    product_hoodie_desc: 'Escudo térmico activo. Diseñado para máximo anonimato en sectores vigilados. Bio-rhythm concealment enabled.',
    product_oversized_desc: 'Estética de error de sistema. Ajuste no conforme diseñado para evadir algoritmos de reconocimiento y vigilancia.',
    product_cap_desc: 'Deflector de señales craneales. Bloquea escaneos no autorizados manteniendo alta visibilidad en la red clandestina.',
    product_case_desc: 'Armadura de hardware. Carcasa de polímero militar. Protege tu dispositivo de comunicaciones de impactos cinéticos.',

    product_1_tagline: 'Break the system. Wear the glitch.',
    product_2_tagline: 'Control the signal. Override reality.',
    product_3_tagline: 'Born to disrupt the grid.',
    product_4_tagline: 'Stay hidden. Strike the system.',
    product_5_tagline: 'Error detected. Authority rejected.',
    product_6_tagline: 'Intercept signals. Own the noise.',
    product_7_tagline: 'Impact ready. System unbreakable.',
    product_8_tagline: 'Invisible mode. Untouchable presence.',

    blog_article_back: 'VOLVER A TRANSMISIONES',
    blog_article_tag: 'MODA CYBERPUNK',
    blog_article_title: 'El Auge de la Moda Cyberpunk en 2026',
    blog_article_date: '10 de marzo de 2026',
    blog_article_read_time: '5 min de lectura',
    blog_article_intro_1: 'El año 2026 marca un punto de inflexión para la <strong>moda cyberpunk</strong>. Lo que antes se limitaba a películas de ciencia ficción y videojuegos ha irrumpido en las calles de todas las grandes ciudades. De Tokio a Berlín, de Londres a Los Ángeles, una nueva generación de rebeldes del estilo abraza el <strong>streetwear futurista</strong> que difumina la línea entre tecnología y autoexpresión. La estética cyberpunk ya no es una subcultura de nicho — es el movimiento de moda que define nuestra década.',
    blog_article_intro_2: 'En el corazón de esta revolución se encuentra el <strong>techwear</strong>: prendas diseñadas con tejidos avanzados, diseño funcional y una belleza utilitaria oscura que habla de un mundo cada vez más moldeado por la cultura digital. Marcas como GLITHEX lideran esta carga, transformando la <strong>ropa cyberpunk</strong> de disfraz en alta costura.',
    blog_article_s1_title: 'De las Pantallas a las Calles: Cómo la Moda Cyberpunk se Hizo Mainstream',
    blog_article_s1_p1: 'Las semillas de la moda cyberpunk se plantaron hace décadas en películas como Blade Runner y The Matrix, pero la explosión de videojuegos, anime y arte digital de temática cyberpunk a principios de los 2020 llevó la estética a una audiencia masiva. Para 2024, el interés de búsqueda en "ropa cyberpunk" se había triplicado, y para 2026, el streetwear futurista se ha convertido en uno de los segmentos de más rápido crecimiento en la industria de la moda global.',
    blog_article_s1_p2: 'Las plataformas de redes sociales, especialmente TikTok e Instagram, aceleraron este cambio. Influencers y creadores de contenido comenzaron a mostrar outfits techwear — oscuros, en capas y cargados de detalles funcionales como cremalleras impermeables, bolsillos modulares y acentos reflectantes. El look resonó con una generación que creció en línea, una que ve la moda como una extensión de su identidad digital.',
    blog_article_s1_sub1_title: 'El Papel de la Cultura Gamer en el Estilo Cyberpunk',
    blog_article_s1_sub1_p1: 'Juegos como Cyberpunk 2077 y Ghost in the Shell: SAC_2045 no solo entretenían — se convirtieron en guías de estilo. Los jugadores pasaban horas personalizando sus avatares con chaquetas iluminadas con neón, chalecos tácticos y accesorios holográficos. Cuando se desconectaban, querían llevar esa estética al mundo real. Este cruce entre moda virtual y física es uno de los cambios culturales más significativos de los 2020, y ha convertido la moda cyberpunk en un elemento permanente del streetwear moderno.',
    blog_article_s2_title: 'Techwear: El Motor Detrás de la Revolución de la Moda Cyberpunk',
    blog_article_s2_p1: 'En su esencia, el techwear trata de fusionar forma con función. A diferencia del streetwear tradicional, que prioriza el branding y los logos, el techwear se centra en la ciencia de materiales, la construcción ergonómica y la resistencia climática. Tejidos como Gore-Tex, Schoeller y nylon reciclado son estándar. Los diseños presentan cortes articulados para movilidad, costuras selladas para impermeabilización y compartimentos ocultos para el uso diario.',
    blog_article_s2_p2: 'Pero lo que distingue al techwear de 2026 es su abrazo de la estética. El techwear temprano era puramente utilitario — piensa en equipo de senderismo en negro. La ropa cyberpunk de hoy combina esa funcionalidad con declaraciones visuales audaces: costuras de neón, estampados holográficos, accesorios con LED integrados y siluetas inspiradas en la ficción distópica. El resultado es ropa que parece pertenecer a una película de ciencia ficción pero funciona en el mundo real.',
    blog_article_s2_sub1_title: 'Innovación Sostenible en el Streetwear Futurista',
    blog_article_s2_sub1_p1: 'Uno de los desarrollos más emocionantes en la moda cyberpunk es el impulso hacia la sostenibilidad. Las marcas experimentan con materiales biofabricados, plásticos oceánicos reciclados y corte de patrones sin desperdicio. GLITHEX, por ejemplo, utiliza mezclas de poliéster reciclado y tintes ecológicos en sus colecciones, demostrando que el streetwear futurista puede ser vanguardista en más de un sentido. El ethos cyberpunk de cuestionar sistemas y desafiar el statu quo extiende naturalmente a la responsabilidad ambiental.',
    blog_article_s3_title: 'El Futuro de la Ropa Cyberpunk: Lo Que Viene',
    blog_article_s3_p1: 'Al mirar más allá de 2026, la trayectoria de la moda cyberpunk apunta hacia una integración aún más profunda con la tecnología. La tecnología vestible evoluciona más allá de los smartwatches — estamos viendo prendas con sensores integrados que monitorean biométricos, chaquetas con sistemas de calefacción controlados por apps de smartphone, y accesorios que interactúan con entornos de realidad aumentada.',
    blog_article_s3_p2: 'El metaverso también está remodelando cómo pensamos sobre la ropa cyberpunk. La moda digital — prendas diseñadas exclusivamente para espacios virtuales — es un mercado en auge. Algunas marcas ahora venden versiones físicas y digitales de la misma pieza, permitiendo a los clientes lucir su estilo en ambas realidades. Este modelo de doble existencia es quintaesencialmente cyberpunk: la identidad ya no está ligada a un solo mundo.',
    blog_article_s3_p3: 'La personalización también definirá el próximo capítulo. Las herramientas de diseño impulsadas por IA permiten a los consumidores co-crear sus piezas techwear, eligiendo materiales, combinaciones de colores y características funcionales. La era de la uniformidad producida en masa está terminando. En su lugar, emerge un nuevo paradigma — uno donde cada prenda es tan única como el rebelde que la viste.',
    blog_article_conclusion_title: 'Conclusión: Viste el Futuro',
    blog_article_conclusion_p1: 'La moda cyberpunk en 2026 es más que una tendencia — es una declaración cultural. Representa a una generación que se niega a separar la tecnología de la identidad, la función de la belleza, o lo virtual de lo real. El techwear y el streetwear futurista nos han dado un nuevo vocabulario para la autoexpresión, escrito en tejidos impermeables, hilos de neón y siluetas desafiantes.',
    blog_article_conclusion_p2: 'Ya seas un entusiasta del techwear de toda la vida o estés descubriendo la ropa cyberpunk por primera vez, una cosa está clara: el futuro de la moda está aquí, y glitchea maravillosamente. En GLITHEX, no solo seguimos la señal — somos la señal.',
    blog_article_related_title: 'Transmisiones Relacionadas',

    // Cookie Consent
    cookie_title: 'PROTOCOLO DE COOKIES',
    cookie_subtitle: 'Transmisión de datos detectada',
    cookie_description: 'Usamos cookies para mejorar tu experiencia de navegación, ofrecer contenido personalizado y analizar nuestro tráfico. Al hacer clic en "Aceptar", consientes el uso de cookies. Lee nuestra',
    cookie_accept: 'ACEPTAR TODO',
    cookie_reject: 'RECHAZAR TODO',
    cookie_customize: 'PERSONALIZAR',
    cookie_save: 'GUARDAR PREFERENCIAS',
    cookie_privacy_link: 'Política de Privacidad',
    cookie_policy_link: 'Política de Cookies',
    cookie_necessary: 'Necesarias',
    cookie_necessary_desc: 'Esenciales para el funcionamiento del sitio. No se pueden desactivar.',
    cookie_analytics: 'Analíticas',
    cookie_analytics_desc: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.',
    cookie_marketing: 'Marketing',
    cookie_marketing_desc: 'Se utilizan para mostrar anuncios personalizados.',
    cookie_functional: 'Funcionales',
    cookie_functional_desc: 'Permiten funcionalidades mejoradas y personalización.',

    // Policy Pages
    policy_back_home: 'VOLVER AL INICIO',
    policy_last_updated: 'Última actualización: 15 de marzo de 2026',
    privacy_title: 'POLÍTICA DE PRIVACIDAD',
    privacy_s1_title: '1. INFORMACIÓN QUE RECOPILAMOS',
    privacy_s1_text: 'Recopilamos la información que nos proporcionas directamente, como cuando creas una cuenta, realizas una compra, te suscribes a nuestro boletín o nos contactas. Esto puede incluir tu nombre, dirección de correo electrónico, dirección de envío, información de pago y cualquier otra información que elijas proporcionar.',
    privacy_s2_title: '2. CÓMO USAMOS TU INFORMACIÓN',
    privacy_s2_text: 'Usamos la información que recopilamos para procesar transacciones, enviarte confirmaciones de pedidos, responder a tus solicitudes, enviar comunicaciones de marketing (con tu consentimiento), mejorar nuestro sitio web y servicios, y cumplir con obligaciones legales.',
    privacy_s3_title: '3. COMPARTIR INFORMACIÓN',
    privacy_s3_text: 'No vendemos tu información personal. Podemos compartir tu información con proveedores de servicios que nos ayudan a operar nuestro sitio web, realizar nuestro negocio o atender a nuestros usuarios. Estos terceros están obligados a mantener tu información confidencial.',
    privacy_s4_title: '4. SEGURIDAD DE DATOS',
    privacy_s4_text: 'Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro.',
    privacy_s5_title: '5. TUS DERECHOS',
    privacy_s5_text: 'Bajo el RGPD, tienes derecho a acceder, rectificar, eliminar, restringir el procesamiento, portabilidad de datos y oponerte al procesamiento de tus datos personales. También puedes retirar tu consentimiento en cualquier momento.',
    privacy_s6_title: '6. CONTÁCTANOS',
    privacy_s6_text: 'Si tienes alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de datos, contáctanos en',
    cookie_policy_title: 'POLÍTICA DE COOKIES',
    cpolicy_s1_title: '1. QUÉ SON LAS COOKIES',
    cpolicy_s1_text: 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y para proporcionar información a los propietarios del sitio.',
    cpolicy_s2_title: '2. COOKIES QUE USAMOS',
    cpolicy_s2_text: 'Usamos las siguientes categorías de cookies en nuestro sitio web:',
    cpolicy_necessary_detail: 'Estas cookies son esenciales para que el sitio web funcione correctamente. Habilitan funciones básicas como la navegación de páginas, el acceso seguro y la gestión de sesiones.',
    cpolicy_analytics_detail: 'Estas cookies recopilan información sobre cómo los visitantes usan nuestro sitio web, como qué páginas se visitan con más frecuencia. Toda la información es agregada y anónima.',
    cpolicy_marketing_detail: 'Estas cookies se utilizan para rastrear visitantes en sitios web. La intención es mostrar anuncios relevantes y atractivos para el usuario individual.',
    cpolicy_functional_detail: 'Estas cookies permiten que el sitio web proporcione funcionalidad mejorada y personalización, como recordar tu preferencia de idioma y tema.',
    cpolicy_s3_title: '3. GESTIÓN DE COOKIES',
    cpolicy_s3_text: 'Puedes gestionar tus preferencias de cookies en cualquier momento a través de la configuración de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de nuestro sitio web.',
    cpolicy_s4_title: '4. CONTÁCTANOS',
    cpolicy_s4_text: 'Si tienes alguna pregunta sobre nuestro uso de cookies, contáctanos en',

    // Checkout
    checkout_title: 'COORDENADAS DE TRANSMISIÓN',
    checkout_subtitle: 'Protocolo de envío seguro iniciado',
    checkout_summary: 'RESUMEN DE EQUIPAMIENTO',
    checkout_address: 'DIRECCIÓN DE ENVÍO',
    checkout_city: 'CIUDAD / SECTOR',
    checkout_country: 'PAÍS / NODO',
    checkout_postal: 'CÓDIGO POSTAL',
    checkout_confirm: 'INICIAR TRANSFERENCIA',
    checkout_total: 'CRÉDITOS TOTALES',
    checkout_empty: 'SIN ACTIVOS DETECTADOS',
    checkout_processing: 'PROCESANDO...',
    checkout_success_title: 'TRANSFERENCIA COMPLETADA',
    checkout_success_text: 'Tu equipo está siendo preparado para el despliegue. Transmisión de señal confirmada.',
    checkout_continue: 'CONTINUAR MISIÓN',
    checkout_promo: '¿Tienes un código promocional?',
    checkout_apply: 'Aplicar',
    checkout_subtotal: 'Subtotal',
    checkout_shipping_cost: 'Gastos de envío y gestión estimados',
    checkout_free: 'Gratuito',
    checkout_fname: 'Nombre',
    checkout_lname: 'Apellidos',
    checkout_email: 'Correo Electrónico',
    checkout_paypal: 'Pagar con Crypto / Externo',
    checkout_terms: 'Al seleccionar un método de pago, confirmas que has leído y aceptado los Términos de Uso y la Política de Privacidad.',
    checkout_address_ph: 'DIRECCIÓN DE TRANSMISIÓN',
    checkout_submitting: 'ENVIANDO...',
    checkout_item_placeholder: 'ARTÍCULO',
    checkout_color_short: 'COL',
    checkout_size_short: 'TLL',
    checkout_not_available: 'N/D',
    checkout_promo_placeholder: 'XXXX-XXXX',
    auth_error_title: 'Error de autenticación',
    auth_error_default_message: 'Tu información de autenticación no es válida o ha caducado',
    auth_error_auto_return_prefix: 'Volverás automáticamente a la página principal en',
    auth_error_auto_return_suffix: 'segundos',
    auth_error_redirecting: 'Redirigiendo...',
    auth_error_return_home: 'Volver al inicio',
  },

  fr: {
    nav_home: 'Accueil',
    nav_shop: 'Boutique',
    nav_collections: 'Collections',
    nav_story: 'Notre Histoire',
    nav_lookbook: 'Lookbook',
    nav_blog: 'Blog',
    nav_contact: 'Contact',

    hero_subtitle: 'STREETWEAR CYBERPUNK',
    hero_slogan: 'Wear Tomorrow Today',
    hero_cta: 'ACCÈS AU SYSTÈME\n(BOUTIQUE)',
    hero_explore: 'DÉCOUVRIR LA RÉBELLION',

    featured_title: 'SORTIES EN VEDETTE',
    featured_subtitle: 'Les dernières pièces de l\'underground. Éditions limitées pour rebelles numériques.',
    featured_view_all: 'VOIR TOUS LES PRODUITS',

    collections_title: 'DROP 01',
    collections_subtitle: 'Premier déploiement du système GLITHEX.',
    collection_neon_name: 'UNIT 01: NEON REBELLION',
    collection_neon_desc: 'Déploiement initial du système. Équipement essentiel pour l\'underground numérique.',
    collection_ghost_name: 'FANTÔME NUMÉRIQUE',
    collection_ghost_desc: 'Invisible dans le système. Présent dans les rues. Le protocole fantôme.',
    collection_explore: 'ACCÉDER',

    cta_title: 'REJOIGNEZ LA RÉBELLION',
    cta_subtitle: 'Le système veut la conformité. Nous offrons la résistance. Portez le code qui brise la matrice.',
    cta_button: 'ACHETER MAINTENANT',

    shop_title: 'L\'ARSENAL',
    shop_subtitle: 'Équipez-vous pour la révolution numérique.',
    shop_filter_all: 'Tout',
    shop_filter_tshirts: 'T-Shirts',
    shop_filter_hoodies: 'Sweats',
    shop_filter_oversized: 'Oversize',
    shop_filter_caps: 'Casquettes',
    shop_filter_cases: 'Coques',
    shop_filter_accessories: 'ACCESSOIRES',
    shop_add_cart: 'DÉPLOYER',
    shop_deploy_signal: 'EXÉCUTER',
    shop_product_label: 'ACTIF :',
    shop_loadout: 'ARSENAL',
    shop_no_signals: 'AUCUN SIGNAL',
    shop_purge: 'PURGER',
    shop_no_products: 'AUCUN ACTIF DÉTECTÉ.',
    shop_from: 'À partir de',
    shop_size: 'Taille',
    shop_color: 'Couleur',
    shop_order_assets_singular: 'actif',
    shop_order_assets_plural: 'actifs',
    shop_product_fallback: 'Unité de cyberwear urbain',

    pdp_data_log: 'JOURNAL DE DONNÉES',
    pdp_size_matrix: 'MATRICE DES TAILLES',
    pdp_color_channel: 'CANAL DE COULEUR',
    pdp_back: 'RETOUR À L\'ARSENAL',
    pdp_cta_deploy: 'Déployer Unité',
    pdp_logistics: 'EXPÉDITIONS ET RETOURS',
    pdp_share: 'PARTAGER LE SIGNAL',
    pdp_logistics_text: 'Routage express disponible. Retours standards acceptés sous 14 jours solaires.',
    pdp_copy_signal_link: 'Copier le lien du signal',
    pdp_broadcast_signal_link: 'Diffuser le lien du signal',
    pdp_description_fallback: 'Vêtement prêt pour les environnements urbains. Performance élevée et routage optimisé.',
    pdp_asset_not_found: 'ACTIF INTROUVABLE_',

    checkout_protocol_title: 'PROTOCOLE DE SORTIE',
    checkout_step_1: '1. COORDONNÉES PHYSIQUES',
    checkout_step_2: '2. UPLINK FINANCIER (PAIEMENT)',
    checkout_step_3: '3. VÉRIFICATION FINALE',
    checkout_email_label: 'COM-LINK (EMAIL)',
    checkout_fname_label: 'IDENTIFIANT PRINCIPAL (PRÉNOM)',
    checkout_lname_label: 'CLONE IDENTIFIANT (NOM ADDITIONNEL)',
    checkout_address_label: 'COORDONNÉES EXACTES (RUE & NUMÉRO)',
    checkout_postal_label: 'CODE SECTEUR (CODE POSTAL)',
    checkout_city_label: 'NOYAU URBAIN (VILLE)',
    checkout_country_label: 'TERRITOIRE (PAYS)',
    checkout_phone_label: 'RÉSEAU DE CONTACT (TÉLÉPHONE)',
    checkout_validate_btn: 'VALIDER LES COORDONNÉES',
    checkout_shipping_promise: 'Les réseaux logistiques garantissent le déploiement dès que possible.',
    checkout_inventory_title: 'DANS VOTRE INVENTAIRE',
    checkout_subtotal_label: 'Sous-total',
    checkout_shipping_label: 'Fret de transfert',
    checkout_total_label: 'Total Physique',
    checkout_qty: 'QTÉ',
    checkout_size: 'TAILLE',
    checkout_success_title: 'TRANSMISSION CONFIRMÉE',
    checkout_success_desc: 'Vos coordonnées ont été assimilées. Les actifs tactiques sont en route.',
    checkout_back_system: 'RETOURNER AU SYSTÈME',
    checkout_back_cart: 'RETOUR AU PANIER',
    checkout_edit: 'ÉDITER',
    checkout_cc_num: 'NUMÉRO DE CARTE BANCAIRE (SIMULATION)',
    checkout_cc_secure: 'Plateforme réseau sécurisée (Se termine par 4092)',
    checkout_auth_btn: 'AUTORISER L\'UPLINK',
    checkout_terms_agree: 'En confirmant cette transmission, vous autorisez le déploiement d\'actifs tactiques vers vos coordonnées physiques et acceptez inconditionnellement le protocole des conditions de service de GLITHEX.',
    checkout_final_btn: 'CONFIRMER LA TRANSMISSION',

    story_title: 'LE PROTOCOLE GLITHEX',
    story_subtitle: 'Toute rébellion commence par un signal.',
    story_chapter1_title: 'CHAPITRE I : LE SIGNAL',
    story_chapter1_text: 'En 2049, le réseau mondial est devenu une cage. Chaque transaction surveillée, chaque pensée cataloguée. Les corporations promettaient la sécurité mais livraient le contrôle. Puis, des profondeurs du dark web, un signal a émergé — un glitch dans le système qui ne pouvait être corrigé. Ils l\'ont appelé GLITHEX.',
    story_chapter2_title: 'CHAPITRE II : LE COLLECTIF',
    story_chapter2_text: 'GLITHEX n\'était pas que du code — c\'était un mouvement. Hackers, artistes, rebelles et rêveurs unis sous une même bannière. Ils portaient leur défi comme une armure, transformant le streetwear en déclarations. Chaque design était un chiffre, chaque motif un message pour ceux qui savaient le lire.',
    story_chapter3_title: 'CHAPITRE III : LA RÉBELLION',
    story_chapter3_text: 'Maintenant le signal se répand dans chaque ville, chaque écran, chaque coin de rue. GLITHEX est plus que des vêtements — c\'est une identité. C\'est la marque de ceux qui refusent d\'être rendus invisibles par la machine. La rébellion ne vient pas. Elle est déjà là.',
    story_manifesto_title: 'LE MANIFESTE',
    story_manifesto_text: 'Nous sommes le glitch dans le système. Nous sommes l\'erreur qu\'ils ne peuvent pas déboguer. Nous portons demain parce qu\'aujourd\'hui est déjà obsolète. GLITHEX — où la mode rencontre le futur, et le futur riposte.',

    lookbook_title: 'LOOKBOOK',
    lookbook_subtitle: 'Transmissions visuelles de l\'underground.',

    blog_title: 'TRANSMISSIONS',
    blog_subtitle: 'Dépêches de la frontière cyberpunk.',
    blog_read_more: 'LIRE LA SUITE',

    contact_title: 'ÉTABLIR LA CONNEXION',
    contact_subtitle: 'Envoyez un signal au QG de GLITHEX.',
    contact_name: 'Alias',
    contact_email: 'Email chiffré',
    contact_message: 'Votre transmission',
    contact_send: 'TRANSMETTRE',
    contact_sent: 'Signal transmis avec succès.',

    footer_tagline: 'Streetwear cyberpunk pour rebelles numériques. Wear Tomorrow Today.',
    footer_quick_links: 'Liens Rapides',
    footer_follow_us: 'Suivez le Signal',
    footer_newsletter: 'Rejoignez le Réseau',
    footer_newsletter_placeholder: 'Entrez votre email...',
    footer_subscribe: 'S\'ABONNER',
    footer_rights: '© 2026 GLITHEX. Tous droits réservés. La rébellion continue.',

    product_tshirt_1: 'Glitch Core Tee',
    product_tshirt_2: 'Neural Network Tee',
    product_hoodie_1: 'Neon Rebellion Hoodie',
    product_hoodie_2: 'Dark Protocol Hoodie',
    product_oversized_1: 'System Error Oversized',
    product_cap_1: 'Cyber Signal Cap',
    product_case_1: 'Matrix Break Case',
    product_case_2: 'Ghost Protocol Case',

    product_tshirt_desc: 'Asset classifié. Performance optimale vérifiée en milieu urbain. Capacité de signal 100%. Équiper pour initier le protocole esthétique de nouvelle génération.',
    product_hoodie_desc: 'Bouclier thermique actif. Conçu pour un anonymat maximal dans les secteurs surveillés. Dissimulation du biorythme activée.',
    product_oversized_desc: 'Esthétique erreur système. Coupe non-conforme conçue pour perturber les algorithmes de reconnaissance faciale et les schémas de surveillance.',
    product_cap_desc: 'Déflecteur de signal crânien. Bloque les neuro-scans non autorisés tout en maintenant une haute visibilité dans le réseau clandestin.',
    product_case_desc: 'Armure matérielle. Coque en polymère militaire protège les dispositifs de communication contre les impacts cinétiques.',

    product_1_tagline: 'Brise le système. Porte le glitch.',
    product_2_tagline: 'Contrôle le signal. Reprogramme la réalité.',
    product_3_tagline: 'Né pour perturber le réseau.',
    product_4_tagline: 'Reste caché. Frappe le système.',
    product_5_tagline: 'Erreur détectée. Autorité rejetée.',
    product_6_tagline: 'Intercepte les signaux. Maîtrise le bruit.',
    product_7_tagline: 'Prêt à l\'impact. Système indestructible.',
    product_8_tagline: 'Mode invisible. Présence intouchable.',

    blog_article_back: 'RETOUR AUX TRANSMISSIONS',
    blog_article_tag: 'MODE CYBERPUNK',
    blog_article_title: 'L\'Essor de la Mode Cyberpunk en 2026',
    blog_article_date: '10 mars 2026',
    blog_article_read_time: '5 min de lecture',
    blog_article_intro_1: 'L\'année 2026 marque un tournant pour la <strong>mode cyberpunk</strong>. Ce qui était autrefois confiné aux films de science-fiction et aux jeux vidéo a envahi les rues de toutes les grandes villes. De Tokyo à Berlin, de Londres à Los Angeles, une nouvelle génération de rebelles du style adopte le <strong>streetwear futuriste</strong> qui brouille la frontière entre technologie et expression personnelle.',
    blog_article_intro_2: 'Au cœur de cette révolution se trouve le <strong>techwear</strong> : des vêtements conçus avec des tissus avancés, un design fonctionnel et une beauté utilitaire sombre. Des marques comme GLITHEX mènent cette charge, transformant les <strong>vêtements cyberpunk</strong> de costume en haute couture.',
    blog_article_s1_title: 'Des Écrans aux Rues : Comment la Mode Cyberpunk est Devenue Mainstream',
    blog_article_s1_p1: 'Les graines de la mode cyberpunk ont été plantées il y a des décennies dans des films comme Blade Runner et The Matrix. En 2024, l\'intérêt pour "vêtements cyberpunk" avait triplé, et en 2026, le streetwear futuriste est devenu l\'un des segments à la croissance la plus rapide de l\'industrie mondiale de la mode.',
    blog_article_s1_p2: 'Les plateformes de médias sociaux, notamment TikTok et Instagram, ont accéléré ce changement. Les influenceurs ont commencé à présenter des tenues techwear — sombres, superposées et chargées de détails fonctionnels.',
    blog_article_s1_sub1_title: 'Le Rôle de la Culture Gaming dans le Style Cyberpunk',
    blog_article_s1_sub1_p1: 'Des jeux comme Cyberpunk 2077 et Ghost in the Shell: SAC_2045 sont devenus des guides de style. Les joueurs passaient des heures à personnaliser leurs avatars, puis voulaient apporter cette esthétique dans le monde réel.',
    blog_article_s2_title: 'Techwear : Le Moteur de la Révolution de la Mode Cyberpunk',
    blog_article_s2_p1: 'Au cœur du techwear : fusionner forme et fonction. Contrairement au streetwear traditionnel, le techwear se concentre sur la science des matériaux, la construction ergonomique et la résistance aux intempéries.',
    blog_article_s2_p2: 'Ce qui distingue le techwear de 2026, c\'est son adoption de l\'esthétique — neon stitching, holographic prints, LED-embedded accessories, and dystopian silhouettes.',
    blog_article_s2_sub1_title: 'Innovation Durable dans le Streetwear Futuriste',
    blog_article_s2_sub1_p1: 'GLITHEX utilise des mélanges de polyester recyclé et des teintures écologiques, prouvant que le streetwear futuriste peut être avant-gardiste de plus d\'une manière.',
    blog_article_s3_title: 'L\'Avenir des Vêtements Cyberpunk',
    blog_article_s3_p1: 'La trajectoire de la mode cyberpunk pointe vers une intégration encore plus profonde avec la technologie — vêtements avec capteurs biométriques, systèmes de chauffage et accessoires de réalité augmentée.',
    blog_article_s3_p2: 'La mode numérique — vêtements pour espaces virtuels — est un marché en plein essor. Ce modèle de double existence est quintessentiellement cyberpunk.',
    blog_article_s3_p3: 'La personnalisation définira le prochain chapitre. Les outils de design IA permettent aux consommateurs de co-créer leurs pièces techwear.',
    blog_article_conclusion_title: 'Conclusion : Portez le Futur',
    blog_article_conclusion_p1: 'La mode cyberpunk en 2026 est plus qu\'une tendance — c\'est une déclaration culturelle. Le techwear nous a donné un nouveau vocabulaire pour l\'expression de soi.',
    blog_article_conclusion_p2: 'Que vous soyez un passionné de techwear ou que vous découvriez la mode cyberpunk pour la première fois : le futur de la mode est là, et il glitche magnifiquement. Chez GLITHEX, nous sommes le signal.',
    blog_article_related_title: 'Transmissions Associées',

    // Cookie Consent
    cookie_title: 'PROTOCOLE DE COOKIES',
    cookie_subtitle: 'Transmission de données détectée',
    cookie_description: 'Nous utilisons des cookies pour améliorer votre expérience. En cliquant sur "Accepter", vous consentez.',
    cookie_accept: 'TOUT ACCEPTER',
    cookie_reject: 'TOUT REFUSER',
    cookie_customize: 'PERSONNALISER',
    cookie_save: 'ENREGISTRER',
    cookie_privacy_link: 'Politique de Confidentialité',
    cookie_policy_link: 'Politique de Cookies',
    cookie_necessary: 'Nécessaires',
    cookie_necessary_desc: 'Essentiels au fonctionnement du site. Ne peuvent pas être désactivés.',
    cookie_analytics: 'Analytiques',
    cookie_analytics_desc: 'Nous aident à comprendre comment les visiteurs interagissent avec notre site.',
    cookie_marketing: 'Marketing',
    cookie_marketing_desc: 'Utilisés pour afficher des publicités personnalisées.',
    cookie_functional: 'Fonctionnels',
    cookie_functional_desc: 'Permettent des fonctionnalités améliorées et la personnalisation.',

    // Policy Pages
    policy_back_home: 'RETOUR À L\'ACCUEIL',
    policy_last_updated: 'Dernière mise à jour : 15 mars 2026',
    privacy_title: 'POLITIQUE DE CONFIDENTIALITÉ',
    privacy_s1_title: '1. INFORMATIONS QUE NOUS COLLECTONS',
    privacy_s1_text: 'Nous collectons les informations que vous nous fournissez directement, comme lorsque vous créez un compte ou effectuez un achat.',
    privacy_s2_title: '2. COMMENT NOUS UTILISONS VOS INFORMATIONS',
    privacy_s2_text: 'Nous utilisons les informations collectées pour traiter les transactions, vous envoyer des confirmations de commande et améliorer nos services.',
    privacy_s3_title: '3. PARTAGE D\'INFORMATIONS',
    privacy_s3_text: 'Nous ne vendons pas vos informations personnelles.',
    privacy_s4_title: '4. SÉCURITÉ DES DONNÉES',
    privacy_s4_text: 'Nous mettons en œuvre des mesures appropriées pour protéger vos données personnelles.',
    privacy_s5_title: '5. VOS DROITS',
    privacy_s5_text: 'En vertu du RGPD, vous avez le droit d\'accéder, de rectifier et d\'effacer vos données personnelles.',
    privacy_s6_title: '6. NOUS CONTACTER',
    privacy_s6_text: 'Si vous avez des questions, veuillez nous contacter à',
    cookie_policy_title: 'POLITIQUE DE COOKIES',
    cpolicy_s1_title: '1. QUE SONT LES COOKIES',
    cpolicy_s1_text: 'Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web.',
    cpolicy_s2_title: '2. COOKIES QUE NOUS UTILISONS',
    cpolicy_s2_text: 'Nous utilisons les catégories de cookies suivantes :',
    cpolicy_necessary_detail: 'Ces cookies sont essentiels au bon fonctionnement du site web.',
    cpolicy_analytics_detail: 'Ces cookies collectent des informations sur la façon dont les visiteurs utilisent notre site.',
    cpolicy_marketing_detail: 'Ces cookies sont utilisés pour suivre les visiteurs sur les sites web.',
    cpolicy_functional_detail: 'Ces cookies permettent des fonctionnalités améliorées et une personnalisation.',
    cpolicy_s3_title: '3. GESTION DES COOKIES',
    cpolicy_s3_text: 'Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.',
    cpolicy_s4_title: '4. NOUS CONTACTER',
    cpolicy_s4_text: 'Si vous avez des questions sur notre utilisation des cookies, contactez-nous à',

    // Checkout Sidebar (legacy)
    checkout_title: 'COORDONNÉES DE TRANSMISSION',
    checkout_subtitle: 'Protocole d\'expédition sécurisé initié',
    checkout_summary: 'RÉSUMÉ DU CHARGEMENT',
    checkout_address: 'ADRESSE DE LIVRAISON',
    checkout_city: 'VILLE / SECTEUR',
    checkout_country: 'PAYS / NŒUD',
    checkout_postal: 'CODE POSTAL',
    checkout_confirm: 'INITIER LE TRANSFERT',
    checkout_total: 'TOTAL EN CRÉDITS',
    checkout_empty: 'AUCUN ACTIF DÉTECTÉ',
    checkout_processing: 'TRAITEMENT EN COURS...',
    checkout_success_text: 'Votre équipement est en cours de préparation. Transmission du signal confirmée.',
    checkout_continue: 'CONTINUER LA MISSION',
    checkout_promo: 'Avez-vous un code promo ?',
    checkout_apply: 'Appliquer',
    checkout_subtotal: 'Sous-total',
    checkout_shipping_cost: 'Frais d\'expédition estimés',
    checkout_free: 'Gratuit',
    checkout_fname: 'Prénom',
    checkout_lname: 'Nom de famille',
    checkout_email: 'Adresse e-mail',
    checkout_paypal: 'Payer avec Crypto / Externe',
    checkout_terms: 'En sélectionnant un mode de paiement, vous confirmez avoir lu et accepté les Conditions d\'utilisation et la Politique de confidentialité.',
    checkout_address_ph: 'ADRESSE DE TRANSMISSION',
    checkout_submitting: 'ENVOI...',
    checkout_item_placeholder: 'ARTICLE',
    checkout_color_short: 'COUL',
    checkout_size_short: 'TAIL',
    checkout_not_available: 'N/D',
    checkout_promo_placeholder: 'XXXX-XXXX',
    auth_error_title: 'Erreur d’authentification',
    auth_error_default_message: 'Vos informations d’authentification sont invalides ou ont expiré',
    auth_error_auto_return_prefix: 'Retour automatique à la page d’accueil dans',
    auth_error_auto_return_suffix: 'secondes',
    auth_error_redirecting: 'Redirection...',
    auth_error_return_home: 'Retour à l’accueil',
  },

  de: {
    nav_home: 'Startseite',
    nav_shop: 'Shop',
    nav_collections: 'Kollektionen',
    nav_story: 'Unsere Geschichte',
    nav_lookbook: 'Lookbook',
    nav_blog: 'Blog',
    nav_contact: 'Kontakt',

    hero_subtitle: 'CYBERPUNK STREETWEAR',
    hero_slogan: 'Wear Tomorrow Today',
    hero_cta: 'SYSTEMZUGANG\n(SHOP)',
    hero_explore: 'ENTDECKE DIE REBELLION',

    featured_title: 'AUSGEWÄHLTE DROPS',
    featured_subtitle: 'Das Neueste aus dem Underground. Limitierte Stücke für digitale Rebellen.',
    featured_view_all: 'ALLE PRODUKTE ANSEHEN',

    collections_title: 'KOLLEKTIONEN',
    collections_subtitle: 'Jede Kollektion erzählt ein Kapitel des GLITHEX-Universums.',
    collection_neon_name: 'NEON-REBELLION',
    collection_neon_desc: 'Geboren auf neonbeleuchteten Straßen. Trotzig. Elektrisch. Unaufhaltsam.',
    collection_ghost_name: 'DIGITALER GEIST',
    collection_ghost_desc: 'Unsichtbar im System. Präsent auf den Straßen. Das Geister-Protokoll.',
    collection_explore: 'ENTDECKEN',

    cta_title: 'SCHLIESS DICH DER REBELLION AN',
    cta_subtitle: 'Das System will Konformität. Wir bieten Widerstand. Trage den Code, der die Matrix bricht.',
    cta_button: 'JETZT KAUFEN',

    shop_title: 'DAS ARSENAL',
    shop_subtitle: 'Rüste dich für die digitale Revolution.',
    shop_filter_all: 'Alle',
    shop_filter_tshirts: 'T-Shirts',
    shop_filter_hoodies: 'Kapuzenpullis',
    shop_filter_oversized: 'Oversize',
    shop_filter_caps: 'Caps',
    shop_filter_cases: 'Handyhüllen',
    shop_filter_accessories: 'ZUBEHÖR',

    shop_add_cart: 'AUSFÜHREN',
    shop_deploy_signal: 'INITIALISIEREN',
    shop_product_label: 'ASSET:',
    shop_loadout: 'LOADOUT',
    shop_no_signals: 'KEINE SIGNALE',
    shop_purge: 'BEREINIGEN',
    shop_no_products: 'KEINE ASSETS GEFUNDEN.',
    shop_from: 'Ab',
    shop_size: 'Größe',
    shop_color: 'Farbe',
    shop_order_assets_singular: 'Asset',
    shop_order_assets_plural: 'Assets',
    shop_product_fallback: 'Urbanes Cyberwear-Element',

    pdp_data_log: 'DATENPROTOKOLL',
    pdp_size_matrix: 'GRÖßENMATRIX',
    pdp_color_channel: 'FARBKANAL',
    pdp_back: 'ZURÜCK ZUM ARSENAL',
    pdp_cta_deploy: 'Einheit einsetzen',
    pdp_logistics: 'VERSAND & RÜCKGABE',
    pdp_share: 'SIGNAL TEILEN',
    pdp_logistics_text: 'Express-Routing verfügbar. Standard-Rückgaben innerhalb von 14 Sonnentagen unterstützt.',
    pdp_copy_signal_link: 'Signal-Link kopieren',
    pdp_broadcast_signal_link: 'Signal-Link übertragen',
    pdp_description_fallback: 'Kleidung für urbane Umgebungen. Hohe Leistung und optimierte Struktur.',
    pdp_asset_not_found: 'ASSET NICHT GEFUNDEN_',

    checkout_protocol_title: 'CHECKOUT-PROTOKOLL',
    checkout_step_1: '1. PHYSISCHE KOORDINATEN',
    checkout_step_2: '2. FINANZ-UPLINK (ZAHLUNG)',
    checkout_step_3: '3. ABSCHLUSSPRÜFUNG',
    checkout_email_label: 'COM-LINK (E-MAIL)',
    checkout_fname_label: 'HAUPTIDENTIFIKATOR (VORNAME)',
    checkout_lname_label: 'KLON-IDENTIFIKATOR (NACHNAME)',
    checkout_address_label: 'EXAKTE KOORDINATEN (STRAẞE & NUMMER)',
    checkout_postal_label: 'SEKTORCODE (PLZ)',
    checkout_city_label: 'URBANER KERN (STADT)',
    checkout_country_label: 'TERRITORIUM (LAND)',
    checkout_phone_label: 'KONTAKTNETZWERK (TELEFON)',
    checkout_validate_btn: 'KOORDINATEN VALIDIEREN',
    checkout_shipping_promise: 'Logistiknetzwerke garantieren den Einsatz so schnell wie möglich.',
    checkout_inventory_title: 'IN IHREM INVENTAR',
    checkout_subtotal_label: 'Zwischensumme',
    checkout_shipping_label: 'Transferfracht',
    checkout_total_label: 'Physisches Gesamt',
    checkout_qty: 'MENGE',
    checkout_size: 'GRÖẞE',
    checkout_success_title: 'ÜBERTRAGUNG BESTÄTIGT',
    checkout_success_desc: 'Ihre Koordinaten wurden assimiliert. Taktische Assets sind unterwegs.',
    checkout_back_system: 'ZUM SYSTEM ZURÜCKKEHREN',
    checkout_back_cart: 'ZURÜCK ZUM WARENKORB',
    checkout_edit: 'BEARBEITEN',
    checkout_cc_num: 'BANKKARTENNUMMER (SIMULATION)',
    checkout_cc_secure: 'Sichere Netzwerkplattform (Endet auf 4092)',
    checkout_auth_btn: 'UPLINK AUTORISIEREN',
    checkout_terms_agree: 'Durch die Bestätigung dieser Übertragung autorisieren Sie den Einsatz taktischer Vermögenswerte an Ihren physischen Koordinaten und akzeptieren bedingungslos das GLITHEX-Nutzungsbedingungen-Protokoll.',
    checkout_final_btn: 'ÜBERTRAGUNG BESTÄTIGEN',

    story_title: 'DAS GLITHEX-PROTOKOLL',
    story_subtitle: 'Jede Rebellion beginnt mit einem Signal.',
    story_chapter1_title: 'KAPITEL I: DAS SIGNAL',
    story_chapter1_text: 'Im Jahr 2049 wurde das globale Netzwerk zum Käfig. Jede Transaktion überwacht, jeder Gedanke katalogisiert. Die Konzerne versprachen Sicherheit, lieferten aber Kontrolle. Dann, aus den Tiefen des Dark Web, tauchte ein Signal auf — ein Glitch im System, der nicht gepatcht werden konnte. Sie nannten es GLITHEX.',
    story_chapter2_title: 'KAPITEL II: DAS KOLLEKTIV',
    story_chapter2_text: 'GLITHEX war nicht nur Code — es war eine Bewegung. Hacker, Künstler, Rebellen und Träumer vereint unter einem Banner. Sie trugen ihren Trotz wie eine Rüstung und verwandelten Streetwear in Statements. Jedes Design war eine Chiffre, jedes Muster eine Nachricht für die, die es lesen konnten.',
    story_chapter3_title: 'KAPITEL III: DIE REBELLION',
    story_chapter3_text: 'Jetzt verbreitet sich das Signal in jeder Stadt, auf jedem Bildschirm, an jeder Straßenecke. GLITHEX ist mehr als Kleidung — es ist Identität. Es ist das Zeichen derer, die sich weigern, von der Maschine unsichtbar gemacht zu werden. Die Rebellion kommt nicht. Sie ist bereits hier.',
    story_manifesto_title: 'DAS MANIFEST',
    story_manifesto_text: 'Wir sind der Glitch im System. Wir sind der Fehler, den sie nicht debuggen können. Wir tragen morgen, weil heute bereits veraltet ist. GLITHEX — wo Mode auf die Zukunft trifft, und die Zukunft zurückschlägt.',

    lookbook_title: 'LOOKBOOK',
    lookbook_subtitle: 'Visuelle Übertragungen aus dem Underground.',

    blog_title: 'ÜBERTRAGUNGEN',
    blog_subtitle: 'Berichte von der Cyberpunk-Grenze.',
    blog_read_more: 'MEHR LESEN',

    contact_title: 'VERBINDUNG HERSTELLEN',
    contact_subtitle: 'Sende ein Signal an das GLITHEX-Hauptquartier.',
    contact_name: 'Alias',
    contact_email: 'Verschlüsselte E-Mail',
    contact_message: 'Deine Übertragung',
    contact_send: 'ÜBERTRAGEN',
    contact_sent: 'Signal erfolgreich übertragen.',

    footer_tagline: 'Cyberpunk Streetwear für digitale Rebellen. Wear Tomorrow Today.',
    footer_quick_links: 'Schnelllinks',
    footer_follow_us: 'Folge dem Signal',
    footer_newsletter: 'Tritt dem Netzwerk bei',
    footer_newsletter_placeholder: 'E-Mail eingeben...',
    footer_subscribe: 'ABONNIEREN',
    footer_rights: '© 2026 GLITHEX. Alle Rechte vorbehalten. Die Rebellion geht weiter.',

    product_tshirt_1: 'Glitch Core T-Shirt',
    product_tshirt_2: 'Neuronales Netz T-Shirt',
    product_hoodie_1: 'Neon-Rebellion Hoodie',
    product_hoodie_2: 'Dunkles Protokoll Hoodie',
    product_oversized_1: 'Systemfehler Oversized',
    product_cap_1: 'Cyber-Signal Cap',
    product_case_1: 'Matrix-Bruch Hülle',
    product_case_2: 'Geister-Protokoll Hülle',

    product_tshirt_desc: 'Klassifiziertes Asset. Optimale Leistung in urbanen Sektoren verifiziert. Signalkapazität 100%. Ausrüsten, um das Ästhetik-Protokoll zu überschreiben.',
    product_hoodie_desc: 'Thermischer Schild aktiv. Entwickelt für maximale Anonymität in überwachten Sektoren. Biorhythmus-Verschleierung aktiviert.',
    product_oversized_desc: 'Systemfehler-Ästhetik. Nicht-konforme Passform zur Störung von Gesichtserkennungsalgorithmen und Überwachungsmustern.',
    product_cap_desc: 'Kranialer Signaldeflektor. Blockiert unautorisierte Neuro-Scans bei gleichzeitig hoher Sichtbarkeit im Untergrundnetzwerk.',
    product_case_desc: 'Hardware-Panzerung. Polymerhülle in Militärqualität schützt Kommunikationsgeräte vor kinetischen Einschlägen.',

    product_1_tagline: 'Break the system. Wear the glitch.',
    product_2_tagline: 'Control the signal. Override reality.',
    product_3_tagline: 'Born to disrupt the grid.',
    product_4_tagline: 'Stay hidden. Strike the system.',
    product_5_tagline: 'Error detected. Authority rejected.',
    product_6_tagline: 'Intercept signals. Own the noise.',
    product_7_tagline: 'Impact ready. System unbreakable.',
    product_8_tagline: 'Invisible mode. Untouchable presence.',

    blog_article_back: 'ZURÜCK ZU ÜBERTRAGUNGEN',
    blog_article_tag: 'CYBERPUNK-MODE',
    blog_article_title: 'Der Aufstieg der Cyberpunk-Mode 2026',
    blog_article_date: '10. März 2026',
    blog_article_read_time: '5 Min. Lesezeit',
    blog_article_intro_1: 'Das Jahr 2026 markiert einen Wendepunkt für die <strong>Cyberpunk-Mode</strong>. Was einst auf Science-Fiction-Filme und Videospiele beschränkt war, hat die Straßen jeder Großstadt erobert. Von Tokio bis Berlin, London bis Los Angeles — eine neue Generation von Stil-Rebellen umarmt <strong>futuristische Streetwear</strong>, die die Grenze zwischen Technologie und Selbstausdruck verwischt. Die Cyberpunk-Ästhetik ist keine Nischen-Subkultur mehr — sie ist die prägende Modebewegung unseres Jahrzehnts.',
    blog_article_intro_2: 'Im Herzen dieser Revolution liegt <strong>Techwear</strong>: Kleidungsstücke, die mit fortschrittlichen Stoffen, funktionalem Design und einer dunklen, utilitaristischen Schönheit entwickelt wurden, die von einer Welt spricht, die zunehmend von digitaler Kultur geprägt ist. Marken wie GLITHEX führen diese Bewegung an und verwandeln <strong>Cyberpunk-Kleidung</strong> von Kostüm in Haute Couture.',
    blog_article_s1_title: 'Von Bildschirmen auf die Straßen: Wie Cyberpunk-Mode Mainstream Wurde',
    blog_article_s1_p1: 'Die Samen der Cyberpunk-Mode wurden vor Jahrzehnten in Filmen wie Blade Runner und The Matrix gepflanzt, aber die Explosion von Cyberpunk-Videospielen, Anime und digitaler Kunst in den frühen 2020ern brachte die Ästhetik zu einem massiven neuen Publikum. Bis 2024 hatte sich das Suchinteresse an "Cyberpunk-Kleidung" verdreifacht, und bis 2026 ist futuristische Streetwear zu einem der am schnellsten wachsenden Segmente der globalen Modeindustrie geworden.',
    blog_article_s1_p2: 'Social-Media-Plattformen, insbesondere TikTok und Instagram, beschleunigten diesen Wandel. Influencer und Content Creator begannen, Techwear-Outfits zu präsentieren — dunkel, geschichtet und vollgepackt mit funktionalen Details wie wasserdichten Reißverschlüssen, modularen Taschen und reflektierenden Akzenten. Der Look fand Anklang bei einer Generation, die online aufgewachsen ist und Mode als Erweiterung ihrer digitalen Identität sieht.',
    blog_article_s1_sub1_title: 'Die Rolle der Gaming-Kultur im Cyberpunk-Stil',
    blog_article_s1_sub1_p1: 'Spiele wie Cyberpunk 2077 und Ghost in the Shell: SAC_2045 waren nicht nur Unterhaltung — sie wurden zu Stilführern. Spieler verbrachten Stunden damit, ihre Avatare mit neonbeleuchteten Jacken, taktischen Westen und holografischen Accessoires anzupassen. Wenn sie sich ausloggten, wollten sie diese Ästhetik in die reale Welt bringen. Dieser Crossover zwischen virtueller und physischer Mode ist einer der bedeutendsten kulturellen Wandel der 2020er und hat Cyberpunk-Mode zu einem festen Bestandteil moderner Streetwear gemacht.',
    blog_article_s2_title: 'Techwear: Der Motor Hinter der Cyberpunk-Mode-Revolution',
    blog_article_s2_p1: 'Im Kern geht es bei Techwear darum, Form mit Funktion zu verschmelzen. Im Gegensatz zu traditioneller Streetwear, die Branding und Logos priorisiert, konzentriert sich Techwear auf Materialwissenschaft, ergonomische Konstruktion und Wetterbeständigkeit. Stoffe wie Gore-Tex, Schoeller und recyceltes Nylon sind Standard. Designs bieten artikulierte Schnitte für Mobilität, versiegelte Nähte für Wasserdichtigkeit und versteckte Fächer für den täglichen Gebrauch.',
    blog_article_s2_p2: 'Aber was das Techwear von 2026 auszeichnet, ist seine Umarmung der Ästhetik. Frühes Techwear war rein utilitaristisch — denken Sie an Wanderausrüstung in Schwarz. Die heutige Cyberpunk-Kleidung kombiniert diese Funktionalität mit kühnen visuellen Statements: Neon-Nähte, holografische Drucke, LED-eingebettete Accessoires und Silhouetten, inspiriert von dystopischer Fiktion. Das Ergebnis ist Kleidung, die aussieht, als gehöre sie in einen Sci-Fi-Film, aber in der realen Welt funktioniert.',
    blog_article_s2_sub1_title: 'Nachhaltige Innovation in Futuristischer Streetwear',
    blog_article_s2_sub1_p1: 'Eine der aufregendsten Entwicklungen in der Cyberpunk-Mode ist der Vorstoß zur Nachhaltigkeit. Marken experimentieren mit biofabrizierten Materialien, recyceltem Ozeanplastik und Zero-Waste-Schnittmustern. GLITHEX verwendet beispielsweise recycelte Polyestermischungen und umweltfreundliche Farbstoffe in seinen Kollektionen und beweist, dass futuristische Streetwear in mehr als einer Hinsicht zukunftsweisend sein kann. Das Cyberpunk-Ethos, Systeme zu hinterfragen und den Status quo herauszufordern, erstreckt sich natürlich auf die Umweltverantwortung.',
    blog_article_s3_title: 'Die Zukunft der Cyberpunk-Kleidung: Was Kommt als Nächstes',
    blog_article_s3_p1: 'Wenn wir über 2026 hinausblicken, deutet die Entwicklung der Cyberpunk-Mode auf eine noch tiefere Integration mit Technologie hin. Tragbare Technologie entwickelt sich über Smartwatches hinaus — wir sehen Kleidungsstücke mit eingebetteten Sensoren, die Biometrie überwachen, Jacken mit eingebauten Heizsystemen, die per Smartphone-App gesteuert werden, und Accessoires, die mit Augmented-Reality-Umgebungen interagieren.',
    blog_article_s3_p2: 'Das Metaverse verändert auch, wie wir über Cyberpunk-Kleidung denken. Digitale Mode — Kleidungsstücke, die ausschließlich für virtuelle Räume entworfen wurden — ist ein boomender Markt. Einige Marken verkaufen jetzt physische und digitale Versionen desselben Stücks, sodass Kunden ihren Stil in beiden Realitäten tragen können. Dieses Modell der doppelten Existenz ist quintessentiell Cyberpunk: Identität ist nicht mehr an eine Welt gebunden.',
    blog_article_s3_p3: 'Individualisierung und Personalisierung werden auch das nächste Kapitel definieren. KI-gesteuerte Design-Tools ermöglichen es Verbrauchern, ihre Techwear-Stücke mitzugestalten, Materialien, Farbkombinationen und funktionale Merkmale auszuwählen. Die Ära der massenproduzierten Uniformität geht zu Ende. An ihrer Stelle entsteht ein neues Paradigma — eines, in dem jedes Kleidungsstück so einzigartig ist wie der Rebell, der es trägt.',
    blog_article_conclusion_title: 'Fazit: Trage die Zukunft',
    blog_article_conclusion_p1: 'Cyberpunk-Mode im Jahr 2026 ist mehr als ein Trend — es ist ein kulturelles Statement. Sie repräsentiert eine Generation, die sich weigert, Technologie von Identität, Funktion von Schönheit oder das Virtuelle vom Realen zu trennen. Techwear und futuristische Streetwear haben uns ein neues Vokabular für Selbstausdruck gegeben, geschrieben in wasserdichten Stoffen, Neon-Fäden und trotzigen Silhouetten.',
    blog_article_conclusion_p2: 'Ob Sie ein langjähriger Techwear-Enthusiast sind oder Cyberpunk-Kleidung zum ersten Mal entdecken, eines ist klar: Die Zukunft der Mode ist hier, und sie glitcht wunderschön. Bei GLITHEX folgen wir nicht nur dem Signal — wir sind das Signal.',
    blog_article_related_title: 'Verwandte Übertragungen',

    // Cookie Consent
    cookie_title: 'COOKIE-PROTOKOLL',
    cookie_subtitle: 'Datenübertragung erkannt',
    cookie_description: 'Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern, personalisierte Inhalte bereitzustellen und unseren Datenverkehr zu analysieren. Durch Klicken auf "Akzeptieren" stimmen Sie unserer Verwendung von Cookies zu. Lesen Sie unsere',
    cookie_accept: 'ALLE AKZEPTIEREN',
    cookie_reject: 'ALLE ABLEHNEN',
    cookie_customize: 'ANPASSEN',
    cookie_save: 'EINSTELLUNGEN SPEICHERN',
    cookie_privacy_link: 'Datenschutzrichtlinie',
    cookie_policy_link: 'Cookie-Richtlinie',
    cookie_necessary: 'Notwendig',
    cookie_necessary_desc: 'Essentiell für die Funktion der Website. Können nicht deaktiviert werden.',
    cookie_analytics: 'Analytik',
    cookie_analytics_desc: 'Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.',
    cookie_marketing: 'Marketing',
    cookie_marketing_desc: 'Werden verwendet, um personalisierte Werbung anzuzeigen.',
    cookie_functional: 'Funktional',
    cookie_functional_desc: 'Ermöglichen erweiterte Funktionalität und Personalisierung.',

    // Policy Pages
    policy_back_home: 'ZURÜCK ZUR STARTSEITE',
    policy_last_updated: 'Letzte Aktualisierung: 15. März 2026',
    privacy_title: 'DATENSCHUTZRICHTLINIE',
    privacy_s1_title: '1. INFORMATIONEN, DIE WIR ERHEBEN',
    privacy_s1_text: 'Wir erheben Informationen, die Sie uns direkt zur Verfügung stellen, z.B. wenn Sie ein Konto erstellen, einen Kauf tätigen, unseren Newsletter abonnieren oder uns kontaktieren. Dies kann Ihren Namen, Ihre E-Mail-Adresse, Lieferadresse, Zahlungsinformationen und alle anderen Informationen umfassen, die Sie uns mitteilen.',
    privacy_s2_title: '2. WIE WIR IHRE INFORMATIONEN VERWENDEN',
    privacy_s2_text: 'Wir verwenden die erhobenen Informationen zur Abwicklung von Transaktionen, zum Versand von Bestellbestätigungen, zur Beantwortung Ihrer Anfragen, zum Versand von Marketingkommunikation (mit Ihrer Zustimmung), zur Verbesserung unserer Website und Dienste sowie zur Erfüllung gesetzlicher Verpflichtungen.',
    privacy_s3_title: '3. WEITERGABE VON INFORMATIONEN',
    privacy_s3_text: 'Wir verkaufen Ihre persönlichen Daten nicht. Wir können Ihre Informationen mit Dienstleistern teilen, die uns beim Betrieb unserer Website, der Durchführung unseres Geschäfts oder der Betreuung unserer Nutzer unterstützen. Diese Dritten sind verpflichtet, Ihre Informationen vertraulich zu behandeln.',
    privacy_s4_title: '4. DATENSICHERHEIT',
    privacy_s4_text: 'Wir implementieren angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer personenbezogenen Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung. Keine Übertragungsmethode über das Internet ist jedoch zu 100% sicher.',
    privacy_s5_title: '5. IHRE RECHTE',
    privacy_s5_text: 'Gemäß der DSGVO haben Sie das Recht auf Zugang, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Sie können Ihre Einwilligung jederzeit widerrufen.',
    privacy_s6_title: '6. KONTAKTIEREN SIE UNS',
    privacy_s6_text: 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder unseren Datenpraktiken haben, kontaktieren Sie uns unter',
    cookie_policy_title: 'COOKIE-RICHTLINIE',
    cpolicy_s1_title: '1. WAS SIND COOKIES',
    cpolicy_s1_text: 'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie werden häufig verwendet, um Websites effizienter zu gestalten und den Eigentümern der Website Informationen bereitzustellen.',
    cpolicy_s2_title: '2. COOKIES, DIE WIR VERWENDEN',
    cpolicy_s2_text: 'Wir verwenden die folgenden Cookie-Kategorien auf unserer Website:',
    cpolicy_necessary_detail: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie Seitennavigation, sicheren Zugang und Sitzungsverwaltung.',
    cpolicy_analytics_detail: 'Diese Cookies sammeln Informationen darüber, wie Besucher unsere Website nutzen, z.B. welche Seiten am häufigsten besucht werden. Alle gesammelten Informationen sind aggregiert und anonym.',
    cpolicy_marketing_detail: 'Diese Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen. Die Absicht ist, Anzeigen zu schalten, die für den einzelnen Nutzer relevant und ansprechend sind.',
    cpolicy_functional_detail: 'Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen, wie das Speichern Ihrer Sprach- und Themeneinstellungen.',
    cpolicy_s3_title: '3. COOKIES VERWALTEN',
    cpolicy_s3_text: 'Sie können Ihre Cookie-Einstellungen jederzeit über Ihre Browsereinstellungen verwalten. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität unserer Website beeinträchtigen kann.',
    cpolicy_s4_title: '4. KONTAKTIEREN SIE UNS',
    cpolicy_s4_text: 'Wenn Sie Fragen zu unserer Verwendung von Cookies haben, kontaktieren Sie uns unter',

    // Checkout
    checkout_title: 'ÜBERTRAGUNGSKOORDINATEN',
    checkout_subtitle: 'Sicheres Versandprotokoll initiiert',
    checkout_summary: 'LOADOUT ZUSAMMENFASSUNG',
    checkout_address: 'LIEFERADRESSE',
    checkout_city: 'STADT / SEKTOR',
    checkout_country: 'LAND / KNOTEN',
    checkout_postal: 'POSTLEITZAHL',
    checkout_confirm: 'TRANSFER INITIIEREN',
    checkout_total: 'GESAMTE CREDITS',
    checkout_empty: 'KEINE ASSETS GEFUNDEN',
    checkout_processing: 'VERARBEITUNG...',
    checkout_success_title: 'TRANSFER ABGESCHLOSSEN',
    checkout_success_text: 'Ihre Ausrüstung wird für den Einsatz vorbereitet. Signalübertragung bestätigt.',
    checkout_continue: 'MISSION FORTSETZEN',
    checkout_promo: 'Hast du einen Aktionscode?',
    checkout_apply: 'Anwenden',
    checkout_subtotal: 'Zwischensumme',
    checkout_shipping_cost: 'Geschätzte Versand- und Bearbeitungskosten',
    checkout_free: 'Kostenlos',
    checkout_fname: 'Vorname',
    checkout_lname: 'Nachname',
    checkout_email: 'E-Mail-Adresse',
    checkout_paypal: 'Mit Krypto bez. / Extern',
    checkout_terms: 'Durch Auswahl einer Zahlungsmethode bestätigen Sie, dass Sie die Nutzungsbedingungen und die Datenschutzrichtlinie gelesen und akzeptiert haben.',
    checkout_address_ph: 'ÜBERTRAGUNGSADRESSE',
    checkout_submitting: 'WIRD GESENDET...',
    checkout_item_placeholder: 'ARTIKEL',
    checkout_color_short: 'FAR',
    checkout_size_short: 'GR',
    checkout_not_available: 'K.A.',
    checkout_promo_placeholder: 'XXXX-XXXX',
    auth_error_title: 'Authentifizierungsfehler',
    auth_error_default_message: 'Ihre Authentifizierungsdaten sind ungültig oder abgelaufen',
    auth_error_auto_return_prefix: 'Automatische Rückkehr zur Startseite in',
    auth_error_auto_return_suffix: 'Sekunden',
    auth_error_redirecting: 'Weiterleitung...',
    auth_error_return_home: 'Zur Startseite',
  },
};

export function t(lang: Language, key: keyof TranslationKeys): string {
  return translations[lang]?.[key] || translations.en[key] || key;
}

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT() {
  const { lang } = useLanguage();
  return (key: keyof TranslationKeys) => t(lang, key);
}

// Theme context
export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
