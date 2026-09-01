// Add interactivity to the apple tree

document.addEventListener('DOMContentLoaded', function() {
    const apples = document.querySelectorAll('.apple');
    
    // Add click feedback
    apples.forEach(apple => {
        apple.addEventListener('click', function(e) {
            // Visual feedback
            this.style.animation = 'bounce 0.6s ease';
            
            // Open link after brief delay
            setTimeout(() => {
                window.open(this.href, '_blank');
            }, 150);
            
            e.preventDefault();
        });
        
        // Add some randomness to apple positions for organic look
        const randomRotation = (Math.random() - 0.5) * 10;
        apple.style.transform = `rotate(${randomRotation}deg)`;
    });
});

// Add bounce animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.15) rotate(5deg); }
        100% { transform: scale(1) rotate(0deg); }
    }
`;
document.head.appendChild(style);
