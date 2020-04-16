# 🚀 React Native Template JS

[![npm version](https://badge.fury.io/js/%40datarockets%2Freact-native-template-js.svg)](https://badge.fury.io/js/%40datarockets%2Freact-native-template-js)

## 📦 What's included

- Preconfigured `react-navigation`, `redux`, `react-native-config` and `react-native-code-push`
- Two preconfigured environments: `dev` and `prod`
- Easy components, screens and models generation by template

## 🧱 Structure

### components
```sh
src/components/AComponent
├── index.js
└── styles.js
```

### screens
```sh
src/screens/AScreen
├── index.js
├── styles.js
└── view.js
```

### models
```sh
src/models/AModel
├── actions.js
├── api.js
├── reducer.js
├── saga.js
├── selectors.js
└── types.js
```

## 🏗 Usage

Simply start you project using the template:
```sh
npx react-native init MyApp --template @datarockets/react-native-template-js
```
If you experience issue initializing the project with the template try to use the latest CLI explicitly:
```sh
npx react-native@latest init MyApp --template @datarockets/react-native-template-ts
```
