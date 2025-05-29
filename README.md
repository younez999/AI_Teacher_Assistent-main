# AI Assistant for Teachers

An AI-powered web application designed to assist Chinese language/culture teachers in lesson planning, exercise creation, multimedia resource curation, student performance analysis, and AI-content detection.

🌐 **Live Demo**: [https://ai-teacher-assistant-latest.onrender.com](https://ai-teacher-assistant-latest.onrender.com)

## 🎥 Demo Video

Watch how the AI Assistant for Teachers works:

<video width="100%" controls>
  <source src="videos/1.mp4" type="video/mp4">
  Your browser does not support the video tag. You can <a href="videos/1.mp4">download the video</a> instead.
</video>

*This video demonstrates all the key features and how to use the application effectively.*

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
- **DeepSeek** – AI model for content generation and analysis

### External Services & APIs
<div align="center">
  <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" height="30" alt="YouTube" />
  <img width="12" />
  <img src="https://img.shields.io/badge/Wikipedia-000000?style=for-the-badge&logo=wikipedia&logoColor=white" height="30" alt="Wikipedia" />
  <img width="12" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" height="30" alt="Render" />
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

This application is deployed on [Render.com](https://render.com/) and is accessible at:
**https://ai-teacher-assistant-latest.onrender.com**

The deployment automatically updates when changes are pushed to the main branch of the repository.

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

## 📄 License

This project is for educational and personal use. Feel free to customize or expand upon it.