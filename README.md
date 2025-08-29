# CaseGrid

A comprehensive platform for accessing Indian legal documents, Acts, and Rules across all states.

## Features

- **Advanced Search**: Full-text search across act titles, summaries, and metadata
- **State-wise Organization**: Browse acts by state or access central legislation
- **Instant Downloads**: Direct access to official PDF documents
- **Responsive Design**: Optimized for all devices
- **Professional Interface**: Built for legal professionals and researchers

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (body) + Poppins (headings)
- **Testing**: Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd case-grid
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
case-grid/
├── app/                    # Next.js App Router
│   ├── acts/             # Acts listing and detail pages
│   ├── globals.css       # Global styles and Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/            # Reusable React components
│   ├── ActsGrid.tsx      # Acts display (table/cards)
│   ├── DownloadButton.tsx # PDF download component
│   ├── Pagination.tsx    # Pagination controls
│   ├── SearchBar.tsx     # Search input component
│   └── StateFilter.tsx   # State selection filter
├── lib/                   # Utilities and data
│   ├── seed-data.ts      # Sample acts data
│   ├── states.ts         # Indian states list
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Helper functions
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Data Model

### Act Type
```typescript
interface Act {
  id: string;
  slug: string;
  title: string;
  state: string;
  year?: number;
  category?: 'Act' | 'Rule';
  pdfUrl: string;
  sizeBytes?: number;
  summary?: string;
  source?: string;
  createdAt?: string;
  updatedAt?: string;
}
```

## Features in Detail

### Landing Page
- Hero section with value proposition
- Feature highlights and benefits
- Professional design for legal professionals

### Acts Listing (`/acts`)
- Advanced search with debounced input
- State-based filtering
- Responsive table/card layout
- Pagination and page size selection
- URL-driven state management

### Act Details (`/acts/[slug]`)
- Complete metadata display
- PDF download functionality
- Breadcrumb navigation

### Search & Filtering
- Full-text search across titles and summaries
- State-based filtering (including Central acts)
- Real-time results with URL persistence
- Responsive design for all devices

## Customization

### Adding New States
Edit `lib/states.ts` to add or modify Indian states.

### Modifying Seed Data
Update `lib/seed-data.ts` to change sample acts or add new ones.

### Styling Changes
Modify `app/globals.css` and component-specific Tailwind classes.

## Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm run start`
3. Deploy the `out` directory

## Data Source Integration

To replace the seed data with a real database:

1. **API Routes**: Create endpoints in `app/api/`
2. **Database**: Integrate with your preferred database
3. **Data Fetching**: Update components to use real API calls
4. **Environment Variables**: Configure database connections

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open a GitHub issue or contact the development team.
