var myForm;

function loaded() {
    myForm = new function indexView() {

				var canvas, gtx;
				canvas = document.getElementById('myCanvas'); 
				ctx = canvas.getContext('2d'); 

				this.getTackx = function() { return + document.getElementById("tackx").value; };
				this.getTacky = function() { return + document.getElementById("tacky").value; };
				this.getClewx = function() { return + document.getElementById("clewx").value; };
				this.getClewy = function() { return + document.getElementById("clewy").value; };
				this.getHeadx = function() { return + document.getElementById("headx").value; };
				this.getHeady = function() { return + document.getElementById("heady").value; };
				this.getCentx = function() { return + document.getElementById("centx").value; };
				this.getCenty = function() { return + document.getElementById("centy").value; };
				this.getArea = function() { return + document.getElementById("area").value; };

				this.setTackx = function(tackx) { document.getElementById("tackx").value = tackx; };
				this.setTacky = function(tacky) { document.getElementById("tacky").value = tacky; };
				this.setClewx = function(clewx) { document.getElementById("clewx").value = clewx; };
				this.setClewy = function(clewy) { document.getElementById("clewy").value = clewy; };
				this.setHeadx = function(headx) { document.getElementById("headx").value = headx; };
				this.setHeady = function(heady) { document.getElementById("heady").value = heady; };
				this.setCentx = function(centx) { document.getElementById("centx").value = centx; };
				this.setCenty = function(centy) { document.getElementById("centy").value = centy; };
				this.setArea = function(area) { document.getElementById("area").value = area; };

				this.draw = function draw(poly) { 
						
						ctx.beginPath(); 
						ctx.moveTo(poly.pts[0].x, poly.pts[0].y); 
						for (p1=1; p1<poly.pts.length; p1++) {
								ctx.lineTo(poly.pts[p1].x, poly.pts[p1].y); 			
						}
						ctx.closePath();
						ctx.stroke();
				};

				this.mainsail = function mainsail () {
						return new polygon([new point(myForm.getTackx(), myForm.getTacky()), new point(myForm.getClewx(), myForm.getClewy()), new point(myForm.getHeadx(), myForm.getHeady())]);
				};
				
	
				this.calculate = function calculate() {
						var mainsail = this.mainsail();
						myForm.setCentx(mainsail.centroid().x);
						myForm.setCenty(mainsail.centroid().y);
						myForm.setArea(mainsail.area());
				};

				var btn = document.getElementById('btnCalculate'); 
				btn.addEventListener('click', this.calculate, false);
		};
};

window.addEventListener('load', loaded, false);

		
