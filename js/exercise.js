async function generateExercises() {
    const topic = document.getElementById('exercise-input').value.trim();
    if (!topic) return showError('exercise-output', 'Please enter a topic');
    
    await generateAIResponse({
        input: topic,
        outputElement: 'exercise-output',
        promptTemplate: PROMPT_TEMPLATES.exercises(topic),
        loadingText: 'Generating targeted exercises...'
    });
}