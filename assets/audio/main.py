import os
import json

countries = {}
ex = ['algeria', 'argantina', 'australia', 'austria', 'belgium', 'bulgaria', 'canada', 'china', 'colombia', 'congo', 'croatia', 'czech', 'denmark', 'egypt', 'england', 'estonia', 'finland', 'france', 'georgia', 'germany', 'greece', 'hungary', 'ireland', 'italy', 'japan', 'lithuania', 'luxembourg', 'main.py', 'monaco', 'netherlands', 'norway', 'objects.json', 'palestine', 'poland', 'portugal', 'romania', 'russia', 'saudia', 'slovakia', 'slovenia', 'spain', 'sweden', 'switzerland', 'turkey', 'usa', 'venezuela']


def make():
    for filename in os.listdir("."):
        filename = filename.replace(".mp3", "")
        assets = "assets"
        if filename not in ex:
            countries[filename] = {
                "ename": filename,
                "arname": "arname",
                "continent": "continent",
                "capital": "capital",
                "population": "population",
                "area": "area",
                "language": "language",
                "relegion": "relegion",
                "currency": "currency",
                "anthem" : "`${%s}audio/%s.mp3`"%(assets, filename)
                }
    with open("objects.txt", "w") as f:
        f.write(json.dumps(countries, indent=4))

def main():
    for filename in os.listdir("."):
        filename = filename.replace(".mp3", "")
        ex.append(filename)
    print(ex)

# Driver Code
if __name__ == '__main__':
    # Calling main() function
    main()