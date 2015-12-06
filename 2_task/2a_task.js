// на 4 переменные:
var a = 10;
var b = 30;
var c = 20;
var d = 5;
if ((a>b) && (b>c) && (c>d)) {
	a *= 20; b *= 10; c *=5; d;
} else if ((a>b) && (b>d) && (d>c)) {
   a *= 20; b *= 10; d *=5; c;
} else if ((a>c) && (c>b) && (b>d)) {
   a *= 20; c *= 10; b *=5; d;
} else if ((a>c) && (c>d) && (d>b)) {
   a *= 20; c *= 10; d *=5; b;
} else if ((a>d) && (d>c) && (c>b)) {
   a *= 20; d *= 10; c *=5; b;
} else if ((a>d) && (d>b) && (b>c)) {
   a *= 20; d *= 10; b *=5; c;
} else if ((c>a) && (a>b) && (b>d)) {
   c *= 20; a *= 10; b *=5; d;
} else if ((c>a) && (a>d) && (d>b)) {
   c *= 20; a *= 10; d *=5; b;
} else if ((c>b) && (b>a) && (a>d)) {
   c *= 20; b *= 10; a *=5; d;
} else if ((c>b) && (b>d) && (d>a)) {
   c *= 20; b *= 10; d *=5; a;
} else if ((c>d) && (d>b) && (b>a)) {
   c *= 20; d *= 10; b *=5; a;
} else if ((c>a) && (a>d) && (d>b)) {
   c *= 20; a *= 10; d *=5; b;
} else if ((c>d) && (d>a) && (a>b)) {
   c *= 20; d *= 10; a *=5; b;
} else if ((c>a) && (a>d) && (d>b)) {
   c *= 20; a *= 10; d *=5; b;
} else if ((d>a) && (a>b) && (b>c)) {
   d *= 20; a *= 10; b *=5; c;
} else if ((d>a) && (a>c) && (c>b)) {
   d *= 20; a *= 10; c *=5; b;
} else if ((d>b) && (b>a) && (a>c)) {
   d *= 20; b *= 10; a *=5; c;
} else if ((d>b) && (b>c) && (c>a)) {
   d *= 20; b *= 10; c *=5; a;
} else if ((d>c) && (c>a) && (a>b)) {
   d *= 20; c *= 10; a *=5; b;
} else if ((d>c) && (c>b) && (b>a)) {
   d *= 20; c *= 10; b *=5; a;
} else if ((b>c) && (c>d) && (d>a)) {
   b *= 20; c *= 10; d *=5; a;
} else if ((b>a) && (a>d) && (d>c)) {
   b *= 20; a *= 10; d *=5; c;
} else if ((b>a) && (a>c) && (c>d)) {
   b *= 20; a *= 10; c *=5; d;
} else if ((b>d) && (d>a) && (a>c)) {
   b *= 20; d *= 10; a *=5; c;
} else if ((b>d) && (d>c) && (c>a)) {
   b *= 20; d *= 10; c *=5; a;
} else if ((b>c) && (c>a) && (a>d)) {
   b *= 20; c *= 10; a *=5; d;
}
else {
   a; b; c; d;
}