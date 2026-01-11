// Voice recognition setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = false;
function startVoice() {
    recognition.start();
}
recognition.onresult = function (event) {
    let spokenText = event.results[0][0].transcript;
    document.getElementById("userInput").value = spokenText;
};

function sendMessage() {
    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    if (input.value.trim() === "") return;

    // User message
    let userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = input.value;
    chatBox.appendChild(userMsg);

    let userText = input.value.toLowerCase();
    input.value = "";

    // Typing effect
    let typing = document.createElement("div");
    typing.className = "bot-message";
    typing.innerText = "Doctor AI is typing...";
    chatBox.appendChild(typing);

    setTimeout(() => {
        chatBox.removeChild(typing);

        let botReply = document.createElement("div");
        botReply.className = "bot-message";

        if (userText.includes("fever")) {
            botReply.innerText = "🤒 Fever detected. Drink fluids, rest well, and monitor temperature.";
        }
        else if (userText.includes("cough")) {
            botReply.innerText = "😷 Cough may indicate cold or infection. Avoid cold drinks and rest.";
        }
        else if (userText.includes("headache")) {
            botReply.innerText = "🤕 Headache can be due to stress or dehydration. Take rest and hydrate.";
        }
        else if (userText.includes("stomach")) {
            botReply.innerText = "🍽️ Stomach pain may be digestive. Avoid spicy food and drink water.";
        }
        else {
            botReply.innerText = "ℹ️ Please monitor symptoms. If severe, consult a doctor.";
        }

        chatBox.appendChild(botReply);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

// Quick buttons
function quickSend(text) {
    document.getElementById("userInput").value = text;
    sendMessage();
}
