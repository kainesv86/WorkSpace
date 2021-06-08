import * as React from "react";

export interface SlideShowProps {}

const shows = [{}, {}, {}, {}, {}];

const SlideShow: React.FunctionComponent<SlideShowProps> = () => {
    const [currentShow, setCurrentShow] = React.useState(0);

    React.useEffect(() => {
        if (currentShow < 0) setCurrentShow(shows.length - 1);
        if (currentShow > shows.length - 1) setCurrentShow(0);
    }, [currentShow]);

    return (
        <div className="relative w-screen overflow-hidden bg-white rounded h-60 sm:h-120 sm:w-3/5" style={{ zIndex: 0 }}>
            <button
                onClick={() => setCurrentShow(currentShow - 1)}
                className="absolute z-10 w-6 h-6 transform -translate-y-1/2 left-4 top-1/2 focus:outline-none"
            >
                <img src="/share/left.svg" alt="" className="w-full h-full" />
            </button>
            <div
                className="absolute top-0 left-0 flex h-full duration-500 w-max"
                style={{ transform: `translateX(-${(currentShow / shows.length) * 100}%)` }}
            >
                <div className="w-screen h-full bg-yellow-400"></div>
                <div className="w-screen h-full bg-green-400"></div>
                <div className="w-screen h-full bg-indigo-400"></div>
                <div className="w-screen h-full bg-blue-700"></div>
                <div className="w-screen h-full bg-cyan-500"></div>
            </div>
            <button
                onClick={() => setCurrentShow(currentShow + 1)}
                className="absolute z-10 w-6 h-6 transform -translate-y-1/2 right-4 top-1/2 focus:outline-none"
            >
                <img src="/share/right.svg" alt="" className="w-full h-full" />
            </button>
            <ul className="absolute flex transform translate-x-1/2 right-1/2 bottom-4">
                {shows.map((item, index) => (
                    <li className="mr-2" key={index}>
                        <span
                            className={`block w-2 h-2 ${currentShow === index ? "bg-blue-800" : "bg-white"} rounded-full`}
                            onClick={() => setCurrentShow(index)}
                        ></span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SlideShow;
