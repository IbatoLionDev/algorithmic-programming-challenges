# Challenge: Given an array of numbers, write a function that finds and returns the maximum value without using predefined sorting functions.

def find_max(arr):
    if not arr:
        raise ValueError("Array is empty")
    max_val = arr[0]
    for num in arr[1:]:
        if num > max_val:
            max_val = num
    return max_val

# Example usage
if __name__ == "__main__":
    test_array = [3, 5, 1, 8, 2, 9, 4]
    print("Array:", test_array)
    print("Maximum value:", find_max(test_array))
