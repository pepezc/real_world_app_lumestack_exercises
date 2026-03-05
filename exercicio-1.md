# RWA Exercícios

## Descrição

O Real World App (RWA) é um aplicativo criado pela equipe do Cypress para demonstrar o uso real de métodos, padrões e fluxos de teste do Cypress. É uma espécie de clone do aplicativo Venmo, que permite aos usuários criar uma conta, adicionar uma conta bancária e enviar/receber dinheiro entre amigos. Vamos nos utilizar do RWA para fazer exercícios e colocar nosso aprendizado do curso "Guardião da Qualidade" para aprender recursos avançados do Cypress e estratégias de teste. Ele serve como uma plataforma de aprendizado para explorar e praticar testes em cenários reais de desenvolvimento de software. 

Repo do RWA: https://github.com/cypress-io/cypress-realworld-app


### Casos de teste

**Exercício: Criação de Casos de Teste para as Features "Login" e "Registro de Usuário"**

As funcionalidades de "Login" e "Registro de Usuário" são fundamentais no aplicativo Real World App, permitindo que os usuários acessem suas contas existentes ou criem novas contas. Vamos criar casos de teste para garantir que essas funcionalidades funcionem corretamente:

**Caso de Teste: Login com sucesso.**
**Descrição:** Verifique se é possível fazer login com um usuário válido, inserindo as informações corretas.

**Caso de Teste:** Tentar fazer login com credenciais inválidas.
**Descrição:** Garanta que o sistema exiba uma mensagem de erro ao tentar fazer login com credenciais inválidas (email ou senha incorretos).

**Caso de Teste:** Registro de novo usuário com sucesso.
**Descrição:** Verifique se é possível registrar um novo usuário com informações válidas.

**Caso de Teste:** Tentar registrar um novo usuário com informações incompletas.
**Descrição:** Garanta que o sistema exiba mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias.

### Automação dos casos de teste

**Exercício:** Automação dos Casos de Teste "Login" e "Registro de Usuário"

Agora que você criou os casos de teste, é hora de automatizá-los usando o Cypress.io. Certifique-se de que o projeto "Real World App" esteja configurado corretamente no seu ambiente de desenvolvimento. Crie scripts de teste para os casos de teste definidos nos exercícios anteriores:

**Automação do Caso de Teste: Login com sucesso.**

```javascript
describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

**Automação do Caso de Teste: Tentar fazer login com credenciais inválidas.**

```javascript
describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

**Automação do Caso de Teste: Registro de novo usuário com sucesso.**

```javascript
describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

**Automação do Caso de Teste: Tentar registrar um novo usuário com informações incompletas.**

```javascript
describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

Continue praticando e explorando outras funcionalidades do Cypress.io para criar casos de teste e automações abrangentes para todas as features do Real World App. O objetivo é se tornar um Guardião da Qualidade altamente capacitado, capaz de testar de forma eficaz e garantir a qualidade do aplicativo em todos os aspectos. 
Boa sorte! #GuardiaoDaQualidade #AutomacaoDeTestes #CypressIO #RealWorldApp

## LinkedIn

Assim que finalizar esses exercicios faça uma postagem no seu LinkedIn.
Isso ajudará na procura da sua entrevista.

Use esse Prompt para te ajudar a criar seu post.

```
Crie um post de Linkedin sobre um projeto de automação Cypress que estou realizando pela LumeStack no curso de "Guardião da Qualidade".
Eu criei casos de teste para a feature de transferencia de dinheiro do projeto Real World App do Cypress IO.
Eu també automatizei os mesmos casos de teste com o Cypress
```
Aproveite e mencione a LumeStack no post 😉
