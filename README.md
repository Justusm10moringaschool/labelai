# Labelai

<p align="center">
  <a href="https://labelai.vercel.app/">
    <img src="public/labelai-logo.png" alt="labelai logo">
    <h2 align="center">labelai.vercel.app</h2>
  </a>
</p>

<p align="center">
    <a href="https://github.com/aralroca/labelai/actions?query=workflow%3ATests" alt="Tests status">
        <img src="https://github.com/aralroca/labelai/workflows/Tests/badge.svg" /></a>
    <a href="https://github.com/aralroca/labelai/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/aralroca/labelai" /></a>
    <a href="https://github.com/aralroca/labelai/pulse" alt="Activity">
        <img src="https://img.shields.io/github/commit-activity/m/aralroca/labelai" /></a>
    <a href="https://twitter.com/intent/follow?screen_name=shields_io">
        <img src="https://img.shields.io/twitter/follow/aralroca?style=social&logo=twitter"
            alt="follow on Twitter"></a>
</p>

- [About Labelai](#about-labelai)
- [Why the need of this project?](#why-the-need-of-this-project)
- [In future releases](#in-future-releases)
- [Getting started](#getting-started)
- [Hotkeys](#hotkeys)
- [Contribute](#contribute)
- [License](#license)

## About Labelai

Labelai is an online tool designed to label images, useful for training AI models.

It's totally client-side, there is no request to any server. It is implemented with Next.js + Preact.

Annotations are saved as XML files in **PASCAL VOC** format, the format used by ImageNet. Besides, it also supports **YOLO** format.

It's strongly inspired by [**labelImg**](https://github.com/tzutalin/labelImg).

<img src="public/demo.gif" alt="demo" />

## Why the need of this project?

Although we think that [labelImg](https://github.com/tzutalin/labelImg) is a good alternative, there are certain root problems that we are trying to solve with this project:

- **Available in all devices**. Being a web application makes it accessible from any device. Even tablets, mobiles.
- **No instalation required**. It speeds up the start, as it does not require installation and has no dependency on your operating system. Only the browser.
- **Automatic updates**. You will always have the latest version available.
- **Security**: no file on your system is directly manipulated. So there is the security layer of your browser to import/save files.
- **Beginner friendly**. We want it to be a more beginner-friendly process without losing flexibility. To start, you only need to open a browser with any device.

## In future releases

- Improve tablet / mobile experience.
- Possibility to train directly your labeled images with the same app. And save the generated model.
- Offline support.

## Getting started

Labelai **not requires any installation** 😜. In order to start:

- **Open the web app** https://labelai.vercel.app/
- **Click 'Open'**. Here you can import 3 file types: Images (.png, .jpg, .gif, .svg...), XML (PascalVOC labels) and TXT (YOLO labels). Surely the first time you are only interested in importing images, since you will not have any label saved yet. **Important**: _if you want to import already saved labels, you must import it together with the images at the same time. In the case of YOLO, you also must import the `classes.txt` file._
- **Click and release** left mouse to select a region to annotate the rect box. Then, you can put a name to that label or select one of the already used names.
- **Update rect boxes**. Once you already labeled a part of the image, you can resize it clicking on a box corner, move the box using drag & drop, duplicate it (<kbd>Ctrl</kbd> + <kbd>d</kbd>) or even remove it (<kbd>⌫ Delete</kbd>).
- **Move through images**. Once you finish annotating all the labels of an image, you can press to the `Next` and `Prev` button to move through images and start anottating another image. You also can use the arrows <kbd>→</kbd> and <kbd>←</kbd>.
- **Save your changes**. You can save the labels of the current file or the all files. At this point, you can decide in which format you want to save them (**XML** for ImageNet or **TXT** for YOLO). In the case of YOLO, a file named `classes.txt` is saved too and it defines the list of class names that your YOLO label refers to.

## Hotkeys

| Key | Action                     |
| --- | -------------------------- |
| o   | Open/import files          |
| s   | Save                       |
| d   | Duplicate the selected box |
| del | Remove the selected box    |
| →   | Next image                 |
| ←   | Prev image                 |
| +   | Zoom in                    |
| -   | Zoom out                   |
| 0   | Reset zoom                 |

_They are applicable when the input-text to name the label is not focused._

## Contribute

We encourage you to send any pull-quest, even as a draft. It is a project that we want to grow according to the needs of the community.

## License

[Free software: MIT license](LICENSE)
