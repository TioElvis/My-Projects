#include <Arduino.h>

/*
 Titolo: Semaforo a due vie
 Allievo: Elvis Vera
 Classe: 3CT
 Materia: Tecnologie e Progettazione di Sistemi di Telecomunicazioni
 Scuola: IIS Einstein-Bachelet,  Roma
 Data: 07/05/2023
*/

#define Phases 4 // Fasi
#define LEDs 8 // Numeri di LEDs

// Semaforo nel asse X
#define LRx 4 
#define LYx 5 
#define LGx 6 

// Semaforo nel asse Y
#define LRy 7 
#define LYy 8 
#define LGy 9

// Passaggi pedonali
#define LCWx 10
#define LCWy 11

// Struttura di dati che sarà il tipo dell'array
struct LED{
  const int pin;
  const int state;
};

// Array di due dimensioni che contiene le 4 fasi del semaforo a due vie
const LED _array[Phases][LEDs] = {
  {{LRx, 1}, {LYx, 0}, {LGx, 0}, {LRy, 0}, {LYy, 0}, {LGy, 1}, {LCWx, 0}, {LCWy, 1}},
  {{LRx, 1}, {LYx, 0}, {LGx, 0}, {LRy, 0}, {LYy, 1}, {LGy, 0}, {LCWx, 0}, {LCWy, 1}}, 
  {{LRx, 0}, {LYx, 0}, {LGx, 1}, {LRy, 1}, {LYy, 0}, {LGy, 0}, {LCWx, 1}, {LCWy, 0}},
  {{LRx, 0}, {LYx, 1}, {LGx, 0}, {LRy, 1}, {LYy, 0}, {LGy, 0}, {LCWx, 1}, {LCWy, 0}}
};

bool crosswalk_x = false; // Variabile che cambia quando viene premuto il pulsante del passaggo pedonale del semaforo dell'asse X
bool crosswalk_y = false; // Variabile che cambia quando viene premuto il pulsante del passaggo pedonale del semaforo dell'asse Y

// Funzione che cambia lo stato della variabile a true quando il passaggio pedonale del semaforo dell'asse X viene richiesto
void change_state_crosswalk_x(){
	crosswalk_x = true;
}

// Funzione che cambia lo stato della variabile a true quando il passaggio pedonale del semaforo dell'asse Y viene richiesto
void change_state_crosswalk_y(){
	crosswalk_y = true;
}

void setup(){
  for(int i = 4; i < 12; i++){
  	pinMode(i, OUTPUT);
  }
  pinMode(2, INPUT_PULLUP);
  pinMode(3, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(2), change_state_crosswalk_x, RISING); // Interferiamo nel programma e chiamiamo la funzione change_state_crosswalk_x
  attachInterrupt(digitalPinToInterrupt(3), change_state_crosswalk_y, RISING); // Interferiamo nel programma e chiamiamo la funzione change_state_crosswalk_y
  Serial.begin(9600); // Iniziamo la comunicazione
  Serial.println("Titolo: Semaforo a due vie");
  Serial.println("Allievo: Elvis Vera");
  Serial.println("Classe: 3CT");
  Serial.println("Materia: Tecnologie e Progettazione di Sistemi di Telecomunicazioni");
  Serial.println("Scuola: IIS Einstein-Bachelet,  Roma");
  Serial.println("Data: 07/05/2023");    
}
  
void loop(){
  // Iteramo la prima dimensione dell'array
  for(int i = 0; i < Phases; i++){
    // Iteramo la seconda dimensione dell'array e chiamiamo il comando digitalWrite e gli passiamo il pin e lo stato.    
    for(int j = 0; j < LEDs; j++){
      digitalWrite(_array[i][j].pin, _array[i][j].state);
    }    
    // Se siamo nella prima o terza fase del semaforo a due vie, diamo un delay di 25 secondi per default altrimenti nelle altre fasi sarà di 15 secondi
    i == 0 || i == 2 ? delay(25000) : delay(15000);    
    if(crosswalk_x == true && i == 2) crosswalk_x = false; // Se il passaggio pedonale viene richiesto e dopo viene efettuato, mettiamo false crosswalk_x
    if(crosswalk_y == true && i == 0) crosswalk_y = false; // Se il passaggio pedonale viene richiesto e dopo viene efettuato, mettiamo false crosswalk_y
    
    if(crosswalk_x == false && crosswalk_y == false) delay(5000);  // Se il passaggio pedonale non è venuto chiesto, aggiungiamo un delay di 5 secondi
  }  
}

