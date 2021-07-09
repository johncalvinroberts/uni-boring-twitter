# uni-boring-twitter

[Live Preview](https://uni-boring-twitter.johnny.sh)

### Pre-requisites

- **`yarn` v1.0.0** or higher
- **`node` v12.0.0** or higher

### How to run this app?

#### For development:

```bash
yarn install # install dependencies
yarn start # start development server
```

Then, navigate to localhost:3000 to see the app in development mode.

#### Build for production:

```bash
yarn install # install dependencies
yarn build # build production app
```

Then, production-ready artifacts are output to `dist`.

### Technologies Used

- [`wouter`](https://github.com/molefrog/wouter) - client side router
- [`emotion`](https://emotion.sh/) - for CSS in JS
- [`swr`](https://swr.vercel.app/) - for managing data fetching
- [`vite`](https://vitejs.dev/) - super fast bundler

Other than that, this is a pretty standard React + Typescript codebase.
