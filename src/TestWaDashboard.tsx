import React from "react";

type Props = {
    myRandomNumber: number;
};

const MyComponent: React.FC<Props> = ({myRandomNumber}) => {
    return <>{myRandomNumber}</>;
};

export default MyComponent;