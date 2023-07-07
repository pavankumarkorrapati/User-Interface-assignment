export async function fetchData(route = '', data = {}, methodType) {
  let fetchOptions = {
    method: methodType,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (methodType !== 'GET' && methodType !== 'HEAD') {
    // Include the request body for non-GET and non-HEAD requests
    fetchOptions.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`http://localhost:5000${route}`, fetchOptions);
    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    } else {
      throw new Error(responseData.message || 'Request failed');
    }
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}
