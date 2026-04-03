# 🖥️ Dashboard de Monitoramento de Infraestrutura

Um painel visual moderno, responsivo e **conectado em tempo real** para monitoramento do estado de servidores, bancos de dados e serviços críticos. Este projeto foi desenvolvido para demonstrar habilidades de engenharia de software aplicadas a cenários de **DevOps e SRE (Site Reliability Engineering)**.

---

## 🚀 Funcionalidades

*   **Monitoramento Real (Telemetria):** Diferente de simulações estáticas, o painel utiliza a **Fetch API** para consumir dados reais da **GitHub Status API**, monitorando a saúde de serviços externos.
*   **Atualização Inteligente:** Sistema assíncrono que consulta APIs oficiais a cada 60 segundos, respeitando boas práticas de tráfego e limites de requisição (Rate Limiting).
*   **Alertas Visuais Dinâmicos:** O estado dos nós muda automaticamente entre **Operante, Alerta e Falha** com base no retorno real das APIs, alterando classes CSS e cores dos badges em tempo real.
*   **Interface High-Availability:** Design focado em legibilidade, utilizando o efeito *pulse* para indicar que o sistema de monitoramento está ativo.
*   **Containerização Profissional:** Ambiente 100% isolado e reprodutível utilizando **Docker** e **Nginx**.

---

## 🛠️ Tecnologias e Conceitos Utilizados

*   **Frontend Core:** HTML5 Semântico e CSS3 Avançado (Flexbox, Grid e Variáveis CSS).
*   **JavaScript Moderno (ES6+):** Manipulação de DOM, Promises e o padrão **Async/Await** para operações não-bloqueantes.
*   **Docker & Docker Compose:** Orquestração de containers para garantir que o ambiente de desenvolvimento seja idêntico ao de produção.
*   **Nginx:** Servidor web de alta performance configurado para servir os ativos estáticos dentro do container.
*   **Arquitetura de Sistemas:** Separação clara entre a camada de apresentação, lógica de negócio e infraestrutura.

---

## 📦 Como rodar o projeto localmente (Método Recomendado)

A maneira mais rápida e profissional de rodar este painel é utilizando o **Docker**, garantindo que o ambiente seja idêntico ao de produção sem precisar instalar dependências no seu sistema host.

### Pré-requisitos
*   **Docker** instalado.
*   **Docker Compose** instalado.

### Passo a passo

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/Carlosredoan/dashboard-monitoramento.git](https://github.com/Carlosredoan/dashboard-monitoramento.git)
    cd dashboard-monitoramento
    ```

2.  **Suba o ambiente com Docker Compose:**
    ```bash
    docker-compose up -d
    ```

3.  **Acesse no seu navegador:**
    O painel estará disponível em [http://localhost:8080](http://localhost:8080)

---

## 🐳 Estrutura de Infraestrutura

O projeto utiliza uma imagem leve baseada em **Linux Alpine** para o Nginx, garantindo segurança e baixo consumo de recursos:



*   **Porta Local:** 8080
*   **Servidor Web:** Nginx (Alpine-based)
*   **Persistência:** Volumes configurados para refletir alterações de código em tempo real durante o desenvolvimento.

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar, estudar e modificar.

---
**Desenvolvido por Carlos Redoan** 🚀