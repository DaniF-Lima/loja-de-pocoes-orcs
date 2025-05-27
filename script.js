document.addEventListener('DOMContentLoaded', () => {

    // 0. Update year in footer
    const footerYearSpan = document.getElementById('footerCurrentYear');
    if (footerYearSpan) {
        footerYearSpan.textContent = new Date().getFullYear();
    }

    // 1. Category Dropdown with Click
    const dropdownToggle = document.querySelector('.main-navigation .dropdown > a');
    const dropdownMenu = document.querySelector('.main-navigation .dropdown-menu');

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', (event) => {
            event.preventDefault();
            const isActive = dropdownMenu.classList.toggle('active');
            const arrow = dropdownToggle.querySelector('.dropdown-arrow');
            if (arrow) {
                arrow.textContent = isActive ? '▲' : '▼';
            }
        });

        document.addEventListener('click', (event) => {
            if (dropdownMenu.classList.contains('active') &&
                !dropdownToggle.contains(event.target) &&
                !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('active');
                const arrow = dropdownToggle.querySelector('.dropdown-arrow');
                if (arrow) {
                    arrow.textContent = '▼';
                }
            }
        });
    }

    // 2. Interaction with Product/Offer Checkboxes
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"][name="ofertas_selecionadas"], input[type="checkbox"][name="produtos_selecionados"]');
    const selectedItemsDisplay = document.getElementById('selected-items-feedback') || document.createElement('div');
    if (!selectedItemsDisplay.id) { // If it was created now
        selectedItemsDisplay.id = 'selected-items-feedback';
        // Styles are now in CSS, but ensure it's appended if created dynamically
        document.body.appendChild(selectedItemsDisplay);
    }


    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            let itemName = "A Brew"; // Default item name

            if (label) {
                // Try to get from data-attribute first (for "ofertas")
                if (label.dataset.productName) {
                    itemName = label.dataset.productName;
                }
                // For "outros-produtos", try to get from H3 in the same card
                else if (checkbox.closest('.product-card')) {
                    const h3 = checkbox.closest('.product-card').querySelector('h3');
                    if (h3) {
                        itemName = h3.textContent.trim();
                    } else {
                         // Fallback if h3 not found but label exists
                        itemName = label.textContent.replace('Grab It!', '').trim();
                    }
                } else {
                    // Generic fallback if it's not in a product card and no data-attribute
                    itemName = label.textContent.replace('Grab It!', '').replace(/\s*-\s*.*/, '').trim(); // Attempt to clean up
                }
            }


            if (checkbox.checked) {
                console.log(`${itemName} grabbed!`);
                showFeedback(`${itemName} added to yer stash!`);
            } else {
                console.log(`${itemName} ungrabbed.`);
                showFeedback(`${itemName} removed from yer stash.`);
            }
        });
    });

    function showFeedback(message) {
        selectedItemsDisplay.textContent = message;
        selectedItemsDisplay.style.display = 'block';
        setTimeout(() => {
            selectedItemsDisplay.style.display = 'none';
        }, 3000);
    }

    // 3. Header Action Simulations
    const actionLinks = document.querySelectorAll('.header-actions .action-link');
    actionLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const actionType = link.getAttribute('aria-label');
            let message = `Action: ${actionType}`;

            if (actionType.includes('Wants List')) {
                message = 'Yer favorite brews stashed in da Wants List! (simulation)';
            } else if (actionType.includes('Loot Sack')) {
                message = 'Yer Loot Sack is ready for plunder! (simulation)';
            } else if (actionType.includes('Log In')) {
                message = 'Log In Portal: Give us yer mark! (simulation)';
            }
            alert(message); // Keeping alert for simplicity, could use showFeedback
        });
    });

    // 4. Footer Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = newsletterForm.querySelector('input[name="email_newsletter"]');
            const email = emailInput.value.trim();

            if (email === '') {
                alert('Oi! Put yer scroll-name (email) in da box, ya git!');
                emailInput.focus();
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                 alert('Dat scroll-name looks wonky. Check it again, runt.');
                 emailInput.focus();
                 return;
            }
            alert(`Good on ya for signin' up for da Warboss's Scroll with: ${email}! Keep an eye on yer messenger squig.`);
            emailInput.value = '';
        });
    }

    // 5. Search Button
    const searchButton = document.querySelector('.header-search button');
    const searchInput = document.querySelector('.header-search input[type="text"]');

    if (searchButton && searchInput) {
        const performSearch = () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Sniffin' around for: "${searchTerm}"... (nothin' found, probably!)`);
            } else {
                alert('Whatcha lookin\' for? Type it in da box, ya lazy git!');
            }
        };
        searchButton.addEventListener('click', (event) => {
            event.preventDefault();
            performSearch();
        });
        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                performSearch();
            }
        });
    }

    // --- Newsletter Popup Logic ---
    const newsletterPopup = document.getElementById('newsletterPopup');
    const popupCloseButton = document.getElementById('popupCloseButton');
    const popupNewsletterForm = document.getElementById('popupNewsletterForm');
    const popupEmailInput = document.getElementById('popupEmailInput');

    const POPUP_SESSION_KEY = 'grinningOrcPopupShown';

    function showNewsletterPopup() {
        if (!sessionStorage.getItem(POPUP_SESSION_KEY) && newsletterPopup) {
            newsletterPopup.classList.add('active');
        }
    }

    function hideNewsletterPopup() {
        if (newsletterPopup) {
            newsletterPopup.classList.remove('active');
            sessionStorage.setItem(POPUP_SESSION_KEY, 'true');
        }
    }

    if (newsletterPopup) {
      setTimeout(showNewsletterPopup, 7000);

      if (popupCloseButton) {
          popupCloseButton.addEventListener('click', hideNewsletterPopup);
      }

      document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' && newsletterPopup.classList.contains('active')) {
              hideNewsletterPopup();
          }
      });

      if (popupNewsletterForm) {
          popupNewsletterForm.addEventListener('submit', (event) => {
              event.preventDefault();
              const email = popupEmailInput.value.trim();

              if (email === '') {
                  alert('Oi! Scrawl yer email here if ya want da good stuff!');
                  popupEmailInput.focus();
                  return;
              }
              if (!email.includes('@') || !email.includes('.')) {
                  alert('Dat email looks like a squig tried to write it. Try again!');
                  popupEmailInput.focus();
                  return;
              }

              console.log(`Popup Newsletter Email: ${email}`);
              alert(`Alright, ${email}! Yer signed up! Expect secret messages from da Warboss!`);
              popupEmailInput.value = '';
              hideNewsletterPopup();
          });
      }
    }
});