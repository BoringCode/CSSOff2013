//Make text fill container
$(".bigText").bigtext();

//show the map
$(".image-block .image button").on("click", function() {
	$(this).parent().toggleClass("toggled");
	return false;
})

var breakpoints = {
	checkState: function() {
		if ($(window).width() > 610) {
			//Control font size of header text
			$("body > header h1").lettering().fitText(0.16);
			$(".feature-article header h2").fitText(0.45);
		} else {
			//undo settings by fitText
			$("body > header h1, .feature-article header h2").attr("style", "");
			$(window).unbind("resize.fittext orientationchange.fittext");
		}
	},
	init: function() {
		this.checkState();
		$(window).on("resize orientationchange", this.checkState);
	}
}
breakpoints.init();