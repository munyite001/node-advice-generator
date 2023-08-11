document.addEventListener('DOMContentLoaded', () => {
    const fetchAdviceButton = document.querySelector('button');
    const adviceElement = document.querySelector('.quote-text');
    const ad_id = document.querySelector('.quote-id');

    fetchAdviceButton.addEventListener('click', async () => {
      try {
        // Make a request to your the advice route using fetch
        const response = await fetch('/get-advice');
        const data = await response.json();
        console.log(data)
        const advice = data.advice;
        const id = data.id;
        
        // Update the advice content on the page
        adviceElement.textContent = advice;
        ad_id.textContent = id;

      } catch (error) {
        console.error('Error fetching advice:', error.message);
      }
    });
  });