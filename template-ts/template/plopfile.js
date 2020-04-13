module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'generate a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name a new component.',
        validate(value) {
          return (/.+/).test(value) ? true : 'name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/components/{{ pascalCase name }}/index.tsx',
        templateFile: 'templates/component/index.tsx',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/components/{{ pascalCase name }}/styles.ts',
        templateFile: 'templates/component/styles.ts',
      },
    ],
  })
  plop.setGenerator('model', {
    description: 'generates a model',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name a new model. NOTE: manually register the new model in the src/models/index.ts.',
        validate(value) {
          return (/.+/).test(value) ? true : 'name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/actions.ts',
        templateFile: 'templates/model/actions.ts',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/api.ts',
        templateFile: 'templates/model/api.ts',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/reducer.ts',
        templateFile: 'templates/model/reducer.ts',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/saga.ts',
        templateFile: 'templates/model/saga.ts',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/selectors.ts',
        templateFile: 'templates/model/selectors.ts',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/types.ts',
        templateFile: 'templates/model/types.ts',
      },
    ],
  })
  plop.setGenerator('screen', {
    description: 'generate a screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name a new screen.',
        validate(value) {
          return (/.+/).test(value) ? true : 'name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/screens/{{ pascalCase name }}Screen/index.tsx',
        templateFile: 'templates/screen/index.tsx',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/screens/{{ pascalCase name }}Screen/view.tsx',
        templateFile: 'templates/screen/view.tsx',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/screens/{{ pascalCase name }}Screen/styles.ts',
        templateFile: 'templates/screen/styles.ts',
      },
    ],
  })
}
