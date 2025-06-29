# Meu Projeto Next.js

Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Primeiros Passos

Primeiro, instale as dependências:

```bash
    yarn install
# ou
    npm install
```

Depois, execute o servidor de desenvolvimento:
```bash
    npm run dev
# ou
    yarn dev
```

Para rodar os testes unitários, execute:
```bash
npm run test
# ou
yarn test
```

Estamos utilizando Jest e Testing Library para os testes.

Estrutura do Projeto

src/
    app/
        # Inicializa as páginas da aplicação com layouts personalizados e chama as telas dos módulos construídos abaixo.
    components/
        # Componentes globais utilizados por um ou mais módulos.
    configs/
        # Configurações globais do projeto.
        axios/
            # Configuração base do Axios com o endpoint definido uma única vez.
        providers/
            # Providers utilizados nos contextos necessários.
        react-query/
            # Configuração do React Query para melhor desempenho.
        styles/
            # Configurações globais e customizações de bibliotecas externas.
    constants/
        # Definição de todas as constantes utilizadas no projeto.
    entities/
        # Definição de todas as interfaces/models dos módulos.
    modules/
        # Módulos de acordo com a necessidade do projeto.
        components/
            # Componentes específicos de cada módulo.
        hooks/
            # Hooks intermediários para chamadas de APIs e lógicas necessárias.
        helpers/
            # Validações e outros helpers necessários.
        index.tsx
            # Integração de todos os componentes do módulo.
    services/
        # Criação dos services com endpoints e hooks para utilização nos módulos necessários.
    utils/
        # Métodos auxiliares para toda a aplicação, como formatação, entre outros.


Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.
