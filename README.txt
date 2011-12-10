One of my favorite things / nice details that is easily done with flash is a fullscreen background, sure you can make an image 100% in css – but to be able to make that image scale and keep its ratio when the browser is being re-sized can be a challenge.

While CSS3 now has very powerful background-image control, sometimes that may not meet your needs.

background.js is a script I wrote to make scaling backgrounds and transitioning them easier. Super simple to use! Just set a div with an id of background and an image in that. The script takes care of the rest – to change backgrounds just call background.newBG and pass it a new image url.