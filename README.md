# viz-experiments

In order to get acquainted with D3.js I explored creating simple visualisations with algorithms.

## Drawing with D3

Building out the examples from Fabian Dubois' book [Drawing Like Vladislav Mirvald with D3.js](https://gumroad.com/l/mirvald).

## Baravelle Spiral

![Baravelle Spiral](/baravelle-spiral/baravelle_spiral.png?raw=true "The spiral")

The baravelle spiral is created by placing squares in one another with each new square's vertices placed at the midpoints of the sides of the previous square. I considered instead the triangles that form as part of this process to better understand how to create the spiral pattern.

Here is a little working out, which can help to explain the code.

![Image: Algo planning](/baravelle-spiral/baravelle_planning.jpg?raw=true "Getting to grips")

### Usage

* Download the baravelle.html page.
* Run a basic server (I use Python for this).
  
```Python
# Python 3
python -m http.server

# Python 2
python -m SimpleHTTPServer
```
* Open a browser and go to localhost:8000/  

### Example

Clicking on individual triangles fills them in black and additional squares can be added. Here is an example of what one can make:

![Image: Playing around](/baravelle-spiral/example.png?raw=true "Shape created")

### TODO  
- [ ] Animate the spiral formation.