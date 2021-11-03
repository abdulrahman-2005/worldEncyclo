import os
from PIL import Image

maps = "./maps"
flags = "./flags"
audio = "./audio"

def main():
    for filename in os.listdir("."):
        # new = filename.replace("-map", "")
        # os.rename(f"assets\\maps\\mapss\\{filename}", new)
        if filename.endswith("py"):
            continue
        if filename.endswith(".jpg"):
            continue
        filename = list(filename)
        filename.pop()
        filename.pop()
        filename.pop()
        filename.pop()
        im = Image.open(f"{filename}.gif")
        rgb_im = im.convert("RGB")
        rgb_im.save(f"{filename}.jpg")
        print("renamed: ", filename)
        
main()
