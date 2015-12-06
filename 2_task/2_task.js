// на 3 переменные:
var a = 10;
var b = 30;
var c = 20;
if ((c>b) && (b>a)) {
	c *= 10; b *= 5; a;
} else if ((a>b) && (b>c)) {
    a *= 10; b *= 5; c;
}  else if ((a>c) && (c>b)) {
	a *= 10; c *= 5; b;
} else if ((c>a) && (a>b)) {
	c *= 10; a *= 5; b;
} else if ((b>a) && (a>c)) {
	b *= 10; a *= 5; c;
} else if ((b > c) && (c>a)) {
   b *= 10; c *= 5; a;
}
else {
   a; b; c;
}