# Modernization review

Baseline: production release `v1.0`, commit `814c461de70a6d965ea083528a25705757edf2a3`.

The homepage now explains the translation immediately, pairs it with the actual publication, and provides a direct Bible.com reading action. The existing bilingual Scripture follows on a dark surface. Six routes are represented by source photographs with selectable text captions. Shared navigation uses Radix Navigation Menu and Dialog, the interaction primitives available in the shadcn ecosystem.

Library review: [awesome-shadcn-ui](https://github.com/birobirobiro/awesome-shadcn-ui) is a catalogue; [Magic UI](https://github.com/magicuidesign/magicui) supplies optional effects. The implementation selects navigation primitives for functional value. No animation dependency is needed for the current design. TimelineJS and the captioned historical video remain intact.

## Verification before publishing

- ESLint and static production build passed.
- Eleven content routes checked at 390px and 1440px: one H1, no horizontal overflow, no broken loaded images.
- Homepage also checked at 320px without horizontal overflow.
- Desktop menu groups are exclusive; Escape dismisses them.
- Mobile sheet traps keyboard focus, restores focus after Escape, and closes when navigating.
- TimelineJS rendered ten event markers at both tested widths.
- Independent visual review covered homepage desktop/mobile, mobile navigation, gallery, and About desktop/mobile.
- Review found a lecturer photo cropped at the face; top focal positioning corrected it and the reviewer confirmed resolution.
- Contact delivery implementation and historical video captions are unchanged.

`DESIGN.md` and its sidecar describe the implemented design. The `v1.0` tag remains the source rollback checkpoint; deploy its referenced commit through the existing Vercel project to restore that version.
