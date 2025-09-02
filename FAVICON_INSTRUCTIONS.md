# Favicon Update Instructions

## What I've Done
1. Created a professional SVG favicon (`/public/favicon.svg`) that matches CaseGrid branding
2. Updated the layout.tsx to prioritize the SVG favicon
3. The SVG features:
   - Blue gradient background matching the app's color scheme
   - Document icon representing legal documents
   - Grid lines representing the "Grid" in CaseGrid
   - Clean, professional design that works at small sizes

## To Complete the Favicon Update

### Option 1: Use Online Favicon Generator (Recommended)
1. Open the SVG file I created: `/public/favicon.svg`
2. Go to https://realfavicongenerator.net/ or https://favicon.io/favicon-converter/
3. Upload the SVG file
4. Generate all favicon formats (ICO, PNG sizes)
5. Download and replace the files in `/app/` and `/public/` directories

### Option 2: Use Command Line Tools
If you have ImageMagick installed:
```bash
# Convert SVG to ICO
convert public/favicon.svg -resize 16x16 app/favicon.ico

# Generate different sizes
convert public/favicon.svg -resize 16x16 public/favicon-16x16.png
convert public/favicon.svg -resize 32x32 public/favicon-32x32.png
convert public/favicon.svg -resize 180x180 public/apple-touch-icon.png
convert public/favicon.svg -resize 192x192 public/icon-192x192.png
convert public/favicon.svg -resize 512x512 public/icon-512x512.png
```

### Option 3: Manual Creation
1. Open the SVG in a design tool (Figma, Sketch, or even browser)
2. Export as PNG at various sizes (16x16, 32x32, 180x180, 192x192, 512x512)
3. Convert the 32x32 PNG to ICO format using an online converter
4. Replace the existing favicon files

## Design Elements
- **Colors**: Blue gradient (#2563eb to #4f46e5) matching the app theme
- **Icon**: Document with grid lines representing legal document organization
- **Style**: Modern, professional, suitable for legal/business context
- **Scalability**: Vector-based design that looks crisp at all sizes

## Files to Replace
- `/app/favicon.ico` (main favicon)
- `/public/favicon-16x16.png`
- `/public/favicon-32x32.png` 
- `/public/apple-touch-icon.png`
- `/public/icon-192x192.png`
- `/public/icon-512x512.png`

The SVG favicon will work immediately in modern browsers, while the ICO and PNG versions ensure compatibility across all devices and browsers.
