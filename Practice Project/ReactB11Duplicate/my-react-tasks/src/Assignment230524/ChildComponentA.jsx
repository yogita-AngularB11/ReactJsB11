import React from "react";
import ChildComponentB from "./ChildComponentB";

const ChildComponentA=(props)=>{
        console.log(props);
        return (
            <>
                <ChildComponentB myName={props.myName} companyName={props.companyName} personObj={props.personObj} />
            </>
        )
        //Using Object Destructuring
        // const { myName, companyName, personObj } =props;

        // return (
        //     <>
        //         <ChildComponentB myName={myName} companyName={companyName} personObj={personObj} />
        //     </>
        // )
    }

export default ChildComponentA;

