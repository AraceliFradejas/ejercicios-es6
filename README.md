# Ejercicios ES6 — JavaScript Moderno

Este repositorio contiene la entrega de **Ejercicios ES6 — JavaScript Moderno**, correspondiente al módulo **WEB DESIGN [ADVANCED]** del máster [**ROCK{THECODE} DESARROLLO WEB**](https://app.thepower.education/programs/65d60dfcdd8a1e42236248b1) de **ThePower**.

La entrega reúne 15 ejercicios prácticos para trabajar las principales características de JavaScript moderno (ES6).

## Requisitos

- Node.js 18 o superior.
- Un navegador web para visualizar el ejercicio 5.6 (interacción DOM).

## Ejecución

Cada ejercicio se puede ejecutar individualmente desde la raíz del proyecto:

```bash
npm run ejercicio -- 01
```

> Cambia `01` por el número correspondiente (del `01` al `15`).

Para verificar el estado completo y comprobar que todos los ejercicios están resueltos:

```bash
npm run revisar
```

Para el ejercicio 5.6, abre `ejercicios/05-filter/index.html` en el navegador y consulta la consola de las herramientas de desarrollo para ver el filtrado en tiempo real.

## Estructura del proyecto

- `ejercicios/`: Contiene los 15 ejercicios organizados por carpetas temáticas.
- `scripts/`: Utilidades para ejecutar (`ejercicio.js`) y auditar (`revisar.js`) los ejercicios.

## Contenido de los ejercicios

1. **`01-parametros`**: Arrow functions y parámetros predeterminados con valores por defecto.
2. **`02-destructuring`**: Desestructuración de objetos, arrays, funciones y desestructuración anidada.
3. **`03-spread`**: Copia superficial, concatenación y fusión de objetos asegurando inmutabilidad.
4. **`04-map`**: Transformación de datos y manipulación de propiedades en arrays.
5. **`05-filter`**: Filtrado de elementos con condiciones booleanas, transformación combinada y evento `input` en el DOM.
6. **`06-find`**: Búsqueda del primer elemento coincidente y composición/anidación de objetos.
7. **`07-reduce`**: Acumuladores para cálculo de totales, sumas condicionales y medias.
8. **`08-bonus`**: Combinación de `filter` y `reduce` para cálculo de promedios de categorías específicas.
9. **`09-for-of`**: Recorrido de arrays multidimensionales y deduplicación de categorías con `includes`.
10. **`10-media-sonidos`**: Combinación de `for...of` (arrays) y `for...in` (objetos) para calcular la media de volúmenes.
11. **`11-conteo-sonidos`**: Objeto acumulador de frecuencias de reproducción.
12. **`12-find-array-index`**: Implementación manual de búsqueda de índice de elementos en un array.
13. **`13-remove-item`**: Eliminación controlada de elementos con `splice` reutilizando `findArrayIndex`.
14. **`14-roll-dice`**: Simulación de tiradas de dados aleatorios de $N$ caras con `Math.random`.
15. **`15-swap`**: Intercambio de posiciones dentro de un array mediante destructuring assignment ES6.

## Autora

[AraceliFradejas](https://github.com/AraceliFradejas/AraceliFradejas/blob/main/README.md)
