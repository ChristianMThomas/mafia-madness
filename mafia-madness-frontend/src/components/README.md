# Mafia Madness Components

Quick reference for all custom components in the Midnight Intrigue design system.

## Available Components

### SpotlightEffect
Atmospheric cursor-following spotlight effect.

```jsx
import SpotlightEffect from './components/SpotlightEffect';

<SpotlightEffect enabled={true} intensity={0.6} />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| enabled | boolean | true | Enable/disable spotlight |
| intensity | number | 0.6 | Darkness intensity (0-1) |

---

### PlayerSilhouette
Noir-style player avatar component.

```jsx
import PlayerSilhouette from './components/PlayerSilhouette';

<PlayerSilhouette
  playerName="Agent Shadow"
  isEliminated={false}
  role="MAFIA"
  showRole={false}
  onClick={() => {}}
/>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| playerName | string | ✅ | Player's display name |
| isEliminated | boolean | ❌ | Show elimination state |
| role | string | ❌ | Player's role name |
| showRole | boolean | ❌ | Display role badge |
| onClick | function | ❌ | Click handler |

---

### DossierCard
Dramatic role reveal card with animations.

```jsx
import DossierCard from './components/DossierCard';

<DossierCard
  role="MAFIA"
  description="Your mission briefing..."
  onAcknowledge={() => {}}
  autoReveal={true}
/>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| role | string | ✅ | Role name (all caps) |
| description | string | ✅ | Role description |
| onAcknowledge | function | ❌ | Callback on acknowledge |
| autoReveal | boolean | ❌ | Auto-play animation |

---

### VotingSystem
Interactive voting interface with tension building.

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
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| players | array | ✅ | Array of {id, name} objects |
| onVoteComplete | function | ❌ | Callback with vote results |

---

## CSS Classes

### Buttons
```jsx
<button className="btn-primary">Primary Action</button>
<button className="btn-danger">Danger Action</button>
<button className="btn-ghost">Secondary Action</button>
```

### Cards
```jsx
<div className="glass-card p-6">
  Frosted glass card
</div>
```

### Inputs
```jsx
<input className="input-field" placeholder="Enter text..." />
```

### Player Cards (Lobby)
```jsx
<div className="player-card">
  Player Name
</div>
```

### Role Reveal
```jsx
<div className="role-reveal">
  YOUR ROLE: MAFIA
</div>
```

---

## Typography Classes

```jsx
{/* Display font - for headlines */}
<h1 className="font-display text-6xl tracking-wider">HEADLINE</h1>

{/* Body font - for content */}
<p className="font-body text-lg">Body text content</p>

{/* Monospace font - for codes */}
<span className="font-mono tracking-widest">CODE-123</span>
```

---

## Color Usage

```jsx
{/* Via inline styles */}
<div style={{
  background: 'var(--color-deep-noir)',
  color: 'var(--color-ice-blue)',
  borderColor: 'var(--color-gold-conspiracy)'
}}>
  Content
</div>
```

**Available CSS variables:**
- `--color-deep-noir`
- `--color-blood-orange`
- `--color-gold-conspiracy`
- `--color-slate-fog`
- `--color-ice-blue`
- `--color-shadow-purple`
- `--color-emerald-whisper`
- `--color-dark-slate`

---

## Animation Classes

Apply directly to elements:

```jsx
{/* Dissolve animation */}
<div className="player-silhouette eliminated">...</div>

{/* Pop in animation */}
<div className="player-card">...</div>

{/* Dossier flip */}
<div className="dossier-card flipping">...</div>
```

---

## Example Patterns

### Page with Spotlight
```jsx
import SpotlightEffect from './components/SpotlightEffect';

function MyPage() {
  return (
    <div style={{ background: 'var(--color-deep-noir)' }}>
      <SpotlightEffect enabled={true} />
      {/* Page content */}
    </div>
  );
}
```

### Player Grid
```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {players.map(player => (
    <PlayerSilhouette
      key={player.id}
      playerName={player.name}
      onClick={() => selectPlayer(player.id)}
    />
  ))}
</div>
```

### Modal with Glass Card
```jsx
<div className="modal-overlay">
  <div className="modal-content">
    <div className="glass-card p-8">
      <h2 className="font-display text-3xl mb-4"
          style={{ color: 'var(--color-gold-conspiracy)' }}>
        MODAL TITLE
      </h2>
      <p style={{ color: 'var(--color-ice-blue)' }}>
        Modal content...
      </p>
    </div>
  </div>
</div>
```

---

## Component Composition

Components are designed to work together:

```jsx
function GameRoom() {
  return (
    <div style={{ background: 'var(--color-deep-noir)' }}>
      <SpotlightEffect enabled={true} intensity={0.5} />

      <div className="glass-card p-8 max-w-6xl mx-auto">
        <h1 className="font-display text-5xl tracking-wider mb-8"
            style={{ color: 'var(--color-gold-conspiracy)' }}>
          GAME ROOM
        </h1>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {players.map(player => (
            <PlayerSilhouette
              key={player.id}
              playerName={player.name}
              isEliminated={player.eliminated}
              showRole={gameEnded}
              role={player.role}
            />
          ))}
        </div>

        <VotingSystem
          players={alivePlayers}
          onVoteComplete={handleVoteComplete}
        />
      </div>
    </div>
  );
}
```

---

## Tips

1. **Always use SpotlightEffect** on full-page views for atmosphere
2. **Combine glass-card with Tailwind padding** utilities (p-4, p-6, p-8)
3. **Use font-display for all headlines** to maintain the noir aesthetic
4. **Wrap forms in glass-card** for visual consistency
5. **Add hover states** to all interactive elements
6. **Test keyboard navigation** on all components
7. **Check contrast** when using custom colors

---

For more details, see `/DESIGN_SYSTEM.md`
