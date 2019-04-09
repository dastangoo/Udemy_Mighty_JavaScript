import ctypes


def reference_counting(address):
    return ctypes.c_long.from_address(address).value


# def print_ref_info(var_name):
#     print("Reference count of the variable a is {} and the address variable a is pointing to {}".format(str(
#         reference_counting(id(var_name))), hex(id(var_name))))
#     print("{}".format("-" * 10))


a = [1, 2, 3]
# print(type(reference_counting(id(a))))

# print_ref_info(a)

print("Reference count of the variable a is {} and the address variable a is pointing to {}".format(str(
    reference_counting(id(a))), hex(id(a))))
print("{}".format("-" * 10))

b = a

print("Reference count of the variable a is {} and the address variable a is pointing to {}".format(str(
    reference_counting(id(a))), hex(id(a))))
print("{}".format("-" * 10))

c = a

print("Reference count of the variable a is {} and the address variable a is pointing to {}".format(str(
    reference_counting(id(a))), hex(id(a))))
print("{}".format("-" * 10))

c = None
b = None

print("Reference count of the variable a is {} and the address variable a is pointing to {}".format(str(
    reference_counting(id(a))), hex(id(a))))
print("{}".format("-" * 10))


a_id = id(a)
a = None

print(reference_counting(a_id))

print("Reference count of the variable a is {} and the address variable a is pointing to {}".format(str(
    reference_counting(id(a))), hex(id(a))))
print("{}".format("-" * 10))
