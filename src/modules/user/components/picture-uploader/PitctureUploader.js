import React, { Component } from 'react';

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
      <div>
        {
          value
            ? (
              <img
                src={value}
                alt="profile"
                onClick={this.clear}
                onKeyPress={() => {}}
              />
            )
            : (
              <label htmlFor="file-chooser">
                <i className="li-picture" />
                <div>Upload</div>
                <input
                  id="file-chooser"
                  type="file"
                  onChange={this.onFileChange.bind(this)}
                />
              </label>
            )
        }
      </div>
    );
  }
}
