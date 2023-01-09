def solutionA(lines):
  max_calories = 0
  calories = 0
  for line in lines:
    if line == '':
      max_calories = max(calories, max_calories)
      calories = 0
    else:
      calories += int(line)

  max_calories = max(calories, max_calories)

  return max_calories


def solutionB(lines):
  max_calories = [0,0,0]
  calories = 0
  for line in lines:
    if line == '':
      # TODO: handle max list
      # handle_max_list(calories, max_calories)
      
      
      for idx, value in enumerate(max_calories):
        if calories > value:
          # insert in list
          max_calories.insert(idx, calories)
          # remove last element
          max_calories.pop()
          break
      
      calories = 0
    else:
      calories += int(line)
      
    print(line, max_calories)

  # TODO: handle max list
  for idx, value in enumerate(max_calories):
    if calories > value:
      # insert in list
      max_calories.insert(idx, calories)
      # remove last element
      max_calories.pop()
      break

  return sum(max_calories)





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