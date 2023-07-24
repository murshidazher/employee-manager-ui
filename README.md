<img src="https://raw.githubusercontent.com/murshidazher/employee-manager-ui/main/docs/images/black-logo.png" width="90px">

# [employee-manager-ui](https://github.com/murshidazher/employee-manager-ui)

![Next JS](https://img.shields.io/badge/next-black?logo=next.js&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?logo=redux&logoColor=white)

> 🧑‍💼💼 An employee management system with next.js

## Table of Content

- [employee-manager-ui](#employee-manager-ui)
  - [Table of Content](#table-of-content)
  - [Getting Started](#getting-started)
    - [Pre-requisite](#pre-requisite)
    - [Up and Running](#up-and-running)
  - [Product Requirements](#product-requirements)
  - [Tech Requirements](#tech-requirements)
  - [Additional Resources](#additional-resources)
  - [LICENSE](#license)

## Getting Started

### Pre-requisite

> 💡 We use pnpm as a drop-in replacement for `npm`

1. Install either nvm or asdf to manage your node version.
2. Install the node version mentioned in the `.nvmrc` file.
3. Install `pnpm` globally as package manager,

```sh
npm install -g pnpm
```

### Up and Running

```sh
pnpm i
# copy the .env.example and specify the url
pnpm cpy-env
# run the development server
pnpm dev
```

## Product Requirements

- [x] As Manager, I should see the list of employees.
  - [x] I should have the option to change the layout from list view to grid view and vice versa.
  - [x] I should see the initial seed employee list in the database.
- [x] As Manager, I should to see the first 10 employees, with the ability to paginate.
- [x] As Manager, I should to see a total number of employees.
- [x] As Manager, I should to see the following attributes for each employee:
  - [x] First name
  - [x] Last name
  - [x] Email address
  - [x] Phone number
  - [x] Gender
  - [x] Edit/Delete button on each row at the end of the row.
- [x] As Manager, I should to see a loading state until the list is available.
- [x] As Manager, I should to see an empty state if there are no results.
- [x] (Bonus) As Manager, I should to sort employees by each attributes.
  - [x] First name
  - [x] Last name
  - [x] Email address
  - [x] Phone number
  - [x] Gender
- [x] (Bonus) As Manager, I should to search employees by each attributes.
  - [x] First name
  - [x] Last name
  - [x] Email address
  - [x] Phone number
  - [x] Gender
- [ ] (Bonus) Host the website on the service of your choice (Render, AWS, GCloud, ...).

## Tech Requirements

- [x] NextJS
- [x] React hooks
- [x] Tests: Jest
- [x] Tailwind CSS
- [x] Code Linter
- [ ] (Bonus) Redux.
- [x] (Bonus) Typescript.
- [x] (Bonus) Unit tests for NodeJS API
- [x] (Bonus) Documentation
- [ ] (Bonus) Responsiveness

## Additional Resources

- More on [nextjs](https://nextjs.org/docs)
- More on unstyled and accessible components using [RadixUI](https://radix-ui.com/)
- More on tailwind based styling tokens using [shadcn-ui](https://ui.shadcn.com/docs/)
- Open source logo by [Emily Kleiderer](https://www.figma.com/community/file/1199856293948759707/Landing-Page-Doodles)
- [Testing for nextjs](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library)

## LICENSE

[MIT](./LICENSE) &copy; [Murshid Azher](https://github.com/murshidazher)
