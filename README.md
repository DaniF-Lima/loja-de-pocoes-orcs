# O Orco Sorridente - Poções e Cervejas para Gente Resistente!

Bem-vindo ao "O Orco Sorridente," um protótipo de site de e-commerce fictício para uma loja de poções Orc. Este projeto apresenta um design web temático com elementos interativos, construído puramente com HTML, CSS e JavaScript vanilla. O site visa fornecer uma experiência imersiva e bem-humorada, imitando como um Orc administraria uma loja online.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Pilha de Tecnologias](#pilha-de-tecnologias)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Principais Funcionalidades JavaScript](#principais-funcionalidades-javascript)
- [Tema Visual e Design](#tema-visual-e-design)
- [Como Executar](#como-executar)
- [Melhorias Futuras Potenciais](#melhorias-futuras-potenciais)

## Visão Geral

"O Orco Sorridente" é um site estático de múltiplas páginas projetado com um forte tema de fantasia Orc. Os usuários podem navegar por várias categorias de poções e cervejas, visualizar detalhes de produtos (embora simplificados) e interagir com diversos recursos de e-commerce simulados. O projeto enfatiza a consistência temática na linguagem, design e interações do usuário.

## Funcionalidades

*   **Design Temático Orc:** Texto imersivo em "dialeto Orc" por todo o site, uma paleta de cores rústica e fontes temáticas ('Uncial Antiqua' para títulos, 'Vollkorn' para o corpo do texto).
*   **Página Inicial (`index.html`):**
    *   Seção "Especiais do Chefe Guerreiro" com ofertas selecionáveis.
    *   "Cerveja Mais Consumida" (produto em destaque).
    *   Grade de "Outros Grogs e Gostosuras" com caixas de seleção.
*   **Categorização e Listagem de Produtos:**
    *   `all-brews.html`: Uma página de visão geral listando todos os tipos de cervejas.
    *   Páginas de categoria dedicadas:
        *   `grogs-of-mending.html` (Grogs de Conserto)
        *   `elixirs-of-might.html` (Elixires de Força)
        *   `tricky-concoctions.html` (Concoctos Ardis)
        *   `rare-scraps.html` (Restos e Pedaços Raros - para ingredientes)
    *   `bargains.html`: Uma página para itens com desconto.
*   **Elementos Interativos (Orientados por JavaScript):**
    *   Navegação suspensa (dropdown) ativada por clique para "Tipos de Cerveja".
    *   Funcionalidade simulada de "Adicionar ao Estoque" / "Pegar!" através de caixas de seleção nas listagens de produtos, fornecendo mensagens de feedback ao usuário.
    *   Ações simuladas no cabeçalho (Lista de Desejos, Saco de Pilhagem, Entrar) usando popups de alerta.
    *   Funcionalidade de busca simulada no cabeçalho com um popup de alerta.
*   **Página de Contato (`shout-at-us.html`):**
    *   Uma página "Grite Conosco" com um formulário de contato (o envio é simulado com um alerta).
*   **Inscrição na Newsletter:**
    *   Um formulário persistente de inscrição na newsletter no rodapé de cada página.
    *   Um pop-up de newsletter temporizado (atraso de 7 segundos), baseado em sessão (`newsletterPopup`), que aparece uma vez por sessão do navegador.
*   **Página Estática "Sobre Nós" (`our-warband.html`):**
    *   Apresenta os mestres cervejeiros fictícios por trás de "O Orco Sorridente."
*   **Componentes Compartilhados:**
    *   Cabeçalho consistente com logo, busca, ações do usuário e navegação principal em todas as páginas.
    *   Rodapé consistente com links do site, informações de contato, ícones de mídia social (placeholders) e formulário de newsletter.
    *   Ano de copyright dinâmico no rodapé.

## Pilha de Tecnologias

*   **HTML5:** Marcação semântica para estruturar o conteúdo.
*   **CSS3:** Estilização personalizada para layout, tipografia, cores e responsividade.
    *   Utiliza Google Fonts: 'Uncial Antiqua' e 'Vollkorn'.
    *   Técnicas de layout incluem Flexbox e CSS Grid.
*   **JavaScript Vanilla (ES6+):** Para manipulação do DOM, tratamento de eventos e funcionalidades interativas.
    *   Nenhuma biblioteca ou framework externo é utilizado.
    *   Usa `sessionStorage` для o comportamento do pop-up da newsletter.
*   **Pilha de Tecnologias**

## Estrutura de Arquivos

*   **Arquivos .html:** Páginas individuais do site.
*   **style.css:** Contém todas as regras CSS para estilizar o site.
*   **script.js:** Contém toda a lógica JavaScript para interatividade.
*   **assets/:** Diretório para imagens e outros ativos estáticos. (Nota: Os caminhos das imagens no HTML assumem que estão em um subdiretório `assets/`).

## Principais Funcionalidades JavaScript

O arquivo `script.js` lida com o seguinte:

1.  **Ano Dinâmico no Rodapé:** Atualiza o ano de copyright automaticamente.
2.  **Menu Dropdown de Navegação:** Habilita a funcionalidade de clique para alternar o menu suspenso "Tipos de Cerveja" na navegação principal, incluindo mudanças no indicador de seta.
3.  **Feedback de Seleção de Produto:** Quando uma caixa de seleção de produto (por exemplo, "Pegar!") é alternada na página inicial ou nas páginas de categoria:
    *   Registra a ação no console.
    *   Exibe uma mensagem de feedback temporária na tela (por exemplo, "[Nome do Produto] adicionado ao seu estoque!").
4.  **Ações Simuladas no Cabeçalho:** Clicar em "Lista de Desejos," "Saco de Pilhagem," ou "Entrar" no cabeçalho dispara uma mensagem `alert()` simulando a ação.
5.  **Formulário Simulado de Newsletter no Rodapé:**
    *   Realiza validação básica de e-mail (presença de `@` e `.`).
    *   Mostra uma mensagem `alert()` após o envio (simulado) bem-sucedido.
6.  **Funcionalidade de Busca Simulada:**
    *   O botão de busca no cabeçalho dispara um `alert()` com o termo de busca inserido ou um aviso se a entrada estiver vazia.
    *   Pressionar Enter na entrada de busca também dispara a busca.
7.  **Lógica do Pop-up da Newsletter:**
    *   Aparece após um atraso de 7 segundos ao carregar a página.
    *   Usa `sessionStorage` para garantir que apareça apenas uma vez por sessão do navegador.
    *   Pode ser fechado através de um botão de fechar ou da tecla `Escape`.
    *   O envio do formulário dentro do pop-up realiza validação básica de e-mail e mostra um `alert()`, depois esconde o pop-up.

## Tema Visual e Design

*   **Paleta:** O esquema de cores primário gira em torno de tons terrosos e rústicos:
    *   Fundos: Verde Musgo Escuro (`#3A4F2A`), Pergaminho/Bege Claro (`#E8DCC3`).
    *   Texto e Destaques: Marrom Escuro (`#3E2723`), Marrom Madeira Escura (`#5D4037`), Ouro Fosco (`#D4BF8C`), Verde Oliva (`#6B8E23`, `#556B2F`).
*   **Tipografia:**
    *   Títulos: 'Uncial Antiqua' (uma fonte decorativa, estilo fantasia).
    *   Texto do Corpo: 'Vollkorn' (uma fonte serifada clássica e legível).
*   **Sensação Geral:** O design visa uma estética de fantasia Orc robusta, ligeiramente cômica e imersiva. Os elementos são projetados para parecerem um tanto artesanais ou improvisados, de acordo com o tema.

## Como Executar

Este é um site estático. Nenhum processo de build ou servidor é necessário.

1.  Certifique-se de que todos os arquivos (`.html`, `style.css`, `script.js` e a pasta `assets` com seu conteúdo) estejam na mesma estrutura de diretórios descrita.
2.  Abra qualquer um dos arquivos `.html` (por exemplo, `index.html`) em um navegador web moderno (como Chrome, Firefox, Edge, Safari).

## Melhorias Futuras Potenciais

*   **Funcionalidade Real de Carrinho de Compras:** Implementar armazenamento local ou um backend para gerenciar um carrinho de compras.
*   **Contas de Usuário e Login:** Desenvolver um sistema para registro e login de usuários.
*   **Integração com Backend:** Conectar a um serviço de backend para dados dinâmicos de produtos, processamento de pedidos e gerenciamento de usuários.
*   **Busca e Filtragem Avançadas:** Implementar opções mais sofisticadas de busca e filtragem de produtos.
*   **Melhorias de Acessibilidade (A11y):** Realizar uma auditoria completa de acessibilidade e implementar mais papéis ARIA e melhorias na navegação por teclado.
*   **Feedback da UI:** Substituir mensagens `alert()` por componentes de feedback da UI mais integrados e menos intrusivos (por exemplo, notificações toast, mensagens inline).
*   **Conteúdo Mais Dinâmico:** Buscar dados de produtos de um arquivo JSON ou API em vez de codificá-los diretamente no HTML.
*   **Refinar Estilização e Responsividade:** Melhorar ainda mais o CSS para maior compatibilidade entre dispositivos e polimento visual.