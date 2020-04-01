import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { toAbsoluteUrl } from '../../../_metronic';
import '../../../_metronic/_assets/sass/pages/login/login-1.scss';
import Login from './Login';
import Registration from './Registration';
import ForgotPassword from './ForgotPassword';
import AcceptInvitation from './AcceptInvitation';
import ResetPassword from './ResetPassword';

export default function AuthPage() {
  return (
    <>
      <div className='kt-grid kt-grid--ver kt-grid--root'>
        <div
          id='kt_login'
          className='kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v1'
        >
          <div className='kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop'>
            <div
              className='kt-grid__item  kt-grid kt-grid--hor kt-login__aside'
              style={{}}
            >
              <div className='kt-grid__item'>
                <Link to='/' className='kt-login__logo'>
                  <img
                    alt='Logo'
                    src={toAbsoluteUrl('/media/logos/logo-thecrmnetwork.png')}
                  />
                </Link>
              </div>
              <div
                className='kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver'
                style={{ justifyContent: 'center' }}
              >
                <div className='kt-grid__item kt-grid__item--middle kt-title-container'>
                  <h3 className='kt-login__title'>
                    Welcome to The CRM Network
                  </h3>
                  {/*                  <h4 className="kt-login__subtitle" style={{color: '#67666e'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h4>*/}
                </div>
              </div>
              <div className='kt-grid__item'>
                <div className='kt-login__info'>
                  <div className='kt-login__copyright'>
                    &copy; 2020 The CRM Network
                  </div>
                  <div className='kt-login__menu'>
                    <Link to='/terms' className='kt-link'>
                      Privacy
                    </Link>
                    <Link to='/terms' className='kt-link'>
                      Legal
                    </Link>
                    <Link to='/terms' className='kt-link'>
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper'>
              <Switch>
                <Route path='/auth/login' component={Login} />
                <Route path='/auth/registration' component={Registration} />
                <Route
                  path='/auth/forgot-password'
                  component={ForgotPassword}
                />
                <Route
                  path='/accept-invitation/:id'
                  component={AcceptInvitation}
                />
                <Route
                  path='/reset-password/:id'
                  component={ResetPassword}
                />
                <Redirect from='/auth' exact={true} to='/auth/login' />
                <Redirect to='/auth/login' />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
