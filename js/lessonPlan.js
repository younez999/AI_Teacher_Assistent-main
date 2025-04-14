
async function generateLessonPlan() {
    const topic = document.getElementById('lesson-plan-input').value.trim();
    if (!topic) return showError('lesson-plan-output', 'Please enter a topic');
    
    await generateAIResponse({
        input: topic,
        outputElement: 'lesson-plan-output',
        promptTemplate: PROMPT_TEMPLATES.lessonPlan(topic),
        loadingText: 'Creating your customized lesson plan...'
    });
}