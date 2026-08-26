export const colors = {
  background: '#14110E',
  surface: '#1E1913',
  surfaceAlt: '#262018',
  plaque: '#2A231A',
  plaqueBorder: '#6B5A3F',
  text: '#F2E8D5',
  textMuted: '#B8A98D',
  textFaint: '#7E715C',
  accent: '#C8A24A',
  accentSoft: '#8F7433',
  healthy: '#7FA05A',
  warning: '#D9A441',
  decay: '#D96C4F',
  decaySoft: '#8A4634',
  critical: '#C75B4A',
  resurrection: '#8FBF9F',
  border: '#3B3226',
  shadow: '#000000',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const radii = {
  sm: 8,
  md: 12,
  lg: 18,
  pill: 999,
};

export const typography = {
  display: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  plaque: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
  small: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500',
  },
};

export const shadows = {
  card: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.28,
    shadowRadius: 16,
    elevation: 8,
  },
  plaque: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.22,
    shadowRadius: 6,
    elevation: 3,
  },
};

export const layout = {
  screenPadding: spacing.lg,
  cardPadding: spacing.lg,
  cardGap: spacing.md,
  plaqueHeight: 86,
  decayMeterHeight: 8,
};

export const animation = {
  cardEnterDuration: 320,
  cardPressScale: 0.97,
  stagger: 40,
};

export const theme = {
  colors,
  spacing,
  radii,
  typography,
  shadows,
  layout,
  animation,
};

export default theme;