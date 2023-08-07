import React from "react";

import ReceiptLayout from "./RecipeLayout";

import '../../Styles/theBestReceipts.css'

const TheBestReceipts = () =>{

    const receipts = [<ReceiptLayout/>,<ReceiptLayout/>,<ReceiptLayout/>]

    return(
        <div className="grid-best-receipt">
            {receipts}
        </div>
    )
}

export default TheBestReceipts