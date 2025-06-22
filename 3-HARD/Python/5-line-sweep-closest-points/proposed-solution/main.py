# Challenge: Use the line sweep algorithm to find the closest pair of points in a set of 2D coordinates.
# This challenge requires a good understanding of geometric algorithms and spatial optimization.
# Use object-oriented programming and follow the DRY principle.

from closest_points import ClosestPoints

def main():
    points = [(2, 3), (12, 30), (40, 50), (5, 1), (12, 10), (3, 4)]
    cp = ClosestPoints(points)
    p1, p2, dist = cp.find_closest_pair()
    print(f"Closest points: {p1} and {p2} with distance {dist}")

if __name__ == "__main__":
    main()
