import * as React from "react";
import { Component } from "react";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
        return (
                <div className="w-full mt-8">
                        <h1 className="text-3xl font-bold tracking-tight text-amber-500">The best place for Working</h1>
                        <h2 className="text-xl font-medium tracking-tight text-amber-500">
                                Take advantage of team working by using Co-working Space today!
                        </h2>
                </div>
        );
};

export default Home;
