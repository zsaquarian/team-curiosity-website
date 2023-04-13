<script lang="ts">
  import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<CodeBlock language="arduino" code={`
// these are our pins
const int IRL = 3;
const int IRR = 4;
const int L1 = 5;
const int L2 = 6;
const int R1 = 7;
const int R2 = 8;
const int ENL = 9;
const int ENR = 10;
const int SPEED = 700;

void setup() {
  pinMode(IRL, INPUT);
  pinMode(IRR, INPUT);

  pinMode(L1, OUTPUT);
  pinMode(L2, OUTPUT);

  pinMode(R1, OUTPUT);
  pinMode(R2, OUTPUT);

  pinMode(ENL, OUTPUT);
  pinMode(ENR, OUTPUT);

  // we can use Serial for debugging output
  Serial.begin(9600);
}

void loop() {
  bool left = digitalRead(IRL);
  bool right = digitalRead(IRR);

  // if there is an intersection, both IR sensors will detect black and the robot should just move forward
  // else, the robot should move in the direction where there is black
  // | IR Left | IR Right | Left Motor | Right Motor |
  // | ------- | -------- | ---------- | ----------- |
  // | 1       | 1        | Forward    | Forward     |
  // | 0       | 1        | Forward    | Backward    |
  // | 1       | 0        | Backward   | Forward     |
  if (left && right) {
    digitalWrite(L1, !left);
    digitalWrite(L2, left);

    digitalWrite(R1, !right);
    digitalWrite(R2, right);
  } else {
    digitalWrite(L1, left);
    digitalWrite(L2, !left);

    digitalWrite(R1, right);
    digitalWrite(R2, !right);
  }

  // change the speed of the motors according to the SPEED constant, using the enable pins
  analogWrite(ENL, SPEED);
  analogWrite(ENR, SPEED);
}
`} />
