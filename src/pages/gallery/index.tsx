import * as React from "react";
import SlideShow from "../../components/slideshow/slideShow";

export interface GalleryProps {}

const Gallery: React.FunctionComponent<GalleryProps> = () => {
    return (
        <div className="flex flex-col items-center w-full h-auto">
            <h1 className="mb-8 text-3xl font-semibold text-center text-blue-800 sm:mt-0 sm:text-6xl">Lorem Ipsum</h1>
            <SlideShow />
            <div className="w-full px-3 mt-6 sm:px-96">
                <h2 className="w-full mb-4 text-xl font-semibold text-left text-gray-900 sm:text-3xl">Neque porro quisquam est qui dolorem ipsum</h2>
                <p className="w-full text-base font-medium text-justify text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt tortor feugiat cursus rutrum. Nulla sit amet interdum
                    enim, nec hendrerit mauris. Aliquam volutpat, odio ac faucibus rutrum, magna nisl consectetur lacus, ut commodo felis enim et
                    ipsum. Duis sed semper turpis, ut placerat diam. Curabitur condimentum convallis est, et facilisis urna dapibus eget. Sed
                    sollicitudin odio non pellentesque imperdiet. Donec a lectus aliquet, condimentum lacus et, varius ex. Aenean quis porttitor sem.
                    Vestibulum viverra mi id neque congue, a consequat diam sagittis. Fusce non finibus orci, ac tempus felis. Mauris at ex ut odio
                    porttitor semper. Maecenas aliquam lorem et est commodo imperdiet. Sed semper erat a tempor dignissim. Curabitur et elit nibh.
                    Cras accumsan erat eu iaculis gravida. Phasellus ornare neque justo, sit amet sollicitudin ipsum mattis et. Pellentesque non
                    maximus ligula. Aenean facilisis ante sed nisl malesuada, id commodo felis posuere. Donec sem ante, ornare sed sodales id,
                    imperdiet at ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet urna est, id accumsan purus maximus
                    vel. Maecenas interdum, est pretium rutrum iaculis, urna elit lacinia nibh, et vehicula turpis ante ut tortor. Ut consequat augue
                    tortor. Vivamus pulvinar accumsan dapibus. Donec rhoncus porttitor suscipit. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Maecenas maximus, sem finibus aliquam feugiat, nisl enim interdum justo, ut vestibulum
                    diam odio sed libero. In congue purus vitae ex porttitor, a volutpat felis aliquet. Pellentesque non dapibus nisi. Vestibulum
                    mauris eros, egestas vel suscipit sit amet, scelerisque vitae mi.
                </p>
            </div>
        </div>
    );
};

export default Gallery;
