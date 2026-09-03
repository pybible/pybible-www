# Squarespace source snapshot

Captured from `https://www.pybible.org` on 2026-09-02 before the site is
disconnected from Squarespace.

- `html/` contains the unmodified server HTML for every public route.
- `mirror/` contains a browsable Wget mirror with page prerequisites and
  converted local links where possible.
- `urls.txt` is the explicit capture inventory.
- `content.txt` is a plain-text extraction of the archived page copy.
- `image-manifest.tsv` inventories content images route by route.
- `image-comparison.tsv` records the perceptual photo comparison against the
  replacement assets used on each route.
- `timeline-media.tsv` records how each image inside the TimelineJS sheet was
  preserved and identifies the three source URLs already unavailable.
- `checksums.sha256` records every captured file for integrity checks.

The mirror contains 397 downloaded resource files (about 48 MB). Two custom
SF Pro font URLs already returned `404 Not Found` on the live site at capture
time; their CSS references and system-font fallbacks are preserved.

The captured Knight Lab `timeline.js` distribution contained upstream Google
Maps and Flickr browser API keys. Those two key values were replaced with empty
strings before publication; the site's HTML, timeline data, and timeline media
were not changed by this sanitization.

The About page's history widget uses Knight Lab TimelineJS source
`1vjDzTt-zc2e8VwPZ_t65iUGftNaj8GydFp3mhp_QbGk`. The exact iframe URL is
preserved in both the source HTML and `widgets.txt`.

Third-party services can change independently. The snapshot preserves their
embed URLs but does not claim to archive the complete YouVersion, Google,
Knight Lab, Wistia, or form-provider services.
