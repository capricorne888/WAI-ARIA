// Function to apply WAI-ARIA roles and properties to dynamic content
function applyAriaRoles() {
  // Select dynamic content container
  const dynamicContent = document.querySelector('.dynamic-content');

  // Apply aria-live attribute for screen reader notification
  dynamicContent.setAttribute('aria-live', 'polite');

  // Example: Adding a role to a tablist
  const tablist = document.querySelector('.tablist');
  tablist.setAttribute('role', 'tablist');

  // Example: Adding roles to tabs within the tablist
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', 'false');
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
      tab.setAttribute('aria-selected', 'true');
    });
  });

  // Example: Applying roles to a dialog
  const dialog = document.querySelector('.dialog');
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
}

// Call the function to apply ARIA roles and properties
applyAriaRoles();
