document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-button');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab-button').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

async function generateAIResponse({input, outputElement, promptTemplate, loadingText}) {
    const output = document.getElementById(outputElement);
    output.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i> ${loadingText}
        </div>
    `;
    
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": MODEL,
                "messages": [{
                    "role": "user",
                    "content": promptTemplate
                }]
            })
        });
        
        const data = await response.json();
        const result = data.choices[0].message.content;
        
        output.innerHTML = marked.parse(result);
        addCopyButton(outputElement);
        
    } catch (error) {
        output.innerHTML = `
            <div class="error">
                <i class="fas fa-exclamation-triangle"></i> Error: ${error.message}
            </div>
        `;
    }
}

function addCopyButton(elementId) {
    const output = document.getElementById(elementId);
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(output.innerText);
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
        }, 2000);
    };
    output.prepend(copyBtn);
}

function showError(elementId, message) {
    const output = document.getElementById(elementId);
    output.innerHTML = `
        <div class="error">
            <i class="fas fa-exclamation-circle"></i> ${message}
        </div>
    `;
}