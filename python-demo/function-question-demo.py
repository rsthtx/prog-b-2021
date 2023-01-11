
def is_affirmative(question):
    valid_answers = ['ja', 'nej']    

    while True:
        svar = input(f'{question} ')
        svar = svar.lower()
        if svar not in valid_answers:
            print("Du skal svare JA eller NEJ")
            continue
        
        return svar == 'ja'


if is_affirmative("er du sulten?"):
    print("spis noget mad")
else:
    print("Lav opgaven")
        

if is_affirmative("Er du ved at dø?"):
    if is_affirmative("Seriøst?"):
        print("ring til 1-1-2")
    else:
        print("Tror du det er alvorligt")
else:
    print("kom igang med at arbejde!")
