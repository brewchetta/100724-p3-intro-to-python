# PRINTING

print("Hello world")

# DECLARING VARIABLES

first_name = 'Chett'
last_name = 'Tiller'

first_name = 'Bob'

greeting = f"Hello my name is {first_name} {last_name}"
print(greeting)

## PYTHON HAS NO CONSTANTS
GREETING = "I am supposed to be a constant"
GREETING = "I CAN STILL BE CHANGED"

# PRIMITIVE DATA TYPES

some_string = "I am a primitive data type"
some_integer = 12
some_float = 12.1
some_boolean = True


# OTHER DATA TYPES

some_list = [5, 10, 15, 20, [1,2,3,4,5]]
more_nested_data = some_list[4][1]

some_list.append(30)

some_dictionary = { 'name': "I am some name" }
print(some_list[2:3])

some_tuple = (1,2,3,4)

some_set = {1,2,2,2,2,2,2,2,2,3} # only unique values
unique_items_length = len( some_set ) # returns 3

# CONDITIONAL STATEMENTS

truthy = None

if ( not True ):
    print("I am true")
    print("WOW I AM SO TRUE")
    truthy = True
elif ( True ):
    print("We got to the elif")
else:
    truthy = False

some_ternary = True if truthy else False


# LOOPS

# DECLARING FUNCTIONS

def good_ol_function(some_parameter):
    return "I am true" if some_parameter else "I am false"

good_ol_function(None) # "I am false"
good_ol_function("something") # "I am true"


def with_optional_args(something, hamburger="cheeseburger", pizza="pepperoni"):
    print(hamburger)

with_optional_args(something=1, pizza=2)


some_variable = 1

def fn_without_some_variable():
    global some_variable
    some_variable += 10
    return some_variable + 1

add_together = lambda x,y,z: x + y + z