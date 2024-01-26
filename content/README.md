# Website Content

### How it works
All website content is written in markdown. If you would like to learn more on how to use markdown you can check the discord for the resources that Izzy sent. You can also check out [guide.md](./GUIDE.md) which has a little cheat sheet with all the most important stuff. 

All the markdown files are served by a custom API which the actual website will make calls to. 

### API Reference

All the files are served by searching their name on the ``/api/<filename>`` route. For example if you want to get a file called ``oof.md`` The api route would be ``/api/oof`` If you would like the french version you can add lang as a query parameter ``/api/oof?lang=fr``. By default the langage will be english but you can set it to any of the folders in [``/content/md``](/content/md). The system is extendible so you can add folders to /content/md and the api will serve files from there automatically without restarting!

### Writing Content

All content should be available in all languages. When you make a file in the [english](./md/en) folder, **please create it on the [french](./md/fr) folder too.** You don't have to write it all out right away, someone else can do it, we just need both files there so we can keep track of what has to be translated still.

All images are served via the ``/images/<filename>`` route. All images should be placed in the [images folder](/content/md/images)

### Getting started

The easiest way to get started writing  content for the website is to do it directly in the github web editor. To do this, go to the [github page](https://github.com/Dawson-Robotics/Kryptik-2024-Website) of the website. Then hit the period/angled-bracket key. It should immediately open the web editor where you can create markdown files and edit them. This is all you need for simply writing. If you would like to test the entire website/API then, there's a little more that you have to do. 

First you have to download the repository. You can do this by clicking the download button on github and click open in github desktop. It will prompt you do download the github desktop app which will automatically download the app. You then should install [**NodeJS**](https://nodejs.org/en/) and [**Visual Studio Code**](https://code.visualstudio.com/) and open the folder with the app.Then you hit the F5 button which will run the whole website which you can access at [``http://localhost:3000``](http://localhost:3000)
