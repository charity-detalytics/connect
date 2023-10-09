import React from 'react'
import { toSrcFromName } from '../assets'
import QR from './QR'

export default class Step extends React.Component {
  render() {
    let { qrContent } = window
    if (!qrContent) {
      qrContent = ''
    }
    const { width } = this.props

    return (
      <div style={{
        padding: 10,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{
            borderRadius: 20,
            width: 40,
            height: 40,
            backgroundColor: '#50dbe9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: 18,
            marginRight: width < 400 ? 16 : 26,
          }}>
            4
          </div>
          <div style={{
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: 18,
            color: 'white',
            width: 250,
          }}>
            Scan the QR Code below:
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <div style={{
            marginTop: 20,
            width: width < 400 ? (width - 30) : 316,
            height: width < 400 ? (width - 30) : 316,
            borderRadius: 32,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
            <QR
              value={qrContent}
            />
          </div>
          <div style={{
            width: width < 400 ? (width - 30) : 316,
            marginTop: 16,
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: 14,
            color: '#babedb',
          }}>
            This QR Code can only be scanned through QR Code scanner from 42 app.
          </div>
        </div>
      </div>
    )
  }
}
