<img src="./docs/images/black-logo.png" width="90px">

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
pnpm portal:dev
```

## Product Requirements

- [ ] As Manager, I should see the list of employees.
  - [ ] I should have the option to change the layout from list view to grid view and vice versa.
  - [ ] I should see the initial seed employee list in the database.
- [ ] As Manager, I should to see the first 10 employees, with the ability to paginate.
- [ ] As Manager, I should to see a total number of employees.
- [ ] As Manager, I should to see the following attributes for each employee:
  - [ ] First name
  - [ ] Last name
  - [ ] Email address
  - [ ] Phone number
  - [ ] Gender
  - [ ] Edit/Delete button on each row at the end of the row.
- [ ] As Manager, I should to filter absences by type.
- [ ] As Manager, I should to see a loading state until the list is available.
- [ ] As Manager, I should to see an error state if the list is unavailable.
- [ ] As Manager, I should to see an empty state if there are no results.
- [ ] (Bonus) As Manager, I should to sort employees by each attributes.
  - [ ] First name
  - [ ] Last name
  - [ ] Email address
  - [ ] Phone number
  - [ ] Gender
- [ ] (Bonus) As Manager, I should to search employees by each attributes.
  - [ ] First name
  - [ ] Last name
  - [ ] Email address
  - [ ] Phone number
  - [ ] Gender
- [ ] (Bonus) Host the website on the service of your choice (Render, AWS, GCloud, ...).

## Tech Requirements

- [x] NextJS
- [ ] React hooks
- [ ] Tests: Jest
- [x] Tailwind CSS
- [x] Code Linter
- [ ] (Bonus) Redux.
- [x] (Bonus) Typescript.
- [ ] (Bonus) Unit tests for NodeJS API
- [ ] (Bonus) Documentation

## Additional Resources

- More on [nextjs](https://nextjs.org/docs)
- More on unstyled and accessible components using [RadixUI](https://radix-ui.com/)
- More on tailwind based styling tokens using [shadcn-ui](https://ui.shadcn.com/docs/)
- Open source logo by [Emily Kleiderer](https://www.figma.com/community/file/1199856293948759707/Landing-Page-Doodles)

## LICENSE

[MIT](./LICENSE) &copy; [Murshid Azher](https://github.com/murshidazher)
