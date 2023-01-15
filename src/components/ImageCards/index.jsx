import { database } from "../../../database";

export const ImageCards = () => (
    <div
        id="image-cards"
        className="
    [&>div]:basis-0
    [&>div]:grow
    [&>div]:justify-center
    [&>div]:items-center
    [&_img]:w-36
    [&_img]:h-36
    [&_img]:object-cover
    [&_img]:shadow-xl
    [&_img]:border
    [&_img]:border-neutral-800
    [&_img]:shadow-neutral-800/60
    grow flex items-center mx-auto gap-6
    ">
        <div className="flex">
            <img src={database.images_url[0]} alt=""/>
        </div>
        <div className="flex flex-col gap-6">
            <img src={database.images_url[2]} alt="" />
            <img src={database.images_url[1]} alt="" />
        </div>
        <div className="flex">
            <img src={database.images_url[3]} alt="" />
        </div>
    </div>
);
