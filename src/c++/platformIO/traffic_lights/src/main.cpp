#include <Arduino.h>

#define rows 4
#define columns 6

#define LRx 4 
#define LYx 5 
#define LGx 6 
#define LRy 7 
#define LYy 8 
#define LGy 9

struct LED{
  const int pin;
  const int state;
};

const LED phases[rows][columns] = {
  {{LRx, 1}, {LYx, 0}, {LGx, 0}, {LRy, 0}, {LYy, 0}, {LGy, 1}},
  {{LRx, 1}, {LYx, 0}, {LGx, 0}, {LRy, 0}, {LYy, 1}, {LGy, 0}},
  {{LRx, 0}, {LYx, 0}, {LGx, 1}, {LRy, 1}, {LYy, 0}, {LGy, 0}},
  {{LRx, 0}, {LYx, 1}, {LGx, 0}, {LRy, 1}, {LYy, 0}, {LGy, 0}}
};

bool btn_state_x = false;
bool btn_state_y = false;

void change_state_btn_x(){
	btn_state_x = true;
}

void change_state_btn_y(){
	btn_state_y = true;
}

void setup(){
  for(int i = 4; i < 12; i++){
  	pinMode(i, OUTPUT);
  }
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  attachInterrupt(digitalPinToInterrupt(2), change_state_btn_x, RISING);
  attachInterrupt(digitalPinToInterrupt(3), change_state_btn_y, RISING);
  Serial.begin(9600);
}
  
void loop(){
  for(int i = 0; i < rows; i++){        
    for(int j = 0; j < columns; j++){
      digitalWrite(phases[i][j].pin, phases[i][j].state);
    }  
    
    i == 0 || i == 2 ? delay(25000) : delay(15000);      

    if(btn_state_x == true && (i == 2 || i == 3)) btn_state_x = false;  
    if(btn_state_y == true && (i == 0 || i == 1)) btn_state_y = false; 
    
    if(btn_state_x == false && btn_state_y == false) delay(5000);  
  }  
}
