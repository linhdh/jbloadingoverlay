(function ($) {
    $.fn.loadingOverlay = function (action, options) {
        var loadingOverlayHtml = "<div class='loading-overlay'><div class='loading-overlay-spinner'><i class='fa fa-cog'></i></div></div>";
        switch (action.toLowerCase()) {
            case "show":
                return this.each(function () {
                    var loadingOverlayObject = $("> .loading-overlay", this);
                    if (loadingOverlayObject.length == 0) {
                        if (options != null) {
                            loadingOverlayObject = $(loadingOverlayHtml).css(options).css("display", "flex").appendTo(this);
                        }
                        else {
                            loadingOverlayObject = $(loadingOverlayHtml).css("display", "flex").appendTo(this);
                        }
                    }
                    else {
                        if (options != null) {
                            loadingOverlayObject.css(options).css("display", "flex");
                        }
                        else {
                            loadingOverlayObject.css("display", "flex");
                        }
                    }
                });
            case "hide":
                return this.each(function () {
                    var loadingOverlayObject = $("> .loading-overlay", this);
                    if (loadingOverlayObject.length > 0) {
                        loadingOverlayObject.css("display", "none");
                    }
                });
        }
    };
}(jQuery));