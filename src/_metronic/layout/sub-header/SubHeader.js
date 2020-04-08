/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import objectPath from 'object-path';
import { withRouter, useHistory } from 'react-router-dom';
import { QuickActions } from './components/QuickActions';
import { LayoutContextConsumer } from '../LayoutContext';
import { ReactComponent as SortNum1Icon } from '../../../_metronic/layout/assets/layout-svg-icons/SortNum1.svg';
import * as builder from '../../ducks/builder';
import { titleCase, removeWhiteSpace } from '../../utils/utils';
// import BreadCrumbs from "./components/BreadCrumbs";

class SubHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.addNew = this.addNew.bind(this);
  }

  addNew() {
    let title = this.props.location.pathname.replace(/[^a-zA-Z ]/g, ' ');
    this.setState({ title: title });
    let newTitle = removeWhiteSpace(title);
    switch (newTitle) {
      case 'account':
        this.props.history.push('/account/register');
        break;
      case 'accountregister':
        this.props.history.push('/account');
        break;
      default:
        this.props.history.push('/dashboard');
    }
  }

  verifyTitle() {
    let title = removeWhiteSpace(this.state.title);
    return title.includes('create');
  }

  render() {
    const {
      subheaderCssClasses,
      subheaderContainerCssClasses,
      subheaderMobileToggle
    } = this.props;

    return (
      <div
        id='kt_subheader'
        className={`kt-subheader ${subheaderCssClasses} kt-grid__item`}
      >
        <div className={`kt-container ${subheaderContainerCssClasses}`}>
          <div className='kt-subheader__main'>
            {subheaderMobileToggle && (
              <button
                className='kt-subheader__mobile-toggle kt-subheader__mobile-toggle--left'
                id='kt_subheader_mobile_toggle'
              >
                <span />
              </button>
            )}

            <LayoutContextConsumer>
              {/*{({ subheader: { title, breadcrumb } }) => (*/}

              {({ subheader: { title } }) => (
                <>
                  <h3 className='kt-subheader__title'>
                    {title ? title : titleCase(this.state.title)}
                  </h3>
                  {/*<BreadCrumbs items={breadcrumb} />*/}
                </>
              )}
            </LayoutContextConsumer>

            <span className='kt-subheader__separator kt-subheader__separator--v' />
            <span className='kt-subheader__desc'></span>
            {/* <a
              href=""
              className="btn btn-label-warning btn-bold btn-sm btn-icon-h kt-margin-l-10"
            >
              Add New
            </a> */}
            {/* <button
              onClick={this.addNew} 
              type="button"
              className="btn btn-label-warning btn-bold btn-sm btn-icon-h kt-margin-l-10">
                 Add new
              </button> */}
          </div>

          {/* <div className="kt-subheader__toolbar">
            <div className="kt-subheader__wrapper">
              <button type="button" className="btn kt-subheader__btn-primary">
                Actions &nbsp;
                <SortNum1Icon className="kt-svg-icon kt-svg-icon--sm" />
              </button>
              <QuickActions />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  config: store.builder.layoutConfig,
  menuConfig: store.builder.menuConfig,
  subheaderMobileToggle: objectPath.get(
    store.builder.layoutConfig,
    'subheader.mobile-toggle'
  ),
  subheaderCssClasses: builder.selectors.getClasses(store, {
    path: 'subheader',
    toString: true
  }),
  subheaderContainerCssClasses: builder.selectors.getClasses(store, {
    path: 'subheader_container',
    toString: true
  })
});

export default withRouter(connect(mapStateToProps)(SubHeader));
