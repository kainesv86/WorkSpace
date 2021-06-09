import * as React from "react";
import { useSelector } from "react-redux";
import { locations } from "../../pages/locations/locationsProps";
import { RootState } from "../../store";
import { ChoicesState } from "../../store/choices/dto";

export interface SlideShowProps {}

interface showProps {
    name: string;
    photos: Array<string>;
    city: string;
    describe: string;
    tag: string;
}

const shows: showProps[] = [
    { name: locations[0].name, photos: locations[0].photos, city: locations[0].city, describe: "asd", tag: locations[0].tags },
    { name: locations[1].name, photos: locations[1].photos, city: locations[1].city, describe: "asd", tag: locations[1].tags },
    { name: locations[2].name, photos: locations[2].photos, city: locations[2].city, describe: "asd", tag: locations[2].tags },
    { name: locations[3].name, photos: locations[3].photos, city: locations[3].city, describe: "asd", tag: locations[3].tags },
    { name: locations[4].name, photos: locations[4].photos, city: locations[4].city, describe: "asd", tag: locations[4].tags },
];

const SlideShow: React.FunctionComponent<SlideShowProps> = () => {
    const [currentShow, setCurrentShow] = React.useState(0);
    const choicesState = useSelector<RootState, ChoicesState>((item) => item.choices);

    React.useEffect(() => {
        if (currentShow < 0) setCurrentShow(shows[choicesState.location].photos.length - 1);
        if (currentShow > shows[choicesState.location].photos.length - 1) setCurrentShow(0);
    }, [currentShow, choicesState.location]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentShow(currentShow + 1);
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <div className="relative w-screen overflow-hidden bg-white rounded h-60 sm:h-148 sm:w-3/5" style={{ zIndex: 0 }}>
            <button
                onClick={() => setCurrentShow(currentShow - 1)}
                className="absolute z-10 w-6 h-6 duration-500 transform -translate-y-1/2 bg-gray-600 rounded-full outline-none left-4 top-1/2 focus:outline-none hover:scale-125 hover:bg-gray-100"
            >
                <img src="/share/left.svg" alt="" className="w-full h-full" />
            </button>
            <div
                className="absolute top-0 left-0 flex h-full duration-500 w-max"
                style={{ transform: `translateX(-${(currentShow / shows[choicesState.location].photos.length) * 100}%)` }}
            >
                {shows[choicesState.location].photos.map((item) => (
                    <div className="w-screen h-full bg-yellow-400" key={item}>
                        <img src={item} alt="" className="object-cover w-full h-full" />
                    </div>
                ))}
            </div>
            <button
                onClick={() => setCurrentShow(currentShow + 1)}
                className="absolute z-10 w-6 h-6 duration-500 transform -translate-y-1/2 bg-gray-600 rounded-full outline-none right-4 top-1/2 focus:outline-none hover:scale-125 hover:bg-gray-100"
            >
                <img src="/share/right.svg" alt="" className="w-full h-full" />
            </button>
            <ul className="absolute flex transform translate-x-1/2 right-1/2 bottom-4">
                {shows[choicesState.location].photos.map((item, index) => (
                    <li className="mr-2" key={index}>
                        <span
                            className={`block w-2 h-2 ${
                                currentShow === index ? "bg-blue-800" : "bg-white"
                            } rounded-full transform hover:scale-125 duration-500 hover:bg-blue-400`}
                            onClick={() => setCurrentShow(index)}
                        ></span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SlideShow;
