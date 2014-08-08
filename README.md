# Learning Javascript Challenge

## Foreward

All you need for this is a browser and a text editor. I recommend [Sublime Text](http://www.sublimetext.com/), but you can use whatever you're comfortable with.

If you know `git`, then clone this repository. If not, Github lets you download the files as a zip.
You'll get this instructions file, the `index.html` file, a `js` directory which contains `app.js` and a `css` directory which contains `style.css`

`index.html` contains the boilerplate to pull in the Javascript file and the CSS style, to get you started. It also pulls in all libraries needed for the tasks (jQuery, jQuery UI) from the jQuery website.

---

## Tasks

### Task 1

- We'll start off easy by adding some content the the webpage.
- Pick your favourite TV show. We're going to use the characters from it.
- In `index.html`, add an HTML list, which each list item being an image of a character. Add a bunch of them.
  - Off you go and find your favourite image for each character!
  - Give each list item `li` a unique class, eg. `<li class="js-jake-image">`

- Useful resources:
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul

### Task 2

- HTML has `data-` attributes, which allows you to store data against an element eg.
```
<img src="image_of_jake.png" data-name="Jake" data-age="30" data-gender="male" />
```
- Add in the name, age and gender for each of the images.

- Useful resources:
  - https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes


### Task 3

- Now, it's time to add some style; you'll need to know some CSS.
- Add new CSS declarations into `style.css`
  - You need to style the list so that instead of being vertical it is horiztonal.

- Useful resources:
  - http://alistapart.com/article/taminglists/

### Task 4

- Now it's Javascript time! We're going to use the jQuery library
- Add new javascript code into `app.js`
  - __Protip #1:__ Use the developer console in your browser to check if there are any errors.
- Read the order of the images on the webpage and create an object to represent each image. The object will contain the source (from the `src` attribute), as well as the name, age and gender from the `data` attributes. It should also contain the class from the `li` element too which will be set as the `parent_class` property.
  - Store the objects you've created in an array to preserve the order.
  - __Protip #2:__ Use `console.log(variable_name)` to display a variable's contents in the developer console.

- Useful resources:
  - http://learn.jquery.com/using-jquery-core/document-ready/
  - http://learn.jquery.com/using-jquery-core/selecting-elements/
  - http://api.jquery.com/each/
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

### Task 4

- We're going to use another library called jQuery UI, which provides all sorts of user interface widgets and is built on top of jQuery    .
  - Using jQuery UI, make it so that I can drag and drop the images to reorder them

- Useful resources:
  - http://jqueryui.com/sortable/

### Task 5

- Lets make use of the array you created in _Task 3_. Add in a button to `index.html` and call it "reset".
   - When the button is clicked, put the images back in their original order, which you'll have recorded in your array.

- Useful resources:
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
  - http://api.jquery.com/click/

### Task 6

- In _Task 1_ you manually created the HTML and pulled out the data in _Task 3_ to programatically create an array containing data.
- Now, we want to make this data driven and instead, manually create the array and programatically create the HTML.
   - __Protip #3:__ Since you already have the array of data, you can use `JSON.stringify` to convert it to string and copy / paste it into the JS file.
- Before you start, you'll need to:
  - remove the HTML from `index.html` (created in Task 1)
  - remove the code for creating the array (created in Task 3)
  - create the array of objects, where each object will have the details of an image (see protip above)
- Now, once you have your data, use it to drive your application - generate the HTML.

