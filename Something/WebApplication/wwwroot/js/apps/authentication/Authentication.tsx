import * as React from "react";

import { AuthenticationForm } from "./components/AuthenticationForm/AuthenticationForm";
import { Splash } from "./components/Splash/Splash";

import "./../Global.scss";
import "./Authentication.scss";
import { IAuthenticationProps } from "./types/IAuthenticationProps";

export default class Login extends React.Component<{}, {}> {
    public render(): JSX.Element {

        const params:IAuthenticationProps = (window as any).authenticationPageParams as IAuthenticationProps;

        if (!params) {
            return null;
        }

        return <div className="authentication ant-row">
            <AuthenticationForm {...params} />
            <Splash />
        </div>;
    }
}
