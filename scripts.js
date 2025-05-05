// Counter Animation with Plus Mark and Scroll Trigger
document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.counter-item h3');
  const speed = 200;

  const startCounterAnimation = (counter) => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => startCounterAnimation(counter), 1);
    } else {
      counter.innerText = target + '+';
    }
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          startCounterAnimation(counter);
        });
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.5
  });

  const counterSection = document.querySelector('.counter-section');
  observer.observe(counterSection);
});

// Nav Link Active State
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// Function to add animations on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate__animated');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animation = entry.target.getAttribute('data-animation');
        entry.target.classList.add(animation);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5,
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Scroll-triggered animation for tech stack cards
document.addEventListener('DOMContentLoaded', function () {
  const techCards = document.querySelectorAll('.tech-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5,
  });

  techCards.forEach((card) => {
    observer.observe(card);
  });
});

// Scroll progress bar
document.addEventListener('DOMContentLoaded', function () {
  const scrollProgress = document.querySelector('.scroll-progress');

  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    const progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
  });
});

// Header scroll effect
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

// Chat Bot Js Code

document.addEventListener('DOMContentLoaded', function() {
  const chatbotIcon = document.getElementById('chatbotIcon');
  const chatbotWindow = document.getElementById('chatbotWindow');
  const closeChatbot = document.getElementById('closeChatbot');
  const sendMessageButton = document.getElementById('sendMessage');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotBody = document.getElementById('chatbotBody');

  // Toggle chatbot window visibility
  chatbotIcon.addEventListener('click', function() {
    chatbotWindow.classList.toggle('active');
  });

  // Close chatbot and clear chat history
  closeChatbot.addEventListener('click', function() {
    chatbotWindow.classList.remove('active');
    clearChatHistory();
  });

  // Send message functionality
  sendMessageButton.addEventListener('click', function() {
    const message = chatbotInput.value.trim();
    if (message !== '') {
      addMessageToChatbot(message, 'user');
      chatbotInput.value = '';
      setTimeout(() => {
        addMessageToChatbot('Thank you for your message! How can I assist you further?', 'bot');
      }, 1000);
    }
  });

  // Function to add a message to the chatbot
  function addMessageToChatbot(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', `chatbot-message-${sender}`);
    messageElement.innerHTML = `<p>${message}</p>`;
    chatbotBody.appendChild(messageElement);
    chatbotBody.scrollTop = chatbotBody.scrollHeight; 
  }

  // Function to clear chat history
  function clearChatHistory() {
    chatbotBody.innerHTML = ''; 
    addMessageToChatbot('Hi there! How can I assist you today?', 'bot');
  }
});