

# Header Refactor Plan

## Current Issue
The header has a two-row design:
1. **Top bar** - Contains phone number with dark background
2. **Main navigation** - Logo, nav links, and CTA button

This makes the header taller and feels less streamlined.

## Proposed Changes

### New Compact Header Design

A single-row header that combines everything into one clean line:

```text
+------------------------------------------------------------------+
| [Logo]  Home | About | Services | Gallery | ... | [Phone] [CTA] |
+------------------------------------------------------------------+
```

### Layout Structure

**Desktop (lg and up):**
- Logo on the left
- Navigation links in the center
- Phone number and "Get a Free Estimate" button grouped on the right

**Mobile:**
- Logo on the left
- Hamburger menu on the right
- Expanded menu shows nav links, phone number, and CTA button

### Specific Changes

1. **Remove the top bar** - Delete the separate dark bar with phone number
2. **Reduce vertical padding** - Make the header more compact (py-3 instead of py-4)
3. **Add phone to right side** - Place clickable phone link next to the CTA button on desktop
4. **Keep logo size** - Maintain current logo height for brand recognition
5. **Mobile menu update** - Include phone number in the mobile dropdown

### Visual Style
- Clean white/card background with subtle shadow
- Phone number styled as a subtle link with phone icon
- CTA button remains prominent (green primary color)
- Smaller gap between nav items (gap-6 instead of gap-8)

---

## Technical Details

**File to modify:** `src/components/Header.tsx`

**Key changes:**
- Remove lines 33-41 (top bar div)
- Restructure the right side to include both phone link and CTA button
- Adjust container padding for compactness
- Update mobile menu to include phone number

