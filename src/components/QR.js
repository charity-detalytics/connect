import React from 'react'
import QRCode from 'qrcode.react'

export default class QR extends React.Component {
  render() {
    const { value } = this.props
    return (
      <QRCode
        value={value}
        level='H'
        size={242}
      />
    )
  }
}
