import * as React from "react";

export interface ComingSoonProps {}

const ComingSoon: React.FunctionComponent<ComingSoonProps> = () => {
        return (
                <div className="flex flex-col items-center justify-center w-full h-full py-16 animate-fade-in">
                        <h1 className="mb-8 text-5xl font-bold text-amber-500 ">Coming Soon</h1>
                        <div>
                                <img src="/share/comingSoon.svg" alt="" />
                        </div>
                </div>
        );
};

export default ComingSoon;
