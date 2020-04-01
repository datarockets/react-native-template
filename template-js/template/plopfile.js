module.exports = function (plop) {
  plop.setGenerator('model', {
    description: 'generates a model',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name the new model',
        validate(value) {
          return (/.+/).test(value) ? true : 'name is required';
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
  })
}
