import React, { Component } from 'react';
import { Label, Input, Img, UploadedImg } from '../../../theme';
import user from '../../../../user.svg';

export default class PictureUploader extends Component {
  state = {
    file: '',
    picture: '',
  };

  onFileChange(e) {
    const { onChange } = this.props;
    e.preventDefault();

    const reader = new FileReader();
    const [file] = e.target.files;

    reader.onloadend = () => {
      onChange(reader.result);
    };

    reader.readAsDataURL(file);
  }

  clear = () => {
    const { onChange } = this.props;
    onChange('');
  }

  render() {
    const { value } = this.props;
    return (
      <React.Fragment>
        {
          value
            ? (
              <UploadedImg
                src={value}
                alt="profile"
                onClick={this.clear}
                onKeyPress={() => { }}
              />
            )
            : (
              <Label>
                <Img src={user} alt="user" />
                <Input
                  displaynone="true"
                  id="file-chooser"
                  type="file"
                  onChange={this.onFileChange.bind(this)}
                />
              </Label>
            )
        }
      </React.Fragment>
    );
  }
}
