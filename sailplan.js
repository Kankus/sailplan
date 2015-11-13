
	// point class
	function point(x,y)
	{
	  this.x=x;
		this.y=y;
		
		this.r = function() {
			return Math.sqrt(x*x+y*y); };

		this.toString = function() {
		  return "("+this.x+","+this.y+")"; };
	}
	
	// polygon class 
	// takes array of points in sequence (clockwise or anti clockwise)
	function polygon(ptArray)
	{
	  var pts = new Array(ptArray.length); // private so polygon is immutable
		for (i=0; i<pts.length; i++) pts [i]= ptArray[i];
		
		// returns area of the polygon
		this.area = function area() {
		  //if (a>0) return a; // don't recalculate
		  var a = 0 , p2;
			
  		for (p1=0; p1<pts.length; p1++)
			{
				p2 = (p1+1) % pts.length;
				a += (pts[p1].x * pts[p2].y) - (pts[p2].x * pts[p1].y);
			}
			a /= 2;
			return a;
		};
		
		// returns centroid of the polygon
		this.centroid = function() {
			//if (x > 0) return new point(x,y); // don't recalculate
			var x=0, y=0, p2;
			
  		for (p1=0; p1<pts.length; p1++)
			{
				p2 = (p1+1) % pts.length;
				x += (pts[p1].x + pts[p2].x) * ((pts[p1].x * pts[p2].y) - (pts[p2].x * pts[p1].y));
				y += (pts[p1].y + pts[p2].y) * ((pts[p1].x * pts[p2].y) - (pts[p2].x * pts[p1].y));
			}
			x /= 6 * this.area();
			y /= 6 * this.area();
			
		  return new point(x,y);
		};
		
		this.toString = function() {
			var str = "";
			for (i=0; i<pts.length; i++)
		   str += pts[i].toString();
			return str;
		};
	}
	
