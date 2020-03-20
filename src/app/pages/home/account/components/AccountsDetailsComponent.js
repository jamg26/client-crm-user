import React from "react";

const AccountsDetailsComponent = (props) => {

    return(
        <div>
            <pre className="layout__item u-1/2-lap-and-up">
                {JSON.stringify(props.data, null, 2)}
            </pre>
        </div>
    )

}

export default AccountsDetailsComponent