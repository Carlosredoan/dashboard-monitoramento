# 🖥️ Dashboard de Monitoramento de Infraestrutura

Um painel visual moderno e responsivo para monitoramento em tempo real do estado de servidores, bancos de dados e containers. Desenvolvido para simular a visão operacional de uma equipe de DevOps/SRE.

---

## 🚀 Funcionalidades

* **Atualização Dinâmica:** Os dados de performance (CPU, RAM, Status) são atualizados a cada 3 segundos em segundo plano, simulando o consumo de uma API real.
* **Alertas Visuais:** O estado dos nós muda automaticamente (Operante, Alerta, Falha) com base nas métricas, alterando as cores dos badges.
* **Design Responsivo:** Interface adaptável a qualquer tamanho de tela utilizando tecnologias modernas de CSS.
* **Containerização Profissional:** Ambiente isolado e pronto para deploy utilizando Docker e Nginx.

---

## 🛠️ Tecnologias e Conceitos Utilizados

* **HTML5 & CSS3:** Estrutura semântica, Flexbox, Grid e Animações nativas.
* **JavaScript (Vanilla/ES6+):** Manipulação de DOM, Funções Assíncronas e Template Strings.
* **Docker & Docker Compose:** Containerização e orquestração do ambiente local.
* **Nginx:** Servidor web de alta performance para servir a aplicação.

---

## 📦 Como rodar o projeto localmente (Método Recomendado)

A maneira mais rápida e profissional de rodar este painel é utilizando o **Docker**, garantindo que o ambiente seja idêntico ao de produção.

### Pré-requisitos
- [Docker](https://docs.docker.com/get-docker/) instalado.

### Passo a passo
1. Clone este repositório:
   ```bash
   git clone [https://github.com/Carlosredoan/dashboard-monitoramento.git](https://github.com/Carlosredoan/dashboard-monitoramento.git)