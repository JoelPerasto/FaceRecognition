import React from 'react';

const SingIn = ({onRouteChange}) => {
    return(
        <article className="br3 dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 white-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 white ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw3 white lh-copy f3" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba b--white bg-transparent hover-bg-white" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw3 white lh-copy f3" htmlFor="password">Password</label>
                        <input className="pa2 input-reset ba b--white bg-transparent hover-bg-white" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="ph3 dim input-reset bn white bg-transparent pointer f2 dib" type="submit" value="Sign in" onClick={() => onRouteChange('home')}/>
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('register')} href="#0" className="f2 link dim white db pointer">Register</p>
                    </div>
                </div>
            </main>
        </article>
    );
}

export default SingIn;