---
name: "Pyongyang Bible Institute"
description: "A documentary, bilingual field guide to Scripture in modern North Korean diction."
colors:
  sky: "#79d5ef"
  sky-deep: "#0d7695"
  mist: "#eefafd"
  ink: "#17191a"
  muted: "#596267"
  line: "#d9e3e7"
  paper: "#ffffff"
  blue-black: "#0b252e"
typography:
  display:
    fontFamily: "SF Pro Display, SF Pro Text, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, Apple SD Gothic Neo, sans-serif"
    fontSize: "clamp(2.5rem, 4.45vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  headline:
    fontFamily: "SF Pro Display, SF Pro Text, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, Apple SD Gothic Neo, sans-serif"
    fontSize: "clamp(2.05rem, 3.45vw, 3.1rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  title:
    fontFamily: "SF Pro Display, SF Pro Text, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, Apple SD Gothic Neo, sans-serif"
    fontSize: "clamp(1.7rem, 2.55vw, 2.3rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Poppins, Helvetica Neue, Arial, Apple SD Gothic Neo, sans-serif"
    fontSize: "clamp(1rem, calc(1rem + 0.36vw), 1.325rem)"
    fontWeight: 300
    lineHeight: 1.8
    letterSpacing: "normal"
  label:
    fontFamily: "Ubuntu Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.05em"
  verse:
    fontFamily: "SF Pro Display, SF Pro Text, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, Apple SD Gothic Neo, sans-serif"
    fontSize: "clamp(1.5rem, 1.86vw, 1.672rem)"
    fontWeight: 500
    lineHeight: 1.36
    letterSpacing: "normal"
  citation:
    fontFamily: "SF Pro Display, SF Pro Text, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, Apple SD Gothic Neo, sans-serif"
    fontSize: "clamp(1.1rem, 1.51vw, 1.357rem)"
    fontWeight: 300
    lineHeight: 1.8
    letterSpacing: "normal"
rounded:
  square: "0"
  crisp: "2px"
spacing:
  shell-gutter: "4vw"
  shell-gutter-mobile: "6vw"
  grid-tight: "1.05vw"
  action-gap: "1.25rem"
  section-block: "clamp(5rem, 10vw, 9rem)"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.crisp}"
    padding: "0.75rem 1.1rem"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.crisp}"
    padding: "0.75rem 1.1rem"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.sky-deep}"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "0.8rem 0.9rem"
  navigation-popover:
    backgroundColor: "{colors.blue-black}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "0.75rem"
    width: "270px"
  info-card:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "clamp(2rem, 4vw, 3.5rem)"
  scripture-pair:
    backgroundColor: "{colors.blue-black}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "clamp(3rem, 7vw, 6rem) clamp(2rem, 5vw, 5rem)"
---

# Design System: Pyongyang Bible Institute

## Overview

**Creative North Star: "The Bilingual Field Guide"**

The interface feels like an archival field guide for living translation work: documentary, precise, and grounded rather than campaign-polished. The translation leads, with real photographs, book-cover silhouettes, and side-by-side English/Korean passages carrying proof before any invitation to support.

White paper, blue-black fields, sky-blue panels, and crisp rules build a clear editorial hierarchy. Density is generous but purposeful: long-form reading has room to breathe, while navigation, labels, and citations stay compact and exact.

**Key Characteristics:**

- Documentary imagery acts as evidence, not decoration.
- Bilingual content receives equal visual authority.
- Crisp zero-to-two-pixel edges, restrained lift, and broad editorial spacing define the form.
- Translation purpose precedes read, pray, support, and contact actions.

## Colors

The palette pairs open-sky optimism with deep archival ink, using mist and paper to keep long-form ministry content calm and legible.

### Primary

- **Open Sky** (`#79d5ef`): Carries the Korean half of paired Scripture, important headings on dark fields, image underlays, selection color, and restrained interactive accents.
- **River Blue** (`#0d7695`): Marks links, focus outlines, timeline dates, and full-width calls to action where stronger contrast is required.

### Neutral

- **Translation Mist** (`#eefafd`): Creates quiet section fields, interior heroes, and informational cards without introducing a separate hue family.
- **Proof Ink** (`#17191a`): Provides the primary text color and the dark action surface.
- **Editorial Slate** (`#596267`): Supports secondary copy, helper text, and team roles.
- **Archive Rule** (`#d9e3e7`): Separates specifications, timelines, profiles, and publication rows with crisp one-pixel rules.
- **Paper** (`#ffffff`): Is the reading surface, light-button surface, and reverse text color.
- **Deep Archive** (`#0b252e`): Anchors Scripture panels, navigation popovers, mission fields, and image-backed fallbacks.

### Named Rules

**The Sky as Signal Rule.** Use the sky family to identify translation content, active pathways, and ministry calls to action; its clarity depends on leaving most reading surfaces neutral.

**The Ink-and-Paper Rule.** Long-form passages stay on high-contrast paper or deep-archive fields, never on decorative mid-tone surfaces.

## Typography

**Display and Copy Font:** SF Pro Display/Text where available, with the source site's Apple system, Helvetica, Arial, and Korean system fallbacks

**Body and UI Font:** Poppins, locally bundled at the source weights
**Navigation Font:** Ubuntu Condensed, locally bundled at weight 400

**Character:** The original site pairs neutral SF-compatible editorial copy with Poppins UI text and narrow uppercase Ubuntu Condensed navigation. English and Korean Scripture use the same copy stack and equal visual authority.

### Hierarchy

- **Display** (500, `clamp(2.5rem, 4.45vw, 4rem)`, 1.3): Leads interior heroes within a 16-character measure (`16ch`).
- **Headline** (500, `clamp(2.05rem, 3.45vw, 3.1rem)`, 1.3): Opens major sections within a 22-character measure (`22ch`).
- **Title** (500, `clamp(1.7rem, 2.55vw, 2.3rem)`, 1.3): Names subsections and publication records; compact team names use the source-derived `1.2rem` step.
- **Body** (300, `clamp(1rem, calc(1rem + 0.36vw), 1.325rem)`, 1.8): Reproduces the source's fluid 20–21px desktop reading size.
- **Verse** (500, `clamp(1.5rem, 1.86vw, 1.672rem)`, 1.36): Preserves the archived bilingual homepage measure and line count.
- **Label** (400, `1.1rem`, `0.05em`, uppercase): Identifies desktop navigation groups in Ubuntu Condensed.

### Named Rules

**The Shared-Scripture Rule.** English and Korean Scripture use the same copy stack and receive equal weight; language distinction comes from content and layout, not novelty fonts.

**The Short-Headline Rule.** Preserve the `13ch` display and `17ch` headline measures so large type reads as an assertion rather than a paragraph.

## Layout

The core reading shell follows the Squarespace source: a 1400px cap with 4vw desktop side gutters (`width: min(1400px, 92vw)`). Full-bleed color and media fields wrap this shell, producing an editorial rhythm of expansive backgrounds and disciplined content columns.

Primary storytelling uses two-column grids with source-specific photo widths and intrinsic proportions. The homepage gallery is three 4:3 columns with a 1.05vw gutter; team photography uses a 3:4 crop in a source-derived 3:2:2:2:2 track ratio; publication entries use portrait covers without stretching them beyond their source geometry. Major sections retain the established fluid block rhythm (`clamp(5rem, 10vw, 9rem)`).

At 960px, the desktop navigation becomes a compact menu and complex layouts simplify. At 700px, content becomes single-column, shell gutters become 6vw, the source text-only mobile wordmark replaces the desktop logo, homepage gallery photography becomes two columns, and reversed stories return to reading order.

## Elevation & Depth

The system is flat by default and uses elevation only to clarify a floating control, navigational layer, book object, or documentary frame. Light buttons use a soft neutral lift (`0 9px 22px rgb(0 0 0 / 12%)`); dark buttons use a blue-black lift (`0 9px 22px rgb(11 37 46 / 15%)`); navigation popovers use a broader ambient shadow (`0 18px 40px rgb(11 37 46 / 20%)`, strengthening to 24% in the mobile menu). Interior photographs use a directional frame shadow (`20px 24px 42px rgb(11 37 46 / 14%)`), while book covers use object-shaped drop shadows (`14px 18px 12px rgb(11 37 46 / 18%)`).

### Shadow Vocabulary

- **Light action lift** (`0 9px 22px rgb(0 0 0 / 12%)`): Separates white actions from photographic or colored fields.
- **Dark action lift** (`0 9px 22px rgb(11 37 46 / 15%)`): Gives dark primary actions enough presence on light reading surfaces.
- **Popover ambient** (`0 18px 40px rgb(11 37 46 / 20%)`): Establishes navigation as a temporary layer.
- **Documentary frame** (`20px 24px 42px rgb(11 37 46 / 14%)`): Lifts major editorial photography while preserving its rectangular edge.
- **Book object** (`drop-shadow(14px 18px 12px rgb(11 37 46 / 18%))`): Describes the silhouette of publication covers instead of shadowing their boxes.

### Named Rules

**The Flat-by-Default Rule.** Sections, cards, fields, and records remain flat at rest; shadows appear only when layer, state, or object silhouette needs explanation.

## Shapes

The form language is deliberately rectangular. Inputs and content cards use square corners (`0`), buttons and floating motion controls use a nearly square two-pixel corner (`2px`), and one-pixel dividers do most of the structural work. The only recurring organic shape is the blurred oval beneath the staged book; it belongs to object lighting, not interface chrome.

**The No-Pill Rule.** Do not introduce pill-shaped buttons, badges, or navigation when the incumbent system communicates action with crisp rectangular silhouettes.

## Components

### Buttons

Buttons are compact, sturdy, and lightly lifted rather than oversized or rounded.

- **Shape:** Nearly square corners (`2px`) with a minimum touch height (`48px`) and compact internal padding (`0.75rem 1.1rem`).
- **Primary:** Proof Ink on Paper with the dark action lift.
- **Light:** Paper on Proof Ink with the light action lift for dark, blue, and photographic fields.
- **Hover / Focus:** Hover translates upward by two pixels over `180ms ease-out`; keyboard focus uses a three-pixel River Blue outline with a four-pixel offset.
- **Motion control:** Uses a translucent deep-archive field, a 55%-white border, and the same crisp corner. It disappears with the background video on small or reduced-motion surfaces.

### Cards / Containers

Cards feel like pages, records, or photographic plates rather than floating dashboard widgets.

- **Corner Style:** Square (`0`), including feature tiles, publication rows, team cards, and informational asides.
- **Background:** Paper for records, Translation Mist for asides, Deep Archive for image tiles and mission fields.
- **Shadow Strategy:** Flat for content containers; only media objects and book covers lift.
- **Border:** One-pixel Archive Rule dividers, or one-pixel grid gaps that expose the rule color beneath.
- **Internal Padding:** Fluid editorial padding, commonly `clamp(2rem, 4vw, 3.5rem)` or `clamp(2rem, 5vw, 4rem)`.

### Inputs / Fields

- **Style:** White fill, square corners (`0`), a one-pixel cool-gray stroke (`#aebdc3`), and `0.8rem 0.9rem` internal padding.
- **Focus:** Three-pixel River Blue outline with a four-pixel offset; the global focus treatment remains visible outside the field edge.
- **Textarea:** Keeps the same field language, begins at 180px tall, and resizes vertically.

### Navigation

The sticky header is a compact white wordmark bar with thin separation. Desktop group labels are uppercase Ubuntu Condensed (`1.1rem`, 400, `0.05em`) and reveal a 270px Deep Archive popover; links remain white until hover brings in Open Sky and a 14%-sky background. At 960px the menu becomes a 48px hamburger target and a full-width, three-column dark panel; at 700px that panel becomes one column.

### Text Links

Inline links use River Blue and a 700 weight with a visibly offset underline (`0.22em`). On dark surfaces they reverse to Paper. Directional arrows and external-link marks are textual, preserving the field-guide tone.

### Bilingual Scripture Pair

The signature Scripture component gives English and Korean equal columns and generous paired padding (`clamp(3rem, 7vw, 6rem) clamp(2rem, 5vw, 5rem)`). The English panel is Deep Archive on Paper; the Korean panel is Open Sky on Proof Ink. At 700px the pair stacks while the Korean field extends full-bleed, preserving both equality and reading order.

## Do's and Don'ts

### Do:

- **Do** let real Scripture, publications, and documentary images provide the visual proof.
- **Do** preserve the Open Sky, River Blue, Deep Archive, Paper, and Proof Ink relationships across new surfaces.
- **Do** keep English and Korean passages equally prominent when they appear together.
- **Do** use broad fluid section spacing and short headline measures to make long-form content easy to scan.
- **Do** honor reduced-motion preferences by removing nonessential transitions and substituting the still hero image.

### Don't:

- **Don't** replace the first-view translation story with a generic charity appeal or a row of interchangeable appeal cards.
- **Don't** introduce rounded pills, soft dashboard cards, or decorative gradients that weaken the archival field-guide form.
- **Don't** scatter sky blue as ornament; reserve it for translation content, interaction, and intentional ministry emphasis.
- **Don't** invent a second type personality for Korean content or reduce it to supporting-caption scale.
- **Don't** add shadows to ordinary reading sections, fields, or record cards.
