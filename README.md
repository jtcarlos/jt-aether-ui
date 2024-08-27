# Aether React UI Library

Aether UI is a React.js library that is designed to streamline and elevate web development experience.

Aether UI leverages the power of Tailwind CSS and FontAwesome for effortless and responsive styling, Aether UI provides cohesive and modern aesthetic components right out of the box.

> [!NOTE]  
> I have created this for my personal use, but I also will be sharing the code as I go for my personal portfolio.

> [!WARNING]  
> Website documentation coming soon!

## Pre-Requisites

Aether UI mostly requires its dependencies from its peer so having the following installed is required for using this component library.

- `react`
- `react-dom`
- `tailwindcss`
- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-brands-svg-icons`
- `@fortawesome/free-regular-svg-iconse`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/react-fontawesome`

## Testing Locally

Aether UI is a component library and will not work on its own. In this example, we assume that you already have a running React application.

1. Clone the repository and install its dependencies

```console
jtcarlos@github:~$ git clone git@github.com:jtcarlos/jt-aether-ui.git
jtcarlos@github:~$ cd ./jt-aether-ui
jtcarlos@github:~$ yarn
```

2. Build and Link the UI library

```console
jtcarlos@github:~$ yarn build
jtcarlos@github:~$ npm link
```

**Note:** This action will generate a `/dist` folder and inside, you will find an `/esm` and `/cjs` folder. This are all compiled to JavaScript. Though this project is created using TypeScript, you may import this into your JS project.

3. Add the library to your project

```console
jtcarlos@github:~$ yarn add ../path/to/package/jt-aether-ui
```

4. Import and use the library

```JSX
import { Button, Stack, Message } from "aether-ui"

const Main = () => {
    return (
      <Stack direction="col">
          <Message>You have successfully imported Aether UI!</Message>
          <Button onClick={() => alert("Hello World!")}>Click Me!</Button>
      </Stack>
    )
}

export default Main
```

## Installing via NPM / Yarn
**Using NPM**
```console
jtcarlos@github:~$ npm i aether-ui
```

**Using Yarn**
```console
jtcarlos@github:~$ yarn add aether-ui
```