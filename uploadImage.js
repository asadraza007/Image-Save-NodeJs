const fs = require('fs');

exports.saveImage = (req, res) => {

    let image = req.body;
    let imageUrl = `${image.name}`;
    
    
    let copy = 1;
    // if the same name file already exist then append number in the start of the new file
    while (fs.existsSync(imageUrl)) {
        imageUrl = `${copy}_${image.name}`
        copy++;
    }
    
    var base64Data = "";
    
    // check if the given data is png file or jpeg or jpg
    if (image.name.indexOf(".png") !==-1){
        base64Data = image.data.replace(/^data:image\/png;base64,/, "");
    } else if (image.name.indexOf(".jp") !==-1){
        base64Data = image.data.replace(/^data:image\/jpeg;base64,/, "");
    }
    
    // saving image file
    fs.writeFile(`./${imageUrl}`, base64Data, 'base64', function(err) {
        if (err) {
            res.status(404).json({message:"Something went wrong",error:err})
        } else {
            res.status(200).json({ 'imageUrl': imageUrl });
        }
    });
}
