# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for Studio Yione, a spatial design practice. The site showcases architectural and art+tech projects through a responsive web interface built with HTML, CSS, and vanilla JavaScript.

## Project Structure

- **Main pages**: `index.html` (homepage), `About.html`, `Works.html` (under construction)
- **Project pages**: Individual HTML files in `/projects/` directory for each portfolio piece
- **Assets**: CSS and JavaScript files in `/assets/` directory
- **Images**: Project images organized in timestamped folders within `/projects/`
- **Branding**: Logo files and favicons in `/Logo/` directory

## Key Architecture Features

### Dynamic Mode Switching
The site uses a unique hover-based theme switching system:
- Architecture projects (`.Arch` class) trigger light mode on hover
- Art+Tech projects (`.ArtTech` class) trigger dark mode on hover
- Implemented in `assets/js/modeToggle.js` using `setupHoverModeToggle()`

### Project Filtering
- Projects are categorized as either "Architecture" or "Art+Tech"
- JavaScript filtering system in `assets/js/filterProjects.js`
- Bootstrap dropdown in navigation allows category filtering

### Modal System
- Individual project pages use modals for displaying additional information
- Common UI functions in `assets/js/commonUI.js` handle modal interactions
- Project pages include Info and Story modals

### Navigation Structure
- Consistent header navigation across all pages
- Logo functions as navigation element to Works section
- Relative path handling for project pages in subdirectory

## Development Commands

### Deployment
The site uses GitHub Pages for hosting via GitHub Actions:
```bash
# Deployment is automatic on push to main branch
# Manual deployment can be triggered via GitHub Actions tab
```

### Local Development
This is a static site with no build process required:
```bash
# Serve locally using any static file server
python -m http.server 8000
# or
npx serve .
```

## File Naming Conventions

- Project folders: `YYMMDD_Project-Name/` format
- Project images: `00_Yione_Project-Name_Thumbnail.jpg` for thumbnails
- CSS: Bootstrap + custom `Style.css`
- JavaScript: Modular files for specific functionality

## SEO & Analytics

- Google Analytics configured (ID: G-RZ3T490TYM)
- Open Graph meta tags implemented
- Semantic HTML structure for accessibility
- Proper meta descriptions and robot directives

## Current Project Categories

- **Architecture**: Porky's Dumplings, Columbia Office, Duo Pavilion, Castlewood Spa Center, Convent in Venice
- **Art+Tech**: Portable Workstation, Macbeth of Zerg, Body as Site, Still Life & After Life, X-Y-Z, Staggering of Urban Lifestyles