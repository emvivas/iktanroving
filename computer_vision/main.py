import cv2 as cv, numpy as np, copy, os.path, imutils
from PIL import Image, ImageTk
from tkinter import Tk, Frame, Label, Button, Canvas, PhotoImage

def originalFrameConfiguration():
    global monochromaticFrame, contourFrame, edgeFrame, temperatureFrame, thermalFrame
    rtf, image = capture.read()
    if rtf:
        originalVideo = imutils.resize(image, width=373, height=290)
        video = cv.cvtColor(originalVideo, cv.COLOR_BGR2RGB)
        videoMonochromaticFrame = cv.cvtColor(video, cv.COLOR_BGR2GRAY)
        contours, hierarchy = cv.findContours(cv.Canny(videoMonochromaticFrame, 30, 200), cv.RETR_EXTERNAL, cv.CHAIN_APPROX_NONE)
        videoThermalFrame = cv.applyColorMap(video, cv.COLORMAP_TWILIGHT_SHIFTED)
        videoContourFrame = cv.drawContours(copy.copy(video), contours, -1, (0, 255, 0), 1)
        videoEdgeFrame = cv.Canny(video, 100, 200)
        videoTemperatureFrame = getTemperatureImage(video)
        visualization = Image.fromarray(video)
        visualizationMonochromaticFrame = Image.fromarray(videoMonochromaticFrame)
        visualizationContourFrame = Image.fromarray(videoContourFrame)
        visualizationEdgeFrame = Image.fromarray(videoEdgeFrame)
        visualizationTemperatureFrame = Image.fromarray(videoTemperatureFrame)
        visualizationThermalFrame = Image.fromarray(videoThermalFrame)
        frame = ImageTk.PhotoImage(image=visualization)
        monochromaticFrame = ImageTk.PhotoImage(image=visualizationMonochromaticFrame)
        contourFrame = ImageTk.PhotoImage(image=visualizationContourFrame)
        edgeFrame = ImageTk.PhotoImage(image=visualizationEdgeFrame)
        temperatureFrame = ImageTk.PhotoImage(image=visualizationTemperatureFrame)
        thermalFrame = ImageTk.PhotoImage(image=visualizationThermalFrame)
        originalImageLabel.configure(image=frame)
        originalImageLabel.image = frame
        originalImageLabel.after(10, originalFrameConfiguration)

def monochromaticFrameConfiguration():
    monochromaticImageLabel.configure(image=monochromaticFrame)
    monochromaticImageLabel.image = monochromaticFrame
    monochromaticImageLabel.after(10, monochromaticFrameConfiguration)

def contourFrameConfiguration():
    contourImageLabel.configure(image=contourFrame)
    contourImageLabel.image = contourFrame
    contourImageLabel.after(10, contourFrameConfiguration)

def edgeFrameConfiguration():
    edgeImageLabel.configure(image=edgeFrame)
    edgeImageLabel.image = edgeFrame
    edgeImageLabel.after(10, edgeFrameConfiguration)

def temperatureFrameConfiguration():
    temperatureImageLabel.configure(image=temperatureFrame)
    temperatureImageLabel.image = temperatureFrame
    temperatureImageLabel.after(10, temperatureFrameConfiguration)

def thermalFrameConfiguration():
    thermalImageLabel.configure(image=thermalFrame)
    thermalImageLabel.image = thermalFrame
    thermalImageLabel.after(10, thermalFrameConfiguration)

def getTemperatureImage(frame):
    threshold = 200
    boxArea = 700
    minimumTemperature = 102
    frame = cv.cvtColor(frame, cv.COLOR_BGR2RGB)
    grayHeatmap = cv.cvtColor(frame, cv.COLOR_RGB2GRAY)
    heatmap = cv.applyColorMap(grayHeatmap, cv.COLORMAP_TWILIGHT)
    _, binaryThresh = cv.threshold(grayHeatmap, threshold, 255, cv.THRESH_BINARY)
    kernel = np.ones((3, 3), np.uint8)
    imageErosion = cv.erode(binaryThresh, kernel, iterations=1)
    imageOpening = cv.dilate(imageErosion, kernel, iterations=1)
    contours, _ = cv.findContours(imageOpening, 1, 2)
    detectedRectangles = np.copy(heatmap)
    for contour in contours:
        x, y, w, h = cv.boundingRect(contour)
        if (w) * (h) < boxArea:
            continue
        mask = np.zeros_like(grayHeatmap)
        cv.drawContours(mask, contour, -1, 255, -1)
        mean = cv.mean(grayHeatmap, mask=mask)[0] / 2.25
        temperature = round(mean, 2)
        color = (0, 255, 0) if temperature < minimumTemperature else (255, 255, 127)
        if temperature >= minimumTemperature:
            cv.putText(detectedRectangles, "High temperature detected", (35, 40), cv.FONT_HERSHEY_SIMPLEX, 0.7, color, 2, cv.LINE_AA)
        detectedRectangles = cv.rectangle(detectedRectangles, (x, y), (x+w, y+h), color, 2)
        cv.putText(detectedRectangles, "{} F".format(temperature), (x, y),
                    cv.FONT_HERSHEY_SIMPLEX, 0.6, color, 2, cv.LINE_AA)
    return detectedRectangles

script_dir = os.path.dirname(os.path.abspath(__file__))
capture = cv.VideoCapture(0, cv.CAP_DSHOW)
cv.destroyAllWindows()
graphicInterface = Tk()
graphicInterface.title("IKTAN Roving NASA HERC Team | Mission Operation Center's Computer Vision Analysis")
graphicInterface.iconbitmap(os.path.join(script_dir, "iktan.ico"))
logo = PhotoImage(file = os.path.join(script_dir, "iktan.png"))
graphicInterface.iconphoto(False, logo, logo)
graphicInterface.resizable(width=False, height=False)
graphicInterface.geometry('{}x{}'.format(1120, 630)) #16:9
window = Frame(graphicInterface, bg="black")
window.grid(column=0, row=0)
window.columnconfigure(0, weight=1)
window.rowconfigure(0, weight=1)
banner = Frame(master=window, width=1120, height=50, bg="black")
banner.grid(column=0, row=0, columnspan=3)

tecLogo = Image.open(os.path.join(script_dir, "tec-logo.webp"))
tecLogo.thumbnail((175, 90))
canvas = Canvas(banner, bg="black", width=180, height=50, borderwidth=0, bd=0, highlightthickness=0, relief='ridge')
tecLogo = ImageTk.PhotoImage(tecLogo)
canvas.create_image(90, 25, image=tecLogo)
canvas.grid(column=2, row=0, padx=20)

iktanLogo = Image.open(os.path.join(script_dir, "iktan.png"))
iktanLogo.thumbnail((45, 45))
canvas = Canvas(banner, bg="black", width=50, height=50, borderwidth=0, bd=0, highlightthickness=0, relief='ridge')
iktanLogo = ImageTk.PhotoImage(iktanLogo)
canvas.create_image(25, 25, image=iktanLogo)
canvas.grid(column=0, row=0, padx=20)

title = Label(banner, text = "IKTAN Roving Mission Operation Center's Computer Vision Analysis", height=3)
title.config(fg="white", bg="black", font=("Arial", 9))
title.grid(column=1, row=0, padx=20)

originalImage = Frame(window, width=373, height=290, bg="black")
originalImage.grid(column=0, row=1)
originalImageLabel = Label(originalImage, bg="black")
originalImageLabel.place(x=0, y=0)

monochromaticImage = Frame(window, width=373, height=290, bg="black")
monochromaticImage.grid(column=0, row=2)
monochromaticImageLabel = Label(monochromaticImage, bg="black")
monochromaticImageLabel.place(x=0, y=0)

contourImage = Frame(window, width=373, height=290, bg="black")
contourImage.grid(column=1, row=1)
contourImageLabel = Label(contourImage, bg="black")
contourImageLabel.place(x=0, y=0)

edgeImage = Frame(window, width=373, height=290, bg="black")
edgeImage.grid(column=1, row=2)
edgeImageLabel = Label(edgeImage, bg="black")
edgeImageLabel.place(x=0, y=0)

temperatureImage = Frame(window, width=373, height=290, bg="black")
temperatureImage.grid(column=2, row=1)
temperatureImageLabel = Label(temperatureImage, bg="black")
temperatureImageLabel.place(x=0, y=0)

thermalImage = Frame(window, width=373, height=290, bg="black")
thermalImage.grid(column=2, row=2)
thermalImageLabel = Label(thermalImage, bg="black")
thermalImageLabel.place(x=0, y=0)

originalFrameConfiguration()
monochromaticFrameConfiguration()
contourFrameConfiguration()
edgeFrameConfiguration()
temperatureFrameConfiguration()
thermalFrameConfiguration()

graphicInterface.mainloop()