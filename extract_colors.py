import sys
try:
    from PIL import Image
    from collections import Counter
except ImportError:
    print("PIL not installed")
    sys.exit(1)

def get_colors(image_path, num_colors=5):
    img = Image.open(image_path)
    img = img.convert("RGB")
    width, height = img.size
    pixels = []
    # Sample pixels to speed up
    for x in range(0, width, 10):
        for y in range(0, height, 10):
            pixels.append(img.getpixel((x, y)))
    
    counts = Counter(pixels)
    most_common = counts.most_common(num_colors)
    
    print(f"Most common colors in {image_path}:")
    for color, count in most_common:
        print(f"RGB: {color} - Hex: #{color[0]:02x}{color[1]:02x}{color[2]:02x}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        get_colors(sys.argv[1])
    else:
        print("Usage: python extract_colors.py <image_path>")
