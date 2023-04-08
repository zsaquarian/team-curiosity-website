<script lang="ts">
  import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

        We are defining all our inputs and outputs
        <CodeBlock language="arduino" code={`#define LftSensr  3
#define RghtSensr 4

#define LftMotrMvmnt_1   9
#define RghtMotrMvmnt_1  7

#define LftMotrMvmnt_2  6
#define RghtMotrMvmnt_2 8`}
        />
        Starting serial monitor, setting pin modes for inputs and outputs
        <CodeBlock language="arduino" code={`void setup() {
  Serial.begin(9600);

  //IR sensor input
  pinMode(LftSensr,  INPUT);
  pinMode(RghtSensr, INPUT);
  //Motor 1
  pinMode(LftMotrMvmnt_1,  OUTPUT);
  pinMode(RghtMotrMvmnt_1, OUTPUT);
  // Motor 2
  pinMode(LftMotrMvmnt_2,  OUTPUT);
  pinMode(RghtMotrMvmnt_2, OUTPUT);

  Serial.println("setup done");
}`} 
        />
          We are storing the values we receive form the sensor into a variable of character data type. The values of the sensor can be of two numbers 1 or 0, In an IR sensor 0 is for object detected and 1 is for object not detected. We found this by printing the values of the sensor in serial monitor(//Console Logs For Debugging).
        <CodeBlock language="arduino" code={`void loop() {
  char LftSnsr, RghtSnsr;

  /* read sensor values /
  LeftSnsr  = digitalRead(LftSnsr);
  RghtSnsr = digitalRead(RghtSnsr);`}
        />
