#Modules required are imported and set up
from gpiozero import LED
import RPi. GPIO  as  GPIO
import time



def Lamp1_an():
    GPIO.output(36,False)
    GPIO.output(40,True)
    time.sleep(2)
    #RotGelb
    GPIO.output(38,True)
    time.sleep(3)
    GPIO.output(40,False)
    GPIO.output(38,False)
    GPIO.output(36,True)
  
def aus():
    GPIO.output(36,False)
    GPIO.output(38,False)
    GPIO.output(40,False)
    
   
    
    
    
led_rot = LED(6)
led_gruen = LED(5)
 
GPIO.setmode (GPIO.BOARD)
GPIO.setup(36, GPIO.OUT)
GPIO.setup(38, GPIO.OUT)
GPIO.setup(40, GPIO.OUT)

 
# Here the input pin to which the sensor is connected is declared.
GPIO_PIN = 18
GPIO.setup (GPIO_PIN, GPIO.IN , pull_up_down = GPIO.PUD_UP) 
 
# Pause between output is defined (in seconds) 
delayTime  =  0.1
 
print ("Sensor test [push CTRL+C to stop the test]") 
 
# Main program loop
try:
   while True:
        if GPIO.input(GPIO_PIN) == True:
            print ("No obstacle")
            led_gruen.on()
            #led_rot.on()
            
            
            
        else:
            print ("obstacle detected")
            led_gruen.off()
            led_rot.on()
            Lamp1_an()
            #time.sleep(2)
            

        # Reset + Delay
        time.sleep (delayTime) 
 
# Tidying up after the program has been terminated
except KeyboardInterrupt:
    GPIO.cleanup ()