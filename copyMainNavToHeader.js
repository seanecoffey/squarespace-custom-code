 (function customJS() {
 
   /**
    * Copy the main navigation to the header
    */
   function copyMainNavToHeader () {
 
     if (document.getElementById('sideTrayWrapper')) {
 
       var mainNav = document.getElementById('mainNavigation');
 
       // Clone main navigation
       var mainNavClone = mainNav.cloneNode(true);
 
       // Change id
       mainNavClone.setAttribute('id', 'headerMainNavigation');
 
       // Add class
       mainNavClone.classList.add('main-navigation--header');
 
       // Add the cloned navigation in the header
       var header = document.getElementById('headerAnnouncementWrapper')
       header.appendChild(mainNavClone);
 
       // Update top margin for the #page
       var page = document.getElementById('page');
       page.style.marginTop = header.offsetHeight + 'px';
 
     }
   }
 
   // Add the cloned navigation in the header right after #header will be ready
   Y.on('contentready', copyMainNavToHeader, 'header');
 
 })();