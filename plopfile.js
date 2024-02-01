/** @type {import('plop').Config} */

const defaultOutDirs = ['component']

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const camelCase = (str) => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
}

const config = (plop) => {
  plop.setHelper('capitalize', (text) => {
    return capitalize(camelCase(text))
  })
  plop.setHelper('camelCase', (text) => {
    return camelCase(text)
  })
  plop.setGenerator('component', {
    description: 'Generate a component!',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What do you want to component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './packages/monka-theme/src/components/{{componentName}}/index.ts',
        templateFile: './plop/index.ts.hbs',
      },
      {
        type: 'add',
        path: './packages/monka-theme/src/components/{{componentName}}/{{componentName}}.tsx',
        templateFile: './plop/component.tsx.hbs',
      },
    ],
  })
}

module.exports = config
