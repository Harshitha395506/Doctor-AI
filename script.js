function checkSymptoms() {
    let selected = document.querySelectorAll('input[type="checkbox"]:checked');

    if (selected.length === 0) {
        alert("Please select at least one symptom.");
        return;
    }

    let symptoms = [];
    selected.forEach(item => symptoms.push(item.value));

    let risk = "low";
    let cause = "";
    let advice = "";

    // 🔴 HIGH RISK
    if (symptoms.includes("chestpain") || symptoms.includes("breath")) {
        risk = "high";
        cause = "Serious cardiovascular or respiratory issue.";
        advice = "Seek medical attention immediately.";
    }

    // 🟡 MEDIUM RISK – fever
    else if (symptoms.includes("fever")) {
        risk = "medium";
        cause = "Possible infection or flu.";
        advice = "Rest, fluids, monitor temperature.";
    }

    // 🟡 MEDIUM RISK – cough
    else if (symptoms.includes("cough")) {
        risk = "medium";
        cause = "Respiratory irritation or infection.";
        advice = "Warm fluids, avoid cold air.";
    }

    // 🟢 LOW RISK – headache
    else if (symptoms.includes("headache")) {
        risk = "low";
        cause = "Stress, dehydration, or lack of sleep.";
        advice = "Drink water and take rest.";
    }

    // 🟢 LOW RISK – fatigue
    else if (symptoms.includes("fatigue")) {
        risk = "low";
        cause = "Physical or mental exhaustion.";
        advice = "Sleep well and maintain nutrition.";
    }

    else {
        risk = "low";
        cause = "Minor health issue.";
        advice = "Basic care and observation.";
    }

    // STORE DATA
    localStorage.setItem("healthRisk", risk);
    localStorage.setItem("cause", cause);
    localStorage.setItem("advice", advice);

    // REDIRECT
    window.location.href = "result.html";
}
