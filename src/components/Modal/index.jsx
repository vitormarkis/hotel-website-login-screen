import { BigTitle } from "../BigTitle";
import { ImageCards } from "../ImageCards";

export const Modal = () => (
    <div className="w-1/2 relative p-12 h-full">
        <div className="absolute top-0 w-1/3 h-32 gradient-01" />
        <div className="absolute bottom-6 right-1/3 w-1/2 h-32 gradient-02" />

        <div className="flex flex-col border border-black w-full h-full bg-white relative z-10 p-6">
            <BigTitle>The best hotels in one place.</BigTitle>

            <ImageCards />
        </div>
    </div>
);
