document.getElementById('reverseForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputText = document.getElementById('inputText').value;
  const resultDiv = document.getElementById('result');

  try {
    const response = await fetch('/api/reverse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: inputText }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    resultDiv.textContent = `Reversed: ${data.reversed}`;
  } catch (error) {
    resultDiv.textContent = 'Error: Unable to reverse the string';
    console.error('Error:', error);
  }
});