# Wildflower mobile main pages

Saved design implementation, October 29, 2026. This branch is a reviewable draft, not a request to publish the old private-life essays.

- index.html and welcome.html: opening screen; Come on in opens home.html.
- home.html: approved concept/intro copy, original highlighted quote, Enter the blog.
- blog.html: two explicitly marked draft reflection previews, topics link.
- topics.html, life.html, people.html, words.html, awakening.html, all-posts.html: connected topic navigation.
- about.html: portrait placeholder and short introduction, pending the author's portrait and final copy.
- contact.html: visible, disabled preview form. No messages are sent or silently discarded.
- reflection.html: draft placeholder, not a finished article.

Every page uses its own fixed photographic wallpaper beneath the full scroll. The individual letters of BUTTERFLY use alternating pastel colors; other main headings are white. Original uploaded images are extracted without generative replacement. Screenshot-derived photos need higher-resolution originals for final launch. Quote-card previews are CSS typesetting, not final Pinterest quote selections.

No existing essays or legacy assets are deleted. New navigation intentionally does not expose the legacy Quotes page or old essay list. Existing files remain in the base repository and require a separate content/privacy review before any launch. All new pages carry noindex while in draft. Contact delivery, final articles, full About text and portrait remain outstanding.

Local preview: python3 -m http.server 8000, then open index.html.

## Image upload pending

Automatic approval review blocked the original image payloads from being uploaded to this public repository without explicit image-publication approval. The code retains the agreed image filenames and uses a temporary gradient fallback if they are unavailable. Required assets: assets/eye.jpg, assets/daisies.jpg, assets/book.jpg, assets/topics.jpg, assets/garden.jpg, assets/kindness.jpg, assets/coincidence.webp. No original image files are included in this commit.

Validation: all local HTML navigation and asset references checked. JavaScript syntax checked. Browser rendering could not be tested because the available Chromium download failed.
