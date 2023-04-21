#include <Arduino.h>

/*
 Titolo: Semaforo a due vie con Arduino nano.
 Allievo: Elvis Vera.   
 Classe: 3CT.
 Materia: Tecnologie e Progettazione di Sistemi di Telecomunicazioni.
 Scuola: IIS Einstein-Bachelet,  Roma.
 Data: 19/04/2023.        
*/

#define R1 2 // Led rosso del primo semaforo.
#define Y1 3 // Led giallo del primo semaforo.
#define G1 4 // Led verde del primo semaforo.
#define R2 9 // Led rosso del secondo semaforo.
#define Y2 8 // Led giallo del secondo semaforo.
#define G2 7 // Led verde del secondo semaforo.
#define PR2 5 // Led bianco del passaggio pedonale secondo semaforo.
#define PV2 6 // Led blu del passaggio pedonale primo semaforo.
int _delay = 15000;


const int rows = 4; 
const int colums = 8; 

struct led_struct{
  const int pin;
  const int state;
};

const led_struct phases[rows][colums] = {
  {{R1, 1}, {Y1, 0}, {G1, 0}, {R2, 0}, {Y2, 0}, {G2, 1}},        
  {{R1, 1}, {Y1, 0}, {G1, 0}, {R2, 0}, {Y2, 1}, {G2, 0}},
  {{R1, 0}, {Y1, 0}, {G1, 1}, {R2, 1}, {Y2, 0}, {G2, 0}},
  {{R1, 0}, {Y1, 1}, {G1, 0}, {R2, 1}, {Y2, 0}, {G2, 0}},
};

void a() {
  _delay = 10000;
}

void setup(){
  for(int i = 2; i < 10; i++){
    pinMode(i, OUTPUT);
  }
  pinMode(12, INPUT);
  attachInterrupt(digitalPinToInterrupt(12), a, RISING);
  Serial.begin(9600);
  Serial.println("Titolo: Semaforo a due vie con Arduino nano");
  Serial.println("Allievo: Elvis Vera.");
  Serial.println("Classe: 3CT.");
  Serial.println("Materia: Tecnologie e Progettazione di Sistemi di Telecomunicazioni.");
  Serial.println("Scuola: IIS Einstein-Bachelet,  Roma.");
  Serial.println("Data: 18/04/2023.");
}

void loop(){  
  for(int x = 0; x < rows; x++){    
    for(int y = 0; y < colums; y++){
      digitalWrite(phases[x][y].pin, phases[x][y].state);
    }
    delay(_delay);        
  }
}