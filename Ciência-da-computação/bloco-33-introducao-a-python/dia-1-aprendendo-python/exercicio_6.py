def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


print(type_of_triangle(3, 3, 3))
print(type_of_triangle(4, 4, 7))
print(type_of_triangle(5, 6, 2))
print(type_of_triangle(10, 1, 6))
