# JavaScript Obfuscator / Ofuscador de JavaScript

![Project License](https://img.shields.io/badge/license-MIT-blue.svg) ![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)

[English](#english) | [Português](#português)

---

<a name="english"></a>
## 🇺🇸 English

### Overview
This project is a high-performance **JavaScript Obfuscator** web application built with **Next.js** and **TypeScript**. Originally conceived as a Java obfuscator, it was pivoted to focus on JavaScript to leverage the powerful `javascript-obfuscator` engine, providing industry-standard protection for your client-side code.

The goal is to provide a user-friendly interface to protect your source code from reverse engineering, theft, and tampering.

> I made this out of boredom just to have one more project in my portfolio/list of works.

### Features

This obfuscator includes a wide range of advanced protection techniques:

-   **Variable & Function Renaming**: Replaces meaningful identifiers with hex or mangled names, making the code unreadable.
-   **String Encryption**: Encrypts string literals using Base64 and string rotation, injecting decryption logic into the code.
-   **Number Obfuscation**: Converts numeric literals into complex arithmetic expressions (e.g., `123` becomes `(-0x1a8f + 0x1b0a)`).
-   **Control Flow Flattening**: Completely restructures the logic flow (loops, ifs) into opaque switch statements, destroying the original code structure.
-   **Dead Code Injection**: randomly inserts blocks of code that "do nothing" but look real, confusing analysis tools.
-   **Split Strings**: Chunks strings into smaller pieces concatenated at runtime.
-   **Debug Protection**: Prevents users from un-obfuscating or inspecting the code using Browser DevTools (freezes the browser if DevTools is opened).
-   **Self Defending**: The code breaks itself if it detects formatting (beautifying) or tampering.

### Technologies
-   **Frontend**: Next.js 14 (App Router), React, CSS Modules.
-   **Language**: TypeScript.
-   **Editor**: Monaco Editor (VS Code web integration).
-   **Engine**: `javascript-obfuscator` (v4.0+).

### Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

---

<a name="português"></a>
## 🇧🇷 Português

### Visão Geral
Este projeto é uma aplicação web de alta performance para **Ofuscação de JavaScript**, construída com **Next.js** e **TypeScript**. Originalmente concebido para Java, o projeto migrou para focar em JavaScript, utilizando o poderoso motor `javascript-obfuscator` para oferecer proteção de nível industrial para seu código client-side.

O objetivo é fornecer uma interface amigável para proteger seu código-fonte contra engenharia reversa, roubo e modificações não autorizadas.

> Fiz isso no tédio apenas para ter mais um projeto em minha lista de trabalhos.

### Funcionalidades

Este ofuscador inclui uma vasta gama de técnicas avançadas de proteção:

-   **Renomeação de Variáveis e Funções**: Substitui nomes legíveis por identificadores hexadecimais ou aleatórios, tornando a leitura impossível.
-   **Encriptação de Strings**: Criptografa textos usando Base64 e rotação, e injeta lógica de descriptografia no código.
-   **Ofuscação de Números**: Converte números simples em expressões matemáticas complexas (ex: `123` vira `(-0x1a8f + 0x1b0a)`).
-   **Achatamento de Fluxo de Controle (Control Flow Flattening)**: Reestrutura completamente a lógica (loops, ifs) em switch-cases opacos, destruindo a estrutura original.
-   **Injeção de Código Morto (Dead Code)**: Insere blocos de código aleatórios que "não fazem nada" mas parecem reais, confundindo ferramentas de análise.
-   **Divisão de Strings (Split Strings)**: Quebra textos em pedaços menores concatenados em tempo de execução.
-   **Proteção de Debug**: Impede que usuários inspecionem o código usando o DevTools do navegador (trava o navegador se o DevTools for aberto).
-   **Auto-Defesa (Self Defending)**: O código para de funcionar se detectar formatação (beautify) ou alterações no arquivo.

### Tecnologias
-   **Frontend**: Next.js 14 (App Router), React, CSS Modules.
-   **Linguagem**: TypeScript.
-   **Editor**: Monaco Editor (integração web do VS Code).
-   **Motor**: `javascript-obfuscator` (v4.0+).

### Como Rodar

1.  **Instalar Dependências**:
    ```bash
    npm install
    ```
2.  **Rodar Servidor de Desenvolvimento**:
    ```bash
    npm run dev
    ```
3.  **Build para Produção**:
    ```bash
    npm run build
    npm start
    ```
