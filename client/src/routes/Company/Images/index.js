//Image Cropper

import React, {Component} from 'react';
import {FormGroup, FormText, Input, Label, Col} from 'reactstrap';
import DropzoneComponent from 'react-dropzone-component';

// intl messages
import IntlMessages from '../../../util/IntlMessages';

// page title bar
import PageTitleBar from '../../../components/PageTitleBar/PageTitleBar';

// rct card box
import RctCollapsibleCard
  from '../../../components/RctCollapsibleCard/RctCollapsibleCard';

class Image extends Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      id: '',
    };
    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: 'image/jpeg,image/png,image/gif',
    };

    this.componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: '/',
    };
    this.dropzone = null;
  }

  render () {
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      init: dz => (this.dropzone = dz),
      drop: this.callbackArray,
      addedfile: this.callback,
      success: this.success,
      removedfile: this.removedfile,
    };
    return (
      <div className="dropzone-wrapper">
        <PageTitleBar
          title={<IntlMessages id="sidebar.imageManagement" />}
          match={this.props.match}
        />
        

          <RctCollapsibleCard
           colClasses="col-sm-12 col-md-12 col-lg-12"
            heading={<IntlMessages id="button.uploadImage" />}
            // contentCustomClasses="crop-wrapper"
          >
            <div className="row">
              <Col sm={6}>
                <FormGroup >
                  <Label for="image">Image name:</Label>
                  <Input
                    value={this.state.name}
                    type="text"
                    name="imageName"
                    id="imageName"
                    className="has-input input-lg"
                    placeholder="Flowers"
                    onChange={event =>
                      this.setState ({name: event.target.value})}
                  />
                </FormGroup>
                <Label for="image">Original Image:</Label>
                <DropzoneComponent
                  config={config}
                  eventHandlers={eventHandlers}
                  djsConfig={djsConfig}
                />
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <Label for="image">ID:</Label>
                  <Input
                    value={this.state.id}
                    type="text"
                    name="id"
                    id="id"
                    className="has-input input-lg"
                    placeholder="VDY124589"
                    onChange={event => this.setState ({id: event.target.value})}
                  />
                </FormGroup>
                <Label for="image">Processed Image:</Label>
                <DropzoneComponent
                  config={config}
                  eventHandlers={eventHandlers}
                  djsConfig={djsConfig}
                />
              </Col>
            </div>
          </RctCollapsibleCard>
      </div>
    );
  }
}
export default Image;
