## Clase 09 Prácticas con JavaScript: Torres de Hanoi

## Crear el juego de las Torres de Hanoi

El algoritmo de las Torres de Hanoi, Este juego tiene sus origenes en la cultura oriental y en una leyenda sobre el templo de Brahma cuya estructura simulaba una plataforma metálica con tres varillas y discos en su interior.

Juego de las Torres de Hanoi:
![Torres de Hanoi](./assets/torres_1.jpg)

El problema en cuestión suponia la existencia de tres varillas (A, B y C) o postes en los que alojaban discos (n discos) que se podían trasladar de una varilla a otra libremente pero con varias condiciones, cada disco era ligeramente inferior en diámetro al que estaba justo debajo de él.

## Requisitos para el algoritmo

Para completar esto van a necesitar de nuevo trabajar con un algoritmo recursivo.

La idea básica es la siguiente:

1. Mover los n-1 discos superiores del origen al auxiliar, utilizando el destino como auxiliar.
2. Mover el disco más grande del origen al destino.
3. Mover los n-1 discos del auxiliar al destino, utilizando el origen como auxiliar.

## En la siguiente pagina se puede testear el juego de las Torres de Hanoi:

https://www.geogebra.org/m/NqyWJVra
