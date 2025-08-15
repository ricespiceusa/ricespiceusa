# Rice & Spice Website - Responsive Design Guide

## Overview
This document outlines the comprehensive responsive design implementation for the Rice & Spice website, ensuring optimal viewing experience across all device sizes and orientations.

## Responsive Breakpoints

### Mobile First Approach
The website follows a mobile-first design philosophy, starting with mobile styles and progressively enhancing for larger screens.

### Breakpoint System
```css
/* Extra Small devices (phones, 320px and down) */
@media (max-width: 320px)

/* Small devices (landscape phones, 576px and down) */
@media (max-width: 576px)

/* Medium devices (tablets, 768px and down) */
@media (max-width: 768px)

/* Large devices (desktops, 992px and down) */
@media (max-width: 992px)

/* Extra large devices (large desktops, 1200px and down) */
@media (max-width: 1200px)

/* Extra extra large devices (1400px and up) */
@media (min-width: 1400px)
```

## Responsive Features

### 1. Typography Scaling
- **Responsive Text Classes**: Use `text-responsive` for fluid typography
- **Heading Classes**: Use `heading-responsive` for scalable headings
- **Font Sizes**: Automatically adjust based on viewport width using `clamp()`

### 2. Layout Adaptations
- **Grid System**: Responsive grid with `responsive-grid-2`, `responsive-grid-3`, `responsive-grid-4`
- **Spacing**: Dynamic padding and margins using `padding-responsive` and `margin-responsive`
- **Container Sizing**: Flexible container widths with proper gutters

### 3. Navigation Responsiveness
- **Mobile Drawer**: Collapsible navigation for mobile devices
- **Breakpoint**: Switches from horizontal to vertical navigation at `lg` (992px)
- **Touch Targets**: Minimum 44px touch targets for mobile devices

### 4. Form Responsiveness
- **Field Layout**: Single column on mobile, two columns on larger screens
- **Input Density**: Compact density on mobile for better space utilization
- **Button Sizing**: Responsive button sizes with proper touch targets

## Component-Specific Responsiveness

### App.vue (Navigation)
- **Logo Size**: 40px on mobile, 50px on desktop
- **Title Display**: Full title on larger screens, abbreviated on mobile
- **Navigation Toggle**: Visible on mobile/tablet, hidden on desktop
- **Drawer Width**: 280px for optimal mobile experience

### Contact.vue
- **Form Layout**: Single column on mobile, optimized spacing
- **Card Padding**: Reduced padding on smaller screens
- **Hero Section**: Adjusted heights for different screen sizes
- **Contact Info**: Stacked layout on mobile, side-by-side on desktop

### Global Styles (main.css)
- **Section Padding**: Scales from 40px to 100px based on screen size
- **Hero Heights**: Responsive hero section heights
- **Menu Grid**: Adaptive grid columns (1 column on mobile, up to 4 on large screens)

## Touch Device Optimizations

### Touch Targets
- **Buttons**: Minimum 44px height and width
- **Chips**: Minimum 32px height with proper padding
- **Navigation Items**: Adequate spacing for touch interaction

### Hover Effects
- **Disabled on Touch**: Hover effects disabled on touch devices
- **Alternative Interactions**: Focus states and active states for touch
- **Gesture Support**: Touch-friendly scrolling and navigation

## Accessibility Features

### Reduced Motion
- **Animation Control**: Respects `prefers-reduced-motion` preference
- **Alternative Styles**: Static alternatives for motion-sensitive users
- **Performance**: Optimized animations for better performance

### Dark Mode Support
- **System Preference**: Automatically adapts to system dark mode
- **Color Contrast**: Maintains accessibility in both light and dark themes
- **Theme Switching**: Seamless transition between themes

## Performance Optimizations

### Font Loading
- **Preconnect**: DNS prefetch for external resources
- **Font Display**: Optimized font loading strategy
- **Fallback Fonts**: System font fallbacks for better performance

### Image Optimization
- **Responsive Images**: Different image sizes for different screen densities
- **Lazy Loading**: Images load only when needed
- **Format Support**: Modern image formats with fallbacks

## Browser Support

### Modern Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Legacy Support
- **IE11**: Basic functionality (limited CSS features)
- **Older Mobile**: Graceful degradation for older devices

## Testing Checklist

### Device Testing
- [ ] iPhone SE (320px)
- [ ] iPhone 12/13 (375px)
- [ ] iPhone 12/13 Pro Max (428px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1200px+)
- [ ] Large Desktop (1400px+)

### Orientation Testing
- [ ] Portrait mode on all devices
- [ ] Landscape mode on mobile devices
- [ ] Tablet rotation handling

### Interaction Testing
- [ ] Touch gestures on mobile
- [ ] Mouse interactions on desktop
- [ ] Keyboard navigation
- [ ] Screen reader compatibility

## CSS Utilities

### Responsive Classes
```css
.text-responsive          /* Fluid typography */
.heading-responsive       /* Scalable headings */
.padding-responsive       /* Dynamic padding */
.margin-responsive        /* Dynamic margins */
.responsive-grid-2       /* 2-column responsive grid */
.responsive-grid-3       /* 3-column responsive grid */
.responsive-grid-4       /* 4-column responsive grid */
```

### Breakpoint Helpers
```css
.d-none.d-sm-block       /* Hide on mobile, show on small+ */
.d-block.d-sm-none       /* Show on mobile, hide on small+ */
.text-h6.text-sm-h5      /* Smaller on mobile, larger on small+ */
```

## Best Practices

### 1. Mobile First
- Start with mobile styles
- Add complexity for larger screens
- Test on actual devices

### 2. Performance
- Minimize CSS and JavaScript
- Optimize images and fonts
- Use efficient selectors

### 3. Accessibility
- Maintain proper contrast ratios
- Support keyboard navigation
- Provide alternative text

### 4. User Experience
- Consistent interaction patterns
- Clear visual hierarchy
- Fast loading times

## Future Enhancements

### Planned Features
- **Service Worker**: Offline functionality
- **Push Notifications**: Location updates
- **Advanced Animations**: Smooth transitions
- **Voice Navigation**: Accessibility improvements

### Performance Goals
- **Lighthouse Score**: 90+ on all metrics
- **Load Time**: Under 3 seconds on 3G
- **Core Web Vitals**: All metrics in green

---

*This guide should be updated as new responsive features are added to the website.*
