import * as React from "react";

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <footer className="bottom-0 right-0 flex flex-col items-center justify-center w-full py-10 mt-32 bg-gradient-to-t from-amber-400 via-amber-400 to-amber-300">
            <div className="flex flex-col sm:flex-row">
                <div className="flex items-start justify-center mb-4 mr-0 sm:mr-20 sm:mb-0">
                    <div className="flex flex-col w-40 mr-4 text-lg font-medium tracking-tighter text-blueGray-700 sm:mr-20 sm:w-auto">
                        <h2 className="mb-4 text-xl font-semibold text-blue-800 sm:text-3xl">About us</h2>
                        <a className="" href="/">
                            Pham Vinh Tai
                        </a>
                        <a href="/">Pham Phu Hung</a>
                        <a href="/">Nguyen Cong Huy</a>
                        <a href="/">Nguyen Bao Toan</a>
                        <a href="/">Huynh Ngo Gia Bao</a>
                        <a href="/">Le Ha Duy</a>
                    </div>
                    <div className="flex flex-col w-40 font-medium text-blueGray-700 sm:w-auto">
                        <h2 className="mb-4 text-xl font-semibold text-blue-800 sm:text-3xl">Social Media</h2>
                        <a href="/">Facebook</a>
                        <a href="/">Twitter</a>
                        <a href="/">Github</a>
                        <a href="/">Instagram</a>
                    </div>
                </div>
                <div className="flex items-start justify-center">
                    <div className="flex flex-col w-40 mr-4 text-lg font-medium tracking-tighter sm:mr-20 sm:w-auto text-blueGray-700">
                        <h2 className="mb-4 text-xl font-semibold text-blue-800 sm:text-3xl">Contact</h2>
                        <a href="/">T: +40 753 353 956</a>
                        <a href="/">Email: Kaine@anchor.co</a>
                    </div>
                    <div className="flex flex-col w-40 text-lg font-medium tracking-tighter sm:w-auto text-blueGray-700">
                        <h2 className="mb-4 text-xl font-semibold text-blue-800 sm:text-3xl">Legal</h2>
                        <a href="/">Term</a>
                        <a className="text-lg font-medium tracking-tighter" href="/">
                            Privacy
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-auto mt-4 mb-2 w-52">
                <img src="/share/logo.svg" alt="" />
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-lg font-medium tracking-tighter text-center text-white">DEVELOPED BY KAINESV</p>
                <p className="text-xs font-medium tracking-tighter text-center text-white">Copyright © 2021 Kainé Phạm</p>
            </div>
        </footer>
    );
};

export default Footer;
