# print("Hello world")

# # declare variable
first_name = "Chett"
# # reassign variable
first_name = "Sakib"

print( first_name )

last_name = "Tiller"

print( first_name + " " + last_name )
print( f"{first_name} {last_name}" )

# some_number = 21

# print( first_name + " is " + str(some_number) )

if 0:
    print("I am true")
elif 10:
    print("I am the elif")
else: 
    print("I am false")

# number = 100 if True else -100

def some_function(num:int):
    for _ in range(num):
        print("Hello I am a function")


# some_function(5)

some_list = [1,2,3,4,5,6,7,8]

my_mysterious_dictionary = {
    "sleep": "Not being awake, being peaceful",
    "octothorp": "it's just the pound sign",
    "horizontal": "just laying down"
}

my_set = {1,2,3,4,4,4,4,4,5,6,7,7,7,7,7,7,7,7,8,9}

my_tuple = (1,2,3,4,5)