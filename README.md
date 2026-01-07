# @tattva-design/eslint

Opinionated, practical ESLint standards for modern JavaScript and TypeScript teams.

This repository contains a set of shared ESLint configurations and rules used to maintain consistent code quality, readability, and best practices across projects.

> Note: This project is **not affiliated with ESLint.org**. It is an independent, community-driven configuration maintained by Tattva Design.

---

## Why this exists

Most teams struggle with:

- Inconsistent linting across projects
- Bikeshedding over formatting and rules
- Hard-to-maintain custom ESLint setups

This package provides a well-curated baseline so teams can focus on building instead of arguing about lint rules.

---

## What’s inside

- A base ESLint configuration for JavaScript and TypeScript projects
- Sensible defaults for:
  - Readability
  - Maintainability
  - Bug prevention
- Optional presets for:
  - React / Next.js
  - Node.js
  - TypeScript

You can extend or override anything.

---

## Installation

### Step 1 — Install dependencies

```bash
npm install -D eslint @tattva-design/eslint
```

or

```bash
yarn add -D eslint @tattva-design/eslint
```

---

### Step 2 — Create `eslint.config.js`

Base config:

```js
const tattvaEslint = require('@tattva-design/eslint');
module.exports = [...tattvaEslint];
```

ESM config (for `eslint.config.js` or ESM projects):

```js
import tattvaEslint from '@tattva-design/eslint';
export default tattvaEslint;
```

---

## Supported environments

- Node.js 22 or higher
- ESLint 8 or higher
- JavaScript and TypeScript
- React and Next.js

---

## Contributing

Contributions are welcome.

- Open an issue for discussion
- Submit a pull request with rationale
- Keep changes small and well documented

---

## Module Support

This package supports both CommonJS and ESM:

- In CommonJS projects (most ESLint setups) just install and extend as usual.
- In ESM projects, ESLint will resolve the ESM config automatically.

---

## License

MIT License

Copyright (c) Tattva Design

---

## Questions or feedback

Open an issue or start a discussion.

Maintained by Tattva Design.
