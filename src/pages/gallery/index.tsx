import * as React from "react";
import SlideShow from "../../components/slideshow/slideShow";

export interface GalleryProps {}

const Gallery: React.FunctionComponent<GalleryProps> = () => {
    return (
        <div className="flex justify-center w-full h-auto">
            <SlideShow />
        </div>
    );
};

export default Gallery;
