const PROMPT_TEMPLATES = {
    lessonPlan: (topic) => `
    As a Chinese language teaching expert, create a comprehensive lesson plan about "${topic}". 
    Include these sections in markdown format:
    
    # Lesson Title: [creative title]
    ## Grade Level: [appropriate level]
    ## Lesson Duration: [time]
    
    ### Learning Objectives:
    - At least 3 clear objectives
    
    ### Materials Needed:
    - List of required materials
    
    ### Lesson Structure:
    1. Warm-up Activity (5-10 mins)
    2. Presentation (15-20 mins)
    3. Practice Activities (20-25 mins)
    4. Assessment (10-15 mins)
    5. Extension/Homework
    
    ### Cultural Notes:
    - Relevant cultural insights
    
    Provide the response in proper markdown formatting.`,

    exercises: (topic) => `
    Generate 5 different types of exercises about "${topic}" for Chinese language learners.
    For each exercise type, include:
    
    - Clear instructions in Chinese (with Pinyin) and English
    - Appropriate difficulty level indication
    - Example answers where applicable
    
    Exercise types should include:
    1. Vocabulary practice
    2. Grammar drill
    3. Reading comprehension
    4. Listening/speaking activity
    5. Writing task
    
    Format the response in markdown with clear section headings.`,

    

    analysis: (input) => `Analyze the following student data:

   "${input}"

The data may include student performance information (e.g., names and grades for each homework) or attendance records. Please perform the following analysis:

1. For performance data:
   - Calculate the average grade for each homework assignment.
   - Identify any homework where the average grade is significantly lower than others (for example, if the second homework shows a notably lower average, recommend reviewing its content).
   - Highlight any trends, strengths, or areas for improvement.

2. For attendance records:
   - Identify students with irregular attendance patterns, such as those who have missed three or more consecutive classes.
   - Provide recommendations on addressing these attendance issues.

Please format your analysis in clear markdown with sections like "Observations" and "Recommendations".
`,
     // New prompt for AI Detection
aiDetection: (input) =>  `Analyze the following text for characteristics typical of AI-generated content. Consider factors such as repetitive phrasing, overly consistent sentence structure, lack of personal nuance, and unnatural transitions. Then, assign a likelihood score from 0 to 100—where 0 means it is almost certainly human-written and 100 means it is almost certainly AI-generated. Only output the numeric score.
Text: "${input}"`
};