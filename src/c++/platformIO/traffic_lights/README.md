# Two-way Traffic Lights
Two-way Traffic Lights writin in c++ for arduino nanoatmega328 and uno.

Example in tinkercad: https://www.tinkercad.com/things/fqNFZuvJh8c

## How does it work?
I divided the traffic lights in two ways, the first traffic light will be on the horizontal axis (X) and the second will be on the vertical axis (Y).

There is a third traffic light that use for crosswalk traffic light, the blue LED is the crosswalk of the traffic light X and the white LED is the crosswalk of the traffic light Y

![Ejemplo](traffic_lights.png)

### Phases
With this idea i divided the phases in:

  1. First Phase:
      - LRx -> Red LED of the traffic light X is on.
      - LVy -> Green LED of the traffic light Y is on.
      - LCWy -> White LED of the crosswalk traffic light is on.
      - The others LEDs are off.

  2. Second Phase:
      - LRx -> Red LED of the traffic light X is on.
      - LYy -> Yellow LED of the traffic light Y is on.
      - LCWy -> White LED of the crosswalk traffic light is on.
      - The others LEDs are off.

  3. Third Phase:
      - LVx -> Green LED of the traffic light X is on.
      - LRy -> Red LED of the traffic light Y is on.
      - LCWx -> Blue LED of the crosswalk traffic light is on.
      - The others LEDs are off.

  4. Quarter Phase:
      - LYx -> Yellow LED of the traffic light X is on.
      - LRy -> Red LED of the traffic light Y is on.
      - LCWx -> Blue LED of the crosswalk traffic light is on.
      - The others LEDs are off.

### Declare the array      
I stored these phases inside an array of two dimensions, the first is the number of the phases and the second is the number of the LEDs.

```
const LED _array[Phases][LEDs] = {
  {{LRx, 1}, {LYx, 0}, {LGx, 0}, {LRy, 0}, {LYy, 0}, {LGy, 1}, {LCWx, 0}, {LCWy, 1}},
  {{LRx, 1}, {LYx, 0}, {LGx, 0}, {LRy, 0}, {LYy, 1}, {LGy, 0}, {LCWx, 0}, {LCWy, 1}}, 
  {{LRx, 0}, {LYx, 0}, {LGx, 1}, {LRy, 1}, {LYy, 0}, {LGy, 0}, {LCWx, 1}, {LCWy, 0}},
  {{LRx, 0}, {LYx, 1}, {LGx, 0}, {LRy, 1}, {LYy, 0}, {LGy, 0}, {LCWx, 1}, {LCWy, 0}}
};
```

### Type of the array
The type of the array is a struct:

```
struct LED{
  const int pin; // Number of the pin that the LED is connected.
  const int state; // State of the LED.
};
```

### Crosswalk
When the person presses the button for the crosswalk the delay decreases in each phase until the crosswalk is done, then we reset the delay to for default.

To do this i declare two global variables of type boolean, crosswalk_x y crosswalk_y, these varbiales has false for default and their state change when the person asks for the crosswalk.

### void setup()
```
// Function that change the state of the variable crosswalk_x to true 
void change_state_crosswalk_x(){
	crosswalk_x = true;
}

// Function that change the state of the variable crosswalk_y to true
void change_state_crosswalk_y(){
	crosswalk_y = true;
}

void setup(){
  // We declare each pin that the LED is connected.
  for(int i = 4; i < 12; i++){
  	pinMode(i, OUTPUT);
  }
  pinMode(2, INPUT); // The pin 2 will be the button that active the crosswalk X.
  pinMode(3, INPUT); // The pin 3 will be the button that active the crosswalk Y.
  // We interrupt the code when the button presses and call the fuction connected with the button.  
  attachInterrupt(digitalPinToInterrupt(2), change_state_crosswalk_x, RISING);
  attachInterrupt(digitalPinToInterrupt(3), change_state_crosswalk_y, RISING);  
}
```

### void loop()
```
void loop(){
  // We iterate each phase of the array.
  for(int i = 0; i < Phases; i++){        
    // We iterate each LED and with the command digitalWrite we passed as params the pin and the state of the LED.     
    for(int j = 0; j < LEDs; j++){
      digitalWrite(_array[i][j].pin, _array[i][j].state);
    } 

    
    // For default the first and the third phase have a delay of 25 second andthe others phases have 15 seconds.          
    i == 0 || i == 2 ? delay(25000) : delay(15000);      
    
    // When the crosswalk is done, we reset the variables to false.  
    if(crosswalk_x == true && i == 2) crosswalk_x = false;  
    if(crosswalk_y == true && i == 0) crosswalk_y = false; 
    
    // If the person doesn't ask the crosswalk we add a delay of 5 seconds.
    if(crosswalk_x == false && crosswalk_y == false) delay(5000);  
  }  
}
```
