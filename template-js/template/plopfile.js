module.exports = function (plop) {
  plop.setGenerator('model', {
    description: 'generates a model',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name a new model. NOTE: manually register the new model in the src/models/index.js.',
        validate(value) {
          return (/.+/).test(value) ? true : 'name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/actions.js',
        templateFile: 'templates/model/actions.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/api.js',
        templateFile: 'templates/model/api.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/reducer.js',
        templateFile: 'templates/model/reducer.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/saga.js',
        templateFile: 'templates/model/saga.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/selectors.js',
        templateFile: 'templates/model/selectors.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/models/{{ pascalCase name }}/types.js',
        templateFile: 'templates/model/types.js',
      },
    ],
  }),
  plop.setGenerator('component', {
    description: 'generates a functional component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name a new component. NOTE: manually register the new component in the src/components/index.js.',
        validate(value) {
          return (/.+/).test(value) ? true : 'name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/components/{{ pascalCase name }}/index.js',
        templateFile: 'templates/component/index.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/components/{{ pascalCase name }}/styles.js',
        templateFile: 'templates/component/styles.js',
      },
    ],
  }),
  plop.setGenerator('screen', {
    description: 'generates a screen component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name a new screen. NOTE: manually register the new component in the src/screens/index.js.',
        validate(value) {
          return (/.+/).test(value) ? true : 'name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/screens/{{ pascalCase name }}/index.js',
        templateFile: 'templates/screen/index.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/screens/{{ pascalCase name }}/styles.js',
        templateFile: 'templates/screen/styles.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/screens/{{ pascalCase name }}/view.js',
        templateFile: 'templates/screen/view.js',
      },
    ],
  })
}
