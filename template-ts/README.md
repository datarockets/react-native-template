# 🚀 React Native Template TS

[![npm version](https://badge.fury.io/js/%40datarockets%2Freact-native-template-ts.svg)](https://badge.fury.io/js/%40datarockets%2Freact-native-template-ts)

## 📦 What's included

- Preconfigured `react-navigation`, `redux`, `react-native-config` and `react-native-code-push`
- Two preconfigured environments: `dev` and `prod`
- Easy components, screens and models generation by template

## 🧱 Structure

### components
```sh
src/components/AComponent
├── index.tsx
└── styles.ts
```

### screens
```sh
src/screens/AScreen
├── index.tsx
├── styles.ts
└── view.tsx
```

### models
```sh
src/models/AModel
├── actions.ts
├── api.ts
├── reducer.ts
├── saga.ts
├── selectors.ts
└── types.ts
```

## 🏗 Usage

Simply start you project using the template:
```sh
npx react-native init MyApp --template @datarockets/react-native-template-ts
```
