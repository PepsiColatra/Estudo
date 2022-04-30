 # JavaScript Core
* Linguagem de programação que roda no Navegador do usuário (front-end)
* Se você clicar em algum botão da página e aparece uma janela. Isso é o JavaScript

* Alteração do site ou aplicativo, conforme a interação do usuário
* Roda também no computador (back-end)

 ## 0 que podemos fazer ?
* Podemos criar aplicações web, mobile (React Native), desktop (Electron)
* Empresas famosas que usam
    * Facebook (Instagram, Whatsapp)
    * Google (Youtube, Gmail, Drive)
    * Uber
    * Netflix
    * TikTok

* 99.99% dos sites na web usam JavaScript
* Linguagem obrigatória para quem programa o Front-end Web

## 0 que vamos ver no curso?
- Tipos de dados
- Variáveis
- Funções
- Condicionais
- Estruturas de repetição

# Comentarios JS
// para comentarios em linha
/* comentarios 
em multi linha */
console.log('Bem vindos ao starter')


# Sintaxe
* Toda linguagem tem
* Uma boa comunicação necessita de uma boa sintaxe
* 82% dos erros para iniciantes programação

# Adicionar scrip

 <script src="./scripts.js"></script>

---------------------------------------------------------------------
#               TIPOS DE DADOS           #

# String
escritas com "" ou '' devem ficar dentro de (' " " ') (" ' ' ")
` crases ` permite escrita multi linha


# Number

 33 // inteiros
 12.5 // reais - float
 NaN // Not a Number
 Infinity // infinito

console.log(12.5 / "asdf") = NaN 
console.log(12 === 14)  (===) igual a, resultado verdadeiro ou falso


# Boolean
somente 2 valores
true // verdadeiro
false // falso


# Undefined vs null

* undefined
 * indefinido

* null
 * nulo
 * objeto que não possui nada dentro
 * diferente de indefinido


# Object
* Object
 * Objeto
 * Propriedades / Atributos
 * Funcionalidades / Métodos

{ propriedade: "valor" }


# Array (vetores)

 * Uma lista
 * Agrupamento de dado
 ["Mayk", 36]
 
 
# Tipos de dados 

Conforme o ECMAScript standard temos 9 tipos de dados:
 
* Data types
    * Primitive
    * Structural
    * Structural Primitive (null)

## Primitivos (não é objeto e não muda)

* String
* Number
* Boolean
* undefined
* symbol
* Big Int

## Estruturais

* Object
    * Array
    * Map
    * Set
    * Date
* Function


---------------------------------------------------------------------
#               Variáveis          #

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const

# Scope

* Determina a visibilidade de alguma variável no JS
{

}

# Block statement
js
// vamos iniciar um bloco
{
// aqui dentro é um bloco e posso colocar qualqer
código
} // aqui fechamos o bloco
0 bloco, também criará um novo escopo. Chamamos de block-scoped

# Para criar nomes de variavel
* JS é case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres Unicode

- Posso:
    * Iniciar com esses caracteres especiais: $
    * Iniciar com letras
    * Colocar acentos
    * Letras maísculas e minúsculas fazem diferença
- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome
- Ideal:
    * Criar nomes que fazem sentido
    * Que explique o que a variável é ou faz
    * camelCase
    * snake_case
    * Escrever em inglês
