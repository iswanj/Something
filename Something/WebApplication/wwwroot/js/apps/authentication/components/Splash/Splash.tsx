import * as React from "react";
import { PageTypes } from "../../../common/PageTypeEnum";
import "./Splash.scss";

interface ISplashProps {
    pageType: PageTypes;
}

export const Splash: React.SFC<ISplashProps> = (props) => {
    let classes = "Splash ";
    classes = classes.concat(props.pageType === PageTypes.LOGIN ? "Splash--login" : "Splash--register");
    return <div className={classes}>
        <div className="Splash--inner">
        </div>
    </div>;
};
