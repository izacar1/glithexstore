import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShieldCheck, ChevronRight, ChevronDown, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useT } from '@/i18n/translations';
import { NeonButton } from '@/components/GlitchEffects';
import { config } from '@/lib/config';

// Internal Modular UI Component: Floating Label Input
// Extracted outside the main render loop to prevent React from unmounting on every keystroke
const FloatingInput = ({ id, label, type = "text", value, onChange, required = true }: any) => (
  <div className="relative group">
    <input 
      type={type} 
      id={id} 
      required={required} 
      placeholder=" " 
      value={value}
      onChange={onChange}
      className="peer w-full bg-white dark:bg-[#1A1A2E] text-black dark:text-white border border-gray-300 dark:border-[#2D2D44] rounded-md px-4 pt-6 pb-2 text-sm focus:border-cyber-purple dark:focus:border-cyber-purple focus:outline-none focus:ring-1 focus:ring-cyber-purple/50 transition-all font-inter shadow-sm dark:shadow-none" 
    />
    <label 
      htmlFor={id} 
      className="absolute left-4 top-3.5 text-gray-400 dark:text-gray-500 text-[8.5px] sm:text-[9.5px] transition-all pointer-events-none peer-focus:text-[7.5px] sm:peer-focus:text-[8px] peer-focus:top-1.5 peer-focus:text-cyber-purple peer-valid:text-[7.5px] sm:peer-valid:text-[8px] peer-valid:top-1.5 uppercase font-mono flex items-center whitespace-nowrap right-4 overflow-hidden"
    >
      <span className="truncate">{label}</span>
      {required && <span className="ml-1 flex-shrink-0 text-cyber-purple">*</span>}
    </label>
    {value && <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500 opacity-0 peer-valid:opacity-100 transition-opacity" />}
  </div>
);

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const t = useT();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postal: '',
    phone: ''
  });

  const handleClose = () => {
    setIsCartOpen(false);
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsSuccess(false);
      setCheckoutStep(1);
      setFormData({ fname: '', lname: '', email: '', address: '', city: '', country: '', postal: '', phone: '' });
      setIsPromoOpen(false);
      setPromoCode('');
      setIsSubmittingOrder(false);
      setSubmissionError('');
    }, 300);
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep(3);
  };

  const handleProcessCheckout = () => {
    setSubmissionError('');

    if (!config.API_BASE_URL) {
      setSubmissionError(t('checkout_submit_error'));
      return;
    }

    setIsSubmittingOrder(true);

    fetch(`${config.API_BASE_URL}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cart,
        customer: formData,
        totals: {
          subtotal: cartTotal,
          shipping: 0,
          total: cartTotal,
        },
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Failed to submit order: ${response.status}`);
        }

        await response.json();
        setIsSuccess(true);
        clearCart();
      })
      .catch((error) => {
        console.error(error);
        setSubmissionError(t('checkout_submit_error'));
      })
      .finally(() => {
        setIsSubmittingOrder(false);
      });
  };

  if (!isCartOpen) return null;



  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-cyber-black/80 backdrop-blur-sm z-[100] transition-opacity" onClick={handleClose} />

      {/* Sidebar Framework (Responsive Expansion) */}
      <div className={`fixed top-0 right-0 h-full w-full transition-all duration-500 ease-in-out transform bg-gray-50 dark:bg-cyber-surface border-l border-gray-200 dark:border-cyber-border z-[101] flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} ${isCheckingOut && !isSuccess ? 'lg:w-[1024px] sm:w-[650px]' : 'sm:w-[650px]'}`}>
        
        {/* =========================================
            1. NIKE-STYLE CYBERPUNK CHECKOUT VIEW
            ========================================= */}
        {isCheckingOut && !isSuccess ? (
          <div className="flex flex-col lg:flex-row h-full w-full bg-white dark:bg-[#0A0A0F]">
            {/* LEFT PANE: Functional Form Blocks */}
            <div className="flex-1 flex flex-col h-full relative">
               <div className="p-6 md:p-12 overflow-y-auto scrollbar-thin">
                 
                 {/* Navigation Topbar */}
                 <div className="flex justify-between items-center mb-10 border-b border-gray-200 dark:border-cyber-border/30 pb-4">
                   <button onClick={() => setIsCheckingOut(false)} className="text-gray-500 hover:text-cyber-purple font-mono text-xs uppercase tracking-widest flex items-center gap-1 transition-colors">
                     <ChevronRight className="w-4 h-4 rotate-180" /> {(t('checkout_back_cart') as string) || 'VOLVER AL CARRITO'}
                   </button>
                   <button onClick={handleClose} className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                     <X className="w-6 h-6" />
                   </button>
                 </div>
                 
                 {/* Header Protocol */}
                 <h2 className="font-orbitron font-bold text-2xl md:text-3xl text-black dark:text-white text-center mb-12 uppercase tracking-wide">
                   {(t('checkout_protocol_title') as string) || 'PROTOCOLO DE SALIDA'}
                 </h2>

                 {/* Checkout Accordion Step 1 */}
                 <div className={`mb-10 ${checkoutStep === 1 ? 'animate-fade-in-up' : ''}`}>
                   <div className="flex justify-between items-center mb-6">
                     <h3 className={`font-orbitron text-lg tracking-wide ${checkoutStep === 1 ? 'text-black dark:text-white' : 'text-gray-500'}`}>{(t('checkout_step_1') as string) || '1. COORDENADAS FÍSICAS'}</h3>
                     {checkoutStep > 1 && (
                       <button onClick={() => setCheckoutStep(1)} className="text-xs font-mono text-cyber-purple hover:text-cyber-cyan transition-colors">{(t('checkout_edit') as string) || 'EDITAR'}</button>
                     )}
                   </div>
                   
                   {checkoutStep === 1 ? (
                     <form id="checkout-form-1" onSubmit={handleStep1Submit} className="space-y-5">
                       <FloatingInput id="email" label={(t('checkout_email_label') as string) || 'COM-LINK (CORREO ELECTRÓNICO)'} type="email" value={formData.email} onChange={(e:any) => setFormData({...formData, email: e.target.value})} />
                       
                       <div className="grid grid-cols-2 gap-5">
                         <FloatingInput id="fname" label={(t('checkout_fname_label') as string) || 'IDENTIFICADOR PRINCIPAL (NOMBRE)'} value={formData.fname} onChange={(e:any) => setFormData({...formData, fname: e.target.value})} />
                         <FloatingInput id="lname" label={(t('checkout_lname_label') as string) || 'CLON IDENTIFICADOR (APELLIDOS)'} value={formData.lname} onChange={(e:any) => setFormData({...formData, lname: e.target.value})} />
                       </div>
                       
                       <FloatingInput id="address" label={(t('checkout_address_label') as string) || 'COORDENADAS EXACTAS (CALLE Y NÚMERO)'} value={formData.address} onChange={(e:any) => setFormData({...formData, address: e.target.value})} />
                       
                       <div className="grid grid-cols-2 gap-5">
                         <FloatingInput id="postal" label={(t('checkout_postal_label') as string) || 'CÓDIGO SECTOR'} value={formData.postal} onChange={(e:any) => setFormData({...formData, postal: e.target.value})} />
                         <FloatingInput id="city" label={(t('checkout_city_label') as string) || 'NÚCLEO URBANO'} value={formData.city} onChange={(e:any) => setFormData({...formData, city: e.target.value})} />
                       </div>
                       
                       <div className="grid grid-cols-2 gap-5">
                         <FloatingInput id="country" label={(t('checkout_country_label') as string) || 'TERRITORIO (PAÍS)'} value={formData.country} onChange={(e:any) => setFormData({...formData, country: e.target.value})} />
                         <FloatingInput id="phone" label={(t('checkout_phone_label') as string) || 'RED DE CONTACTO (TELÉFONO)'} type="tel" value={formData.phone} onChange={(e:any) => setFormData({...formData, phone: e.target.value})} />
                       </div>

                       <div className="pt-8">
                         <button type="submit" className="w-full bg-cyber-purple hover:bg-cyber-purple/80 text-[#fff] font-orbitron font-bold py-4 md:py-5 rounded-full transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex justify-center items-center gap-4">
                           <span>{(t('checkout_validate_btn') as string) || 'VALIDAR COORDENADAS'}</span>
                           <ShieldCheck className="w-5 h-5"/>
                         </button>
                       </div>
                     </form>
                   ) : (
                     <div className="text-sm text-gray-500 font-mono bg-gray-50 dark:bg-black/20 p-4 rounded-md border border-gray-200 dark:border-cyber-border/30">
                       <p className="font-bold text-black dark:text-white mb-1">{formData.fname} {formData.lname}</p>
                       <p>{formData.address}, {formData.city} {formData.postal}</p>
                       <p>{formData.email}</p>
                     </div>
                   )}
                 </div>

                 {/* Checkout Accordion Step 2 */}
                 <div className={`border-t border-gray-200 dark:border-cyber-border/40 py-8 ${checkoutStep === 2 ? 'animate-fade-in-up' : checkoutStep < 2 ? 'opacity-40 pointer-events-none' : ''}`}>
                   <div className="flex justify-between items-center mb-6">
                     <h3 className={`font-orbitron text-lg tracking-wide ${checkoutStep === 2 ? 'text-black dark:text-white' : 'text-gray-500'}`}>{(t('checkout_step_2') as string) || '2. UPLINK FINANCIERO (PAGO)'}</h3>
                     {checkoutStep > 2 && (
                       <button onClick={() => setCheckoutStep(2)} className="text-xs font-mono text-cyber-purple hover:text-cyber-cyan transition-colors">{(t('checkout_edit') as string) || 'EDITAR'}</button>
                     )}
                   </div>
                   
                   {checkoutStep === 2 ? (
                     <form id="checkout-form-2" onSubmit={handleStep2Submit} className="space-y-5">
                       <FloatingInput id="cc_num" label={(t('checkout_cc_num') as string) || 'NÚMERO DE TARJETA BANCARIA (SIMULACIÓN)'} value="**** **** **** 4092" required={false} onChange={()=>{}} />
                       <div className="grid grid-cols-2 gap-5">
                         <FloatingInput id="cc_exp" label="MM/AA" value="12/29" required={false} onChange={()=>{}} />
                         <FloatingInput id="cc_cvv" label="CVC" value="***" required={false} onChange={()=>{}} />
                       </div>
                       <div className="pt-8">
                         <button type="submit" className="w-full bg-cyber-purple hover:bg-cyber-purple/80 text-[#fff] font-orbitron font-bold py-4 md:py-5 rounded-full transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex justify-center items-center gap-4">
                           <span>{(t('checkout_auth_btn') as string) || 'AUTORIZAR UPLINK'}</span>
                           <ShieldCheck className="w-5 h-5"/>
                         </button>
                       </div>
                     </form>
                   ) : checkoutStep > 2 ? (
                      <div className="text-sm text-gray-400 font-mono bg-gray-50 dark:bg-black/20 p-4 rounded-md border border-gray-200 dark:border-cyber-border/30 flex items-center gap-3">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <p>{(t('checkout_cc_secure') as string) || 'Plataforma de red asegurada (Termina en 4092)'}</p>
                      </div>
                   ) : null}
                 </div>

                 {/* Checkout Accordion Step 3 */}
                 <div className={`border-t border-gray-200 dark:border-cyber-border/40 py-8 ${checkoutStep === 3 ? 'animate-fade-in-up' : 'opacity-40 pointer-events-none'}`}>
                   <h3 className={`font-orbitron text-lg tracking-wide ${checkoutStep === 3 ? 'text-black dark:text-white mb-6' : 'text-gray-500'}`}>{(t('checkout_step_3') as string) || '3. VERIFICACIÓN FINAL'}</h3>
                   
                   {checkoutStep === 3 && (
                     <div className="space-y-6">
                       <div className="text-sm text-gray-500 dark:text-gray-400 font-inter leading-relaxed bg-cyber-purple/5 p-4 rounded-md border border-cyber-purple/20">
                         {(t('checkout_terms_agree') as string) || 'Al confirmar esta transmisión, autorizas el despliegue de los activos tácticos a tus coordenadas físicas y aceptas incondicionalmente el Protocolo de Términos de Servicio de GLITHEX.'}
                       </div>
                       {submissionError && (
                         <p className="text-sm font-mono text-red-500 text-center">
                           {submissionError}
                         </p>
                       )}
                       <div className="pt-4">
                         <button
                           onClick={handleProcessCheckout}
                           disabled={isSubmittingOrder}
                           className="w-full bg-cyber-purple hover:bg-cyber-purple/80 disabled:opacity-70 disabled:cursor-not-allowed text-[#fff] font-orbitron font-bold py-4 md:py-5 rounded-full transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex justify-center items-center gap-4"
                         >
                           <span>
                             {isSubmittingOrder
                               ? t('checkout_submitting')
                               : (t('checkout_final_btn') as string) || 'CONFIRMAR TRANSMISIÓN'}
                           </span>
                           <ShieldCheck className="w-5 h-5"/>
                         </button>
                       </div>
                     </div>
                   )}
                 </div>
               </div>
            </div>

            {/* RIGHT PANE: Cart Logistics Summary */}
            <div className="w-full lg:w-[420px] bg-gray-100 dark:bg-[#12121A] border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-cyber-border/80 h-full flex flex-col pt-12 p-6 md:p-8 overflow-y-auto scrollbar-thin lg:shadow-[-10px_0_30px_rgba(0,0,0,0.02)] dark:lg:shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
              <h3 className="font-orbitron text-xl text-black dark:text-white mb-8 uppercase tracking-widest text-center">{(t('checkout_inventory_title') as string) || 'En tu Inventario'}</h3>
              
              <div className="space-y-4 mb-8 font-inter text-sm px-2">
                 <div className="flex justify-between text-gray-600 dark:text-gray-400">
                   <span>{(t('checkout_subtotal_label') as string) || 'Subtotal'}</span>
                   <span>€{cartTotal.toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between text-gray-600 dark:text-gray-400">
                   <span>{(t('checkout_shipping_label') as string) || 'Flete de Transferencia'}</span>
                   <span className="text-cyber-purple dark:text-cyber-cyan font-mono tracking-widest text-[11px] font-bold">0,00 €</span>
                 </div>
                 <div className="flex justify-between text-black dark:text-white font-bold text-xl border-t border-gray-300 dark:border-cyber-border/50 pt-5 mt-2">
                   <span className="font-orbitron">{(t('checkout_total_label') as string) || 'Total Físico'}</span>
                   <span>€{cartTotal.toFixed(2)}</span>
                 </div>
              </div>

              <div className="flex items-start gap-3 mb-10 text-cyber-purple dark:text-cyber-cyan bg-cyber-purple/10 dark:bg-cyber-purple/5 border border-cyber-purple/20 rounded-md p-4 text-xs font-mono leading-relaxed">
                <ShieldCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p>{(t('checkout_shipping_promise') as string) || 'Las redes de logística garantizan el despliegue lo antes posible.'}</p>
              </div>

              {/* Inline Asset Details */}
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-5 group items-center bg-white dark:bg-black/40 p-3 rounded-lg border border-gray-200 dark:border-transparent hover:border-cyber-purple/30 transition-all shadow-sm dark:shadow-none">
                    <div className="w-20 h-24 bg-gray-50 dark:bg-cyber-surface rounded-md border border-gray-200 dark:border-cyber-border overflow-hidden relative dark:shadow-[0_0_15px_rgba(139,92,246,0.05)] dark:group-hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all">
                      {item.image ? (
                        <img src={item.image} alt={t(item.nameKey as any) || item.nameKey} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-mono text-[10px] text-cyber-purple/50">{t('checkout_item_placeholder')}</div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="font-orbitron text-xs text-black dark:text-white uppercase leading-tight tracking-wider mb-2 line-clamp-2 pr-2">{t(item.nameKey as any) || item.nameKey}</h4>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest">{(t('checkout_qty') as string) || 'CANT'}: {item.quantity}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono mt-1 tracking-widest">{(t('checkout_size') as string) || 'TALLA'}: {item.size || t('checkout_not_available')}</p>
                      <span className="font-mono text-black dark:text-white text-sm font-bold mt-2">€{(item.price).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : isSuccess ? (
          
          /* =========================================
             2. CHECKOUT SUCCESS VIEW
             ========================================= */
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin flex flex-col items-center justify-center text-center space-y-6">
            <button onClick={handleClose} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors bg-transparent border-0">
              <X className="w-6 h-6" />
            </button>
            <div className="w-24 h-24 rounded-full bg-cyber-purple/10 dark:bg-cyber-purple/20 flex items-center justify-center border border-cyber-purple/50 shadow-[0_0_30px_rgba(139,92,246,0.1)] dark:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              <ShieldCheck className="w-12 h-12 text-cyber-purple animate-pulse" />
            </div>
            <div>
              <h3 className="font-orbitron text-3xl text-black dark:text-white mb-3">{(t('checkout_success_title') as string) || 'TRANSMISIÓN CONFIRMADA'}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-[320px] mx-auto leading-relaxed">{(t('checkout_success_desc') as string) || 'Tus coordenadas han sido asimiladas. Los activos tácticos están en ruta hacia tu localización.'}</p>
            </div>
            <div className="w-full pt-8 px-12">
              <NeonButton variant="purple" onClick={handleClose} className="w-full justify-center py-4 text-sm tracking-widest font-bold">
                {(t('checkout_back_system') as string) || 'VOLVER AL SISTEMA'}
              </NeonButton>
            </div>
          </div>
        ) : (
          
          /* =========================================
             3. DEFAULT CART SUMMARY STATE
             ========================================= */
          <div className="flex flex-col h-full bg-white dark:bg-cyber-black">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-cyber-border bg-gray-50 dark:bg-cyber-card flex-shrink-0">
              <div>
                <h2 className="font-orbitron font-bold text-xl text-black dark:text-white tracking-wider">
                  {t('shop_loadout')}
                </h2>
                <p className="font-mono text-xs text-cyber-purple dark:text-cyber-cyan tracking-[0.2em] mt-1">
                  ASSETS: {cart.reduce((s, i) => s + i.quantity, 0)}
                </p>
              </div>
              <button onClick={handleClose} className="p-2 text-gray-400 hover:text-cyber-purple transition-colors bg-transparent border-0 focus:outline-none">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                  <div className="w-16 h-16 border border-gray-300 dark:border-cyber-border rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-cyber-purple rounded-full animate-ping opacity-20" />
                    <span className="text-2xl">📡</span>
                  </div>
                  <p className="font-mono text-sm tracking-widest text-black dark:text-white">{t('checkout_empty')}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-gray-50 dark:bg-cyber-black border border-gray-200 dark:border-cyber-border rounded-lg group hover:border-cyber-purple/50 transition-colors shadow-sm dark:shadow-none">
                      <div className="w-24 h-28 bg-white dark:bg-cyber-surface border border-gray-200 dark:border-cyber-border rounded-md flex-shrink-0 relative overflow-hidden flex items-center justify-center transition-all group-hover:border-cyber-purple/30">
                        {item.image ? (
                          <img src={item.image} alt={t(item.nameKey as any) || item.nameKey} className="w-full h-full object-cover" />
                        ) : (
                          <span className="font-mono text-xs text-cyber-purple/50">{t('checkout_item_placeholder')}</span>
                        )}
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-orbitron text-sm text-black dark:text-white pr-2 leading-tight mb-1">{t(item.nameKey as any) || item.nameKey}</h4>
                            <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors bg-transparent border-0 p-1">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="flex gap-3 mt-1 items-center">
                            {item.color && (
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">{t('checkout_color_short')}:</span>
                                <div className="w-3 h-3 rounded-full border border-gray-300 dark:border-cyber-border" style={{ backgroundColor: item.color }} />
                              </div>
                            )}
                            {item.size && (
                              <div className="flex items-center gap-1.5 border-l border-gray-200 dark:border-cyber-border pl-3">
                                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">{t('checkout_size_short')}:</span>
                                <span className="text-xs text-black dark:text-white font-mono font-bold">{item.size}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2 border border-gray-200 dark:border-cyber-border rounded px-1.5 py-0.5 bg-white dark:bg-cyber-surface">
                            <button 
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="p-1 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white disabled:opacity-50"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-mono w-4 text-center text-black dark:text-white">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-mono text-black dark:text-white text-sm font-bold">
                            €{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Default State Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 dark:border-cyber-border bg-gray-50 dark:bg-cyber-card flex-shrink-0">
                <div className="p-4 border-b border-gray-200 dark:border-cyber-border/50">
                  <button onClick={() => setIsPromoOpen(!isPromoOpen)} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 hover:text-cyber-purple dark:hover:text-cyber-cyan transition-colors font-mono tracking-wide focus:outline-none w-full">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPromoOpen ? 'rotate-180 text-cyber-purple dark:text-cyber-cyan' : ''}`} />
                    {t('checkout_promo')}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isPromoOpen ? 'max-h-20 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex gap-2">
                      <input type="text" placeholder={t('checkout_promo_placeholder')} className="flex-1 bg-white dark:bg-cyber-black border border-gray-300 dark:border-cyber-border rounded px-3 py-2 text-black dark:text-white text-sm focus:border-cyber-purple dark:focus:border-cyber-cyan focus:outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600 font-mono uppercase" value={promoCode} onChange={(e) => setPromoCode(e.target.value.toUpperCase())} />
                      <button className="bg-gray-100 dark:bg-cyber-surface border border-gray-300 dark:border-cyber-border text-black dark:text-white px-4 py-2 rounded text-sm hover:border-cyber-purple dark:hover:border-cyber-cyan transition-colors font-orbitron">{t('checkout_apply')}</button>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">{t('checkout_subtotal')}</span>
                    <span className="text-black dark:text-white font-mono">€{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">{t('checkout_shipping_cost')}</span>
                    <span className="text-cyber-purple dark:text-cyber-cyan font-mono uppercase text-[11px] font-bold tracking-widest">{t('checkout_free')}</span>
                  </div>
                  <div className="flex items-center justify-between text-lg pt-2 border-t border-gray-200 dark:border-cyber-border/50 mt-2">
                    <span className="font-orbitron font-bold text-black dark:text-white">{t('checkout_total')}</span>
                    <span className="font-mono text-black dark:text-white font-bold text-xl">€{cartTotal.toFixed(2)}</span>
                  </div>

                  <div className="pt-4 space-y-3">
                    <button onClick={() => setIsCheckingOut(true)} className="w-full bg-cyber-purple hover:bg-cyber-purple/80 text-[#fff] font-orbitron font-bold py-4 md:py-5 rounded-full transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex justify-center items-center gap-4">
                      <span>{t('checkout_continue')}</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-gray-300 dark:border-cyber-border text-black dark:text-white hover:border-cyber-purple hover:bg-gray-50 dark:hover:bg-cyber-surface font-orbitron font-bold py-4 md:py-5 px-8 rounded-full transition-colors">
                      {t('checkout_paypal')}
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mono text-center pt-2 leading-relaxed">
                    {t('checkout_terms')}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
