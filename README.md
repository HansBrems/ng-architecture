# NG Architecture

A small Angular app that I use for learning and experimenting.

## Features

- Design:
  - ✅ Controls: PrimeNG
  - ✅ Custom Styling/Grid System: PrimeFlex
  - ✅ Icons: PrimeIcons
- Achitecture:
  - ✅ Container/Presenter pattern
  - ✅ Standalone components
  - ✅ New syntax for control flow
  - 🔧 Signals
  - 🔧 State management using services
  - 🔧 Reactive forms
  - 🔧 Error handling (HTTP interceptor)
  - ✅ OnPush change detection strategy
  - ✅ Lazy loaded routes
- I18n
  - 🔧 Translations: Transloco
- Code quality:
  - ✅ Code Formatting: Prettier
  - ✅ Linting: ESLint

## No longer used

- NGRX

## Roadmap

- Defining a locale
- Client-side validation
- Security
- Testing (maybe)

## Folder structure

- Core: for app scoped components, singleton services, etc. Things required to build the shell of the application.
- Shared: Reusable components, directives, and pipes that can be utilized across different parts of the application.
- Feature Modules: Represent distinct functional areas and are not to be confused with Angular modules. A module, is divided into features. A feature consists of a container (smart) component and presenter (dumb) components.
