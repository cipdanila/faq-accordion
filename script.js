/**
 * FAQ Accordion - State Engine
 * Enforces strict separation of concerns by manipulating layout state attributes
 * without forcing inline visual overrides or style object mutations.
 */

// 1. Query all interactive trigger elements in the document
const faqButtons = document.querySelectorAll('.faq-question');

// 2. Initialize state listeners across the entire node collection
faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    // Read current state values and structural targets
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const targetPanelId = button.getAttribute('aria-controls');
    const targetPanel = document.getElementById(targetPanelId);

    // Guard clause to prevent script errors if DOM nodes are missing
    if (!targetPanel) return;

    // Toggle the accessibility state metric on the trigger element
    button.setAttribute('aria-expanded', !isExpanded);

    // Synchronize the data-state attribute on the fluid panel container
    if (isExpanded) {
      targetPanel.setAttribute('data-state', 'hidden');
    } else {
      targetPanel.setAttribute('data-state', 'active');
    }
  });
});
