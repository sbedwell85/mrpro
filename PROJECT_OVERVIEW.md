# Project File Structure and Overview

## Project File Structure

```
.gitignore
eslint.config.mjs
next.config.ts
package-lock.json
package.json
postcss.config.mjs
README.md
tsconfig.json
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
db/
  connect.js
  data/
    customer_seeder.js
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
schemas/
  customer/
    Customer.ts
  shared/
    Contact.ts
    Location.ts
types/
  customer/
    customer.ts
  shared/
    contact.ts
    location.ts
```

## Project Overview

This project appears to be a Next.js application.

**Key components:**

- **`app/`**: Contains the Next.js application routes and page components.
- **`db/`**: Likely contains database connection and data related files. `connect.js` suggests database connection logic, and `data/customer_seeder.js` indicates data seeding for customers.
- **`public/`**: Contains static assets like images and icons.
- **`schemas/`**: Defines data schemas, potentially for database models or API request/response structures. It includes schemas for `customer` and `shared` entities like `Contact` and `Location`.
- **`types/`**: Defines TypeScript types for the project, mirroring the schema structure with types for `customer` and `shared` entities.
- **Configuration files**: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs` are standard configuration files for Next.js, TypeScript, ESLint, and PostCSS respectively.
- **`package.json` and `package-lock.json`**: Define project dependencies and manage package versions.
- **`README.md`**: Project documentation (should be updated with more details).
- **`.gitignore`**: Specifies intentionally untracked files that Git should ignore.

**In summary:** This project seems to be a well-structured Next.js application with a defined data model (schemas and types), database integration, and standard tooling configurations. It is likely focused on customer data management, given the presence of customer-related files in the `db`, `schemas`, and `types` directories.
