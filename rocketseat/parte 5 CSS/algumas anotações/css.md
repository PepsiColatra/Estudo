# Tipos numéricos
* <integer> - número inteiro como -10 ou 223
* <number> - número decimal como -2.4, 64 ou 0.234
* <dimension> - é um <number> com uma unidade junto: 90deg, 2s, 8px
* <percentage> - representa uma fração de outro número: 50%

## Unidades comuns
* <length> - é um dos mais usados no CSS e representa um valor de distância: px, em, vw
* <angle> - representa um ângulo: deg, rad, turn
* <time> - representa um tempo: s, ms
* <resolution> - representa resoluções para dispositivos: dpi


# Distâncias absolutas <lehgth>
São fixas e não alteram seu valor.
Unidade     Nome                Equivalência
cm          Centímetros         1cm = 96px/2.54
in          Inches (polegadas)  1in = 2.54cm = 96px
px          Pixels              1px = 1/96th of 1in

* o mais comum e mais utilizado é o **px**
* não recomendado usar cm

# Distâncias relativas
São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o
tamanho da tela.

* Benefício: Maior adaptação aos diferentes tipos de tela

Unidade     Relativo a
em          Tamanho da font do pai.
rem         Tamanho da font do elemento raiz (root/html)
vw          1% da viewport width (altura).
vh          1% da viewport height (largura).

# Posições
<position>

Representa um conjunto de coordenadas 2D:
 - top, right, bottom, left e center

 Usado para alguns tipos de propriedades
* Não confundir com a propriedade position

# Funções
Em programação, funções são reconhecidas por causar um reaproveitamento de
código.
* rgb()
* hsl()
* url()
* calc()

# Box Model
- Fundamental para fazer layouts para a web
- Maior facilidade para aplicar o cSS

## o que é?
Uma caixa retangular.
Essa caixa possui propriedades de uma caixa (2D)

- Tamanho (Largura x altura)    width | height
- Conteúdo                      content
- Bordas                        border
- Preenchimento interno         padding
- Espaços fora da caixa         margin

*Cada elemento na sua página, será considerado uma caixa.

# Cores
# Tipos
* background-color (para caixas)
* color (para textos)
* border-color (para caixas)
* outros
https://convertacolor.com/
