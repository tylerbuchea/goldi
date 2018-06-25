import React from 'react';

import redux from '../redux';
import VideoPlayer from '../components/VideoPlayer';

@redux()
export default class CompanyDetail extends React.PureComponent {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.asyncFetchCompanyDetail({ id });
  }

  renderDetails = data => {
    return (
      <div>
        <div style={{ width: 254 }}>
          <VideoPlayer videoUrl={data.binary} videoStill={data.video_still} />
        </div>
        <br />
        <h4 className="title is-4">Name</h4>
        <p>{data.name}</p>
        <br />
        <h4 className="title is-4">Job Description</h4>
        <p>{data.overview}</p>
        <br />
        <h4 className="title is-4">About the Company</h4>
        <p>{data.about}</p>
        <br />
        <h4 className="title is-4">Company Size</h4>
        <p>{data.size}</p>
        <br />
        <h4 className="title is-4">Job Type</h4>
        <p>{data.plan}</p>
      </div>
    );
  };

  render() {
    const { companyDetail } = this.props;

    return (
      <div className="container">
        <h1 className="title">
          Apply &nbsp;
          {companyDetail.state.loading && (
            <div className="fas fa-spinner fa-spin" />
          )}
        </h1>

        {companyDetail.state.success && this.renderDetails(companyDetail.data)}
        {companyDetail.state.error && (
          <h2>Sorry this company does not exist!</h2>
        )}
      </div>
    );
  }
}
