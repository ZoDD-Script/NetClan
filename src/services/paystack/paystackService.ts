export interface PaystackConfig {
  key: string;
  email: string;
  amount: number;
  currency: string;
  ref: string;
  metadata: {
    custom_fields: Array<{
      display_name: string;
      variable_name: string;
      value: string;
    }>;
  };
  callback: (response: PaystackResponse) => void;
  onClose: () => void;
}

export interface PaystackResponse {
  reference: string;
  status: string;
}

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: PaystackConfig) => { openIframe: () => void };
    };
  }
}

export interface PaystackPaymentData {
  publicKey: string;
  email: string;
  amount: number;
  currency?: string;
  metadata?: {
    custom_fields: Array<{
      display_name: string;
      variable_name: string;
      value: string;
    }>;
  };
  onSuccess: (response: PaystackResponse) => void;
  onClose?: () => void;
}

class PaystackService {
  private scriptLoaded = false;
  private scriptLoading = false;
  private loadPromise: Promise<void> | null = null;

  /**
   * Load the Paystack inline script
   */
  private async loadPaystackScript(): Promise<void> {
    if (this.scriptLoaded) {
      return Promise.resolve();
    }

    if (this.scriptLoading && this.loadPromise) {
      return this.loadPromise;
    }

    this.scriptLoading = true;
    this.loadPromise = new Promise((resolve, reject) => {
      // Check if script already exists
      const existingScript = document.querySelector(
        'script[src="https://js.paystack.co/v1/inline.js"]'
      );

      if (existingScript) {
        this.scriptLoaded = true;
        this.scriptLoading = false;
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.async = true;

      script.onload = () => {
        this.scriptLoaded = true;
        this.scriptLoading = false;
        resolve();
      };

      script.onerror = () => {
        this.scriptLoading = false;
        reject(new Error("Failed to load Paystack script"));
      };

      document.body.appendChild(script);
    });

    return this.loadPromise;
  }

  /**
   * Generate a unique reference for the transaction
   */
  private generateReference(): string {
    return `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
  }

  /**
   * Initialize and open Paystack payment popup
   */
  async initializePayment(data: PaystackPaymentData): Promise<void> {
    try {
      // Load Paystack script if not already loaded
      await this.loadPaystackScript();

      // Verify that PaystackPop is available
      if (!window.PaystackPop) {
        throw new Error(
          "Paystack script loaded but PaystackPop is not available"
        );
      }

      const config: PaystackConfig = {
        key: data.publicKey,
        email: data.email,
        amount: data.amount * 100, // Convert to kobo (smallest currency unit)
        currency: data.currency || "NGN",
        ref: this.generateReference(),
        metadata: data.metadata || { custom_fields: [] },
        callback: (response: PaystackResponse) => {
          data.onSuccess(response);
        },
        onClose: () => {
          if (data.onClose) {
            data.onClose();
          }
        },
      };

      const handler = window.PaystackPop.setup(config);
      handler.openIframe();
    } catch (error) {
      console.error("Error initializing Paystack payment:", error);
      throw error;
    }
  }

  /**
   * Verify a payment transaction (requires backend implementation)
   * This is a placeholder - actual verification should happen on your backend
   */
  // async verifyPayment(reference: string): Promise<boolean> {
  //   console.warn("Payment verification should be implemented on your backend");
  //   // In production, you would call your backend API here
  //   // Example: const response = await fetch(`/api/verify-payment/${reference}`);
  //   return true;
  // }
}

// Export a singleton instance
export const paystackService = new PaystackService();

// Export the class for testing or custom instances
export default PaystackService;
