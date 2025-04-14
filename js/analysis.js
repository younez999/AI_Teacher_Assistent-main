

// read the Excel file and convert it to CSV format
function readExcelFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        try {
          // Read the file as a binary string
          const data = event.target.result;
          // Parse the workbook using SheetJS
          const workbook = XLSX.read(data, { type: 'binary' });
          // Get the first sheet name
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          // Convert the sheet to CSV text (or JSON if preferred)
          const csvText = XLSX.utils.sheet_to_csv(worksheet);
          resolve(csvText);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = function (error) {
        reject(error);
      };
      reader.readAsBinaryString(file);
    });
  }

async function generateStudentAnalysis() {
    const fileInput = document.getElementById('excel-upload');
    let inputText = '';
  
    // Check if a file is uploaded
    if (fileInput.files.length > 0) {
      try {
        // Convert the file to text (CSV)
        inputText = await readExcelFile(fileInput.files[0]);
      } catch (error) {
        return showError('analysis-output', 'Error reading Excel file: ' + error.message);
      }
    } else {
      return showError('analysis-output', 'Please upload an Excel file.');
    }
    
    // Ensure there is some content extracted from the file
    if (!inputText) {
      return showError('analysis-output', 'Uploaded file is empty.');
    }
    
    // Pass the text to your AI analysis
    await generateAIResponse({
      input: inputText,
      outputElement: 'analysis-output',
      promptTemplate: PROMPT_TEMPLATES.analysis(inputText),
      loadingText: 'Analyzing student performance...'
    });
  }
  
   
  function handleFileChange(event) {
    const fileNameSpan = document.getElementById('file-name');
    const fileInput = event.target;
    
    if (fileInput.files && fileInput.files.length > 0) {
      fileNameSpan.textContent = fileInput.files[0].name;
    } else {
      fileNameSpan.textContent = 'No file chosen';
    }
  }