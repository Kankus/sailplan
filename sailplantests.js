 
// -------------------------------------------------
// Tests start here
// -------------------------------------------------
	
	 QUnit.test("point tests", function( assert ) {
	   var testPt = new pt(3,4);
     assert.equal(testPt.x,3);
		 assert.equal(testPt.y,4);
		 assert.equal(testPt.r(),5);
		 assert.equal(testPt.toString() ,"(3,4)");
   });
	 
	 QUnit.test("triangle constructor", function( assert ) {
	   var tri = new polygon([new pt(2,1),new pt(3,4),new pt(4,5)]);
		 assert.equal(tri.toString() ,"(2,1)(3,4)(4,5)");
   });

	 QUnit.test("triangle area", function( assert ) {
	   var tri = new polygon([new pt(0,0),new pt(4,0),new pt(4,3)]);
		 assert.equal(tri.area(), 6);
		 // todo more test data
   });
	 
	 QUnit.test("triangle centroid", function( assert ) {
	   var tri = new polygon([new pt(4,2),new pt(3,3),new pt(2,7)]);
		 assert.equal(tri.centroid().x,3);
		 assert.equal(tri.centroid().y,4);
		 assert.equal(tri.centroid().r(), 5);
		 assert.equal(tri.toString() ,"(4,2)(3,3)(2,7)");
   });
	 
	 QUnit.test("quad centroid and area", function( assert ) {
	   var qu = new polygon([new pt(0,0),new pt(4,0),new pt(4,3), new pt(0,3)]);
		 assert.equal(qu.area(), 12);
		 assert.equal(qu.centroid().x,2);
		 assert.equal(qu.centroid().y,1.5);
		 qu = new polygon([new pt(0,0),new pt(4,0),new pt(3,3), new pt(-1,3)]);
		 assert.equal(qu.centroid().x,1.5);
		 assert.equal(qu.centroid().y,1.5);
		 assert.equal(qu.area(), 12);
		 // todo more test data
   });
