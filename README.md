# CodeQuest Activity Provider

Este **Activity Provider (AP)** desenvolvido no âmbito da unidade curricular de **Arquitetura e Padrões de Software** (Mestrado em Engenharia Informática e Tecnologia Web - Universidade Aberta), é responsável por receber submissões de código, executá-las num ambiente controlado, testar a sua validade e atribuir uma classificação baseada em estratégias configuráveis.

---

## Arquitetura e Padrões de Software

Este projeto foi desenhado com foco na extensibilidade e desacoplamento, implementando três tipos de padrões GoF (Gang of Four):

### 1. Padrão Comportamental: Strategy
**Problema:** A necessidade de suportar diferentes critérios de avaliação (ex: "Tudo ou Nada" vs. "Crédito Parcial") sem encher o código de `if/else`.
**Solução:**
* `IGradingStrategy` (Interface)
* `StrictGradingStrategy`: Atribui 100% apenas se todos os testes passarem.
* `PartialGradingStrategy`: Calcula a nota proporcionalmente ao número de testes passados.

### 2. Padrão Criacional: Abstract Factory
**Problema:** A necessidade de criar famílias de objetos relacionados (Compiladores e Runners) para diferentes linguagens (Python, C) sem acoplar o sistema a classes concretas.
**Solução:**
* `LanguageFactory`: Interface para criação.
* `PythonFactory` / `CFactory`: Implementações concretas que instanciam os respetivos *Runners*.

### 3. Padrão Estrutural: Adapter
**Problema:** Integrar o sistema com a interface do cliente (Inven!RA) sem alterar o núcleo do AP.
**Solução:**
* `InveniraAdapter`: Traduz os pedidos HTTP externos para o formato compreendido pelo `DeployService`.

---

## Refatorização e Qualidade de Código

Durante a análise de **Antipadrões de Desenvolvimento**, foi identificado e corrigido o seguinte problema:

### Correção: Cut-and-Paste Programming
**Identificação:** A lógica de manipulação de ficheiros temporários (I/O) estava duplicada nos vários *Runners* (`PythonTestRunner`, etc.), violando o princípio DRY (*Don't Repeat Yourself*).
**Solução (Refatorização):**
* Criação do componente utilitário **`FileHandler`**.
* Implementação de **Reutilização Black Box**: Os *Runners* agora delegam a criação e limpeza de ficheiros e geração de IDs únicos (via `uuid`) a este componente centralizado.

---

## Instalação e Execução


Clone o repositório:
```Bash
git clone https://github.com/ruipsl95/codequest-ap
```
Instale as dependências (incluindo uuid):
```Bash
npm install
npm install uuid@8.3.2
```
Execução
Para iniciar o servidor:

```Bash
npm start
```
O serviço ficará disponível (por defeito) em http://localhost:3000.