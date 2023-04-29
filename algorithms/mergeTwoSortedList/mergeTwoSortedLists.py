def merge_lists(nums1, m, nums2, n):
    n1_pointer = m - 1
    n2_pointer = n - 1
    pointer = m + n - 1
    while n1_pointer >= 0 and n2_pointer >= 0:
        higher_n1 = nums1[n1_pointer]
        higher_n2 = nums2[n2_pointer]

        if higher_n1 > higher_n2:
            nums1[pointer] = higher_n1
            n1_pointer -= 1
        else:
            nums1[pointer] = higher_n2
            n2_pointer -= 1

        pointer -= 1

    if n2_pointer >= 0:
        nums1[:n2_pointer + 1] = nums2[:n2_pointer + 1]

    return nums1


if __name__ == '__main__':
    # Arrays de prueba 1
    nums1 = [1, 2, 3, 0, 0, 0]
    m = 3
    nums2 = [2, 5, 6]
    n = 3
    response = merge_lists(nums1, m, nums2, n)
    print(response)

    # Arrays de prueba 2
    nums1 = [1, 2, 3, 0, 0, 0, 0]
    m = 3
    nums2 = [-4, 2, 3, 9]
    n = 4
    response = merge_lists(nums1, m, nums2, n)
    print(response)
