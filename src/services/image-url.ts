
import noImage from "../assets/no-image.png";

export default function getCroppedImageUrl(imageUrl:String){
    
    if(!imageUrl) return noImage;

    const target= 'media/'
    const index = imageUrl.indexOf(target) + target.length;
    const updatedUrl = imageUrl.slice(0,index)+ 'crop/600/400/' + imageUrl.slice(index);
    
    return updatedUrl;


}

