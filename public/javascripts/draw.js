/**
 * Created by nathanleniz on 2/3/15.
 */

var canvas = document.getElementById("paper");
var ctx = canvas.getContext("2d");
var dx = 0; //delta for movement
var dy = 0; //delta for movement
var mx = 0; //actual movement
var my = 0; //actual movement
var displayText = textToDisplay;

function hexToRgb(hex, alpha) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var toString = function () {
        if (this.alpha == undefined) {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        }
        if (this.alpha > 1) {
            this.alpha = 1;
        } else if (this.alpha < 0) {
            this.alpha = 0;
        }
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    }
    if (alpha == undefined) {
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            toString: toString
        } : null;
    }
    if (alpha > 1) {
        alpha = 1;
    } else if (alpha < 0) {
        alpha = 0;
    }
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        alpha: alpha,
        toString: toString
    } : null;
}
bgColor = hexToRgb(bgColor,0.04).toString();

draw = function(){

    requestAnimationFrame(draw);



    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for(i=0; i < 15; i++){
        dx += 11;
        dy += 7;

        mx = ( Math.cos(dx/243) + Math.cos(dy/253) ) * 100;
        my = ( Math.sin(dx/347) + Math.cos(dy/363) ) * 100;

        var r = Math.abs(Math.round(Math.cos(dx/2000)*255));
        var g = Math.abs(Math.round(Math.sin(dx/1000)*255));
        var b = Math.abs(Math.round(Math.cos(dx/1500)*255));

        ctx.fillStyle = "rgba(" +r+ "," +g+ "," +b+ ",1)";
        //console.log(ctx.fillStyle);
        ctx.beginPath();
        ctx.arc( canvas.width/2+mx, canvas.height/2+my, 5, 0, Math.PI*2, false );
        ctx.fill();
        ctx.font = "50px monospace";
        ctx.textAlign = 'center';
        ctx.fillText(displayText, canvas.width / 2, canvas.height/2);
    }


    //if(dx > canvas.width){
    //dx = -50;
    //}
}
draw();
