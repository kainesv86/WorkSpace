import * as React from "react";

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
        return (
                <footer className="bottom-0 right-0 flex flex-col items-center justify-center w-full py-16 mt-32 bg-amber-400">
                        <div className="mb-8">
                                <img src="/share/logo.svg" alt="" />
                        </div>
                        <div className="flex flex-col sm:flex-row">
                                <div className="flex items-start justify-center mb-4 mr-0 sm:mr-20 sm:mb-0">
                                        <div className="flex flex-col w-40 mr-4 sm:mr-20 sm:w-auto">
                                                <h2 className="mb-4 text-xl font-bold text-white sm:text-3xl">
                                                        About us
                                                </h2>
                                                <a className="text-lg font-medium tracking-tighter text-white" href="/">
                                                        Pham Vinh Tai
                                                </a>
                                                <a className="text-lg font-medium tracking-tighter text-white" href="/">
                                                        Pham Phu Hung
                                                </a>
                                                <a className="text-lg font-medium tracking-tighter text-white" href="/">
                                                        Nguyen Cong Huy
                                                </a>
                                                <a className="text-lg font-medium tracking-tighter text-white" href="/">
                                                        Nguyen Bao Toan
                                                </a>
                                                <a
                                                        className="text-lg font-medium tracking-tighter text-white "
                                                        href="/"
                                                >
                                                        Huynh Ngo Gia Bao
                                                </a>
                                                <a
                                                        className="text-lg font-medium tracking-tighter text-white "
                                                        href="/"
                                                >
                                                        Le Ha Duy
                                                </a>
                                        </div>
                                        <div className="flex flex-col w-40 sm:w-auto">
                                                <h2 className="mb-4 text-xl font-bold text-white sm:text-3xl">
                                                        Social Media
                                                </h2>
                                                <a className="text-lg font-medium tracking-tighter text-white" href="/">
                                                        Facebook
                                                </a>
                                                <a className="text-lg font-medium tracking-tighter text-white" href="/">
                                                        Twitter
                                                </a>
                                                <a className="text-lg font-medium tracking-tighter text-white" href="/">
                                                        Github
                                                </a>
                                                <a className="text-lg font-medium tracking-tighter text-white" href="/">
                                                        Instagram
                                                </a>
                                        </div>
                                </div>
                                <div className="flex items-start justify-center">
                                        <div className="flex flex-col w-40 mr-4 sm:mr-20 sm:w-auto">
                                                <h2 className="mb-4 text-xl font-bold text-white sm:text-3xl">
                                                        Contact
                                                </h2>
                                                <a className="text-lg font-medium tracking-tighter text-white" href="/">
                                                        T: +40 753 353 956
                                                </a>
                                                <a
                                                        className="w-full text-lg font-medium tracking-tighter text-white"
                                                        href="/"
                                                >
                                                        Email: Kaine@workspace.co
                                                </a>
                                        </div>
                                        <div className="flex flex-col w-40 sm:w-auto">
                                                <h2 className="mb-4 text-xl font-bold text-white sm:text-3xl">Legal</h2>
                                                <a className="text-lg font-medium tracking-tighter text-white" href="/">
                                                        Term
                                                </a>
                                                <a className="text-lg font-medium tracking-tighter text-white" href="/">
                                                        Privacy
                                                </a>
                                        </div>
                                </div>
                        </div>
                        <div className="flex flex-col justify-center mt-8">
                                <p className="text-lg font-medium tracking-tighter text-center text-white">
                                        DEVELOPED BY KAINESV
                                </p>
                                <p className="text-lg font-medium tracking-tighter text-center text-white">
                                        Copyright © 2021 Kainé Phạm
                                </p>
                        </div>
                </footer>
        );
};

export default Footer;
