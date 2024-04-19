let input = prompt("Enter a list of comma-separated froyo flavors:","vanilla,vanilla,vanilla,strawberry,coffee,coffee");
let flavors = input.split(",")

// Count the occurrences of each flavor
let flavorCounts = {};
flavors.forEach(function(flavor){
    flavor = flavor.trim();
    if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
      } else {
        flavorCounts[flavor] = 1;
      }
});
// Display the counts in the console
console.log("Flavor Counts:");
console.table(flavorCounts);