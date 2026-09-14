from PIL import Image
import os

logo_path = r"e:\office\AQUA\public\images\logo-updated.png"
favicon_path = r"e:\office\AQUA\src\app\favicon.ico"

with Image.open(logo_path) as img:
    # Ensure it's square for favicon
    size = min(img.size)
    left = (img.width - size) / 2
    top = (img.height - size) / 2
    right = (img.width + size) / 2
    bottom = (img.height + size) / 2
    img_cropped = img.crop((left, top, right, bottom))
    img_cropped.thumbnail((64, 64), Image.Resampling.LANCZOS)
    
    # CRITICAL FIX: Convert to RGBA so Turbopack can decode the PNG inside the ICO
    img_rgba = img_cropped.convert("RGBA")
    img_rgba.save(favicon_path, format="ICO")

print("Favicon regenerated in RGBA format.")
