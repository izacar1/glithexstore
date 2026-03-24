const fs = require('fs');
const path = require('path');

const p = path.join('c:', 'Users', 'izaca', 'glithex-dev-backup', 'app', 'frontend-dev', 'src', 'i18n', 'translations.ts');
let content = fs.readFileSync(p, 'utf8');

const keysToAddEN = `
    checkout_edit: 'EDIT',
    checkout_cc_num: 'BANK CARD NUMBER (SIMULATION)',
    checkout_cc_secure: 'Secure network platform (Ends in 4092)',
    checkout_auth_btn: 'AUTHORIZE UPLINK',
    checkout_terms_agree: 'By confirming this transmission, you authorize the deployment of tactical assets to your physical coordinates and unconditionally accept the GLITHEX Terms of Service Protocol.',
    checkout_final_btn: 'CONFIRM TRANSMISSION',`;

const keysToAddES = `
    checkout_edit: 'EDITAR',
    checkout_cc_num: 'NÚMERO DE TARJETA BANCARIA (SIMULACIÓN)',
    checkout_cc_secure: 'Plataforma de red asegurada (Termina en 4092)',
    checkout_auth_btn: 'AUTORIZAR UPLINK',
    checkout_terms_agree: 'Al confirmar esta transmisión, autorizas el despliegue de los activos tácticos a tus coordenadas físicas y aceptas incondicionalmente el Protocolo de Términos de Servicio de GLITHEX.',
    checkout_final_btn: 'CONFIRMAR TRANSMISIÓN',`;

const keysToAddFR = `
    checkout_edit: 'ÉDITER',
    checkout_cc_num: 'NUMÉRO DE CARTE BANCAIRE (SIMULATION)',
    checkout_cc_secure: 'Plateforme réseau sécurisée (Se termine par 4092)',
    checkout_auth_btn: 'AUTORISER L\\'UPLINK',
    checkout_terms_agree: 'En confirmant cette transmission, vous autorisez le déploiement d\\'actifs tactiques vers vos coordonnées physiques et acceptez inconditionnellement le protocole des conditions de service de GLITHEX.',
    checkout_final_btn: 'CONFIRMER LA TRANSMISSION',`;

const keysToAddDE = `
    checkout_edit: 'BEARBEITEN',
    checkout_cc_num: 'BANKKARTENNUMMER (SIMULATION)',
    checkout_cc_secure: 'Sichere Netzwerkplattform (Endet auf 4092)',
    checkout_auth_btn: 'UPLINK AUTORISIEREN',
    checkout_terms_agree: 'Durch die Bestätigung dieser Übertragung autorisieren Sie den Einsatz taktischer Vermögenswerte an Ihren physischen Koordinaten und akzeptieren bedingungslos das GLITHEX-Nutzungsbedingungen-Protokoll.',
    checkout_final_btn: 'ÜBERTRAGUNG BESTÄTIGEN',`;

const interfaceKeys = `
  checkout_edit: string;
  checkout_cc_num: string;
  checkout_cc_secure: string;
  checkout_auth_btn: string;
  checkout_terms_agree: string;
  checkout_final_btn: string;`;

// Inject into English
content = content.replace(/(    checkout_back_cart: 'BACK TO CART',)/, '$1' + keysToAddEN);
// Inject into Spanish
content = content.replace(/(    checkout_back_cart: 'VOLVER AL CARRITO',)/, '$1' + keysToAddES);
// Inject into French
content = content.replace(/(    checkout_back_cart: 'RETOUR AU PANIER',)/, '$1' + keysToAddFR);
// Inject into German
content = content.replace(/(    checkout_back_cart: 'ZURÜCK ZUM WARENKORB',)/, '$1' + keysToAddDE);
// Inject into Interface
content = content.replace(/(  checkout_back_cart: string;)/, '$1' + interfaceKeys);

fs.writeFileSync(p, content);
console.log("Accordion keys added successfully.");
