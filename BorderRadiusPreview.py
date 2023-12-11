import tkinter as tk
from tkinter import scrolledtext
import webbrowser
import os

def generate_preview():
    html_code = html_input.get("1.0", tk.END)
    output_file_path = os.path.join(os.path.expanduser("~"), "border_radius_preview.html")

    preview_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Border Radius Preview</title>
        <style>
            .preview-box {{
                width: 200px;
                height: 200px;
                background-color: #3498db;
                margin: 20px;
                display: inline-block;
            }}
        </style>
    </head>
    <body>
    {html_code}
    </body>
    </html>
    """

    with open(output_file_path, "w") as file:
        file.write(preview_html)

    webbrowser.open(output_file_path)

root = tk.Tk()
root.title("CSS Border Preview")
html_input = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=50, height=10)
html_input.pack(padx=10, pady=10)
preview_button = tk.Button(root, text="Generate", command=generate_preview)
preview_button.pack(pady=10)
root.mainloop()
