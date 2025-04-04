/**
 * Function to initialize the position of navigation indicators
 */
export const initializeNavIndicators = () => {
  // For desktop navigation
  const activeDesktopLink = document.querySelector('.nav-link.active');
  const desktopIndicator = document.getElementById('indicator');
  
  if (activeDesktopLink && desktopIndicator) {
    // Apply smooth animation properties
    desktopIndicator.style.transition = 'left 0.5s ease, width 0.5s ease';
    desktopIndicator.style.width = `${activeDesktopLink.offsetWidth}px`;
    desktopIndicator.style.left = `${activeDesktopLink.offsetLeft}px`;
    
    // Add subtle animation to the active item
    activeDesktopLink.style.transition = 'color 0.3s ease';
    
    // Ensure indicator is visible
    setTimeout(() => {
      desktopIndicator.style.opacity = '1';
    }, 100);
  }
  
  // For mobile navigation
  const activeMobileLink = document.querySelector('.mobile-nav-link.active');
  const mobileIndicator = document.getElementById('mobile-indicator');
  
  if (activeMobileLink && mobileIndicator) {
    // Apply smooth animation properties
    mobileIndicator.style.transition = 'top 0.5s ease, height 0.5s ease';
    mobileIndicator.style.height = `${activeMobileLink.offsetHeight}px`;
    mobileIndicator.style.top = `${activeMobileLink.offsetTop}px`;
    
    // Ensure indicator is visible
    setTimeout(() => {
      mobileIndicator.style.opacity = '1';
    }, 100);
  }
};
