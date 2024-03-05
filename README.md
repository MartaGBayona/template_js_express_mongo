# MONGO DB

Es una base de datos no relacional. Las tablas las llamamos colecciones y a cada uno de los registros lo llamamos documentos. Esos documentos son muy parecidos a objetos json pero se llaman BSON porque son archivos binarios (seguiremos escribiendo en formato json). Es mas anarquico, en las relacionales deben tener los mismo campos. Esta libertad permite que sea escalable porque a futuro cambia la estructura de los documentos. Cualquier base de datos como las redes sociales manejan este tipo de sistema, son más rápidas que las relacionales porque son objetos binarios muy ligeros.
En código podemos exigir algunos datos. 
Cuando decimos que una aplicacion es escalable hablamos de aplicaciones que crecen mucho hacia arriba y a los lados. Cuando hablamos de escalabilidad hacia arriba (alojada en un servidor, una maquina con memoria, cpu...) mejoramos la máquina. La escalabilidad horizontal redistribuye la carga de nuestra aplicación en distinas aplicaciones clon, y el balanceador es el encargado de redirigir las peticiones para desahogar el sistema.


``` bash
$ npm init --yes
```

``` bash
$ npm i express
```

``` bash
$ npm nodemon -D
```

``` bash
$ npm i dotenv -E
```

``` json
{
    "type": "module"
}
```