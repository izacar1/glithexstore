const fs = require('fs');
const path = require('path');
const p = path.join('c:', 'Users', 'izaca', 'glithex-dev-backup', 'app', 'frontend-dev', 'src', 'i18n', 'translations.ts');
let content = fs.readFileSync(p, 'utf8');

const keysToAdd = `
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
`;

// Insert right before "  story_title: string;" inside TranslationKeys
content = content.replace(/(  story_title: string;)/, keysToAdd + '$1');

fs.writeFileSync(p, content);
console.log("Types injected successfully.");
