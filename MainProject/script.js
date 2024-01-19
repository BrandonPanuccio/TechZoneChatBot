function simulateAiResponse(userMessage) {
    const apiUrl = 'http://localhost:5005/model/parse'; // Update with your Rasa API endpoint

    // Make a POST request to Rasa API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: userMessage,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Extract the response from Rasa and display it in the chat log
        const aiResponse = data && data.intent && data.intent.name ? data.intent.name : 'Fallback'; // Adjust based on your Rasa response format
        appendMessage('AI', aiResponse);
    })
    .catch(error => {
        console.error('Error communicating with Rasa:', error);
        appendMessage('AI', 'Error communicating with Rasa');
    });
}
