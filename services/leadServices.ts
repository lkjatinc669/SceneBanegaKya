// services/leadService.ts
import clientSupabase from "@/browser-client/clientSupabase";

const supabase = clientSupabase();

export interface ContactLeadPayload {
  source: 'contact_page';
  name: string;
  emailOrPhone: string; // Dynamic field handling user choice
  serviceType: string;
  message: string;
}

export interface FooterLeadPayload {
  source: 'footer';
  email: string;
}

export const leadService = {
  // Dispatches rich payload from the primary contact node
  async submitContactForm(payload: ContactLeadPayload) {
    const isEmail = payload.emailOrPhone.includes('@');
    
    const { data, error } = await supabase
      .from('leads')
      .insert([{
        source: payload.source,
        name: payload.name,
        email: isEmail ? payload.emailOrPhone : 'provided_via_phone@fallback.com',
        phone: !isEmail ? payload.emailOrPhone : null,
        service_type: payload.serviceType,
        message: payload.message
      }]);

    if (error) throw error;
    return data;
  },

  // Dispatches minimal email footprint from the footer module
  async submitFooterForm(payload: FooterLeadPayload) {
    const { data, error } = await supabase
      .from('leads')
      .insert([{
        source: payload.source,
        email: payload.email
      }]);

    if (error) throw error;
    return data;
  }
};