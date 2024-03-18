# NG Architecture

Explore my sample Angular application! It demonstrates how I like to structure my projects. It's still evolving as I learn and I plan to enhance it with new insights.

- Design:
  - Controls: PrimeNG
  - Custom Styling/Grid System: PrimeFlex
  - Icons: PrimeIcons
- Achitecture:
  - Container/Presenter pattern
  - Standalone components
  - OnPush change detection strategy
  - Reactive forms
  - State Management: NRGX
  - Translations: Transloco
  - Lazy loaded routes
- Code quality:
  - Code Formatting: Prettier
  - Linting: ESLint

Still to add:

- Client-Side validation
- Error handling
- Defining a locale
- Security
- Testing (maybe)
- Signals
- New syntax for control flow

## Folder structure

- Core: for app scoped components, services, etc. Things required to build the shell of the application.
- Shared: Reusable components, directives, and pipes that can be utilized across different parts of the application.
- Feature Modules: Represent distinct functional areas and are not to be confused with Angular modules. A module, is divided into features. A feature consists of a container (smart) component and presenter (dumb) components.
