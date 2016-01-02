
	// point class
	function point(x,y)
	{
	  this.x= Number(x);
		this.y= Number(y);
		
		this.r = function() {
			return Math.sqrt(x*x+y*y); };

		this.toString = function() {
		  return "("+this.x+","+this.y+")"; };
	}
	
	// polygon class 
	// takes array of points in sequence (clockwise or anti clockwise)
	function polygon(ptArray)
	{
		var _this = this;
		this.pts = new Array(ptArray.length);
		for (var i=0; i<this.pts.length; i++) this.pts [i]= ptArray[i];
		
		// returns area of the polygon
		this.area = function area() {
				return Math.abs(signedArea());
		};
		
		var signedArea = function signedArea() {
			var a = 0 , p1, p2;
			
  			for (p1=0; p1<_this.pts.length; p1++)
			{
				p2 = (p1+1) % _this.pts.length;
				a += (_this.pts[p1].x * _this.pts[p2].y) - (_this.pts[p2].x * _this.pts[p1].y);
			}
			a /= 2;
			return a;
		};
		
		// returns centroid of the polygon
		this.centroid = function() {
			var x=0, y=0, p2;
			
  		for (var p1=0; p1<this.pts.length; p1++)
			{
				p2 = (p1+1) % this.pts.length;
				x += (_this.pts[p1].x + _this.pts[p2].x) * ((_this.pts[p1].x * _this.pts[p2].y) - (_this.pts[p2].x * _this.pts[p1].y));
				y += (_this.pts[p1].y + _this.pts[p2].y) * ((_this.pts[p1].x * _this.pts[p2].y) - (_this.pts[p2].x * _this.pts[p1].y));
			}
			x /= (6 * signedArea());
			y /= (6 * signedArea());
			
		  return new point(x,y);
		};
		
		this.toString = function() {
			var str = "";
			for (i=0; i<_this.pts.length; i++)
		   str += _this.pts[i].toString();
			return str;
		};
	}
	
