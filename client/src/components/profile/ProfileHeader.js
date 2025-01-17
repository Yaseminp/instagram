import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.user.name}</h1>
              
                {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
                <p>
                  {isEmpty(profile.website) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.website}
                      target="blank"
                    >
                      <i className="fas fa-globe fa-2x" />
                    </a>
                  )}

                  {isEmpty(
                    profile.social && profile.social.facebook
                  ) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.information.facebook}
                      target="blank"
                    >
                      <i className="fab fa-facebook fa-2x" />
                    </a>
                  )}

                  {isEmpty(
                    profile.social && profile.social.youtube
                  ) ? null : (
                      <a
                        className="text-white p-2"
                        href={profile.information.youtube}
                        target="blank"
                      >
                        <i className="fab fa-youtube fa-2x" />
                      </a>
                    )}
                </p>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
