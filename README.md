
#Restaurant Gropuing

Assume you are given a JSON Array of sorted restaurants returned from a search algorithm.
The list is already sorted by distance from a given point. This list may contain the same
restaurant chain but with several different locations. For example the current list may look like
this:

Example input:

`const data = [
{ name : "Pizza Hut", location : 1, distance : 0.1 },
{ name : "Taco Bell", location : 1, distance : 0.2 },
{ name : "Pizza Hut", location : 2, distance : 0.3 },
{ name : "Taco Bell", location : 2, distance : 0.4 },
{ name : "Wendys" , location : 1, distance : 0.5 },
{ name : "Pizza Hut", location : 3, distance : 0.7 }
]`

The requirements are:
1) Group each restaurant chain together in a sub array.
2) The end result must be an array of sorted arrays, meaning the outer array’s elements
   are sorted by the distance of the first element in each sub array.
3) Each sub array should then be sorted by distance internally.
   Example output:
   
  ` [
   [
   { name: 'Pizza Hut', location: 1, distance: 0.1 },
   { name: 'Pizza Hut', location: 2, distance: 0.3 },
   { name: 'Pizza Hut', location: 3, distance: 0.7 }
   ],
   [
   { name: 'Taco Bell', location: 1, distance: 0.2 },
   { name: 'Taco Bell', location: 2, distance: 0.4 }
   ],
   [
   { name: 'Wendys', location: 1, distance: 0.5 }
   ]
   ]`

   In Javascript what is your solution?
