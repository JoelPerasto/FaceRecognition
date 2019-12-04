import React from 'react';

const Register = ({onRouteChange}) => {
    return(
        <article className="br3 dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 white-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 white ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw3 white lh-copy f3" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba b--white bg-transparent hover-bg-white" type="text" name="name"  id="name"/>
                    </div>
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
                    <input className="b ph3 pv2 input-reset bn white b--white bg-transparent pointer f2 dib" type="submit" value="Register" onClick={() => onRouteChange('home')}/>
                    </div>
                </div>
            </main>
        </article>
    );
}

export default Register;