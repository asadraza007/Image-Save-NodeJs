# Image-Save-NodeJs
Save PNG, JPG and JPEG images on Nodejs Server.

## Function
this function only accept JSON object

##JSON

{
  "name":"Image File Name.png" ,
  "data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAZABkAAD/4Q3zaHR0cDovL25zLmFkb2JlLmN..."
}


and Return the relative url of the image.

#Node
if the image of same name already exist then append number in the start to avoid replacing existing Image.
