# NHServices

HVAC business website for NH Services, built with React + TypeScript + Vite. Deployed on Netlify with serverless functions.

## Dev Commands

```bash
npm run dev    # Start Vite dev server
npm run build  # Production build
```

No lint or test scripts are configured in package.json. ESLint is installed as a devDependency but has no run script.

## Architecture

### Frontend (React + TypeScript)

```
src/
  main.tsx                  # Entry point, wraps App in NextUIProvider
  App.tsx                   # Router setup (BrowserRouter)
  App.css / index.css       # Global styles
  pages/
    LandingPage.tsx         # Home page
    GalleryPage.tsx         # Photo gallery
  LandingPageSections/
    AboutUsSection.tsx
    ServiceAreaSection.tsx
    ServicesSection.tsx
    TrustedBrandsSection.tsx
  components/
    Navbar/
      AppNavbar.tsx         # Main navigation bar
      EquipmentDropdown.tsx
      Icons.tsx
    Footer/
      Footer.tsx
    Modals/
      ContactFormModal.tsx  # Contact form using EmailJS
      GalleryImageModal.tsx
    Accordions/
      FAQAccordion.tsx
      ServiceAccordion.tsx
    Testimonials/
      TestimonialForm.tsx   # Submit testimonials (saved to MongoDB)
```

### Serverless Functions (Netlify Functions)

```
netlify/functions/
  addTestimonial/addTestimonial.js    # POST - inserts a testimonial into MongoDB
  getTestimonials/getTestimonials.js  # GET  - retrieves all testimonials from MongoDB
```

Both functions connect to MongoDB using `MONGODB_URI` env var and operate on the `db.testimonials` collection.

## Routing

| Path       | Component     |
|------------|---------------|
| `/`        | LandingPage   |
| `/gallery` | GalleryPage   |

Uses `react-router-dom` v6 with `BrowserRouter`.

## Key Integrations

- **EmailJS** (`emailjs-com`): Sends contact form emails from the client side. Configured via `VITE_APP_EMAILJS_*` env vars.
- **MongoDB** (`mongodb` driver): Used in Netlify serverless functions for testimonial CRUD. Connected via `MONGODB_URI`.
- **NextUI** (`@nextui-org/react`): UI component library, provider wraps the app in `main.tsx`.
- **Tailwind CSS**: Utility-first styling.
- **Framer Motion**: Animations.
- **react-slick / slick-carousel**: Image carousels.
- **react-icons**: Icon library.

## Environment Variables

Frontend (must be prefixed with `VITE_APP_`):
- `VITE_APP_API_KEY`
- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_USER_ID`

Server-side (Netlify Functions):
- `MONGODB_URI` - MongoDB Atlas connection string
- `MONGODB_DB` - Database name (currently `db`)
- `MONGODB_COLLECTION` - Collection name (currently `testimonials`)

## Deployment

Hosted on **Netlify**. Serverless functions live in `netlify/functions/` and are auto-detected by Netlify. No `netlify.toml` config file exists; defaults are used.
