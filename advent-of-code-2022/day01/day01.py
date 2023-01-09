def solutionA(lines):
  return solve(lines)

def solutionB(lines):
  max_calories = [0,0,0]
  return solve(lines, max_calories)

def solve(lines, max_calories = [0]):
  calories = 0
  for line in lines:
    if line == '':
      handle_max_list(calories, max_calories)
      calories = 0
    else:
      calories += int(line)

  handle_max_list(calories, max_calories)

  return sum(max_calories)


def handle_max_list(calories, max_calories):
  for idx, value in enumerate(max_calories):
    if calories > value:
      max_calories.insert(idx, calories)
      max_calories.pop()
      break


# Helper function for loading the problem data
def load_data(fileName):
  with open(fileName, "r") as input_data:
    lines = input_data.readlines()
  for i in range(len(lines)):
    lines[i] = lines[i].strip()
  return lines


if __name__ == "__main__":
  input_file_name = "dummy-input.txt"
  # TODO: Uncomment line below to use real input
  # input_file_name = "input.txt"
  
  print("Loading data")
  lines = load_data(input_file_name)
  
  resultA = solutionA(lines)
  print(f"Solution for part A: {resultA}")

  resultB = solutionB(lines)
  print(f"Solution for part B: {resultB}")