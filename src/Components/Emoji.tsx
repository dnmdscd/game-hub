import BullsEye from "../assets/bulls-eye.webp";
import ThumbsUp from "../assets/bulls-eye.webp";
import Meh from "../assets/bulls-eye.webp"; 
import { Image, ImageProps } from "@chakra-ui/react";

interface Props{
    rating: number;
}

const Emoji = ({rating} : Props) => {
    if (rating < 3) return null;
    
    const emojiMap: {[key:string]: ImageProps} = {
        3: {src: Meh, alt: 'Meh', boxSize:"25px"},
        4: {src: ThumbsUp, alt: 'Recomended', boxSize:"25px"},
        5: {src: BullsEye, alt: 'Exceptional', boxSize:"35px"}
    }
  return (
    <Image {...emojiMap[rating]} boxSize="25px"/>
  )
}

export default Emoji