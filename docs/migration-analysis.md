# Jekyll to Next.js Migration Analysis

## Current Jekyll Site Audit

### Site Configuration
- **Title**: Mark Rondina Personal Portfolio
- **URL**: https://markrondina.com
- **Jekyll Version**: [Need to check]
- **Theme**: Custom/Modified theme

### Page Structure
Based on _config.yml analysis:

#### Collections:
- [x] **Posts** (`_posts/`) - Blog posts (4 total)
- [x] **Projects** (`_projects/`) - Portfolio projects (7 total)
- [x] **Pages** (`_pages/`) - Static pages (About, Contact, etc.)

#### Main Pages Identified:
- [x] Home (`index.html`)
- [x] About 
- [x] Contact
- [x] Blog listing
- [x] 404 page

### Components/Includes Analysis
From the HTML files, we have these reusable components:

#### Layout Components:
- [x] `header.html` - Navigation and logo
- [x] `footer.html` - Footer with social links and info
- [x] `head.html` - Meta tags and SEO

#### Section Components:
- [x] `section-hero.html` - Homepage hero section
- [x] `section-projects.html` - Projects showcase
- [x] `section-testimonials.html` - Testimonials slider
- [x] `section-blog.html` - Blog posts preview
- [x] `section-tags.html` - Tag cloud/navigation

#### Content Components:
- [x] `article.html` - Blog post preview card
- [x] `post-navigation.html` - Prev/next post navigation
- [x] `related-posts.html` - Related posts section
- [x] `pagination.html` - Load more posts functionality

## Live Site Analysis (https://markrondina.com)

### Current Site Structure:
- **Homepage**: Hero section with your photo and title "Product & Design Leader"
- **Projects section**: Featured work with case studies
- **About section**: Personal introduction 
- **Testimonials**: Client recommendations (slider)
- **Blog section**: Recent posts
- **Navigation**: Home, About, Contact (simple, clean)

### Content Inventory (Complete):

#### Blog Posts (4 total):
- [x] "Designing with Subframe - part 1"
- [x] "Old Gaffer - New Tricks"
- [ ] [2 other posts - need titles from Jekyll repo]

#### Projects (7 case studies):
- [x] data.ai Creative IQ
- [x] data.ai Top Apps redesign  
- [x] data.ai product-led growth initiatives
- [x] data.ai delivery solutions
- [x] GE Appliances connected cooking modes
- [x] Giddy Teamup mobile app
- [x] Desktop to multi-device portfolio rebuild

#### Visual Elements:
- [x] Professional headshot photo
- [x] Project case study images
- [x] Clean, minimal design aesthetic
- [x] Dark/professional color scheme

### Design Features to Preserve:
- Clean, professional layout
- Project case study format
- Testimonials slider
- Responsive design
- SEO-friendly URLs (`/blog/post-name`, `/project/project-name`)

## Jekyll Source File Structure

### Content Folders:
- `_posts/` (4 blog posts)
- `_projects/` (7 project case studies)  
- `_pages/` (static pages like About, Contact)

### Template System:
- `_layouts/` (page templates)
- `_includes/` (reusable components)
- `_data/` (configuration data, likely settings.yml)

### Assets:
- `images/` (all photos and graphics)
- `_sass/` (styling)
- `js/` (JavaScript functionality)
- `fonts/` (custom fonts)

### Configuration:
- `_config.yml` (main Jekyll config)
- `Gemfile` (Ruby dependencies)

### Build Output:
- `_site/` (generated static files - we won't need this)

## Next.js Equivalent Structure Mapping

| Jekyll | Next.js | Purpose |
|--------|---------|---------|
| `_posts/` | `content/posts/` | Blog posts markdown files |
| `_projects/` | `content/projects/` | Project case studies |
| `_pages/` | `pages/` + `content/pages/` | Static pages |
| `_includes/` | `components/` | Reusable components |
| `_layouts/` | `components/layout/` | Page layouts |
| `_data/settings.yml` | `data/settings.ts` | Site configuration |
| `images/` | `public/images/` | Static assets |
| `_sass/` | Tailwind CSS | Styling |
| `js/` | Components + `lib/` | JavaScript functionality |

## Planned Next.js Project Structure

```
mark-rondina-portfolio/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   └── Tags.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Navigation.tsx
├── content/
│   ├── posts/
│   │   ├── designing-with-subframe.md
│   │   ├── old-gaffer-new-tricks.md
│   │   └── [2 other posts].md
│   ├── projects/
│   │   ├── creative-iq.md
│   │   ├── top-apps-redesign.md
│   │   └── [5 other projects].md
│   └── pages/
│       ├── about.md
│       └── contact.md
├── data/
│   └── settings.ts
├── lib/
│   ├── posts.ts
│   ├── projects.ts
│   └── utils.ts
├── pages/
│   ├── blog/
│   │   ├── index.tsx (blog listing)
│   │   └── [slug].tsx (individual posts)
│   ├── project/
│   │   └── [slug].tsx (individual projects)
│   ├── about.tsx
│   ├── contact.tsx
│   └── index.tsx (homepage)
├── public/
│   └── images/
└── styles/
    └── globals.css
```

## Content Types Analysis

### Blog Posts:
- **Format**: Markdown with YAML frontmatter
- **Required fields**: title, date, description, tags, image (optional)
- **Features needed**: Tags, dates, reading time, images, SEO

### Projects:
- **Format**: Markdown with YAML frontmatter  
- **Required fields**: title, subtitle, date, image, summary
- **Features needed**: Images, descriptions, case study format

### Static Pages:
- **About**: Personal introduction, experience, skills
- **Contact**: Contact form, email, social links

## Features to Migrate

### Essential Features:
- [x] Responsive design
- [x] SEO meta tags
- [x] Clean URL structure
- [x] Blog post listing and individual pages
- [x] Project showcase and individual case studies
- [x] Navigation menu
- [x] Footer with social links

### Interactive Features:
- [ ] Dark/light mode toggle (if exists)
- [ ] Testimonials slider/carousel
- [ ] Blog post loading (pagination)
- [ ] Tag filtering
- [ ] Contact form
- [ ] Social media links
- [ ] Related posts functionality

### Performance Features:
- [ ] Image optimization
- [ ] Static site generation
- [ ] Fast loading times
- [ ] Mobile optimization

## Migration Priority Order

### Phase 1 - Foundation:
1. Site configuration and settings
2. Basic layout components (Header, Footer, Layout)
3. Homepage with hero section

### Phase 2 - Content:
1. Blog post system and templates
2. Project case study system and templates
3. Static pages (About, Contact)

### Phase 3 - Features:
1. Testimonials section
2. Navigation and routing
3. SEO and meta tags

### Phase 4 - Polish:
1. Styling and responsive design
2. Interactive features
3. Performance optimization

## Questions to Answer:
1. ~~Where are the actual blog posts and projects stored?~~ ✅ In separate GitHub repo
2. ~~What's the current site URL for reference?~~ ✅ https://markrondina.com
3. ~~Are there any custom Jekyll plugins being used?~~ (Need to check Gemfile)
4. ~~Any special functionality we need to preserve?~~ ✅ Documented above

## Next Steps:
1. ✅ Create Next.js folder structure
2. [ ] Examine sample Jekyll post/project files
3. [ ] Set up content utilities (lib/posts.ts, lib/projects.ts)
4. [ ] Begin content migration

---

**Status**: Analysis Complete ✅  
**Ready for**: Epic 1.3 - Configuration Mig