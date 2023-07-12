function plop (plop) {
    plop.setGenerator('component', {
      description: 'Create a component, with styles and tests',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: "What is this component's name?",
        },
      ],
      actions: [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{name}}.module.css',
          templateFile: 'templates/Styles.css.hbs',
        },
        {
          type: 'add',
          path:
            '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'templates/Test.tsx.hbs',
        },
        {
            path: '../src/components/index.ts',
            pattern: /(\/\/ COMPONENT IMPORTS)/g,
            template: 'export { default as {{pascalCase name}} } from \'./{{pascalCase name}}/{{pascalCase name}}\';\n$1',
            type: 'modify',
        }
      ],
    })
  };
  

  export default plop;
