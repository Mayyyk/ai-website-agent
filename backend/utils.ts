import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add these typography constants
export const fontFamilies = [
  'System UI, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  'SF Pro Text, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  'Inter, sans-serif',
  'Arial, sans-serif',
  'Helvetica, sans-serif',
  'Roboto, sans-serif',
  'Open Sans, sans-serif',
  'Montserrat, sans-serif',
  'Poppins, sans-serif',
  'Georgia, serif',
  'Times New Roman, serif',
  'Playfair Display, serif',
  'Merriweather, serif',
  'Courier New, monospace',
  'SF Mono, monospace',
  'Fira Code, monospace',
  'JetBrains Mono, monospace',
] as const;

export const fontSizes = [
  '0.75vw',  // ~11px equivalent
  '0.875vw', // ~14px
  '1vw',     // ~16px
  '1.125vw', // ~18px
  '1.25vw',  // ~20px
  '1.5vw',   // ~24px
  '1.875vw', // ~30px
  '2vw',     // ~32px
  '2.25vw',  // ~36px
  '2.5vw',   // ~40px
  '3vw',     // ~48px
  '3.75vw',  // ~60px
  '4vw',     // ~64px
  '5vw',     // ~80px
  '6vw'      // ~96px
] as const;

export const fontWeights = ['400', '500', '600', '700'] as const;

export const letterSpacings = [
  '-0.015em',    // Apple main heading
  '-0.012em',    // Tight
  '-0.010em',    // Slightly tight
  '-0.008em',
  '-0.005em',
  '-0.003em',    // Apple Display style
  '-0.002em',
  '0',           // Normal
  '0.002em',
  '0.004em',
  '0.007em',     // Apple Headline
  '0.010em',
  '0.012em',     // Apple Caption
  '0.015em',     // Loose
  '0.020em',     // Very loose
  '0.025em'      // Extra loose
] as const;

export const lineHeights = [
  '1', '1.05', '1.1', '1.15', '1.2', '1.25', '1.3', '1.35', 
  '1.4', '1.45', '1.47059', '1.5', '1.6', '1.7', '1.75', '2'
] as const;


export const typographyPresets = {
  apple: {
    mainHeading: {
      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      fontSize: '96px',
      fontWeight: '700',
      letterSpacing: '-0.015em',
      lineHeight: '1.05',
      color: '#1d1d1f',
      maxWidth: '100%',
      className: 'w-full text-[5vw] font-bold leading-tight tracking-tight'
    },
    heading: {
      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      fontSize: '80px',
      fontWeight: '700',
      letterSpacing: '-0.015em',
      lineHeight: '1.05',
      color: '#1d1d1f',
      maxWidth: '90%',
      className: 'w-[90%] text-[4vw] font-bold leading-tight tracking-tight'
    },
    mainTitle: {
      fontFamily: 'SF Pro Display, system-ui, sans-serif',
      fontSize: '56px',
      fontWeight: '600',
      letterSpacing: '-0.015em',
      lineHeight: '1.1',
      color: '#1d1d1f',
      className: 'text-[56px] font-semibold leading-tight tracking-tight',
      maxWidth: '80%',
    },
    title: {
      fontFamily: 'SF Pro Display, system-ui, sans-serif',
      fontSize: '48px',
      fontWeight: '500',
      letterSpacing: '-0.015em',
      lineHeight: '1.05',
      color: '#1d1d1f',
      maxWidth: '75%',
      className: 'w-[75%] text-[2.5vw] font-medium leading-tight tracking-tight'
    },
    subtitle: {
      fontFamily: 'SF Pro Display, system-ui, sans-serif',
      fontSize: '32px',
      fontWeight: '500',
      letterSpacing: '-0.01em',
      lineHeight: '1.05',
      color: '#18181b',
      maxWidth: '70%',
      className: 'w-[70%] text-[2vw] font-medium leading-tight tracking-tight'
    },
    description: {
      fontFamily: 'SF Pro Text, system-ui, sans-serif',
      fontSize: '21px',
      fontWeight: '400',
      letterSpacing: 'normal',
      lineHeight: '1.4',
      color: '#52525b',
      className: 'text-xl font-normal leading-relaxed'
    },

    bodyText: {
      fontFamily: 'SF Pro Display, system-ui, sans-serif',
      fontSize: '28px',
      fontWeight: '400',
      letterSpacing: '-0.015em',
      lineHeight: '1.25',
      color: '#1d1d1f',
      marginBottom: '16px',
      maxWidth: '66%',
      className: 'w-[66%] text-[1.5vw] font-normal leading-snug tracking-tight'
    },
    body: {
      fontFamily: 'SF Pro Text, system-ui, sans-serif',
      fontSize: '17px',
      fontWeight: '400',
      letterSpacing: '0',
      lineHeight: '1.47059',
      color: '#1d1d1f',
      className: 'text-base font-normal leading-relaxed'
    },
    link: {
      fontFamily: 'SF Pro Text, system-ui, sans-serif',
      fontSize: '17px',
      fontWeight: '500',
      letterSpacing: 'normal',
      lineHeight: '1.4',
      color: '#0066CC',
      className: 'text-base font-medium leading-relaxed text-blue-600'
    },
    cta: {
      fontFamily: 'system-ui, sans-serif',
      fontSize: '20px',
      fontWeight: '500',
      letterSpacing: '-0.01em',
      lineHeight: '1.2',
      color: '#1d1d1f',
      className: 'text-lg font-medium leading-snug tracking-tight'
    },
    headline: {
      fontFamily: 'SF Pro Text, system-ui, sans-serif',
      fontSize: '21px',
      fontWeight: '600',
      letterSpacing: '0.007em',
      lineHeight: '1.47059',
      color: '#1d1d1f',
      className: 'text-xl font-semibold leading-relaxed tracking-wider'
    },
    callout: {
      fontFamily: 'SF Pro Text, system-ui, sans-serif',
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0',
      lineHeight: '1.47059',
      color: '#1d1d1f',
      className: 'text-base font-normal leading-relaxed'
    },
    subheadline: {
      fontFamily: 'SF Pro Text, system-ui, sans-serif',
      fontSize: '15px',
      fontWeight: '400',
      letterSpacing: '0',
      lineHeight: '1.47059',
      color: '#1d1d1f',
      className: 'text-sm font-normal leading-relaxed'
    },
    footnote: {
      fontFamily: 'SF Pro Text, system-ui, sans-serif',
      fontSize: '13px',
      fontWeight: '400',
      letterSpacing: '0',
      lineHeight: '1.47059',
      color: '#1d1d1f',
      className: 'text-xs font-normal leading-relaxed'
    },
    caption1: {
      fontFamily: 'SF Pro Text, system-ui, sans-serif',
      fontSize: '12px',
      fontWeight: '400',
      letterSpacing: '0.012em',
      lineHeight: '1.47059',
      color: '#1d1d1f',
      className: 'text-xs font-normal leading-relaxed tracking-wide'
    },
    caption2: {
      fontFamily: 'SF Pro Text, system-ui, sans-serif',
      fontSize: '11px',
      fontWeight: '400',
      letterSpacing: '0.012em',
      lineHeight: '1.47059',
      color: '#1d1d1f',
      className: 'text-[11px] font-normal leading-relaxed tracking-wide'
    }
  }
};

// Update the type definition to only use apple typography
export type TypographyStyle = keyof typeof typographyPresets.apple;

// Update spacing presets to use percentages
export const spacingPresets = {
  margin: {
    'none': '0%',
    'xs': '2%',
    'sm': '4%',
    'md': '8%',
    'lg': '12%',
    'xl': '16%',
    '2xl': '20%',
    '3xl': '24%'
  },
  padding: {
    'none': '0%',
    'xs': '2%',
    'sm': '4%',
    'md': '8%',
    'lg': '12%',
    'xl': '16%',
    '2xl': '20%',
    '3xl': '24%'
  },
  gap: {
    'none': '0%',
    'xs': '2%',
    'sm': '4%',
    'md': '8%',
    'lg': '12%',
    'xl': '16%',
    '2xl': '20%',
    '3xl': '24%'
  }
} as const;

// Add separate presets for whitespace and tabulation
export const whitespacePresets = {
  'none': '0',
  'tight': '0.5',
  'normal': '1',
  'relaxed': '1.5',
  'loose': '2'
} as const;

export const tabulationPresets = {
  'none': '0%',
  'small': '4%',
  'medium': '8%',
  'large': '12%',
  'xl': '16%'
} as const;

// Update default spacing to use the new presets
export const defaultSpacing = {
  margin: {
    card: spacingPresets.margin.lg,
    section: spacingPresets.margin['3xl'],
    text: spacingPresets.margin.md
  },
  padding: {
    card: spacingPresets.padding.xl,
    section: spacingPresets.padding['2xl'],
    text: spacingPresets.padding.lg
  },
  gap: {
    card: spacingPresets.gap.md,
    section: spacingPresets.gap.xl,
    text: spacingPresets.gap.sm
  },
  whitespace: {
    text: whitespacePresets.normal,
    heading: whitespacePresets.tight
  },
  tabulation: {
    text: tabulationPresets.none,
    list: tabulationPresets.medium
  }
} as const;

// Update dimension presets to use only percentages
export const dimensionPresets = {
  '25%': '25%',
  '33%': '33.333%',
  '50%': '50%',
  '66%': '66.667%',
  '75%': '75%',
  '100%': '100%'
} as const;

// Add text width presets
export const textWidthPresets = {
  'narrow': '50%',
  'medium': '75%',
  'wide': '100%'
} as const;

export type TextWidthSize = keyof typeof textWidthPresets;

// Add pricingBlocks definition
export const pricingBlocks = [
  {
    title: "Individual",
    price: "$19.95/mo.",
    saveAmount: "$9/mo.",
    description: "with your Business Pro Plan",
    priceColor: 'rgb(249, 115, 22)', // Matches orange-500
    buttonGradient: {
      from: 'from-orange-500',
      to: 'to-orange-600',
      hover: {
        from: 'hover:from-orange-600',
        to: 'hover:to-orange-700'
      }
    },
    features: [
      { name: "Scalable with your business", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
      { name: "Cloud based", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
      { name: "Pay as you go", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" },
      { name: "24/7 support", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }
    ]
  },
  {
    title: "Family",
    price: "$25.95/mo.",
    saveAmount: "$11/mo.",
    description: "with your Business Pro Plan",
    priceColor: 'rgb(236, 72, 153)', // Matches pink-500
    buttonGradient: {
      from: 'from-pink-500',
      to: 'to-pink-600',
      hover: {
        from: 'hover:from-pink-600',
        to: 'hover:to-pink-700'
      }
    },
    features: [
      { name: "Scalable with your business", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
      { name: "Cloud based", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
      { name: "Pay as you go", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" },
      { name: "24/7 support", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }
    ]
  },
  {
    title: "Premier",
    price: "$37.95/mo.",
    saveAmount: "$29/mo.",
    description: "with your Business Pro Plan",
    priceColor: 'rgb(168, 85, 247)', // Matches purple-500
    buttonGradient: {
      from: 'from-purple-500',
      to: 'to-purple-600',
      hover: {
        from: 'hover:from-purple-600',
        to: 'hover:to-purple-700'
      }
    },
    features: [
      { name: "Scalable with your business", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
      { name: "Cloud based", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
      { name: "Pay as you go", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" },
      { name: "24/7 support", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }
    ]
  }
];

// Add buttonPresets definition
export const buttonPresets = {
  'Primary': {
    className: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105",
    text: "Get Started",
    typography: typographyPresets.apple.cta
  }
} as const;

// Add width presets for different contexts
export const widthPresets = {
  text: {
    'narrow': '50%',
    'medium': '66%',
    'wide': '75%',
    'full': '100%'
  },
  container: {
    'small': '33%',
    'medium': '50%',
    'large': '66%',
    'wide': '75%',
    'full': '100%'
  },
  section: {
    'narrow': '66%',
    'medium': '75%',
    'wide': '90%',
    'full': '100%'
  }
} as const;

// Update types
export type DimensionSize = keyof typeof dimensionPresets;
export type TextWidth = keyof typeof widthPresets.text;
export type ContainerWidth = keyof typeof widthPresets.container;
export type SectionWidth = keyof typeof widthPresets.section;
