max_list = [6,7,8]

for val in max_list:
  print(val)
  
for idx in range(len(max_list)):
  value = max_list[idx]
  print(idx, ":", value)

for idx, value in enumerate(max_list):
  print(idx, ":", value)
  