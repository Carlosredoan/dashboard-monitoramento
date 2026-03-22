# 🖥️ Dashboard de Monitoramento de Infraestrutura

Um painel visual moderno e responsivo para monitoramento em tempo real do estado de servidores, bancos de dados e containers. Desenvolvido para simular a visão operacional de uma equipe de DevOps/SRE.

## 🚀 Funcionalidades

- **Atualização Dinâmica:** Os dados de performance (CPU, RAM, Status) são atualizados a cada 3 segundos em segundo plano, simulando o consumo de uma API real sem recarregar a página.
- **Alertas Visuais:** O estado dos nós muda automaticamente (Operante, Alerta, Falha) com base nas métricas de carga simulada, alterando as cores das *badges* e os alertas visuais.
- **Design Responsivo:** Interface adaptável a qualquer tamanho de tela (Mobile, Tablet ou Desktop) utilizando tecnologias modernas de CSS.

## 🛠️ Tecnologias e Conceitos Utilizados

- **HTML5:** Estrutura semântica para melhor acessibilidade.
- **CSS3:** Variáveis nativas (Custom Properties), Flexbox, CSS Grid avançado e animações (`@keyframes`) para indicadores de estado.
- **JavaScript (Vanilla/ES6+):** - Manipulação de DOM.
  - Funções Assíncronas (`async/await`) e *Promises*.
  - Funções puras e métodos de iteração de *Arrays* (`.map`, `.join`).
  - *Template Strings* para renderização de componentes HTML.

## ⚙️ Como rodar o projeto localmente

1. Clone este repositório no seu terminal:
   ```bash
   git clone https://github.com/Carlosredoan/dashboard-monitoramento.git
   ```
2. Abra a pasta do projeto no VS Code.
3. Utilize a extensão **Live Server** para iniciar a aplicação.