document.addEventListener('DOMContentLoaded', async () => {
    const content = document.getElementById('content');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        
        const imageUrl = 'data:image/jpeg;base64,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';

        // Создаем карточки
        data.forEach(post => {
            const card = document.createElement('div');
            card.className = 'card';
            
          
            const img = document.createElement('img');
            img.src = imageUrl; 
            img.alt = 'Card Image';
            
           
            const title = document.createElement('h2');
            title.textContent = post.title;
            
         
            const description = document.createElement('p');
            description.textContent = post.body;
            
          у
            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);
            
          
            content.appendChild(card);
        });
        
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
});
