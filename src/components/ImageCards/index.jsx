import { database } from "../../../database";
import { ImageContainer } from "./ImageContainer";
import { Image } from "./Image";

export const ImageCards = () => (
    <div id="image-cards" className="grow flex items-center mx-auto gap-6">
        <ImageContainer>
            <Image
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.5
                }}
                src={database.images_url[0]}
                alt=""
            />
        </ImageContainer>
        <ImageContainer column>
            <Image
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.7
                }}
                 src={database.images_url[2]} alt="" />
            <Image 
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.8
                }}
                src={database.images_url[1]} alt="" />
        </ImageContainer>
        <ImageContainer>
            <Image 
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.9
                }}
                src={database.images_url[3]} alt="" />
        </ImageContainer>
    </div>
);
