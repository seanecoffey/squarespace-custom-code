//Replace the header logo image on scroll up and down. 

//Use jquery. 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

//Shrink and expand change the header image from a URL source.
<script>
  function shrink() {$('.logo-image').find('img').attr('src', 'IMG1_URL')}
    function expand() {$('.logo-image').find('img').attr('src', 'IMG2_URL')}
</script>

//Induce shrink and expand functions and change CSS when scrolling down or up on page. 
<script>
    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 300,
                headerElement = document.querySelector('.branding'),
                navBar = document.getElementById('headerMainNavigation'),
				mainHeader = document.getElementById('header'),
				mainWrapper = document.getElementById('headerAnnouncementWrapper');
            if (distanceY > shrinkOn) {shrink(),
              headerElement.setAttribute('style', 'top:5px!important'),
              navBar.setAttribute('style','margin-top:-25px'),
              mainHeader.setAttribute('style','height:80px'),
              mainWrapper.setAttribute('style','height:80px; margin-top:-10px!important'); 
                                      } else {
                if (navBar.hasAttribute('style','margin-top:-10px')) {
                  navBar.setAttribute('style', 'position:unset!important;'),				  mainHeader.setAttribute('style','height:94px'),
                  mainWrapper.setAttribute('style','height:130px'),
                      expand();
                }
            }
				});
		}
	window.onload = init();
</script>