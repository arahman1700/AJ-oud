interface IconProps {
  className?: string;
}

export function MadaIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="36" rx="6" fill="#1A1F71" />
      <circle cx="14" cy="18" r="4" fill="#48B74B" />
      <text x="34" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1">
        mada
      </text>
    </svg>
  );
}

export function VisaIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="36" rx="6" fill="#FFFFFF" />
      <text x="30" y="24" textAnchor="middle" fill="#1A1F71" fontSize="18" fontWeight="800" fontFamily="Arial, sans-serif" fontStyle="italic">
        VISA
      </text>
    </svg>
  );
}

export function MastercardIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="36" rx="6" fill="#FFFFFF" />
      <circle cx="24" cy="18" r="9" fill="#EB001B" />
      <circle cx="36" cy="18" r="9" fill="#F79E1B" />
      <path d="M30 10.6a9 9 0 0 1 0 14.8A9 9 0 0 1 30 10.6z" fill="#FF5F00" />
    </svg>
  );
}

export function ApplePayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="36" rx="6" fill="#000000" />
      {/* Apple logo simplified */}
      <path
        d="M18.8 12.2c-.5 0-1.1.3-1.5.7-.3.4-.6.9-.5 1.5.5 0 1.1-.3 1.4-.7.3-.4.6-.9.6-1.5zm.0 2.4c-.8 0-1.5.5-1.9.5s-1-.5-1.6-.5c-.8 0-1.6.5-2 1.3-.9 1.5-.2 3.7.6 4.9.4.6.9 1.3 1.5 1.2.6 0 .8-.4 1.6-.4.7 0 .9.4 1.6.4.6 0 1.1-.6 1.5-1.2.5-.7.7-1.4.7-1.4-.0-.0-1.3-.5-1.3-2 0-1.2 1-1.8 1-1.8-.5-.8-1.4-.9-1.7-.9z"
        fill="#FFFFFF"
      />
      <text x="38" y="23" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="600" fontFamily="Arial, sans-serif">
        Pay
      </text>
    </svg>
  );
}

export function GooglePayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="36" rx="6" fill="#FFFFFF" />
      {/* Colorful G */}
      <path d="M17 18c0-2.8 2.3-5 5.1-5 1.4 0 2.3.5 3 1.2l-1.2 1.2c-.5-.4-1-.8-1.8-.8-1.5 0-2.7 1.2-2.7 2.8s1.2 2.8 2.7 2.8c1.2 0 1.9-.5 2.1-1.1h-2.1v-1.5h4c0 .3.1.5.1.8 0 2.6-1.8 4.5-4.2 4.5-2.5-.0-4.5-1.9-4.5-4.3z" fill="#4285F4" />
      <text x="40" y="23" textAnchor="middle" fill="#5F6368" fontSize="12" fontWeight="500" fontFamily="Arial, sans-serif">
        Pay
      </text>
    </svg>
  );
}

export function TabbyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="36" rx="6" fill="#FFFFFF" />
      <text x="30" y="23" textAnchor="middle" fill="#3BFFC1" fontSize="14" fontWeight="800" fontFamily="Arial, sans-serif">
        tabby
      </text>
    </svg>
  );
}

export function TamaraIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="36" rx="6" fill="#FFFFFF" />
      <text x="30" y="23" textAnchor="middle" fill="#2E4057" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">
        tamara
      </text>
    </svg>
  );
}

export function AramexIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="36" rx="6" fill="#FFFFFF" />
      <text x="30" y="23" textAnchor="middle" fill="#E65100" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
        aramex
      </text>
    </svg>
  );
}

export function SMSAIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="36" rx="6" fill="#FFFFFF" />
      <text x="30" y="23" textAnchor="middle" fill="#0054A6" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">
        SMSA
      </text>
    </svg>
  );
}
