function fileUploadDirective($parse) {

   return {
    restrict: 'A',
    link: function (scope, elem, attr) {
      linkFileSelect(scope, elem, attr);
    }
  };


    function linkFileSelect(scope, elem, attr) {

		var model = $parse(attr.fileModel);
        var modelSetter = model.assign;
        console.log("modelSetter " + model);

   	  	elem.bind('change', function(evt) {

   	  		var files = evt.target.files; // FileList object

   	  		// read all available files
		    for (var i = 0, f; f = files[i]; i++) {		 
		      // handle only image data
		      if (!f.type.match('image.*')) {
		        continue;
		      }

		    // add the file list to scope
            scope.$apply(function(){
            	modelSetter(scope, files[i]);
            });

		      var reader = new FileReader();
		 
		      reader.onload = (function(theFile) {
		        return function(e) {
				  // remove preview placeholder
				  var iconTemplate = document.getElementById("icon-template");
				  if ( iconTemplate ) 
 					 iconTemplate.parentNode.removeChild(iconTemplate);
				  // remove old previews
				  var preview = document.getElementById('preview');
				  var oldImg = preview.getElementsByTagName("img");
				  for (var j = 0, img; img = oldImg[j]; j++)
				  	preview.removeChild(img);
		          // create thumbnail img tag
		          var thumb = document.createElement('img');
				  thumb.className = 'sc-upload';
				  thumb.src   = e.target.result;
				  thumb.title = theFile.name;
				  // insert preview
				  preview.insertBefore(thumb, null);
		        };
		      })(f);
		 
		      // Bilder als Data URL auslesen.
		      reader.readAsDataURL(f);
		      // ew have one file stop here 
		      break;
		    }
   	  	});

    };

}


export default[
	'$parse',
    fileUploadDirective
];

