import { database } from "../../../database";
import { ImageContainer } from "./ImageContainer";
import { Image } from "./Image";

export const ImageCards = () => (
    <div id="image-cards" className="grow flex items-center mx-auto gap-6">
        <ImageContainer>
            <Image src={database.images_url[0]} alt="" />
        </ImageContainer>
        <ImageContainer column>
            <Image src={database.images_url[2]} alt="" />
            <Image src={database.images_url[1]} alt="" />
        </ImageContainer>
        <ImageContainer>
            <Image src={database.images_url[3]} alt="" />
        </ImageContainer>
    </div>
);
