import { Logo } from "./logo"

export function LandingPage() {
    return (

        <div className="flex bg-[#f7efe5] p-4 md:p-10 h-screen lg:min-h-[600px]">

            <div className="h-full relative w-0 invisible lg:visible lg:w-1/4">
                <div className="absolute top-0 bg-black left-0 h-10 w-full"></div>
                <div className="absolute top-0 bg-black left-0 h-2/3 w-10"></div>
            </div>

            <div className='w-full lg:w-1/2 grid grid-rows-2 justify-middle items-end gap-0'>
                <Logo className="items-end col-span-2 lg:col-span-1" />

                <div className="font-arial font-medium text-8xl grow text-center col-span-2 lg:col-span-1">
                    zest
                </div>

                <div className="col-span-2 text-center lg:text-right self-start pt-10">
                    <p className="text-lg lg:text-4xl">information markets</p>
                    <p className="text-sm lg:text-2xl pt-20">
                        <a className="underline px-2" href="https://discord.gg/YMDdBKkyYT" target="_blank" rel="noopener">discord</a> &bull; 
                        <a className="underline px-2" href="">email</a> &bull; 
                        <a className="underline px-2" href="">twitter</a>
                    </p>
                </div>

                <div className="col-span-2 text-left">
                </div>
            </div>

            <div className="h-full relative w-0 invisible lg:visible lg:w-1/4">
                <div className="absolute bottom-0 bg-black right-0 h-10 w-full"></div>
                <div className="absolute bottom-0 bg-black right-0 h-2/3 w-10"></div>
            </div>

        </div>
    )
}