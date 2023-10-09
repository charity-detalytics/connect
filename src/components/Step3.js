import React from 'react'
import { toSrcFromName } from '../assets'

export default class Step extends React.Component {
  render() {
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
            3
          </div>
          <div style={{
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: 18,
            color: 'white',
            width: width < 400 ? (width - 26 - 40 - 20) : 300,
          }}>
            Tap on QR code scanner from top right corner of this screen
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            marginTop: 20,
          }}>
            <img
              width={162}
              height={300}
              srcSet={toSrcFromName('qr-code-scanner')}
            />
          </div>
        </div>
      </div>
    )
  }
}
