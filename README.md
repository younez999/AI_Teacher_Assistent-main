# AI Assistant for Teachers

An AI-powered web application designed to assist Chinese language/culture teachers in lesson planning, exercise creation, multimedia resource curation, student performance analysis, and AI-content detection.

## 🚀 Features

- **Chatbot Assistant** – Ask teaching-related questions and get AI-generated responses.
- **Lesson Plan Generator** – Create complete, structured lesson plans by topic.
- **Exercise Generator** – Generate vocabulary, grammar, reading, and writing tasks.
- **Multimedia Resources** – Search for videos and audio materials related to Chinese culture/language.
- **Student Analysis** – Upload Excel sheets to analyze student performance or attendance.
- **AI Detection** – Detect whether a piece of writing is AI-generated.

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **AI Integration**: OpenRouter API (LLM models)
- **Libraries**:
  - SheetJS (`xlsx`) – Excel file parsing
  - Marked.js – Markdown parsing
  - Font Awesome – Icons

## 📁 Project Structure

```
project-root/
│
├── index.html                # Main HTML entry point
├── README.md                 # Project documentation
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

1. **Clone or Download** this repository.
2. Replace the OpenRouter API key in `js/config.js`:

```js
const API_KEY = 'your-openrouter-api-key';
```

3. *(Optional)* Replace the YouTube API key in `js/tabs.js` for the resource search feature:

```js
const apiKey = 'your-youtube-api-key';
```

4. Open `index.html` in a browser to run the app.

## 📦 External Dependencies

- [SheetJS (xlsx)](https://github.com/SheetJS/sheetjs)
- [Marked.js](https://github.com/markedjs/marked)
- [Font Awesome](https://fontawesome.com/)
- [OpenRouter API](https://openrouter.ai/)
- [YouTube Data API](https://developers.google.com/youtube/v3)

## ✅ Future Improvements

- Add dark mode toggle
- Save/export lesson plans and exercises
- Add real-time chat history
- Add support for multiple languages
- Teacher accounts and cloud storage

## 📄 License

This project is for educational and personal use. Feel free to customize or expand upon it.
