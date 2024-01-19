const chatLog = document.getElementById('chatLog');
const userInput = document.getElementById('userInput');

function sendMessage() {
    const userMessage = userInput.value;

    // Display user message in the chat log
    appendMessage('User', userMessage);

    // Simulate AI response (replace with actual AI logic)
    const aiResponse = simulateAiResponse(userMessage);

    // Display AI response in the chat log after a short delay
    setTimeout(() => {
        appendMessage('AI', aiResponse);
    }, 500);

    // Clear the user input
    userInput.value = '';
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.className = sender.toLowerCase();
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageElement);

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
}

function simulateAiResponse(userMessage) {
    // Replace this with actual AI logic (e.g., using an API call to a chatbot service)
    return `AI response to "${userMessage}"`;
}
