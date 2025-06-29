# 🚀 Next.js Architecture App Router

A modern [Next.js](https://nextjs.org) project built with the App Router and clean architecture principles, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## ✨ Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Material-UI** for beautiful components
- 📱 **Responsive Design** with Emotion/Styled Components
- 🔄 **React Query** for efficient data fetching
- 📝 **React Hook Form** with Zod validation
- 🧪 **Jest & Testing Library** for unit testing
- 🏗️ **Clean Architecture** with modular structure
- 💨 **Turbopack** for faster development

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Material-UI, Emotion, Styled Components
- **State Management:** React Query (TanStack Query)
- **Forms:** React Hook Form + Zod
- **HTTP Client:** Axios
- **Testing:** Jest, Testing Library
- **Dev Tools:** ESLint, TypeScript

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/wellbarea/architecture-nextjs-app-router.git
   cd architecture-nextjs-app-router
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3001](http://localhost:3001) to see the application running.

## 📝 Available Scripts

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | 🔧 Start development server with Turbopack |
| `npm run build` | 🏗️ Build the application for production    |
| `npm run start` | ▶️ Start the production server             |
| `npm run test`  | 🧪 Run unit tests with Jest                |
| `npm run lint`  | 🔍 Run ESLint for code quality             |

## 🏗️ Project Structure

```
src/
├── 📁 app/                    # App Router pages and layouts
│   ├── layout.tsx            # Root layout component
│   ├── page.tsx              # Home page
│   └── loans/                # Loans feature pages
├── 📁 components/            # Global reusable components
│   ├── error-message/        # Error display component
│   └── header/               # Application header
├── 📁 config/                # Global configurations
│   ├── axios/                # Axios HTTP client setup
│   ├── providers/            # React context providers
│   ├── react-query/          # React Query configuration
│   └── styles/               # Global styling setup
├── 📁 constants/             # Application constants
│   ├── api.ts                # API endpoints
│   ├── offers.ts             # Offers-related constants
│   └── react-query.ts        # React Query keys
├── 📁 entities/              # TypeScript interfaces and types
│   ├── Loan/                 # Loan entity definitions
│   └── Offers/               # Offers entity definitions
├── 📁 modules/               # Feature modules
│   ├── loans/                # Loans feature module
│   │   ├── components/       # Loans-specific components
│   │   ├── hooks/            # Loans custom hooks
│   │   └── index.tsx         # Main loans component
│   └── offers/               # Offers feature module
│       ├── components/       # Offers-specific components
│       ├── helpers/          # Validation and utilities
│       ├── hooks/            # Offers custom hooks
│       └── index.tsx         # Main offers component
├── 📁 services/              # API services and data fetching
│   └── refinance/            # Refinance service
└── 📁 utils/                 # Utility functions
    └── format.ts             # Data formatting helpers
```

## 🏛️ Architecture Overview

This project follows **Clean Architecture** principles with clear separation of concerns:

### 🔄 Data Flow

1. **UI Components** → Display data and handle user interactions
2. **Hooks** → Manage state and business logic
3. **Services** → Handle API calls and external data
4. **Entities** → Define data structures and types

### 📦 Module Structure

Each feature module contains:

- **Components**: UI components specific to the feature
- **Hooks**: Custom hooks for state management and API calls
- **Helpers**: Validation logic and utility functions
- **Index**: Main component that orchestrates the feature

## 🧪 Testing

The project uses **Jest** and **Testing Library** for comprehensive testing:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy Coding!** 🎉
