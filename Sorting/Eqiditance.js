class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    euclideanDistance(otherPoint) {
      const dx = this.x - otherPoint.x;
      const dy = this.y - otherPoint.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }
  
  const point1 = new Point(3, 4);
  const point2 = new Point(6, 8);
  
  const distance = point1.euclideanDistance(point2);
  console.log("Euclidean distance between point1 and point2:", distance);
