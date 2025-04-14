
async function generateResources() {
    const input = document.getElementById('resources-input').value.trim();
    const output = document.getElementById('resources-output');

    const maxResults = 3;

    if (!input) {
        output.innerHTML = '<div class="error"><i class="fas fa-exclamation-circle"></i> Please enter a topic first</div>';
        return;
    }

    output.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Searching for resources...</div>';

    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(input + " chinese learning")}&maxResults=${maxResults}&key=${apiKey}`);
        const data = await response.json();

        output.innerHTML = '';
        
        if (data.items && data.items.length > 0) {
            const resourceGrid = document.createElement('div');
            resourceGrid.classList.add('resource-grid');

            data.items.forEach(item => {
                const videoElement = document.createElement('div');
                videoElement.classList.add('resource-card');
                videoElement.innerHTML = `
                    <a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank" class="video-link">
                        <div class="video-thumbnail">
                            <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.title}">
                            <div class="play-button"><i class="fas fa-play"></i></div>
                        </div>
                        <h4 class="video-title">${item.snippet.title}</h4>
                        <p class="video-channel">${item.snippet.channelTitle}</p>
                    </a>
                `;
                resourceGrid.appendChild(videoElement);
            });

            output.appendChild(resourceGrid);
        } else {
            output.innerHTML = '<div class="error"><i class="fas fa-exclamation-circle"></i> No videos found</div>';
        }
    } catch (error) {
        console.error('Error:', error);
        output.innerHTML = '<div class="error"><i class="fas fa-exclamation-triangle"></i> Error loading resources</div>';
    }
}
// New function to fetch Wikipedia resources using the free MediaWiki API
async function generateWikiResources() {
    const input = document.getElementById('resources-input').value.trim();
    const wikiOutput = document.getElementById('wiki-resources');
  
    if (!input) {
      wikiOutput.innerHTML = '<div class="error"><i class="fas fa-exclamation-circle"></i> Please enter a topic first</div>';
      return;
    }
  
    wikiOutput.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Searching Wikipedia resources...</div>';
  
    try {
      const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(input)}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      wikiOutput.innerHTML = '';
  
      if (data.query && data.query.search && data.query.search.length > 0) {
        const resourceGrid = document.createElement('div');
        resourceGrid.classList.add('resource-grid');
  
        data.query.search.forEach(item => {
          // Create an anchor element that wraps the entire card
          const link = document.createElement('a');
          link.href = `https://en.wikipedia.org/?curid=${item.pageid}`;
          link.target = "_blank";
          link.classList.add("wiki-card");
  
          link.innerHTML = `
            <h4 class="wiki-title">${item.title}</h4>
            <p class="wiki-snippet">${item.snippet.replace(/<\/?[^>]+(>|$)/g, "")}...</p>
          `;
  
          resourceGrid.appendChild(link);
        });
  
        wikiOutput.appendChild(resourceGrid);
      } else {
        wikiOutput.innerHTML = '<div class="error"><i class="fas fa-exclamation-circle"></i> No Wikipedia resources found</div>';
      }
    } catch (error) {
      console.error('Error fetching Wikipedia resources:', error);
      wikiOutput.innerHTML = '<div class="error"><i class="fas fa-exclamation-triangle"></i> Error loading Wikipedia resources</div>';
    }
  }
  
  
  // New function to search both YouTube and Wikipedia resources simultaneously
  function generateAllResources() {
    generateResources();
    generateWikiResources();
  }