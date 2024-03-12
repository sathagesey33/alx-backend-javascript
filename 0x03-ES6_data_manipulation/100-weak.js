// Define the WeakMap
const weakMap = new WeakMap();

// Define the queryAPI function
function queryAPI(endpoint) {
  // Check if the endpoint is already tracked in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Get the number of times queryAPI has been called for this endpoint
  const count = weakMap.get(endpoint);

  // Increment the count
  weakMap.set(endpoint, count + 1);

  // Check if the count is >= 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

// Export the WeakMap and the queryAPI function
export { weakMap, queryAPI };
