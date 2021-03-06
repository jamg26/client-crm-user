import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import objectPath from 'object-path';
import * as builder from '../../ducks/builder';
import KTToggle from '../../_assets/js/toggle';
import { getBusiness } from '../../../app/services/business.service';

class HeaderMobile extends React.Component {
  toggleButtonRef = React.createRef();

  state = {
    business: {}
  };

  getBusinessDetails = async () => {
    const business = await getBusiness();
    this.setState({ business: business.data });
  };

  componentDidMount() {
    new KTToggle(this.toggleButtonRef.current, this.props.toggleOptions);
    this.getBusinessDetails();
  }

  render() {
    const {
      //headerLogo,
      asideDisplay,
      headerMenuSelfDisplay,
      headerMobileCssClasses,
      headerMobileAttributes
    } = this.props;
    return (
      <div
        id='kt_header_mobile'
        className={`kt-header-mobile ${headerMobileCssClasses}`}
        {...headerMobileAttributes}
      >
        <div
          className='kt-header-mobile__logo'
          style={{
            objectFit: 'cover',
            width: '10%',
            height: '65px'
          }}
        >
          <Link to='/'>
            <img
              alt='logo'
              width='100%'
              height='100%'
              src={this.state.business.logoUrl || this.props.headerLogo}
            />
          </Link>
        </div>

        <div className='kt-header-mobile__toolbar'>
          {asideDisplay && (
            <button
              className='kt-header-mobile__toggler kt-header-mobile__toggler--left'
              id='kt_aside_mobile_toggler'
            >
              <span />
            </button>
          )}

          {headerMenuSelfDisplay && (
            <button
              className='kt-header-mobile__toggler'
              id='kt_header_mobile_toggler'
            >
              <span />
            </button>
          )}

          <button
            ref={this.toggleButtonRef}
            className='kt-header-mobile__topbar-toggler'
            id='kt_header_mobile_topbar_toggler'
          >
            <i className='flaticon-more' />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  headerLogo: builder.selectors.getStickyLogo(store),
  asideDisplay: objectPath.get(
    store.builder.layoutConfig,
    'aside.self.display'
  ),
  headerMenuSelfDisplay:
    objectPath.get(store.builder.layoutConfig, 'header.menu.self.display') ===
    true,
  toggleOptions: {
    target: 'body',
    targetState: 'kt-header__topbar--mobile-on',
    togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
  },
  headerMobileCssClasses: builder.selectors.getClasses(store, {
    path: 'header_mobile',
    toString: true
  }),
  headerMobileAttributes: builder.selectors.getAttributes(store, {
    path: 'aside_menu'
  })
});

export default connect(mapStateToProps)(HeaderMobile);
