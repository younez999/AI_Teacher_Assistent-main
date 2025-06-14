# AI Assistant for Teachers

An AI-powered web application designed to assist Chinese language/culture teachers in lesson planning, exercise creation, multimedia resource curation, student performance analysis, and AI-content detection.

🌐 **Live Demo**: [https://ai-teacher-assistant-latest.onrender.com](https://ai-teacher-assistant-latest.onrender.com)

## 🎥 Demo Video

Watch how the AI Assistant for Teachers works:

[![AI Teacher Assistant Demo](https://img.youtube.com/vi/YvFdqR2m7bU/maxresdefault.jpg)](https://youtu.be/YvFdqR2m7bU?si=U6owKCYsMg3pLl9q)

*Click the image above to watch the full demo video on YouTube*

**What you'll see in the demo:**
- 🤖 **Chatbot Assistant** - Ask teaching-related questions
- 📚 **Lesson Plan Generator** - Create structured lesson plans
- 📝 **Exercise Generator** - Generate various types of exercises
- 🎬 **Multimedia Resources** - Search YouTube videos and Wikipedia articles
- 📊 **Student Analysis** - Upload and analyze Excel data with charts
- 🔍 **AI Detection** - Detect AI-generated content

## 🚀 Features

- **Chatbot Assistant** – Ask teaching-related questions and get AI-generated responses.
- **Lesson Plan Generator** – Create complete, structured lesson plans by topic.
- **Exercise Generator** – Generate vocabulary, grammar, reading, and writing tasks.
- **Multimedia Resources** – Search for videos and articles related to Chinese culture/language.  
  / **YouTube Videos:** Curated video resources.
  / **Wikipedia Resources:** Now includes lively, clickable resource cards that send you directly to the relevant Wikipedia page.
- **Student Analysis** – Upload Excel sheets to analyze student performance or attendance.
- **AI Detection** – Detect whether a piece of writing is AI-generated.

## 🛠️ Tech Stack

### Frontend Technologies
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="HTML5" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="CSS3" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="JavaScript" />
</div>

- **HTML5** – Structure and markup
- **CSS3** – Styling and responsive design
- **JavaScript** – Interactive functionality and API integration

### AI & API Integration
<div align="center">
  <img src="https://img.shields.io/badge/OpenRouter-6B46C1?style=for-the-badge" height="30" alt="OpenRouter" />
  <img width="12" />
  <img src="https://img.shields.io/badge/DeepSeek-FF6B6B?style=for-the-badge" height="30" alt="DeepSeek" />
</div>

- **OpenRouter API** – LLM models integration for AI responses
- **DeepSeek** – AI model for content generation and analysis **deepseek/deepseek-r1-0528-qwen3-8b:free**

### External Services & APIs
<div align="center">
  <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" height="30" alt="YouTube" />
  <img width="12" />
  <img src="https://img.shields.io/badge/Wikipedia-000000?style=for-the-badge&logo=wikipedia&logoColor=white" height="30" alt="Wikipedia" />
  <img width="12" />
</div>

- **YouTube Data API** – Video resource integration
- **Wikipedia API** – Educational content and articles
- **Render.com** – Cloud deployment platform

### Libraries & Tools
<div align="center">
  <img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white" height="30" alt="Font Awesome" />
  <img width="12" />
  <img src="https://img.shields.io/badge/SheetJS-339933?style=for-the-badge&logo=microsoft-excel&logoColor=white" height="30" alt="SheetJS" />
  <img width="12" />
  <img src="https://img.shields.io/badge/Marked.js-000000?style=for-the-badge&logo=markdown&logoColor=white" height="30" alt="Marked.js" />
</div>

- **SheetJS (xlsx)** – Excel file parsing and analysis
- **Marked.js** – Markdown parsing and rendering
- **Font Awesome** – Icons and visual elements

## 📁 Project Structure

```
project-root/
│
├── index.html                # Main HTML entry point
├── README.md                 # Project documentation
│
├── videos/                   # Demo videos
│   └── 1.mp4                # Project demonstration video
│
├── test/                     # Test data files
│   └── students_grades.xlsx  # Sample Excel file for testing student analysis
│
├── css/                      # Stylesheets
│   ├── aiDetection.css
│   ├── analysis.css
│   ├── chat.css
│   ├── recource.css
│   ├── responsive.css
│   ├── style.css
│   └── tabs.css
│
├── js/                       # JavaScript files
│   ├── chat.js               # Chatbot logic
│   ├── config.js             # API config
│   ├── prompts.js            # Prompt templates
│   └── tabs.js               # Tab interactions and feature logic
```

## 🔧 Setup Instructions

### Option 1: Use the Live Demo
Simply visit [https://ai-teacher-assistant-latest.onrender.com](https://ai-teacher-assistant-latest.onrender.com) to use the application directly.

### Option 2: Local Development
1. **Clone or Download** this repository.
2. Replace the OpenRouter API key in `js/config.js`:

   ```js
   const API_KEY = 'your-openrouter-api-key';
   ```

3. *(Optional)* Replace the YouTube API key in `js/tabs.js` for the resource search feature:

   ```js
   const apiKey = 'your-youtube-api-key';
   ```

4. Open `index.html` in a browser to run the app locally.

## 🌐 Deployment

<div align="center">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" height="30" alt="Docker" />
  <img width="12" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" height="30" alt="Render" />
</div>

This application is containerized using **Docker** and deployed on [Render.com](https://render.com/). It is accessible at:
**https://ai-teacher-assistant-latest.onrender.com**

The deployment automatically updates when changes are pushed to the main branch of the repository. The Docker containerization ensures consistent deployment across different environments.

## 📦 External Dependencies

- [SheetJS (xlsx)](https://github.com/SheetJS/sheetjs) – Excel file processing
- [Marked.js](https://github.com/markedjs/marked) – Markdown parsing
- [Font Awesome](https://fontawesome.com/) – Icon library
- [OpenRouter API](https://openrouter.ai/) – AI model access
- [YouTube Data API](https://developers.google.com/youtube/v3) – Video search
- [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) – Educational content

## ✅ Future Improvements

- Add dark mode toggle
- Save/export lesson plans and exercises
- Add real-time chat history
- Add support for multiple languages
- Teacher accounts and cloud storage

## ✨ Recent Updates

- **Demo Video Added:**  
  Added a comprehensive demo video showing how to use all features of the AI Assistant for Teachers.

- **Clickable Wikipedia Resource Cards:**  
  The Multimedia Resources tab now includes a dedicated section for Wikipedia resources. Each card is styled with a lively, modern UI and is fully clickable—opening the related Wikipedia page in a new tab for seamless access.

- **Live Deployment:**  
  The application is now deployed and accessible online at https://ai-teacher-assistant-latest.onrender.com

## 🧪 Testing the Application

### 📊 Student Analysis Tool Test Data
<div align="center">
  <img src="https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white" height="40" alt="Excel" />
  <img width="12" />
  <img src="https://img.shields.io/badge/Test_Data-4CAF50?style=for-the-badge&logo=checkmark&logoColor=white" height="40" alt="Test Data" />
</div>

A sample Excel file is provided in the [`test/`](test/) folder for testing the Student Analysis feature:

📁 **File**: [`test/students_grades.xlsx`](test/students_grades.xlsx)  
🎯 **Purpose**: Test the student performance analysis and chart generation features  
🚀 **Usage**: Upload this file in the "Analysis" tab to see how the tool processes student data and generates charts

> 💡 **Quick Start**: This test file contains sample student grade data that you can use to explore the analysis capabilities without needing to create your own Excel file.

<div align="center">
  <img src="https://img.shields.io/badge/Ready_to_Test-28a745?style=flat-square&logo=play&logoColor=white" alt="Ready to Test" />
</div>

## 📄 License

This project is for educational and personal use. Feel free to customize or expand upon it.