'use client'

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";


export const WidgetsGrid = () => {

    const isCart = useAppSelector(state => state.counter.count);

    return (
        <div className="flex flex-wrap p-2 justify-center mt-5">

            <SimpleWidget
                title={isCart.toString()}
                subTitle="Products in cart"
                label="Counter"
                icon={ <IoCartOutline size={70} className="text-blue-600" /> }
                />
        </div>
    )

}