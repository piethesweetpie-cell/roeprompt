Prompt Roe - Cloudflare Pages ready package

GitHub repository structure:
public/
  index.html
  assets/
  _headers

Cloudflare Pages settings:
Framework preset: None
Build command: leave blank
Build output directory: public
Production branch: main

Reason:
The original single HTML exceeded Cloudflare Pages' 25 MiB per-file limit.
This version extracts embedded base64 images into /public/assets/.
