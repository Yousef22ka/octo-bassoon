A simple script to compress alphabetic strings in mixed case.

EG
```
var input1 = 'abc';   //compressor(input1) = 'abc'  no compression possible
var input2 = 'aaabcdde';  //compressor(input2) = 'a3bcd2e'  repeat counts for repeated letters
```

The function is case-insensitive but will throw on null, undefined, or non-alpha ([^a-zA-Z]+) input.
