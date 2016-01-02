
// -------------------------------------------------
// Tests start here
// -------------------------------------------------

QUnit.test("point tests", function(assert) {
							 var testPt = new point(3, 4);
							 assert.equal(testPt.x, 3);
							 assert.equal(testPt.y, 4);
							 assert.equal(testPt.r(), 5);
							 assert.equal(testPt.toString() , "(3,4)");
							 testPt = new point("3", "4");
							 assert.equal(testPt.x, 3);
							 assert.equal(testPt.y, 4);
							 assert.equal(testPt.r(), 5);
					 });

QUnit.test("triangle constructor", function(assert) {
							 var tri = new polygon([new point(2, 1),new point(3, 4),new point(4, 5)]);
							 assert.equal(tri.toString() , "(2,1)(3,4)(4,5)");
					 });

QUnit.test("triangle area", function(assert) {
							 var tri = new polygon([new point(0, 0),new point(4, 0),new point(4, 3)]);
							 assert.equal(tri.area(), 6);
							 // todo more test data
					 });

QUnit.test("triangle centroid", function(assert) {
							 var tri = new polygon([new point(4, 2),new point(3, 3),new point(2, 7)]);
							 assert.equal(tri.centroid().x, 3);
							 assert.equal(tri.centroid().y, 4);
							 assert.equal(tri.area(), 1.5);
							 assert.equal(tri.toString() , "(4,2)(3,3)(2,7)");

							 tri = new polygon([new point("4", "2"),new point("3", "3"),new point("2", "7")]);
							 assert.equal(tri.centroid().x, 3);
							 assert.equal(tri.centroid().y, 4);
							 assert.equal(tri.area(), 1.5);
							 assert.equal(tri.toString() , "(4,2)(3,3)(2,7)");

							 tri = new polygon([new point(0, 4),new point(0, 0),new point(3, 0)]);
							 assert.equal(tri.centroid().x, 1);
							 assert.equal(tri.centroid().y, 4 / 3);
							 assert.equal(tri.toString() , "(0,4)(0,0)(3,0)");
					 });

QUnit.test("quad centroid and area", function(assert) {
							 var qu = new polygon([new point(0, 0),new point(4, 0),new point(4, 3), new point(0, 3)]);
							 assert.equal(qu.area(), 12);
							 assert.equal(qu.centroid().x, 2);
							 assert.equal(qu.centroid().y, 1.5);
							 qu = new polygon([new point(0, 0),new point(4, 0),new point(3, 3), new point(-1, 3)]);
							 assert.equal(qu.centroid().x, 1.5);
							 assert.equal(qu.centroid().y, 1.5);
							 assert.equal(qu.area(), 12);
							 // todo more test data
					 });

function postload() {
		QUnit.test("mainsail form integration test 1", function(assert) {
									 myForm.setClewx(4);
									 myForm.setClewy(2);
									 myForm.setHeadx(3);
									 myForm.setHeady(3);
									 myForm.setTackx(2);
									 myForm.setTacky(7);
									 alert("pause");
									 myForm.calculate();
									 myForm.draw();
									 assert.equal(myForm.getCentx(), 3);
									 assert.equal(myForm.getCenty(), 4);
									 assert.equal(myForm.getArea(), 1.5);
							 });

		QUnit.test("mainsail form integration test 2", function(assert) {
									 myForm.setClewx(-3);
									 myForm.setClewy(8);
									 myForm.setHeadx(11);
									 myForm.setHeady(-9);
									 myForm.setTackx(12);
									 myForm.setTacky(17);
									 myForm.calculate();
									 myForm.draw();
									 assert.equal(myForm.getCentx(), 6 + 2 / 3);
									 assert.equal(myForm.getCenty(), 5 + 1 / 3);
									 assert.equal(myForm.getArea(), 190.5);
							 });
}

window.addEventListener('load', postload, false);
//document.addEventListener('ready', postload(), false);
