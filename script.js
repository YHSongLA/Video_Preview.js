document.querySelectorAll('#myVideo').forEach(function(vid) {
    vid.onmouseover = function() {
        this.play();
    }
    vid.onmouseout = function() {
        this.pause();
    }
})