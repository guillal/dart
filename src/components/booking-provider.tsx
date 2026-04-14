"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { PopupModal } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/guillemarcaf/30min";

interface BookingContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Calendly's PopupModal requires a real DOM element — only available on the client
    setRootElement(document.body);
  }, []);

  return (
    <BookingContext.Provider
      value={{
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        isOpen,
      }}
    >
      {children}
      {rootElement && (
        <PopupModal
          url={CALENDLY_URL}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
          pageSettings={{
            backgroundColor: "000000",
            textColor: "ffffff",
            primaryColor: "ffde00",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            hideGdprBanner: false,
          }}
        />
      )}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}
