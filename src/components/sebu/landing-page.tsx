import { Logo } from "./logo"

export function LandingPage() {
    return (

        <div className="flex h-screen items-start md:items-center justify-center">
            <div className="flex h-full md:h-[50vh] max-h-[300px] p-8 md:p-0 flex-wrap justify-center">

                <div className="w-48 h-48 mr-0 md:mr-8 ">
                    <Logo className="h-48 w-48 flex-no-shrink" />
                </div>

                <div className="bg-black h-full w-1 mx-8 hidden md:inline-flex"></div>

                <div className="font-arial font-medium text-8xl pt-12 text-center md:text-left">
                    sebu
                    <p className="text-lg lg:text-2xl">information markets</p>
                    <p className="text-sm lg:text-xl pt-20">
                        <a className="underline px-2" href="https://discord.gg/YMDdBKkyYT" target="_blank" rel="noopener">discord</a> &bull;
                        <a className="underline px-2" href="">email</a> &bull;
                        <a className="underline px-2" href="">twitter</a> &bull;
                        <a className="underline px-2" href="">github</a> &bull;
                        <a className="underline px-2" href="">docs</a>
                    </p>

                </div>

            </div>
        </div>
    )
}