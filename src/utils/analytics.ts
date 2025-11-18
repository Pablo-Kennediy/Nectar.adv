// Google Analytics 4 Event Tracking
export const trackWhatsAppClick = (source: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_lead_principal', {
      event_category: 'Conversão',
      event_label: source,
      value: 1
    });
  }
};

export const trackTemplateView = (templateName: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'template_view', {
      event_category: 'Engajamento',
      event_label: templateName,
      value: 1
    });
  }
};

export const trackLicensePageView = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'license_page_view', {
      event_category: 'Conversão',
      event_label: 'Página de Licença',
      value: 1
    });
  }
};
