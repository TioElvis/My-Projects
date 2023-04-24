# Semaforo a dos vias 

Un ejemplo de un semaforo a dos vias, escrito en el lenguaje de programacion c++ para arduino nanoatmega328.

## Como lo hice?

Dividi los semaforos en dos maneras, el primer semaforo estara en el eje x y el segundo estara en el eje y.

![Ejemplo](traffic_lights.png)

Con esta idea, dividi cada fase del semaforo:

  1. Primera fase:
      - LRx: 1 -> El LED rojo del semaforo del eje x estara encendido.
      - LVy: 1 -> El LED verde del semaforo del eje y estara encendido.
      - Todos los demas LEDs estaran apagados.

  2. Segunda fase:
      - LRx: 1 -> El LED rojo del semaforo del eje x estara encendido.
      - LYy: 1 -> El LED amarillo del semaforo del eje y estara encendido.
      - Todos los demas LEDs estaran apagados.

  3. Tercera fase:
      - LVx: 1 -> El LED verde del semaforo del eje x estara encendido.
      - LRy: 1 -> El LED rojo del semaforo del eje y estara encendido.
      - Todos los demas LEDs estaran apagados. 

  4. Cuarta fase:
      - LYx: 1 -> El LED amarillo del semaforo del eje x estara encendido.
      - LRy: 1 -> El LED rojo del semaforo del eje y estara encendido.
      - Todos los demas LEDs estaran apagados. 

Estas fases las almacene en un array de dos dimensiones, la primera es el numero de fases y la segunda es el numero de LEDs. El tipo del array es una estructura de datos.

```
struct LED{
  const int pin; // Numero del pin que se encuentra el LED.
  const int state; // Estado del LED.
};
```

Siguiendo con el codigo, dentro el void setup() hice lo siguiente:

```
  // Bucle que declara cada LED.
  for(int i = 4; i < 12; i++){
  	pinMode(i, OUTPUT);
  }
  pinMode(2, INPUT); // Boton del paso peatonal del semaforo del eje x.
  pinMode(3, INPUT); // Boton del paso peatonal del semaforo del eje x.
  attachInterrupt(digitalPinToInterrupt(2), change_state_btn_x, RISING);
  attachInterrupt(digitalPinToInterrupt(3), change_state_btn_y, RISING);
  Serial.begin(9600);
```




