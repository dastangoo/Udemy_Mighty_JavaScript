my_number = 2019
print("Hex address of my_number", hex(id(my_number)))
print("{0}".format("-" * 50))

my_string = "Hello Python from JavaScript"
print("Memory address of my_string", hex(id(my_string)))
print("{0}".format("-" * 50))

my_variable = "this is my variable"
print("memory address of my_variable", hex(id(my_variable)))
print("{0}".format("-" * 50))


my_new_number = my_number
print("memory address of my_new_number", hex(id(my_new_number)))
print("{0}".format("-" * 50))

my_new_number = 2020
print("memory address of my_new_number", hex(id(my_new_number)))
print("{0}".format("-" * 50))
