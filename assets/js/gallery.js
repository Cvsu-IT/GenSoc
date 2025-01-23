document.querySelectorAll('input[name="photos"]').forEach(input => {
    input.addEventListener('change', function() {
        filterImages(this.id);
    });
});


function filterImages(category) {
    const pics = document.querySelectorAll('.pic'); 

    pics.forEach(pic => {
        pic.style.display = 'none';
    });

    if (category === 'check1') {
        pics.forEach(pic => {
            pic.style.display = 'block';
        });
    } else if (category === 'check2') {
        pics.forEach(pic => {
            if (pic.classList.contains('Empowerment')) {
                pic.style.display = 'block';
            }
        });
    } else if (category === 'check3') {
        pics.forEach(pic => {
            if (pic.classList.contains('Equality')) {
                pic.style.display = 'block';
            }
        });
    } else if (category === 'check4') {
        pics.forEach(pic => {
            if (pic.classList.contains('Violence')) {
                pic.style.display = 'block';
            }
        });
    }
    
}
const wrapper = document.querySelector('.wrapper');
    
    // // Detect when the animation completes (20 seconds duration)
 
    // // Reverse animation keyframes (same as before)
		const style = document.createElement('style');
		document.head.appendChild(style);
		style.sheet.insertRule(`
			@keyframes slideReverse {
				0% { transform: translateX(-500%); }
				16.67% { transform: translateX(-400%); }
				25% { transform: translateX(-400%); }
				41.67% { transform: translateX(-300%); }
				50% { transform: translateX(-300%); }
				58.33% { transform: translateX(-200%); }
				66.67% { transform: translateX(-200%); }
				75% { transform: translateX(-100%); }
				83.33% { transform: translateX(-100%); }
				91.67% { transform: translateX(0); }
				100% { transform: translateX(0); }
			}
		`);

	
        // Function to open the popup
        function openPopup(title, description, artist, imgSrc, instruction) {
            const popup = document.getElementById('art-popup');
            popup.style.display = 'flex'; // Show the popup
            document.getElementById('popup-title').innerText = title;
            document.getElementById('popup-description').innerText = description;
            document.getElementById('popup-artist').innerText = artist;
            document.getElementById('popup-image').src = imgSrc;
            document.getElementById('popup-instruction').innerText = instruction;
        }

        // Function to close the popup
        function closePopup() {
            const popup = document.getElementById('art-popup');
            popup.style.display = 'none'; // Hide the popup
        }

        // Ensure popup stays hidden on page load
        document.addEventListener('DOMContentLoaded', () => {
            const popup = document.getElementById('art-popup');
            popup.style.display = 'none';
        });