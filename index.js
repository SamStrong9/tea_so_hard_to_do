// Define a helper function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Define the radius of the circle
var radius = 5;

// Calculate the area of the circle using the helper function
var area = calculateCircleArea(radius);

// Output the calculated area
console.log("The area of the circle with radius", radius, "is:", area);
