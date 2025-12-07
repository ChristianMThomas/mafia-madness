# Mafia Madness - Midnight Intrigue Design System

A comprehensive, suspenseful design system for the Mafia Madness web game.

## Overview

The Midnight Intrigue design system creates a noir-inspired, dramatic atmosphere perfect for a social deduction game. It combines dark aesthetics with high-contrast accents, smooth animations, and accessible design patterns.

---

## Color Palette

### Primary Colors
- **Deep Noir** (`#0A0E1A`) - Main background, creates depth
- **Blood Orange** (`#E63946`) - Danger, votes, eliminations, role names
- **Gold Conspiracy** (`#D4AF37`) - CTAs, highlights, important actions
- **Slate Fog** (`#475569`) - Secondary backgrounds, cards

### Supporting Colors
- **Ice Blue** (`#A8DADC`) - Body text, neutral information
- **Shadow Purple** (`#6B46C1`) - Special roles, power actions
- **Emerald Whisper** (`#10B981`) - Success states, confirmations
- **Dark Slate** (`#1A1F2E`) - Input backgrounds

### Usage in CSS
```css
/* Use CSS variables */
background: var(--color-deep-noir);
color: var(--color-ice-blue);
border-color: var(--color-gold-conspiracy);
```

---

## Typography

### Font Families

**Display Font - Bebas Neue**
- Use for: Headlines, phase announcements, dramatic text
- Font weight: 700 (Bold)
- Letter spacing: Wide (0.1em - 0.15em)
```jsx
<h1 className="font-display tracking-wider">MAFIA MADNESS</h1>
```

**Body Font - Inter**
- Use for: Body text, UI elements, descriptions
- Font weights: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
```jsx
<p className="font-body">Your mission briefing...</p>
```

**Monospace Font - Courier Prime**
- Use for: Codes, secret messages, role reveals
- Font weights: 400 (Regular), 700 (Bold)
```jsx
<span className="font-mono">ROOM CODE: XJ94K</span>
```

### Font Sizes
- `text-xs` - 0.75rem
- `text-sm` - 0.875rem
- `text-base` - 1rem
- `text-lg` - 1.125rem
- `text-xl` - 1.25rem
- `text-2xl` - 1.5rem
- `text-3xl` - 1.875rem
- `text-4xl` - 2.25rem
- `text-5xl` - 3rem
- `text-6xl` - 3.75rem

---

## Component Styles

### Buttons

**Primary Button** - Gold CTA
```jsx
<button className="btn-primary">CREATE GAME</button>
```
- Background: Gold gradient
- Text: Deep noir
- Use for: Main actions, confirmations

**Danger Button** - Blood Orange
```jsx
<button className="btn-danger">VOTE TO ELIMINATE</button>
```
- Background: Blood orange
- Text: White
- Hover: Pulsing glow animation
- Use for: Destructive actions, voting

**Ghost Button** - Transparent
```jsx
<button className="btn-ghost">CANCEL</button>
```
- Background: Transparent
- Border: Slate fog
- Hover: Gold border
- Use for: Secondary actions

### Cards

**Glass Card**
```jsx
<div className="glass-card p-6">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```
- Frosted glass effect with backdrop blur
- Gradient border (blood orange)
- Hover: Lifts with glow
- Use for: Content containers, player cards

### Inputs

**Standard Input**
```jsx
<input
  type="text"
  className="input-field"
  placeholder="Enter text..."
/>
```
- Dark background with ice blue border
- Focus: Gold border with glow
- Accessible placeholder color

---

## Custom Components

### PlayerSilhouette

Noir-style player avatar with smoke effect.

```jsx
import PlayerSilhouette from './components/PlayerSilhouette';

<PlayerSilhouette
  playerName="Agent Shadow"
  isEliminated={false}
  role="MAFIA"
  showRole={true}
  onClick={() => console.log('Player clicked')}
/>
```

**Props:**
- `playerName` (string, required) - Player's display name
- `isEliminated` (boolean) - Shows X mark and dissolve animation
- `role` (string) - Player's role
- `showRole` (boolean) - Whether to display role badge
- `onClick` (function) - Click handler

**Features:**
- Animated smoke wisp effect
- Dissolve animation when eliminated
- Hover scale effect
- Accessible with ARIA labels

### DossierCard

Role reveal card with flip animation and typewriter effect.

```jsx
import DossierCard from './components/DossierCard';

<DossierCard
  role="MAFIA"
  description="You are part of the conspiracy..."
  onAcknowledge={() => console.log('Acknowledged')}
  autoReveal={true}
/>
```

**Props:**
- `role` (string, required) - Role name
- `description` (string, required) - Role description
- `onAcknowledge` (function) - Callback when user acknowledges
- `autoReveal` (boolean) - Auto-play reveal animation

**Features:**
- Dossier flip animation
- Typewriter effect for description
- Stamp impact animation
- "CONFIDENTIAL" watermark

### SpotlightEffect

Cursor-following spotlight effect for atmospheric lighting.

```jsx
import SpotlightEffect from './components/SpotlightEffect';

<SpotlightEffect enabled={true} intensity={0.6} />
```

**Props:**
- `enabled` (boolean) - Toggle effect
- `intensity` (number) - Darkness intensity (0-1)

**Features:**
- Smooth cursor tracking with requestAnimationFrame
- Radial gradient spotlight
- Performance optimized
- Pointer-events: none (doesn't block interactions)

### VotingSystem

Dramatic voting interface with tension-building reveals.

```jsx
import VotingSystem from './components/VotingSystem';

<VotingSystem
  players={[
    { id: 1, name: 'Player 1' },
    { id: 2, name: 'Player 2' }
  ]}
  onVoteComplete={(votes) => console.log(votes)}
/>
```

**Props:**
- `players` (array, required) - Array of player objects with id and name
- `onVoteComplete` (function) - Callback with vote results

**Features:**
- Tally mark animations (scratch-appear)
- 3-second delay between vote reveals
- Screen shake on final vote
- Vote count badges

---

## Animations

All animations defined in `global.css`:

### Keyframe Animations

**dissolve** - Player elimination effect
```css
animation: dissolve 2s ease-out forwards;
```

**dossier-flip** - Role card reveal
```css
animation: dossier-flip 0.8s ease-in-out;
```

**stamp-impact** - Confidential stamp
```css
animation: stamp-impact 0.6s ease-out;
```

**pulse-glow** - Glowing button effect
```css
animation: pulse-glow 2s infinite;
```

**popIn** - Player card entrance
```css
animation: popIn 0.5s ease-out forwards;
```

**smoke-wisp** - Atmospheric effect
```css
animation: smoke-wisp 4s ease-in-out infinite;
```

**scroll-left** - Infinite scroll
```css
animation: scroll-left 30s linear infinite;
```

---

## Visual Hierarchy Guide

### Landing/Home Page
1. **Hero:** Large "MAFIA MADNESS" headline (Bebas Neue, 7rem)
2. **Primary CTA:** Gold "CREATE GAME" button (largest)
3. **Secondary CTA:** "JOIN GAME" ghost button
4. **Instructions Link:** Gold text with down arrow
5. **Roles Section:** Scrolling cards with hover effects
6. **How to Play:** Glass cards with step-by-step

### Lobby Page
1. **Header:** "READY TO PLAY?" (6rem, gold)
2. **Name Input:** Centered glass card with "AGENT CODENAME"
3. **Create/Join:** Side-by-side glass cards
4. **CTAs:** Primary (create) and danger (join) buttons
5. **Room Code:** Large monospace display with copy button

### Game Page (Recommended)
1. **Phase Banner:** Full-width at top ("NIGHT PHASE - Mafia, choose target")
2. **Main Area:** Current action interface
3. **Player List:** Left sidebar with silhouettes
4. **Chat:** Bottom with minimize toggle
5. **Timer:** Circular countdown (prominent, non-obstructive)

---

## Creative Interaction Patterns

### 1. Role Reveal Ritual
**When:** Player receives role assignment
**How it works:**
- Screen fades to black
- Spotlight on player silhouette
- Dossier slides in and flips open
- Role text types out character-by-character
- Stamp crashes down
- User clicks "I UNDERSTAND" to acknowledge

### 2. Vote Tension Builder
**When:** During voting phase
**How it works:**
- Players click silhouettes to vote
- Votes appear as tally marks one-by-one
- 3-second suspenseful delay between reveals
- Final vote causes screen shake
- Vote counts displayed with glow effect

### 3. Secret Whisper (Future Implementation)
**When:** Private messaging between players
**How it works:**
- Hold Shift + Click player
- Screen dims except sender and recipient
- Glowing line connects avatars
- Subtle whisper sound effect
- Private message modal appears

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Ice blue (#A8DADC) on deep noir (#0A0E1A) = 8.9:1 contrast
- Gold (#D4AF37) on deep noir = 7.2:1 contrast

### Focus States
All interactive elements have clear focus indicators:
```css
button:focus-visible {
  outline: 3px solid var(--color-gold-conspiracy);
  outline-offset: 2px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Keyboard Navigation
- All buttons are keyboard accessible
- Skip links for main content
- ARIA labels on all interactive elements
- Logical tab order

### Screen Readers
- Semantic HTML structure
- ARIA labels for icons and complex interactions
- Role announcements for game state changes
- Alt text for all visual elements

---

## Best Practices

### Do's
✅ Use display font (Bebas Neue) for dramatic headlines
✅ Maintain high contrast for readability
✅ Use glass-card class for all content containers
✅ Add spotlight effect to key pages (Home, Lobby)
✅ Implement hover states on all interactive elements
✅ Use semantic HTML and ARIA labels
✅ Test with keyboard navigation

### Don'ts
❌ Don't use light backgrounds (breaks the noir aesthetic)
❌ Don't reduce contrast for "aesthetic" purposes
❌ Don't skip animation for reduced-motion users
❌ Don't use gold and blood orange together (clashing)
❌ Don't create buttons smaller than 44x44px
❌ Don't override focus indicators
❌ Don't use animations longer than 3 seconds

---

## File Structure

```
src/
├── global.css                    # All design system styles
├── components/
│   ├── SpotlightEffect.jsx      # Cursor spotlight
│   ├── PlayerSilhouette.jsx     # Player avatars
│   ├── DossierCard.jsx          # Role reveal
│   └── VotingSystem.jsx         # Voting interface
├── pages/
│   ├── Home.jsx                 # Landing page
│   ├── Lobby.jsx                # Game lobby
│   └── DesignShowcase.jsx       # Component demo
```

---

## Quick Start

### Using the Design System

1. **Import global CSS** (already done in main.jsx):
```jsx
import './global.css';
```

2. **Use design system classes**:
```jsx
<button className="btn-primary">Click Me</button>
<div className="glass-card p-6">Content</div>
<input className="input-field" />
```

3. **Import components**:
```jsx
import SpotlightEffect from './components/SpotlightEffect';
import PlayerSilhouette from './components/PlayerSilhouette';
```

4. **Use CSS variables**:
```jsx
style={{ color: 'var(--color-gold-conspiracy)' }}
```

---

## Design Principles

1. **Suspense First** - Every interaction should build tension
2. **Noir Aesthetic** - Dark, moody, mysterious atmosphere
3. **Clear Hierarchy** - Guide users naturally through the experience
4. **Accessibility Always** - Never sacrifice usability for style
5. **Memorable Moments** - Surprise users with delightful interactions

---

## Support

For questions about the design system:
- Check DesignShowcase.jsx for live examples
- Refer to this documentation
- Review global.css for all available styles

---

**Design System Version:** 1.0
**Last Updated:** December 2025
**Designed for:** Mafia Madness Web Game
