 
// -------------------------------------------------
// Tests start here
// -------------------------------------------------
	
	 QUnit.test("point tests", function( assert ) {
	   var testPt = new point(3,4);
     assert.equal(testPt.x,3);
		 assert.equal(testPt.y,4);
		 assert.equal(testPt.r(),5);
		 assert.equal(testPt.toString() ,"(3,4)");
   });
	 
	 QUnit.test("triangle constructor", function( assert ) {
	   var tri = new polygon([new point(2,1),new point(3,4),new point(4,5)]);
		 assert.equal(tri.toString() ,"(2,1)(3,4)(4,5)");
   });

	 QUnit.test("triangle area", function( assert ) {
	   var tri = new polygon([new point(0,0),new point(4,0),new point(4,3)]);
		 assert.equal(tri.area(), 6);
		 // todo more test data
   });
	 
	 QUnit.test("triangle centroid", function( assert ) {
	   var tri = new polygon([new point(4,2),new point(3,3),new point(2,7)]);
		 assert.equal(tri.centroid().x,3);
		 assert.equal(tri.centroid().y,4);
		 assert.equal(tri.centroid().r(), 5);
		 assert.equal(tri.area(),-1.5);
		 assert.equal(tri.centroid().toString(),"(3,4)");
		 assert.equal(tri.toString() ,"(4,2)(3,3)(2,7)");
		 
		 tri = new polygon([new point(0,4),new point(0,0),new point(3,0)]);
		 assert.equal(tri.centroid().x,1);
		 assert.equal(tri.centroid().y,4/3);
		// assert.equal(tri.centroid().r(), 5);
		// assert.equal(tri.centroid().toString(),"(,4)");
		 assert.equal(tri.toString() ,"(0,4)(0,0)(3,0)");
   });
	 
	 QUnit.test("quad centroid and area", function( assert ) {
	   var qu = new polygon([new point(0,0),new point(4,0),new point(4,3), new point(0,3)]);
		 assert.equal(qu.area(), 12);
		 assert.equal(qu.centroid().x,2);
		 assert.equal(qu.centroid().y,1.5);
		 qu = new polygon([new point(0,0),new point(4,0),new point(3,3), new point(-1,3)]);
		 assert.equal(qu.centroid().x,1.5);
		 assert.equal(qu.centroid().y,1.5);
		 assert.equal(qu.area(), 12);
		 // todo more test data
   });
