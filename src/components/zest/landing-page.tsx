import { Logo } from "./logo"

export function LandingPage() {
    return (
        <div className="flex bg-[#f7efe5]">

            <div className="w-1/4 h-screen relative">
                <div className="absolute top-10 bg-black left-10 h-10 w-full"></div>
                <div className="absolute top-10 bg-black left-10 h-2/3 w-10"></div>
            </div>

            <div className='w-1/2 grid grid-rows-2 justify-start items-end gap-0'>
                <Logo className="items-end" />

                <div className="font-arial font-medium text-8xl grow">
                    zest
                </div>

                <div className="col-span-2 text-right self-start pt-10">
                    <p className="text-4xl">information markets</p>
                    <p className="text-2xl pt-20">
                        <a className="underline px-2" href="">discord</a> &bull; 
                        <a className="underline px-2" href="">email</a> &bull; 
                        <a className="underline px-2" href="">twitter</a>
                    </p>
                </div>

                <div className="col-span-2 text-left">
                </div>
            </div>

            <div className="w-1/4 h-screen relative">
                <div className="absolute bottom-10 bg-black right-10 h-10 w-full"></div>
                <div className="absolute bottom-10 bg-black right-10 h-2/3 w-10"></div>
            </div>

        </div>
    )
}