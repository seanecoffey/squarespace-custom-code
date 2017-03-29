//Auto change on summary block or gallery carousels)

     Y.on('domready', function () {
         var galleries = Y.Squarespace.GalleryManager.getGalleries();
         var duration = 7000;
         var gallery=galleries[0];
         var carousel=gallery["gallery-design"];
         var totalGroups=5;
         var currentGroup=0
         var container=gallery.get("container");
         var nextBtn=Y.one(gallery.get("elements.next")._nodes[0]).on("click",function(e){
             e.preventDefault();
             e.stopPropagation();
             advanceCarousel()
         })
         var prevBtn=Y.one(gallery.get("elements.previous")._nodes[0]).on("click",function(e){
             e.preventDefault();
             e.stopPropagation();
             backupCarousel()
         })
         Y.one(container._node).get('parentNode').on("mouseover",function(){
             clearInterval(myInterval)
         })
         Y.one(container._node).get('parentNode').on("mouseout",function(){
             clearInterval(myInterval)
             setMyInterval()
         })
         var myInterval;
         function setMyInterval(){
             myInterval = setInterval(function(){
                 advanceCarousel()
             },duration)
         }
         setMyInterval();
         function advanceCarousel(){
             if(currentGroup==(totalGroups-1)){
                 currentGroup=0;
             }else{
                 currentGroup++;
             }   
             carousel.goToGroup(currentGroup);
         }
         function backupCarousel(){
             if(currentGroup==0){
                 currentGroup=totalGroups-1
             }else{
                 currentGroup--;
             }
             carousel.goToGroup(currentGroup);
         }
     });