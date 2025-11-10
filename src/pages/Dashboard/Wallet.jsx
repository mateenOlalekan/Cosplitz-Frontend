import { ChartAreaIcon, TrendingUp } from "lucide-react";

export default function Wallet(){
    return(
        <div className="flex w-full justify-center items-center flex-col">
                <div className="w-full max-w-xl flex flex-col">
                    <div className="flex flex-col justify-center items-center rounded-xl bg-gradient-to-tr from-[#B09D0D] via-[#1F8225] to-[#014205] p-3 text-xl text-white">
                        <p className="text-white text-base md:text-sm">Avaiable Balance</p>
                        <div classname="text-lg font-semibold">$500.30</div>
                        <div classname="text-sm font-light">$58 pending</div>
                        <div className="bflex gap-6">
                            <div className="flex flex-col p-2 bg-white rounded-xl text-black background-transparent-md">
                                <div classname="flex gap-4 items-center">
                                    <TrendingUp/>
                                    <p>Total Saving</p>
                                </div>
                                <div>$1500.68</div>
                            </div>
                            <div className="flex flex-col p-2 bg-white rounded-xl text-black background-transparent-md">
                                <div classname="flex gap-4 items-center">
                                    <TrendingUp/>
                                    <p>Amount saved this month</p>
                                </div>
                                <div>$200.12</div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center rounded-lg bg-white ext-green-500">
                            <div className=" classname">add funds+</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}