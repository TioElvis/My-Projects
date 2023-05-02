#include <Arduino.h>

#define Phases 4 // Phases
#define LEDs 8 // Number of the LEDs

// Semaforo X.
#define LRx 4 
#define LYx 5 
#define LGx 6 

// Semaforo Y.
#define LRy 7 
#define LYy 8 
#define LGy 9

// Crosswalk traffic lights
#define LCWx 10
#define LCWy 11

struct LED{
  const int pin;
  const int state;
};

const LED _array[Phases][LEDs] = {
  {{LRx, 1}, {LYx, 0}, {LGx, 0}, {LRy, 0}, {LYy, 0}, {LGy, 1}, {LCWx, 0}, {LCWy, 1}},
  {{LRx, 1}, {LYx, 0}, {LGx, 0}, {LRy, 0}, {LYy, 1}, {LGy, 0}, {LCWx, 0}, {LCWy, 1}}, 
  {{LRx, 0}, {LYx, 0}, {LGx, 1}, {LRy, 1}, {LYy, 0}, {LGy, 0}, {LCWx, 1}, {LCWy, 0}},
  {{LRx, 0}, {LYx, 1}, {LGx, 0}, {LRy, 1}, {LYy, 0}, {LGy, 0}, {LCWx, 1}, {LCWy, 0}}
};


bool crosswalk_x = false;
bool crosswalk_y = false;

void change_state_crosswalk_x(){
	crosswalk_x = true;
}

void change_state_crosswalk_y(){
	crosswalk_y = true;
}

void setup(){
  for(int i = 4; i < 12; i++){
  	pinMode(i, OUTPUT);
  }
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  attachInterrupt(digitalPinToInterrupt(2), change_state_crosswalk_x, RISING);
  attachInterrupt(digitalPinToInterrupt(3), change_state_crosswalk_y, RISING);  
}
  
void loop(){
  for(int i = 0; i < Phases; i++){        
    for(int j = 0; j < LEDs; j++){
      digitalWrite(_array[i][j].pin, _array[i][j].state);
    }  
    
    i == 0 || i == 2 ? delay(25000) : delay(15000);      

    if(crosswalk_x == true && i == 2) crosswalk_x = false;  
    if(crosswalk_y == true && i == 0) crosswalk_y = false; 
    
    if(crosswalk_x == false && crosswalk_y == false) delay(5000);  
  }  
}
