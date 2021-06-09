import * as React from "react";
import { Link } from "react-router-dom";
import faker from "faker";

export interface OrderDoneProps {}

const OrderDone: React.FunctionComponent<OrderDoneProps> = () => {
    const orderNumber = React.useMemo<Number>(() => {
        return faker.random.number();
    }, []);
    return (
        <div className="flex flex-col items-center w-full h-screen py-16 animate-fade-in">
            <h1 className="mb-8 text-5xl font-bold text-amber-500">{`Order #${orderNumber} successfully`}</h1>
            <div>
                <img src="/share/orderDone.svg" alt="" />
            </div>
            <div className="justify-center w-full px-8 mt-8 sm:flex">
                <Link to="/">
                    <button className="w-full px-4 py-2 font-medium text-blue-800 rounded outline-none sm:w-48 bg-amber-400 focus:outline-none hover:bg-amber-500">
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OrderDone;
