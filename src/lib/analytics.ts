// Google Analytics & Clarity helpers
export const trackGAEvent = (action: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params);
  }
};

export const trackClarityEvent = (event: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('track', event, data);
  }
};