import PropTypes from 'prop-types';
import React from 'react';

class ModalBody extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    let {children} = this.props;
    return (
      <div className="modal-body">{children}</div>
    );
  }
}

export default ModalBody;