def intersection(listA, listB):
    seen_in_a = {}
    for item in listA:
        if item not in seen_in_a:
            seen_in_a[item] = True

    ans = []
    for item in listB:
        if item in seen_in_a:
            ans.append(item)

    return ans


listA = [1, 2, 3, 4, 5, 6]
listB = [4, 5, 6, 7, 8, 9]

print(intersection(listA, listB))  # [4, 5, 6]
