(function() {                                  // Lives is an IIFE
    var $imgs = $('#gallery img');              // Get the images
    var $search = $('#filter-search');          // Get the input element
    var cache = [];                             // Create an array called cache

    $imgs.each(function() {                     // For each image
        cache.push({                            // Add an object to the cache array
            element: this,                      // This image
            text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
        });
    });

    function filter() {
        var query = this.value.trim().toLowerCase();
        cache.forEach(function(img) {
            var index = 0;

            if (query) {
                index = img.text.indexOf(query);
            }

            img.element.style.display = index === -1 ? 'none' : '';
        });
    }

    if ('oniput' in $search[0]) {
        $search.on('input', filter);
    } else {
        $search.on('keyup', filter);
    }
}());