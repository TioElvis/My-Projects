# Semaforo a dos vias 
Un ejemplo de un semaforo a dos vias, escrito en el lenguaje de programacion c++ para arduino nanoatmega328.

## Como lo hice?
Dividi los semaforos en dos maneras, el primer semaforo estara en el eje horizontal (X) y el segundo estara en el eje vertical (Y) y un semaforo aparte que sirve para saber que paso peatonal esta activo, el azul es del semaforo X y el blanco es del semaforo Y.

![Ejemplo](traffic_lights.png)

### Fases
Con esta idea, dividi cada fase del semaforo:

  1. Primera fase:
      - LRx: 1 -> El LED rojo del semaforo X estara encendido.
      - LVy: 1 -> El LED verde del semaforo Y estara encendido.
      - LCWx: 1 -> El LED blanco del paso peatonal estara encendido.
      - Todos los demas LEDs estaran apagados.

  2. Segunda fase:
      - LRx: 1 -> El LED rojo del semaforo X estara encendido.
      - LYy: 1 -> El LED amarillo del semaforo Y estara encendido.
      - LCWx: 1 -> El LED blanco del paso peatonal estara encendido.
      - Todos los demas LEDs estaran apagados.

  3. Tercera fase:
      - LVx: 1 -> El LED verde del semaforo X estara encendido.
      - LRy: 1 -> El LED rojo del semaforo Y estara encendido.
      - LCWx: 1 -> El LED blue del paso peatonal estara encendido.
      - Todos los demas LEDs estaran apagados. 

  4. Cuarta fase:
      - LYx: 1 -> El LED amarillo del semaforo X estara encendido.
      - LRy: 1 -> El LED rojo del semaforo Y estara encendido.
      - LCWx: 1 -> El LED blue del paso peatonal estara encendido.
      - Todos los demas LEDs estaran apagados. 

### Creando el array      
Estas fases las almacene en un array de dos dimensiones, la primera es el numero de fases y la segunda es el numero de LEDs. 

```
const LED _array[Phases][LEDs] = {
  {{LRx, 1}, {LYx, 0}, {LGx, 0}, {LRy, 0}, {LYy, 0}, {LGy, 1}, {LCWx, 0}, {LCWy, 1}},
  {{LRx, 1}, {LYx, 0}, {LGx, 0}, {LRy, 0}, {LYy, 1}, {LGy, 0}, {LCWx, 0}, {LCWy, 1}}, 
  {{LRx, 0}, {LYx, 0}, {LGx, 1}, {LRy, 1}, {LYy, 0}, {LGy, 0}, {LCWx, 1}, {LCWy, 0}},
  {{LRx, 0}, {LYx, 1}, {LGx, 0}, {LRy, 1}, {LYy, 0}, {LGy, 0}, {LCWx, 1}, {LCWy, 0}}
};
```

### Tipo del array
El tipo del array es una estructura de datos:

```
struct LED{
  const int pin; // Numero del pin que se encuentra el LED.
  const int state; // Estado del LED.
};
```

### Paso peatonal
El paso peatonal esta tanto para el semaforo X como el semaforo Y. Cuando viene pedido el paso peatonal bajamos el delay que tiene cada fase hasta que el paso peatonal pedido se efectue, despues reiniciamos el delay al que tenia por defecto.

Para esto declare dos variables globales de tipo booleano, crosswalk_x y crosswalk_y, estas variables inicializan con el valor false y cambian su estado cuando viene pedido el paso peatonal.

### void setup()
```
// Funcion que cambia el estadp de la variable crosswalk_x a true.
void change_state_crosswalk_x(){
	crosswalk_x = true;
}

// Funcion que cambia el estadp de la variable crosswalk_y a true.
void change_state_crosswalk_y(){
	crosswalk_y = true;
}

void setup(){
  // Declaramos cada pin que esta conectado a cada LED.
  for(int i = 4; i < 12; i++){
  	pinMode(i, OUTPUT);
  }
  pinMode(2, INPUT); // El pin 2 sera el boton del paso peatonal del semaforo X.
  pinMode(3, INPUT); // El pin 3 sera el boton del paso peatonal del semaforo Y.
  // Interferimos con el codigo cuando el boton viene pulsado y llamamos a la funcion conectada al boton.  
  attachInterrupt(digitalPinToInterrupt(2), change_state_crosswalk_x, RISING);
  attachInterrupt(digitalPinToInterrupt(3), change_state_crosswalk_y, RISING);  
}
```

### void loop()
```
void loop(){
  // Iteramo cada fase del array.
  for(int i = 0; i < Phases; i++){        
    // Iteramo cada LED y con el comando digitalWrite() pasamos como parametro el pin y el estado.
    for(int j = 0; j < LEDs; j++){
      digitalWrite(_array[i][j].pin, _array[i][j].state);
    } 

    /*
      Por defecto en la primera y tercera fase damos un delay de 25 segundos,
      de lo contrario si nos encontramos en otra fase el delay por defecto sera de 25 segundos.
    */
    i == 0 || i == 2 ? delay(25000) : delay(15000);      
    
    // Si el paso peatonal fue pedido y ya fue efectuado regresamos al valor inicial la variable.
    if(crosswalk_x == true && i == 2) crosswalk_x = false;  
    if(crosswalk_y == true && i == 0) crosswalk_y = false; 
    
    // Si el paso peatonal no fue pedido le agregamos 5 segundos mas a cada fase.
    if(crosswalk_x == false && crosswalk_y == false) delay(5000);  
  }  
}
```
