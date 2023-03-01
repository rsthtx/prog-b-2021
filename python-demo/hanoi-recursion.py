count = 0
def move(f,t):
    global count
    count += 1
    print(f"{count}: Move: {f} ==> {t} !")

def moveVia(source, via, destination):
    move(source, via)
    move(via, destination)

def hanoi(stack_size, source, via, desitination):
    if stack_size == 0:
        pass
    else:
        hanoi(stack_size - 1, source, desitination, via)
        move(source, desitination)
        hanoi(stack_size - 1, via, source ,desitination)

if __name__ == "__main__":
    hanoi(4, "A", "B", "C")